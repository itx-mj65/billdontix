# CLAUDE.md — Project Rules for billdontix

This file governs every session working on this project. Follow all rules below without exception.

## Project
- **Name:** billdontix (GitHub & Vercel)
- **Design source:** Figma file "Revix Final (Copy)" — Revix Plus dental billing website
- **Figma file ID:** SSGBWFMv5FeUGPMeFiYcGt
- **Token:** stored in `.env.local` as `FIGMA_TOKEN` — never in code or commits

---

## Rule 1 — Inspect before building
Read the Figma file, identify all pages, components, assets, fonts, colors, spacing, and responsive layouts.
Show the page map, design tokens, folder structure, and implementation plan before writing any code.

## Rule 2 — Next.js + JavaScript only
- App Router with `.js` and `.jsx` files
- No TypeScript, no `.ts` or `.tsx`
- Latest stable, mutually compatible dependency versions
- No experimental packages unless a feature strictly requires one

## Rule 3 — Centralize the design system
- All colors and font families as named CSS variables in `app/globals.css`
- Load fonts via `next/font` in `app/layout.js`
- All components use CSS variables — no hardcoded hex values anywhere in components
- Spacing and border-radius tokens in globals.css when reused in 3+ places

## Rule 4 — Clean folder structure
```
billdontix/
  app/               # Next.js App Router routes
    (pages)/         # Route groups for inner pages
    globals.css      # Design tokens + base styles
    layout.js        # Root layout with fonts
    page.js          # Homepage
  components/
    layout/          # Header, Footer (shared across all pages)
    sections/        # Homepage section components
    ui/              # Reusable primitives: Button, Card, Badge, Input
  lib/               # Utilities, constants, helpers
  public/
    images/          # Exported Figma images (optimized PNG/WebP)
    icons/           # SVG icons
  .env.local         # Secret tokens — gitignored
  .env.example       # Placeholder names only
```

Future slots (don't build yet):
- `app/api/` — API route handlers
- `lib/db/` — data access layer
- `lib/auth/` — authentication helpers

## Rule 5 — Match Figma faithfully
- Reproduce layout, typography, spacing, colors, imagery exactly
- Export and use real assets from Figma (no placeholder images)
- Responsive at: 1440px desktop, 768px tablet, 375px mobile
- If a responsive state is missing from Figma → make a sensible choice and note it in a comment

## Rule 6 — Maintainable code
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Accessible controls (aria labels, keyboard navigation, focus states)
- Server Components by default; `'use client'` only where interaction/browser APIs are needed
- No unnecessary libraries, no duplicate components, no placeholder features

## Rule 7 — Protect credentials
- Figma token only in `.env.local` → never in client code, commits, or logs
- `.env.example` has placeholder names only
- `.gitignore` covers `.env.local`, `.env*.local`

## Rule 8 — Preserve structure on edits
- Before any change: inspect existing components and tokens
- Update the source — never create duplicate styles or parallel implementations
- Check that related pages still work after every change

## Rule 9 — Verify the result
- Run `npm run lint` and `npm run build` before finishing
- Check pages against Figma at desktop/tablet/mobile
- Fix any visible layout or interaction issues
- Finish by listing: pages completed, run commands, design assumptions, remaining limitations

---

## Design Tokens (from Figma)

### Colors
```css
--color-navy:      #2d1b4e   /* Primary dark — header, hero bg, footer */
--color-purple:    #7b5ea7   /* Brand accent — buttons, highlights */
--color-teal:      #0796a3   /* Teal accent */
--color-teal-glow: #20d9d5   /* Teal glow/light */
--color-gold:      #e8a530   /* Active nav, amber */
--color-deep-blue: #061b3b   /* Deep navy */
--color-peach:     #ffe8db   /* Footer text, soft accent */
--color-peach-light: #fff5ef /* Soft peach bg */
--color-peach-pale:  #fff8f4 /* Trust section bg */
--color-lavender:  #f8f5fc   /* Light lavender bg */
--color-lavender-mid: #e8e0f0 /* Credentials section bg */
--color-slate:     #68787a   /* Muted body text */
--color-slate-mid: #7f8d8d   /* Placeholder text */
--color-blue-light: #b8d1d6  /* Subtle text on dark */
--color-white:     #ffffff
```

### Fonts
- **Outfit** — headings (weights: 400, 500, 600, 700, 800)
- **Manrope** — body text (weights: 400, 600, 700)
- **DM Sans** — nav + buttons (weights: 500, 600)

### Pages (17 total)
1. Homepage (Revix Plus - Desktop Homepage)
2. Small Practice Billing (x2 variants)
3. Ortho Billing
4. Eaglesoft
5. Dental Implant
6. Dentrix Billing
7. Endodontic Billing
8. Pediatric Dental Billing
9. About Us
10. DSO Landing Page
11. California Dental Billing
12. New York Dental Billing
13. Texas Dental Billing
14. Dental Medical Cross Coding
15. Open Dental Billing
16. Sleep Apnea Billing
