import { useState, useEffect } from "react";
import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion, AnimatePresence } from "motion/react";

const instruments = [
  {
    id: "atlas",
    mode: "smart",
    series: "Field Instrumentation",
    title: "Atlas S4 Dual GPS",
    subtitle: "Titanium Grade 2 chassis with barometer valve",
    tag: "NEW ALLOCATION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfJ9AxyJNbl4NqVEUtknbmw2RzSQbeDLI2MacupuN68Ori8C9jPlzkPOwsDOeWo2CrqDVprTo9qHSOfdRp9ww8ks7H9Njm94ZHKsJ2UvWZCDRRFhfcY9a2oCcAtYEAhJnbUz2K27onqV0FxGvUIfrNnRVi8VuTufvYPEclnjthxbKCaJLfDOnfh9Dj5QGKAmMAGymeV4LBB4mILkStMDPpJa5JBUdBYg14Ur73eXO_UOy6Jq_sextD",
    lockStatus: "Active GNSS Lock: ±1.2m",
    metric1Icon: "fitbit",
    metric1Label: "Bio-Impedance",
    metric1Val: "0.05s Refresh",
    metric2Icon: "altitude",
    metric2Label: "Altimeter Scale",
    metric2Val: "-500m to 9,000m",
  },
  {
    id: "diver",
    mode: "mechanical",
    series: "Marine Calibre",
    title: "Tide Diver 42 Oceanic",
    subtitle: "Integrated helium escape valve and ceramic bezel",
    tag: "300M ISO TESTED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAswW0EReV2fsjRDWNNuvWWsMJqif90YwrQGbYk-kvVh1tuaySEuZ_tKobffDQ5AP_bV3Y2yGIfVkLsd26xJqUBktiHOdiHbZNrec8kk4BIlCq4AjJzTbSUhe1kACcEj8xX8yWwDF1rCTrUfZI8iuoS4EAdgRHdO6UDn0aBzeRs-P5OobWNQ2uZB3_wmlD3esXMoHQhdibm4b8ZL6Q82sr9kGH0bJ7N33qD3yt2L21Jf60VJN6-Kf6",
    lockStatus: "Pressure Chamber: 30 ATM Sealed",
    metric1Icon: "scuba_diving",
    metric1Label: "Helium Valve",
    metric1Val: "Automatic Vent",
    metric2Icon: "water",
    metric2Label: "Depth Rating",
    metric2Val: "300 Metres",
  },
  {
    id: "pulse",
    mode: "smart",
    series: "High-Frequency Telemetry",
    title: "Pulse One AMOLED",
    subtitle: "Ultra-bright 1000 nits display with PPG matrix",
    tag: "14-DAY POWER",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP7H5ZPl1Q-WECfoGp7nq67SQpdJpic7XljGXCUNBr_x3Bh0gU_NRV01_vCB2hia-WNMd3jmwjwlIwV7DuI8Pma5Wk-mto9eIh5aeIY7WkdxQmWNhLbzcFv6Lh8P8FoH8mbFKc1fpvDmZO7QLCzicc4kg6KQK5Lgci7eGeSmaeC3UlYMsRfOmY892uDd9Zy74AJdPvyotXob8XHHywxvQP_9SgzSrE-mSWShinlwg3OpJ7aYuqtwYA",
    lockStatus: "Cardiac Telemetry: Continuous 100Hz",
    metric1Icon: "ecg_heart",
    metric1Label: "VO2 Max Engine",
    metric1Val: "Real-time Curve",
    metric2Icon: "battery_charging_full",
    metric2Label: "Autonomous Power",
    metric2Val: "14 Days Typical",
  },
];

