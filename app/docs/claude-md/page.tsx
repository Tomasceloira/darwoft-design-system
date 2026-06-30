import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "CLAUDE.md" };

export default function ClaudeMdPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="overline mb-3">For AI</p>
        <h1 className="mb-4 text-4xl font-light">CLAUDE.md</h1>
        <p className="text-lg text-muted-foreground">
          CLAUDE.md is auto-loaded by Claude Code at the start of every session. Placing it in your
          project root means Claude Code always knows the design system rules without you having to
          repeat them.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-light">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 shadow-ring">
            <p className="mb-2 font-mono text-2xl font-light text-brand-mint">01</p>
            <p className="text-sm font-medium">Auto-loaded</p>
            <p className="mt-1 text-sm text-muted-foreground">Claude Code reads CLAUDE.md at the start of every new session in your project directory.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-ring">
            <p className="mb-2 font-mono text-2xl font-light text-brand-mint">02</p>
            <p className="text-sm font-medium">Always applied</p>
            <p className="mt-1 text-sm text-muted-foreground">The rules in CLAUDE.md apply to every prompt — you don't need to mention the design system each time.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-ring">
            <p className="mb-2 font-mono text-2xl font-light text-brand-mint">03</p>
            <p className="text-sm font-medium">One source of truth</p>
            <p className="mt-1 text-sm text-muted-foreground">Update CLAUDE.md when the design system evolves — all future Claude Code sessions get the updated rules.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-light">Install</h2>
        <pre className="overflow-x-auto rounded-lg bg-card px-4 py-3 font-mono text-sm text-brand-mint">
          {`curl -o CLAUDE.md https://design.darwoft.com/AI-instructions.md`}
        </pre>
        <p className="mt-3 text-sm text-muted-foreground">
          Place the file in your project root. Claude Code picks it up automatically.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-light">Other AI tools</h2>
        <div className="space-y-3">
          {[
            { tool: "Lovable / v0 / Bolt", instruction: "Paste the file contents as a system prompt or attach it as a context file at project start." },
            { tool: "Cursor", instruction: "Copy contents into .cursorrules in your project root." },
            { tool: "Windsurf", instruction: "Copy contents into .windsurfrules in your project root." },
            { tool: "GitHub Copilot", instruction: "Add to .github/copilot-instructions.md." },
          ].map((t) => (
            <div key={t.tool} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-medium">{t.tool}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.instruction}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-3">
        <a
          href="/AI-instructions.md"
          download="CLAUDE.md"
          className="inline-flex items-center gap-2 rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Download CLAUDE.md
        </a>
        <Link
          href="/docs/ai-instructions"
          className="inline-flex items-center gap-2 rounded-pill border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          AI Instructions →
        </Link>
      </div>
    </div>
  );
}
