import { useState } from "react";

const tiers = [
  {
    id: 0,
    kicker: "Entry Artifacts",
    title: "Under ₹2,500",
    subtitle: "Strap rolls, bronze EDC",
    tierCategory: "Artisan Straps & EDC Category (18 verified artifacts ready for dispatch)",
    cta: "Browse Under ₹2,500 Tier",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=400&q=80",
    alt: "Leather watch roll and brass accessories",
  },
  {
    id: 1,
    kicker: "Living & Vessels",
    title: "Under ₹5,000",
    subtitle: "Stoneware, desk horology",
    tierCategory: "Living & Vessels Category (24 curated objects ready for dispatch)",
    cta: "Browse Under ₹5,000 Tier",
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=400&q=80",
    alt: "Stoneware and desk horology tools",
  },
  {
    id: 2,
    kicker: "Studio Leather",
    title: "Under ₹10,000",
    subtitle: "Travel briefs, field clocks",
    tierCategory: "Studio Leather Category (29 bespoke pieces ready for dispatch)",
    cta: "Browse Under ₹10,000 Tier",
    image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=400&q=80",
    alt: "Full grain bridle leather strap and brass buckle",
  },
  {
    id: 3,
    kicker: "Heirloom Horology",
    title: "₹10,000+",
    subtitle: "Mechanical automatic timepieces",
    tierCategory: "Mechanical Automatic Category (34 registered calibres ready for dispatch)",
    cta: "Browse ₹10,000+ Tier",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdAqYwvHybohyHW-U-F_yXEFhRkyVZK0tuJAz4rWq7j8cbtSnaty1oMiCzNz0-fzFMCX267wR741_18kY32fBwT--6CelqT_7EKyGgfhf1Uw1chkubjx6ijBYXs_RgdUfJOXdaC4uwLl2-UdX7NxekyAMygskTPmC3OHwKNjBnZiGrlYK7Ozgwr8DTD11YaDfUzG2hBLcmC8YzTVR9fD5e-fyWX1bD9RlD2ElZt_bZp1SpP-6jlF29",
    alt: "Automatic watch movement skeleton assembly with polished gears",
  },
];

export default function SHOPBYBUDGETHorizontalPill({
  className = "",
  containerClassName = "max-w-[1760px] mx-auto px-margin",
}) {
  const [selectedTier, setSelectedTier] = useState(3);
  const active = tiers[selectedTier];

  return (
    <section className={`w-full py-space-xl bg-surface ${className}`}>
      <div className={containerClassName}>
        <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-md">
            <div>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1 font-bold">
                Portfolio Accessibility
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Shop By Investment Range
              </h3>
            </div>
            <span className="font-body-sm text-body-sm text-outline">
              All prices transparent. Zero middlemen markups.
            </span>
          </div>

          {/* Interaction Pill Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-lg">
            {tiers.map((t) => {
              const isSelected = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`py-4 px-4 rounded-xl transition-all text-center flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? "bg-primary text-on-primary shadow-md"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface group"
                  }`}
                >
                  <span
                    className={`font-label-caps text-label-caps uppercase mb-1 font-bold ${
                      isSelected ? "text-inverse-primary" : "text-outline group-hover:text-primary"
                    }`}
                  >
                    {t.kicker}
                  </span>
                  <span
                    className={`font-headline-sm text-headline-sm font-bold ${
                      isSelected ? "text-on-primary" : "text-on-surface"
                    }`}
                  >
                    {t.title}
                  </span>
                  <span
                    className={`font-body-sm text-body-sm mt-1 ${
                      isSelected ? "text-primary-fixed" : "text-outline"
                    }`}
                  >
                    {t.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Curated Snapshot For Selected Tier */}
          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-16 h-16 rounded-lg bg-surface-container-lowest overflow-hidden shrink-0 shadow-xs">
                <img
                  className="w-full h-full object-cover transition-all duration-300"
                  alt={active.alt}
                  src={active.image}
                />
              </div>
              <div>
                <div className="font-label-caps text-label-caps text-primary uppercase font-bold">
                  Active Tier Selection
                </div>
                <div className="font-label-md text-label-md text-on-surface">
                  {active.tierCategory}
                </div>
              </div>
            </div>
            <a
              className="px-6 py-2.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider font-bold whitespace-nowrap shadow-xs hover:shadow-md transition-all cursor-pointer"
              href="#collection"
            >
              {active.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
