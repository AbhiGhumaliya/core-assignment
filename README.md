# CORE HR (core_assignment)

A single-page HR application built with React and Vite. It includes a sidebar navigation, top bar, and a **People** section with an employee grid, search/actions bar, and pagination. Other sections (Home, My Info, Team Management, Project Setup, Hiring, Report, Settings) are placeholder pages ready for future development.

## Tech Stack

| | |
|---|---|
| **UI** | React 19 |
| **Build** | Vite 7 |
| **Routing** | React Router DOM 7 |
| **Styling** | Tailwind CSS 4 (Plus Jakarta Sans) |
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

## Project Structure

```
src/
├── main.jsx              # Entry: React root + StrictMode
├── index.css             # Global styles, Tailwind theme
├── App.jsx               # Router + all routes
├── layout/               # Sidebar, TopBar, MainLayout
├── shared/components/   # MaskIcon (reusable icon)
└── features/             # Feature-based pages
    ├── people/           # People page, employee grid, search, pagination
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

## Documentation

- **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** — Full project overview, libraries, module map, routing, and styling.
- **[docs/file-explanations/](./docs/file-explanations/)** — Per-file docs with purpose, logic, and dependencies for every source file.

## License

Private project.
