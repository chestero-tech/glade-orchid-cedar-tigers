import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Flag,
  MapPinned,
  Scale,
  Target,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/workshop/site-header";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const PILLARS = [
  {
    n: "01",
    title: "Context",
    sub: "The who and where",
    icon: MapPinned,
    body: "Name the person stuck with the problem and the place it happens. A “user” is not enough — a 9th-grade TED student at a 24-inch bench is.",
  },
  {
    n: "02",
    title: "Current condition",
    sub: "The what and why",
    icon: Flag,
    body: "State the symptom, the root cause if you know it, and the impact with a number. Downtime, scrap, seconds lost — pick something you can measure.",
  },
  {
    n: "03",
    title: "Desired state",
    sub: "The goal, not the gadget",
    icon: Target,
    body: "Say what success looks like. Never name the build. “Support 50 lb” is a goal. “3D-print a carbon-fiber arm” is a solution wearing a costume.",
  },
  {
    n: "04",
    title: "Boundaries",
    sub: "Constraints and criteria",
    icon: Scale,
    body: "Constraints are hard limits you cannot break. Criteria are how you rank two legal designs. Both come from the brief — they are not invented later.",
  },
];

const WARMUP = [
  {
    id: "bad",
    label: "Prescribes a solution",
    text: "We need to 3D print a stronger carbon-fiber arm for the two-wheeled balancing drone so the IMU doesn’t break when it falls over.",
  },
  {
    id: "good",
    label: "True engineering statement",
    text: "During rapid directional changes, chassis flex dumps vibrational noise into the MPU-6050, causing balancing instability. The objective is to stabilize the sensor array under a peak dynamic torque of 5 N·m. Mass may not rise more than 10%, and the existing ESP32 pins must be used.",
  },
];

function Home() {
  const [pick, setPick] = useState<string | null>(null);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Engineering · problem framing
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] text-fg sm:text-5xl">
            An effective problem statement is a project’s North Star.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            It names a real-world issue without jumping to a premature solution.
            You will read a brief with obvious limits, write four sections, and
            watch them stitch into one statement your teacher can score.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/workshop">
                Open the workshop
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#warmup">Try the warmup</a>
            </Button>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <article key={p.n} className="bg-surface p-6">
                <p className="font-mono text-xs text-subtle">{p.n}</p>
                <p.icon className="mt-4 size-5 text-primary" strokeWidth={1.75} />
                <h2 className="mt-4 font-display text-2xl">{p.title}</h2>
                <p className="mt-1 text-sm font-medium text-muted">{p.sub}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="warmup" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Thirty-second warmup
          </p>
          <h2 className="mt-2 font-display text-3xl">Which statement is actually engineering?</h2>
          <p className="mt-3 max-w-2xl text-muted">
            One of these locks the class into a printer and a material. The other
            defines the failure, the goal, and the rules. Tap the one you would
            put on a design brief.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {WARMUP.map((w) => {
              const selected = pick === w.id;
              const reveal = pick !== null;
              const correct = w.id === "good";
              return (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setPick(w.id)}
                  className={cn(
                    "rounded-xl border p-5 text-left shadow-soft transition-colors duration-150",
                    selected ? "border-primary bg-surface" : "border-border bg-surface hover:bg-sunken",
                    reveal && correct && "border-ok",
                    reveal && selected && !correct && "border-warn",
                  )}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    Statement {w.id === "bad" ? "A" : "B"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg">{w.text}</p>
                  {reveal ? (
                    <p
                      className={cn(
                        "mt-4 text-sm font-medium",
                        correct ? "text-ok" : "text-warn",
                      )}
                    >
                      {correct
                        ? "This one. Failure, goal, mass cap, existing pins — no printer required."
                        : "This names 3D printing and carbon fiber. That is a solution, not a problem."}
                    </p>
                  ) : null}
                </button>
              );
            })}
          </div>
        </section>

        <section className="border-t border-border bg-primary text-primary-fg">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-start gap-3">
              <Compass className="mt-1 size-6 shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="font-display text-3xl">Write one for class.</h2>
                <p className="mt-2 max-w-xl text-sm text-primary-fg/75">
                  The workshop brief is loaded with hard limits on purpose. Your
                  job is to notice them, not invent new ones.
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-fg text-primary hover:opacity-90"
            >
              <Link to="/workshop">
                Start from a brief
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
