# AMIHIVE React conversion

This project converts the five supplied HTML homepage variants into React.

## Structure

- `src/components/layout/Header.jsx` — shared marketplace header/navigation
- `src/components/layout/Footer.jsx` — shared footer where present
- `src/pages/variant1 ... variant5` — each original HTML concept split into section components
- `src/App.jsx` — selects a concept using `?variant=1` through `?variant=5`

Variant 5 is the default because it is the last supplied concept.

## Run

```bash
npm install
npm run dev
```

Examples:
- `http://localhost:5173/?variant=1`
- `http://localhost:5173/?variant=5`

## Notes

- The supplied Tailwind design tokens are preserved using the Tailwind CDN config in `index.html`.
- Inline HTML event handlers were intentionally removed during conversion. Rebuild interactive behavior with React `useState` / event handlers instead of DOM scripts.
- Existing remote image URLs and Material Symbols references are preserved.
