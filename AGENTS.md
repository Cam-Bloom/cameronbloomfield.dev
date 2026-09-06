<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project conventions

- `content/cv.ts` is the only place CV text lives. Do not hard-code CV copy in components.
- Design tokens live in `app/globals.css` under `@theme`. They mirror the Figma file's variables; change them there, not inline.
- The design is an A4 document rendered at 2x: 1pt in Figma is 2px on the web. Keep new spacing on that scale.
- Icons are the exact SVG paths exported from Figma (`components/icons.tsx`). Do not swap them for an icon library.
- Light theme only, `color-scheme: light` is locked. No dark mode until it is designed.
- Run `pnpm check` before committing. Prettier (with the Tailwind class sorter) is the formatter.
