import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";

// Customer Pages
import CustomerHome from "./pages/Customer/customer/Home";
import Cart from "./pages/Customer/customer/Cart";
import ProductList from "./pages/Customer/products/ProductList";
import ProductOverview from "./pages/Customer/products/ProductOverview";
import Checkout from "./pages/Customer/orders/Checkout";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Root Dispatcher to handle both ?page= query parameter and standard routes
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
  if (page === "login") {
    return <Login />;
  }
  if (page === "signup") {
    return <Signup />;
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

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
