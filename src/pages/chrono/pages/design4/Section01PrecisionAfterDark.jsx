import { useState, useEffect } from "react";
import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion, AnimatePresence } from "motion/react";

const nocturneSlides = [
  {
    id: "s1",
    chapter: "01 Midnight Calibres",
    tag: "Calibre Grade 5 • Super-LumiNova BGW9",
    title: "Precision after ",
    titleHighlight: "dark.",
    subtitle: "Curated dark-dial chronographs, midnight steel automatics and luminous complications engineered for extreme nightfall clarity and tactile restraint.",
    lumeRating: "BGW9 • 8h Glow",
    frequency: "28,800 VPH • 4Hz",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDRgSg2kpM962OZh8WCkbdmOj8QxMWc3c_9PKZCsEqXuDk7fBg7EQjUVp2r_00vfrBAvFwtsP5QS3obWMrADUaW-ni7EawZQ0s0xIRIjND9ZudvxpPbe-i4Xm68zSe7crn0Sk3DQkkAHz0N0QjMQjq3JjEZY62I2hhcVu2Gqq4ZttiXqZkLzjPBPydJSDwWf1bnJKAqZ-7GKQyVwMRdZT5H2z_0UEnIUrBAtaKmH6NL3GCqg2cqzs5",
  },
  {
    id: "s2",
    chapter: "02 Every Detail Matters",
    tag: "Matte Black Ceramic • Zirconia Oxide",
    title: "Monolithic ceramic ",
    titleHighlight: "stealth.",
    subtitle: "Non-reflective deep noir cases, skeletonized tungsten rotors, and Côtes de Genève Geneva striping visible through smoked exhibition casebacks.",
    lumeRating: "Tritium H3 Tubes",
    frequency: "1,500 HV Hardness",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJw6XhTmOtXo4fJTeM6kYj50kJWNs9nBqNVKawgA7NmpUKJYV8ee70KkGeZJFb_LUSdHOqm7zB56b6dLymOJGRohSOFWB_fLNy7NR-AIjb9g30L-EA6y-RTbgTHiwkA26Qxw3qWPbBMpK8FO4tl1xq1Ie3NVRBAa0Wu-0qbqFLUCRNY09HpCxXSAAOQxbUl2Ln7rznPoFCF1W3cfVq2JgVgqBN3EHiUv84vz5wEpfMdAqchpFmT4Hj",
  },
  {
    id: "s3",
    chapter: "03 Chrono Nocturne",
    tag: "Split-Second Flyback • Luminous Bezel",
    title: "Nightfall dual ",
    titleHighlight: "register.",
    subtitle: "Tactile pump pushers with instantaneous reset-to-zero mechanism and high-contrast sapphire ratcheting scale for mission-critical operations.",
    lumeRating: "Dual Lume Matrix",
    frequency: "1/10th Sec Chrono",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByZSk3S6wM_FfIsR8C1hsignheXsx7UHeJu731gaPBA8PZPCJVTRe5g1bdx4a0dqX6-zFm1mZ_5W8_p-aZ-B-gPzYkLdK6M5pQ8",
  },
];

export default function Section01PrecisionAfterDark() {
  const ui = useCatalogue();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % nocturneSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = nocturneSlides[current];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + nocturneSlides.length) % nocturneSlides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % nocturneSlides.length);
  };

  return (
    <RevealSection className="relative w-full bg-primary-container text-surface-container-lowest overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-gutter pt-space-xl pb-24 sm:pb-32 relative z-10">
        <div className="flex items-center justify-between gap-space-md mb-space-lg">
          <div className="flex items-center gap-2 font-label-md text-xs sm:text-sm tracking-wider uppercase text-on-primary-container">
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Atelier</a>
            <span className="text-secondary-fixed/50">/</span>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Special Curations</a>
            <span className="text-secondary-fixed/50">/</span>
            <span className="text-secondary-fixed font-bold">Midnight Collection</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-space-sm py-1 rounded-full bg-primary/60 text-secondary-fixed font-label-sm text-xs tracking-widest uppercase border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-ping"></span>
            <span>Series 2025: Batch Nocturne-IV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="inline-flex items-center gap-2 mb-space-sm">
                  <span className="h-px w-8 bg-secondary-fixed"></span>
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-semibold">
                    {slide.tag}
                  </span>
                </div>
                <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-surface-container-lowest tracking-tight uppercase mb-space-sm font-bold">
                  {slide.title}
                  <span className="text-secondary-fixed font-medium italic">{slide.titleHighlight}</span>
                </h1>
                <p className="font-body-lg text-sm sm:text-base text-primary-fixed-dim/90 max-w-lg mb-space-lg leading-relaxed">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-space-md mb-6 sm:mb-8">
              <a
                className="h-11 sm:h-12 px-6 bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container rounded-xl font-label-lg text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-black/20 font-bold"
                href="#catalogue"
              >
                <span>Explore Dark Dial Series</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <button
                className="h-11 sm:h-12 px-5 bg-primary/80 hover:bg-primary text-surface-container-lowest rounded-xl font-label-lg text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 border border-white/10"
                type="button"
                onClick={() =>
                  ui.openQuickView({
                    title: "AMIHIVE Midnight Dossier",
                    price: "Certified bespoke",
                    series: "Atelier specification guide",
                    specs: "Official calibre, case finishing and lume documentation preview.",
                  })
                }
              >
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">tune</span>
                <span>Atelier Dossier</span>
              </button>
            </div>

            {/* Moving Chapter Buttons with Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                {nocturneSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={`px-3.5 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                      current === idx
                        ? "bg-primary text-secondary-fixed font-bold shadow-inner border border-secondary-fixed/30"
                        : "bg-primary/40 hover:bg-primary/80 text-primary-fixed-dim"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${current === idx ? "bg-secondary-fixed" : "bg-white/40"}`}></span>
                    <span>{s.chapter}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="w-7 h-7 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="w-7 h-7 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Watch Face with Glow & Rotation */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full p-3 bg-gradient-to-tr from-secondary-fixed/30 via-primary to-surface-tint/20 shadow-2xl shadow-black/60 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-secondary-fixed/20 pointer-events-none" fill="none" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="195" stroke="currentColor" strokeDasharray="2 6" strokeWidth="1"></circle>
                  <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5"></circle>
                  <circle cx="200" cy="200" r="120" stroke="currentColor" strokeDasharray="1 10" strokeWidth="0.5"></circle>
                  <line stroke="currentColor" strokeWidth="2" x1="200" x2="200" y1="10" y2="24"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="390" x2="376" y1="200" y2="200"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="200" x2="200" y1="390" y2="376"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="10" x2="24" y1="200" y2="200"></line>
                </svg>

                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slide.id}
                      initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.05, rotate: 4 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                      alt={slide.title}
                      src={slide.image}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30 mix-blend-multiply pointer-events-none"></div>
                </div>
              </div>

              {/* Lume Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -bottom-2 -left-2 sm:left-2 bg-primary/95 text-surface-container-lowest px-4 py-2 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2.5 border border-white/10"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[22px]">bedtime</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary-fixed">Lume Rating</span>
                    <span className="font-headline-sm text-xs sm:text-sm font-bold text-surface-container-lowest">{slide.lumeRating}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Frequency Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 -right-2 sm:right-4 bg-primary/95 text-surface-container-lowest px-3.5 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                  <span className="font-label-sm text-xs uppercase tracking-widest text-primary-fixed-dim font-mono">{slide.frequency}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Divider */}
      <div className="relative w-full h-16 sm:h-24 text-surface overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full preserve-3d" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 120">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </RevealSection>
  );
}
