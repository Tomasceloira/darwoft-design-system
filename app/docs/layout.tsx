import Link from "next/link";

const sidebar = [
  {
    group: "Introduction",
    items: [
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/principles", label: "Design Principles" },
    ],
  },
  {
    group: "Tokens",
    items: [
      { href: "/docs/tokens", label: "Overview" },
      { href: "/docs/tokens/colors", label: "Colors" },
      { href: "/docs/tokens/typography", label: "Typography" },
      { href: "/docs/tokens/spacing", label: "Spacing & Radius" },
      { href: "/docs/tokens/motion", label: "Motion" },
    ],
  },
  {
    group: "Components",
    items: [
      { href: "/docs/components", label: "Overview" },
      { href: "/docs/components/buttons", label: "Buttons" },
      { href: "/docs/components/cards", label: "Cards" },
      { href: "/docs/components/inputs", label: "Inputs" },
      { href: "/docs/components/badges", label: "Badges & Chips" },
    ],
  },
  {
    group: "For AI",
    items: [
      { href: "/docs/ai-instructions", label: "AI Instructions" },
      { href: "/docs/claude-md", label: "CLAUDE.md" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-12 py-12">
      <aside className="hidden w-56 shrink-0 md:block">
        <nav className="sticky top-24 space-y-6">
          {sidebar.map((group) => (
            <div key={group.group}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-overline text-muted-foreground">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <article className="prose prose-invert max-w-none">{children}</article>
      </div>
    </div>
  );
}
