# North Star — reusable prompts

Two prompts. Use **A** to rebuild the whole workshop. Use **B** when you only want new briefs, a new course, or a small change.

Fill every `{{BRACKET}}`. Leave a section blank only if you truly want the builder to improvise.

---

## A. Rebuild the full app

```
Build an interactive classroom website named North Star for 9th-grade Engineering / TED students. It teaches how to write a solution-neutral engineering problem statement and walks each student through one until a single stitched paragraph is ready to copy or print.

PURPOSE
An effective problem statement is a project's North Star. It defines a real-world issue without jumping to a premature solution. Students must never be asked to invent constraints — the brief must already contain obvious, extractable limits.

FOUR CORE FEATURES (these are the workshop steps after the brief)
1. Context (Who and Where)
   - Target user/stakeholder: who is stuck with the problem (not "users" or "students" — grade, course, or job)
   - Environment/setting: physical or operational conditions
2. Current condition (What and Why)
   - Symptom: what is going wrong
   - Root cause if known: physical/chemical/operational flaw, not a product
   - Impact: quantified (time, cost, scrap rate, DNFs)
3. Desired state (the Goal)
   - Objective: ideal operational outcome
   - Solution neutrality is required. "Design a mounting interface that supports 50 lb" is good. "Design a 3D-printed bracket" is bad because it locks the process.
4. Constraints and criteria (the Boundaries)
   - Constraints = hard limits that cannot be broken
   - Criteria = metrics used to rank two legal designs
   - Both must come from the brief, not be invented later

PRODUCT FLOW
- Home: short teaching page. Four pillars. A 30-second warmup: two cards, student taps which statement is real engineering. One card prescribes a solution (3D print / carbon fiber / named part). One card is a true statement (failure + goal + limits, no process). Reveal why after the tap.
- Workshop, six steps: Brief → Context → Current → Desired → Bounds → Statement.
- Sticky live "Assembled statement" panel that stitches whatever they have typed so far.
- Coach flags per step (vague stakeholder, missing number in impact, premature solution words in the goal, fewer than 3 constraints or 2 criteria).
- Final page: full paragraph + listed constraints/criteria + 4-item rubric (pass/not yet) + Copy + Print + Show a model answer + Start over.
- Drafts persist on-device. Switching briefs clears the form so two problems do not mix. No accounts.

BRIEF RULES (critical)
Each scenario is a short narrative packed with extractable facts. Highlight in the brief: user, setting, symptom, impact, constraint, criterion. On the Bounds step, those constraint/criterion phrases are clickable and add the matching bank item. Also show a checkbox bank of the same items plus optional "write your own" lines.

Every brief MUST include at least:
- a named human stakeholder
- a place with size/power/weather or similar
- a failure you can picture
- 2+ numbers for impact
- 5–8 hard constraints a 9th grader can spot without inference (budget, voltage, footprint, existing hardware that must stay, who can operate it, time to set up, storage)
- 3–4 criteria (minimize/maximize/ease of …)

Do not hide the limits. The pedagogy is "notice what is already written."

DEFAULT SCENARIOS (replace these if {{SCENARIOS}} is filled below)
1) TED Lab Vacuum Former — 9th-grade Engineering students, 24×36 in bench, uneven heating, 1 in 3 sheets scrapped, 6 minutes and $1.80 per fail, 120 V / 15 A shared with shop vac, existing pump and 1.25 in hose, 8.5×11 PETG/HIPS to 0.040 in, $40 budget, 5-minute demo, no welding, no 240 V. Criteria: wall-thickness uniformity, cycle time, storage, maintenance.
2) Solar Car Sensor Shake — outdoor time trials, chassis flex dumps noise into MPU-6050, +4.2 s / 50 m, 2 of 6 heats DNF, mass +10% max, existing ESP32 pins, keep 6 V array and stock gearmotor, removable in 10 minutes, storage bin, $25 budget. Criteria: heading stability under 5 N·m, added mass, install time.

Include a model answer for each scenario that is solution-neutral and quotes the numbers.

STITCHING
Assemble one paragraph from the four sections, for example:
"For [stakeholder] working in [setting], [symptom]. The underlying issue is [root cause]. This results in [impact]. The objective is to [objective]. Hard limits: [constraints]. Designs will be compared on: [criteria]."

SOLUTION-NEUTRALITY DETECTOR
Flag (do not block typing) phrases such as: 3D print, carbon fiber, Arduino/Raspberry/ESP32/micro:bit as a proposed add, servo/stepper/PID as the fix, "buy/install/add/attach a …", "we need to print/build/buy/add", "design a bracket/arm/shroud/fan/heater/case". Show a plain-language coach: "This names a solution. Say what success looks like, not how to build it."

RUBRIC (final step, same four features)
- Context pass: stakeholder + setting, stakeholder not just "students/users/people"
- Current pass: symptom + impact that contains a number
- Goal pass: objective filled AND no solution hits
- Bounds pass: ≥3 constraints and ≥2 criteria
Show a percent of those four.

UI / TONE
Editorial engineering-notebook, not a startup landing and not a game. Warm paper #F6F3EC, ink #1C1915, navy steel #243444, muted taupe #6B645A, rust only for warnings #8F4A38, green only for pass #2F5D45. Display type: Instrument Serif. Body: IBM Plex Sans. Lucide icons, no emoji. Mobile-first, tap targets ≥44px, no horizontal overflow. Copy is short, teacherly, no hype.

NO AUTH, NO DATABASE. localStorage is enough.

Audience: {{GRADE_AND_COURSE}}
School/lab flavor: {{SCHOOL_OR_LAB}}
Scenarios to ship (or "use the two defaults"): {{SCENARIOS}}
Anything to change from this spec: {{CHANGES}}
```

