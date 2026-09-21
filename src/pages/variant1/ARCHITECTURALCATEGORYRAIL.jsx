import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSliders, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = [
  { name: "Automatic Watches", count: 48 },
  { name: "Dress Chronographs", count: 32 },
  { name: "Bridle Leather", count: 26 },
  { name: "Studio Ceramics", count: 35 },
  { name: "Architectural Objects", count: 19 },
  { name: "Horological Gifts", count: 14 },
  { name: "Limited Allocations", count: 10 },
];

export default function ARCHITECTURALCATEGORYRAIL() {
  const [activeCategory, setActiveCategory] = useState("Automatic Watches");
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const activeCount = categories.find((c) => c.name === activeCategory)?.count || 184;

  return (
    <section className="w-full bg-surface-container-lowest py-3 border-y border-outline-variant/30 shadow-xs relative z-10">
      <div className="max-w-[1760px] mx-auto px-margin">
        <div className="flex items-center justify-between gap-space-md">
          {/* Index View Filter Label */}
          <div className="flex items-center gap-2 text-primary font-label-caps text-label-caps uppercase whitespace-nowrap pr-2 flex-shrink-0 select-none">
            <FiSliders className="text-[17px] text-primary" />
            <span className="tracking-wider font-bold">Index View</span>
          </div>

          {/* Left Arrow (Visible on scrollable containers) */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll categories left"
            className="hidden sm:flex w-7 h-7 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant items-center justify-center transition-colors flex-shrink-0"
          >
            <FiChevronLeft className="text-sm" />
          </button>

          {/* Filter Pills Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto py-1 text-label-md font-label-md flex-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <motion.button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0 transition-colors font-medium cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-on-primary shadow-sm font-semibold"
                      : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-normal ${
                      isActive
                        ? "bg-primary-container text-on-primary"
                        : "bg-surface-container-high text-outline"
                    }`}
                  >
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll categories right"
            className="hidden sm:flex w-7 h-7 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant items-center justify-center transition-colors flex-shrink-0"
          >
            <FiChevronRight className="text-sm" />
          </button>

          {/* Total Records Badge */}
          <div className="hidden lg:flex items-center gap-1.5 text-outline font-label-caps text-label-caps uppercase pl-4 whitespace-nowrap flex-shrink-0 select-none border-l border-outline-variant/40">
            <span className="font-semibold text-on-surface">
              {activeCategory}:
            </span>
            <span className="font-bold text-primary">
              {activeCount}
            </span>
            <span className="text-outline-variant font-normal">
              / 184 Total Records
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
