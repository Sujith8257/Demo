import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailPage from "../../product/ProductDetailPage.jsx";

export default function ProductOverview({
  onNavigateHome,
  onNavigateToCatalogue,
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
    <div className="product-page">
      <ProductDetailPage
        onNavigateHome={handleHome}
        onNavigateToCatalogue={handleCatalogue}
        onNavigateToCart={handleCart}
      />
    </div>
  );
}
