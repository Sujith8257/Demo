import { useState, useEffect } from "react";
import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion, AnimatePresence } from "motion/react";

const calibrationSlides = [
  {
    id: "calibre",
    category: "Automatic",
    kicker: "Isobaric Calibration Matrix • 5-Position Regulated",
    title: "Find your next watch.",
    subtitle: "High-precision mechanical calibres, titanium tool chronographs, and certified chronometers with -2/+4 sec/day regulation.",
    metricValue: "±3s/day",
    metricLabel: "Chronometer Grade",
    accent: "#C7A66A",
  },
  {
    id: "diver",
    category: "Sports Diver",
    kicker: "ISO 6425 Saturation Diver • 30 ATM Tested",
    title: "Oceanic instruments built for depth.",
    subtitle: "Engineered with integrated helium escape valves, 120-click ceramic ratcheting bezels, and high-contrast Super-LumiNova.",
    metricValue: "300 Metres",
    metricLabel: "Pressure Rating",
    accent: "#34745F",
  },
  {
    id: "telemetry",
    category: "Smart & GPS",
    kicker: "Multi-Band L1 + L5 GNSS • Biometric Matrix",
    title: "Connected telemetry for endurance.",
    subtitle: "Aerospace Grade 2 titanium chassis, optical cardiac sensors, and autonomous dual-frequency satellite lock.",
    metricValue: "±1.2m GNSS",
    metricLabel: "Location Accuracy",
    accent: "#123B3A",
  },
];

export default function Section02FindYourNextWatch() {
  const ui = useCatalogue();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % calibrationSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = calibrationSlides[current];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + calibrationSlides.length) % calibrationSlides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % calibrationSlides.length);
  };

  return (
    <RevealSection className="w-full bg-surface-container-lowest px-gutter py-space-md shadow-sm border-b border-outline-variant/15">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
        {/* Moving Dynamic Calibration Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 relative overflow-hidden">
          <div className="flex items-center gap-4 flex-1">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 shadow-inner"
            >
              <svg className="w-10 h-10 text-primary-container" fill="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1"></circle>
                <circle cx="20" cy="20" opacity="0.6" r="12" stroke="currentColor" strokeWidth="0.8"></circle>
                <line stroke="currentColor" strokeWidth="1.5" x1="20" x2="20" y1="2" y2="8"></line>
                <line stroke="currentColor" strokeWidth="1.5" x1="38" x2="32" y1="20" y2="20"></line>
                <line stroke="currentColor" strokeWidth="1.5" x1="20" x2="20" y1="38" y2="32"></line>
                <line stroke="currentColor" strokeWidth="1.5" x1="2" x2="8" y1="20" y2="20"></line>
                <path d="M20 20 L28 16" stroke={slide.accent} strokeLinecap="round" strokeWidth="1.5"></path>
                <path d="M20 20 L16 26" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                <circle cx="20" cy="20" fill={slide.accent} r="2"></circle>
              </svg>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex-1"
              >
                <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-outline font-semibold block mb-0.5">
                  {slide.kicker}
                </span>
                <h1 className="font-headline-sm text-lg sm:text-xl text-on-surface font-bold tracking-tight">
                  {slide.title}
                </h1>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-0.5">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Metrics & Arrow Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-outline-variant/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-surface-container px-3.5 py-1.5 rounded-lg border border-outline-variant/30 text-right"
              >
                <span className="font-mono text-sm sm:text-base font-bold text-primary block leading-none">
                  {slide.metricValue}
                </span>
                <span className="font-label-sm text-[9px] uppercase tracking-wider text-outline block mt-0.5">
                  {slide.metricLabel}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous calibration slide"
                className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              </button>
              <div className="flex gap-1 px-1">
                {calibrationSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      current === idx ? "w-4 bg-primary" : "w-1.5 bg-outline-variant"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next calibration slide"
                className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5">
          <button
            type="button"
            className="px-space-sm py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wide uppercase transition-all shadow-xs"
            onClick={() => ui.resetFilters()}
          >
            {"All Models (12)"}
          </button>
          {["Automatic", "Smart & GPS", "Sports Diver", "Classic Dress", "Field & Pilot", "Petite"].map((cat) => (
            <button
              key={cat}
              type="button"
              className="px-space-sm py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm tracking-wide uppercase hover:bg-surface-variant transition-colors cursor-pointer"
              onClick={() => {
                ui.setQuery(cat.toLowerCase().split(" ")[0]);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
