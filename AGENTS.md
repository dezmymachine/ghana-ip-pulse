# Ghana IP Pulse

Astro + Sanity CMS site deployed on Netlify.

## Commands

- `npm run dev` — dev server on port 4321
- `npm run build` — static build to `dist/`
- `npm run preview` — preview production build

No test runner, linter, or typecheck command is configured.

## Environment

Copy `.env.example` to `.env`. Build and dev will fail without valid Sanity credentials:

- `PUBLIC_SANITY_PROJECT_ID` — required
- `PUBLIC_SANITY_DATASET` — required (default: `production`)
- `SANITY_API_READ_TOKEN` — required for visual editing only
- `PUBLIC_SANITY_VISUAL_EDITING_ENABLED` — set to `true` to enable draft mode

Initialize Sanity: `npx sanity@latest init --env .env`

## Architecture

- **Output mode**: `static` (not server) — pre-rendered at build time
- **Sanity Studio**: embedded at `/studio` via `@sanity/astro`
- **React**: used for Studio embedding and interactive islands (via `@astrojs/react`)
- **Tailwind**: configured with custom theme colors/font radii in `tailwind.config.mjs`
- **Netlify adapter**: non-edge functions, Node 22

### Data flow

- `src/sanity/lib/load-query.ts` — central data fetcher; uses `sanity:client` virtual module (provided by `@sanity/astro`, not a filesystem import). Handles published/drafts toggle via visual editing env var.
- `src/sanity/lib/url-for-image.ts` — Sanity image URL builder
- `src/sanity/schemaTypes/` — Sanity schema definitions (author, blockContent, category, post, event, resource)

### Path alias

`@/*` → `./src/*` (configured in `tsconfig.json`)

## README inaccuracies

The README says "Astro 6" (package is `^5.17.0`), "server output mode" (config is `static`), and "no Tailwind" (Tailwind is integrated). Trust the code, not the README.
