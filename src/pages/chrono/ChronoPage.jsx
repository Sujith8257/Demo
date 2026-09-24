import { useState, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { CatalogueProvider } from "./state/CatalogueContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import QuickViewModal from "./components/QuickViewModal.jsx";
import Toast from "./components/Toast.jsx";
import Design1 from "./pages/design1/Design1.jsx";
import Design2 from "./pages/design2/Design2.jsx";
import Design3 from "./pages/design3/Design3.jsx";
import Design4 from "./pages/design4/Design4.jsx";
import Design5 from "./pages/design5/Design5.jsx";

const pages = { 1: Design1, 2: Design2, 3: Design3, 4: Design4, 5: Design5 };
const designLabels = {
  1: "Editorial",
  2: "Calibration",
  3: "Performance",
  4: "Midnight",
  5: "Style Edit",
};

function readVariant() {
  const q = Number(new URLSearchParams(window.location.search).get("chdesign"));
  if (pages[q]) return q;
  try {
    const saved = Number(window.localStorage.getItem("amihive-chrono-design"));
    if (pages[saved]) return saved;
  } catch {}
  return 1;
}

export default function ChronoPage({ onNavigateHome, onNavigateToProductDetail }) {
  const [active, setActive] = useState(readVariant);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const reduced = useReducedMotion();
  const Page = pages[active];

  useEffect(() => {
    try {
      window.localStorage.setItem("amihive-chrono-design", String(active));
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("chdesign", String(active));
    window.history.replaceState({}, "", url);
  }, [active]);

  useEffect(() => {
    const pop = () => setActive(readVariant());
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);

  const change = (design) => {
    if (design === active) return;
    setActive(design);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:z-[999] focus:top-2 focus:left-2 bg-white text-primary p-3"
        href="#main-content"
      >
        Skip to main content
      </a>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -9 }}
          transition={{ duration: 0.25 }}
          className="min-h-screen bg-surface"
        >
          <CatalogueProvider
            key={active}
            variant={active}
            cart={cart}
            setCart={setCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
          >
            <Header onNavigateHome={onNavigateHome} onNavigateToProductDetail={onNavigateToProductDetail} />
            <div id="main-content" className="preview-root">
              <Page />
            </div>
            <Footer onNavigateHome={onNavigateHome} />
            <QuickViewModal onNavigateToProductDetail={onNavigateToProductDetail} />
            <Toast />
          </CatalogueProvider>
        </motion.div>
      </AnimatePresence>

      {/* Floating design taskbar */}
      <nav
        aria-label="Preview five chrono catalogue designs"
        className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-[300] w-[min(96vw,900px)] rounded-2xl bg-[#102e2b]/96 border border-[#b9c9c4]/30 px-2 sm:px-3 py-2 sm:py-2.5 shadow-[0_15px_55px_rgba(0,0,0,.32)] backdrop-blur-xl text-white"
      >
        <div className="flex gap-1 sm:gap-1.5 items-center">
          {/* Back navigation */}
          <div className="flex items-center gap-1 border-r border-white/20 pr-2 mr-1 shrink-0">
            <button
              type="button"
              onClick={onNavigateHome}
              title="Go to Home"
              className="flex items-center gap-1 px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>

          <span className="hidden md:flex flex-col pl-1 pr-3 border-r border-white/20 shrink-0">
            <span className="text-[10px] uppercase tracking-[.16em] text-[#c9b17a] font-bold">AMIHIVE</span>
            <span className="text-xs font-semibold text-white/80">Chrono</span>
          </span>

          {[1, 2, 3, 4, 5].map((id) => (
            <button
              type="button"
              key={id}
              aria-pressed={active === id}
              aria-label={`Show design ${id}: ${designLabels[id]}`}
              onClick={() => change(id)}
              className="relative grow min-w-0 overflow-hidden h-11 sm:h-12 rounded-xl px-1 text-center focus-visible:outline-2 focus-visible:outline-[#dfc892]"
            >
              {active === id && (
                <motion.span
                  layoutId="chrono-design-active"
                  className="absolute inset-0 rounded-xl bg-[#e7c991]"
                  transition={{ type: "spring", stiffness: 420, damping: 38 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-bold ${
                  active === id ? "text-[#112e2b]" : "text-white/75 hover:text-white"
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">0{id}</span>
                <span className="hidden sm:inline truncate">{designLabels[id]}</span>
              </span>
            </button>
          ))}
        </div>
      </nav>
    </MotionConfig>
  );
}
