import type { Metadata } from "next";
import Link from "next/link";
import { Copy, Download } from "lucide-react";

export const metadata: Metadata = { title: "AI Instructions" };

export default function AIInstructionsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="overline mb-3">For AI</p>
        <h1 className="mb-4 text-4xl font-light">AI Instructions</h1>
        <p className="text-lg text-muted-foreground">
          These instructions tell Claude Code, Lovable, Cursor, and other AI tools
          exactly how to apply the Darwoft Design System. Add them to your project&apos;s
          CLAUDE.md or paste them into any AI system prompt.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="/AI-instructions.md"
          download
          className="inline-flex items-center gap-2 rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" /> Download AI-instructions.md
        </a>
        <a
          href="/AI-instructions.md"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-pill border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          View raw
        </a>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-light">How to use</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-sm font-medium">Claude Code</p>
            <p className="text-sm text-muted-foreground">
              Place <code className="text-brand-mint">AI-instructions.md</code> in your project root as{" "}
              <code className="text-brand-mint">CLAUDE.md</code>. It auto-loads at the start of every session.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-muted px-4 py-3 font-mono text-xs text-brand-mint">
              {`curl -o CLAUDE.md https://design.darwoft.com/AI-instructions.md`}
            </pre>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-sm font-medium">Lovable / v0 / Bolt</p>
            <p className="text-sm text-muted-foreground">
              Paste the contents into the system prompt or attach it as a context file at the start
              of your project.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-sm font-medium">Cursor / Windsurf</p>
            <p className="text-sm text-muted-foreground">
              Add to <code className="text-brand-mint">.cursorrules</code> or{" "}
              <code className="text-brand-mint">.windsurfrules</code>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-light">What the instructions cover</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {covered.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span className="mt-0.5 text-brand-mint">→</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-light">CLAUDE.md</h2>
        <p className="mb-4 text-muted-foreground">
          The CLAUDE.md in this repo&apos;s root contains the same instructions in a compact format
          optimized for Claude Code&apos;s auto-load system.
        </p>
        <div className="flex gap-3">
          <a
            href="/AI-instructions.md"
            download="CLAUDE.md"
            className="inline-flex items-center gap-2 rounded-pill border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" /> Download CLAUDE.md
          </a>
        </div>
      </section>
    </div>
  );
}

const covered = [
  "Stack: Next.js + Tailwind + shadcn/ui — which tokens and classes to use",
  "Color rules: when to use brand-blue vs mint vs lime, and when NOT to",
  "Typography: Fraunces for headings, Inter for body — exact weight and size rules",
  "Button rules: always rounded-pill, three variants, no square buttons",
  "Input rules: underline only, transparent bg, mint on focus — never boxed",
  "Card rules: rounded-xl (16px), shadow-ring on dark",
  "Icon rules: Lucide at 2px stroke, 20px default",
  "Motion rules: which duration token for each pattern",
  "Accessibility: AA contrast, prefers-reduced-motion, focus-visible",
  "Things to never do: lime/mint as body text, nested accents, boxed inputs",
];
