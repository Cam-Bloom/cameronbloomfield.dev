# cameronbloomfield.dev

Personal site for Cameron Bloomfield. Version one is the designed CV, rebuilt as a native web page.

- **Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS v4. Fully static, deployed on Vercel.
- **Design source:** the CV Figma file. Colours, type, spacing, and icons are taken from it; the A4 design is rendered at 2x for the web.
- **Content:** `content/cv.ts` is the single source of truth. Edit it and the page, print view, and structured data all update.
- **PDF:** the designed CV export lives at `public/Cameron-Bloomfield-CV.pdf` and is served from `/Cameron-Bloomfield-CV.pdf`.

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # lint, typecheck, format check
pnpm build      # production build
```

## Layout

```
app/            routes, metadata routes (OG image, icons, robots, sitemap), global CSS and tokens
components/cv/  the CV: header, sections, roles, education, skills
components/     shared icons (exported from Figma)
content/        CV data
lib/            site config, date formatting, OG helpers
assets/fonts/   static font instances used only for build-time image generation
public/         the PDF and other static files
```
