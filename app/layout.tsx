import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Darwoft Design System",
    template: "%s — Darwoft Design System",
  },
  description:
    "Dark-first, editorial-tech design system. Fraunces + Inter, near-black canvas, electric mint/lime/blue accents. shadcn/ui compatible.",
  keywords: ["design system", "darwoft", "shadcn", "tailwind", "tokens"],
  authors: [{ name: "Darwoft", url: "https://darwoft.com" }],
  openGraph: {
    type: "website",
    url: "https://design.darwoft.com",
    title: "Darwoft Design System",
    description: "Dark-first, editorial-tech design system for building with AI.",
    siteName: "Darwoft Design System",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
