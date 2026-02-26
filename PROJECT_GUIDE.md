# Project Guide — CORE HR (core_assignment)

This document describes the project structure, libraries, modules, and how each file fits into the application.

---

## 1. Project Overview

- **Project name:** core_assignment  
- **Type:** Single-page application (SPA) — React + Vite  
- **Purpose:** HR-focused app with navigation for Home, My Info, People, Team Management, Project Setup, Hiring, Report, and Settings. The **People** feature is the main implemented area (employee list with search, actions, grid, pagination); other routes show placeholder “Coming Soon” content.

---

## 2. Tech Stack & Libraries

| Category        | Library / Tool        | Version   | Purpose |
|----------------|------------------------|-----------|---------|
| **Runtime**    | Node (ESM)             | —         | Module type: `"type": "module"` in package.json |
| **UI**         | React                  | ^19.2.0   | Component-based UI |
| **DOM**        | react-dom              | ^19.2.0   | React rendering into the browser |
| **Routing**    | react-router-dom       | ^7.13.1   | Client-side routing (BrowserRouter, Routes, Route, Link, useLocation, Outlet, Navigate) |
| **Build**      | Vite                   | ^7.2.4    | Dev server, HMR, production build |
| **React (Vite)** | @vitejs/plugin-react | ^5.1.1    | JSX/React support for Vite |
| **Compiler**   | babel-plugin-react-compiler | ^1.0.0 | Optional React Compiler (auto-memoization) |
| **Styling**    | Tailwind CSS           | ^4.1.18   | Utility-first CSS |
| **Tailwind (Vite)** | @tailwindcss/vite | ^4.2.1 | Tailwind integration in Vite |
| **PostCSS**    | postcss, autoprefixer  | ^8.5.6, ^10.4.24 | Used by Tailwind / autoprefixing |
| **Linting**    | ESLint                 | ^9.39.1   | Code quality |
| **ESLint**     | @eslint/js, globals    | ^9.39.1, ^16.5.0 | Base config and browser globals |
| **React ESLint** | eslint-plugin-react-hooks, eslint-plugin-react-refresh | ^7.0.1, ^0.4.24 | Hooks and Vite React refresh rules |
| **Types**      | @types/react, @types/react-dom | ^19.2.x | TypeScript type definitions for React (if used in IDE) |

**Font:** Plus Jakarta Sans (Google Fonts), used as the main sans-serif in `index.css` and Tailwind theme.

---

## 3. Folder Structure

```
my_app/
├── index.html                 # Entry HTML; mounts app at #root
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite + React + Tailwind + React Compiler
├── eslint.config.js           # ESLint flat config (JS/JSX, hooks, refresh)
├── PROJECT_GUIDE.md           # This file
├── docs/
│   └── file-explanations/     # One .md per source file (logic & purpose)
├── public/                    # Static assets (typically /assets/...)
│   └── assets/
│       ├── icons/             # SVG icons (logo, nav, actions, etc.)
│       └── images/            # Avatars, user image, etc.
└── src/
    ├── main.jsx               # App entry: React root + StrictMode + index.css
    ├── index.css              # Global styles, Tailwind, theme, scrollbar-hide
    ├── App.css                # Minimal; main styling via Tailwind
    ├── App.jsx                # Router setup + route definitions
    ├── layout/                # App shell (sidebar + top bar + outlet)
    │   ├── MainLayout.jsx
    │   └── components/
    │       ├── Sidebar.jsx
    │       └── TopBar.jsx
    ├── shared/                # Reusable across features
    │   └── components/
    │       └── MaskIcon.jsx
    └── features/              # Feature-based modules
        ├── home/
        │   └── pages/HomePage.jsx
        ├── myInfo/
        │   └── pages/MyInfoPage.jsx
        ├── people/            # Main feature (employees list)
        │   ├── data/employees.js
        │   ├── pages/PeoplePage.jsx
        │   └── components/
        │       ├── SearchAndActions.jsx
        │       ├── EmployeeCard.jsx
        │       ├── EmployeeGrid.jsx
        │       └── PaginationBar.jsx
        ├── teamManagement/
        │   └── pages/TeamManagementPage.jsx
        ├── projectSetup/
        │   └── pages/ProjectSetupPage.jsx
        ├── hiring/
        │   └── pages/HiringPage.jsx
        ├── report/
        │   └── pages/ReportPage.jsx
        └── settings/
            └── pages/SettingsPage.jsx
```

---

## 4. Module Map (File → Role & Library Usage)

