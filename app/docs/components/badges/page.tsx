import type { Metadata } from "next";

export const metadata: Metadata = { title: "Badges & Chips" };

export default function BadgesPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Components / Badges & Chips</p>
        <h1 className="mb-4 text-4xl font-light">Badges & Chips</h1>
        <p className="text-lg text-muted-foreground">
          Always <code className="text-brand-mint">rounded-pill</code>. Small, tinted, precise.
          One status pill per card — never stack multiple status indicators.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Status badges</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-pill bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Default</span>
            <span className="inline-flex items-center rounded-pill bg-success/10 px-3 py-1 text-xs font-medium text-success">Success</span>
            <span className="inline-flex items-center rounded-pill bg-warning/10 px-3 py-1 text-xs font-medium text-warning">Warning</span>
            <span className="inline-flex items-center rounded-pill bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">Error</span>
            <span className="inline-flex items-center rounded-pill border border-border px-3 py-1 text-xs font-medium text-muted-foreground">Outline</span>
            <span className="inline-flex items-center rounded-pill bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Muted</span>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-xs text-brand-mint">{`<!-- Status badge -->
<span class="rounded-pill bg-success/10 px-3 py-1 text-xs font-medium text-success">
  Success
</span>

<!-- Outline badge -->
<span class="rounded-pill border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
  Outline
</span>`}</pre>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Brand accent chips</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-pill bg-brand-mint/10 px-3 py-1 text-xs font-medium" style={{ color: "var(--color-brand-mint)" }}>Mint</span>
            <span className="inline-flex items-center rounded-pill bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">Blue</span>
            <span className="inline-flex items-center rounded-pill bg-brand-lime/10 px-3 py-1 text-xs font-medium" style={{ color: "var(--color-brand-lime)" }}>Lime</span>
            <span className="inline-flex items-center rounded-pill bg-brand-steel/10 px-3 py-1 text-xs font-medium text-brand-steel">Steel</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Use sparingly — one accent chip per card/block maximum.</p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Dismissible chips</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            {["Design", "Motion", "Typography", "Tokens"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1.5 rounded-pill border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {tag}
                <button className="ml-0.5 opacity-60 hover:opacity-100" aria-label={`Remove ${tag}`}>
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">With dot indicator</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-success/10 px-3 py-1 text-xs font-medium text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Active
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
              <span className="h-1.5 w-1.5 rounded-full bg-warning" />
              Pending
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              Inactive
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Always <code className="text-brand-mint">rounded-pill</code> — never rounded-md or rounded-lg badges.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>One status badge per card. Never stack two status indicators.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Use <code className="text-brand-mint">bg-color/10</code> tints with matching text color for semantic states.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Font: always <code className="text-brand-mint">text-xs font-medium</code>. Never bold, never large.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Padding: <code className="text-brand-mint">px-3 py-1</code> default. <code className="text-brand-mint">px-2 py-0.5</code> for compact contexts.</li>
        </ul>
      </section>
    </div>
  );
}
