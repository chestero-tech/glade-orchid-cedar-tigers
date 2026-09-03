import { CircleAlert, CircleCheck, Info } from "lucide-react";
import type { Flag } from "@/lib/statement";
import { cn } from "@/lib/utils";

export function Coach({ flags }: { flags: Flag[] }) {
  if (!flags.length) return null;
  return (
    <ul className="space-y-2">
      {flags.map((f, i) => (
        <li
          key={i}
          className={cn(
            "flex gap-2.5 rounded-md px-3 py-2.5 text-sm leading-snug",
            f.tone === "warn" && "bg-warn-bg text-warn",
            f.tone === "ok" && "bg-ok-bg text-ok",
            f.tone === "tip" && "bg-tip-bg text-primary",
          )}
        >
          {f.tone === "warn" ? (
            <CircleAlert className="mt-0.5 size-4 shrink-0" />
          ) : f.tone === "ok" ? (
            <CircleCheck className="mt-0.5 size-4 shrink-0" />
          ) : (
            <Info className="mt-0.5 size-4 shrink-0" />
          )}
          <span>{f.message}</span>
        </li>
      ))}
    </ul>
  );
}
