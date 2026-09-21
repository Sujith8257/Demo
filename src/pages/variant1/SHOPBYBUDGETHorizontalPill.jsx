export default function SHOPBYBUDGETHorizontalPill() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm"}>
          <div className={"flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-md"}>
            <div>
              <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1"}>
                Portfolio Accessibility
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface"}>
                Shop By Investment Range
              </h3>
            </div>
            <span className={"font-body-sm text-body-sm text-outline"}>
              All prices transparent. Zero middlemen markups.
            </span>
          </div>
          {/* Interaction Pill Bar */}
          <div className={"grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-lg"}>
            <button className={"py-4 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all text-center group flex flex-col items-center justify-center"}>
              <span className={"font-label-caps text-label-caps text-outline uppercase group-hover:text-primary mb-1"}>
                Entry Artifacts
              </span>
              <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                Under ₹2,500
              </span>
              <span className={"font-body-sm text-body-sm text-outline mt-1"}>
                Strap rolls, bronze EDC
              </span>
            </button>
            <button className={"py-4 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all text-center group flex flex-col items-center justify-center"}>
              <span className={"font-label-caps text-label-caps text-outline uppercase group-hover:text-primary mb-1"}>
                Living & Vessels
              </span>
              <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                Under ₹5,000
              </span>
              <span className={"font-body-sm text-body-sm text-outline mt-1"}>
                Stoneware, desk horology
              </span>
            </button>
            <button className={"py-4 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all text-center group flex flex-col items-center justify-center"}>
              <span className={"font-label-caps text-label-caps text-outline uppercase group-hover:text-primary mb-1"}>
                Studio Leather
              </span>
              <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                Under ₹10,000
              </span>
              <span className={"font-body-sm text-body-sm text-outline mt-1"}>
                Travel briefs, field clocks
              </span>
            </button>
            <button className={"py-4 px-4 rounded-xl bg-primary text-on-primary transition-all text-center shadow-md flex flex-col items-center justify-center"}>
              <span className={"font-label-caps text-label-caps text-inverse-primary uppercase mb-1"}>
                Heirloom Horology
              </span>
              <span className={"font-headline-sm text-headline-sm text-on-primary font-bold"}>
                ₹10,000+
              </span>
              <span className={"font-body-sm text-body-sm text-primary-fixed mt-1"}>
                Mechanical automatic timepieces
              </span>
            </button>
          </div>
          {/* Curated Snapshot For Selected Tier */}
          <div className={"bg-surface-container-low p-space-md rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md"}>
            <div className={"flex items-center gap-space-md"}>
              <div className={"w-16 h-16 rounded-lg bg-surface-container-lowest overflow-hidden shrink-0"}>
                <img className={"w-full h-full object-cover"} data-alt={"Automatic watch movement skeleton assembly with polished gears and balance spring on neutral background."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDdAqYwvHybohyHW-U-F_yXEFhRkyVZK0tuJAz4rWq7j8cbtSnaty1oMiCzNz0-fzFMCX267wR741_18kY32fBwT--6CelqT_7EKyGgfhf1Uw1chkubjx6ijBYXs_RgdUfJOXdaC4uwLl2-UdX7NxekyAMygskTPmC3OHwKNjBnZiGrlYK7Ozgwr8DTD11YaDfUzG2hBLcmC8YzTVR9fD5e-fyWX1bD9RlD2ElZt_bZp1SpP-6jlF29"} />
              </div>
              <div>
                <div className={"font-label-caps text-label-caps text-primary uppercase"}>
                  Active Tier Selection
                </div>
                <div className={"font-label-md text-label-md text-on-surface"}>
                  Mechanical Automatic Category (34 registered calibres ready for dispatch)
                </div>
              </div>
            </div>
            <a className={"px-5 py-2.5 rounded-lg bg-secondary-container text-on-secondary font-label-caps text-label-caps uppercase tracking-wider whitespace-nowrap hover:opacity-90 transition-opacity"} href={"#"}>
              Browse ₹10,000+ Tier
            </a>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
