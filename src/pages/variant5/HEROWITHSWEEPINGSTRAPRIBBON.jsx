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

  // Auto-advance banner continuously every 5.5s regardless of hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const banner = heroBanners[current];

  return (
    <section
      id="collection"
      className="relative w-full overflow-hidden bg-[#131a2c] select-none group"
    >
      {/* Full-width banner frame fitting the top of the page itself with reduced height */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] overflow-hidden">
        {/* Animated Background Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={banner.id}
            src={banner.image}
            alt={banner.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
        </AnimatePresence>

        {/* High-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#131a2c]/95 via-[#131a2c]/80 sm:via-[#131a2c]/65 to-transparent z-10">
          <div className="w-full h-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end sm:justify-center pb-8 sm:pb-0">
            <div className="max-w-xl">
              <span className="inline-block text-[#ff9f1c] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                {banner.tag}
              </span>

              <h1 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-1.5 sm:mb-2">
                {banner.title}
              </h1>

              <p className="font-instrument text-white/85 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-md">
                {banner.subtitle}
              </p>

              <div>
                <a
                  href={banner.href}
                  className="inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-md bg-[#ff9f1c] hover:bg-[#e07f00] text-[#131a2c] font-bold text-xs transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  {banner.cta}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Arrows inside banner */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer opacity-70 hover:opacity-100"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % heroBanners.length)}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer opacity-70 hover:opacity-100"
        >
          <FiChevronRight className="text-xl" />
        </button>

        {/* Integrated Pagination Pill & Dots inside the banner */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
          {heroBanners.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-7 bg-[#ff9f1c]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
