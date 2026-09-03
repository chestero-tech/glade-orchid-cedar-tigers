import { cn } from "@/lib/utils";
import type { BriefSpan, Scenario } from "@/lib/prompts";

const TAG_CLASS: Record<NonNullable<BriefSpan["tag"]>, string> = {
  user: "bg-tip-bg text-primary underline decoration-primary/30 underline-offset-2",
  setting: "bg-tip-bg text-primary underline decoration-primary/30 underline-offset-2",
  symptom: "bg-warn-bg text-warn",
  impact: "bg-warn-bg text-warn",
  constraint: "bg-sunken text-fg ring-1 ring-border",
  criterion: "bg-ok-bg text-ok",
};

export function BriefReader({
  scenario,
  interactive = false,
  compact = false,
  focus,
  selected,
  onToggle,
}: {
  scenario: Scenario;
  interactive?: boolean;
  compact?: boolean;
  focus?: NonNullable<BriefSpan["tag"]>[];
  selected?: string[];
  onToggle?: (value: string, kind: "constraint" | "criterion") => void;
}) {
  const focusSet = focus?.length ? new Set(focus) : null;
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface shadow-soft",
        compact ? "p-4 sm:p-5" : "p-5 sm:p-6",
      )}
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
        Keep this brief in view · {scenario.course}
      </p>
      <h2 className={cn("font-display text-fg", compact ? "mb-3 text-xl" : "mb-4 text-2xl")}>
        {scenario.title}
      </h2>
      <p className={cn("leading-relaxed text-fg", compact ? "text-sm" : "text-[15px]")}>
        {scenario.spans.map((span, i) => {
          if (!span.tag) {
            return <span key={i}>{span.text}</span>;
          }
          const dim = Boolean(focusSet && !focusSet.has(span.tag));
          const clickable =
            interactive && (span.tag === "constraint" || span.tag === "criterion");
          const pick = span.pick ?? span.text.trim();
          const isOn = selected?.includes(pick);
          const markClass = cn(
            "mx-0.5 rounded-sm px-1 py-0.5",
            TAG_CLASS[span.tag],
            dim && "opacity-45",
            isOn && "ring-2 ring-primary",
          );
          if (clickable) {
            return (
              <button
                key={i}
                type="button"
                onClick={() => onToggle?.(pick, span.tag as "constraint" | "criterion")}
                className={cn("inline text-left align-baseline", markClass)}
              >
                {span.text}
              </button>
            );
          }
          return (
            <mark key={i} className={markClass}>
              {span.text}
            </mark>
          );
        })}
      </p>
      {!compact ? (
        <ul className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
          <li className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-primary" /> Who / where
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-warn" /> Symptom / impact
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-border-strong ring-1 ring-border" /> Constraint
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-ok" /> Criterion
          </li>
        </ul>
      ) : (
        <p className="mt-3 text-xs text-muted">
          Copy nouns and numbers from the highlighted phrases. Do not invent a new story.
        </p>
      )}
      {interactive ? (
        <p className="mt-3 text-sm text-muted">
          Tap a highlighted constraint or criterion in the brief to add it to your list.
        </p>
      ) : null}
    </article>
  );
}
