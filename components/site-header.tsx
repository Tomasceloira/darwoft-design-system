"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

const nav = [
  { href: "/docs/getting-started", label: "Docs" },
  { href: "/docs/tokens", label: "Tokens" },
  { href: "/docs/components", label: "Components" },
  { href: "/docs/ai-instructions", label: "AI" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-display text-base font-light">
          <span className="text-brand-mint">◆</span>
          <span>Darwoft DS</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                pathname?.startsWith(item.href)
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden rounded-pill bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary sm:block">
            v2.0.0
          </span>
          <a
            href="https://github.com/darwoft/darwoft-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
