# AMIHIVE Project Architecture & Zip Integration Protocol

This project follows the file structure, component naming, and format of `amihive-ecom-admin`.

---

## 1. Directory Structure

All components are consolidated into **one single components folder** (`src/components/Customer/`), and all pages are organized into **customer domain folders** under `src/pages/Customer/`:

```text
src/
├── components/
│   └── Customer/                 # ALL components in ONE folder
│       ├── CustomerHeader.jsx    # Unified sticky header (petrol green, trust carousel, search)
│       ├── CustomerFooter.jsx    # Unified footer with editorial layout
│       ├── SkipLink.jsx
│       ├── ValuePropositionMarquee.jsx
│       ├── WatchBrandsInfiniteCarousel.jsx
│       ├── ContinuousReviewsCarousel.jsx
│       ├── PageLoader.jsx
│       ├── Skeleton.jsx
│       ├── ProductDiscoveryHub.jsx
│       ├── HEROWITHSWEEPINGSTRAPRIBBON.jsx
│       ├── CATEGORYDISCOVERYWITHDYNAMICCROPS.jsx
│       ├── BESTSELLERSHORIZONTALRAIL.jsx
│       ├── PRODUCTINTEGRITYTRIPTYCH.jsx
│       ├── SHOPTHELOOKPanoramicDesk.jsx
│       ├── SHOPBYCOLLECTIONAsymmetricEditorial.jsx
│       ├── VALUEDEALSECTIONDeepBlue.jsx
│       ├── WATCHMATERIALSTRIPTYCHConnected3.jsx
│       ├── VIDEOMOTIONSTORY.jsx
│       ├── CAMPAIGNCAROUSELCompactHighVelocity.jsx
│       ├── SHOPBYBUDGETHorizontalPill.jsx
│       ├── ARTISANJOURNALRECENTLYVIEWED.jsx
│       ├── VALUEMANIFESTOMARQUEEREPLACEDWITH.jsx
│       ├── TRENDINGSEARCHINTENTSCROLLERContinuous.jsx
│       └── Variant5Skeleton.jsx
│
├── pages/
│   └── Customer/                 # Customer pages matching amihive-ecom-admin
│       ├── customer/
│       │   ├── Home.jsx          # Customer Home page
│       │   └── Cart.jsx          # Customer Cart page (with 5 design variants)
│       ├── products/
│       │   ├── ProductList.jsx   # Product Catalogue / Chrono page (with 5 design variants)
│       │   └── ProductOverview.jsx # Product Detail page (with 5 design variants)
│       └── orders/
│           └── Checkout.jsx      # Checkout page (with 5 design variants)
│
├── App.jsx                       # Master React Router DOM configuration
├── main.jsx                      # Vite entry point
└── styles.css                    # Tailwind CSS & global styling
```

---

## 2. Standard Zip File Integration Protocol

Whenever a zip file is provided, it will be integrated following these exact rules:

1. **Extract to Scratch**:
   - Extract the contents of the zip file to inspect its files.
2. **Components $\rightarrow$ One Folder (`src/components/Customer/`)**:
   - Any new or updated components go directly into `src/components/Customer/`.
   - Name files using PascalCase (e.g. `CustomerHeader.jsx`, `ProductCard.jsx`, `VariantTaskbar.jsx`).
   - Keep all components flatly in this one folder without sub-folders.
3. **Pages $\rightarrow$ Matching Domain Folder**:
   - Home or Cart pages $\rightarrow$ `src/pages/Customer/customer/`
   - Catalogue / Products / Product Detail pages $\rightarrow$ `src/pages/Customer/products/`
   - Checkout / Order pages $\rightarrow$ `src/pages/Customer/orders/`
4. **Wire into `App.jsx`**:
   - Register route in `src/App.jsx`.
   - Support both React Router hooks (`useNavigate`) and navigation callbacks.
5. **Verify**:
   - Run `npm run build` to confirm 0 compilation errors.
   - Verify on live dev server `http://127.0.0.1:3000/`.
