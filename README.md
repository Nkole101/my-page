# Martin Nkole Mwanza — Portfolio

Personal portfolio site, built with React 19, Vite, TypeScript, Tailwind CSS v4, and Framer Motion.
Deployed to GitHub Pages via GitHub Actions on every push to `main`.

Live at: https://nkole101.github.io

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion for scroll reveals and interactions
- lucide-react for icons

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages. In the repo settings, **Pages → Build and deployment → Source** must be
set to **GitHub Actions**.

## Content

- `src/data/projects.ts` — featured projects. CCIS is a private capstone repository and is shown
  as a case study rather than a linked repo.
- `src/data/experience.ts` — work experience.
- `src/data/skills.ts` — grouped technical skills.
- `public/cv/Nkole_Mwanza_CV.pdf` — downloadable CV.
