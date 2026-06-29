> ⚠️ **DEPRECATED — DO NOT USE AS REFERENCE.**
> This file has been superseded by **`design.md`** (the canonical token + component spec, Google `alpha` format) and **`CLAUDE.md`** (operative rules). It is kept for history only. Do **not** read this file to make design decisions — use `design.md` as the single source of truth. Relying on this file reintroduces conflicting criteria.

# Using the Darwoft Design System (instructions for AI agents)

You are generating UI for **Darwoft**. Follow this system exactly. Artifacts in this folder: `tokens.json` (Figma/Tokens Studio), `globals.css` + `tailwind.config.js` (shadcn / Claude Code), `storybook.html` (live visual reference of every component, variant, icon, scale and motion), `Formas Glass/` + `Logos Darwoft/` (brand assets). Read `design-system.md` for full rationale.

## The 10-second brief
Dark-first. Serif headlines (**Fraunces**) + sans body (**Inter**). Near-black canvas, off-white text, and three electric accents — **mint `#42FFCA`**, **lime `#E5F33C`**, **blue `#118DF0`** — used sparingly. Buttons are **pills**, cards are **16px** radius. Never square; never wallpaper with accents.

## Hard rules (do not violate)
1. **Use tokens, never hardcoded values.** Reference CSS variables (`hsl(var(--primary))`) or Tailwind classes (`bg-primary`, `text-foreground`, `rounded-xl`, `rounded-pill`). No raw hex in components.
2. **Dark is the default theme.** Build for `.dark` first; light mode is the inverse. Set `<html class="dark">` (or `data-theme="dark"`).
3. **Type:** headings → `font-display` (Fraunces, weight 300–400, `tracking-display`). Body/UI → `font-sans` (Inter). Big statement lines → Inter `font-light` (300).
4. **Shape:** buttons/chips/badges → `rounded-pill`. Cards/dialogs/panels → `rounded-xl` (16px). Inputs/menus → `rounded-md`/`rounded-lg`.
5. **Accents are emphasis only.** One accent per block. Never use mint/lime as small body text. On any light fill, accent text must be near-black (`#101111`).
6. **Every interactive element** needs hover, focus (2px blue ring), active, and disabled states.
7. **Contrast AA.** Use `muted-foreground` for secondary text, not for primary reading. Verify any new pairing ≥ 4.5:1 (text) / 3:1 (UI).

## Token quick map (shadcn variables)
- Surfaces: `--background` `--card` `--popover` `--secondary` `--muted`
- Text: `--foreground` `--muted-foreground` `--card-foreground`
- Actions: `--primary` (blue) + `--primary-foreground`; `--accent` (mint) + `--accent-foreground`; `--destructive`
- Lines/focus: `--border` `--input` `--ring`
- Brand extras: `--brand-blue` `--brand-mint` `--brand-lime` `--brand-steel`, `--success`, `--warning`
- Radius: `--radius-sm/md/lg/xl/pill` · Shadow: `--shadow-ring/sm/md/lg` · Motion: `--duration-*`, `--ease-*`

