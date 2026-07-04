# Chateau & Capital — website

Institutional website for Chateau & Capital, a private operating investment
company and development finance platform headquartered in Lagos, Nigeria.
The site must read as calm, permanent, and institutional — think Blackstone /
Brookfield / Rolex, never startup marketing.

## Sync workflow (two machines — keep every edit unified)

This project is edited from two computers. GitHub `main` is the single
source of truth and every push to it auto-deploys the live site.

- A SessionStart hook (`.claude/settings.json`) runs
  `git pull --rebase --autostash` automatically, so sessions start from
  the latest version on either machine.
- **After completing and verifying a piece of work, commit it and
  `git push origin main`** in the same turn — don't batch days of work
  locally. A Stop hook will remind you when unpushed commits exist.
- Never leave a session with uncommitted changes without telling the
  user exactly what is unsaved.

## Stack & commands

- Next.js 15 (App Router) + TypeScript, Tailwind CSS v4 (CSS-first tokens),
  Framer Motion. All pages statically prerendered.
- `npm run dev` — develop. `npm run build && npm start` — production locally.
- `STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build` — static
  export to `out/` for GitHub Pages.

## Architecture rules

- **All copy and data live in `lib/content.ts`** — the single content layer
  (CMS-ready). Add portfolio companies, insights articles, capabilities and
  nav items there; never hard-code content into pages.
- Design tokens live in `app/globals.css` (`:root` + dark-mode block, mapped
  to Tailwind via `@theme inline`). Never introduce colors outside the brand
  palette below.
- Shared primitives: `components/primitives.tsx` (Container, Eyebrow,
  SectionHeading, ButtonLink, Wordmark). One scroll animation only:
  `components/Reveal.tsx` (respects reduced motion).

## Brand (from the official Oct 2023 brand guidelines — hard rules)

- Palette, only these plus derived tints/shades: sand `#d6cab5`, deep sand
  `#cbbda5`, slate blue `#2a4554`, white. **Never** bright colours,
  gradients, or neon.
- Type: Copperplate for caps/highlight type (`--font-caps`, Cinzel webfont
  fallback); **Georgia** for headlines AND body (`--font-serif`).
- Logo: Ionic column-capital mark (`components/ColumnMark.tsx`, extracted
  from the official vector file — do not redraw). Wordmark is
  "CHÂTEAU & CAPITAL" (circumflex Â) in Copperplate caps. Circular seal:
  `components/Badge.tsx`. Favicon: `app/icon.svg`.
- Voice: formal, sophisticated, reserved and discreet, confident. Long-term
  language ("decades, not quarters").
- Imagery direction (when photos are added): classical architecture,
  craftsmanship, heritage. No stock-photo clichés, no handshakes.

## Known deliberate choices

- Leadership: Delani Adewuyi, Founder & Chief Executive, is the only named
  individual (data in `lib/content.ts` `leadership` array). His bio contains
  no credentials/history beyond his role — do not invent any; ask for facts
  before expanding it. Add further leaders to the array only when provided.
- Contact channels are mailto links; no form backend yet.
- Emails are placeholders on @chateauandcapital.com.
- SEO layer is complete: canonicals, per-page OG, generated share card
  (`app/opengraph-image.tsx`), Organization/Article JSON-LD, sitemap+robots.
