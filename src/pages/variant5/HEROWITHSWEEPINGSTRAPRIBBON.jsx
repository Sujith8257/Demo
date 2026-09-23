import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroBanners = [
  {
    id: "b1",
    tag: "JUST LAUNCHED",
    title: "Steel Jubilee Straps",
    subtitle: "Swap-ready bracelets for every case in the lineup.",
    cta: "Explore straps",
    href: "#categories",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: "b2",
    tag: "NEW DROP",
    title: "The Aster Collection",
    subtitle: "Automatic movements. Sapphire crystal. Built to be worn daily.",
    cta: "Shop the collection",
    href: "#bestsellers",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: "b3",
    tag: "LIMITED TIME",
    title: "Up to 20% off Steel Cases",
    subtitle: "On selected Meridian and Heritage pieces, this week only.",
    cta: "View offers",
    href: "#deals",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1920&q=85",
  },
];

export default function HEROWITHSWEEPINGSTRAPRIBBON() {
  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-advance banner continuously with timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current, progressKey]);

  const banner = heroBanners[current];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % heroBanners.length);
    setProgressKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
    setProgressKey((prev) => prev + 1);
  };

  const handleSelect = (idx) => {
    setCurrent(idx);
    setProgressKey((prev) => prev + 1);
  };

  return (
    <section id="collection" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="relative h-[480px] sm:h-[500px] md:h-[520px] rounded-xl overflow-hidden select-none">
        {/* Full-bleed image, untouched */}
        <AnimatePresence mode="wait">
          <motion.img
            key={banner.id}
            src={banner.image}
            alt={banner.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Scrim: dark on the left where text sits, fades to nothing by ~45% 
            so the watch face stays fully visible and uncovered */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        {/* Text sits directly on the gradient — no card, no box */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-10 max-w-[480px]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#C7A66A] border border-[#C7A66A]/40 bg-black/40 backdrop-blur-md rounded-full px-3.5 py-1 w-fit tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A66A]" />
              {banner.tag}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              {banner.title}
            </h1>
            <p className="text-[#F7F6F2]/90 mt-3 text-sm sm:text-base drop-shadow">
              {banner.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={banner.href}
              className="inline-flex items-center justify-center bg-[#C7A66A] hover:bg-[#B28E52] text-[#171B1B] font-bold px-6 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider text-xs sm:text-sm"
            >
              {banner.cta}
            </a>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center text-white cursor-pointer text-lg leading-none transition"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center text-white cursor-pointer text-lg leading-none transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>


        {/* Animated Timer Pill Indicators, bottom right (matches user screenshot) */}
        <div className="absolute bottom-6 right-8 flex items-center gap-2 z-10">
          {heroBanners.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative h-2 w-8 sm:w-10 rounded-full bg-white/30 hover:bg-white/50 overflow-hidden cursor-pointer transition-colors"
            >
              {idx === current ? (
                <motion.div
                  key={`timer-${current}-${progressKey}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="h-full bg-[#C7A66A] rounded-full"
                />
              ) : idx < current ? (
                <div className="h-full w-full bg-[#C7A66A] rounded-full" />
              ) : (
                <div className="h-full w-0 bg-[#C7A66A] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
