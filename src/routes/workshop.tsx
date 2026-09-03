import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  Copy,
  RotateCcw,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BriefReader } from "@/components/workshop/brief-reader";
import { ChipToggle } from "@/components/workshop/chip-toggle";
import { Coach } from "@/components/workshop/coach";
import { Field } from "@/components/workshop/field";
import { LiveStatement } from "@/components/workshop/live-statement";
import { SiteHeader } from "@/components/workshop/site-header";
import { SCENARIOS, getScenario } from "@/lib/prompts";
import {
  allConstraints,
  allCriteria,
  flagsForStep,
  rubric,
  score,
  stitch,
} from "@/lib/statement";
import { useWorkshop, type StepId } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/workshop")({ component: Workshop });

const STEPS: { id: StepId; label: string; title: string; teach: string }[] = [
  {
    id: 0,
    label: "Brief",
    title: "Read the brief first",
    teach: "The limits are not hidden. Budget, power, size, and who can use it are written in the open. You will quote them later — do not skip this page.",
  },
  {
    id: 1,
    label: "Context",
    title: "Who, and where",
    teach: "Establish background so a stranger knows why this is worth solving. Name the stakeholder and the physical or operational setting.",
  },
  {
    id: 2,
    label: "Current",
    title: "What is failing",
    teach: "Describe the current reality: the symptom, the root cause if known, and a quantified impact. Do not prescribe the fix.",
  },
  {
    id: 3,
    label: "Desired",
    title: "What success looks like",
    teach: "The goal must be solution-neutral. “Support 50 lb” is allowed. “Design a 3D-printed bracket” is not — it locks the team into a process.",
  },
  {
    id: 4,
    label: "Bounds",
    title: "Hard limits and judging",
    teach: "Constraints cannot be broken. Criteria decide which legal design is better. Click the highlighted phrases in the brief, or tick the bank.",
  },
  {
    id: 5,
    label: "Statement",
    title: "Your North Star",
    teach: "Four sections, one paragraph. Copy it into your notebook, print it, or send it with the project. The rubric on the right is the same one used in class.",
  },
];

