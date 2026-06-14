# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (TypeScript check + static generation)
npm run lint     # ESLint
```

## Architecture

**Next.js 15 App Router** — all pages are Server Components by default. `'use client'` is used only for components that need interactivity (scroll events, animations, form state).

### Page routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Composes section components |
| `/services` | `src/app/services/page.tsx` | Anchored sections (#consulting, #development, #cloud, #data-ai) |
| `/technologies` | `src/app/technologies/page.tsx` | Tech stack by category |
| `/industries` | `src/app/industries/page.tsx` | 8 sectors |
| `/about` | `src/app/about/page.tsx` | Company info |
| `/contact` | `src/app/contact/page.tsx` | Form + Cal.com calendar embed |
| `/privacy` | `src/app/privacy/page.tsx` | Static legal page |
| `/terms` | `src/app/terms/page.tsx` | Static legal page |
| `/api/contact` | `src/app/api/contact/route.ts` | POST handler — wire up email service here |

### Key components

- `Header.tsx` — `'use client'`, sticky floating nav with glass blur on scroll. Transparent on homepage hero, solid on scroll/other pages.
- `Footer.tsx` — server component, company reg, links, LinkedIn, Privacy/Terms.
- `HeroSection.tsx` — `'use client'`, Framer Motion `AnimatePresence` cycles through service names with fade-in/out. Full-screen navy with gradient orbs.
- `TechChipStrip.tsx` — CSS marquee auto-scroll strip of 28 tech names (doubled array = seamless loop).
- `ContactForm.tsx` — `'use client'`, React Hook Form + Zod validation, POSTs to `/api/contact`.

### Colour system (defined in `globals.css` `@theme`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy` | `#0A2342` | Hero, header, footer backgrounds |
| `--color-blue` | `#1B5EA6` | Secondary actions |
| `--color-teal` | `#0E9B8A` | CTAs, badges, accents |
| `--color-light` | `#F2F4F8` | Alternating section backgrounds |

All colours are used as inline Tailwind values (e.g. `bg-[#0A2342]`) rather than custom class names.

### Fonts
Inter via `next/font/google`, variable `--font-inter`, applied globally via `layout.tsx`.

## Pending integrations

1. **Contact form email** — `/api/contact/route.ts` has a commented Resend example. Install `resend` and add `RESEND_API_KEY` env var to wire it up. Recipient is `pranay@itworldltd.com`.

2. **Calendar booking** — `/contact` page embeds `https://cal.com/itworldltd/consultation`. Create a Cal.com account, connect Google Calendar with Google Meet, and the iframe will work automatically.

3. **Google Analytics** — add `NEXT_PUBLIC_GA_ID` and a `<Script>` in `layout.tsx`.

## Deployment target

Firebase App Hosting (SSR) + Google Cloud Run for any backend services. The contact API route can be extracted to a Cloud Run Node.js service if needed — the fetch URL in `ContactForm.tsx` would change to the Cloud Run endpoint.
