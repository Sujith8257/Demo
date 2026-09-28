import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";

// Customer Pages
import CustomerHome from "./pages/Customer/customer/Home";
import Cart from "./pages/Customer/customer/Cart";
import ProductList from "./pages/Customer/products/ProductList";
import ProductOverview from "./pages/Customer/products/ProductOverview";
import Checkout from "./pages/Customer/orders/Checkout";
import OrderSuccessPage from "./pages/order-success/OrderSuccessPage";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Root Dispatcher to handle both ?page= query parameter and initial load
function RootDispatcher() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  if (page === "home") {
    return <CustomerHome />;
  }
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
  if (page === "order-success" || page === "ordersuccess" || page === "success" || page === "order-confirmation") {
    return <OrderSuccessPage />;
  }
  if (page === "signup") {
    return <Signup />;
  }
  if (page === "forgot-password" || page === "forgotpassword") {
    return <ForgotPassword />;
  }
  // Default on root: load Login page first
  return <Login />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Load Login page first on root */}
        <Route path="/" element={<RootDispatcher />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Customer Store Routes */}
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
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/order-confirmation" element={<OrderSuccessPage />} />
        <Route path="/ordersuccess" element={<OrderSuccessPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
