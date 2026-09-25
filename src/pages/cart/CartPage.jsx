import "./styles/cart.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { CartProvider } from "./context/CartContext.jsx";
import DesignTaskbar from "./components/DesignTaskbar.jsx";

const DESIGNS = {
  1: lazy(() => import("./pages/design1/Design1.jsx")),
  2: lazy(() => import("./pages/design2/Design2.jsx")),
  3: lazy(() => import("./pages/design3/Design3.jsx")),
  4: lazy(() => import("./pages/design4/Design4.jsx")),
  5: lazy(() => import("./pages/design5/Design5.jsx")),
};

function readDesign() {
  const url = Number(new URLSearchParams(window.location.search).get("design"));
  if (DESIGNS[url]) return url;
  try {
    const saved = Number(localStorage.getItem("amihive-cart-design"));
    if (DESIGNS[saved]) return saved;
  } catch {}
  return 1;
}

export default function CartPage({ onNavigateHome, onNavigateToCatalogue, onNavigateToProductDetail, onNavigateToCheckout }) {
  const [active, setActive] = useState(readDesign);
  const reduced = useReducedMotion();
  const Page = DESIGNS[active];

  useEffect(() => {
    try { localStorage.setItem("amihive-cart-design", String(active)); } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("design", String(active));
    window.history.replaceState({}, "", url);
  }, [active]);

  useEffect(() => {
    const pop = () => setActive(readDesign());
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);

  function onChange(next) {
    if (next === active) return;
    setActive(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <div className="cart-page">
      <MotionConfig reducedMotion="user">
        <CartProvider
          variant={active}
          onNavigateHome={onNavigateHome}
          onNavigateToCatalogue={onNavigateToCatalogue}
          onNavigateToProductDetail={onNavigateToProductDetail}
          onNavigateToCheckout={onNavigateToCheckout}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -9 }}
              transition={{ duration: reduced ? 0 : 0.28, ease: "easeOut" }}
            >
              <Suspense fallback={<div style={{ padding: "190px 24px", color: "#002524" }}>Loading cart design…</div>}>
                <Page />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </CartProvider>
        <DesignTaskbar active={active} onChange={onChange} onNavigateHome={onNavigateHome} />
      </MotionConfig>
    </div>
  );
}
