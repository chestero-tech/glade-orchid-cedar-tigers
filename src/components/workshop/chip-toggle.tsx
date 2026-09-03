import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChipToggle({
  label,
  selected,
  onToggle,
}: {
  label: string;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={cn(
        "flex min-h-11 items-start gap-2 rounded-md border px-3 py-2.5 text-left text-sm transition-colors duration-150",
        selected
          ? "border-primary bg-tip-bg text-fg"
          : "border-border bg-surface text-fg hover:bg-sunken",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-xs border",
          selected ? "border-primary bg-primary text-primary-fg" : "border-border-strong",
        )}
      >
        {selected ? <Check className="size-3" strokeWidth={3} /> : null}
      </span>
      <span>{label}</span>
    </button>
  );
}