| File | Module / Area | Role | Main libraries / APIs used |
|------|----------------|------|----------------------------|
| **Entry & shell** |
| `index.html` | Root | HTML shell; div#root; loads `/src/main.jsx` | — |
| `src/main.jsx` | Entry | Mounts React app with StrictMode; imports global CSS | react, react-dom |
| `src/index.css` | Global styles | Tailwind, @theme (brand colors, font), base reset, scrollbar-hide | Tailwind CSS, Google Fonts |
| `src/App.css` | App | Placeholder; main styling in Tailwind | — |
| `src/App.jsx` | App / Routing | Defines all routes and layout wrapper | react-router-dom |
| **Layout** |
| `src/layout/MainLayout.jsx` | Layout | Sidebar + TopBar + Outlet for child routes | react-router-dom (Outlet) |
| `src/layout/components/Sidebar.jsx` | Layout | Nav links, active state, settings link; uses SVG icons | react-router-dom (Link, useLocation), MaskIcon |
| `src/layout/components/TopBar.jsx` | Layout | Page title from route, timezone, clock, notification, avatar | react-router-dom (useLocation) |
| **Shared** |
| `src/shared/components/MaskIcon.jsx` | Shared UI | Reusable icon that colors SVG via CSS mask | — (vanilla React + CSS mask) |
| **People feature** |
| `src/features/people/data/employees.js` | Data | Static list of employee objects (id, name, role, avatar) | — |
| `src/features/people/pages/PeoplePage.jsx` | People | Page composition: SearchAndActions + scrollable EmployeeGrid + PaginationBar | Local components + employees data |
| `src/features/people/components/SearchAndActions.jsx` | People | Search bar, Download/Filter/Add buttons, view toggle (menu/group/stroke) | react (useState), MaskIcon |
| `src/features/people/components/EmployeeCard.jsx` | People | Single employee card (avatar, name, role, indicator) | — |
| `src/features/people/components/EmployeeGrid.jsx` | People | Responsive grid of EmployeeCards | EmployeeCard |
| `src/features/people/components/PaginationBar.jsx` | People | “Rows per page”, page range, prev/next | MaskIcon |
| **Other features (placeholders)** |
| `src/features/home/pages/HomePage.jsx` | Home | Placeholder “Coming Soon” | — |
| `src/features/myInfo/pages/MyInfoPage.jsx` | My Info | Placeholder “Coming Soon” | — |
| `src/features/teamManagement/pages/TeamManagementPage.jsx` | Team Management | Placeholder “Coming Soon” | — |
| `src/features/projectSetup/pages/ProjectSetupPage.jsx` | Project Setup | Placeholder “Coming Soon” | — |
| `src/features/hiring/pages/HiringPage.jsx` | Hiring | Placeholder “Coming Soon” | — |
| `src/features/report/pages/ReportPage.jsx` | Report | Placeholder “Coming Soon” | — |
| `src/features/settings/pages/SettingsPage.jsx` | Settings | Placeholder “Coming Soon” | — |
| **Config** |
| `vite.config.js` | Build | Vite config: React plugin (with React Compiler), Tailwind plugin | vite, @vitejs/plugin-react, @tailwindcss/vite |
| `eslint.config.js` | Lint | ESLint flat config: recommended, react-hooks, react-refresh, browser globals | eslint, @eslint/js, globals, react-hooks, react-refresh |

---

## 5. Routing

- **Base:** `BrowserRouter` in `App.jsx`.
- **Layout:** All main routes render inside `MainLayout` (sidebar + top bar + `<Outlet />`).
- **Default redirect:** `/` → `/people` (replace).
- **Routes:**

| Path | Component |
|------|-----------|
| `/` | Redirect to `/people` |
| `/people` | PeoplePage |
| `/home` | HomePage |
| `/my-info` | MyInfoPage |
| `/team-management` | TeamManagementPage |
| `/project-setup` | ProjectSetupPage |
| `/hiring` | HiringPage |
| `/report` | ReportPage |
| `/settings` | SettingsPage |

---

## 6. Styling Approach

- **Tailwind CSS v4** via `@tailwindcss/vite` and `@import "tailwindcss"` in `src/index.css`.
- **Theme (in index.css):** `@theme` defines:
  - `--font-sans`: Plus Jakarta Sans
  - `--color-primary`: #947550  
  - `--color-dark`: #3d3936  
  - `--color-muted`: #f7f7f7  
  - `--color-divider`: #e5e5e4  
- **Base layer:** Box-sizing reset, full-height html/body/#root, font, scrollbar-hide utility.
- **Components:** Use Tailwind classes (e.g. `text-dark`, `bg-muted`, `rounded-[20px]`) and inline `style` where design tokens are one-off (e.g. exact hex for active state).

---

## 7. Scripts (package.json)

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start dev server with HMR |
| `build` | `vite build` | Production build |
| `preview` | `vite preview` | Preview production build |
| `lint` | `eslint .` | Run ESLint |

---

## 8. File-by-File Documentation

Detailed logic and purpose for each source file are in **`docs/file-explanations/`**. Each file has a corresponding `.md` named after the source path (e.g. `src-App.jsx.md`, `src-layout-MainLayout.jsx.md`). See those for:

- What the file does  
- Imports and dependencies  
- Logic and data flow  
- Props/API where applicable  

---

*Last updated to match the current codebase structure and libraries.*
