# AGENTS.md

Vue 3 + Vite + TypeScript portfolio SPA. Deployed on Netlify.

## Commands

- Use **pnpm**, not npm (repo is pnpm-locked; README's `npm install` is stale).
- `pnpm run dev` — dev server
- `pnpm run type-check` — `vue-tsc --build` (incremental; run before lint if the tsbuildinfo is stale)
- `pnpm run lint` — `eslint . --fix --cache`; **auto-fixes** files, and includes oxlint correctness rules merged via `eslint-plugin-oxlint` (see `.oxlintrc.json`)
- `pnpm run build` — type-check then `vite build` (already covers the check)
- `pnpm run format` — prettier on `src/` only
- No test framework is installed. Verify with type-check + lint.

## Architecture

- `@` alias → `src` (vite.config.ts + tsconfig).
- Tailwind CSS 4 via `@tailwindcss/vite`; config is CSS-first in `src/assets/main.css` (no `tailwind.config`).
- Dark mode: `src/composables/useTheme.ts` toggles the `.dark` class on `document.documentElement`; use `dark:` variants.
- SEO/meta via `@unhead/vue` — use `src/composables/usePageMeta.ts` in pages.
- Router uses `createWebHistory`; Netlify SPA fallback lives in `public/_redirects` (`/* /index.html 200`).

## Content gotchas

- **All site content is code.** Edit `src/content/portfolio.ts` (personal info, stack, projects, education, contacts) to change the site — no CMS or data files.
- **Adding a blog post requires editing two files** and keeping the slug in sync:
  1. `src/content/blog/<slug>.md` (raw markdown, **no frontmatter** — rendered with `marked`)
  2. the metadata entry (slug, title, date, tags, excerpt) in `src/content/blog.ts`, where the slug must match the `.md` filename.
- Blog copy and most site copy are in **Spanish**; write new content in Spanish.
- Content images often hotlink from GitHub raw URLs; keep that pattern.
