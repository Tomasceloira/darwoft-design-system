import type { Metadata } from "next";

export const metadata: Metadata = { title: "Colors" };

const brandColors = [
  { name: "Brand Blue", hex: "#118DF0", token: "brand-blue", var: "--brand-blue", role: "Primary / interactive, links, focus rings, key CTAs" },
  { name: "Brand Mint", hex: "#42FFCA", token: "brand-mint", var: "--brand-mint", role: "Signature accent, highlight words, decorative" },
  { name: "Brand Lime", hex: "#E5F33C", token: "brand-lime", var: "--brand-lime", role: "Signature accent, highlight words, decorative" },
  { name: "Brand Steel", hex: "#455A6F", token: "brand-steel", var: "--brand-steel", role: "Overlines and subdued labels" },
];

const semanticColors = [
  { name: "Success", hex: "#1FBF8F", var: "--success", role: "Positive states, confirmations" },
  { name: "Warning", hex: "#E5B53C", var: "--warning", role: "Caution, pending states" },
  { name: "Destructive", hex: "#F0533B", var: "--destructive", role: "Errors, destructive actions" },
  { name: "Info", hex: "#118DF0", var: "--primary", role: "Informational (same as brand blue)" },
];

const neutralsDark = [
  { name: "Ink 950", hex: "#101111", role: "Deepest sections, footer bg" },
  { name: "Ink 900", hex: "#151515", role: "Body background (dark)" },
  { name: "Ink 850", hex: "#1C1C1E", role: "Card surface (dark)" },
  { name: "Ink 800", hex: "#232325", role: "Muted / elevated surface, popovers" },
  { name: "Ink 700", hex: "#3B3B3B", role: "Chips, strong borders" },
  { name: "Foreground", hex: "#F2F2F2", role: "Primary text on dark" },
  { name: "Muted fg", hex: "#727279", role: "Secondary / muted text" },
];

const blueScale = [50,100,200,300,400,500,600,700,800,900,950];
const blueHex = ["#F3F9FE","#E7F4FE","#C4E2FB","#A0D1F9","#58AFF4","#118DF0","#0E78CC","#0C63A8","#094E84","#073860","#04233C"];
const mintHex  = ["#F6FFFC","#ECFFFA","#D0FFF2","#B3FFEA","#7BFFDA","#42FFCA","#38D9AC","#2EB28D","#248C6F","#1A6651","#104032"];
const limeHex  = ["#FEFEF5","#FCFEEC","#F8FCCE","#F5FAB1","#EDF776","#E5F33C","#C3CF33","#A0AA2A","#7E8621","#5C6118","#393D0F"];
const steelHex = ["#F6F7F8","#ECEEF1","#D0D6DB","#B5BDC5","#7D8C9A","#455A6F","#3B4C5E","#303F4E","#26323D","#1C242C","#11161C"];

function ColorScale({ name, steps, hexes }: { name: string; steps: number[]; hexes: string[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium">{name}</p>
      <div className="flex overflow-hidden rounded-xl border border-border">
        {steps.map((step, i) => (
          <div key={step} className="group flex-1 cursor-default" title={`${name}-${step}: ${hexes[i]}`}>
            <div className="h-12" style={{ background: hexes[i] }} />
            <div className="hidden bg-card p-2 group-hover:block">
              <p className="font-mono text-xs text-muted-foreground">{step}</p>
              <p className="font-mono text-xs text-muted-foreground">{hexes[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between font-mono text-xs text-muted-foreground">
        <span>50</span><span>500 ★</span><span>950</span>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Tokens / Colors</p>
        <h1 className="mb-4 text-4xl font-light">Colors</h1>
        <p className="text-lg text-muted-foreground">
          Four brand accents, full color scales, semantic tokens, and dark-first neutrals.
          The 500 step of each scale is the original brand color.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-light">Brand palette</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {brandColors.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-card overflow-hidden shadow-ring">
              <div className="h-20 w-full" style={{ background: c.hex }} />
              <div className="p-4">
                <p className="font-medium">{c.name}</p>
                <p className="font-mono text-sm" style={{ color: c.hex }}>{c.hex}</p>
                <p className="font-mono text-xs text-muted-foreground">bg-{c.token} · {c.var}</p>
                <p className="mt-2 text-xs text-muted-foreground">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Color scales</h2>
        <p className="mb-6 text-sm text-muted-foreground">Hover each swatch to see the step and hex value. ★ = original brand color.</p>
        <div className="space-y-6">
          <ColorScale name="Blue" steps={blueScale} hexes={blueHex} />
          <ColorScale name="Mint" steps={blueScale} hexes={mintHex} />
          <ColorScale name="Lime" steps={blueScale} hexes={limeHex} />
          <ColorScale name="Steel" steps={blueScale} hexes={steelHex} />
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Dark neutrals</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Swatch</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Name</th>
                <th className="pb-3 pr-4 font-mono font-medium text-muted-foreground">Hex</th>
                <th className="pb-3 font-medium text-muted-foreground">Role</th>
              </tr>
            </thead>
            <tbody>
              {neutralsDark.map((c) => (
                <tr key={c.name} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <div className="h-6 w-10 rounded border border-border" style={{ background: c.hex }} />
                  </td>
                  <td className="py-3 pr-4">{c.name}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{c.hex}</td>
                  <td className="py-3 text-muted-foreground">{c.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-light">Semantic tokens</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {semanticColors.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-14" style={{ background: c.hex }} />
              <div className="p-3">
                <p className="text-sm font-medium">{c.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-3 text-base font-medium">Usage rules</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Neutrals carry 90%+ of every screen.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Blue is the interactive color — links, primary CTAs, focus rings.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Mint and lime are decorative — one per block, never stacked together.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Never use lime or mint as body text — contrast fails on white.</li>
          <li className="flex gap-2"><span className="text-brand-mint">→</span>Borders on dark: rgba(255,255,255,0.10) subtle, 0.15 card ring.</li>
        </ul>
      </section>
    </div>
  );
}
