import type { Metadata } from "next";

export const metadata: Metadata = { title: "Getting Started" };

export default function GettingStartedPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="overline mb-3">Introduction</p>
        <h1 className="mb-4 text-4xl font-light">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Darwoft Design System is a dark-first, editorial-tech design system built on top of
          shadcn/ui and Tailwind CSS. This guide gets you from zero to running in under 5 minutes.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-light">Prerequisites</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2"><span className="text-brand-mint">✓</span> Next.js 14+ or any React project</li>
          <li className="flex items-center gap-2"><span className="text-brand-mint">✓</span> Tailwind CSS v3+</li>
          <li className="flex items-center gap-2"><span className="text-brand-mint">✓</span> Node.js 18+</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-light">Installation</h2>

        <Step n={1} title="Initialize shadcn/ui">
          <p className="mb-3 text-sm text-muted-foreground">If you don&apos;t have shadcn/ui yet:</p>
          <Code>npx shadcn@latest init</Code>
        </Step>

        <Step n={2} title="Replace globals.css">
          <p className="mb-3 text-sm text-muted-foreground">
            Download the Darwoft CSS variables and replace your existing globals.css:
          </p>
          <Code>{`curl -o app/globals.css https://design.darwoft.com/globals.css`}</Code>
          <p className="mt-3 text-sm text-muted-foreground">
            Or copy manually from{" "}
            <a href="/globals.css" className="text-primary underline underline-offset-4">
              /globals.css
            </a>
          </p>
        </Step>

        <Step n={3} title="Replace tailwind.config">
          <p className="mb-3 text-sm text-muted-foreground">
            Merge the Darwoft Tailwind config (or replace yours entirely):
          </p>
          <Code>{`curl -o tailwind.config.js https://design.darwoft.com/tailwind.config.js`}</Code>
        </Step>

        <Step n={4} title="Install dependencies">
          <Code>npm i lucide-react tailwindcss-animate</Code>
          <p className="mt-3 text-sm text-muted-foreground">
            Lucide is the icon library. tailwindcss-animate powers accordion and fade animations.
          </p>
        </Step>

        <Step n={5} title="Update components.json">
          <p className="mb-3 text-sm text-muted-foreground">
            Copy the Darwoft shadcn config so the CLI adds components with the right settings:
          </p>
          <Code>{`curl -o components.json https://design.darwoft.com/components.json`}</Code>
        </Step>

        <Step n={6} title="Add CLAUDE.md (optional but recommended)">
          <p className="mb-3 text-sm text-muted-foreground">
            This file makes Claude Code apply the design system automatically on every prompt:
          </p>
          <Code>{`curl -o CLAUDE.md https://design.darwoft.com/AI-instructions.md`}</Code>
        </Step>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light">Non-negotiables</h2>
        <p className="text-muted-foreground">Always follow these rules when building with Darwoft:</p>
        <ul className="space-y-2 text-sm">
          {rules.map((r) => (
            <li key={r} className="flex items-start gap-2">
              <span className="mt-0.5 text-brand-mint">→</span>
              <span className="text-muted-foreground">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-2 text-lg font-medium">For AI tools (Lovable, Cursor, Claude Code)</h2>
        <p className="text-sm text-muted-foreground">
          Add the{" "}
          <a href="/docs/ai-instructions" className="text-primary underline underline-offset-4">
            AI Instructions
          </a>{" "}
          page to your context. It tells any AI exactly how to apply the system: which tokens to use,
          which patterns to avoid, and all component rules.
        </p>
      </section>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
        {n}
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-base font-medium">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-sm text-brand-mint">
      <code>{children}</code>
    </pre>
  );
}

const rules = [
  "Dark-first — .dark on <html>. Never default to light.",
  "Fraunces for all headings (H1–H3). Inter for body and UI.",
  "Pill buttons — always rounded-pill. Never square interactive surfaces.",
  "16px card radius (rounded-xl). 12px for floating panels.",
  "Underline fields only — no boxed inputs. Transparent bg + bottom border + mint on focus.",
  "One accent color per block. Never stack mint + lime + blue together.",
  "Lucide icons at 2px stroke, 20px default size.",
  "AA contrast for all functional text. Mint/lime are decorative only.",
  "Respect prefers-reduced-motion for all animations.",
];
