export default function PRODUCTINTEGRITYTRIPTYCH({
  className = "",
  containerClassName = "max-w-[1760px] mx-auto px-margin",
}) {
  return (
    <section className={`w-full py-space-xl bg-surface-container-low ${className}`}>
      <div className={containerClassName}>
        <div className={"border-b border-transparent pb-space-sm mb-space-lg text-center"}>
          <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1"}>
            Standard of Authenticity
          </span>
          <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
            Four Pillars of Material Integrity
          </h2>
        </div>
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"}>
          {/* Pillar 1 */}
          <div className={"bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between"}>
            <div className={"w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-space-sm"}>
              <span className={"material-symbols-outlined text-[24px]"}>
                diamond
              </span>
            </div>
            <div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-1"}>
                Sapphire Crystal
              </h4>
              <div className={"font-label-caps text-label-caps text-primary uppercase tracking-wider mb-2"}>
                Mohs Hardness 9
              </div>
              <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Every dial is shielded by non-reflective, anti-scratch synthetic sapphire crystals engineered to withstand decades of daily wear.
              </p>
            </div>
          </div>
          {/* Pillar 2 */}
          <div className={"bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between"}>
            <div className={"w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-sm"}>
              <span className={"material-symbols-outlined text-[24px]"}>
                style
              </span>
            </div>
            <div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-1"}>
                Full-Grain Leather
              </h4>
              <div className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2"}>
                Uncorrected Top Hide
              </div>
              <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Never buffed, sanded, or plastic-coated. Every hide displays natural micro-creases and gains a deep, lustrous golden patina.
              </p>
            </div>
          </div>
          {/* Pillar 3 */}
          <div className={"bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between"}>
            <div className={"w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-space-sm"}>
              <span className={"material-symbols-outlined text-[24px]"}>
                local_fire_department
              </span>
            </div>
            <div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-1"}>
                Hand-Glazed Ceramics
              </h4>
              <div className={"font-label-caps text-label-caps text-tertiary uppercase tracking-wider mb-2"}>
                1280°C High Fire
              </div>
              <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Vessels vitrified at high cone temperatures ensuring food safety, thermal resilience, and individual ash glaze markings.
              </p>
            </div>
          </div>
          {/* Pillar 4 */}
          <div className={"bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col justify-between"}>
            <div className={"w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface mb-space-sm"}>
              <span className={"material-symbols-outlined text-[24px]"}>
                pin
              </span>
            </div>
            <div>
              <h4 className={"font-headline-sm text-headline-sm text-on-surface font-bold mb-1"}>
                Small-Batch Runs
              </h4>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-2"}>
                ≤ 50 Units Per Quarter
              </div>
              <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed"}>
                Numbered sequence hallmarking protects craftspeople from unsustainable industrial velocity and guarantees exclusivity.
              </p>
            </div>
          </div>
        </div>
        {/* Trust Bar Component */}
        <div className={"mt-space-lg bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-wrap items-center justify-around gap-space-md"}>
          <div className={"flex items-center gap-3"}>
            <span className={"material-symbols-outlined text-primary text-[28px]"}>
              local_shipping
            </span>
            <div>
              <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                Secure Armored Logistics
              </div>
              <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                Insured dispatch within 48 hours
              </div>
            </div>
          </div>
          <div className={"flex items-center gap-3"}>
            <span className={"material-symbols-outlined text-primary text-[28px]"}>
              verified_user
            </span>
            <div>
              <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                Authenticity Certificate
              </div>
              <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                Maker stamped serial ledger
              </div>
            </div>
          </div>
          <div className={"flex items-center gap-3"}>
            <span className={"material-symbols-outlined text-primary text-[28px]"}>
              history
            </span>
            <div>
              <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                7-Day Studio Returns
              </div>
              <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                No friction inspection guarantee
              </div>
            </div>
          </div>
          <div className={"flex items-center gap-3"}>
            <span className={"material-symbols-outlined text-primary text-[28px]"}>
              handshake
            </span>
            <div>
              <div className={"font-label-md text-label-md font-bold text-on-surface"}>
                Fair Guild Revenue
              </div>
              <div className={"font-body-sm text-body-sm text-on-surface-variant"}>
                Direct profit sharing with artisans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
