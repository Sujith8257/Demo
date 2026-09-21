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
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "b2",
    tag: "Limited time",
    title: "Up to 20% off Steel Cases",
    subtitle: "On selected Meridian and Heritage pieces, this week only.",
    cta: "View offers",
    href: "#deals",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "b3",
    tag: "Just launched",
    title: "Steel Jubilee Straps",
    subtitle: "Swap-ready bracelets for every case in the lineup.",
    cta: "Explore straps",
    href: "#categories",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function HEROWITHSWEEPINGSTRAPRIBBON() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance banner every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const banner = heroBanners[current];

  return (
    <section
      id="collection"
      className="w-full pt-4 pb-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Frame - Clean 16:6 aspect ratio */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] lg:aspect-[16/6] rounded-lg sm:rounded-xl overflow-hidden bg-[#131a2c] border border-outline-variant/30 shadow-md">
          {/* Animated Background Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={banner.id}
              src={banner.image}
              alt={banner.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover select-none"
            />
          </AnimatePresence>

          {/* Clean Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#131a2c]/95 via-[#131a2c]/75 sm:via-[#131a2c]/65 to-transparent flex flex-col justify-end sm:justify-center p-6 sm:p-10 lg:p-14 z-10">
            <div className="max-w-xl">
              <span className="inline-block text-[#ff9f1c] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3">
                {banner.tag}
              </span>

              <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-2 sm:mb-3">
                {banner.title}
              </h1>

              <p className="font-instrument text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
                {banner.subtitle}
              </p>

              <div>
                <a
                  href={banner.href}
                  className="inline-flex items-center justify-center h-10 sm:h-11 px-6 sm:px-8 rounded bg-[#ff9f1c] hover:bg-[#e07f00] text-[#131a2c] font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                >
                  {banner.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Left / Right Nav Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer opacity-0 sm:group-hover:opacity-100 hover:opacity-100"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % heroBanners.length)}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer opacity-0 sm:group-hover:opacity-100 hover:opacity-100"
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          {heroBanners.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-8 bg-[#007185]" : "w-2 bg-outline-variant/60 hover:bg-outline-variant"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
