# Agent development guide

This is cerbur’s personal developer homepage and the entry point to separately maintained sites. Read `README.md` and `DESIGN_SYSTEM.md` before changing architecture or UI.

## Architecture and content

- Astro is the primary framework. Keep `output: "static"` and prefer static HTML/CSS. No server runtime, SSR adapter, backend, or state framework.
- Preserve TypeScript safety. Personal content, metadata, navigation, social links, projects, and section copy live in `src/config/site.ts`.
- Do not invent experience, projects, personal skills, contact details, or a resume. Empty lists render explicit placeholders; nullable URLs render text instead of broken links.
- Project cards navigate to a separate repository’s landing page at `https://cerbur.github.io/{repo}/`. Writing navigates to the separate `cerbur/blog` site at `/blog/`. Do not add their systems or detail pages here.
- Reuse existing components and shared section/card patterns. Keep abstractions small and useful.
- Add dependencies only with a clear need. Do not casually add React. Use an Astro island only when interaction truly requires it; prefer native HTML first.

## Design and accessibility

- Understand `DESIGN_SYSTEM.md`, `src/styles/global.css`, and related components before changing UI.
- Preserve the restrained, professional style, responsive layout, readable contrast, visible keyboard focus, skip link, semantic sections, and reduced-motion support.
- Check desktop and mobile layouts. Navigation must remain available without JavaScript.
- Use Tailwind utilities for local layout and shared CSS tokens/classes for repeated design patterns. Avoid duplicating components or hardcoding personal copy in templates.

## GitHub Pages and validation

- This is a **User Site**: `site` is `https://cerbur.github.io/` and `base` is `/`. Never use `/cerbur.github.io/` as a base.
- Assets must use deployable URLs. Never hardcode local development absolute paths. Keep generated output and temporary files out of Git.
- Preserve the upstream MIT license and attribution in `LICENSE.md` and `ATTRIBUTION.md`.
- Use the committed lockfile and Node version in `.nvmrc`. Avoid unrelated dependency upgrades.
- After every change run `npm run lint`, `npm run typecheck`, `npm run check`, `npm run build`, and `npm run verify:build`. `npm run validate` combines the first three.
- `lint` is Prettier’s formatting check; `typecheck` is TypeScript; `check` is Astro’s component diagnostics. Do not claim unrun checks passed.
- The official Pages workflow validates PRs and deploys only pushes to `main` or manual runs. Do not skip failing checks to deploy.
