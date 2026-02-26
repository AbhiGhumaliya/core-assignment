# src/App.jsx — Root Component & Routing

## Purpose

Root React component that sets up client-side routing and declares all top-level routes. Wraps every page in `MainLayout` (sidebar + top bar + content area). Redirects `/` to `/people`.

## Imports & Dependencies

| Import | From | Purpose |
|--------|------|---------|
| `BrowserRouter`, `Routes`, `Route`, `Navigate` | `react-router-dom` | SPA routing |
| `MainLayout` | `./layout/MainLayout` | Shell with Sidebar, TopBar, and Outlet |
| `PeoplePage`, `HomePage`, … | `./features/.../pages/...` | Page components for each route |

## Logic

1. **BrowserRouter**  
   Wraps the app so routing uses the browser URL (pathname, history). Required for `Link`, `useLocation`, `Outlet`, etc.

2. **Routes / Route**  
   - **Parent route** `path="/"` `element={<MainLayout />}`  
     Renders the layout for all child routes. The layout’s `<Outlet />` is where the matched child component renders.
   - **Index route** `index` `element={<Navigate to="/people" replace />}`  
     Visiting `/` redirects to `/people` with replace (no extra history entry).
   - **Child routes**  
     Each `path` maps to one page component: `people`, `home`, `my-info`, `team-management`, `project-setup`, `hiring`, `report`, `settings`.

3. **No local state**  
   App is stateless; route state is in the URL and consumed by `MainLayout`, `Sidebar`, `TopBar`, and the active page.

## Route Table

| Path | Component |
|------|-----------|
| `/` | Redirect → `/people` |
| `/people` | PeoplePage |
| `/home` | HomePage |
| `/my-info` | MyInfoPage |
| `/team-management` | TeamManagementPage |
| `/project-setup` | ProjectSetupPage |
| `/hiring` | HiringPage |
| `/report` | ReportPage |
| `/settings` | SettingsPage |

## Related Files

- `src/layout/MainLayout.jsx` — provides Sidebar, TopBar, and Outlet.
- All `*Page.jsx` under `src/features/*/pages/`.
- `PROJECT_GUIDE.md` — routing overview.
