import { useState, useEffect } from "react";
import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: "auto",
    category: "Automatic Watches",
    tag: "Atelier Series № 08 — Curated Registry",
    title: "Watches worth a closer look.",
    description: "Explore mechanical craftsmanship, high-frequency calibres, and calibrated instruments engineered for enduring daily precision.",
    badgeTitle: "Balance Spring",
    badgeValue: "28,800 vph • 4Hz",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZqN1acRjWEXlYnzpfpSklq47xEcHAyhfTaGsBBz7e-5SK1mhmehwhXNCjXu6VhyhVsoQlV4LCanbqKopQOiPeEDi3AcVS1EWAp49rgzbDTfJM_DZlaXarY7oqhNbx-VmZ8nLnMY2-8sgqluu2H3TN1b3Kko8xrlrBlhUXSAIMGSctyfVw6amJVcmKjHx3CGz3cmMebowLN91nReaToyiO77F8CPK6V5ZkH7G6f6IdinNLB7WFxp-c",
    alt: "Editorial macro photograph of a luxury automatic watch dial showcasing deep petrol blue sunburst texture",
  },
  {
    id: "classic",
    category: "Timeless Classics",
    tag: "Heritage Atelier — Hand-Finished Series",
    title: "Purity of form and horological grace.",
    description: "Subtle opaline dials, hand-stitched Tuscan bridle leather, and archival exhibition casebacks refined for timeless formal restraint.",
    badgeTitle: "Power Reserve",
    badgeValue: "48 Hours Autonomous",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=85",
    alt: "Classical luxury dress watch with warm ivory dial and fine leather strap",
  },
  {
    id: "modern",
    category: "Modern Essentials",
    tag: "Daily Instrument — 316L Stainless Steel",
    title: "Engineered for effortless daily rotation.",
    description: "Satin-finished solid steel bezels, anti-reflective sapphire crystals, and solid milled jubilee links built to withstand daily city life.",
    badgeTitle: "Water Resistance",
    badgeValue: "10 ATM / 100M Depth",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85",
    alt: "Modern stainless steel sports watch with dark dial and link bracelet",
  },
];

export default function Section01WatchesWorthACloser() {
  const ui = useCatalogue();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const handleSelect = (idx) => {
    setCurrent(idx);
    ui.setHero(slides[idx].category);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <RevealSection className="relative w-full bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden mb-space-xl border border-outline-variant/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] items-stretch relative">
        {/* Left Content Side */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>{slide.tag}</span>
              </div>
              <h1 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-on-surface tracking-tight mb-space-sm max-w-xl font-bold">
                {slide.title}
              </h1>
              <p className="font-body-lg text-sm sm:text-base text-outline max-w-lg mb-space-lg leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Navigation Pills & Slide Dots */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant/15">
            <div className="flex flex-wrap items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  className={`px-3.5 py-1.5 rounded-full font-label-md text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                    current === idx
                      ? "bg-primary text-on-primary font-bold shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                  }`}
                  type="button"
                  onClick={() => handleSelect(idx)}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${current === idx ? "bg-secondary-fixed" : "bg-outline"}`}></span>
                  <span>{s.category}</span>
                </button>
              ))}
            </div>

            {/* Left / Right Carousel Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <span className="font-mono text-xs text-outline px-1">
                0{current + 1} / 0{slides.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Visual Side with Moving Animated Images */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full flex items-center justify-center overflow-hidden bg-surface-container-low p-6">
          {/* Subtle concentric background rings */}
          <div className="absolute w-[440px] h-[440px] -right-16 -top-10 rounded-full border-[18px] border-surface-container-highest shadow-inner opacity-60 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full border-2 border-dashed border-outline-variant/40 flex items-center justify-center">
              <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-surface-variant to-surface-container-lowest opacity-30"></div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center"
            >
              <img
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl transition-transform duration-700 hover:scale-105"
                alt={slide.alt}
                src={slide.image}
              />
            </motion.div>
          </AnimatePresence>

          {/* Floating Spec Badge that transitions with slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-6 left-6 z-20 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-outline-variant/20 flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-secondary text-[22px]">precision_manufacturing</span>
              <div>
                <p className="font-label-sm text-[10px] text-outline uppercase tracking-wider font-semibold">{slide.badgeTitle}</p>
                <p className="font-label-md text-xs sm:text-sm text-primary font-bold">{slide.badgeValue}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </RevealSection>
  );
}
