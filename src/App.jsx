import { useState, useEffect } from "react";
import Variant5 from "./pages/variant5/Variant5.jsx";
import CataloguePage from "./pages/catalogue/CataloguePage.jsx";

export default function App() {
  const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("page") === "products" || params.get("page") === "catalogue" || params.has("design")) {
      return "catalogue";
    }
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
    if (targetPage === "catalogue" || targetPage === "products") {
      url.searchParams.set("page", "products");
      if (options.design) {
        url.searchParams.set("design", String(options.design));
      }
      if (options.query) {
        url.searchParams.set("q", options.query);
      } else if (!url.searchParams.has("q")) {
        url.searchParams.delete("q");
      }
      window.history.pushState({}, "", url.toString());
      setPage("catalogue");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      url.searchParams.delete("page");
      url.searchParams.delete("design");
      url.searchParams.delete("q");
      const cleanUrl = url.pathname + (url.search ? url.search : "");
      window.history.pushState({}, "", cleanUrl);
      setPage("home");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  if (page === "catalogue") {
    return <CataloguePage onNavigateHome={() => navigateTo("home")} />;
  }

  return <Variant5 onNavigateToCatalogue={(opts) => navigateTo("catalogue", opts)} />;
}


