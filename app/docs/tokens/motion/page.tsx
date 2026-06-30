import type { Metadata } from "next";

export const metadata: Metadata = { title: "Motion" };

const durations = [
  { token: "fast",      value: "150ms", use: "Hover states, tooltips, focus rings" },
  { token: "default",   value: "250ms", use: "Accordion, modal open/close, dropdowns" },
  { token: "slow",      value: "400ms", use: "Page transitions, fade-up entrances" },
  { token: "cinematic", value: "600ms", use: "Marketing hero, storytelling animations" },
];

const easings = [
  { name: "ease-out",    curve: "cubic-bezier(0, 0, 0.2, 1)",        use: "Elements entering the screen" },
  { name: "ease-in-out", curve: "cubic-bezier(0.4, 0, 0.2, 1)",      use: "Elements that start and end on screen" },
  { name: "spring",      curve: "cubic-bezier(0.34, 1.56, 0.64, 1)", use: "Bouncy interactions, toggles, badges" },
];

export default function MotionPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Tokens / Motion</p>
        <h1 className="mb-4 text-4xl font-light">Motion</h1>
        <p className="text-lg text-muted-foreground">
          Calm, deliberate motion. UI interactions are quick (150–250ms). Marketing storytelling is
          slower and cinematic (400–600ms). Always respect <code className="text-brand-mint">prefers-reduced-motion</code>.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Duration tokens</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {durations.map((d) => (
            <div key={d.token} className="rounded-xl border border-border bg-card p-5 shadow-ring">
              <div className="mb-4 flex items-end justify-between">
                <p className="font-mono text-3xl font-light text-brand-mint">{d.value}</p>
                <code className="font-mono text-xs text-muted-foreground">duration-{d.token}</code>
              </div>
              <p className="text-sm text-muted-foreground">{d.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Easing functions</h2>
        <div className="space-y-4">
          {easings.map((e) => (
            <div key={e.name} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-sm font-medium">{e.name}</p>
                  <p className="text-sm text-muted-foreground">{e.use}</p>
                </div>
                <code className="shrink-0 font-mono text-xs text-brand-mint">{e.curve}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Keyframe animations</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-sm font-medium">fade-up</p>
            <p className="mb-3 text-sm text-muted-foreground">Opacity 0→1 + translateY 8px→0. Used for content entrances.</p>
            <code className="block font-mono text-xs text-brand-mint">animate-fade-up</code>
            <code className="block font-mono text-xs text-muted-foreground">400ms ease-out</code>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-sm font-medium">fade-in</p>
            <p className="mb-3 text-sm text-muted-foreground">Opacity 0→1 only. Used for overlays and modals.</p>
            <code className="block font-mono text-xs text-brand-mint">animate-fade-in</code>
            <code className="block font-mono text-xs text-muted-foreground">400ms ease-out</code>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Reduced motion</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Always wrap animations in a <code className="text-brand-mint">prefers-reduced-motion</code> media query.
          Users with vestibular disorders or motion sensitivity depend on this.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted px-4 py-3 font-mono text-xs text-brand-mint">{`@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}</pre>
      </section>
    </div>
  );
}
