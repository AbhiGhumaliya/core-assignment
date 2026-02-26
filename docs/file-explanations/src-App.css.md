# src/App.css — App-Level Styles

## Purpose

Reserved for app-level CSS. Currently only contains a comment noting that main styling is done via Tailwind in `index.css`. No meaningful rules; can be used later for App-specific overrides if needed.

## Logic

- Single comment: *"App-level styles — main styling handled by Tailwind via index.css"*.
- Not imported in `App.jsx`; `main.jsx` only imports `index.css`. If you add rules here, ensure they are imported (e.g. in `App.jsx` or `main.jsx`).

## Related Files

- `src/index.css` — where global and Tailwind styles live.
- `src/App.jsx` — root component (does not import this file currently).
