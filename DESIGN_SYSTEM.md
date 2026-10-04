# Design system

The homepage continues devportfolio’s minimal component-based direction, with a quiet paper background and a single green accent.

- **Tokens:** `src/styles/global.css` owns paper, ink, muted text, borders, and fonts. `siteConfig.accentColor` supplies the shared accent. Buttons and links use that accent; darker hover colors stay readable.
- **Typography:** system sans-serif for headings/body; native monospace for navigation, labels, tags, and buttons. No external font requests. One `h1`, named `h2` sections, and `h3` cards.
- **Layout:** one centered shell; the hero has a static decorative monogram on desktop. Content sections use a numbered heading column and a content column. At 760px they stack. Do not add large animation systems.
- **Components:** `ui/Section.astro` controls section structure; `ui/EmptyState.astro` renders honest pending content; `ui/Arrow.astro` uses the existing Tabler icon language. Cards, tags, buttons, and text links share global classes.
- **Interaction:** native anchors, no client JavaScript. Links are underlined on hover, have visible keyboard focus, and are not distinguished by color alone when shown as buttons. Contact/resume URLs remain absent until supplied.
- **Content:** blank experience/projects are deliberate. The stack describes this website, not an unverified personal proficiency. Writing explicitly labels the future blog “Coming soon”.
- **Verification:** review desktop and narrow mobile layouts, text wrapping, keyboard navigation, local section anchors, empty/full content states, and generated root asset URLs.
