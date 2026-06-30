import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cards" };

export default function CardsPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Components / Cards</p>
        <h1 className="mb-4 text-4xl font-light">Cards</h1>
        <p className="text-lg text-muted-foreground">
          Always <code className="text-brand-mint">rounded-xl</code> (16px). On dark backgrounds, add{" "}
          <code className="text-brand-mint">shadow-ring</code> for the hairline border effect.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Default card</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <p className="overline mb-2">Overline</p>
            <h3 className="mb-2 text-xl font-light">Card Title</h3>
            <p className="text-sm text-muted-foreground">
              Card content using muted foreground. The border uses a hairline
              rgba(255,255,255,0.10) on dark surfaces.
            </p>
            <div className="mt-6 flex gap-2">
              <button className="inline-flex items-center rounded-pill bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                Primary
              </button>
              <button className="inline-flex items-center rounded-pill border border-border px-4 py-2 text-xs font-medium">
                Secondary
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <p className="overline mb-2">Metric</p>
            <p className="mb-1 font-display text-5xl font-light text-brand-mint">98%</p>
            <h3 className="mb-2 text-xl font-light">Satisfaction rate</h3>
            <p className="text-sm text-muted-foreground">Based on 1,200 client projects since 2018.</p>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-xs text-brand-mint">{`<div class="rounded-xl border border-border bg-card p-6 shadow-ring">
  <p class="overline mb-2">Overline</p>
  <h3 class="text-xl font-light mb-2">Card Title</h3>
  <p class="text-sm text-muted-foreground">Content…</p>
</div>`}</pre>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Elevated / muted surface</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-muted p-5">
            <p className="overline mb-2">bg-muted</p>
            <p className="text-sm text-muted-foreground">Secondary surface. Code blocks, alt cards.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="overline mb-2">bg-card</p>
            <p className="text-sm text-muted-foreground">Primary surface. Main cards, panels.</p>
          </div>
          <div className="rounded-xl bg-background p-5" style={{ boxShadow: "0 0 0 1px hsl(0 0% 100% / 0.10)" }}>
            <p className="overline mb-2">bg-background</p>
            <p className="text-sm text-muted-foreground">Body bg. Rarely used inside cards.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Feature card</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Design Tokens", "Typography", "Motion"].map((title, i) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-6 shadow-ring transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <div className="h-5 w-5 rounded bg-primary/30" />
              </div>
              <h3 className="mb-2 text-base font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">
                Description of the feature. Kept short and specific.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Interactive / link card</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="block rounded-xl border border-border bg-card p-6 shadow-ring transition-colors hover:border-primary/40 hover:bg-card"
          >
            <p className="overline mb-2">Link card</p>
            <h3 className="mb-2 text-xl font-light">Clickable surface</h3>
            <p className="text-sm text-muted-foreground">
              The entire card is a link. Border shifts to primary on hover.
            </p>
          </a>
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <div className="mb-4 h-32 w-full rounded-lg bg-muted" />
            <p className="overline mb-1">Image card</p>
            <h3 className="text-base font-medium">With media</h3>
            <p className="mt-1 text-sm text-muted-foreground">Image block uses rounded-lg inside a rounded-xl card.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Always <code className="text-brand-mint">rounded-xl</code> (16px) — the Darwoft signature radius.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Add <code className="text-brand-mint">shadow-ring</code> on dark surfaces for the hairline ring effect.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Use <code className="text-brand-mint">bg-card</code> not <code className="text-brand-mint">bg-background</code> for card surfaces.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Padding: p-4 (sm), p-6 (default), p-8 (large). Consistent internal grid.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Hover: <code className="text-brand-mint">hover:shadow-md</code> for lift effect or <code className="text-brand-mint">hover:border-primary/40</code> for link cards.</li>
        </ul>
      </section>
    </div>
  );
}
