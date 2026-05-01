# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint (flat config via eslint.config.js)
```

No test suite is configured.

## Architecture

Single-page React 19 + Vite app. No router — sections are anchor-linked (`#about`, `#skills`, `#projects`, `#experience`).

**Content** — `src/data/portfolio.js` is the single source of truth for all text and data: `personal`, `skills`, `experience`, `education`, `certifications`, and `projects`. All content edits go here, not inside components.

**Components** — each section has a co-located CSS file (`ComponentName.jsx` + `ComponentName.css`). Composition order in `App.jsx`: `Navbar → Hero → Skills → Projects → Experience → Footer`.

**Styling** — plain CSS with custom properties in `src/index.css` (`:root`). Global utility classes (`container`, `section-label`, `section-title`, `section-desc`, `.btn`) live in `index.css` / `App.css`. Component classes follow BEM-style naming (`hero__content`, `hero__actions`).

**Icons** — all icons are inline SVG function components defined locally in the file that uses them. There is no icon library.

## Known TODOs

All `link` fields in `projects` in `portfolio.js` are placeholder `"https://your-link-here.com"` — replace with real URLs before deploying.
