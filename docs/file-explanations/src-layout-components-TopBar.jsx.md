# src/layout/components/TopBar.jsx — Top Bar (Title, Time, User)

## Purpose

Renders the top bar of the main content area: page title derived from the current route, timezone label (MST), clock (static "02:03:02" in the current code), notification button, and user avatar. All layout and styling only; no real clock or timezone logic yet.

## Imports & Dependencies

| Import | From | Purpose |
|--------|------|---------|
| `useLocation` | `react-router-dom` | Current pathname to show the right title |

## Data: routeTitles

Object mapping pathname to display title:

- `/people` → "People", `/home` → "Home", `/my-info` → "My Info", etc.  
- Fallback: `'CORE HR'` if pathname is not in the map.

## Logic

1. **Page title**  
   `pageTitle = routeTitles[location.pathname] || 'CORE HR'` — rendered as an `<h1>`.

2. **Right section**  
   - **Timezone:** Pill with "MST" (static).  
   - **Clock:** Pill with clock icon and static time "02:03:02" (commented-out code in the file shows how a live clock could be implemented with `useState` + `setInterval`).  
   - **Notification:** Button with notification icon.  
   - **Avatar:** User image from `/assets/images/user-avatar.jpg`.

3. **Styling**  
   Flex row, white background, rounded corners, fixed height (~h-20), padding. Uses `text-dark` and border utilities.

## Related Files

- `src/layout/MainLayout.jsx` — includes TopBar.
- `src/App.jsx` — route paths that drive `routeTitles`.
