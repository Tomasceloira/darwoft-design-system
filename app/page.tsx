import Link from "next/link";
import { ArrowRight, Layers, Palette, Type, Zap, Code2, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(207_88%_50%/0.15),transparent)]" />
        <div className="container relative py-24 md:py-36 lg:py-48">
          <div className="mx-auto max-w-3xl text-center">
            <p className="overline mb-6">Darwoft Design System v2.0</p>
            <h1 className="mb-6 text-4xl font-light md:text-5xl lg:text-6xl">
              Build interfaces that feel{" "}
              <span className="text-brand-mint">deliberate</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              Dark-first, editorial-tech design system. Drop-in tokens, CSS variables, and
              Tailwind config. shadcn/ui compatible. Built for AI-assisted development.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/tokens"
                className="inline-flex items-center gap-2 rounded-pill border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Browse tokens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="container py-24">
        <div className="mb-16 text-center">
          <p className="overline mb-3">What&apos;s included</p>
          <h2 className="text-3xl font-light">Everything you need</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 shadow-ring transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-medium">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick install */}
      <section className="border-t border-border bg-muted/30">
        <div className="container py-24">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <p className="overline mb-3">Quick start</p>
              <h2 className="text-3xl font-light">Up in 60 seconds</h2>
            </div>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-sm font-medium">{s.label}</p>
                    <code className="block rounded-lg bg-card px-4 py-3 font-mono text-sm text-brand-mint">
                      {s.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/docs/getting-started"
                className="text-sm text-primary underline underline-offset-4 hover:opacity-80"
              >
                Full installation guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Color preview strip */}
      <section className="container py-24">
        <div className="mb-10 text-center">
          <p className="overline mb-3">Brand palette</p>
          <h2 className="text-3xl font-light">Four accent colors. Infinite contrast.</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {palette.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-border">
              <div className="h-24" style={{ background: p.hex }} />
              <div className="bg-card p-3">
                <p className="text-sm font-medium">{p.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{p.hex}</p>
                <p className="font-mono text-xs text-muted-foreground">{p.token}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/docs/tokens" className="text-sm text-primary underline underline-offset-4 hover:opacity-80">
            View all tokens →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container py-24 text-center">
          <h2 className="mb-4 text-3xl font-light">
            Open source. <span className="text-brand-mint">Made for AI.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Every file is designed to be consumed by Claude Code, Lovable, Vercel, and any
            AI-assisted dev workflow.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/darwoft/darwoft-design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-4 w-4" /> View on GitHub
            </a>
            <Link
              href="/docs/ai-instructions"
              className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Code2 className="h-4 w-4" /> AI Instructions

            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: Palette,
    title: "Design Tokens",
    description: "W3C-compatible tokens.json for Figma Tokens Studio. Color scales, typography, spacing, radius, and motion all in one file.",
  },
  {
    icon: Type,
    title: "Typography System",
    description: "Fraunces (display serif) + Inter (UI sans). Editorial scale from 12px to 120px with tight line-heights.",
  },
  {
    icon: Layers,
    title: "shadcn/ui Compatible",
    description: "Drop-in globals.css and tailwind.config.js. All CSS variables follow the shadcn convention — add any component instantly.",
  },
  {
    icon: Zap,
    title: "Motion Tokens",
    description: "Fast (150ms), default (250ms), slow (400ms), cinematic (600ms). Spring, ease-out, and ease-in-out timing functions.",
  },
  {
    icon: Code2,
    title: "AI-Ready",
    description: "AI-instructions.md and CLAUDE.md auto-load in Claude Code. Any AI can apply the system correctly on first try.",
  },
  {
    icon: ExternalLink,
    title: "Open Source",
    description: "MIT licensed. All assets, tokens, and config files are public and versioned. Consume via URL or npm (coming soon).",
  },
];

const steps = [
  { label: "Init shadcn/ui in your project", code: "npx shadcn@latest init" },
  { label: "Replace globals.css with Darwoft tokens", code: "curl -o app/globals.css https://design.darwoft.com/globals.css" },
  { label: "Replace tailwind.config.js", code: "curl -o tailwind.config.js https://design.darwoft.com/tailwind.config.js" },
  { label: "Install icon library", code: "npm i lucide-react tailwindcss-animate" },
];

const palette = [
  { name: "Brand Blue", hex: "#118DF0", token: "--brand-blue" },
  { name: "Brand Mint", hex: "#42FFCA", token: "--brand-mint" },
  { name: "Brand Lime", hex: "#E5F33C", token: "--brand-lime" },
  { name: "Brand Steel", hex: "#455A6F", token: "--brand-steel" },
];
