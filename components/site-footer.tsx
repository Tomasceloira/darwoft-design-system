import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <a href="https://darwoft.com" className="text-foreground underline underline-offset-4 hover:text-primary">
            Darwoft
          </a>
          . MIT licensed.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/docs/getting-started" className="hover:text-foreground">Docs</Link>
          <a href="https://github.com/darwoft/darwoft-design-system" className="hover:text-foreground">GitHub</a>
          <a href="https://darwoft.com" className="hover:text-foreground">darwoft.com</a>
        </div>
      </div>
    </footer>
  );
}
