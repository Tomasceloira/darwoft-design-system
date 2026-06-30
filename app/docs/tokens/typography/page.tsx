import type { Metadata } from "next";

export const metadata: Metadata = { title: "Typography" };

const scale = [
  { token: "xs",      size: "12px", lh: "1.5",  weight: "400",     use: "Captions, overline" },
  { token: "sm",      size: "14px", lh: "1.5",  weight: "400",     use: "Small labels, metadata" },
  { token: "base",    size: "16px", lh: "1.5",  weight: "400",     use: "Body text" },
  { token: "lg",      size: "18px", lh: "1.65", weight: "400",     use: "Lead paragraph" },
  { token: "xl",      size: "24px", lh: "1.3",  weight: "400–300", use: "Section titles (sans light)" },
  { token: "2xl",     size: "32px", lh: "1.2",  weight: "400–300", use: "H3 (Fraunces)" },
  { token: "3xl",     size: "40px", lh: "1.1",  weight: "400–300", use: "H2 (Fraunces)" },
  { token: "4xl",     size: "56px", lh: "1.05", weight: "300",     use: "H1 (Fraunces light)" },
  { token: "5xl",     size: "72px", lh: "1.05", weight: "300",     use: "Hero headline" },
  { token: "6xl",     size: "88px", lh: "1.05", weight: "300",     use: "Large hero" },
  { token: "display", size: "120px",lh: "1.0",  weight: "300",     use: "Editorial display" },
];

const weights = [
  { name: "Light",    value: 300, use: "Large headlines, hero statements" },
  { name: "Regular",  value: 400, use: "Headings, default body" },
  { name: "Medium",   value: 500, use: "UI labels, overlines, buttons" },
  { name: "Semibold", value: 600, use: "Strong emphasis, table headers" },
  { name: "Bold",     value: 700, use: "Rare — only for maximum contrast" },
];

export default function TypographyPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Tokens / Typography</p>
        <h1 className="mb-4 text-4xl font-light">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Two families. One editorial, one precise. Fraunces for display headings,
          Inter for everything else.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Families</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <p className="overline mb-4">Display — Fraunces</p>
            <p className="mb-3 font-display text-4xl font-light leading-tight">
              The quick brown fox
            </p>
            <p className="text-sm text-muted-foreground">
              Optical-size variable serif. Used for H1–H3, pull-quotes, and stat numbers.
              Weight 300–400 only.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">font-display · --font-display</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <p className="overline mb-4">Sans — Inter</p>
            <p className="mb-3 text-4xl font-light leading-tight">
              The quick brown fox
            </p>
            <p className="text-sm text-muted-foreground">
              Precise geometric sans. Used for all body copy, UI labels, and large light-weight
              statements. All weights 300–700.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">font-sans · --font-sans</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Type scale</h2>
        <div className="space-y-1">
          {scale.map((s) => {
            const px = parseInt(s.size);
            const displayPx = Math.min(px, 48);
            return (
              <div key={s.token} className="flex items-baseline gap-4 border-b border-border/50 py-4">
                <code className="w-16 shrink-0 font-mono text-xs text-muted-foreground">text-{s.token}</code>
                <span
                  className="min-w-0 flex-1 truncate font-display font-light"
                  style={{ fontSize: displayPx, lineHeight: s.lh }}
                >
                  Aa
                </span>
                <div className="hidden shrink-0 text-right sm:block">
                  <p className="font-mono text-xs text-muted-foreground">{s.size} / {s.lh}</p>
                  <p className="text-xs text-muted-foreground">{s.use}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Font weights</h2>
        <div className="space-y-3">
          {weights.map((w) => (
            <div key={w.value} className="flex items-center gap-6 rounded-xl border border-border bg-card px-5 py-4">
              <span
                className="w-40 shrink-0 text-2xl"
                style={{ fontWeight: w.value }}
              >
                {w.name}
              </span>
              <span className="font-mono text-sm text-muted-foreground">{w.value}</span>
              <span className="text-sm text-muted-foreground">{w.use}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Letter spacing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-2xl font-light" style={{ letterSpacing: "-0.02em" }}>Headline</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">tracking-tightest · -0.02em</p>
            <p className="text-xs text-muted-foreground">Display headlines only</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-2xl font-light" style={{ letterSpacing: "0.5px" }}>Heading</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">tracking-display · 0.5px</p>
            <p className="text-xs text-muted-foreground">All H1–H3 (Fraunces)</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-medium uppercase" style={{ letterSpacing: "0.1em" }}>Overline Label</p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">tracking-overline · 0.1em</p>
            <p className="text-xs text-muted-foreground">Overlines, eyebrows, section labels</p>
          </div>
        </div>
      </section>
    </div>
  );
}
