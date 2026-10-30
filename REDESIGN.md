# Portfolio Redesign — Handoff Brief

Context carried over from a planning chat (30 Oct 2026). Read this fully before planning.

## Owner
- Zay Maung Maung Myint — Tech Lead / Lead Software Engineer at 8 Identity Software Co., Ltd (8i), Bangkok, Thailand.
- Leads both a Dev team and a DevOps team. 8+ years in software (career since 2016).
- Daily stack: Java / Spring Boot, PostgreSQL, Docker, Nginx, MQTT/EMQX (IoT and camera integrations), Zabbix.
- Career goal: become a Solution Architect within ~2 years. The site should show systems thinking (architecture, trade-offs), not just app lists.
- Prefers plain language over jargon, and step-by-step explanations.

## Working rules
- Work on the current branch (`refactor/redesign`). Never touch `main`.
- **Do not run git commit, push, or branch commands.** Zay reviews diffs and commits himself.
- Plan first; don't write code until Zay approves the plan.
- Prefer small, reviewable steps: one page/section at a time.

## Decisions made
- **Migrate from React + Vite to Astro.** Keep React only for interactive islands (theme toggle, Cmd+K search, copy buttons).
- Content as Markdown/MDX files (content collections) for Wiki and case studies; Writing links in one data file.
- Keep hosting on GitHub Pages via the existing Actions workflow (update it for Astro build output).
- Existing content source: `src/data/portfolio.js` — migrate from it.

## Open decisions (ask Zay before assuming)
1. Accent color: muted gold/brass, deep emerald, or other?
2. Default theme: dark first or light first? (keep a toggle either way)
3. Which projects can be featured as case studies (client confidentiality)? Candidates: Hotecx (multi-tenant hotel management), access management platform (multi-tenant identity/access), CCTV / IoT integration, one e-commerce or healthcare project.
4. Keep the mirror site `zaymmm/zaymmm.github.io` (see CLAUDE.md) or replace with a redirect?
5. Custom domain later? (optional)

## Visual direction: professional, clean, luxury
- Warm near-black background, soft off-white text, ONE accent color. Replace the bright blue "Hire Me" button.
- Serif display font for headings (Fraunces or Instrument Serif) + clean sans for body (Inter or Geist).
- Generous whitespace, thin hairline dividers instead of filled cards, fewer boxes.
- Subtle fades only. Content must never be hidden waiting for a scroll animation (current project grid is blank until the IntersectionObserver fires).
- Reference for STRUCTURE (not look): https://htetlinlinnaing.vercel.app/ — project storytelling (Problem → My contribution → Implementation), outcome numbers, demo links, OG preview image, contact form.

## Site map
Nav: Work · Writing · Wiki · Uses · About · Contact

| Page | Content |
|---|---|
| Home | Hero (name, one-line positioning, Résumé + Contact CTAs, GitHub/LinkedIn/email) → Featured work → short experience timeline → latest 3 posts → contact |
| Work | 3–4 case studies (problem, role, simple architecture diagram, stack, outcome) + compact archive table (year, project, industry, stack) for the rest. Drop the 11 filter chips. |
| Writing | List of posts on other platforms: title, platform, date, read time, external link. One data file. |
| Wiki → Snippets | Code snippets tagged (Spring Boot, Docker, Nginx, MQTT, SQL…), copy button, search |
| Wiki → Glossary | Plain-language definitions (multi-tenancy, RBAC, idempotency…) |
| Uses | Hardware, editor, terminal, dev tools, AI tools, self-hosted stack |
| About / Contact | Short bio, contact form or clear email/LinkedIn |
| Extra | Cmd+K search across Wiki and Writing |

## Issues found on the current site (fix in the redesign)
1. Title inconsistent: hero says "Lead Software Engineer, 8+ years"; `index.html` title/meta, footer, Skills intro ("5+ years") and Journey intro ("to senior developer") say Senior / 5+. Use **Lead Software Engineer, 8+ years** everywhere.
2. Location: hero says Thailand, footer says Myanmar → use Bangkok, Thailand.
3. "12+ Projects Shipped" but 14 projects listed — make numbers consistent.
4. "View Project" is a disabled `<span>` (placeholder links). Remove dead buttons; link only real case studies/demos.
5. No Open Graph / Twitter meta or preview image → add per page.
6. Missing LinkedIn, résumé download, and a contact section.
7. Skills list outdated/vague: add Docker, Nginx, EMQX, Zabbix; remove or rename vague items ("Cache", "DevOps", "Pay Apps", "Facebook Platform"); de-emphasize jQuery, Bootstrap, Oracle 12C. Mention leading Dev + DevOps teams.
8. Remove leftover Vite starter assets (`react.svg`, `vite.svg`) and `.DS_Store`.

## Suggested build order
1. Astro scaffold + layout, design tokens (colors, fonts, spacing), light/dark theme.
2. Home page with migrated content and fixes above.
3. Work: case study template + archive table.
4. Writing, Wiki (Snippets + Glossary), Uses.
5. OG images, sitemap, Cmd+K search, accessibility pass.
6. Update GitHub Actions workflow for Astro; verify `npm run build` output.
