# CORE HR (core_assignment)

A single-page HR application built with React and Vite. It includes a sidebar navigation, top bar, and a **People** section with an employee grid, search/actions bar, and pagination. Other sections (Home, My Info, Team Management, Project Setup, Hiring, Report, Settings) are placeholder pages ready for future development.

## Tech Stack

| | |
|---|---|
| **UI** | React 19 |
| **Build** | Vite 7 |
| **Routing** | React Router DOM 7 |
| **Styling** | Tailwind CSS 4, Brother 1816 (custom font) |
| **Lint** | ESLint 9 (flat config, React Hooks, React Refresh) |
| **React Compiler** | babel-plugin-react-compiler (optional auto-memoization) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Fonts

Custom font **Brother 1816** (multiple weights) lives in `public/fonts/` and is loaded in `src/index.css`. Used as the main UI font via Tailwind.

## Deploy

The app is set up for [Vercel](https://vercel.com): `vercel.json` configures the build and SPA rewrites. Run `vercel` in the project root or connect the repo in the Vercel dashboard.

## Project Structure

```
src/
├── main.jsx              # Entry: React root + StrictMode
├── index.css             # Global styles, Tailwind theme
├── App.jsx               # Router + all routes
├── layout/               # Sidebar, TopBar, MainLayout
├── shared/components/   # MaskIcon (reusable icon)
└── features/             # Feature-based pages
    ├── people/           # People: EmployeeCard, EmployeeGrid, SearchAndActions, NoSearchResults, PaginationBar, data/employees
    ├── home/
    ├── myInfo/
    ├── teamManagement/
    ├── projectSetup/
    ├── hiring/
    ├── report/
    └── settings/
```

## Routes

| Path | Page |
|------|------|
| `/` | Redirects to `/people` |
| `/people` | People (employee list) |
| `/home`, `/my-info`, `/team-management`, `/project-setup`, `/hiring`, `/report`, `/settings` | Placeholder “Coming Soon” pages |

## License

Private project.
