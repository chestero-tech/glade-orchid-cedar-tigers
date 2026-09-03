import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Copy, d as CircleAlert, f as Check, h as ArrowLeft, i as RotateCcw, m as ArrowRight, o as Info, p as BookMarked, u as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as SiteHeader, r as cn, t as Button } from "./site-header-CZYVfahW.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshop-CPfHTk1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-sunken text-fg",
		primary: "bg-primary text-primary-fg",
		warn: "bg-warn-bg text-warn",
		ok: "bg-ok-bg text-ok",
		outline: "border border-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-28 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-base text-fg shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
	...props
}));
Textarea.displayName = "Textarea";
var TAG_CLASS = {
	user: "bg-tip-bg text-primary underline decoration-primary/30 underline-offset-2",
	setting: "bg-tip-bg text-primary underline decoration-primary/30 underline-offset-2",
	symptom: "bg-warn-bg text-warn",
	impact: "bg-warn-bg text-warn",
	constraint: "bg-sunken text-fg ring-1 ring-border",
	criterion: "bg-ok-bg text-ok"
};
function BriefReader({ scenario, interactive = false, selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted",
				children: ["Project brief · ", scenario.course]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-2xl text-fg",
				children: scenario.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[15px] leading-relaxed text-fg",
				children: scenario.spans.map((span, i) => {
					if (!span.tag) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: span.text }, i);
					const clickable = interactive && (span.tag === "constraint" || span.tag === "criterion");
					const pick = span.pick ?? span.text.trim();
					const isOn = selected?.includes(pick);
					if (clickable) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onToggle?.(pick, span.tag),
						className: cn("mx-0.5 inline rounded-sm px-1 py-0.5 text-left align-baseline transition-opacity duration-150", TAG_CLASS[span.tag], isOn && "ring-2 ring-primary"),
						children: span.text
					}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
						className: cn("mx-0.5 rounded-sm px-1 py-0.5", TAG_CLASS[span.tag]),
						children: span.text
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 flex flex-wrap gap-2 text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }), " Who / where"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-warn" }), " Symptom / impact"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-border-strong ring-1 ring-border" }), " Constraint"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-ok" }), " Criterion"]
					})
				]
			}),
			interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Tap a highlighted constraint or criterion in the brief to add it to your list."
			}) : null
		]
	});
}
function ChipToggle({ label, selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": selected,
		className: cn("flex min-h-11 items-start gap-2 rounded-md border px-3 py-2.5 text-left text-sm transition-colors duration-150", selected ? "border-primary bg-tip-bg text-fg" : "border-border bg-surface text-fg hover:bg-sunken"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-xs border", selected ? "border-primary bg-primary text-primary-fg" : "border-border-strong"),
			children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3",
				strokeWidth: 3
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function Coach({ flags }) {
	if (!flags.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: flags.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: cn("flex gap-2.5 rounded-md px-3 py-2.5 text-sm leading-snug", f.tone === "warn" && "bg-warn-bg text-warn", f.tone === "ok" && "bg-ok-bg text-ok", f.tone === "tip" && "bg-tip-bg text-primary"),
			children: [f.tone === "warn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-4 shrink-0" }) : f.tone === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.message })]
		}, i))
	});
}
function Field({ id, label, hint, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: "block text-sm font-medium text-fg",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id,
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				rows: 3
			})
		]
	});
}
var SOLUTION_PATTERNS = [
	{
		re: /\b3[\s-]?d[\s-]?print/i,
		label: "3D printing"
	},
	{
		re: /\bcarbon[\s-]?fiber\b/i,
		label: "carbon fiber"
	},
	{
		re: /\b(arduino|raspberry|esp32|micro:?bit)\b/i,
		label: "a named board"
	},
	{
		re: /\b(servo|stepper|pid controller)\b/i,
		label: "a specific actuator/control"
	},
	{
		re: /\b(buy|purchase|order)\s+a\b/i,
		label: "buying a part"
	},
	{
		re: /\b(install|add|attach|mount)\s+a\b/i,
		label: "installing a named part"
	},
	{
		re: /\bwe need to\s+(print|build|buy|add)\b/i,
		label: "jumping to a build step"
	},
	{
		re: /\bdesign a\s+(bracket|arm|shroud|fan|heater|case|enclosure)\b/i,
		label: "naming the widget"
	}
];
var VAGUE_USER = /^(users?|people|everyone|someone|students|them)\.?$/i;
function solutionHits(text) {
	if (!text.trim()) return [];
	return SOLUTION_PATTERNS.filter((p) => p.re.test(text)).map((p) => p.label);
}
function hasNumber(text) {
	return /\d/.test(text);
}
function splitLines(text) {
	return text.split(/\n|;/g).map((s) => s.replace(/^[\s•\-]+/, "").trim()).filter(Boolean);
}
function allConstraints(draft) {
	return [...draft.constraints, ...splitLines(draft.customConstraints)];
}
function allCriteria(draft) {
	return [...draft.criteria, ...splitLines(draft.customCriteria)];
}
function stitch(draft) {
	const bits = [];
	const who = draft.stakeholder.trim();
	const where = draft.setting.trim();
	if (who && where) bits.push(`For ${who} working in ${where},`);
	else if (who) bits.push(`For ${who},`);
	else if (where) bits.push(`In ${where},`);
	const symptom = draft.symptom.trim();
	if (symptom) {
		const clause = symptom.charAt(0).toLowerCase() + symptom.slice(1);
		bits.push(clause.replace(/\.+$/, "") + ".");
	}
	const root = draft.rootCause.trim();
	if (root) {
		const clause = root.charAt(0).toLowerCase() + root.slice(1);
		bits.push(/^(because|due to|caused)/i.test(root) ? clause.replace(/\.+$/, "") + "." : `The underlying issue is ${clause.replace(/\.+$/, "")}.`);
	}
	const impact = draft.impact.trim();
	if (impact) {
		const clause = impact.charAt(0).toLowerCase() + impact.slice(1);
		bits.push(`This results in ${clause.replace(/\.+$/, "")}.`);
	}
	const goal = draft.objective.trim();
	if (goal) {
		const clause = goal.charAt(0).toLowerCase() + goal.slice(1);
		bits.push(`The objective is to ${clause.replace(/\.+$/, "")}.`);
	}
	const cons = allConstraints(draft);
	if (cons.length) bits.push(`Hard limits: ${cons.join("; ")}.`);
	const crit = allCriteria(draft);
	if (crit.length) bits.push(`Designs will be compared on: ${crit.join("; ")}.`);
	if (!bits.length) return "";
	let text = bits.join(" ");
	text = text.replace(/\s+/g, " ").replace(/\s+([.,;])/g, "$1");
	return text.charAt(0).toUpperCase() + text.slice(1);
}
function flagsForStep(step, draft) {
	const out = [];
	if (step === 1) {
		if (draft.stakeholder.trim() && VAGUE_USER.test(draft.stakeholder.trim())) out.push({
			field: "stakeholder",
			tone: "warn",
			message: "“Students” is a start. Name the course, grade, or job — who actually lives with the problem."
		});
		if (draft.stakeholder.trim() && draft.setting.trim()) out.push({
			field: "context",
			tone: "ok",
			message: "Context is specific enough to start from."
		});
	}
	if (step === 2) {
		if (draft.impact.trim() && !hasNumber(draft.impact)) out.push({
			field: "impact",
			tone: "warn",
			message: "Impact is stronger with a number from the brief (time, cost, scrap rate, DNFs)."
		});
		for (const hit of solutionHits(draft.symptom + " " + draft.rootCause)) out.push({
			field: "current",
			tone: "warn",
			message: `The current-condition box names ${hit}. Describe the failure, not the gadget you already want to build.`
		});
	}
	if (step === 3) {
		const hits = solutionHits(draft.objective);
		for (const hit of hits) out.push({
			field: "objective",
			tone: "warn",
			message: `The goal names ${hit}. Keep it solution-neutral: say what success looks like, not how to build it.`
		});
		if (draft.objective.trim() && hits.length === 0) out.push({
			field: "objective",
			tone: "ok",
			message: "No premature solution spotted. Keep the goal about performance, not parts."
		});
	}
	if (step === 4) {
		if (allConstraints(draft).length < 3) out.push({
			field: "constraints",
			tone: "tip",
			message: "Pull at least three hard limits from the brief — they are written in plain sight."
		});
		if (allCriteria(draft).length < 2) out.push({
			field: "criteria",
			tone: "tip",
			message: "Add at least two criteria so two legal designs can still be ranked."
		});
	}
	return out;
}
function rubric(draft, _scenario) {
	const cons = allConstraints(draft);
	const crit = allCriteria(draft);
	const hits = solutionHits(draft.objective);
	return [
		{
			id: "context",
			label: "Context (who + where)",
			pass: Boolean(draft.stakeholder.trim() && draft.setting.trim() && !VAGUE_USER.test(draft.stakeholder.trim())),
			detail: "Names a real stakeholder and the setting from the brief."
		},
		{
			id: "current",
			label: "Current condition",
			pass: Boolean(draft.symptom.trim() && draft.impact.trim() && hasNumber(draft.impact)),
			detail: "States the symptom and a quantified impact."
		},
		{
			id: "goal",
			label: "Solution-neutral goal",
			pass: Boolean(draft.objective.trim() && hits.length === 0),
			detail: hits.length ? `Drop ${hits.join(", ")} from the objective.` : "Describes success without naming a product."
		},
		{
			id: "bounds",
			label: "Constraints and criteria",
			pass: cons.length >= 3 && crit.length >= 2,
			detail: `${cons.length} constraint${cons.length === 1 ? "" : "s"}, ${crit.length} criterion${crit.length === 1 ? "" : "ia"}.`
		}
	];
}
function score(items) {
	if (!items.length) return 0;
	return Math.round(items.filter((i) => i.pass).length / items.length * 100);
}
var PARTS = [
	{
		key: "c",
		label: "1 · Context",
		when: (d) => Boolean(d.stakeholder.trim() || d.setting.trim())
	},
	{
		key: "n",
		label: "2 · Current",
		when: (d) => Boolean(d.symptom.trim() || d.rootCause.trim() || d.impact.trim())
	},
	{
		key: "d",
		label: "3 · Desired",
		when: (d) => Boolean(d.objective.trim())
	},
	{
		key: "b",
		label: "4 · Boundaries",
		when: (d) => Boolean(d.constraints.length || d.criteria.length || d.customConstraints || d.customCriteria)
	}
];
function LiveStatement({ draft }) {
	const text = stitch(draft);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
				children: "Assembled statement"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: PARTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: p.when(draft) ? "rounded-full bg-primary px-2 py-0.5 text-[11px] font-medium text-primary-fg" : "rounded-full bg-sunken px-2 py-0.5 text-[11px] text-subtle",
					children: p.label
				}, p.key))
			}),
			text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-lg leading-snug text-fg",
				children: text
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: "Each section you finish is stitched here. Start with who and where."
			})
		]
	});
}
var emptyDraft = (scenarioId) => ({
	scenarioId,
	stakeholder: "",
	setting: "",
	symptom: "",
	rootCause: "",
	impact: "",
	objective: "",
	constraints: [],
	customConstraints: "",
	criteria: [],
	customCriteria: ""
});
var SCENARIOS = [{
	id: "vacuum-former",
	title: "TED Lab Vacuum Former",
	course: "Engineering · 9th grade",
	hook: "Plastic sheets heat unevenly, so formed parts fail a third of the time.",
	spans: [
		{ text: "The TED lab uses a tabletop vacuum former so " },
		{
			text: "9th-grade Engineering students",
			tag: "user"
		},
		{ text: " can pull plastic over molds for packaging prototypes. The machine sits on a " },
		{
			text: "24 in × 36 in workbench",
			tag: "setting"
		},
		{ text: " in the shop. During a typical class period, " },
		{
			text: "the plastic sheet heats unevenly: the center sags into a puddle while the edges stay stiff",
			tag: "symptom"
		},
		{ text: ". Formed parts come out paper-thin on one wall and nearly twice as thick on the other. " },
		{
			text: "About 1 in 3 sheets is scrapped. Each failed pull costs six minutes of class time and $1.80 of plastic",
			tag: "impact"
		},
		{ text: ". The former " },
		{
			text: "plugs into a single 120 V / 15 A outlet shared with the shop vac",
			tag: "constraint",
			pick: "Must use a single 120 V / 15 A outlet shared with the shop vac"
		},
		{ text: " and must keep using the " },
		{
			text: "existing vacuum pump and 1.25 in hose",
			tag: "constraint",
			pick: "Must keep the existing vacuum pump and 1.25 in hose"
		},
		{ text: ". Any change must still " },
		{
			text: "form 8.5 in × 11 in PETG or HIPS sheets up to 0.040 in thick",
			tag: "constraint",
			pick: "Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick"
		},
		{ text: ", stay within a " },
		{
			text: "$40 parts budget",
			tag: "constraint",
			pick: "Parts budget cannot exceed $40"
		},
		{ text: ", and be " },
		{
			text: "set up and used by a 9th grader after a 5-minute demo",
			tag: "constraint",
			pick: "A 9th grader must set it up after a 5-minute demo"
		},
		{ text: ". It must " },
		{
			text: "store on the same bench without blocking the aisle",
			tag: "constraint",
			pick: "Must store on the same bench without blocking the aisle"
		},
		{ text: ". Welding and extra 240 V circuits are not available. Designs will be judged on " },
		{
			text: "wall-thickness uniformity",
			tag: "criterion",
			pick: "Maximize wall-thickness uniformity"
		},
		{ text: ", " },
		{
			text: "cycle time",
			tag: "criterion",
			pick: "Minimize cycle time per pull"
		},
		{ text: ", and " },
		{
			text: "how easily the class can store and maintain it",
			tag: "criterion",
			pick: "Ease of storage on the bench"
		},
		{ text: "." }
	],
	constraintBank: [
		"Must fit the existing 24 in × 36 in workbench",
		"Must use a single 120 V / 15 A outlet shared with the shop vac",
		"Must keep the existing vacuum pump and 1.25 in hose",
		"Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick",
		"Parts budget cannot exceed $40",
		"A 9th grader must set it up after a 5-minute demo",
		"Must store on the same bench without blocking the aisle",
		"No welding and no extra 240 V circuit"
	],
	criteriaBank: [
		"Maximize wall-thickness uniformity",
		"Minimize cycle time per pull",
		"Ease of storage on the bench",
		"Ease of maintenance by students"
	],
	placeholders: {
		stakeholder: "Who is stuck with this problem? Be specific.",
		setting: "Where does it happen? Include the bench, lab, or machine.",
		symptom: "What is going wrong, in plain language?",
		rootCause: "What physical or operational flaw sits underneath? (If the brief is silent, say “unknown.”)",
		impact: "What does it cost? Use a number from the brief.",
		objective: "What does success look like — without naming a product or process?"
	},
	model: {
		stakeholder: "9th-grade Engineering students (and the teacher running a 45-minute lab)",
		setting: "the TED lab tabletop vacuum former on a 24 in × 36 in workbench, sharing a 120 V outlet with the shop vac",
		symptom: "the plastic sheet heats unevenly: the center sags while the edges stay stiff, so formed walls are paper-thin on one side and nearly twice as thick on the other",
		rootCause: "heat is not delivered uniformly across the 8.5 in × 11 in sheet before the vacuum is pulled",
		impact: "about 1 in 3 sheets is scrapped, wasting six minutes of class time and $1.80 of plastic per failed pull",
		objective: "bring the full sheet to a forming-ready temperature so wall thickness stays consistent enough for packaging prototypes",
		constraints: [
			"Must fit the existing 24 in × 36 in workbench",
			"Must use a single 120 V / 15 A outlet shared with the shop vac",
			"Must keep the existing vacuum pump and 1.25 in hose",
			"Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick",
			"Parts budget cannot exceed $40",
			"A 9th grader must set it up after a 5-minute demo",
			"Must store on the same bench without blocking the aisle",
			"No welding and no extra 240 V circuit"
		],
		customConstraints: "",
		criteria: [
			"Maximize wall-thickness uniformity",
			"Minimize cycle time per pull",
			"Ease of storage on the bench"
		],
		customCriteria: ""
	}
}, {
	id: "solar-car",
	title: "Solar Car Sensor Shake",
	course: "Engineering · 9th grade",
	hook: "Chassis flex dumps noise into the IMU, so the car cannot hold a line.",
	spans: [
		{ text: "The class solar car is driven by " },
		{
			text: "two student teams during outdoor time trials",
			tag: "user"
		},
		{ text: " on the " },
		{
			text: "paved teacher-lot course in full sun and 5–15 mph gusts",
			tag: "setting"
		},
		{ text: ". " },
		{
			text: "During rapid directional changes, the chassis flexes and the MPU-6050 accelerometer reports vibrational noise, so the car weaves off the painted line",
			tag: "symptom"
		},
		{ text: ". " },
		{
			text: "Time trials lose an average of 4.2 seconds per 50 m run, and 2 of 6 heats last week were DNF",
			tag: "impact"
		},
		{ text: ". The modification " },
		{
			text: "must not increase overall vehicle mass by more than 10%",
			tag: "constraint",
			pick: "Must not increase overall vehicle mass by more than 10%"
		},
		{ text: ", " },
		{
			text: "must use the existing ESP32 microcontroller pins",
			tag: "constraint",
			pick: "Must use the existing ESP32 microcontroller pins"
		},
		{ text: ", " },
		{
			text: "must keep the 6 V solar array and stock gearmotor",
			tag: "constraint",
			pick: "Must keep the 6 V solar array and stock gearmotor"
		},
		{ text: ", and " },
		{
			text: "must be removable in under 10 minutes so the chassis can still fit the storage bin",
			tag: "constraint",
			pick: "Must be removable in under 10 minutes"
		},
		{ text: ". Parts must stay inside a " },
		{
			text: "$25 team budget",
			tag: "constraint",
			pick: "Team parts budget cannot exceed $25"
		},
		{ text: ". Designs will be judged on " },
		{
			text: "heading stability under peak dynamic torque of 5 N·m",
			tag: "criterion",
			pick: "Stabilize the sensor array under 5 N·m peak dynamic torque"
		},
		{ text: ", " },
		{
			text: "added mass",
			tag: "criterion",
			pick: "Minimize added mass"
		},
		{ text: ", and " },
		{
			text: "how quickly another team can install it",
			tag: "criterion",
			pick: "Minimize install time for another team"
		},
		{ text: "." }
	],
	constraintBank: [
		"Must not increase overall vehicle mass by more than 10%",
		"Must use the existing ESP32 microcontroller pins",
		"Must keep the 6 V solar array and stock gearmotor",
		"Must be removable in under 10 minutes",
		"Must still fit the class storage bin",
		"Team parts budget cannot exceed $25"
	],
	criteriaBank: [
		"Stabilize the sensor array under 5 N·m peak dynamic torque",
		"Minimize added mass",
		"Minimize install time for another team",
		"Maximize heading stability on the painted line"
	],
	placeholders: {
		stakeholder: "Who is racing or maintaining the car?",
		setting: "Where do time trials happen? Include surface and weather.",
		symptom: "What is the car doing wrong, and what sensor is involved?",
		rootCause: "What is flexing, vibrating, or shifting?",
		impact: "Quote a time, DNF count, or other number from the brief.",
		objective: "Name the outcome (stable sensing / heading) — not a part to print."
	},
	model: {
		stakeholder: "two student solar-car teams running outdoor time trials",
		setting: "the paved teacher-lot course, in full sun with 5–15 mph gusts",
		symptom: "rapid directional changes flex the chassis and dump vibrational noise into the MPU-6050, so the car weaves off the painted line",
		rootCause: "structural chassis flex reaches the IMU mount under dynamic load",
		impact: "time trials lose an average of 4.2 seconds per 50 m run, and 2 of 6 heats last week were DNF",
		objective: "keep the sensor array stable under a peak dynamic torque of 5 N·m so heading holds the painted line",
		constraints: [
			"Must not increase overall vehicle mass by more than 10%",
			"Must use the existing ESP32 microcontroller pins",
			"Must keep the 6 V solar array and stock gearmotor",
			"Must be removable in under 10 minutes",
			"Must still fit the class storage bin",
			"Team parts budget cannot exceed $25"
		],
		customConstraints: "",
		criteria: [
			"Stabilize the sensor array under 5 N·m peak dynamic torque",
			"Minimize added mass",
			"Minimize install time for another team"
		],
		customCriteria: ""
	}
}];
function getScenario(id) {
	return SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];
}
var useWorkshop = create()(persist((set, get) => ({
	step: 0,
	draft: emptyDraft(SCENARIOS[0].id),
	setStep: (step) => set({ step }),
	setScenario: (id) => set({
		draft: emptyDraft(id),
		step: 0
	}),
	patch: (partial) => set({ draft: {
		...get().draft,
		...partial
	} }),
	toggleConstraint: (value) => {
		const cur = get().draft.constraints;
		const next = cur.includes(value) ? cur.filter((c) => c !== value) : [...cur, value];
		set({ draft: {
			...get().draft,
			constraints: next
		} });
	},
	toggleCriterion: (value) => {
		const cur = get().draft.criteria;
		const next = cur.includes(value) ? cur.filter((c) => c !== value) : [...cur, value];
		set({ draft: {
			...get().draft,
			criteria: next
		} });
	},
	loadModel: () => {
		const s = getScenario(get().draft.scenarioId);
		set({
			draft: {
				scenarioId: s.id,
				...s.model
			},
			step: 5
		});
	},
	reset: () => set({
		draft: emptyDraft(get().draft.scenarioId),
		step: 0
	}),
	scenario: () => getScenario(get().draft.scenarioId)
}), {
	name: "north-star-workshop",
	skipHydration: true
}));
var STEPS = [
	{
		id: 0,
		label: "Brief",
		title: "Read the brief first",
		teach: "The limits are not hidden. Budget, power, size, and who can use it are written in the open. You will quote them later — do not skip this page."
	},
	{
		id: 1,
		label: "Context",
		title: "Who, and where",
		teach: "Establish background so a stranger knows why this is worth solving. Name the stakeholder and the physical or operational setting."
	},
	{
		id: 2,
		label: "Current",
		title: "What is failing",
		teach: "Describe the current reality: the symptom, the root cause if known, and a quantified impact. Do not prescribe the fix."
	},
	{
		id: 3,
		label: "Desired",
		title: "What success looks like",
		teach: "The goal must be solution-neutral. “Support 50 lb” is allowed. “Design a 3D-printed bracket” is not — it locks the team into a process."
	},
	{
		id: 4,
		label: "Bounds",
		title: "Hard limits and judging",
		teach: "Constraints cannot be broken. Criteria decide which legal design is better. Click the highlighted phrases in the brief, or tick the bank."
	},
	{
		id: 5,
		label: "Statement",
		title: "Your North Star",
		teach: "Four sections, one paragraph. Copy it into your notebook, print it, or send it with the project. The rubric on the right is the same one used in class."
	}
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
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useWorkshop.persist.onFinishHydration(() => setReady(true));
		useWorkshop.persist.rehydrate();
		if (useWorkshop.persist.hasHydrated()) setReady(true);
		return unsub;
	}, []);
	const meta = STEPS[step];
	const flags = (0, import_react.useMemo)(() => flagsForStep(step, draft), [step, draft]);
	const items = (0, import_react.useMemo)(() => rubric(draft, scenario), [draft, scenario]);
	const pct = score(items);
	const assembled = stitch(draft);
	function next() {
		setStep(Math.min(5, step + 1));
	}
	function back() {
		setStep(Math.max(0, step - 1));
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
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { compact: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-6 py-16 text-sm text-muted",
			children: "Loading workshop…"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { compact: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print border-b border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 sm:px-6",
					"aria-label": "Workshop steps",
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStep(s.id),
						className: cn("h-10 shrink-0 rounded-md px-3 text-sm font-medium", step === s.id ? "bg-primary text-primary-fg" : "text-muted hover:bg-sunken"),
						children: s.label
					}, s.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
								children: [
									"Step ",
									step + 1,
									" of ",
									STEPS.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl sm:text-4xl",
								children: meta.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: meta.teach
							})
						] }),
						step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setScenario(s.id),
									className: cn("rounded-md border px-3 py-2 text-sm", draft.scenarioId === s.id ? "border-primary bg-tip-bg" : "border-border bg-surface hover:bg-sunken"),
									children: s.title
								}, s.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefReader, { scenario })]
						}) : null,
						step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "stakeholder",
								label: "Target user / stakeholder",
								hint: "Who is suffering from the problem?",
								placeholder: scenario.placeholders.stakeholder,
								value: draft.stakeholder,
								onChange: (v) => patch({ stakeholder: v })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "setting",
								label: "Environment / setting",
								hint: "Physical or operational conditions — bench, weather, voltage, class period.",
								placeholder: scenario.placeholders.setting,
								value: draft.setting,
								onChange: (v) => patch({ setting: v })
							})]
						}) : null,
						step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "symptom",
									label: "The symptom",
									hint: "What is going wrong right now?",
									placeholder: scenario.placeholders.symptom,
									value: draft.symptom,
									onChange: (v) => patch({ symptom: v })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "root",
									label: "Root cause (if known)",
									hint: "Physical, chemical, or operational flaw — not the product you want to build.",
									placeholder: scenario.placeholders.rootCause,
									value: draft.rootCause,
									onChange: (v) => patch({ rootCause: v })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "impact",
									label: "The impact",
									hint: "Quantify it. The brief already gave you numbers.",
									placeholder: scenario.placeholders.impact,
									value: draft.impact,
									onChange: (v) => patch({ impact: v })
								})
							]
						}) : null,
						step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 rounded-xl border border-border bg-surface p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "objective",
								label: "The objective",
								hint: "Ideal operational outcome. If you can see the shopping cart in the sentence, rewrite it.",
								placeholder: scenario.placeholders.objective,
								value: draft.objective,
								onChange: (v) => patch({ objective: v })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-sunken px-3 py-3 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-fg",
									children: "Solution neutrality"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1",
									children: "Bad: “Design a 3D-printed bracket.” Good: “Design a mounting interface that supports 50 lb.”"
								})]
							})]
						}) : null,
						step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefReader, {
									scenario,
									interactive: true,
									selected: [...draft.constraints, ...draft.criteria],
									onToggle: (value, kind) => {
										if (kind === "constraint") toggleConstraint(value);
										else toggleCriterion(value);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl",
											children: "Constraints · hard limits"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: "Absolute rules. Break one and the design is illegal."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 grid gap-2",
											children: scenario.constraintBank.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipToggle, {
												label: c,
												selected: draft.constraints.includes(c),
												onToggle: () => toggleConstraint(c)
											}, c))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "custom-c",
											className: "mt-4 block text-sm font-medium",
											children: "Extra constraint (optional)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "custom-c",
											className: "mt-2",
											rows: 2,
											placeholder: "One per line, only if it is truly in the brief.",
											value: draft.customConstraints,
											onChange: (e) => patch({ customConstraints: e.target.value })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl",
											children: "Criteria · how we judge"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: "Soft goals. Two designs can both be legal; criteria pick the better one."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 grid gap-2",
											children: scenario.criteriaBank.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipToggle, {
												label: c,
												selected: draft.criteria.includes(c),
												onToggle: () => toggleCriterion(c)
											}, c))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "custom-k",
											className: "mt-4 block text-sm font-medium",
											children: "Extra criterion (optional)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "custom-k",
											className: "mt-2",
											rows: 2,
											placeholder: "e.g. Minimize noise at the bench",
											value: draft.customCriteria,
											onChange: (e) => patch({ customCriteria: e.target.value })
										})
									]
								})
							]
						}) : null,
						step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "print-sheet rounded-xl border border-border bg-surface p-6 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
										children: scenario.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-2xl",
										children: "Engineering problem statement"
									}),
									assembled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg leading-relaxed",
										children: assembled
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-muted",
										children: "Nothing to stitch yet. Go back and fill the four sections."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-6 grid gap-4 border-t border-border pt-4 text-sm sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-medium text-muted",
											children: "Constraints"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-fg",
											children: allConstraints(draft).length ? allConstraints(draft).join(" · ") : "None yet"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-medium text-muted",
											children: "Criteria"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-fg",
											children: allCriteria(draft).length ? allCriteria(draft).join(" · ") : "None yet"
										})] })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "no-print flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: copyText,
										disabled: !assembled,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied" : "Copy statement"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										onClick: () => window.print(),
										children: "Print"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										onClick: loadModel,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "size-4" }), "Show a model answer"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										onClick: reset,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Start over"]
									})
								]
							})]
						}) : null,
						step > 0 && step < 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coach, { flags }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "no-print flex flex-wrap items-center justify-between gap-3 pt-2",
							children: [step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Home"]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: back,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back"]
							}), step < 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: next,
								children: [step === 0 ? "Start writing" : "Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: scenario.course
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "no-print space-y-4 lg:sticky lg:top-4 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveStatement, { draft }), step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
								children: "Rubric"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-sm tabular-nums text-fg",
								children: [pct, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: item.pass ? "font-medium text-ok" : "font-medium text-warn",
									children: [
										item.pass ? "Pass" : "Not yet",
										" · ",
										item.label
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: item.detail
								})]
							}, item.id))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-sm text-muted lg:block",
						children: "Drafts stay on this device. Switching briefs clears the form so you do not mix two problems."
					})]
				})]
			})
		]
	});
}
//#endregion
export { Workshop as component };