export default function Section01BuiltForEveryMove() {
  const ui = useCatalogue();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % instruments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const inst = instruments[current];

  const handleSelectMode = (modeVal, idx) => {
    ui.setMode(modeVal);
    if (idx !== undefined) setCurrent(idx);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + instruments.length) % instruments.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % instruments.length);
  };

  return (
    <RevealSection className="w-full bg-surface-container-low px-gutter py-space-lg lg:py-space-xl">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Left Description Side */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div>
              <div className="flex items-center gap-space-sm mb-space-sm">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">speed</span>
                  <span>Active Performance Series</span>
                </span>
                <span className="text-outline text-label-sm font-label-sm tracking-wider uppercase font-mono">
                  Calibre Ref. AM-2025-ACT
                </span>
              </div>
              <h1 className="font-headline-xl text-3xl sm:text-4xl text-primary font-bold tracking-tight mb-space-sm">
                Built for every move.
              </h1>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
                Explore sports watches, connected smart telemetry instruments, and rugged marine calibres verified against the precise athletic thresholds that govern your performance.
              </p>

              <div className="inline-flex p-1 bg-surface-container rounded-xl gap-1 mb-space-lg flex-wrap">
                <button
                  type="button"
                  className={ui.activeClass(
                    "mode",
                    "all",
                    "px-space-md py-2 rounded-lg font-label-md text-xs sm:text-sm uppercase tracking-wider bg-primary-container text-on-primary shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  )}
                  id="mode-all"
                  onClick={() => handleSelectMode("all", 0)}
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">tune</span>
                  <span>Hybrid Fleet</span>
                </button>
                <button
                  type="button"
                  className={ui.activeClass(
                    "mode",
                    "mechanical",
                    "px-space-md py-2 rounded-lg font-label-md text-xs sm:text-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5 cursor-pointer"
                  )}
                  id="mode-mechanical"
                  onClick={() => handleSelectMode("mechanical", 1)}
                >
                  <span className="material-symbols-outlined text-[16px]">scuba_diving</span>
                  <span>Sports & Diver Calibres</span>
                </button>
                <button
                  type="button"
                  className={ui.activeClass(
                    "mode",
                    "smart",
                    "px-space-md py-2 rounded-lg font-label-md text-xs sm:text-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5 cursor-pointer"
                  )}
                  id="mode-smart"
                  onClick={() => handleSelectMode("smart", 2)}
                >
                  <span className="material-symbols-outlined text-[16px]">ecg_heart</span>
                  <span>Smart Telemetry</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-space-sm pt-space-md bg-surface-container-low rounded-xl p-space-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-secondary font-headline-sm text-lg font-bold">
                  <span className="material-symbols-outlined text-[18px]">water</span>
                  <span>300m</span>
                </div>
                <span className="font-label-sm text-[10px] sm:text-xs uppercase tracking-wider text-outline">
                  ISO 6425 Saturation
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-primary font-headline-sm text-lg font-bold">
                  <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
                  <span>L1 + L5</span>
                </div>
                <span className="font-label-sm text-[10px] sm:text-xs uppercase tracking-wider text-outline">
                  Multi-Band GNSS
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-tertiary-container font-headline-sm text-lg font-bold">
                  <span className="material-symbols-outlined text-[18px]">battery_charging_full</span>
                  <span>14 Days</span>
                </div>
                <span className="font-label-sm text-[10px] sm:text-xs uppercase tracking-wider text-outline">
                  Autonomous Power
                </span>
              </div>
            </div>
          </div>

          {/* Right Moving Dynamic Instrument Showcase Banner */}
          <div className="lg:col-span-5 bg-primary-container text-on-primary p-6 sm:p-8 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <svg className="text-on-primary fill-none stroke-current" height="340" strokeWidth="0.8" viewBox="0 0 100 100" width="340">
                <circle cx="50" cy="50" r="45" strokeDasharray="2 3"></circle>
                <circle cx="50" cy="50" r="35"></circle>
                <line strokeDasharray="1 4" x1="50" x2="50" y1="5" y2="95"></line>
                <line strokeDasharray="1 4" x1="5" x2="95" y1="50" y2="50"></line>
              </svg>
            </div>

            {/* Top Row with Header and Carousel Controls */}
            <div className="flex justify-between items-start relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={inst.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-label-sm text-xs uppercase text-secondary-fixed tracking-wider font-semibold">
                    {inst.series}
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold mt-0.5 text-surface-container-lowest">
                    {inst.title}
                  </h3>
                  <p className="font-body-sm text-xs text-primary-fixed-dim mt-0.5">
                    {inst.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col items-end gap-2">
                <span className="px-2.5 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] uppercase font-bold tracking-wider">
                  {inst.tag}
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous instrument"
                    className="w-6 h-6 rounded-full bg-primary/60 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next instrument"
                    className="w-6 h-6 rounded-full bg-primary/60 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Image Container with Animated Slide Transition */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-primary/70 relative flex items-center justify-center border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={inst.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 0.95, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                    alt={inst.title}
                    src={inst.image}
                  />
                </AnimatePresence>
                <div className="absolute bottom-2 left-2 bg-primary-container/95 backdrop-blur-md px-3 py-1 rounded-lg text-surface-container-lowest flex items-center gap-1.5 text-xs font-label-sm border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                  <span>{inst.lockStatus}</span>
                </div>
              </div>
            </div>

            {/* Bottom Real-time Telemetry Metrics */}
            <AnimatePresence mode="wait">
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 grid grid-cols-2 gap-space-sm pt-space-xs"
              >
                <div className="bg-primary/50 backdrop-blur px-3 py-2 rounded-lg flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">{inst.metric1Icon}</span>
                  <div>
                    <div className="font-label-sm text-[10px] uppercase text-primary-fixed-dim">{inst.metric1Label}</div>
                    <div className="font-label-md text-xs sm:text-sm font-bold text-surface-container-lowest">{inst.metric1Val}</div>
                  </div>
                </div>
                <div className="bg-primary/50 backdrop-blur px-3 py-2 rounded-lg flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">{inst.metric2Icon}</span>
                  <div>
                    <div className="font-label-sm text-[10px] uppercase text-primary-fixed-dim">{inst.metric2Label}</div>
                    <div className="font-label-md text-xs sm:text-sm font-bold text-surface-container-lowest">{inst.metric2Val}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
