import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";

// Customer Pages
import CustomerHome from "./pages/Customer/customer/Home";
import Cart from "./pages/Customer/customer/Cart";
import Profile from "./pages/Customer/customer/Profile";
import Search from "./pages/Customer/customer/Search";
import ProductList from "./pages/Customer/products/ProductList";
import ProductOverview from "./pages/Customer/products/ProductOverview";
import Checkout from "./pages/Customer/orders/Checkout";
import OrderList from "./pages/Customer/orders/OrderList";
import TrackOrder from "./pages/Customer/orders/TrackOrder";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Admin Pages
import AdminDashboard from "./pages/Admin/overview/Dashboard";
import OrdersManagement from "./pages/Admin/orders/Orders";
import ReturnsManagement from "./pages/Admin/orders/Returns";
import InventoryManagement from "./pages/Admin/products/Inventory";
import ProductsManagement from "./pages/Admin/products/ProductManagement";
import CustomersManagement from "./pages/Admin/customers/CustomerManagement";
import SegmentsManagement from "./pages/Admin/customers/SegmentsManagement";
import BannersManagement from "./pages/Admin/marketing/BannersManagement";
import CouponsManagement from "./pages/Admin/marketing/CouponsManagement";
import ReviewsManagement from "./pages/Admin/marketing/ReviewsManagement";
import AnalyticsManagement from "./pages/Admin/analytics/AnalyticsManagement";
import SettingsManagement from "./pages/Admin/settings/SettingsManagement";
import IntegrationManagement from "./pages/Admin/integrations/IntegrationManagement";
import AdminUserManagement from "./pages/Admin/users/AdminUserManagement";
import RolesPermissionsManagement from "./pages/Admin/users/RolesPermissionsManagement";
import PaymentsManagement from "./pages/Admin/finance/PaymentsManagement";

// Root Dispatcher to seamlessly handle both ?page= query parameter and standard routes
function RootDispatcher() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  if (page === "chrono" || page === "products" || page === "catalogue") {
    return <ProductList />;
  }
  if (page === "productdetail" || page === "product") {
    return <ProductOverview />;
  }
  if (page === "cart") {
    return <Cart />;
  }
  if (page === "checkout") {
    return <Checkout />;
  }
  return <CustomerHome />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<RootDispatcher />} />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/catalogue" element={<ProductList />} />
        <Route path="/chrono" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductOverview />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/product" element={<ProductOverview />} />
        <Route path="/productdetail" element={<ProductOverview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<OrdersManagement />} />
        <Route path="/admin/returns" element={<ReturnsManagement />} />
        <Route path="/admin/inventory" element={<InventoryManagement />} />
        <Route path="/admin/products" element={<ProductsManagement />} />
        <Route path="/admin/customers" element={<CustomersManagement />} />
        <Route path="/admin/segments" element={<SegmentsManagement />} />
        <Route path="/admin/banners" element={<BannersManagement />} />
        <Route path="/admin/coupons" element={<CouponsManagement />} />
        <Route path="/admin/reviews" element={<ReviewsManagement />} />
        <Route path="/admin/users" element={<AdminUserManagement />} />
        <Route path="/admin/roles" element={<RolesPermissionsManagement />} />
        <Route path="/admin/payments" element={<PaymentsManagement />} />
        <Route path="/admin/analytics" element={<AnalyticsManagement />} />
        <Route path="/admin/settings" element={<SettingsManagement />} />
        <Route path="/admin/integrations" element={<IntegrationManagement />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
