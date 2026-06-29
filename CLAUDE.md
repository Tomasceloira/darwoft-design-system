# Darwoft Design System — Claude Code instructions

This repo uses the **Darwoft Design System**. Follow it on every UI task. The canonical token + component spec lives in `design.md` (Google `alpha` spec format — tokens, components, responsive behavior, known gaps); `design-system.md` holds the rationale; the live visual source of truth is `storybook.html`.

> **Deprecated — do not use as reference:** `AI-instructions.md` is superseded by `design.md` and kept for history only. `design.md` is the single source of truth for tokens and components. Never read `AI-instructions.md` to resolve a design decision — doing so reintroduces conflicting criteria.

## Brand in one line
Dark-first. **Fraunces** = scores, stats, hero numbers only. **Inter** = all UI labels, card titles, body copy. **`font-mono`** (Fira Code) = multipliers, numeric fields, technical readouts. Near-black canvas, off-white text, three electric accents — **mint `#42FFCA`**, **lime `#E5F33C`**, **blue `#118DF0`** — used sparingly. Buttons are **pills**, cards are **16px**.

## Hard rules
1. **Tokens only** — use CSS vars / Tailwind classes (`bg-primary`, `text-foreground`, `rounded-xl`, `rounded-pill`). Never hardcode hex inside components. Exception: `#0C0D0D` page shell background is deeper than any token.
2. **Dark is default** — build for `.dark` first; light is the inverse. `<html class="dark">`.
3. **Type — three voices, strict roles:**
   - `font-display` (Fraunces 300–400): scores, totals, stat numbers, pull-quotes, hero display. NOT for card titles or UI labels.
   - `font-sans` (Inter): all card titles, body, UI labels, nav. Card titles inside a card = Inter 14px / 600, not Fraunces.
   - `font-mono` (Fira Code): multipliers, stakes/amounts, time/countdown readouts, any numeric field where tabular alignment matters. Use `font-variant-numeric: tabular-nums`.
4. **Shape** — buttons/chips/badges `rounded-pill`; cards/modals/tables `rounded-xl` (16px); menus/popovers/items `rounded-lg` (12px); **fields = underline (no radius)**.
5. **Accents are emphasis only** — one per block; never mint/lime as small body text; dark text on accent fills.
6. **Every interactive element** has hover, focus (2px blue ring), active, disabled.
7. **AA contrast** — `muted-foreground` for secondary text only.

## Conventions that OVERRIDE shadcn defaults
- **Fields are underline**, never boxed (input, textarea, select, input-group, OTP): transparent + 1px bottom border, focus = mint underline.
- **Select / Native Select = custom dropdown**, never a raw `<select>` (themed `.menu` popover).
- **Segmented controls = pill-on-track** (Tabs, Toggle Group, segmented Button Group). Active pill: `bg-card + shadow-sm`. Inactive: transparent. Count badge on active tab: `bg-primary`.
- **One status pill** (badge = table status). **One chevron** (Lucide `chevron-down`; `›` only for submenu/side-nav).
- **Icons = Lucide @ 2px**, `currentColor`. Sizes: 12px tiny labels · 14px subheaders · 15px section headers · 16px buttons/nav · 20/24/32 larger contexts. No emoji/mixed sets.
- **Section headers** = `color:hsl(var(--brand-steel))` + 15px Lucide icon + `font-size:12px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; margin-bottom:14px`. NOT `.overline` class alone.
- **Motion** honors `prefers-reduced-motion`. Scroll reveal once + 80ms stagger; parallax only on decorative glass; durations 150–250ms UI / 400–600ms reveals.
- **Responsive font sizes** use `clamp()` for hero numbers: `font-size: clamp(40px, 11vw, 60px)`. Never fixed px for large display type in mobile views.
- **Score/stat separators** use `color:hsl(var(--brand-steel))`, not `--muted-foreground`.

## Mobile app shell rules
- **Never wrap a mobile app in a floating card with a border.** Full-bleed shell: `min-height:100vh; background:hsl(var(--background))`, no outer border/radius.
- **Client brand override** = scope all custom tokens to a `.frame` class: `--primary`, `--ring`, `--accent`, plus semantic aliases like `--win`, `--loss`, `--brand-ink`. Never override globally; never use raw hex inside components.
- **Sticky floating panels** (banca counter, sticky nav) = `position:sticky; top:8px` + glassmorphism: `background:color-mix(in srgb, hsl(var(--card)) 92%, transparent); backdrop-filter:blur(8px); border:1px solid hsl(var(--border)); border-radius:14px`.
- **Fixed bottom CTA bar** = `position:fixed; bottom:0; backdrop-filter:blur(12px); background:color-mix(in srgb,hsl(var(--background)) 84%,transparent); border-top:1px solid hsl(var(--border)); padding: 14px 16px calc(16px + env(safe-area-inset-bottom))`. Button centered inside, 240px wide (not full-width). Add 104px spacer div above footer.
- **Card bleeding** = extend content to card edges with `margin:-[padding]; padding:[padding]` on the inner wrapper. For a card with `padding:26px` the bleed wrapper is `margin:-26px; padding:26px; border-radius:var(--radius-xl); overflow:hidden`.
- **Tinted backgrounds** = `background:color-mix(in srgb, hsl(var(--primary)) 12%, transparent)` for selected rows, `color-mix(in srgb, var(--success-500) 10%, hsl(var(--card)))` for positive-tinted cards. Never hardcode rgba.

## Interactive option buttons
Always use the DS `Button` component with a `variant` prop. Never custom divs with `role="button"`. State-to-variant mapping:
- Unselected / default → `outline`
- Selected / active → `primary`
- Disabled / locked → `ghost`
- Error / invalid selection → `destructive`
- Two-line content (label + value): label in `<span style="font-size:13px">`, value in `<span style="font-family:var(--font-mono);font-weight:700;opacity:.82">`.

## Setup (once)
```bash
npx shadcn@latest init           # then replace globals.css + merge tailwind.config.js from this folder
npm i lucide-react tailwindcss-animate
# fonts: Fraunces + Inter + Fira Code (next/font or @import in globals.css)
```
- `components.json` is included — `npx shadcn@latest add button card input …` then restyle per the rules above.
- Color scales are wired in `tailwind.config.js` (`blue-50…950`, etc.; **`-500` = original brand color**).

## Workflow
Copy the closest pattern from `storybook.html`, keep tokens, ship light+dark + all states. Definition of done: tokens only · underline fields · custom selects · pill-on-track segments · Lucide @2px · focus rings · AA · reduced-motion · `font-mono` for numbers · `brand-steel` section headers · full-bleed mobile shell. When unsure, mirror `storybook.html`; if genuinely ambiguous, ask. Mobile patterns are captured in `design.md` (`app-shell`, `sticky-glass-panel`, `bottom-cta-bar`) plus the rules above and `storybook.html`.
