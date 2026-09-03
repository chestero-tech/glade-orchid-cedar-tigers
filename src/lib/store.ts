import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  emptyDraft,
  getScenario,
  SCENARIOS,
  type Draft,
  type Scenario,
} from "./prompts";

export type StepId = 0 | 1 | 2 | 3 | 4 | 5;
// 0 brief, 1 context, 2 current, 3 desired, 4 bounds, 5 final

type State = {
  step: StepId;
  draft: Draft;
  setStep: (step: StepId) => void;
  setScenario: (id: string) => void;
  patch: (partial: Partial<Draft>) => void;
  toggleConstraint: (value: string) => void;
  toggleCriterion: (value: string) => void;
  loadModel: () => void;
  reset: () => void;
  scenario: () => Scenario;
};

export const useWorkshop = create<State>()(
  persist(
    (set, get) => ({
      step: 0,
      draft: emptyDraft(SCENARIOS[0].id),
      setStep: (step) => set({ step }),
      setScenario: (id) =>
        set({
          draft: emptyDraft(id),
          step: 0,
        }),
      patch: (partial) =>
        set({
          draft: { ...get().draft, ...partial },
        }),
      toggleConstraint: (value) => {
        const cur = get().draft.constraints;
        const next = cur.includes(value)
          ? cur.filter((c) => c !== value)
          : [...cur, value];
        set({ draft: { ...get().draft, constraints: next } });
      },
      toggleCriterion: (value) => {
        const cur = get().draft.criteria;
        const next = cur.includes(value)
          ? cur.filter((c) => c !== value)
          : [...cur, value];
        set({ draft: { ...get().draft, criteria: next } });
      },
      loadModel: () => {
        const s = getScenario(get().draft.scenarioId);
        set({
          draft: { scenarioId: s.id, ...s.model },
          step: 5,
        });
      },
      reset: () =>
        set({
          draft: emptyDraft(get().draft.scenarioId),
          step: 0,
        }),
      scenario: () => getScenario(get().draft.scenarioId),
    }),
    { name: "north-star-workshop", skipHydration: true },
  ),
);
