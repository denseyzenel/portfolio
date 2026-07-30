# Densey Zenel Maben — Portfolio: Project Plan

Reference studied: https://www.adithyasn.dev/ (Next.js, App Router). Structural DNA borrowed:
dark canvas, numbered sections (01/02/03), big stacked hero typography, a horizontal
scrolling skills ticker, minimal project cards that link to full case-study pages, a
compact "About" teaser on the home page that deep-links to a full `/about` route, and a
plain-language contact footer. That structure is kept; the tone, palette and copy are
rebuilt around Densey's CV and a subtle, professional "black cat" aesthetic — no literal
illustrations, just a warm amber "cat-eye" accent on charcoal/black, paw-mark section
markers, and light, occasional wordplay ("night vision" for anomaly detection, kept rare
so it stays professional).

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (utility styling, no component library)
- `next/font/google` — Space Grotesk (display/headings) + JetBrains Mono (labels, tags, numbers)
- A couple of small client components for the mobile nav toggle and the marquee.
- Deployable as-is to Vercel (`next build && next start`) or any Node host.

## Design system

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0b0b0d` | page background |
| `--bg-raised` | `#131316` | cards, raised panels |
| `--ink` | `#f4f1ea` | primary text (warm off-white) |
| `--ink-dim` | `#9a968c` | secondary text |
| `--amber` | `#e2a542` | accent — "cat-eye" amber |
| `--amber-dim` | `#8a6a2e` | accent borders/hover states |
| `--line` | `#232226` | hairline borders |

Paw-mark (small SVG) replaces plain bullets/section numbers where it reads naturally
(nav numerals, list markers, footer mark). Kept minimal so it stays professional rather
than novelty.

## Sections / pages (build order)

1. **Global shell** — `app/layout.tsx`, `app/globals.css`, fonts, `components/Header.tsx`
   (numbered nav: 01 Work · 02 About · 03 Contact), `components/Footer.tsx`,
   `components/PawMark.tsx` (icon).
2. **Home** (`app/page.tsx`)
   - Hero: eyebrow ("Portfolio — 2026 · Data Analytics · Open to work"), stacked name
     display, one-line value prop, two CTAs (See my work / Say hello), location + scroll cue.
   - About teaser: "Who I am" + 3-card "How I work" (Question first / Trace it down /
     Explain it clean) + link to `/about`.
   - Skills marquee: infinite scroll ticker of tools (SQL, Python, Power BI, …).
   - Selected work: 3 project cards (Fraud Detection, UK Property Forecasting, Marketing
     Campaign Analysis) linking to `/projects/[slug]`.
   - Contact band + Footer.
3. **About** (`app/about/page.tsx`) — full summary, experience timeline (Capgemini ×3
   roles + Oud Studio), education, grouped skills, certifications & awards.
4. **Project detail pages** (`app/projects/[slug]/page.tsx`, data in `lib/projects.ts`)
   - `fraud-detection-system`
   - `uk-property-market-forecasting`
   - `marketing-campaign-analysis`
   Each: overview, tech tags, approach, outcome/impact, back-to-work link.
5. **Content data layer** (`lib/content.ts`, `lib/projects.ts`) — single source of truth
   pulled from the CV so copy never duplicates across pages.
6. **QA pass** — semantic HTML check, responsive check (360px → 1440px), metadata/SEO
   tags, favicon from the paw mark.

## Content inventory (from CV, nothing invented)

- **Experience:** Capgemini Technology Services — Senior Data Analyst (Retail, HK/Japan,
  Feb 2023–Sep 2024), Financial Data Analyst (Financial Services, Sep–Nov 2022), Analyst
  (Aug 2021–Aug 2022); Oud Studio — Senior Sales Advisor (Nov 2025–present).
- **Education:** MSc Data Science for Business, Distinction, University of Stirling
  (Sep 2024–Nov 2025); BEng Electronics & Communication Engineering, 2:1, NMAM Institute
  of Technology (Aug 2018–Aug 2021).
- **Projects:** Financial Fraud Detection System; UK Property Market Forecasting
  (MSc dissertation); Marketing Campaign Analysis (UK Dig Data / Meta).
- **Certifications:** Microsoft Power BI, Microsoft Certified: Azure Fundamentals
  (AZ-900), Data Science and ML for Python, Microsoft Azure AI Essentials, Agile
  Software Development.
- **Award:** "Passionate Young Professional Certification" — Capgemini Technology Services.
- Note: CV mentions further projects/certifications/volunteering not itemised — the site
  ships with exactly what was provided and is structured (`lib/content.ts`,
  `lib/projects.ts`) so more entries can be appended later without touching layout code.

## Status

- [x] Plan written
- [x] Global shell + design system (`app/layout.tsx`, `app/globals.css`, `Header`,
  `Footer`, `MobileNav`, `PawMark`, `SectionLabel`)
- [x] Home page (`app/page.tsx`: Hero, AboutTeaser, SkillsMarquee, Work, Contact)
- [x] About page (`app/about/page.tsx`: experience, education, skills, certs/awards)
- [x] Project detail pages (`app/projects/[slug]/page.tsx`, static params for all 3
  projects, custom 404 via `app/not-found.tsx`)
- [x] Responsiveness pass (mobile nav, fluid hero type via clamp/vw, responsive grids
  and stacks at `sm`/`md` breakpoints throughout)
- [ ] `npm install && npm run build` — not run by the assistant (sandbox unavailable
  this session); every file was hand-reviewed for syntax/import correctness. Run this
  locally before deploying as a final check.

## Next steps for you

1. `cd` into the project folder, run `npm install`, then `npm run dev` and check
   `http://localhost:3000`, `/about`, and each `/projects/<slug>` route.
2. When ready, send me the additional projects, certifications, and volunteering
   experience from your CV and I'll extend `lib/content.ts` / `lib/projects.ts` — no
   layout changes needed.
3. Deploy to Vercel (or any Node host) with `npm run build && npm start`.
