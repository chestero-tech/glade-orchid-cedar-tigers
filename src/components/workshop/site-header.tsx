import { Link } from "@tanstack/react-router";
import { Compass } from "lucide-react";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="no-print border-b border-border bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-fg">
          <span className="flex size-8 items-center justify-center rounded-sm bg-primary text-primary-fg">
            <Compass className="size-4" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg leading-none tracking-tight">North Star</span>
        </Link>
        {!compact ? (
          <p className="hidden text-xs font-medium uppercase tracking-[0.14em] text-muted sm:block">
            Engineering problem statements
          </p>
        ) : (
          <p className="text-xs text-muted">TED · Engineering</p>
        )}
      </div>
    </header>
  );
}
