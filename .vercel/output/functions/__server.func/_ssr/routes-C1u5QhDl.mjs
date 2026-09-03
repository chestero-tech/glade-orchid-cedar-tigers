import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPinned, l as Compass, m as ArrowRight, n as Target, r as Scale, s as Flag } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, r as cn, t as Button } from "./site-header-CZYVfahW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C1u5QhDl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PILLARS = [
	{
		n: "01",
		title: "Context",
		sub: "The who and where",
		icon: MapPinned,
		body: "Name the person stuck with the problem and the place it happens. A “user” is not enough — a 9th-grade TED student at a 24-inch bench is."
	},
	{
		n: "02",
		title: "Current condition",
		sub: "The what and why",
		icon: Flag,
		body: "State the symptom, the root cause if you know it, and the impact with a number. Downtime, scrap, seconds lost — pick something you can measure."
	},
	{
		n: "03",
		title: "Desired state",
		sub: "The goal, not the gadget",
		icon: Target,
		body: "Say what success looks like. Never name the build. “Support 50 lb” is a goal. “3D-print a carbon-fiber arm” is a solution wearing a costume."
	},
	{
		n: "04",
		title: "Boundaries",
		sub: "Constraints and criteria",
		icon: Scale,
		body: "Constraints are hard limits you cannot break. Criteria are how you rank two legal designs. Both come from the brief — they are not invented later."
	}
];
var WARMUP = [{
	id: "bad",
	label: "Prescribes a solution",
	text: "We need to 3D print a stronger carbon-fiber arm for the two-wheeled balancing drone so the IMU doesn’t break when it falls over."
}, {
	id: "good",
	label: "True engineering statement",
	text: "During rapid directional changes, chassis flex dumps vibrational noise into the MPU-6050, causing balancing instability. The objective is to stabilize the sensor array under a peak dynamic torque of 5 N·m. Mass may not rise more than 10%, and the existing ESP32 pins must be used."
}];
function Home() {
	const [pick, setPick] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: "Engineering · problem framing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl leading-[1.08] text-fg sm:text-5xl",
						children: "An effective problem statement is a project’s North Star."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-muted",
						children: "It names a real-world issue without jumping to a premature solution. You will read a brief with obvious limits, write four sections, and watch them stitch into one statement your teacher can score."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workshop",
								children: ["Open the workshop", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#warmup",
								children: "Try the warmup"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
					children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: p.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
								className: "mt-4 size-5 text-primary",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-2xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-muted",
								children: p.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: p.body
							})
						]
					}, p.n))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "warmup",
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
						children: "Thirty-second warmup"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl",
						children: "Which statement is actually engineering?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "One of these locks the class into a printer and a material. The other defines the failure, the goal, and the rules. Tap the one you would put on a design brief."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-2",
						children: WARMUP.map((w) => {
							const selected = pick === w.id;
							const reveal = pick !== null;
							const correct = w.id === "good";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPick(w.id),
								className: cn("rounded-xl border p-5 text-left shadow-soft transition-colors duration-150", selected ? "border-primary bg-surface" : "border-border bg-surface hover:bg-sunken", reveal && correct && "border-ok", reveal && selected && !correct && "border-warn"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs font-medium uppercase tracking-[0.12em] text-muted",
										children: ["Statement ", w.id === "bad" ? "A" : "B"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-fg",
										children: w.text
									}),
									reveal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("mt-4 text-sm font-medium", correct ? "text-ok" : "text-warn"),
										children: correct ? "This one. Failure, goal, mass cap, existing pins — no printer required." : "This names 3D printing and carbon fiber. That is a solution, not a problem."
									}) : null
								]
							}, w.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-primary text-primary-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
							className: "mt-1 size-6 shrink-0",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Write one for class."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-primary-fg/75",
							children: "The workshop brief is loaded with hard limits on purpose. Your job is to notice them, not invent new ones."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "secondary",
						className: "bg-primary-fg text-primary hover:opacity-90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/workshop",
							children: ["Start from a brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				})
			})
		] })]
	});
}
//#endregion
export { Home as component };
