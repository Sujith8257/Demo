import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiCheckBadge, HiSparkles } from "react-icons/hi2";

const bezelSlides = [
  {
    id: 0,
    category: "Watches",
    badge: "Atelier Certified",
    badgeIcon: HiCheckBadge,
    badgeColor: "bg-primary-container text-on-primary",
    issue: "Issue № 14 · Edition 2025",
    title: "Precision for every moment.",
    description:
      "Mechanical and contemporary watches chosen for craftsmanship, calibrated tolerances, and everyday wear.",
    ctaPrimary: "Shop watches",
    ctaSecondary: "Examine Calibres",
    metrics: [
      { label: "Power Reserve", value: "42h Auto", highlight: true },
      { label: "Tolerance", value: "±4s / Day" },
      { label: "Case Watermark", value: "10 ATM" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAV6BL5f0LOZop9yB8jFC3N6irIXczRAfnaQawD_lPYRY1DgVEuAyzeWzbsx9PQ-v4lOxmZQB5PCgrDhV_40bzthVQaFpvKuKATsiH5vP9zF-D-KrhBAHXWnrY7qHwFi5Jf6AUdBEnPdYocKlfAg3CH_1p3U9gMr7J9vnSVn18QpTWGST33cYCJuGsiXpnVLvbiz61wxp_uRIJ9hslKgFP2fsCi0JPEmaj3RA5cob9gXX9aYS7yNs0o",
    alt: "High-end automatic mechanical watch with sapphire glass open caseback",
    label: "ASTER NO.04 AUTOMATIC",
  },
  {
    id: 1,
    category: "Handcrafts",
    badge: "Master Stoneware",
    badgeIcon: HiSparkles,
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
    issue: "Atelier Auroville · Batch 22",
    title: "Shaped by fire and soil.",
    description:
      "Stoneware, cast brass, and wood craft born from decades of discipline. Pieces with presence, tactile warmth, and permanence.",
    ctaPrimary: "Discover Handcrafts",
    ctaSecondary: "Studio Directory",
    metrics: [
      { label: "Kiln Temp", value: "1,280°C", highlight: true },
      { label: "Slip Aging", value: "14 Days" },
      { label: "Edition", value: "Batch of 25" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6AboJJta_yZN7ocKsrLdhi1GPGReg5qNVvUY7RYWg5i_szrBhuC7qUoMg6qXg3Z9MJRU1aguNrtpbOMBYhxLVrCe9OoXwK1QTa_WQbSViyRQ-lN_OGDgWjO9IP3EMhrq9-c7n9JYxnxb5RCzkRf82JAdbVALZDdqQ8L6_g-9jH7eHXG66ejp9vCzfxrStzdKHei3vB_eGcxofErQc-OEzC3phtEiaVSaC-XaXMfb1NEN7xhlmGh9E",
    alt: "Artisanal wheel-thrown terracotta and bone-white stoneware vase",
    label: "AUROVILLE RIBBED URN",
  },
  {
    id: 2,
    category: "Gifts",
    badge: "Keepsake Registry",
    badgeIcon: HiSparkles,
    badgeColor: "bg-primary text-on-primary",
    issue: "Curated Under ₹5,000",
    title: "Gifts worth remembering.",
    description:
      "Bespoke full-grain leather sleeves, hand-turned brass paperweights, and timeless timepieces sealed in wooden presentation coffrets.",
    ctaPrimary: "Find a gift",
    ctaSecondary: "Corporate Bespoke",
    metrics: [
      { label: "Packaging", value: "Timber Box", highlight: true },
      { label: "Wax Seal", value: "Hand-Applied" },
      { label: "Monogram", value: "Complimentary" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBq-uyQNvxNyMQVnwQWEAFJg-Me5p1zNvqE7ZISVtyyBCZfXzAWwWK0GdBU7L7YRwZyjRPzmwkbtSJ5UJmkWot0mYU51SQSnMdbXdcRJyPnKL2Q86D1EA8bcleWLxqIxfC7G1YYLkzFXiY5FABbbDPAwvyrW4RRRJHOYj0UBs7vmq9kFLdXI6XGREGqWgLRLr_I6TwbiKR5CO3y9z1rlLyd3VDewvWpXsHKaxqYNJPCUlVuXjxhE0zK",
    alt: "Luxurious wooden gift chest containing handcrafted leather and desk items",
    label: "ATELIER VALET SUITE",
  },
];

export default function HEROSECTIONMonumentalCircularBezel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bezelSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const active = bezelSlides[current];
  const BadgeIcon = active.badgeIcon;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % bezelSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + bezelSlides.length) % bezelSlides.length);

  return (
    <section
      className="relative w-full overflow-hidden bg-surface-container-lowest pb-space-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Radial Glow behind bezel cut */}
      <div className="absolute -top-32 right-0 w-[840px] h-[840px] rounded-full bg-surface-container-high/40 blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-[1760px] mx-auto px-margin relative z-10 pt-space-lg">
        <div className="relative min-h-[660px] sm:min-h-[580px] lg:h-[620px] w-full bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-space-md lg:p-space-xl gap-space-lg"
            >
              {/* Left Column Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-20">
                <div className="flex items-center gap-2 mb-space-sm flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-caps text-label-caps uppercase tracking-wider font-bold ${active.badgeColor}`}>
                    <BadgeIcon className="text-[14px]" />
                    {active.badge}
                  </span>
                  <span className="font-label-caps text-label-caps text-outline uppercase">
                    {active.issue}
                  </span>
                </div>

                <h1 className="font-display-hero text-display-hero text-on-surface mb-space-sm max-w-lg">
                  {active.title}
                </h1>

                <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg max-w-md">
                  {active.description}
                </p>

                <div className="flex flex-wrap items-center gap-space-sm">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 rounded-lg bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase tracking-wider shadow-md hover:bg-secondary transition-all flex items-center gap-2 cursor-pointer"
                    href="#"
                  >
                    <span>{active.ctaPrimary}</span>
                    <FiArrowRight className="text-base" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm cursor-pointer"
                    href="#"
                  >
                    {active.ctaSecondary}
                  </motion.a>
                </div>

                {/* Live Calibre Metric Meter */}
                <div className="mt-space-lg pt-space-md flex items-center gap-4 sm:gap-space-md bg-surface-container-lowest/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-outline-variant/20">
                  {active.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {idx > 0 && <div className="w-px h-8 bg-outline-variant/60" />}
                      <div>
                        <p className="font-label-caps text-label-caps text-outline uppercase text-[10px]">{m.label}</p>
                        <p className={`font-headline-sm text-headline-sm font-bold ${m.highlight ? "text-primary" : "text-on-surface"}`}>
                          {m.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Monumental Circular Bezel */}
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[340px] lg:h-full flex items-center justify-center relative">
                {/* Decorative Outer Calibration Ring */}
                <div
                  className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-dashed border-outline-variant/60 animate-spin pointer-events-none"
                  style={{ animationDuration: "90s" }}
                />

                {/* Bezel Step 1 */}
                <div className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] rounded-full p-3 bg-surface-container-highest shadow-xl flex items-center justify-center relative">
                  {/* Chrono Index Ticks */}
                  <div className="absolute inset-2 rounded-full border border-primary/20 pointer-events-none flex items-center justify-center">
                    <span className="absolute top-1 font-label-caps text-[10px] text-outline">60</span>
                    <span className="absolute right-2 font-label-caps text-[10px] text-outline">15</span>
                    <span className="absolute bottom-1 font-label-caps text-[10px] text-outline">30</span>
                    <span className="absolute left-2 font-label-caps text-[10px] text-outline">45</span>
                  </div>

                  {/* Inner Masked Image */}
                  <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-surface-container">
                    <img
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      src={active.image}
                      alt={active.alt}
                    />
                    <div className="absolute bottom-5 inset-x-0 flex justify-center">
                      <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-caps text-label-caps text-on-surface shadow-sm text-[10px] font-bold">
                        {active.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Micro-Controls */}
          <div className="absolute bottom-5 right-6 z-30 flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-2 rounded-full shadow-md border border-outline-variant/30">
            {bezelSlides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`slide-indicator h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? "w-6 bg-primary" : "w-2.5 bg-outline-variant hover:bg-primary/50"
                }`}
              />
            ))}
            <div className="w-px h-3 bg-outline-variant mx-1"></div>
            <button
              onClick={prevSlide}
              className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <FiChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
