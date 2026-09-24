# AMIHIVE CHRONO — Five watch catalogue designs

All five HTML/CSS files provided in the chat have been converted into separate, editable React components and preserved in one project. The **floating design taskbar** at the bottom switches among Editorial, Calibration, Performance, Midnight and Style Edit. The active design persists in `localStorage` and is shareable with `?design=1` through `?design=5`.

## Run locally

1. Install Node.js 22.12 or newer.
2. `npm install`
3. `npm run dev`
4. Visit the URL Vite prints (normally `http://localhost:5173`).
5. `npm run build` for a production build.

## Tech

- React 19.3 and Vite 8.3
- Tailwind CSS 4.3 with source-specific design tokens in `src/styles/index.css` (no CDN)
- Motion 13.4 (`motion/react`, the maintained Framer Motion library)

## Organization

- `src/components/Header.jsx`, `Footer.jsx` — shared original header/footer
- `src/pages/design1…design5` — **individually converted React sections**, preserving each supplied design's layout, text, colors, original imagery and CSS classes
- `src/components/DesignTaskbar.jsx` — responsive, animated design switcher
- `src/components/RevealSection.jsx` — scroll entrance animation, respects reduced-motion preference
- `src/components/QuickViewModal.jsx` — accessible React-based preview modal
- `src/state/CatalogueContext.jsx` — React state for active filters, quick views, wishlist and cart preview, sorting, compare trays and carousel scroll

The inline DOM-manipulation scripts in the source HTML were removed. Their preview behavior is reconstructed using React state and events. Static product data stays inside the generated components so each HTML design can be edited independently. Wishlists, checkout, allocation and sign-in are **UI previews**, not connected to a server or payment provider. Original external Google-hosted watch images and Google Fonts still require an internet connection.

## Check package installation

This project was generated in an offline build environment. The JSX files were syntax-checked programmatically but `npm install`/`vite build` need network access where you run the project.
