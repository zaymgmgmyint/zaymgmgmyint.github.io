# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `portfolio/`:

```bash
npm run dev       # Vite dev server → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint (flat config via eslint.config.js)
```

No test suite is configured.

## Deployment

Two GitHub Pages repos are kept in sync — both use GitHub Actions (`.github/workflows/deploy.yml`):

| Repo | Branch | URL |
|---|---|---|
| `zaymgmgmyint/zaymgmgmyint.github.io` | `main` | https://zaymgmgmyint.github.io/ |
| `zaymmm/zaymmm.github.io` | `master` | https://zaymmm.github.io/ |

**Workflow to deploy changes:**
```bash
# 1. Edit files in portfolio/
# 2. Sync to deployment repo(s)
rsync -av --exclude=node_modules --exclude=dist --exclude=.git portfolio/ zaymgmgmyint.github.io/
# 3. Restore the zaymmm workflow branch (always master, not main)
# 4. Commit and push — Actions auto-builds and deploys
```

After each rsync to `zaymmm.github.io/`, restore its workflow trigger to `branches: [master]` since rsync overwrites it with `branches: [main]` from the portfolio source.

## Architecture

Single-page React 19 + Vite app. No router — sections are anchor-linked (`#about`, `#skills`, `#projects`, `#experience`).

**Content** — `src/data/portfolio.js` is the single source of truth for all text and data: `personal`, `skills`, `experience`, `education`, `certifications`, and `projects`. All content edits go here, not inside components.

**Components** — each section has a co-located CSS file (`ComponentName.jsx` + `ComponentName.css`). Composition order in `App.jsx`: `Navbar → Hero → Skills → Projects → Experience → Footer`.

**Styling** — plain CSS with custom properties in `src/index.css` (`:root`). Global utility classes (`container`, `section-label`, `section-title`, `section-desc`, `.btn`) live in `index.css` / `App.css`. Component classes follow BEM-style naming (`hero__content`, `hero__actions`).

**Icons** — all icons are inline SVG function components defined locally in the file that uses them. There is no icon library.

**Hooks** — `src/hooks/`:
- `useInView.js` — Intersection Observer for scroll-triggered animations. Returns `[ref, inView]`. Used by Skills, Projects, Experience.
- `useTheme.js` — Light/dark mode toggle. Persists to `localStorage`, respects `prefers-color-scheme` on first visit. Applies `data-theme="dark"` to `<html>`. Used by Navbar.

## Theming (Light / Dark Mode)

CSS variables are defined in `src/index.css` under `:root` (light) and `[data-theme="dark"]` (dark). When adding new components, use CSS variables — never hardcode colors.

Dark mode overrides for elements that use `var(--text-primary)` as a background (which inverts in dark mode) must be explicitly handled:
```css
[data-theme="dark"] .btn--primary {
  background: #e2e8f0;
  color: #0f172a;
}
```

## Animations

- **Hero** — pure CSS staggered `heroFadeUp` / `heroSlideIn` keyframes on each child element (no JS).
- **Skills cards** — `useInView` on `.skills__grid`; adds `is-visible` class; CSS transitions with `nth-child` stagger delays.
- **Project cards** — `useInView` on `<section>`; adds `is-visible` to `.projects__grid`; `cardIn` keyframe plays with `--i` CSS variable stagger. Re-animates on filter change via `key={active}`.
- **Experience columns** — `useInView` on `.experience__layout`; staggered CSS transitions on each `.experience__col`.

## Known TODOs

- All `link` fields in `projects` in `portfolio.js` are placeholder `"https://your-link-here.com"`. **"View Project" links are intentionally disabled** (rendered as `<span>` in `Projects.jsx:88`). To re-enable: change `<span>` back to `<a href={project.link} target="_blank" rel="noopener noreferrer">` and replace placeholder URLs in `portfolio.js`.
