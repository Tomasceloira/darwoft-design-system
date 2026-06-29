/** @type {import('tailwindcss').Config} */
/* ═══════════════════════════════════════════════════════════════════════
   DARWOFT DESIGN SYSTEM — Tailwind config  v2.0.0
   Pairs with globals.css. shadcn/ui compatible. Dark-first brand.
   darkMode: 'class' → toggle the `.dark` class on <html>.
   ═══════════════════════════════════════════════════════════════════════ */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          50:'var(--destructive-50)',100:'var(--destructive-100)',200:'var(--destructive-200)',300:'var(--destructive-300)',400:'var(--destructive-400)',500:'var(--destructive-500)',600:'var(--destructive-600)',700:'var(--destructive-700)',800:'var(--destructive-800)',900:'var(--destructive-900)',950:'var(--destructive-950)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        /* Extended Darwoft brand palette */
        brand: {
          blue:  'hsl(var(--brand-blue))',
          mint:  'hsl(var(--brand-mint))',
          lime:  'hsl(var(--brand-lime))',
          steel: 'hsl(var(--brand-steel))',
        },
        /* Full color scales — 500 = original brand color */
        blue:  { 50:'var(--blue-50)',100:'var(--blue-100)',200:'var(--blue-200)',300:'var(--blue-300)',400:'var(--blue-400)',500:'var(--blue-500)',600:'var(--blue-600)',700:'var(--blue-700)',800:'var(--blue-800)',900:'var(--blue-900)',950:'var(--blue-950)' },
        mint:  { 50:'var(--mint-50)',100:'var(--mint-100)',200:'var(--mint-200)',300:'var(--mint-300)',400:'var(--mint-400)',500:'var(--mint-500)',600:'var(--mint-600)',700:'var(--mint-700)',800:'var(--mint-800)',900:'var(--mint-900)',950:'var(--mint-950)' },
        lime:  { 50:'var(--lime-50)',100:'var(--lime-100)',200:'var(--lime-200)',300:'var(--lime-300)',400:'var(--lime-400)',500:'var(--lime-500)',600:'var(--lime-600)',700:'var(--lime-700)',800:'var(--lime-800)',900:'var(--lime-900)',950:'var(--lime-950)' },
        steel: { 50:'var(--steel-50)',100:'var(--steel-100)',200:'var(--steel-200)',300:'var(--steel-300)',400:'var(--steel-400)',500:'var(--steel-500)',600:'var(--steel-600)',700:'var(--steel-700)',800:'var(--steel-800)',900:'var(--steel-900)',950:'var(--steel-950)' },
        success: { DEFAULT:'hsl(var(--success))',50:'var(--success-50)',100:'var(--success-100)',200:'var(--success-200)',300:'var(--success-300)',400:'var(--success-400)',500:'var(--success-500)',600:'var(--success-600)',700:'var(--success-700)',800:'var(--success-800)',900:'var(--success-900)',950:'var(--success-950)' },
        warning: { DEFAULT:'hsl(var(--warning))',50:'var(--warning-50)',100:'var(--warning-100)',200:'var(--warning-200)',300:'var(--warning-300)',400:'var(--warning-400)',500:'var(--warning-500)',600:'var(--warning-600)',700:'var(--warning-700)',800:'var(--warning-800)',900:'var(--warning-900)',950:'var(--warning-950)' },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.65' }],
        xl: ['24px', { lineHeight: '1.3' }],
        '2xl': ['32px', { lineHeight: '1.2' }],
        '3xl': ['40px', { lineHeight: '1.1' }],
        '4xl': ['56px', { lineHeight: '1.05' }],
        '5xl': ['72px', { lineHeight: '1.05' }],
        '6xl': ['88px', { lineHeight: '1.05' }],
        display: ['120px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tightest: '-0.02em',
        display: '0.5px',
        overline: '0.1em',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        ring: 'var(--shadow-ring)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '400ms',
        cinematic: '600ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 250ms ease-out',
        'accordion-up': 'accordion-up 250ms ease-out',
        'fade-up': 'fade-up 400ms cubic-bezier(0,0,0.2,1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
