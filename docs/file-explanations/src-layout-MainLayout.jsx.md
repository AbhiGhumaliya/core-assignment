# src/layout/MainLayout.jsx — App Shell Layout

## Purpose

Defines the main app shell: a fixed sidebar on the left, and a right area with a top bar and a content region. The content region is the React Router **Outlet** where the active route’s page component is rendered.

## Imports & Dependencies

| Import | From | Purpose |
|--------|------|---------|
| `Outlet` | `react-router-dom` | Renders the matched child route component |
| `Sidebar` | `./components/Sidebar` | Left navigation |
| `TopBar` | `./components/TopBar` | Top bar (title, timezone, clock, user) |

## Logic

1. **Outer container**  
   Flex row, gap, padding, full height, overflow hidden, background `bg-muted`, `font-sans`. Ensures the layout fills the viewport and doesn’t create double scrollbars.

2. **Sidebar**  
   Rendered first; fixed width (280px in Sidebar), `shrink-0` so it doesn’t shrink.

3. **Main content column**  
   - `flex-1 flex flex-col gap-4 min-w-0 min-h-0 overflow-hidden`  
   - Takes remaining width; `min-w-0`/`min-h-0` allow flex children to shrink so the scrollable content area can scroll correctly.
   - Contains:
     - **TopBar** — fixed-height header.
     - **Outlet** — where the current page (e.g. PeoplePage, HomePage) is rendered.

4. **No state**  
   Layout is presentational; active route comes from the router and is read by Sidebar and TopBar via `useLocation`.

## Related Files

- `src/App.jsx` — wraps all main routes with this layout.
- `src/layout/components/Sidebar.jsx` — left nav.
- `src/layout/components/TopBar.jsx` — top bar.
