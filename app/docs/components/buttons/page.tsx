import type { Metadata } from "next";

export const metadata: Metadata = { title: "Buttons" };

export default function ButtonsPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Components / Buttons</p>
        <h1 className="mb-4 text-4xl font-light">Buttons</h1>
        <p className="text-lg text-muted-foreground">
          Always <code className="text-brand-mint">rounded-pill</code>. Never square. This is
          non-negotiable — it defines the Darwoft tactile feel.
        </p>
      </div>

      {/* Variants */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Variants</h2>
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
              Accent
            </button>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-xs text-brand-mint">{`<!-- Primary -->
<button class="rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
  Primary
</button>

<!-- Secondary -->
<button class="rounded-pill border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
  Secondary
</button>

<!-- Ghost -->
<button class="rounded-pill px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted">
  Ghost
</button>`}</pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Sizes</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center rounded-pill bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
              Small
            </button>
            <button className="inline-flex items-center rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Default
            </button>
            <button className="inline-flex items-center rounded-pill bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground">
              Large
            </button>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-xs text-brand-mint">{`<!-- sm: px-3 py-1.5 text-xs -->
<!-- md: px-5 py-2.5 text-sm  (default) -->
<!-- lg: px-7 py-3.5 text-base -->`}</pre>
      </section>

      {/* With icons */}
      <section>
        <h2 className="mb-6 text-2xl font-light">With icons</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              Download
            </button>
            <button className="inline-flex items-center gap-2 rounded-pill border border-border px-5 py-2.5 text-sm font-medium">
              Get started
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Icons from Lucide. Always 16px (h-4 w-4) inside buttons. Gap of 2 (8px).</p>
      </section>

      {/* Icon-only */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Icon-only</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex gap-3">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-primary text-primary-foreground" aria-label="Download">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Settings">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Always provide an <code className="text-brand-mint">aria-label</code> for icon-only buttons.</p>
      </section>

      {/* Rules */}
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Always <code className="text-brand-mint">rounded-pill</code> — never square, never rounded-md.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Primary action per screen: one primary button only.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Use <code className="text-brand-mint">hover:opacity-90</code> for primary, <code className="text-brand-mint">hover:bg-muted</code> for secondary.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Min width: enough padding that the button never looks cramped.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Transition: <code className="text-brand-mint">transition-opacity</code> or <code className="text-brand-mint">transition-colors</code>, 150ms.</li>
        </ul>
      </section>
    </div>
  );
}
