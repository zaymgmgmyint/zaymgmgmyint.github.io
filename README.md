# zaymgmgmyint.github.io

Personal site of Zay Maung Maung Myint — Lead Software Engineer, Bangkok, Thailand.

Built with [Astro](https://astro.build). React is used only for the interactive pieces
(theme toggle, Cmd+K search, snippet copy buttons).

## Requirements

Node 22.12 or newer (Astro 7).

## Commands

```bash
npm install
npm run dev       # dev server → http://localhost:4321
npm run build     # static build → dist/
npm run preview   # serve the production build
npm run lint      # ESLint (.js/.jsx only)
```

## Where the content lives

| What | Where |
|---|---|
| Name, title, bio, contact, nav, experience, skills, education | `src/data/site.js` |
| Project archive (projects without a case study) | `src/data/projects.js` |
| Uses page | `src/data/uses.js` |
| Writing links (external posts) | `src/data/writing.js` |
| Case studies | `src/content/work/*.md` |
| Wiki snippets and glossary | `src/content/wiki/*.md` |

Edit content in those files, not inside components.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages at https://zaymgmgmyint.github.io/.
