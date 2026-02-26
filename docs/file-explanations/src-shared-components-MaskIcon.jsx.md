# src/shared/components/MaskIcon.jsx — Recolourable SVG Icon

## Purpose

Renders a monochrome SVG icon with a single colour controlled by a prop. Uses CSS mask so the SVG (loaded from `src`) is used as a mask and the visible colour is the `backgroundColor`. Works with single-colour SVGs from the design system (e.g. Figma exports).

## Props

| Prop | Type | Default | Description |
|------|------|--------|-------------|
| `src` | string | — | URL/path to the SVG (e.g. `/assets/icons/home.svg`) |
| `color` | string | `'#ffffff'` | Fill colour (CSS color) |
| `size` | number | `20` | Width and height in pixels |
| `className` | string | `''` | Optional extra CSS class |

## Logic

1. **Element**  
   A `<div>` (no `<img>`): the SVG is not embedded in DOM; it’s loaded as a mask image.

2. **Dimensions**  
   `width` and `height` set from `size`; `flexShrink: 0` so the icon doesn’t shrink in flex layouts.

3. **Colour**  
   `backgroundColor: color` — the div’s background is what you see; the mask cuts the shape.

4. **Mask**  
   - `WebkitMaskImage` / `maskImage`: `url(${src})`  
   - `maskSize: 'contain'`, `maskRepeat: 'no-repeat'`, `maskPosition: 'center'`  
   So the SVG defines the visible shape and the div’s background shows through.

5. **Browser support**  
   Both `-webkit-` and standard `mask*` properties are set for broader support.

## Usage

Used in Sidebar (nav icons, chevrons, settings), SearchAndActions (download, filter, add, view toggle), and PaginationBar (chevrons). Pass `src` and optionally `color` and `size`.

## Related Files

- `src/layout/components/Sidebar.jsx` — uses MaskIcon for nav and settings.
- `src/features/people/components/SearchAndActions.jsx` — uses MaskIcon for buttons.
- `src/features/people/components/PaginationBar.jsx` — uses MaskIcon for arrows/dropdown.
