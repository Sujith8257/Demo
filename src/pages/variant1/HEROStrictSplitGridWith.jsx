import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiWatch, FiCompass, FiShield } from "react-icons/fi";

const v1Slides = [
  {
    id: 0,
    edition: "Horological Edition 04 / 2025",
    ref: "Ref. AH-9042",
    title: "Time, considered differently.",
    description:
      "Engineered movements, hand-finished cases, and considered proportions. Built for longevity across generations.",
    ctaPrimary: "Explore The Collection",
    ctaSecondary: "Engineering Specs",
    specs: [
      { label: "Movement", value: "Calibre AH-28" },
      { label: "Beat Rate", value: "28,800 vph" },
      { label: "Tolerance", value: "-2 / +4 sec", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAkMTyV7lOTZsiqwh45M9TcbCIFRmvYcDHd8_Peo9TmZzrdo1SUnwNeH5RBg9FzoKQnI1cGNCsTrT_3BMenQqP7oL4hGmuveZeCBcHuMyYnrghGtal2FpRWMi1KST96vSVCYvKYZDupU9GiQcvQgBOjRtNf3t0MI82Rg2uB6i6VSmUJFFyRAF3rF8XhxFQPLcdNb1neQrREz_0IK3OCMlGDr9PCtJ3EjzxoBHEZx8qrKlXQ1RqOWFt",
    alt: "Macro close-up shot of an exquisite minimalist luxury automatic watch face",
    badgeLabel: "Batch Status",
    badgeValue: "Allocation: 48 Remaining",
  },
  {
    id: 1,
    edition: "Saddlery Archive · Cohort 02",
    ref: "Ref. LT-8812",
    title: "Crafted to age with honour.",
    description:
      "Thick vegetable-tanned bridle leather cut from single hides, saddle-stitched by hand with waxed Irish linen thread.",
    ctaPrimary: "Explore Saddlery",
    ctaSecondary: "Leather Provenance",
    specs: [
      { label: "Tannage", value: "Oak Bark 14m" },
      { label: "Hardware", value: "Forged Brass" },
      { label: "Thread", value: "Double Stitch", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKHKJaIU_NMbcaQR8hF9YaoKVatvEG8E9VxBSMVptIgVxoHWxqGh8VONEWnA63s2shGQRYtdGYmWOeh9n58vvY609PVxdu4VIwu_FeeOews76cUzzSIQVGb3heTqZ1xgWQOgQjJHbrMS3GUKs_TBOPYo0qd0351nAQ0lC3DtfndfR51yfGPfsWVpZNuxbIlhN2HzvdeB-qxlM4MgB0MNmn2riGQaUJAFiahV6TlARBk6bdqHp5U8Ww",
    alt: "Artisanal hand-stitched full grain bridle leather briefcase",
    badgeLabel: "Guild Origin",
    badgeValue: "Kanpur Tannery Certified",
  },
  {
    id: 2,
    edition: "Studio Earthworks · Series 07",
    ref: "Ref. CE-4109",
    title: "Small batches. Unhurried hands.",
    description:
      "Wheel-thrown stoneware vessels aged underground for 14 days and wood-fired to 1,280°C for organic crackle glazes.",
    ctaPrimary: "Discover Ceramics",
    ctaSecondary: "Kiln Dispatches",
    specs: [
      { label: "Clay Age", value: "14 Days Slip" },
      { label: "Firing", value: "Wood Kiln 48h" },
      { label: "Batch Size", value: "Limited to 25", highlight: true },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvFCkoJroCPSDjpV5poE259CiI6fMCPTqChk-F7W6DfzI-1DCeeMZ6LW9hKa8SOGvk6poIPiP2X-jU1yNyjtPSyJrWJ1FJQwPTs3h8Lgs2h-6qb-xi1UVlTQEvOE_Y9Ov3JvAtfZePUxaenXglFRTYobT0V6WkciQM0-0cCkf0JrU6dgDCx4YWTP_xY2-tiP4TMnst9ObjKxz25RXaa_NXRFfNbFxMSvB5STPzZssQvdSubZcdwO4",
    alt: "Handcrafted stoneware vessel with mineral speckles and organic form",
    badgeLabel: "Edition",
    badgeValue: "Numbered 07 of 25",
  },
];

export default function HEROStrictSplitGridWith() {
  const [current, setCurrent] = useState(0);

  // Auto-advance continuously every 5 seconds regardless of hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % v1Slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = v1Slides[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % v1Slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + v1Slides.length) % v1Slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low">
      <div className="max-w-[1760px] mx-auto px-margin">
        <div className="min-h-[460px] py-4 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] items-center gap-space-md"
            >
              {/* Left Column: Typographic Spec */}
              <div className="lg:col-span-6 py-4 flex flex-col justify-center z-10">
                <div className="flex items-center gap-space-xs mb-space-xs text-primary flex-wrap">
                  <span className="font-label-caps text-label-caps tracking-widest uppercase bg-surface-container px-3 py-1 rounded-full text-primary font-bold">
                    {active.edition}
                  </span>
                  <span className="w-8 h-[1px] bg-primary hidden sm:inline-block"></span>
                  <span className="font-body-sm text-body-sm text-outline">
                    {active.ref}
                  </span>
                </div>

                <h1 className="font-display-hero text-2xl sm:text-3xl md:text-4xl text-on-surface mb-space-xs max-w-lg">
                  {active.title}
                </h1>

                <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-md mb-space-md">
                  {active.description}
                </p>

                <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary-container text-on-secondary font-label-caps text-label-caps tracking-wider uppercase shadow-md hover:bg-secondary transition-colors cursor-pointer"
                    href="#"
                  >
                    <span>{active.ctaPrimary}</span>
                    <FiArrowRight className="text-base" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-caps text-label-caps tracking-wider uppercase hover:bg-surface-container transition-colors shadow-sm cursor-pointer"
                    href="#"
                  >
                    <span>{active.ctaSecondary}</span>
                  </motion.a>
                </div>

                {/* Micro-Telemetry Widget */}
                <div className="grid grid-cols-3 gap-space-sm pt-space-xs bg-surface-container-lowest p-space-xs rounded-xl max-w-md shadow-sm border border-outline-variant/20">
                  {active.specs.map((s, i) => (
                    <div key={i}>
                      <span className="font-label-caps text-label-caps text-outline block uppercase text-[10px]">
                        {s.label}
                      </span>
                      <span className={`font-label-md text-label-md font-bold ${s.highlight ? "text-secondary-container" : "text-on-surface"}`}>
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Circular Composition Cutting Edge */}
              <div className="lg:col-span-6 relative h-[300px] sm:h-[380px] lg:h-[440px] flex items-center justify-start lg:justify-end overflow-hidden lg:overflow-visible">
                <div className="relative lg:absolute lg:-right-20 xl:-right-24 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full bg-surface-container-high shadow-xl flex items-center justify-center p-3 sm:p-4 mx-auto lg:mx-0">
                  <div className="w-full h-full rounded-full bg-surface-container-lowest relative overflow-hidden flex items-center justify-center shadow-inner">
                    <img
                      className="absolute inset-0 w-full h-full object-cover scale-105"
                      src={active.image}
                      alt={active.alt}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-surface/15 pointer-events-none" />

                    {/* Floating Specification Badge */}
                    <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 bg-surface-container-lowest/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-lg shadow-lg flex items-center gap-2.5 border border-outline-variant/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping" />
                      <div>
                        <div className="font-label-caps text-[9px] sm:text-label-caps uppercase text-outline">
                          {active.badgeLabel}
                        </div>
                        <div className="font-label-md text-xs sm:text-label-md text-on-surface font-semibold">
                          {active.badgeValue}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation Controls */}
          <div className="mt-4 flex items-center justify-between border-t border-outline-variant/20 pt-3">
            <div className="flex items-center gap-2">
              {v1Slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current ? "w-8 bg-primary" : "w-2.5 bg-outline-variant/60 hover:bg-primary/50"
                  }`}
                />
              ))}
              <span className="ml-3 font-label-caps text-[10px] text-outline uppercase tracking-wider hidden sm:inline">
                0{current + 1} / 0{v1Slides.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center transition-colors text-on-surface cursor-pointer"
              >
                <FiChevronLeft className="text-base" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center transition-colors text-on-surface cursor-pointer"
              >
                <FiChevronRight className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
