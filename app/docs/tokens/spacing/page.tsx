import type { Metadata } from "next";

export const metadata: Metadata = { title: "Spacing & Radius" };

const spacing = [
  { token: "1",  px: "4px" }, { token: "2",  px: "8px" }, { token: "3",  px: "12px" },
  { token: "4",  px: "16px" },{ token: "5",  px: "20px" },{ token: "6",  px: "24px" },
  { token: "8",  px: "32px" },{ token: "10", px: "40px" },{ token: "12", px: "48px" },
  { token: "16", px: "64px" },{ token: "20", px: "80px" },{ token: "24", px: "96px" },
  { token: "30", px: "120px"},
];

const radius = [
  { token: "sm",   value: "4px",    use: "Focus rings, small indicators" },
  { token: "md",   value: "8px",    use: "Dropdowns, menus" },
  { token: "lg",   value: "12px",   use: "Popovers, floating panels" },
  { token: "xl",   value: "16px ★", use: "Cards — Darwoft signature" },
  { token: "pill", value: "9999px ★",use: "Buttons, chips, badges — always" },
];

export default function SpacingPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Tokens / Spacing & Radius</p>
        <h1 className="mb-4 text-4xl font-light">Spacing & Radius</h1>
        <p className="text-lg text-muted-foreground">
          4/8-pt grid mapped to Tailwind numeric scale. Two signature radius values: 16px cards and pill buttons.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Spacing scale</h2>
        <p className="mb-6 text-sm text-muted-foreground">Every step is a multiple of 4px.</p>
        <div className="space-y-3">
          {spacing.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <code className="w-12 shrink-0 font-mono text-xs text-muted-foreground">{s.token}</code>
              <code className="w-14 shrink-0 font-mono text-xs text-muted-foreground">{s.px}</code>
              <div
                className="h-4 rounded-sm bg-primary/30"
                style={{ width: s.px, maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Border radius</h2>
        <p className="mb-2 text-sm text-muted-foreground">
          ★ = Darwoft signature. Never use square interactive surfaces.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {radius.map((r) => (
            <div key={r.token} className="rounded-xl border border-border bg-card p-4">
              <div
                className="mb-4 h-14 w-full bg-primary/20"
                style={{ borderRadius: r.value.replace(" ★","") }}
              />
              <p className="text-sm font-medium">rounded-{r.token}</p>
              <p className="font-mono text-xs text-muted-foreground">{r.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Grid rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Use the 4/8-pt grid for all spacing decisions.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Prefer Tailwind scale tokens over arbitrary values.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Cards always use <code className="text-brand-mint">rounded-xl</code> (16px).</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Buttons, chips, badges always use <code className="text-brand-mint">rounded-pill</code>.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Floating panels (dropdowns, menus) use <code className="text-brand-mint">rounded-lg</code> (12px).</li>
        </ul>
      </section>
    </div>
  );
}
