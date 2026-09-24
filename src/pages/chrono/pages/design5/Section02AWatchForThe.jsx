import { useState, useEffect } from "react";
import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion, AnimatePresence } from "motion/react";

const styleSlides = [
  {
    id: "v08",
    volume: "Vol. 08 — Warm Horology",
    title: "A watch for the way you dress.",
    subtitle: "Find refined everyday pieces, understated classics, and architectural statements engineered for subtle personal expression.",
    chapter: "Chapter 01 • Classic Tuscan Hide",
  },
  {
    id: "v09",
    volume: "Vol. 09 — Industrial Sartorial",
    title: "Satin steel & monochrome clarity.",
    subtitle: "Ultra-thin 8.8mm profiles, diamond-faceted hands, and solid woven Milanese links tailored for sharp business silhouettes.",
    chapter: "Chapter 02 • Brushed Milanese",
  },
  {
    id: "v10",
    volume: "Vol. 10 — Bauhaus Geometry",
    title: "Proportions cut for bold distinction.",
    subtitle: "Square-formed cases, contrast panda registers, and pitch-black Horween leather crafted for contemporary minimalist style.",
    chapter: "Chapter 03 • Square Compositions",
  },
];

export default function Section02AWatchForThe() {
  const ui = useCatalogue();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % styleSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = styleSlides[current];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + styleSlides.length) % styleSlides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % styleSlides.length);
  };

  return (
    <RevealSection className="w-full bg-surface py-space-md md:py-space-lg">
      <div className="max-w-[1440px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          {/* Left Moving Editorial Style Showcase Banner */}
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden group border border-outline-variant/20">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container text-primary font-label-sm text-xs uppercase rounded-full tracking-widest mb-space-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-secondary">stylus</span>
                    <span>{slide.volume}</span>
                  </span>
                  <h1 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl text-primary font-bold leading-tight mb-space-sm">
                    {slide.title}
                  </h1>
                  <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-lg mb-space-lg leading-relaxed">
                    {slide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-space-sm pt-2">
                <a
                  className="h-11 px-6 bg-primary text-on-primary font-label-md text-xs sm:text-sm uppercase rounded-xl tracking-wider flex items-center gap-2 hover:bg-primary-container transition-all shadow-sm font-semibold"
                  href="#collection-grid"
                >
                  <span>Explore Curation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
                <button
                  className="h-11 px-5 bg-surface-container-low text-primary hover:bg-surface-container-high font-label-md text-xs sm:text-sm uppercase rounded-xl tracking-wider transition-colors flex items-center gap-2 border border-outline-variant/30"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
                  <span>Fit & Size Guide</span>
                </button>
              </div>
            </div>

            {/* Carousel Navigation Bottom Bar */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-outline-variant/20">
              <span className="font-label-sm text-xs uppercase text-secondary font-bold tracking-wider">
                {slide.chapter}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous style slide"
                  className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                </button>
                <div className="flex gap-1 px-1">
                  {styleSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrent(idx)}
                      aria-label={`Style Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        current === idx ? "w-4 bg-primary" : "w-1.5 bg-outline-variant"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next style slide"
                  className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Static / Interactive Style Chapters Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {/* Chapter 01 */}
            <div className="sm:col-span-2 bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md group hover:shadow-md transition-shadow border border-outline-variant/20">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                    Chapter 01
                  </span>
                </div>
                <h2 className="font-headline-md text-xl font-semibold text-primary">Classic Vegetable Hide</h2>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Tuscan vegetable-tanned straps matched with warm matte ivory dials.
                </p>
                <div className="pt-1">
                  <a
                    className="inline-flex items-center gap-1 font-label-sm text-xs uppercase tracking-wider text-primary font-bold group-hover:text-secondary transition-colors"
                    href="#collection-grid"
                  >
                    <span>View Leather Compositions</span>
                    <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                      east
                    </span>
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden bg-surface-container-high shrink-0 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Ivory dial dress watch with Tuscan leather strap"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC9ynNM6JX_TP1vR-V-7CxYsOpgDFWDa970fSias_si1uWb10w2hVBIYXPvuWrXeRQoiI3eUognCCXwRHm09c5AZ8NnvjIFhDmLq1hScVE4BhuN3TZg-HDg4C7UCtONgCh_bQhTuSly_xtWfzIhd9gQVeVb_sWSp0gOxNN9RHLN7jTqfYmmwmjjsllNB1QcUsOI51UrtCprvjkrqyOqz-x0aGKiB6LVnZY5haRZw_FNGO4BdvtjUqr"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>

            {/* Chapter 02 */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/20">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">Chapter 02</span>
                  <span className="material-symbols-outlined text-[18px] text-outline">watch</span>
                </div>
                <h3 className="font-headline-sm text-base font-semibold text-primary mb-1">Minimalist Steel</h3>
                <p className="font-body-sm text-xs text-on-surface-variant mb-3">
                  Satin-brushed 316L cases and woven Milanese links.
                </p>
              </div>
              <div className="h-28 rounded-xl overflow-hidden bg-surface-container-high relative mb-2">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Minimalist stainless steel watch on mesh Milanese band"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmtxOcEACrLLZZ1od6IxmErbvZ6SBirx3zrnJMVK5PSfhhVBkiqUPTEELJphd02IHH_RlVCuBDC5Em8XGV2Wbb6a5ZBJxaApUkkb8wk4eoghUeWR3BYGmL7gNseAqieE62X1Y95NTUsx5FmzyQnbBTpOMa5d2ruRtuZQOJ0p6Ty_EioUkfIrxHmJXJ780c74Xx7b38cHRit6pFrxzIrOojCdPmhk2Wg4joSNzg9b95S2A8l1NMiHii"
                />
              </div>
              <a className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold flex items-center justify-between" href="#collection-grid">
                <span>Brushed Steel</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>

            {/* Chapter 03 */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-outline-variant/20">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-sm text-xs text-secondary font-bold uppercase tracking-wider">Chapter 03</span>
                  <span className="material-symbols-outlined text-[18px] text-outline">crop_portrait</span>
                </div>
                <h3 className="font-headline-sm text-base font-semibold text-primary mb-1">Geometric Square</h3>
                <p className="font-body-sm text-xs text-on-surface-variant mb-3">
                  Bauhaus-inspired proportions and panda dual-registers.
                </p>
              </div>
              <div className="h-28 rounded-xl overflow-hidden bg-surface-container-high relative mb-2">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Square Bauhaus watch with champagne sunray dial"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBJ6bAqKP4Kxg-zgSGLvyKp5Nm6QyxYI-3eo17zFB2JtoPSOpuSMcuViujanwAs6bZrftCoWPShCev2Ui0Z20_M2OZToPn5FoxuQA8yML5Rgr0umDcw9iq03pWbX1tuw78250dxujUkbMg_fLgQ232PFS9BMSXrnNcmRqYKtqH4EAsy3AnCIL5g1IfLST2h-l4si8GrndpZled07AwkC9mkk3zbZpNUstSUVO6_VmCZCxgfsmcl0n1"
                />
              </div>
              <a className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold flex items-center justify-between" href="#collection-grid">
                <span>Square Forms</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
