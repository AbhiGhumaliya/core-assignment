# src/main.jsx — Entry Point

## Purpose

The application entry point. It creates the React root, mounts the app into `#root`, and wraps it in `StrictMode`. Global styles are applied via `index.css`.

## Imports & Dependencies

| Import | From | Purpose |
|--------|------|---------|
| `StrictMode` | `react` | Enables extra checks and warnings in development |
| `createRoot` | `react-dom/client` | Creates the root for React 18+ concurrent rendering |
| `./index.css` | Local | Global Tailwind and base styles |
| `App` | `./App.jsx` | Root component (router and layout) |

## Logic

1. **Root element:** `document.getElementById('root')` — must match the `<div id="root">` in `index.html`.
2. **Rendering:** `createRoot(...).render(...)` mounts the tree once. No `unmount` is used (SPA lives for the page lifetime).
3. **StrictMode:** Wraps `<App />` so React double-invokes render and effect logic in dev to surface side-effect bugs.
4. **No props:** `App` receives no props; routing and state start inside `App` and below.

## Related Files

- `index.html` — provides `#root` and loads this script as module.
- `src/App.jsx` — root component that defines routing.
- `src/index.css` — global styles and Tailwind.
