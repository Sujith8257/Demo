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
  const [current, setCurrent] = useState(0);

  // Auto-advance banner continuously every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroBanners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const banner = heroBanners[current];

  const handleNext = () => setCurrent((prev) => (prev + 1) % heroBanners.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);

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
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 border border-amber-500/40 rounded-full px-3 py-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {banner.tag}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
              {banner.title}
            </h1>
            <p className="text-gray-200 mt-3 text-sm sm:text-base drop-shadow">
              {banner.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={banner.href}
              className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
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

        {/* Slide counter, top right, on the image itself */}
        <span className="absolute top-6 right-8 text-xs text-white/70 tracking-wider z-10 font-mono">
          {`0${current + 1}`} / {`0${heroBanners.length}`}
        </span>

        {/* Dots, bottom right */}
        <div className="absolute bottom-6 right-8 flex gap-2 z-10">
          {heroBanners.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "w-6 bg-amber-400" : "w-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
