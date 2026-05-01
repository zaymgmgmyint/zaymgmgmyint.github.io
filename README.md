# Zay Maung Maung Myint — Portfolio

Personal portfolio site for **Zay Maung Maung Myint**, Lead Software Engineer with 8+ years of experience shipping production software across e-commerce, fintech, healthcare, and enterprise domains.

**Live site:** [zaymgmgmyint.github.io](https://zaymgmgmyint.github.io/)

---

## Tech Stack

- **React 19** + **Vite 8**
- Plain CSS with custom properties (no CSS framework)
- Inline SVG icons (no icon library)
- Deployed via GitHub Actions → GitHub Pages

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint
```

## Project Structure

```
src/
├── data/portfolio.js       # Single source of truth for all content
├── components/             # One .jsx + .css per section
│   ├── Navbar
│   ├── Hero
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   └── Footer
├── App.jsx
└── index.css               # CSS custom properties & global utilities
```

To update content (bio, skills, projects, experience), edit `src/data/portfolio.js` — no component changes needed.

## Featured Projects

| Project | Domain |
|---|---|
| Hotecx Hotel Management | Hospitality |
| CCTV Project | Enterprise |
| Pro1 Ecommerce & Member | E-Commerce |
| One2One Delivery | Logistics |
| Health Care Information System | Healthcare |
| Expo Live | Live Commerce |
| 9 One Pay | FinTech |
| Shwe Goal Express | Transport |
| Lan Thit CRM | CRM |
| Hitachi Employee Management | Enterprise |

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the app and deploys `dist/` to the `gh-pages` branch automatically.

## Contact

- **Email:** zaymaungmaungmyint.info@gmail.com
- **GitHub:** [zaymgmgmyint](https://github.com/zaymgmgmyint)
- **Location:** Thailand