function Workshop() {
  const step = useWorkshop((s) => s.step);
  const draft = useWorkshop((s) => s.draft);
  const setStep = useWorkshop((s) => s.setStep);
  const setScenario = useWorkshop((s) => s.setScenario);
  const patch = useWorkshop((s) => s.patch);
  const toggleConstraint = useWorkshop((s) => s.toggleConstraint);
  const toggleCriterion = useWorkshop((s) => s.toggleCriterion);
  const loadModel = useWorkshop((s) => s.loadModel);
  const reset = useWorkshop((s) => s.reset);
  const scenario = getScenario(draft.scenarioId);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = useWorkshop.persist.onFinishHydration(() => setReady(true));
    void useWorkshop.persist.rehydrate();
    if (useWorkshop.persist.hasHydrated()) setReady(true);
    return unsub;
  }, []);

  const meta = STEPS[step];
  const flags = useMemo(() => flagsForStep(step, draft), [step, draft]);
  const items = useMemo(() => rubric(draft, scenario), [draft, scenario]);
  const pct = score(items);
  const assembled = stitch(draft);

  function next() {
    setStep(Math.min(5, step + 1) as StepId);
  }
  function back() {
    setStep(Math.max(0, step - 1) as StepId);
  }

  async function copyText() {
    if (!assembled) return;
    try {
      await navigator.clipboard.writeText(assembled);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  if (!ready) {
    return (
      <div className="min-h-dvh bg-bg text-fg">
        <SiteHeader compact />
        <p className="px-6 py-16 text-sm text-muted">Loading workshop…</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader compact />

      <div className="no-print border-b border-border bg-surface">
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 sm:px-6" aria-label="Workshop steps">
          {STEPS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStep(s.id)}
              className={cn(
                "h-10 shrink-0 rounded-md px-3 text-sm font-medium",
                step === s.id ? "bg-primary text-primary-fg" : "text-muted hover:bg-sunken",
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Step {step + 1} of {STEPS.length}
            </p>
            <h1 className="mt-1 font-display text-3xl sm:text-4xl">{meta.title}</h1>
            <p className="mt-3 max-w-2xl text-muted">{meta.teach}</p>
          </div>

          {step >= 1 && step <= 3 ? (
            <BriefReader
              scenario={scenario}
              compact
              focus={
                step === 1
                  ? ["user", "setting"]
                  : step === 2
                    ? ["symptom", "impact"]
                    : undefined
              }
            />
          ) : null}

          {step === 0 ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScenario(s.id)}
                    className={cn(
                      "rounded-md border px-3 py-2 text-sm",
                      draft.scenarioId === s.id
                        ? "border-primary bg-tip-bg"
                        : "border-border bg-surface hover:bg-sunken",
                    )}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
              <BriefReader scenario={scenario} />
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft">
              <Field
                id="stakeholder"
                label="Target user / stakeholder"
                hint="Third person, noun phrase. Copy the who from the brief — not “students” or “we.”"
                placeholder={scenario.placeholders.stakeholder}
                starter={scenario.starters.stakeholder}
                example={scenario.model.stakeholder}
                value={draft.stakeholder}
                onChange={(v) => patch({ stakeholder: v })}
              />
              <Field
                id="setting"
                label="Environment / setting"
                hint="Start with the place. Include size, power, weather, or class period from the brief."
                placeholder={scenario.placeholders.setting}
                starter={scenario.starters.setting}
                example={scenario.model.setting}
                value={draft.setting}
                onChange={(v) => patch({ setting: v })}
              />
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft">
              <Field
                id="symptom"
                label="The symptom"
                hint="One full clause: what fails, and what that looks like. Borrow the brief’s verbs."
                placeholder={scenario.placeholders.symptom}
                starter={scenario.starters.symptom}
                example={scenario.model.symptom}
                value={draft.symptom}
                onChange={(v) => patch({ symptom: v })}
              />
              <Field
                id="root"
                label="Root cause (if known)"
                hint="Physical or operational flaw — a fact, not “we should add a fan.”"
                placeholder={scenario.placeholders.rootCause}
                starter={scenario.starters.rootCause}
                example={scenario.model.rootCause}
                value={draft.rootCause}
                onChange={(v) => patch({ rootCause: v })}
              />
              <Field
                id="impact"
                label="The impact"
                hint="Lead with a number from the brief (minutes, dollars, scrap rate, DNFs)."
                placeholder={scenario.placeholders.impact}
                starter={scenario.starters.impact}
                example={scenario.model.impact}
                value={draft.impact}
                onChange={(v) => patch({ impact: v })}
              />
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft">
              <Field
                id="objective"
                label="The objective"
                hint="Start with keep, bring, stabilize, or reduce. If you can see a shopping cart, rewrite it."
                placeholder={scenario.placeholders.objective}
                starter={scenario.starters.objective}
                example={scenario.model.objective}
                value={draft.objective}
                onChange={(v) => patch({ objective: v })}
              />
              <div className="rounded-md bg-sunken px-3 py-3 text-sm text-muted">
                <p className="font-medium text-fg">Solution neutrality</p>
                <p className="mt-1">
                  Bad: “Design a 3D-printed bracket.” Good: “Design a mounting
                  interface that supports 50 lb.”
                </p>
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-5">
              <BriefReader
                scenario={scenario}
                compact
                interactive
                focus={["constraint", "criterion"]}
                selected={[...draft.constraints, ...draft.criteria]}
                onToggle={(value, kind) => {
                  if (kind === "constraint") toggleConstraint(value);
                  else toggleCriterion(value);
                }}
              />
              <div className="rounded-xl border border-border bg-surface p-5 shadow-soft">
                <h2 className="font-display text-xl">Constraints · hard limits</h2>
                <p className="mt-1 text-sm text-muted">Absolute rules. Break one and the design is illegal.</p>
                <div className="mt-4 grid gap-2">
                  {scenario.constraintBank.map((c) => (
                    <ChipToggle
                      key={c}
                      label={c}
                      selected={draft.constraints.includes(c)}
                      onToggle={() => toggleConstraint(c)}
                    />
                  ))}
                </div>
                <label htmlFor="custom-c" className="mt-4 block text-sm font-medium">
                  Extra constraint (optional)
                </label>
                <Textarea
                  id="custom-c"
                  className="mt-2"
                  rows={2}
                  placeholder="One per line, only if it is truly in the brief."
                  value={draft.customConstraints}
                  onChange={(e) => patch({ customConstraints: e.target.value })}
                />
              </div>
              <div className="rounded-xl border border-border bg-surface p-5 shadow-soft">
                <h2 className="font-display text-xl">Criteria · how we judge</h2>
                <p className="mt-1 text-sm text-muted">Soft goals. Two designs can both be legal; criteria pick the better one.</p>
                <div className="mt-4 grid gap-2">
                  {scenario.criteriaBank.map((c) => (
                    <ChipToggle
                      key={c}
                      label={c}
                      selected={draft.criteria.includes(c)}
                      onToggle={() => toggleCriterion(c)}
                    />
                  ))}
                </div>
                <label htmlFor="custom-k" className="mt-4 block text-sm font-medium">
                  Extra criterion (optional)
                </label>
                <Textarea
                  id="custom-k"
                  className="mt-2"
                  rows={2}
                  placeholder="e.g. Minimize noise at the bench"
                  value={draft.customCriteria}
                  onChange={(e) => patch({ customCriteria: e.target.value })}
                />
              </div>
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-5">
              <article className="print-sheet rounded-xl border border-border bg-surface p-6 shadow-soft">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  {scenario.title}
                </p>
                <h2 className="mt-2 font-display text-2xl">Engineering problem statement</h2>
                {assembled ? (
                  <p className="mt-4 text-lg leading-relaxed">{assembled}</p>
                ) : (
                  <p className="mt-4 text-muted">Nothing to stitch yet. Go back and fill the four sections.</p>
                )}
                <dl className="mt-6 grid gap-4 border-t border-border pt-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-muted">Constraints</dt>
                    <dd className="mt-1 text-fg">
                      {allConstraints(draft).length
                        ? allConstraints(draft).join(" · ")
                        : "None yet"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted">Criteria</dt>
                    <dd className="mt-1 text-fg">
                      {allCriteria(draft).length ? allCriteria(draft).join(" · ") : "None yet"}
                    </dd>
                  </div>
                </dl>
              </article>
              <div className="no-print flex flex-wrap gap-2">
                <Button onClick={copyText} disabled={!assembled}>
                  <Copy className="size-4" />
                  {copied ? "Copied" : "Copy statement"}
                </Button>
                <Button variant="outline" onClick={() => window.print()}>
                  Print
                </Button>
                <Button variant="outline" onClick={loadModel}>
                  <BookMarked className="size-4" />
                  Show a model answer
                </Button>
                <Button variant="ghost" onClick={reset}>
                  <RotateCcw className="size-4" />
                  Start over
                </Button>
              </div>
            </div>
          ) : null}

          {step > 0 && step < 5 ? <Coach flags={flags} /> : null}

          <div className="no-print flex flex-wrap items-center justify-between gap-3 pt-2">
            {step === 0 ? (
              <Button asChild variant="ghost">
                <Link to="/">
                  <ArrowLeft className="size-4" />
                  Home
                </Link>
              </Button>
            ) : (
              <Button variant="ghost" onClick={back}>
                <ArrowLeft className="size-4" />
                Back
              </Button>
            )}
            {step < 5 ? (
              <Button onClick={next}>
                {step === 0 ? "Start writing" : "Continue"}
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Badge variant="outline">{scenario.course}</Badge>
            )}
          </div>
        </div>

        <div className="no-print space-y-4 lg:sticky lg:top-4 lg:self-start">
          <LiveStatement draft={draft} />
          {step === 5 ? (
            <div className="rounded-xl border border-border bg-surface p-5 shadow-soft">
              <div className="flex items-baseline justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Rubric</p>
                <p className="font-mono text-sm tabular-nums text-fg">{pct}%</p>
              </div>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item.id} className="text-sm">
                    <p className={item.pass ? "font-medium text-ok" : "font-medium text-warn"}>
                      {item.pass ? "Pass" : "Not yet"} · {item.label}
                    </p>
                    <p className="text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="hidden text-sm text-muted lg:block">
              Drafts stay on this device. Switching briefs clears the form so
              you do not mix two problems.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
