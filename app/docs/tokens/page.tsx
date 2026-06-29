import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Design Tokens" };

const colors = [
  { name: "Brand Blue", hex: "#118DF0", token: "brand.blue", var: "--brand-blue", role: "Primary / interactive, links, focus" },
  { name: "Brand Mint", hex: "#42FFCA", token: "brand.mint", var: "--brand-mint", role: "Signature accent, highlight, success-ish" },
  { name: "Brand Lime", hex: "#E5F33C", token: "brand.lime", var: "--brand-lime", role: "Signature accent, highlight" },
  { name: "Brand Steel", hex: "#455A6F", token: "brand.steel", var: "--brand-steel", role: "Overlines, muted labels" },
  { name: "Ink 950", hex: "#101111", token: "—", var: "—", role: "Deepest sections" },
  { name: "Ink 900", hex: "#151515", token: "—", var: "—", role: "Body background (dark)" },
  { name: "Ink 850", hex: "#1C1C1E", token: "—", var: "—", role: "Card surface (dark)" },
  { name: "Foreground", hex: "#F2F2F2", token: "—", var: "--foreground", role: "Primary text on dark" },
  { name: "Muted fg", hex: "#727279", token: "—", var: "--muted-foreground", role: "Secondary / muted text" },
  { name: "Success", hex: "#1FBF8F", token: "success", var: "--success", role: "Positive state" },
  { name: "Warning", hex: "#E5B53C", token: "warning", var: "--warning", role: "Caution state" },
  { name: "Destructive", hex: "#F0533B", token: "destructive", var: "--destructive", role: "Error / destructive" },
];

const typeScale = [
  { name: "xs", size: "12px", lh: "1.5", weight: "400" },
  { name: "sm", size: "14px", lh: "1.5", weight: "400" },
  { name: "base", size: "16px", lh: "1.5", weight: "400" },
  { name: "lg", size: "18px", lh: "1.65", weight: "400" },
  { name: "xl", size: "24px", lh: "1.3", weight: "400–300" },
  { name: "2xl", size: "32px", lh: "1.2", weight: "400–300" },
  { name: "3xl", size: "40px", lh: "1.1", weight: "400–300" },
  { name: "4xl", size: "56px", lh: "1.05", weight: "300" },
  { name: "5xl", size: "72px", lh: "1.05", weight: "300" },
  { name: "display", size: "120px", lh: "1.0", weight: "300" },
];

const radiusTokens = [
  { name: "sm", value: "4px", use: "Focus rings, small indicators" },
  { name: "md", value: "8px", use: "Inputs (underline still preferred), selects" },
  { name: "lg", value: "12px", use: "Menus, popovers" },
  { name: "xl", value: "16px ★", use: "Cards — Darwoft signature" },
  { name: "pill", value: "9999px ★", use: "Buttons, chips, badges — always" },
];

const motionTokens = [
  { name: "fast", value: "150ms", use: "Hover states, tooltip" },
  { name: "default", value: "250ms", use: "Accordion, modal open" },
  { name: "slow", value: "400ms", use: "Page transitions, fade-up" },
  { name: "cinematic", value: "600ms", use: "Marketing hero, storytelling" },
];

export default function TokensPage() {
  return (
    <div className="space-y-14">
      <div>
        <p className="overline mb-3">Tokens</p>
        <h1 className="mb-4 text-4xl font-light">Design Tokens</h1>
        <p className="text-lg text-muted-foreground">
          All tokens are available as CSS variables, Tailwind classes, and in{" "}
          <a href="/tokens.json" className="text-primary underline underline-offset-4">
            tokens.json
          </a>{" "}
          (W3C / Tokens Studio compatible).
        </p>
      </div>

      {/* Colors */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Colors</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Swatch</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Name</th>
                <th className="pb-3 pr-4 font-mono font-medium text-muted-foreground">Hex</th>
                <th className="pb-3 pr-4 font-mono font-medium text-muted-foreground">CSS Var</th>
                <th className="pb-3 font-medium text-muted-foreground">Role</th>
              </tr>
            </thead>
            <tbody>
              {colors.map((c) => (
                <tr key={c.name} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <div
                      className="h-6 w-10 rounded border border-border"
                      style={{ background: c.hex }}
                    />
                  </td>
                  <td className="py-3 pr-4">{c.name}</td>
                  <td className="py-3 pr-4 font-mono text-muted-foreground">{c.hex}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{c.var}</td>
                  <td className="py-3 text-muted-foreground">{c.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Full color scales (50–950) for each brand color are available in{" "}
          <a href="/tokens.json" className="text-primary underline underline-offset-4">tokens.json</a>.
        </p>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Typography Scale</h2>
        <p className="mb-6 text-muted-foreground">
          <strong className="text-foreground">Fraunces</strong> (serif) for display headings H1–H3.{" "}
          <strong className="text-foreground">Inter</strong> for all body, UI, and large light statements.
        </p>
        <div className="space-y-2">
          {typeScale.map((t) => (
            <div key={t.name} className="flex items-baseline gap-4 border-b border-border/50 py-3">
              <code className="w-16 shrink-0 font-mono text-xs text-muted-foreground">{t.name}</code>
              <span style={{ fontSize: Math.min(parseInt(t.size), 40), lineHeight: t.lh }}>
                The quick brown fox
              </span>
              <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground">
                {t.size} / {t.lh}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Border Radius</h2>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {radiusTokens.map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-card p-4">
              <div
                className="mb-3 h-12 w-full bg-primary/20"
                style={{ borderRadius: r.value === "9999px" ? "9999px" : r.value }}
              />
              <p className="text-sm font-medium">rounded-{r.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{r.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{r.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motion */}
      <section>
        <h2 className="mb-6 text-2xl font-light">Motion</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {motionTokens.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-medium">duration-{m.name}</p>
              <p className="font-mono text-xl text-brand-mint">{m.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.use}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Timing functions: <code className="text-brand-mint">ease-spring</code> (cubic-bezier 0.34,1.56,0.64,1),{" "}
          <code className="text-brand-mint">ease-out</code>, <code className="text-brand-mint">ease-in-out</code>.
          Always add <code className="text-brand-mint">@media (prefers-reduced-motion: reduce)</code>.
        </p>
      </section>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-sm font-medium">Raw token file</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Import into Figma via Tokens Studio, or consume directly in your build pipeline:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-muted px-4 py-3 font-mono text-sm text-brand-mint">
          <code>https://design.darwoft.com/tokens.json</code>
        </pre>
      </div>
    </div>
  );
}
