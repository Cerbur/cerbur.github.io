# cerbur.github.io

Personal developer homepage and portfolio for **cerbur**. This repository owns the homepage and navigation into the wider personal site. It starts with honest placeholders: no invented employment, projects, personal skills, email address, or resume.

- Repository: https://github.com/cerbur/cerbur.github.io
- Website: https://cerbur.github.io/
- Stack: Astro 7, TypeScript, Tailwind CSS v4, static site generation, GitHub Actions / Pages.
- The starter foundation is updated to stable Astro/Tailwind releases; dependency versions are locked for reproducible installs.
- No React, client JavaScript, server adapter, external fonts, or blog engine.

## Local development

Use Node 24 (`.nvmrc`) and npm:

```sh
git clone https://github.com/cerbur/cerbur.github.io.git
cd cerbur.github.io
nvm use
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321` by default. The following commands are available:

```sh
npm run lint          # Prettier checks formatting, including Astro files
npm run format        # Format source and documentation
npm run typecheck     # TypeScript configuration / source checking
npm run check         # Astro component diagnostics
npm run validate      # All three checks above
npm run build         # Static production output in dist/
npm run verify:build  # Check generated assets, links, metadata, and template cleanup
npm run preview       # Serve the production build locally
```

## Edit personal information

`src/config/site.ts` is the single content and metadata source. Update the name, title, description, hero, about paragraphs, navigation, and section copy there. Add only real information to `experience`. Website technologies are labeled as this site’s stack; replace/add personal skills copy when appropriate.

Social email and LinkedIn URLs are nullable. Populate them to show those links. Set `resume.url` to a real deployed URL (for example `/resume.pdf`, with the file added to `public/`) to show a resume link. Until then, contact/resume placeholders remain plain text.

## Add a project

Publish the project’s landing page from its **own repository** first, then add an item to `siteConfig.projects`:

```ts
{
  name: "Actual project name",
  description: "A short, accurate description.",
  repo: "your-repo-name",
  skills: ["Actual technology"],
}
```

The card generates `https://cerbur.github.io/your-repo-name/` and links its source repository. `repo` is a plain repository slug; do not enter a full URL or base path. Do not add project detail pages here. Empty project lists keep the section visible with a placeholder and GitHub navigation.

## Blog and repository mapping

| Repository                | Website                                 | Responsibility                                       |
| ------------------------- | --------------------------------------- | ---------------------------------------------------- |
| `cerbur/cerbur.github.io` | `https://cerbur.github.io/`             | Homepage, portfolio sections, navigation             |
| `cerbur/blog`             | `https://cerbur.github.io/blog/`        | Independent blog, maintained and deployed separately |
| `cerbur/{repo-name}`      | `https://cerbur.github.io/{repo-name}/` | Independent project landing page                     |

Writing uses `siteConfig.writing.path: "/blog/"`. The blog link already points to its future address and is labeled “Coming soon”; it may return 404 until the separate blog repository is deployed. Change that status/copy once it is live. This repository does not create or deploy the blog or individual project sites.

## GitHub Pages deployment

`.github/workflows/pages.yml` uses the GitHub official Actions. Every push to `main` installs with `npm ci`, runs lint / TypeScript / Astro checks, builds, verifies the generated output, uploads `dist/`, and deploys to the `github-pages` environment. Pull requests run validation and build without deployment. Manual workflow dispatch is also available.

Pages must use **Settings → Pages → Build and deployment → Source: GitHub Actions**. The initial setup enables this through the GitHub API where permissions allow. View the deployment status under the repository’s Actions tab.

This is the special **User Site** repository, not a project site: `astro.config.mjs` takes `site` from the centralized configuration (`https://cerbur.github.io/`), keeps `base: "/"`, and sets `output: "static"`. Never set `base` to `/cerbur.github.io/`. The blog and project repositories manage their own project paths separately.

## Structure and agent conventions

```text
src/config/site.ts          Typed content, links, metadata
src/components/             Header and footer
src/components/sections/    Hero → About → Experience → Projects → Stack → Writing → Contact
src/components/ui/          Shared section, empty state, and arrow
src/layouts/                Document shell and metadata
src/pages/index.astro       Homepage composition
src/styles/global.css       Shared design tokens and responsive patterns
public/                     Root static assets
scripts/verify-build.mjs    Production-output checks
```

Agents must start at **[AGENTS.md](AGENTS.md)** and read **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** before changing UI. `CLAUDE.md` and `.cursor/rules` retain useful starter guidance and point to those canonical documents.

## License and origin

Adapted from [Ryan Fitzgerald’s devportfolio](https://github.com/RyanFitzgerald/devportfolio) without a GitHub fork relationship or upstream Git history. The original MIT license is preserved in [LICENSE.md](LICENSE.md); see [ATTRIBUTION.md](ATTRIBUTION.md) for provenance and icon attribution.
