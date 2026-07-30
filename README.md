# Densey Zenel Maben — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — routes: home (`/`), `/about`, `/projects/[slug]`
- `components/` — shared UI (header, footer, hero, cards, marquee, icons)
- `lib/` — content data (`content.ts` for profile/experience/education/skills,
  `projects.ts` for case-study content)

See `PROJECT_PLAN.md` for the full design/content plan.