## Conventions that OVERRIDE shadcn defaults
These are the Darwoft-specific deviations — apply them everywhere, they are the most common source of mistakes:
1. **Fields are underline, never boxed.** Input, Textarea, Select, Native Select, Input Group, Input OTP → transparent + 1px bottom border, `rounded-none`, focus = `border-b` mint. No boxes, no rings on fields.
2. **Select & Native Select are CUSTOM dropdowns, not native `<select>`.** Use an underline trigger (`.inp` + chevron) that opens a `.popover`/`.menu` so the option list matches the dark theme. Never ship a raw `<select>` (its OS popup can't be themed).
3. **Segmented controls are pill-on-track.** Tabs, Toggle Group and the segmented Button Group share the look: muted `track` + active pill (`bg-card` + `shadow-sm`). Don't use boxed/connected segments.
4. **One status pill.** Badge status and table status are the same component (success/warning/neutral tints, dot optional). Don't invent a second status style.
5. **One chevron.** A single chevron-down (Lucide `chevron-down`) for accordions, selects, comboboxes, date pickers, dropdown triggers. `›` (chevron-right) is reserved for submenu items and side-nav rows.
6. **Surfaces 16px / floating 12px.** Cards, sections, modals, tables → `rounded-xl` (16). Menus, popovers, tooltips, list items → `rounded-lg` (12).
7. **Icons = Lucide @ 2px**, `currentColor`, sizes 16/20/24/32. No emoji, no filled/mixed sets, never < 16px.

## Component reference
Mirror `storybook.html` for exact markup. Every component must ship **light + dark**, all **states** (hover/focus-ring/active/disabled) and use **tokens only**.

**Actions**
- **Button** — pill always (`rounded-pill`), `font-medium`. Variants: `primary` (blue, max one per view), `accent` (mint, dark text), `secondary`, `outline`, `ghost`, `link`, `destructive`. Sizes 34/42/50px; icon-only = square pill. Loading = inline spinner + label; disabled = opacity .45. Hover shades the fill; `:active` presses (scale .985).
- **Button Group** — *segmented* (single-select) = pill-on-track with one `.on` pill. *Split action* = a primary pill + a small primary icon pill (chevron) — NOT inside a track.
- **Toggle** (standalone) — `default`/`outline`, sizes sm/md/lg; pressed `.on` = `secondary` bg + foreground border. **Toggle Group** — pill-on-track, single or multiple selection.

**Inputs & forms**
- **Input / Textarea** — underline (see convention 1). Error → `border-b-destructive` + `.hint` text. States: default/focus(mint)/disabled/read-only/file/with-button.
- **Label** — 13px medium; pair with control via `for`/`id`.
- **Field / Fieldset** — group label + control + description + validation; use for forms (input, textarea, select, radio, switch rows).
- **Input Group** — underline container with prefix/suffix add-ons (icon, text, kbd, spinner, button).
- **Input OTP** — segmented cells with bottom-border underline; optional separator; disabled state.
- **Checkbox / Radio Group** — `accent-color: primary`; support a card-with-description variant. **Switch** — pill track, white thumb, spring ease; disabled dims.
- **Slider** — default / steps / disabled / vertical; thumb = primary with card ring.

**Selection & dropdowns** (all use the underline trigger + themed popover)
- **Select / Native Select** — custom dropdown (convention 2); selected item highlighted mint (`sel-item`); groups via `.menu-label`; sizes default/small; disabled trigger.
- **Combobox** — searchable select: input-style trigger + filterable `.menu`; selected/disabled states.
- **Dropdown Menu / Context Menu** — `popover` + `.menu-item`; support label, separator, checkbox/radio items, and submenu (`›`). Destructive item = `text-destructive`.
- **Menubar** — inline bar of menu triggers.
- **Command** — palette: inline and dialog (⌘K) forms; grouped results with `kbd` shortcuts.
- **Date Picker** — underline trigger + calendar popover; single / range / with-time. **Calendar** — single + range (range fill = primary @ ~16%).

**Feedback**
- **Alert** — left 3px accent bar + hairline card + Lucide icon colored to match: info→blue, success→success, warning→warning, destructive→destructive.
- **Toast / Sonner** — slides in from right (spring), swipe/slide-out on dismiss; variants default/success/error/action(+undo); auto-dismiss ~4s; pause concept on hover.
- **Progress** — mint fill, smooth width transition; indeterminate = looping bar. **Skeleton** — shimmer on muted. **Spinner** — sizes sm/md/lg; on filled buttons use white stroke.
- **Badge** — status pills (`rounded-pill text-xs font-semibold`); mint/lime variants use dark text; aligns with table status (convention 4).
- **Empty** — icon or avatar-group + title + description + one CTA. **Tooltip** — inverts (foreground bg / background text), placements top/bottom/right. **Hover Card** — popover with richer content on hover.

**Navigation**
- **Tabs** — pill-on-track; horizontal + vertical; panel fade-in. **Breadcrumb** — with ellipsis for depth. **Pagination** — prev/active/next, ellipsis. **Navigation Menu** — pill nav + optional dropdown panel (`.menu` grid). **Sidebar** — app shell; active row = tinted primary bg; grouped with labels.

**Overlays** (overlay fades, content zooms/slides in)
- **Dialog** — centered card, zoom-in; ghost + primary actions. **Alert Dialog** — destructive confirm (ghost + destructive). **Sheet** — slides from a side (left/right/top/bottom). **Drawer** — bottom sheet with handle. **Popover** — small floating panel (forms, pickers).

**Data display**
- **Card** — `bg-card rounded-xl border shadow-ring p-6/8`; hover `-translate-y-[3px] shadow-md`. Variants: content, header+footer, form.
- **Table** — hairline rows, header in `secondary`, row hover; status uses the status pill. **Data Table** — toolbar (filter + columns) + row selection + pagination.
- **Item** — media + content + action row; variants default/outline/muted; can stack into a bordered group/list.
- **Avatar** — sizes sm/md/lg/xl; image / letter fallback / rounded-square; stacked group. **Accordion** — single (closes siblings) or multiple; content fade. **Collapsible** — show/hide block.
- **Carousel** — single-item (prev/next) or multi-item (drag/scroll). **Chart** — brand palette only (blue/mint/lime/steel); bar/line-area/donut. **Kbd** — key caps. **Separator** — h/v hairline. **Aspect Ratio** — 16:9 / 1:1 / 4:3. **Scroll Area** — themed v/h scrollbars. **Resizable** — panel group with drag handle (mint on hover).

## Color scales
Each palette color has an 11-step scale; **`-500` is the original brand color** (`blue-500=#118DF0`, `mint-500=#42FFCA`, `lime-500=#E5F33C`, `steel-500=#455A6F`, `success/warning/destructive-500`). Use `var(--blue-700)` etc. Tints (50–200) → backgrounds/hover; shades (700–950) → text/borders on light. Re-check AA on new pairings.

## Brand assets
- **Liquid glass** (`Formas Glass/`): decorative only, `z-index:0`/negative behind content, `pointer-events:none`, slow float/parallax (≤20px, 6–10s, freeze on reduced-motion). Never put text/controls on top, never recolor or spin, one per section.
- **Logo** (`Logos Darwoft/`, white SVG): use on dark/imagery (white version); clear space ≥ symbol height; min wordmark 96px / symbol 24px; static (hover opacity .8 only); never recolor/stretch/rotate or place white-on-light.

## Motion & interaction (scroll · cursor)
Darwoft uses Lenis smooth scroll + scroll-driven motion; always honor `prefers-reduced-motion` (freeze). Patterns + frequency: **scroll reveal** fade-up, once, 80ms stagger (High) · **parallax** on decorative glass only, `pointer-events:none` (Medium) · **scroll-linked rotate/skew** on signature headlines only (Low) · **sticky/pinned** one per viewport (Low) · **drag carousel** `grab`→`grabbing` for testimonials/logos (Medium) · **auto marquee** pause on hover (Medium) · **cursor** map to real affordance — pointer/grab/text/not-allowed (High) · **hover** lift/shade 150–250ms (High). Don't: animate body text on scroll, stack pins, parallax interactive elements, loop fast motion, or swap cursors without a matching action. Durations: 150–250ms UI, 400–600ms reveals, 6–20s ambient. See the Motion & Interaction section in `storybook.html`.

## Workflow by target
- **Claude Code / web:** import `globals.css`, use `tailwind.config.js`, scaffold shadcn components, then restyle with the classes above. Keep `.dark` on `<html>`.
- **Figma / Claude Design:** import `tokens.json` via Tokens Studio; build styles/variables from it; mirror the storybook component specs. Use Fraunces + Inter.
- **New components:** copy the closest storybook pattern, swap content, keep tokens. Done = light+dark, all states, tokens only, AA checked, added to storybook.

## Self-check before delivering
☐ Dark theme correct and primary · ☐ Fraunces headings / Inter body · ☐ pills + 16px cards (12px floating) · ☐ tokens only, no hex · ☐ one accent per block, dark text on accent fills · ☐ fields are underline (no boxed inputs) · ☐ selects are custom dropdowns (no native `<select>`) · ☐ segmented = pill-on-track · ☐ single status pill + single chevron · ☐ Lucide icons @ 2px · ☐ all interactive states + focus ring · ☐ motion honors reduced-motion · ☐ AA contrast.

If a value is missing, infer from the nearest token and the principles above; if genuinely ambiguous, ask.

---

## Mobile App Patterns

These patterns apply to any mobile-first product view built with this design system. All patterns use only Darwoft tokens unless stated otherwise.

### 1. Page shell — full-bleed mobile container
```html
<!-- CORRECT: full-bleed, no outer border -->
<div style="width:390px;margin:0 auto;background:#0C0D0D">
  <div class="app-frame" style="min-height:100vh;background:hsl(var(--background));
    color:hsl(var(--foreground));font-family:var(--font-sans)">
    <!-- content -->
  </div>
</div>

<!-- WRONG: floating card with border -->
<div style="width:380px;background:hsl(var(--background));border:1px solid hsl(var(--border));
  border-radius:24px;box-shadow:var(--shadow-lg)">
```
The `#0C0D0D` outer shell is intentionally deeper than `--ink-950` (`#101111`) to create a hardware-bezel illusion.

### 2. Client brand override — scoped CSS vars
When a client's brand differs from Darwoft defaults, scope ALL overrides to a single `.frame` class. Never override `:root`. Never use raw hex inside components.
```css
/* Scoped to the app frame only */
.client-frame {
  --primary:            207 88% 50% !important;  /* client primary replaces Darwoft blue */
  --ring:               207 88% 50% !important;
  --primary-foreground: 0 0% 100%   !important;
  --accent:             163 100% 63% !important;
  --accent-foreground:  180 3% 6%   !important;
}
/* Optional semantic aliases for app-specific states (name them for the domain) */
.client-frame {
  --brand-ink: hsl(var(--primary));  /* primary emphasis text, replaces brand-blue */
}
.client-frame.light {
  --background: 240 6% 96%;
}
```
Define semantic aliases only when the app domain requires them (e.g. `--win`/`--loss` for a sports app, `--in-progress`/`--done` for a task app). Use those vars inside components instead of hardcoded color references.

### 3. Section headers — brand-steel + icon
```html
<div style="display:flex;align-items:center;gap:9px;font-size:12px;font-weight:500;
  letter-spacing:.1em;text-transform:uppercase;
  color:hsl(var(--brand-steel));margin-bottom:14px">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- contextual Lucide path -->
  </svg>
  <span>Section label</span>
  <span style="flex:1;height:1px;background:hsl(var(--border))"></span>
</div>
```
Rules: always `--brand-steel` (not `--muted-foreground`, not `--foreground`). Always a 15×15 Lucide icon. Always the divider line. `margin-bottom:14px` (not 10px). Do NOT use the `.overline` utility class alone for section headers.

### 4. Card title typography — Inter, not Fraunces
```html
<!-- CORRECT: Inter 600 for card/market titles -->
<h3 style="font-size:14px;font-weight:600;margin:0;color:hsl(var(--foreground))">Market title</h3>
<div style="font-size:11.5px;color:hsl(var(--muted-foreground));margin:2px 0 12px">Subtitle</div>

<!-- WRONG: Fraunces for UI card titles -->
<h3 style="font-family:var(--font-display);font-size:18px;font-weight:400">Market title</h3>
```
Fraunces is reserved for: scores, totals, stat numbers, hero display text. Never use it for card titles, market labels, or any UI label inside a card.

### 5. Hero numbers — Fraunces with clamp()
```html
<!-- Score / hero number: Fraunces, clamp for responsiveness -->
<div style="font-family:var(--font-display);font-size:clamp(40px,11vw,60px);
  line-height:.9;font-variant-numeric:tabular-nums">
  <span>{{ scoreHome }}</span>
  <span style="color:hsl(var(--brand-steel));margin:0 8px">·</span>
  <span>{{ scoreAway }}</span>
</div>
```
Score/stat separators use `--brand-steel`, not `--muted-foreground`.

### 6. Technical numbers — font-mono
```html
<!-- Prices, amounts, rates, countdowns, any tabular numeric field -->
<span style="font-family:var(--font-mono);font-weight:700;font-variant-numeric:tabular-nums;
  color:hsl(var(--primary))">$2,400.00</span>

<!-- Two-line button: label + numeric value -->
<button ...>
  <span style="font-size:13px">Option label</span>
  <span style="font-family:var(--font-mono);font-weight:700;opacity:.82">3.50×</span>
</button>
```

### 7. DS Button — variant-based state mapping
Always use the Button component's `variant` prop for interactive options. Never custom divs.

| State | Variant |
|---|---|
| Unselected / default | `outline` |
| Selected / active | `primary` |
| Disabled / locked | `ghost` |
| Error / invalid selection | `destructive` |
| Positive / confirmatory | `accent` |

### 8. Sticky glassmorphism panels
For counters, scores, or any panel that should float while scrolling:
```html
<div style="position:sticky;top:8px;z-index:10;
  background:color-mix(in srgb,hsl(var(--card)) 92%,transparent);
  backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  border:1px solid hsl(var(--border));border-radius:14px;padding:11px 16px;
  margin-bottom:14px">
  <!-- content -->
</div>
```

### 9. Fixed bottom CTA bar
```html
<!-- Spacer to prevent content going behind fixed bar -->
<div style="height:104px;flex-shrink:0" aria-hidden="true"></div>

<!-- Fixed bar -->
<div style="position:fixed;left:50%;bottom:0;transform:translateX(-50%);z-index:50;
  width:100%;max-width:390px;
  padding:14px 16px calc(16px + env(safe-area-inset-bottom));
  background:color-mix(in srgb,hsl(var(--background)) 84%,transparent);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  border-top:1px solid hsl(var(--border));box-sizing:border-box;
  display:flex;justify-content:center">
  <!-- Button: 240px wide, NOT full width -->
  <x-import ...Button variant="primary" size="lg" hint-size="240px,52px">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px">
      <!-- icon path -->
    </svg>
    Guardar apuestas
  </x-import>
</div>
```

### 10. Card bleeding — full-edge content
To bleed content (images, ticker, etc.) to a card's edges, bypass card padding with negative margin:
```html
<div class="card" style="padding:26px;overflow:hidden">
  <!-- Full-bleed inner wrapper -->
  <div style="margin:-26px;padding:26px;border-radius:var(--radius-xl);overflow:hidden;
    position:relative">
    <!-- e.g., background image behind content -->
    <div aria-hidden="true" style="position:absolute;inset:0;z-index:0;pointer-events:none">
      <div style="position:absolute;top:0;bottom:0;left:0;width:60%;
        background-image:url({{ flagUrl }});background-size:cover;
        background-position:left center;opacity:.55;
        -webkit-mask-image:linear-gradient(to right,#000 0%,#000 14%,transparent 74%);
        mask-image:linear-gradient(to right,#000 0%,#000 14%,transparent 74%)"></div>
    </div>
    <!-- content at z-index:1 -->
    <div style="position:relative;z-index:1">...</div>
  </div>
</div>
```
Bottom card elements (ticker, footer bar) bleed with: `margin:18px -26px -26px;border-top:1px solid hsl(var(--border))`.

### 11. Marquee ticker
```css
@keyframes marqueeScroll {
  from { transform: translateX(0) }
  to   { transform: translateX(-50%) }
}
```
```html
<!-- Edge-fade container -->
<div style="overflow:hidden;
  mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)">
  <!-- Double content for seamless loop -->
  <div style="display:flex;width:max-content;animation:marqueeScroll 22s linear infinite">
    <span>{{ items }}</span>
    <span aria-hidden="true">{{ items }}</span>
  </div>
</div>
```
Pause on hover: add `animation-play-state:paused` on `:hover`. Freeze under `prefers-reduced-motion`.

### 12. Scroll reveal — IntersectionObserver
```css
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity .55s cubic-bezier(0,0,.2,1), transform .55s cubic-bezier(0,0,.2,1);
}
.reveal.is-in { opacity:1; transform:none }
@media (prefers-reduced-motion:reduce) {
  .reveal { opacity:1; transform:none; transition:none }
}
```
```js
const io = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
  { rootMargin: '0px 0px -8% 0px' }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// Fallback: force-reveal if IO is unavailable or user doesn't scroll
setTimeout(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in')), 1600);
```
Apply `.reveal` to section wrappers, not individual children. Stagger children with `transition-delay` in 80ms increments.

### 13. Floating toast stack
```html
<div style="position:fixed;top:14px;left:50%;transform:translateX(-50%);
  z-index:9999;width:min(92%,420px);display:flex;flex-direction:column;
  gap:10px;pointer-events:none">
  <!-- DS Alert component wrapped for toast -->
  <div class="toast-item" style="pointer-events:auto;cursor:pointer;
    border-radius:var(--radius-lg);box-shadow:0 14px 38px rgba(0,0,0,.42)">
    <x-import ...Alert variant="info" title="...">{{ message }}</x-import>
  </div>
</div>
```
```css
@keyframes toastIn {
  from { opacity:0; transform:translateY(-16px) scale(.98) }
  to   { opacity:1; transform:none }
}
.toast-item { animation: toastIn .42s cubic-bezier(.2,.9,.3,1) both }
```

### 14. Multi-view navigation — pill-on-track
Darwoft's pill-on-track pattern applies to all tab/view navigators:
```html
<!-- Track -->
<div style="display:flex;background:hsl(var(--secondary));border-radius:var(--radius-pill);
  padding:3px;gap:2px">
  <!-- Active pill -->
  <button style="background:hsl(var(--card));border-radius:var(--radius-pill);
    box-shadow:var(--shadow-sm);padding:7px 14px;
    font-size:13px;font-weight:500;color:hsl(var(--foreground))">Live</button>
  <!-- Inactive pill -->
  <button style="background:transparent;border-radius:var(--radius-pill);
    padding:7px 14px;font-size:13px;color:hsl(var(--muted-foreground))">Próximos</button>
</div>
```
Count badge: on active tab = `background:hsl(var(--primary));color:hsl(var(--primary-foreground))`. On inactive = `background:color-mix(in srgb,hsl(var(--muted-foreground)) 22%,transparent)`.

### 15. Tinted backgrounds — color-mix()
Never use hardcoded rgba for semantic tints. Use `color-mix()`:
```css
/* Selected row */
background: color-mix(in srgb, hsl(var(--primary)) 12%, transparent);
/* Positive-tinted card */
background: color-mix(in srgb, var(--success-500) 10%, hsl(var(--card)));
/* Glassmorphism panel */
background: color-mix(in srgb, hsl(var(--card)) 92%, transparent);
/* Danger-tinted card */
background: color-mix(in srgb, var(--destructive-500) 10%, hsl(var(--card)));
```

### 16. Responsive layout — JS-computed grid
```js
const isDesktop = width >= 1024;
const isTablet  = width >= 680 && !isDesktop;

const layoutStyle = isDesktop
  ? 'max-width:1120px;margin:0 auto;padding:28px 28px 48px'
  : isTablet
  ? 'max-width:780px;margin:0 auto;padding:24px 22px 44px'
  : 'max-width:100%;margin:0 auto;padding:18px 14px 36px';

const gridStyle = isDesktop
  ? 'display:grid;grid-template-columns:minmax(0,1fr) 344px;gap:24px;align-items:start'
  : 'display:block';
```
On desktop: two-column grid (main content | aside/detail panel). The aside uses `position:sticky;top:8px` on desktop, collapses to inline on mobile.

### 17. Light/dark logo switching
Use two `<img>` tags (dark and light versions) + CSS to toggle, not a single image with filter:
```html
<img class="logo-dark" src="logo-white.svg" alt="Brand" style="height:46px;width:auto">
<img class="logo-light" src="logo-dark.svg" alt="Brand" style="height:46px;width:auto">
```
```css
.frame .logo-dark  { display:block }
.frame .logo-light { display:none }
.frame.light .logo-dark  { display:none }
.frame.light .logo-light { display:block }
```

### 18. SVG icon inline attributes
For SVG icons in mobile HTML (no Lucide React), always write all attributes inline:
```html
<!-- CORRECT -->
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- path -->
</svg>

<!-- WRONG: relying on a CSS .icon class that may not be inherited -->
<svg class="icon" width="15" height="15" viewBox="0 0 24 24">
```

---

## Updated self-check before delivering

☐ Dark theme correct and primary · ☐ Fraunces = hero numbers only (scores/stats); Inter = card titles/UI; Fira Code = multipliers/amounts · ☐ pills + 16px cards (12px floating) · ☐ tokens only, no hex · ☐ one accent per block, dark text on accent fills · ☐ fields are underline (no boxed inputs) · ☐ selects are custom dropdowns (no native `<select>`) · ☐ segmented = pill-on-track · ☐ single status pill + single chevron · ☐ Lucide icons @ 2px, 15px on section headers · ☐ section headers = `brand-steel` + icon + `font-weight:500` · ☐ all interactive states + focus ring · ☐ motion honors reduced-motion · ☐ AA contrast · ☐ mobile: full-bleed shell, no floating card · ☐ CTA = fixed bottom bar with blur · ☐ sticky panels use glassmorphism · ☐ tinted bg via `color-mix()` · ☐ `env(safe-area-inset-bottom)` on bottom bars.
