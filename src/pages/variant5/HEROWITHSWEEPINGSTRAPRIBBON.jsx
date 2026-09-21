import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiPlayCircle, FiChevronLeft, FiChevronRight, FiWatch, FiAward } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const slides = [
  {
    id: 0,
    badge: "Horology & Saddlery Cohort 04",
    badgeIcon: FiWatch,
    badgeColor: "bg-surface-container-high text-primary",
    title: "Objects calibrated for",
    titleAccent: "lifetime",
    titleSuffix: "use.",
    description:
      "Precision Swiss-calibre ticking within surgical 316L steel, bound by vegetable-tanned harness leather burnished by third-generation Jaipur saddle artisans.",
    ctaPrimary: "Acquire Calibre 04",
    ctaSecondary: "Watch Provenance (2m)",
    specs: [
      { label: "Movement", value: "Cal. 9015", sub: "42h Reserve" },
      { label: "Hide Origin", value: "Grade 1", sub: "Karnal Tannery" },
      { label: "Guarantee", value: "25-Yr", sub: "Transferable", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtqgYihvz62cIBCw9G9S3_v4kW_2Bu2OsWliMrPkfOk5QwJ_a6qldyAeGrPVUMwIhP_F_l1cs939dLP6hM_ngG_6hRpVNTcyq-Xgy_U3Qn2GNG2Rm-nkFOVN1PCKO0-f43WOKLnoYrANSFi-e6f9fkg64c6TN54yCNeCHqcsP9FB-0H3ItDLt1rTDAoIWo4hZLFeSchDjxfHN5bDiwC0yFpzjSRDSo_ss5ld9p8YzFjZCQC0xEkmDD",
    alt: "Editorial luxury showcase of an artisanal Aster automatic chronograph",
    cardTag: "Limited Edition run",
    cardTitle: "Aster Chronograph No. 04",
    cardSub: "Batch 14 of 50 pieces remaining",
    cardPrice: "₹38,400",
    cardBadge: "Certified Atelier",
  },
  {
    id: 1,
    badge: "Dynamic Bezel Calibration",
    badgeIcon: FiAward,
    badgeColor: "bg-primary-fixed text-primary",
    title: "Calculated to the",
    titleAccent: "micron",
    titleSuffix: ".",
    description:
      "Every index marker is micro-engraved into cold-rolled surgical grade titanium. Tested under 20-bar hydrostatic pressure for subterranean and maritime fidelity.",
    ctaPrimary: "Explore Engineering Lab",
    ctaSecondary: null,
    specs: [
      { label: "Tolerance", value: "±2s / Day", sub: "COSC Standard" },
      { label: "Case Metal", value: "Grade 5 Ti", sub: "Brushed Satin" },
      { label: "Depth", value: "200M", sub: "Hydrostatic Tested", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbegZ8j4sqLSW_3OoXU-3dL-xD9HSm40Shd_T-GsbIzJ5FZlXu9oSPeY0GCaMIn1zdT0suie7qDFEKiFH4zX5uJnB7LILdYTaSoshJJ-zYZXsGTp-DU1tOk3bnEmIMTt1UUE0OLFfFE1bq3yWfS731Kv-55uwsvnliJyPZk4t9LdoZsL96xokoX9zJjFsecMtmuuy8uuNgYwpjo7jw0zvMtV78G3EegbiuE-RfelB_kv74mbX916li",
    alt: "Macro close-up shot of an intricate mechanical skeleton wristwatch movement",
    cardTag: "Engineering Lab",
    cardTitle: "Skeleton Tourbillon Ti",
    cardSub: "Allocated Batch 09/25",
    cardPrice: "₹1,24,000",
    cardBadge: "Master Series",
  },
  {
    id: 2,
    badge: "Heirloom Gifting & Milestone Suites",
    badgeIcon: HiSparkles,
    badgeColor: "bg-tertiary-fixed text-tertiary",
    title: "The gift of",
    titleAccent: "provenance",
    titleSuffix: "and care.",
    description:
      "Encased in solid reforested rosewood presentation coffrets, custom monogrammed brass plaques, and archival parchment signed directly by the maker.",
    ctaPrimary: "Configure Gift Suite",
    ctaSecondary: null,
    specs: [
      { label: "Wood", value: "Rosewood", sub: "Sustainably Harvested" },
      { label: "Certificate", value: "Archival", sub: "Wax-Sealed Deckle" },
      { label: "Engraving", value: "Included", sub: "Bespoke Monogram", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDl2uvMFO3Vm7ie5HABWDDEgpkFhVzbyIEjY_Gb_U2Ycur1qWDfPBIohYSsEkvWEB_NfyccJSxdfFYOp8TIOJdSY0ZSKe23Fv4evG8d7MhbwzDo-TGtqwAIGa3wAXqGrl8WKM54AHMCip2e8s8YxfLe43x9erFdxHD0K8EuVZYn0uX39VHVwYGdClkDkVc6JVJJAUzYkD9XvZQqApowIfU6P5ooq3nRYPaMNeHEm_g5eRfM2EMzlz1G",
    alt: "Artisanal gift coffret open on an untreated oak table",
    cardTag: "Heirloom Suite",
    cardTitle: "Bespoke Coffret Registry",
    cardSub: "Personalized presentation box",
    cardPrice: "₹24,500",
    cardBadge: "Collector Gift",
  },
];

export default function HEROWITHSWEEPINGSTRAPRIBBON() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 5.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const activeSlide = slides[current];
  const BadgeIcon = activeSlide.badgeIcon;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full overflow-hidden pb-16 pt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fluid background ribbon guide curve */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 820">
          <path d="M-100,120 C340,30 520,380 820,210 C1140,40 1320,320 1600,180 L1600,820 L-100,820 Z" fill="url(#strap-gradient)" />
          <defs>
            <linearGradient id="strap-gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#afc6ff" stopOpacity="0.28" />
              <stop offset="45%" stopColor="#ffb866" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#FAF8FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1760px] px-margin">
        {/* Top Micro Index Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 font-label-caps text-label-caps uppercase text-on-surface-variant">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-secondary-container"></span>
            <span className="tracking-widest font-semibold text-primary">
              FLOW EDITION 05 // CURATED MARKETPLACE
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium tracking-wider">
            <span>COORDINATES: 28.6139° N, 77.2090° E</span>
            <span className="text-outline-variant">•</span>
            <span>ESTIMATED DISPATCH: TODAY 16:00 IST</span>
          </div>
        </div>

        {/* Animated Slide Container */}
        <div className="relative min-h-[560px] lg:min-h-[520px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
            >
              {/* Left Column: Editorial Specs */}
              <div className="flex flex-col items-start lg:col-span-6">
                <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider font-bold ${activeSlide.badgeColor}`}>
                  <BadgeIcon className="text-[14px]" />
                  {activeSlide.badge}
                </div>

                <h1 className="font-display-hero text-display-hero text-on-surface leading-[1.08] tracking-tight">
                  {activeSlide.title}{" "}
                  <span className="text-primary italic">{activeSlide.titleAccent}</span>{" "}
                  {activeSlide.titleSuffix}
                </h1>

                <p className="mt-4 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                  {activeSlide.description}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 rounded-lg bg-secondary-container px-7 py-3.5 font-label-md text-label-md uppercase tracking-wider text-on-secondary shadow-lg shadow-secondary-container/20 cursor-pointer"
                  >
                    <span>{activeSlide.ctaPrimary}</span>
                    <FiArrowRight className="text-base" />
                  </motion.button>
                  {activeSlide.ctaSecondary && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 rounded-lg bg-surface-container-highest px-6 py-3.5 font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                    >
                      <FiPlayCircle className="text-base" />
                      <span>{activeSlide.ctaSecondary}</span>
                    </motion.button>
                  )}
                </div>

                {/* Mini Specs Ribbon */}
                <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-md pt-5 bg-surface-container-low/70 rounded-xl p-4 border border-outline-variant/20">
                  {activeSlide.specs.map((spec, i) => (
                    <div key={i}>
                      <p className="font-label-caps text-label-caps text-outline uppercase">{spec.label}</p>
                      <p className={`font-headline-sm text-headline-sm mt-0.5 font-bold ${spec.highlight ? "text-primary" : "text-on-surface"}`}>
                        {spec.value}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{spec.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="relative flex items-center justify-center lg:col-span-6">
                <div className="relative h-[380px] sm:h-[460px] w-full max-w-[540px]">
                  {/* Fluid curved glow */}
                  <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary-fixed-dim/30 via-secondary-fixed/40 to-surface-container-high blur-2xl pointer-events-none" />

                  {/* Primary Visual Card */}
                  <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-surface-container-lowest p-3 sm:p-4 shadow-xl border border-outline-variant/30">
                    <img
                      className="h-full w-full object-cover rounded-[24px]"
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                    />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-surface-container-lowest/90 p-3 sm:p-4 shadow-md backdrop-blur-md border border-outline-variant/20">
                      <div>
                        <span className="inline-block font-label-caps text-label-caps uppercase text-secondary-container font-bold">
                          {activeSlide.cardTag}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-sm sm:text-base">
                          {activeSlide.cardTitle}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">
                          {activeSlide.cardSub}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-numeric-price text-numeric-price text-on-surface text-base sm:text-lg">
                          {activeSlide.cardPrice}
                        </span>
                        <div className="font-label-caps text-label-caps uppercase text-tertiary-container font-bold text-[10px]">
                          {activeSlide.cardBadge}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Slide Controls & Indicator */}
        <div className="mt-8 flex items-center justify-between border-t border-outline-variant/20 pt-4">
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? "w-10 bg-primary" : "w-3 bg-outline-variant/60 hover:bg-primary/50"
                }`}
              />
            ))}
            <span className="ml-3 font-label-caps text-[10px] text-outline uppercase tracking-wider hidden sm:inline">
              0{current + 1} / 0{slides.length} {isPaused && "(Paused)"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors cursor-pointer text-on-surface"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors cursor-pointer text-on-surface"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
