# Fenrir Security

A frontend for a security scanning dashboard: login, dashboard with scan list and severity overview, and scan detail with progress, live console, and finding log.

## What's in here

- **Login** – Sign up form (no backend; submit takes you to the dashboard).
- **Dashboard** – Org/owner stats, severity cards (Critical, High, Medium, Low), and a scan table with search, filters, status chips, progress bars, and vulnerability counts. Table data is driven by mock data in `src/data/mockData.js`.
- **Scan detail** – Progress steps, scan metadata, live activity log, and finding log cards. Clicking a row in the dashboard navigates here.

**UI/UX**

- Dark/light theme stored in `localStorage` and applied across the app.
- Responsive sidebar with hamburger on small screens and overlay on mobile (`SidebarContext`).
- Loading states and skeleton loaders for dashboard and scan detail (`useMockLoad`, `DashboardSkeletons`).
- Route/screen transitions via `AnimatedPage`.
- Accessibility: ARIA labels, skip link, `:focus-visible`, keyboard navigation on table rows and main UI.

## Tech

- React 19, Vite 7, Tailwind 4
- React Router for `/`, `/dashboard`, `/scans`
- Lucide icons

## Run it

From the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Use “Create Account” to land on the dashboard.

## Build

```bash
cd frontend
npm run build
```

Output is in `frontend/dist`. Use `npm run preview` to test the production build locally.

## Project layout

```
Fenrir_security-Project/
  frontend/
    src/
      components/       # layout (Sidebar, Header), scan UI (Activitylog, FindingLogCards, etc.), shared UI
      context/         # ThemeContext, SidebarContext
      dashboard/       # SeverityDetails, ScanTable + StatusChip, ProgressBar, VulnerabilityBadges
      data/            # mockData.js – scan table data (mockScans)
      hooks/           # useMockLoad
      pages/           # Login, Dashboard, ScanDetail
      App.jsx, main.jsx
```

Dashboard scan table data lives in `src/data/mockData.js` (`mockScans`). Other screens may still use local mock data (e.g. in `SeverityDetails.jsx`, `ProgressDetailCard.jsx`, `Activitylog.jsx`, `FindingLogCards.jsx`). To wire a real API, replace these mocks and optionally keep `mockData.js` for fallbacks or dev.
