import React from "react";
import { useNavigate } from "react-router-dom";
import Variant5 from "../../variant5/Variant5.jsx";

export default function Home({
  onNavigateToCatalogue,
  onNavigateToProductDetail,
  onNavigateToCart,
}) {
  let routerNavigate;
  try {
    routerNavigate = useNavigate();
  } catch (e) {
    routerNavigate = null;
  }

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

  const handleCart = () => {
    if (onNavigateToCart) onNavigateToCart();
    else if (routerNavigate) {
      routerNavigate("/cart");
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "cart");
      window.location.href = url.toString();
    }
  };

  return (
    <Variant5
      onNavigateToCatalogue={handleCatalogue}
      onNavigateToProductDetail={handleProductDetail}
      onNavigateToCart={handleCart}
    />
  );
}
