import { useEffect, useState } from "react";
import Variant5 from "./pages/variant5/Variant5.jsx";
import ChronoPage from "./pages/chrono/ChronoPage.jsx";
import ProductDetailPage from "./pages/product/ProductDetailPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";

const readPage = () => {
  const p = new URLSearchParams(window.location.search).get("page");
  if (p === "productdetail" || p === "product") return "productdetail";
  if (p === "chrono" || p === "products" || p === "catalogue") return "chrono";
  if (p === "cart") return "cart";
  if (p === "checkout") return "checkout";
  return "home";
};

export default function App() {
  const [page, setPage] = useState(readPage);

  useEffect(() => {
    const onPopState = () => setPage(readPage());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (target, options = {}) => {
    const url = new URL(window.location.href);
    url.hash = "";
    if (target === "chrono") {
      url.searchParams.set("page", "chrono");
      if (options?.design) url.searchParams.set("design", String(options.design));
    } else if (target === "productdetail") {
      url.searchParams.set("page", "productdetail");
      if (options?.design) url.searchParams.set("design", String(options.design));
    } else if (target === "cart") {
      url.searchParams.set("page", "cart");
      url.searchParams.delete("design");
    } else if (target === "checkout") {
      url.searchParams.set("page", "checkout");
      url.searchParams.delete("design");
    } else {
      url.searchParams.delete("page");
      url.searchParams.delete("design");
    }
    window.history.pushState({}, "", url.pathname + url.search);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (page === "cart") {
    return (
      <CartPage
        onNavigateHome={() => navigate("home")}
        onNavigateToCatalogue={(opts) => navigate("chrono", opts)}
        onNavigateToProductDetail={(opts) => navigate("productdetail", opts)}
        onNavigateToCheckout={() => navigate("checkout")}
      />
    );
  }

  if (page === "checkout") {
    return (
      <CheckoutPage
        onNavigateHome={() => navigate("home")}
        onNavigateToCart={() => navigate("cart")}
        onNavigateToCatalogue={(opts) => navigate("chrono", opts)}
      />
    );
  }

  if (page === "productdetail") {
    return (
      <div className="product-page">
        <ProductDetailPage
          onNavigateHome={() => navigate("home")}
          onNavigateToCatalogue={(opts) => navigate("chrono", opts)}
          onNavigateToCart={() => navigate("cart")}
        />
      </div>
    );
  }

  if (page === "chrono") {
    return (
      <div className="chrono-page">
        <ChronoPage
          onNavigateHome={() => navigate("home")}
          onNavigateToProductDetail={(opts) => navigate("productdetail", opts)}
          onNavigateToCart={() => navigate("cart")}
        />
      </div>
    );
  }

  return (
    <Variant5
      onNavigateToCatalogue={(opts) => navigate("chrono", opts)}
      onNavigateToProductDetail={(opts) => navigate("productdetail", opts)}
      onNavigateToCart={() => navigate("cart")}
    />
  );
}
