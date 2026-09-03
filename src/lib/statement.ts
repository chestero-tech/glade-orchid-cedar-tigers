import type { Draft, Scenario } from "./prompts";

const SOLUTION_PATTERNS: { re: RegExp; label: string }[] = [
  { re: /\b3[\s-]?d[\s-]?print/i, label: "3D printing" },
  { re: /\bcarbon[\s-]?fiber\b/i, label: "carbon fiber" },
  { re: /\b(arduino|raspberry|esp32|micro:?bit)\b/i, label: "a named board" },
  { re: /\b(servo|stepper|pid controller)\b/i, label: "a specific actuator/control" },
  { re: /\b(buy|purchase|order)\s+a\b/i, label: "buying a part" },
  { re: /\b(install|add|attach|mount)\s+a\b/i, label: "installing a named part" },
  { re: /\bwe need to\s+(print|build|buy|add)\b/i, label: "jumping to a build step" },
  { re: /\bdesign a\s+(bracket|arm|shroud|fan|heater|case|enclosure)\b/i, label: "naming the widget" },
];

const VAGUE_USER = /^(users?|people|everyone|someone|students|them)\.?$/i;

export type Flag = {
  field: string;
  tone: "warn" | "tip" | "ok";
  message: string;
};

export function solutionHits(text: string): string[] {
  if (!text.trim()) return [];
  return SOLUTION_PATTERNS.filter((p) => p.re.test(text)).map((p) => p.label);
}

export function hasNumber(text: string): boolean {
  return /\d/.test(text);
}

export function splitLines(text: string): string[] {
  return text
    .split(/\n|;/g)
    .map((s) => s.replace(/^[\s•\-]+/, "").trim())
    .filter(Boolean);
}

export function allConstraints(draft: Draft): string[] {
  return [...draft.constraints, ...splitLines(draft.customConstraints)];
}

export function allCriteria(draft: Draft): string[] {
  return [...draft.criteria, ...splitLines(draft.customCriteria)];
}

function asClause(raw: string, strips: RegExp[] = []): string {
  let t = raw.trim().replace(/[.]+$/g, "").replace(/\s+/g, " ");
  for (const re of strips) t = t.replace(re, "").trim();
  if (!t) return "";
  if (/^[0-9]/.test(t)) return t;
  return t.charAt(0).toLowerCase() + t.slice(1);
}

