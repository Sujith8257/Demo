import React from "react";
import { useNavigate } from "react-router-dom";
import CartPage from "../../cart/CartPage.jsx";

export default function Cart({
  onNavigateHome,
  onNavigateToCatalogue,
  onNavigateToProductDetail,
  onNavigateToCheckout,
}) {
  let routerNavigate;
  try {
    routerNavigate = useNavigate();
  } catch (e) {
    routerNavigate = null;
  }

  const handleHome = () => {
    if (onNavigateHome) onNavigateHome();
    else if (routerNavigate) routerNavigate("/home");
    else {
      const url = new URL(window.location.href);
      url.searchParams.delete("page");
      window.location.href = url.pathname;
    }
  };

  const handleCatalogue = (opts) => {
    if (onNavigateToCatalogue) onNavigateToCatalogue(opts);
    else if (routerNavigate) {
      routerNavigate(opts?.design ? `/products?design=${opts.design}` : "/products");
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "chrono");
      if (opts?.design) url.searchParams.set("design", String(opts.design));
      window.location.href = url.toString();
    }
  };

  const handleProductDetail = (opts) => {
    if (onNavigateToProductDetail) onNavigateToProductDetail(opts);
    else if (routerNavigate) {
      routerNavigate(opts?.design ? `/product/1?design=${opts.design}` : "/product/1");
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "productdetail");
      if (opts?.design) url.searchParams.set("design", String(opts.design));
      window.location.href = url.toString();
    }
  };

  const handleCheckout = () => {
    if (onNavigateToCheckout) onNavigateToCheckout();
    else if (routerNavigate) routerNavigate("/checkout");
    else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "checkout");
      window.location.href = url.toString();
    }
  };

  return (
    <CartPage
      onNavigateHome={handleHome}
      onNavigateToCatalogue={handleCatalogue}
      onNavigateToProductDetail={handleProductDetail}
      onNavigateToCheckout={handleCheckout}
    />
  );
}
