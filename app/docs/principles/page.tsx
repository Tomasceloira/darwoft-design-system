import type { Metadata } from "next";

export const metadata: Metadata = { title: "Design Principles" };

const principles = [
  {
    name: "Dark by default",
    accent: "text-brand-mint",
    body: "The canvas is near-black (#151515, sections drop to #101111). Light mode exists as a faithful inverse for product surfaces, but the brand's primary expression is dark. Always ship with .dark on <html>.",
  },
  {
    name: "Editorial contrast",
    accent: "text-brand-blue",
    body: 'A serif display voice (Fraunces) sits over a precise sans (Inter). Headlines run light (300–400 weight) and large, giving a confident, premium, magazine-like feel rather than a typical “tech startup” look.',
  },
  {
    name: "Accents earn attention",
    accent: "text-brand-lime",
    body: "Mint (#42FFCA), lime (#E5F33C), and electric blue (#118DF0) are reserved for emphasis — a highlighted word in a headline, an active state, a primary action. They are never used as large fields of color or as body text.",
  },
  {
    name: "Calm, cinematic motion",
    accent: "text-brand-mint",
    body: "Interface motion is quick and quiet (150–250ms). Storytelling motion on marketing pages is slower and deliberate (400–600ms), often with spring easing. Never animate just to animate.",
  },
  {
    name: "Generous space",
    accent: "text-brand-blue",
    body: "Large vertical rhythm and breathing room around type and cards. The dark background is allowed to do visual work. Use the 4/8-pt grid. Never crowd content.",
  },
];

const hierarchy = [
  { step: "1", label: "Neutrals", desc: "Carry 90%+ of every screen — ink backgrounds + off-white text." },
  { step: "2", label: "Blue", desc: "The interactive/primary color — links, primary CTA, focus rings." },
  { step: "3", label: "Mint / Lime", desc: "Decorative highlights and secondary accents — one per block, never stacked." },
  { step: "4", label: "Steel", desc: "Overlines and subdued labels only." },
];

export default function PrinciplesPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Introduction</p>
        <h1 className="mb-4 text-4xl font-light">Design Principles</h1>
        <p className="text-lg text-muted-foreground">
          Five principles that govern every decision in the Darwoft design system.
          When in doubt, return to these.
        </p>
      </div>

      <section className="space-y-4">
        {principles.map((p, i) => (
          <div key={p.name} className="rounded-xl border border-border bg-card p-6 shadow-ring">
            <div className="flex items-start gap-4">
              <span className="mt-1 font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <div>
                <h2 className={`mb-2 text-xl font-light ${p.accent}`}>{p.name}</h2>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Color usage hierarchy</h2>
        <div className="space-y-3">
          {hierarchy.map((h) => (
            <div key={h.step} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-medium text-primary">
                {h.step}
              </span>
              <div>
                <p className="text-sm font-medium">{h.label}</p>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-lg font-medium">Voice & tone</h2>
        <p className="text-sm text-muted-foreground">
          Confident, human, and partnership-oriented — "more like a partner than a vendor."
          Headlines are short and declarative. Supporting copy is plain and specific.
          Never use jargon to sound smart. Use it only when it adds precision.
        </p>
      </section>
    </div>
  );
}
