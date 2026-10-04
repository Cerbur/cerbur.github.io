# Claude Code guidance

Read and follow `AGENTS.md`, the canonical agent guide, and `DESIGN_SYSTEM.md` before editing UI.

Retained starter principles: Astro components, centralized typed content, simple component responsibilities, consistent spacing, and conditional handling of optional data. The current architecture uses `src/config/site.ts`, `src/components/sections`, shared UI primitives, and `src/layouts/BaseLayout.astro`.

Use `npm run validate`, then `npm run build` and `npm run verify:build`. The site is statically deployed at the GitHub Pages user root. See `README.md` for content editing and separate blog/project repositories.
