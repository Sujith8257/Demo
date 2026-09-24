import { useState, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { ProductProvider } from "./state/ProductContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GalleryModal from "./components/GalleryModal.jsx";
import Toast from "./components/Toast.jsx";
import Design1 from "./pages/design1/Design1.jsx";
import Design2 from "./pages/design2/Design2.jsx";
import Design3 from "./pages/design3/Design3.jsx";
import Design4 from "./pages/design4/Design4.jsx";
import Design5 from "./pages/design5/Design5.jsx";

const designs = { 1: Design1, 2: Design2, 3: Design3, 4: Design4, 5: Design5 };
const designLabels = {
  1: "Classic Atelier",
  2: "Technical Console",
  3: "Atlas S4 GPS",
  4: "Editorial Lifestyle",
  5: "Midnight Nocturne",
};

function readVariant() {
  const url = Number(new URLSearchParams(location.search).get("pddesign"));
  if (designs[url]) return url;
  try {
    const saved = Number(localStorage.getItem("amihive-product-design"));
    if (designs[saved]) return saved;
  } catch {}
  return 1;
}

export default function ProductDetailPage({ onNavigateHome, onNavigateToCatalogue }) {
  const [active, setActive] = useState(readVariant);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const Page = designs[active];
  const reduced = useReducedMotion();

  useEffect(() => {
    try {
      localStorage.setItem("amihive-product-design", String(active));
    } catch {}
    const url = new URL(location.href);
    url.searchParams.set("pddesign", String(active));
    history.replaceState({}, "", url);
  }, [active]);

  useEffect(() => {
    const pop = () => setActive(readVariant());
    addEventListener("popstate", pop);
    return () => removeEventListener("popstate", pop);
  }, []);

  function onChange(next) {
    if (next === active) return;
    setActive(next);
    scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[999] focus:bg-white focus:p-3">
        Skip to main content
      </a>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="min-h-screen bg-surface"
        >
          <ProductProvider key={active} variant={active} cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}>
            <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
            <Page />
            <Footer onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
            <GalleryModal />
            <Toast />
          </ProductProvider>
        </motion.div>
      </AnimatePresence>

      {/* Floating design taskbar with navigation */}
      <nav
        aria-label="Choose a product detail design"
        className="fixed inset-x-0 bottom-0 z-[900] flex justify-center p-2 sm:bottom-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex w-full max-w-5xl items-center gap-1 rounded-2xl border border-white/20 bg-[#102a28]/96 px-2 py-2 text-white shadow-[0_18px_50px_rgba(0,0,0,.35)] backdrop-blur-xl sm:w-auto sm:gap-1.5 sm:px-3">
          {/* Back buttons */}
          <div className="flex items-center gap-1 border-r border-white/15 pr-2 mr-1">
            <button
              type="button"
              title="Go to Home"
              onClick={onNavigateHome}
              className="flex items-center gap-1 px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              type="button"
              title="Go to Products"
              onClick={onNavigateToCatalogue}
              className="flex items-center gap-1 px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span className="hidden sm:inline">Products</span>
            </button>
          </div>

          <div className="hidden border-r border-white/15 px-3 pr-5 lg:block">
            <div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f2dba2]">AMIHIVE</div>
            <div className="text-xs font-semibold">Product Detail</div>
          </div>

          {[1, 2, 3, 4, 5].map((id) => (
            <button
              key={id}
              type="button"
              title={designLabels[id]}
              aria-pressed={active === id}
              aria-label={`Switch to design ${id}: ${designLabels[id]}`}
              onClick={() => onChange(id)}
              className={`relative h-12 min-w-0 flex-1 overflow-hidden rounded-xl px-2 sm:min-w-[112px] sm:flex-none sm:px-3 ${
                active === id ? "text-[#102a28]" : "text-white/75 hover:text-white"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="active-pd-design"
                  className="absolute inset-0 rounded-xl bg-[#edd29b]"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 460, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-2">
                <span className="font-mono text-[12px] font-bold opacity-85">0{id}</span>
                <span className="hidden text-[11px] font-bold sm:block">{designLabels[id]}</span>
              </span>
            </button>
          ))}
        </div>
      </nav>
    </MotionConfig>
  );
}
