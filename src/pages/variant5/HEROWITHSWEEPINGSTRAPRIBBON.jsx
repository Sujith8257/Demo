import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const heroBanners = [
  {
    id: "b1",
    tag: "New drop",
    title: "The Aster Collection",
    subtitle: "Automatic movements. Sapphire crystal. Built to be worn daily.",
    cta: "Shop the collection",
    href: "#bestsellers",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: "b2",
    tag: "Limited time",
    title: "Up to 20% off Steel Cases",
    subtitle: "On selected Meridian and Heritage pieces, this week only.",
    cta: "View offers",
    href: "#deals",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: "b3",
    tag: "Just launched",
    title: "Steel Jubilee Straps",
    subtitle: "Swap-ready bracelets for every case in the lineup.",
    cta: "Explore straps",
    href: "#categories",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1920&q=85",
  },
];

export default function HEROWITHSWEEPINGSTRAPRIBBON() {
  const [current, setCurrent] = useState(0);

  // Auto-advance banner continuously every 6s regardless of hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const banner = heroBanners[current];

  const handleNext = () => setCurrent((prev) => (prev + 1) % heroBanners.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);

  return (
    <section
      id="collection"
      className="relative w-full overflow-hidden bg-[#0d131f] select-none"
    >
      {/* Full-width cinema viewport banner */}
      <div className="relative w-full h-[72vh] sm:h-[82vh] lg:h-[calc(100vh-92px)] min-h-[540px] max-h-[920px] overflow-hidden">
        {/* 1. Cinematic Background Image - 100% bright, crisp & unobstructed */}
        <AnimatePresence mode="wait">
          <motion.img
            key={banner.id}
            src={banner.image}
            alt={banner.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
        </AnimatePresence>

        {/* Ambient subtle vignette to enhance cinematic depth without hiding the watch */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-10" />

        {/* 2. Main Stage Content Frame */}
        <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12 md:pb-14 pointer-events-none">
          <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-6">
            {/* Cinematic Floating Glassmorphic Card (Bottom-Left) */}
            <div className="w-full max-w-lg lg:max-w-xl bg-slate-950/75 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] pointer-events-auto transition-all duration-300">
              {/* Header row: Tag + Slide counter */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff9f1c]/20 text-[#ff9f1c] border border-[#ff9f1c]/40 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#ff9f1c] animate-pulse" />
                  {banner.tag}
                </span>

                <span className="text-white/60 font-mono text-xs font-semibold tracking-wider">
                  {`0${current + 1}`} / {`0${heroBanners.length}`}
                </span>
              </div>

              {/* Title & Description with smooth animated transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={banner.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.12] mb-2.5">
                    {banner.title}
                  </h1>

                  <p className="font-instrument text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                    {banner.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action row */}
              <div className="flex items-center justify-between gap-4 pt-1 border-t border-white/10">
                <a
                  href={banner.href}
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-7 rounded-xl bg-[#ff9f1c] hover:bg-[#ffa726] text-[#0f172a] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-[#ff9f1c]/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  {banner.cta}
                </a>

                {/* Compact arrows directly on card for quick access */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <FiChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <FiChevronRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom-Right Floating Glass Progress Bar */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 shadow-xl pointer-events-auto">
              {heroBanners.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "w-8 bg-[#ff9f1c]"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
