# Darwoft Design System

Dark-first, editorial-tech design system. Built on shadcn/ui + Tailwind CSS. Designed to be consumed by AI-assisted development tools.

**[→ View Docs](https://design.darwoft.com)**

## What's in this repo

| File | What it is |
|---|---|
| `public/tokens.json` | W3C / Tokens Studio design tokens |
| `public/globals.css` | shadcn CSS variables (light + dark) + color scales |
| `public/tailwind.config.js` | Tailwind theme config |
| `public/components.json` | shadcn CLI config |
| `public/AI-instructions.md` | System prompt for Claude Code / Lovable / Cursor |
| `app/` | Documentation site (Next.js) |

## Quick start for your project

```bash
# 1. Init shadcn
npx shadcn@latest init

# 2. Replace tokens
curl -o app/globals.css https://design.darwoft.com/globals.css
curl -o tailwind.config.js https://design.darwoft.com/tailwind.config.js
curl -o components.json https://design.darwoft.com/components.json

# 3. Install deps
npm i lucide-react tailwindcss-animate

# 4. Add AI instructions (Claude Code)
curl -o CLAUDE.md https://design.darwoft.com/AI-instructions.md
```

## Design principles

- **Dark by default** — `.dark` on `<html>`. Light mode is a faithful inverse.
- **Editorial contrast** — Fraunces (serif) + Inter (sans). Headlines light (300–400).
- **Accents earn attention** — Mint, Lime, Blue reserved for emphasis. Never as large fields.
- **Calm, cinematic motion** — UI: 150–250ms. Storytelling: 400–600ms.
- **Generous space** — 4/8-pt grid. Breathing room around type and cards.

## Non-negotiables

- Pill buttons (`rounded-pill`) — never square
- 16px card radius (`rounded-xl`) — Darwoft signature
- Underline inputs only — no boxed fields
- Fraunces for H1–H3, Inter for body
- Lucide icons at 2px stroke
- One accent color per block — never stacked

## Stack

- Next.js 14 (App Router)
- Tailwind CSS v3
- shadcn/ui
- Lucide React
- TypeScript

## License

MIT — [Darwoft](https://darwoft.com)
