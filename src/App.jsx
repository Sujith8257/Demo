import { useState, useEffect } from "react";
import Variant5 from "./pages/variant5/Variant5.jsx";
import CataloguePage from "./pages/catalogue/CataloguePage.jsx";
import ProductDetailPage from "./pages/product/ProductDetailPage.jsx";

export default function App() {
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("page") === "productdetail") return "productdetail";
    if (params.get("page") === "products" || params.get("page") === "catalogue") return "catalogue";
    return "home";
  };

  const [page, setPage] = useState(getInitialPage);

  useEffect(() => {
    const onPopState = () => {
      setPage(getInitialPage());
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigateTo = (targetPage, options = {}) => {
    const url = new URL(window.location.href);

    if (targetPage === "productdetail") {
      url.searchParams.set("page", "productdetail");
      url.searchParams.delete("design");
      if (options.pddesign) {
        url.searchParams.set("pddesign", String(options.pddesign));
      }
      window.history.pushState({}, "", url.toString());
      setPage("productdetail");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (targetPage === "catalogue" || targetPage === "products") {
      url.searchParams.set("page", "products");
      url.searchParams.delete("pddesign");
      if (options.design) {
        url.searchParams.set("design", String(options.design));
      }
      window.history.pushState({}, "", url.toString());
      setPage("catalogue");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      url.searchParams.delete("page");
      url.searchParams.delete("design");
      url.searchParams.delete("pddesign");
      const cleanUrl = url.pathname + (url.search ? url.search : "");
      window.history.pushState({}, "", cleanUrl);
      setPage("home");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  if (page === "productdetail") {
    return (
      <ProductDetailPage
        onNavigateHome={() => navigateTo("home")}
        onNavigateToCatalogue={(opts) => navigateTo("catalogue", opts)}
      />
    );
  }

  if (page === "catalogue") {
    return (
      <CataloguePage
        onNavigateHome={() => navigateTo("home")}
        onNavigateToProductDetail={(opts) => navigateTo("productdetail", opts)}
      />
    );
  }

  return (
    <Variant5
      onNavigateToCatalogue={(opts) => navigateTo("catalogue", opts)}
      onNavigateToProductDetail={(opts) => navigateTo("productdetail", opts)}
    />
  );
}
