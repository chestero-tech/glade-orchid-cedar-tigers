import { stitch } from "@/lib/statement";
import type { Draft } from "@/lib/prompts";

const PARTS: { key: string; when: (d: Draft) => boolean; label: string }[] = [
  {
    key: "c",
    label: "1 · Context",
    when: (d) => Boolean(d.stakeholder.trim() || d.setting.trim()),
  },
  {
    key: "n",
    label: "2 · Current",
    when: (d) => Boolean(d.symptom.trim() || d.rootCause.trim() || d.impact.trim()),
  },
  {
    key: "d",
    label: "3 · Desired",
    when: (d) => Boolean(d.objective.trim()),
  },
  {
    key: "b",
    label: "4 · Boundaries",
    when: (d) => Boolean(d.constraints.length || d.criteria.length || d.customConstraints || d.customCriteria),
  },
];

export function LiveStatement({ draft }: { draft: Draft }) {
  const text = stitch(draft);
  return (
    <aside className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
        Assembled statement
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {PARTS.map((p) => (
          <span
            key={p.key}
            className={
              p.when(draft)
                ? "rounded-full bg-primary px-2 py-0.5 text-[11px] font-medium text-primary-fg"
                : "rounded-full bg-sunken px-2 py-0.5 text-[11px] text-subtle"
            }
          >
            {p.label}
          </span>
        ))}
      </div>
      {text ? (
        <p className="mt-4 font-display text-lg leading-snug text-fg">{text}</p>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Each section you finish is stitched here. Start with who and where.
        </p>
      )}
    </aside>
  );
}
