# src/layout/components/Sidebar.jsx — Left Navigation

## Purpose

Renders the left sidebar: logo, list of nav links (Home, My Info, People, Team Management, Project Setup, Hiring, Report), and a Settings link at the bottom. Uses the current path to highlight the active item and supports hover and optional “special” active styling for People.

## Imports & Dependencies

| Import | From | Purpose |
|--------|------|---------|
| `Link`, `useLocation` | `react-router-dom` | Navigation and current pathname |
| `MaskIcon` | `../../shared/components/MaskIcon` | Recolourable SVG icons |

## Data: navItems

Array of objects:

- **label** — Display text.
- **icon** — Path to SVG (e.g. `/assets/icons/home.svg`).
- **path** — Route path (e.g. `/people`).
- **hasChevron** — Whether to show a right chevron.

Optional: **isSpecial** (e.g. for People) — when active, icon is shown in a small brown square with white icon (currently commented out in the list).

## Logic

1. **useLocation()**  
   `location.pathname` is used to decide which item is active (`location.pathname === item.path`).

2. **Logo**  
   Static image at top: `/assets/icons/logo.svg`.

3. **Nav links (map over navItems)**  
   - **Link** to `item.path` with:
     - Background: white if active, transparent otherwise; hover uses `rgba(255,255,255,0.1)` when not active.
     - Text color: primary (#947550) if active, white otherwise.
   - **Active indicator:** A small white vertical bar on the left when `isActive`.
   - **Icon:**  
     - If active and `item.isSpecial`: small brown square with white MaskIcon.  
     - Else: MaskIcon with color primary when active, white otherwise.
   - **Label:** Plain text.
   - **Chevron:** MaskIcon for chevron-right when `item.hasChevron`.

4. **Settings**  
   Separate Link at bottom with border and icon; same hover style. Always links to `/settings`.

5. **Styling**  
   Sidebar background `#3d3936`, rounded corners, fixed width (280px in class), flex column so Settings stays at bottom.

## Related Files

- `src/layout/MainLayout.jsx` — includes Sidebar.
- `src/shared/components/MaskIcon.jsx` — icon component.
- `src/App.jsx` — defines the paths that Sidebar links to.
