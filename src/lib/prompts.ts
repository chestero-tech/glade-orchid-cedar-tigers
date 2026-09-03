export type BriefSpan = {
  text: string;
  tag?: "constraint" | "criterion" | "user" | "setting" | "symptom" | "impact";
  pick?: string;
};


export type FieldKey =
  | "stakeholder"
  | "setting"
  | "symptom"
  | "rootCause"
  | "impact"
  | "objective";

export type Draft = {
  scenarioId: string;
  stakeholder: string;
  setting: string;
  symptom: string;
  rootCause: string;
  impact: string;
  objective: string;
  constraints: string[];
  customConstraints: string;
  criteria: string[];
  customCriteria: string;
};

export type Scenario = {
  id: string;
  title: string;
  course: string;
  hook: string;
  spans: BriefSpan[];
  constraintBank: string[];
  criteriaBank: string[];
  placeholders: Record<FieldKey, string>;
  starters: Record<FieldKey, string>;
  model: Omit<Draft, "scenarioId">;
};

export const emptyDraft = (scenarioId: string): Draft => ({
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
  customCriteria: "",
});

export const SCENARIOS: Scenario[] = [
  {
    id: "vacuum-former",
    title: "TED Lab Vacuum Former",
    course: "Engineering · 9th grade",
    hook: "Plastic sheets heat unevenly, so formed parts fail a third of the time.",
    spans: [
      {
        text: "The TED lab uses a tabletop vacuum former so ",
      },
      { text: "9th-grade Engineering students", tag: "user" },
      {
        text: " can pull plastic over molds for packaging prototypes. The machine sits on a ",
      },
      { text: "24 in × 36 in workbench", tag: "setting" },
      { text: " in the shop. During a typical class period, " },
      {
        text: "the plastic sheet heats unevenly: the center sags into a puddle while the edges stay stiff",
        tag: "symptom",
      },
      {
        text: ". Formed parts come out paper-thin on one wall and nearly twice as thick on the other. ",
      },
      {
        text: "About 1 in 3 sheets is scrapped. Each failed pull costs six minutes of class time and $1.80 of plastic",
        tag: "impact",
      },
      { text: ". The former " },
      { text: "plugs into a single 120 V / 15 A outlet shared with the shop vac", tag: "constraint", pick: "Must use a single 120 V / 15 A outlet shared with the shop vac" },
      { text: " and must keep using the " },
      { text: "existing vacuum pump and 1.25 in hose", tag: "constraint", pick: "Must keep the existing vacuum pump and 1.25 in hose" },
      { text: ". Any change must still " },
      { text: "form 8.5 in × 11 in PETG or HIPS sheets up to 0.040 in thick", tag: "constraint", pick: "Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick" },
      { text: ", stay within a " },
      { text: "$40 parts budget", tag: "constraint", pick: "Parts budget cannot exceed $40" },
      { text: ", and be " },
      { text: "set up and used by a 9th grader after a 5-minute demo", tag: "constraint", pick: "A 9th grader must set it up after a 5-minute demo" },
      { text: ". It must " },
      { text: "store on the same bench without blocking the aisle", tag: "constraint", pick: "Must store on the same bench without blocking the aisle" },
      {
        text: ". Welding and extra 240 V circuits are not available. Designs will be judged on ",
      },
      { text: "wall-thickness uniformity", tag: "criterion", pick: "Maximize wall-thickness uniformity" },
      { text: ", " },
      { text: "cycle time", tag: "criterion", pick: "Minimize cycle time per pull" },
      { text: ", and " },
      { text: "how easily the class can store and maintain it", tag: "criterion", pick: "Ease of storage on the bench" },
      { text: "." },
    ],
    constraintBank: [
      "Must fit the existing 24 in × 36 in workbench",
      "Must use a single 120 V / 15 A outlet shared with the shop vac",
      "Must keep the existing vacuum pump and 1.25 in hose",
      "Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick",
      "Parts budget cannot exceed $40",
      "A 9th grader must set it up after a 5-minute demo",
      "Must store on the same bench without blocking the aisle",
      "No welding and no extra 240 V circuit",
    ],
    criteriaBank: [
      "Maximize wall-thickness uniformity",
      "Minimize cycle time per pull",
      "Ease of storage on the bench",
      "Ease of maintenance by students",
    ],
    placeholders: {
      stakeholder: "Who is stuck with this problem? Be specific.",
      setting: "Where does it happen? Include the bench, lab, or machine.",
      symptom: "What is going wrong, in plain language?",
      rootCause: "What physical or operational flaw sits underneath? (If the brief is silent, say “unknown.”)",
      impact: "What does it cost? Use a number from the brief.",
      objective: "What does success look like — without naming a product or process?",
    },
    starters: {
      stakeholder: "9th-grade Engineering students who ",
      setting: "the TED lab tabletop vacuum former on a ",
      symptom: "the plastic sheet heats unevenly, so ",
      rootCause: "heat is not delivered uniformly across the sheet",
      impact: "about 1 in 3 sheets is scrapped, wasting ",
      objective: "bring the full sheet to a forming-ready temperature so ",
    },
    model: {
      stakeholder:
        "9th-grade Engineering students (and the teacher running a 45-minute lab)",
      setting:
        "the TED lab tabletop vacuum former on a 24 in × 36 in workbench, sharing a 120 V outlet with the shop vac",
      symptom:
        "the plastic sheet heats unevenly: the center sags while the edges stay stiff, so formed walls are paper-thin on one side and nearly twice as thick on the other",
      rootCause:
        "heat is not delivered uniformly across the 8.5 in × 11 in sheet before the vacuum is pulled",
      impact:
        "about 1 in 3 sheets is scrapped, wasting six minutes of class time and $1.80 of plastic per failed pull",
      objective:
        "bring the full sheet to a forming-ready temperature so wall thickness stays consistent enough for packaging prototypes",
      constraints: [
        "Must fit the existing 24 in × 36 in workbench",
        "Must use a single 120 V / 15 A outlet shared with the shop vac",
        "Must keep the existing vacuum pump and 1.25 in hose",
        "Must still form 8.5 in × 11 in PETG or HIPS up to 0.040 in thick",
        "Parts budget cannot exceed $40",
        "A 9th grader must set it up after a 5-minute demo",
        "Must store on the same bench without blocking the aisle",
        "No welding and no extra 240 V circuit",
      ],
      customConstraints: "",
      criteria: [
        "Maximize wall-thickness uniformity",
        "Minimize cycle time per pull",
        "Ease of storage on the bench",
      ],
      customCriteria: "",
    },
  },
  {
    id: "solar-car",
    title: "Solar Car Sensor Shake",
    course: "Engineering · 9th grade",
    hook: "Chassis flex dumps noise into the IMU, so the car cannot hold a line.",
    spans: [
      { text: "The class solar car is driven by " },
      { text: "two student teams during outdoor time trials", tag: "user" },
      { text: " on the " },
      {
        text: "paved teacher-lot course in full sun and 5–15 mph gusts",
        tag: "setting",
      },
      { text: ". " },
      {
        text: "During rapid directional changes, the chassis flexes and the MPU-6050 accelerometer reports vibrational noise, so the car weaves off the painted line",
        tag: "symptom",
      },
      { text: ". " },
      {
        text: "Time trials lose an average of 4.2 seconds per 50 m run, and 2 of 6 heats last week were DNF",
        tag: "impact",
      },
      { text: ". The modification " },
      { text: "must not increase overall vehicle mass by more than 10%", tag: "constraint", pick: "Must not increase overall vehicle mass by more than 10%" },
      { text: ", " },
      { text: "must use the existing ESP32 microcontroller pins", tag: "constraint", pick: "Must use the existing ESP32 microcontroller pins" },
      { text: ", " },
      { text: "must keep the 6 V solar array and stock gearmotor", tag: "constraint", pick: "Must keep the 6 V solar array and stock gearmotor" },
      { text: ", and " },
      { text: "must be removable in under 10 minutes so the chassis can still fit the storage bin", tag: "constraint", pick: "Must be removable in under 10 minutes" },
      { text: ". Parts must stay inside a " },
      { text: "$25 team budget", tag: "constraint", pick: "Team parts budget cannot exceed $25" },
      { text: ". Designs will be judged on " },
      { text: "heading stability under peak dynamic torque of 5 N·m", tag: "criterion", pick: "Stabilize the sensor array under 5 N·m peak dynamic torque" },
      { text: ", " },
      { text: "added mass", tag: "criterion", pick: "Minimize added mass" },
      { text: ", and " },
      { text: "how quickly another team can install it", tag: "criterion", pick: "Minimize install time for another team" },
      { text: "." },
    ],
    constraintBank: [
      "Must not increase overall vehicle mass by more than 10%",
      "Must use the existing ESP32 microcontroller pins",
      "Must keep the 6 V solar array and stock gearmotor",
      "Must be removable in under 10 minutes",
      "Must still fit the class storage bin",
      "Team parts budget cannot exceed $25",
    ],
    criteriaBank: [
      "Stabilize the sensor array under 5 N·m peak dynamic torque",
      "Minimize added mass",
      "Minimize install time for another team",
      "Maximize heading stability on the painted line",
    ],
    placeholders: {
      stakeholder: "Who is racing or maintaining the car?",
      setting: "Where do time trials happen? Include surface and weather.",
      symptom: "What is the car doing wrong, and what sensor is involved?",
      rootCause: "What is flexing, vibrating, or shifting?",
      impact: "Quote a time, DNF count, or other number from the brief.",
      objective: "Name the outcome (stable sensing / heading) — not a part to print.",
    },
    starters: {
      stakeholder: "two student solar-car teams who ",
      setting: "the paved teacher-lot course, in ",
      symptom: "rapid directional changes flex the chassis, so ",
      rootCause: "structural chassis flex reaches the IMU mount under dynamic load",
      impact: "time trials lose an average of 4.2 seconds per 50 m run, and ",
      objective: "keep the sensor array stable under a peak dynamic torque of 5 N·m so ",
    },
    model: {
      stakeholder: "two student solar-car teams running outdoor time trials",
      setting:
        "the paved teacher-lot course, in full sun with 5–15 mph gusts",
      symptom:
        "rapid directional changes flex the chassis and dump vibrational noise into the MPU-6050, so the car weaves off the painted line",
      rootCause:
        "structural chassis flex reaches the IMU mount under dynamic load",
      impact:
        "time trials lose an average of 4.2 seconds per 50 m run, and 2 of 6 heats last week were DNF",
      objective:
        "keep the sensor array stable under a peak dynamic torque of 5 N·m so heading holds the painted line",
      constraints: [
        "Must not increase overall vehicle mass by more than 10%",
        "Must use the existing ESP32 microcontroller pins",
        "Must keep the 6 V solar array and stock gearmotor",
        "Must be removable in under 10 minutes",
        "Must still fit the class storage bin",
        "Team parts budget cannot exceed $25",
      ],
      customConstraints: "",
      criteria: [
        "Stabilize the sensor array under 5 N·m peak dynamic torque",
        "Minimize added mass",
        "Minimize install time for another team",
      ],
      customCriteria: "",
    },
  },
  {
    id: "dust-collector",
    title: "Shop Dust Collector Hose Collapse",
    course: "Engineering · 9th grade",
    hook: "The flex hose collapses at the table saw, so chips blow back at the blade.",
    spans: [
      { text: "During a 45-minute lab, " },
      { text: "TED students running the table saw", tag: "user" },
      { text: " rely on dust collection through " },
      {
        text: "20 ft of 4 in flex hose to a 1.5 hp collector on a 120 V / 20 A circuit",
        tag: "setting",
      },
      { text: ". When the blast gate opens, " },
      {
        text: "the flex hose collapses, so chips blow back at the blade instead of reaching the bag",
        tag: "symptom",
      },
      { text: ". The hose walls cannot hold the collector vacuum at full open. " },
      {
        text: "Cleanup adds 8 minutes per period; two students needed eye-rinse last week; the collector bag is only 40% full because flow is lost",
        tag: "impact",
      },
      { text: ". Any change " },
      {
        text: "must keep the existing 1.5 hp collector and 4 in ports",
        tag: "constraint",
        pick: "Must keep the existing 1.5 hp collector and 4 in ports",
      },
      { text: ", " },
      {
        text: "must stay on the current 120 V / 20 A circuit",
        tag: "constraint",
        pick: "Must stay on the current 120 V / 20 A circuit",
      },
      { text: ", and stay inside a " },
      {
        text: "$35 parts budget",
        tag: "constraint",
        pick: "Parts budget cannot exceed $35",
      },
      { text: ". A " },
      {
        text: "9th grader must install or reverse it in under 10 minutes",
        tag: "constraint",
        pick: "A 9th grader must install or reverse it in under 10 minutes",
      },
      { text: ". It " },
      {
        text: "must not reduce table-saw table area",
        tag: "constraint",
        pick: "Must not reduce table-saw table area",
      },
      { text: ". " },
      {
        text: "No welding",
        tag: "constraint",
        pick: "No welding",
      },
      { text: ". Designs will be judged on " },
      {
        text: "chip capture at the blade",
        tag: "criterion",
        pick: "Maximize chip capture at the blade",
      },
      { text: ", " },
      {
        text: "added setup time",
        tag: "criterion",
        pick: "Minimize added setup time",
      },
      { text: ", and " },
      {
        text: "how easily it stores on the existing wall hooks",
        tag: "criterion",
        pick: "Ease of storage on the existing wall hooks",
      },
      { text: "." },
    ],
    constraintBank: [
      "Must keep the existing 1.5 hp collector and 4 in ports",
      "Must stay on the current 120 V / 20 A circuit",
      "Parts budget cannot exceed $35",
      "A 9th grader must install or reverse it in under 10 minutes",
      "Must not reduce table-saw table area",
      "No welding",
    ],
    criteriaBank: [
      "Maximize chip capture at the blade",
      "Minimize added setup time",
      "Ease of storage on the existing wall hooks",
    ],
    placeholders: {
      stakeholder: "Who is at the saw when this happens?",
      setting: "Where is the hose, collector, and power?",
      symptom: "What does the hose do, and where do the chips go?",
      rootCause: "What fails when the blast gate is fully open?",
      impact: "Quote minutes, injuries, or bag fill from the brief.",
      objective: "What does success look like at the blade — without naming a hose brand or a 3D-printed part?",
    },
    starters: {
      stakeholder: "TED students running the table saw during a ",
      setting: "the TED wood shop, with 20 ft of 4 in flex hose to ",
      symptom: "the flex hose collapses when the blast gate opens, so ",
      rootCause: "the hose walls cannot hold the collector vacuum at full open",
      impact: "cleanup adds 8 minutes per period, and ",
      objective: "keep chips moving from the blade into the collector so ",
    },
    model: {
      stakeholder: "TED students running the table saw during a 45-minute lab",
      setting:
        "the TED wood shop, with 20 ft of 4 in flex hose to a 1.5 hp collector on a 120 V / 20 A circuit",
      symptom:
        "the flex hose collapses when the blast gate opens, so chips blow back at the blade instead of reaching the bag",
      rootCause:
        "the hose walls cannot hold the collector vacuum at full open",
      impact:
        "cleanup adds 8 minutes per period, two students needed eye-rinse last week, and the collector bag is only 40% full because flow is lost",
      objective:
        "keep chips moving from the blade into the collector so capture stays high when the blast gate is fully open",
      constraints: [
        "Must keep the existing 1.5 hp collector and 4 in ports",
        "Must stay on the current 120 V / 20 A circuit",
        "Parts budget cannot exceed $35",
        "A 9th grader must install or reverse it in under 10 minutes",
        "Must not reduce table-saw table area",
        "No welding",
      ],
      customConstraints: "",
      criteria: [
        "Maximize chip capture at the blade",
        "Minimize added setup time",
        "Ease of storage on the existing wall hooks",
      ],
      customCriteria: "",
    },
  },
];

export function getScenario(id: string): Scenario {
  return SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];
}

export function briefPlain(scenario: Scenario): string {
  return scenario.spans.map((s) => s.text).join("");
}
