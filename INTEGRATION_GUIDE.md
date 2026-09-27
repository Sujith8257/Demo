# AMIHIVE Project Architecture & Zip Integration Protocol

This project follows the architecture and naming conventions of `amihive-ecom-admin`.

---

## 1. Directory Structure

```text
src/
├── auth/                         # Authentication utilities & session gate
│   ├── api.js
│   └── AuthRoute.jsx
├── components/
│   ├── Admin/                    # Admin UI components (tables, drawers, charts, topbar, sidebar)
│   │   ├── AdminSidebar.jsx
│   │   ├── AdminTopbar.jsx
│   │   ├── KpiCard.jsx
│   │   ├── OrdersTable.jsx
│   │   └── ...
│   └── Customer/                 # Customer-facing components
│       ├── CustomerHeader.jsx    # Unified sticky header (petrol green, search, trust bar)
│       ├── CustomerFooter.jsx    # Unified footer with editorial layout
│       ├── BottomNav.jsx         # Mobile navigation bar
│       ├── DesignTaskbar.jsx     # Floating variant switcher
│       └── ...
├── config/
│   └── api.js                    # API endpoints & base configuration
├── data/
│   ├── customerHomeData.js       # Curated customer datasets & mock products
│   └── mockDatabase.js           # Comprehensive backend database mocks
├── pages/
│   ├── Admin/                    # Admin portal pages
│   │   ├── overview/Dashboard.jsx
│   │   ├── orders/Orders.jsx & Returns.jsx
│   │   ├── products/ProductManagement.jsx & Inventory.jsx
│   │   ├── customers/CustomerManagement.jsx & SegmentsManagement.jsx
│   │   ├── marketing/BannersManagement.jsx, CouponsManagement.jsx, ReviewsManagement.jsx
│   │   ├── analytics/AnalyticsManagement.jsx
│   │   ├── finance/PaymentsManagement.jsx
│   │   ├── settings/SettingsManagement.jsx
│   │   ├── integrations/IntegrationManagement.jsx
│   │   └── users/AdminUserManagement.jsx & RolesPermissionsManagement.jsx
│   ├── auth/                     # Authentication views
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   └── Customer/                 # Customer store pages
│       ├── customer/
│       │   ├── Home.jsx          # Home page
│       │   ├── Cart.jsx          # Shopping cart with 5 design variants
│       │   ├── Profile.jsx       # Customer profile & addresses
│       │   └── Search.jsx        # Search results & discovery
│       ├── products/
│       │   ├── ProductList.jsx   # Product catalogue / chrono with 5 design variants
│       │   └── ProductOverview.jsx # Product detail view with 5 design variants
│       └── orders/
│           ├── Checkout.jsx      # Checkout flow with 5 design variants
│           ├── OrderList.jsx     # User order history
│           └── TrackOrder.jsx    # Order tracking status
├── App.jsx                       # Master React Router configuration
├── main.jsx                      # Vite entry point
└── styles.css                    # Tailwind CSS & global styling
```

---

## 2. Standard Zip File Integration Protocol

Whenever a zip file is provided, follow these exact steps:

### Step 1: Inspect & Unpack
1. Extract zip to a temporary scratch directory.
2. Inspect the file tree and identify whether it contains:
   - **Customer Pages / Components** (e.g. new checkout, cart, catalogue, or product detail)
   - **Admin Modules** (e.g. inventory manager, analytics, drawer)
   - **A new Design Variant** for an existing page (e.g. Design 6)

### Step 2: Placement by Category
- **Customer Components**: Move to `src/components/Customer/<ComponentName>.jsx`
- **Customer Pages**: Move to the designated subfolder under `src/pages/Customer/`:
  - Home / Cart / Profile / Search $\rightarrow$ `src/pages/Customer/customer/`
  - Products / Catalogue / Product Detail $\rightarrow$ `src/pages/Customer/products/`
  - Checkout / Orders / Tracking $\rightarrow$ `src/pages/Customer/orders/`
- **Admin Modules**: Move to `src/components/Admin/` or `src/pages/Admin/<domain>/`
- **Mock Data / JSON**: Place in `src/data/`

### Step 3: Naming Conventions
- Always use PascalCase for component files (`CustomerHeader.jsx`, `ProductOverview.jsx`, `Checkout.jsx`).
- Avoid arbitrary names like `variant5`, `chrono`, or `test`. Use feature-oriented names.
- Ensure subcomponents live either directly inside `src/components/Customer/` or in a co-located `components/` subfolder.

### Step 4: Routing & Navigation Integration
1. Open `src/App.jsx`.
2. Add or update the Route:
   ```jsx
   <Route path="/new-route" element={<NewComponent />} />
   ```
3. Support both `react-router-dom` hooks (`useNavigate`) and callback props (`onNavigateHome`, `onNavigateToCatalogue`, etc.) so all navigation continues to operate smoothly.

### Step 5: Verification
1. Run `npm run build` to confirm 0 compilation / syntax errors.
2. Confirm live reload on `http://127.0.0.1:3000/`.
