# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the repo root:

```bash
npm run dev       # Astro dev server → http://localhost:4321
npm run build     # Static build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint (flat config via eslint.config.js; covers .js/.jsx only, not .astro)
```

Node 22.12+ is required (Astro 7); `package.json` declares it under `engines`.

No test suite is configured. Verify changes by running the dev server and checking the page.

## Deployment

`.github/workflows/deploy.yml` builds (`npm ci && npm run build`, Node 22) and publishes `dist/` to GitHub Pages on push to **`master`** (or manual `workflow_dispatch`). The remote is `zaymgmgmyint/zaymgmgmyint.github.io` → https://zaymgmgmyint.github.io/.

The mirror repo (`zaymmm/zaymmm.github.io`) is to be replaced by a redirect; don't reintroduce the old `rsync` flow. That change belongs in the mirror repo, not here.

## Working rules

Branch `refactor/redesign` migrated the site from React + Vite to Astro. `REDESIGN.md` (untracked) is the handoff brief: decisions, site map, known content bugs and build order.
- Stay on `refactor/redesign`; never touch `main`.
- Do **not** run `git commit`/`push`/branch commands. The owner reviews diffs and commits.
- Prefer small, reviewable steps: one page or section at a time.

All six redesign build steps are done. Outstanding content the owner still needs to supply:
- Case-study stories (`problem`, `role`, `outcome` in `src/content/work/*.md` frontmatter).
- LinkedIn URL and a résumé PDF (then add buttons in Hero/Contact).
- `year` and `stack` per archive row, for extra columns in the Work table.
- Hardware, editor and terminal groups for `src/data/uses.js`.
- A review of the wiki snippets and glossary, which Claude drafted.

## Architecture

Astro static site. React is used only for interactive islands (`ThemeToggle.jsx`, `CopyButton.jsx`, `CommandPalette.jsx`). Everything else is `.astro`.

- `src/pages/` — file-based routes. `index`, `work/index`, `work/[slug]`, `writing`, `wiki`, `uses`, `about` (all nav targets exist), plus `search.json.js`, a build-time endpoint the command palette fetches on first open.
- `src/layouts/Base.astro` — `<head>` (title, canonical, Open Graph/Twitter tags), skip link, header, footer, and an inline script that sets `data-theme` before first paint.
- `src/components/` — `Header`, `Footer`, `ProjectRow` (`.astro`) and the three `.jsx` islands. Styles are scoped inside each `.astro` file; shared pieces (chips, code blocks, palette, skip link) are in `global.css`.
- `src/data/` — single source of truth for content, plain JS:
  - `site.js`: name, title, intro, contact, nav, experience, skills, education, certifications.
  - `projects.js`: the archive (projects without a case study). Case studies are Markdown in `src/content/work/`; wiki snippets and glossary terms are Markdown in `src/content/wiki/` (`type: snippet|term`; snippet code lives in frontmatter so the copy button gets raw text). Schemas in `src/content.config.ts`.
  - `uses.js`: groups for the Uses page; a group renders only when it has items.
  - `writing.js`: external posts (empty for now; the Home "Writing" section renders only when non-empty).
- `src/styles/global.css` — design tokens and base styles.

Content rules:
- Edit text and data in `src/data/`, not in components.
- Facts everywhere: "Lead Software Engineer, 8+ years", Bangkok, Thailand. Don't invent outcomes, numbers or links; ask the owner. LinkedIn and résumé URLs are still missing, so no buttons for them exist yet.
- Don't render dead links or disabled buttons. Add `href` to `ProjectRow` only when the target page exists.

## Theming

Tokens live in `src/styles/global.css`: dark is the default on `:root`, light on `:root[data-theme="light"]`. Palette is slate blue: one accent (`--accent`), warm-free neutrals. Always use the CSS variables; never hardcode colors in components.

The inline script in `Base.astro` applies the saved theme (`localStorage` key `theme`) before paint. `ThemeToggle.jsx` reads and flips `data-theme` on `<html>` via `useSyncExternalStore`.

Fonts are self-hosted via `@fontsource-variable/fraunces` (headings) and `@fontsource-variable/inter` (body).

## Animations

Subtle fade on load only (`.fade-in`). Content must never be hidden waiting for a scroll animation. `prefers-reduced-motion` disables it.

## Search (Cmd+K)

`src/pages/search.json.js` emits a static index of nav pages, case studies, wiki entries and writing links at build time. `CommandPalette.jsx` (hydrated `client:idle`) fetches it on first open, scores matches by title then body, and navigates on Enter. Opens with Cmd/Ctrl+K, or `/` when focus is not in a field. Anything new that should be searchable must be added to the index endpoint.

## Accessibility

- Every colour pair meets WCAG AA (lowest is muted text in light mode at 5.62:1). Re-check contrast when changing tokens.
- Skip link to `#main` is the first focusable element.
- Wiki entries carry anchor ids so `/wiki#rbac` links work.