---

## B. Swap briefs or patch the live app

```
This is an edit to the existing North Star engineering problem-statement workshop. Do not rebuild from scratch. Keep the four-step pedagogy, stitch panel, coach, rubric, copy/print, on-device drafts, and visual system unless I name a change.

Change type: {{CHANGE_TYPE}}
  (examples: add a brief / replace a brief / retarget course / tweak coach / add a print header / change warmup)

If adding or replacing a brief, supply all of the following. Constraints must be obvious in the prose — a 9th grader should be able to highlight them without guessing.

Title: {{TITLE}}
Course line: {{COURSE}}
Stakeholder: {{WHO}}
Setting: {{WHERE}}
Symptom: {{WHAT_FAILS}}
Root cause (or "unknown"): {{WHY}}
Impact with numbers: {{IMPACT}}
Hard constraints (5–8, quote-ready):
- {{C1}}
- {{C2}}
- {{C3}}
- {{C4}}
- {{C5}}
Criteria (3–4):
- {{K1}}
- {{K2}}
- {{K3}}
Model-answer notes (optional): {{MODEL}}
Remove old briefs?: {{YES_NO_WHICH}}
Other UI/copy changes: {{OTHER}}
```

---

## Quick fill example (B)

```
Change type: add a brief
Title: Shop Dust Collector Hose Collapse
Course: Engineering · 9th grade
Stakeholder: TED students running the table saw during a 45-minute lab
Setting: TED wood shop, 20 ft of 4 in flex hose to a 1.5 hp collector on a 120 V / 20 A circuit
Symptom: the flex hose collapses when the blast gate opens, so chips blow back at the blade
Root cause: the hose walls are too thin for the collector vacuum at full open
Impact: cleanup adds 8 minutes per period; two students needed eye-rinse last week; collector bag is only 40% full because flow is lost
Constraints:
- Must keep the existing 1.5 hp collector and 4 in ports
- Must stay on the current 120 V / 20 A circuit
- Parts budget $35
- A 9th grader must install or reverse it in under 10 minutes
- Must not reduce table-saw table area
- No welding
Criteria:
- Maximize chip capture at the blade
- Minimize added setup time
- Ease of storage on the existing wall hooks
Remove old briefs?: no
Other UI/copy changes: none
```
