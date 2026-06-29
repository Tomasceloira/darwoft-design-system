import type { Metadata } from "next";

export const metadata: Metadata = { title: "Components" };

export default function ComponentsPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Components</p>
        <h1 className="mb-4 text-4xl font-light">Component Showcase</h1>
        <p className="text-lg text-muted-foreground">
          All components follow the Darwoft non-negotiables: pill buttons, 16px cards,
          underline fields, Fraunces headings. Built on shadcn/ui primitives.
        </p>
      </div>

      {/* Buttons */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Buttons</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Always <code className="text-brand-mint">rounded-pill</code>. Never square. Three variants: primary, secondary, ghost.
        </p>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Primary
            </button>
            <button className="inline-flex items-center rounded-pill border border-border bg-transparent px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted">
              Secondary
            </button>
            <button className="inline-flex items-center rounded-pill px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              Ghost
            </button>
            <button className="inline-flex items-center rounded-pill bg-destructive px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Destructive
            </button>
            <button className="inline-flex items-center rounded-pill bg-brand-mint px-5 py-2.5 text-sm font-medium text-[#101111] transition-opacity hover:opacity-90">
              Accent Mint
            </button>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-sm text-brand-mint">{`<button className="rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
  Primary
</button>`}</pre>
      </section>

      {/* Badges */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Badges & Chips</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-pill bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Default</span>
            <span className="inline-flex items-center rounded-pill bg-success/10 px-3 py-1 text-xs font-medium text-success">Success</span>
            <span className="inline-flex items-center rounded-pill bg-warning/10 px-3 py-1 text-xs font-medium text-warning">Warning</span>
            <span className="inline-flex items-center rounded-pill bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">Error</span>
            <span className="inline-flex items-center rounded-pill border border-border px-3 py-1 text-xs font-medium text-muted-foreground">Outline</span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Cards</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Always <code className="text-brand-mint">rounded-xl</code> (16px). On dark, add <code className="text-brand-mint">shadow-ring</code>.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <p className="overline mb-2">Overline</p>
            <h3 className="mb-2 text-xl font-light">Card Title</h3>
            <p className="text-sm text-muted-foreground">
              Card content using muted foreground. Border uses hairline rgba(255,255,255,0.10) on dark.
            </p>
            <div className="mt-4">
              <button className="inline-flex items-center rounded-pill bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                Action
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-muted p-6">
            <p className="overline mb-2">Elevated</p>
            <h3 className="mb-2 text-xl font-light">Muted Surface</h3>
            <p className="text-sm text-muted-foreground">
              Secondary surface using <code>bg-muted</code>. Used for code blocks and secondary cards.
            </p>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Inputs</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          <strong className="text-foreground">Underline only.</strong> Transparent background, no box, 1px bottom border.
          Mint color on focus. Never use boxed/outlined inputs.
        </p>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="max-w-sm space-y-6">
            <div className="space-y-1">
              <label className="overline text-xs">Email address</label>
              <input
                type="email"
                placeholder="hello@darwoft.com"
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-mint"
              />
            </div>
            <div className="space-y-1">
              <label className="overline text-xs">Message</label>
              <textarea
                placeholder="Your message..."
                rows={3}
                className="w-full resize-none border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-mint"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Typography</h2>
        <div className="rounded-xl border border-border bg-card p-8 space-y-6">
          <div>
            <p className="overline mb-2">Display — Fraunces 300</p>
            <p className="font-display text-4xl font-light">The quick brown fox</p>
          </div>
          <div>
            <p className="overline mb-2">H2 — Fraunces 400</p>
            <h2 className="text-3xl">Deliberate interfaces</h2>
          </div>
          <div>
            <p className="overline mb-2">Body — Inter 400</p>
            <p className="text-base">Built for teams that care about craft. Every detail is intentional.</p>
          </div>
          <div>
            <p className="overline mb-2">Muted — Inter 400</p>
            <p className="text-sm text-muted-foreground">Secondary content, captions, metadata, descriptions.</p>
          </div>
          <div>
            <p className="overline mb-2">Overline — Inter 500 uppercase</p>
            <p className="overline">Section label</p>
          </div>
        </div>
      </section>
    </div>
  );
}
