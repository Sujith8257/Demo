import React from "react";
import { useNavigate } from "react-router-dom";
import ChronoPage from "../../chrono/ChronoPage.jsx";

export default function ProductList({
  onNavigateHome,
  onNavigateToProductDetail,
  onNavigateToCart,
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

  const handleCart = () => {
    if (onNavigateToCart) onNavigateToCart();
    else if (routerNavigate) routerNavigate("/cart");
    else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "cart");
      window.location.href = url.toString();
    }
  };

  return (
    <div className="chrono-page">
      <ChronoPage
        onNavigateHome={handleHome}
        onNavigateToProductDetail={handleProductDetail}
        onNavigateToCart={handleCart}
      />
    </div>
  );
}
