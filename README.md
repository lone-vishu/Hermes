# Hermes — OT/IT Security Platform (Overview, Alerts, Incidents, Assets, Response)

React 18 + Vite + Tailwind CSS 3 + React Router (hash routing).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

- Design tokens from `DESIGN.md` live in `tailwind.config.js` (IBM Plex Sans / JetBrains Mono, teal `#00685f`).
- Routes: `#/overview`, `#/alerts`, `#/incidents`, `#/assets`, `#/response`.
- Icons: Material Symbols Outlined (Google Fonts); fonts need internet access.
- `src/data/ledger.js` holds the synthetic ledger + KPI data.