export function stitch(draft: Draft): string {
  const bits: string[] = [];
  const who = asClause(draft.stakeholder, [/^(for)\s+/i]);
  const where = asClause(draft.setting, [/^(in|at|on)\s+/i]);
  if (who && where) {
    bits.push(`For ${who} working in ${where},`);
  } else if (who) {
    bits.push(`For ${who},`);
  } else if (where) {
    bits.push(`In ${where},`);
  }

  const symptom = asClause(draft.symptom);
  if (symptom) bits.push(symptom + ".");

  const root = asClause(draft.rootCause, [
    /^(the underlying issue is)\s+/i,
    /^(because|due to|caused by)\s+/i,
  ]);
  if (root) {
    bits.push(
      /^(because|due to|caused)/i.test(draft.rootCause.trim())
        ? root + "."
        : `The underlying issue is ${root}.`,
    );
  }

  const impact = asClause(draft.impact, [/^(this results in|resulting in|which)\s+/i]);
  if (impact) bits.push(`This results in ${impact}.`);

  const goal = asClause(draft.objective, [
    /^(the objective is to)\s+/i,
    /^(the objective is)\s+/i,
    /^(to)\s+/i,
  ]);
  if (goal) bits.push(`The objective is to ${goal}.`);

  const cons = allConstraints(draft);
  if (cons.length) bits.push(`Hard limits: ${cons.join("; ")}.`);

  const crit = allCriteria(draft);
  if (crit.length) bits.push(`Designs will be compared on: ${crit.join("; ")}.`);

  if (!bits.length) return "";
  let text = bits.join(" ");
  text = text.replace(/\s+/g, " ").replace(/\s+([.,;])/g, "$1");
  text = text.replace(/\b(to to|is is|in in)\b/gi, (m) => m.split(" ")[0]!.toLowerCase());
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function flagsForStep(step: number, draft: Draft): Flag[] {
  const out: Flag[] = [];
  const firstPerson = /\b(i think|i want|we should|we need to|we can just)\b/i;

  if (step === 1) {
    if (draft.stakeholder.trim() && VAGUE_USER.test(draft.stakeholder.trim())) {
      out.push({
        field: "stakeholder",
        tone: "warn",
        message: "“Students” is a start. Name the course, grade, or job — copy the who from the brief.",
      });
    }
    if (firstPerson.test(draft.stakeholder + " " + draft.setting)) {
      out.push({
        field: "context",
        tone: "warn",
        message: "Write in third person, like a spec: “9th-grade TED students,” not “we” or “I.”",
      });
    }
    if (draft.stakeholder.trim() && draft.setting.trim() && !VAGUE_USER.test(draft.stakeholder.trim())) {
      out.push({
        field: "context",
        tone: "ok",
        message: "Context is specific enough. Keep the same nouns in the next boxes.",
      });
    }
  }
  if (step === 2) {
    if (draft.symptom.trim() && wordCount(draft.symptom) < 8) {
      out.push({
        field: "symptom",
        tone: "tip",
        message: "Stretch this into a full clause: what fails, and what that looks like. Borrow the brief’s wording.",
      });
    }
    if (draft.impact.trim() && !hasNumber(draft.impact)) {
      out.push({
        field: "impact",
        tone: "warn",
        message: "Impact needs a number from the brief (time, cost, scrap rate, DNFs).",
      });
    }
    if (firstPerson.test(draft.symptom + " " + draft.rootCause + " " + draft.impact)) {
      out.push({
        field: "current",
        tone: "warn",
        message: "Drop “I think / we should.” State the failure as a fact.",
      });
    }
    for (const hit of solutionHits(draft.symptom + " " + draft.rootCause)) {
      out.push({
        field: "current",
        tone: "warn",
        message: `The current-condition box names ${hit}. Describe the failure, not the gadget you already want to build.`,
      });
    }
  }
  if (step === 3) {
    const hits = solutionHits(draft.objective);
    for (const hit of hits) {
      out.push({
        field: "objective",
        tone: "warn",
        message: `The goal names ${hit}. Keep it solution-neutral: start with keep, bring, stabilize, or reduce.`,
      });
    }
    if (draft.objective.trim() && wordCount(draft.objective) < 8) {
      out.push({
        field: "objective",
        tone: "tip",
        message: "Finish the thought: success looks like what, for whom, under what condition?",
      });
    }
    if (draft.objective.trim() && hits.length === 0 && wordCount(draft.objective) >= 8) {
      out.push({
        field: "objective",
        tone: "ok",
        message: "No premature solution spotted. Keep the goal about performance, not parts.",
      });
    }
  }
  if (step === 4) {
    if (allConstraints(draft).length < 3) {
      out.push({
        field: "constraints",
        tone: "tip",
        message: "Pull at least three hard limits from the brief — they are written in plain sight.",
      });
    }
    if (allCriteria(draft).length < 2) {
      out.push({
        field: "criteria",
        tone: "tip",
        message: "Add at least two criteria so two legal designs can still be ranked.",
      });
    }
  }
  return out;
}

export type RubricItem = {
  id: string;
  label: string;
  pass: boolean;
  detail: string;
};

export function rubric(draft: Draft, _scenario: Scenario): RubricItem[] {
  const cons = allConstraints(draft);
  const crit = allCriteria(draft);
  const hits = solutionHits(draft.objective);
  return [
    {
      id: "context",
      label: "Context (who + where)",
      pass: Boolean(draft.stakeholder.trim() && draft.setting.trim() && !VAGUE_USER.test(draft.stakeholder.trim())),
      detail: "Names a real stakeholder and the setting from the brief.",
    },
    {
      id: "current",
      label: "Current condition",
      pass: Boolean(draft.symptom.trim() && draft.impact.trim() && hasNumber(draft.impact)),
      detail: "States the symptom and a quantified impact.",
    },
    {
      id: "goal",
      label: "Solution-neutral goal",
      pass: Boolean(draft.objective.trim() && hits.length === 0),
      detail: hits.length
        ? `Drop ${hits.join(", ")} from the objective.`
        : "Describes success without naming a product.",
    },
    {
      id: "bounds",
      label: "Constraints and criteria",
      pass: cons.length >= 3 && crit.length >= 2,
      detail: `${cons.length} constraint${cons.length === 1 ? "" : "s"}, ${crit.length} criterion${crit.length === 1 ? "" : "ia"}.`,
    },
  ];
}

export function score(items: RubricItem[]): number {
  if (!items.length) return 0;
  return Math.round((items.filter((i) => i.pass).length / items.length) * 100);
}
