import type { Metadata } from "next";

export const metadata: Metadata = { title: "Inputs" };

export default function InputsPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Components / Inputs</p>
        <h1 className="mb-4 text-4xl font-light">Inputs</h1>
        <p className="text-lg text-muted-foreground">
          <strong className="text-foreground">Underline only.</strong> Transparent background,
          no box, 1px bottom border, mint on focus. This is non-negotiable — boxed/outlined
          inputs are never used in the Darwoft system.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Text input</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="max-w-sm space-y-6">
            <div className="space-y-1">
              <label className="overline text-xs">Full name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-mint"
              />
            </div>
            <div className="space-y-1">
              <label className="overline text-xs">Email address</label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-mint"
              />
            </div>
          </div>
        </div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-xs text-brand-mint">{`<div class="space-y-1">
  <label class="overline text-xs">Email address</label>
  <input
    type="email"
    class="w-full border-0 border-b border-border bg-transparent
           pb-2 pt-1 text-sm outline-none transition-colors
           placeholder:text-muted-foreground focus:border-brand-mint"
  />
</div>`}</pre>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Textarea</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="max-w-sm space-y-1">
            <label className="overline text-xs">Message</label>
            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full resize-none border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-mint"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">States</h2>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="max-w-sm space-y-6">
            <div className="space-y-1">
              <label className="overline text-xs">Default</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-1">
              <label className="overline text-xs" style={{ color: "var(--color-brand-mint)" }}>Focused (mint border)</label>
              <input
                type="text"
                defaultValue="User typing here"
                className="w-full border-0 border-b bg-transparent pb-2 pt-1 text-sm outline-none"
                style={{ borderColor: "var(--color-brand-mint)" }}
              />
            </div>
            <div className="space-y-1">
              <label className="overline text-xs text-destructive">Error state</label>
              <input
                type="text"
                defaultValue="invalid@"
                className="w-full border-0 border-b bg-transparent pb-2 pt-1 text-sm outline-none text-destructive"
                style={{ borderColor: "var(--color-destructive)" }}
              />
              <p className="text-xs text-destructive">Enter a valid email address.</p>
            </div>
            <div className="space-y-1 opacity-50">
              <label className="overline text-xs">Disabled</label>
              <input
                type="text"
                defaultValue="Cannot edit"
                disabled
                className="w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-sm outline-none cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Underline only — <code className="text-brand-mint">border-b border-border</code>, transparent bg, no box.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Focus: <code className="text-brand-mint">focus:border-brand-mint</code>. Never blue on focus for inputs.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Always use <code className="text-brand-mint">overline</code> class for labels above inputs.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Error: destructive border + destructive text below. Never a box around the input.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>No custom <code className="text-brand-mint">&lt;select&gt;</code> — always use a custom dropdown component instead.</li>
        </ul>
      </section>
    </div>
  );
}
