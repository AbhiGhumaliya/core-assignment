# src/index.css — Global Styles & Tailwind Theme

## Purpose

Central place for global CSS: Google Font import, Tailwind CSS entry, design tokens (`@theme`), base resets, and utility classes (e.g. scrollbar-hide). The app’s look and feel (font, colors, layout base) are defined here.

## Dependencies

- **Tailwind CSS v4** — via `@import "tailwindcss"` and the Vite Tailwind plugin.
- **Google Fonts** — Plus Jakarta Sans (400, 500, 600, 700) loaded from CDN.

## Logic & Structure

### 1. Font import

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:...');
```

Loads Plus Jakarta Sans so it can be used in `--font-sans` and `body`.

### 2. Tailwind

```css
@import "tailwindcss";
```

Brings in Tailwind’s layers (base, components, utilities). The Vite plugin compiles this.

### 3. @theme (design tokens)

- **`--font-sans`** — Primary font stack: Plus Jakarta Sans, system-ui, sans-serif.
- **`--color-primary`** — #947550 (brand brown).
- **`--color-dark`** — #3d3936 (text/dark UI).
- **`--color-muted`** — #f7f7f7 (background).
- **`--color-divider`** — #e5e5e4 (borders).

Tailwind utilities like `font-sans`, `text-primary`, `bg-muted`, `border-divider` use these.

### 4. @layer base

- **Universal reset:** `box-sizing: border-box`, `margin: 0`, `padding: 0`.
- **Full-height layout:** `html`, `body`, `#root` get `height: 100%`, `overflow: hidden`, background `#f7f7f7`.
- **Body:** Font family, background, font-smoothing.
- **Links:** `text-decoration: none`.

### 5. Utility: .scrollbar-hide

Hides the scrollbar while keeping overflow scroll (e.g. for the People page grid area). Uses `-ms-overflow-style`, `scrollbar-width`, and `::-webkit-scrollbar` so scrolling still works.

## Related Files

- `vite.config.js` — enables `@tailwindcss/vite`.
- `src/main.jsx` — imports this file so it applies to the whole app.
- Components use Tailwind classes and sometimes inline styles that match these tokens.
