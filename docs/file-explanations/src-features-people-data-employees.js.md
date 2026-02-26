# src/features/people/data/employees.js — Employee Data

## Purpose

Provides a static list of employee records used by the People feature. Each record has `id`, `name`, `role`, and `avatar` (image path). Exported as the default so the People page and grid can import and render it.

## Dependencies

None (plain ES module; no React or external libs).

## Data Shape

Each employee object:

| Field   | Type   | Description                    |
|---------|--------|--------------------------------|
| `id`    | number | Unique identifier              |
| `name`  | string | Full name                      |
| `role`  | string | Job title (e.g. "IT Specialist") |
| `avatar`| string | Path to image (e.g. `/assets/images/ethan-lee.svg`) |

## Logic

- **Array:** 12 items in the current file (rows 1–3 described in comments).
- **Export:** `export default employees` — default export of the array.
- **Usage:** Imported in `PeoplePage.jsx` and passed as `employees` prop to `EmployeeGrid`, which maps over it to render `EmployeeCard`s.

## Possible future changes

- Replace with API fetch or context/store.
- Add fields (e.g. email, department).
- Pagination/filtering could be applied to this array (or to server data) in the page or a custom hook.

## Related Files

- `src/features/people/pages/PeoplePage.jsx` — imports and passes to EmployeeGrid.
- `src/features/people/components/EmployeeGrid.jsx` — maps employees to EmployeeCard.
- `src/features/people/components/EmployeeCard.jsx` — consumes name, role, avatar.
