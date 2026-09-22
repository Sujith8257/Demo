export default function VALUEDEALSECTIONDeepBlue({
  className = "",
  containerClassName = "max-w-[1760px] mx-auto px-margin",
}) {
  return (
    <section className={`w-full py-space-xl bg-[#0056C3] text-white overflow-hidden relative ${className}`}>
      {/* Subtle Guilloché Clock Dial Background Line Art */}
      <div className={"absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center"}>
        <svg className={"w-[900px] h-[900px] stroke-white fill-none"} strokeWidth={"1.5"} viewBox={"0 0 1000 1000"}>
          <circle cx={"500"} cy={"500"} r={"450"}></circle>
          <circle cx={"500"} cy={"500"} r={"350"}></circle>
          <circle cx={"500"} cy={"500"} r={"250"}></circle>
          <circle cx={"500"} cy={"500"} r={"150"}></circle>
          <path d={"M 500,50 L 500,950 M 50,500 L 950,500"}></path>
        </svg>
      </div>
      <div className={`${containerClassName} relative z-10`}>
        <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center"}>
          <div className={"lg:col-span-7"}>
            <div className={"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#388E3C] text-white font-label-caps text-label-caps uppercase tracking-wider mb-space-sm font-bold"}>
              <span className={"material-symbols-outlined text-[14px]"}>
                local_offer
              </span>
              Curated Value Season
            </div>
            <h2 className={"font-headline-lg text-headline-lg text-white mb-space-xs"}>
              Selected favourites. Better value.
            </h2>
            <p className={"font-body-lg text-body-lg text-slate-100 max-w-xl mb-space-md"}>
              Direct partnerships with master ateliers eliminate intermediary retail markups. Enjoy verified heirloom items with complimentary leather monogramming and express shipping.
            </p>
            <div className={"flex flex-wrap items-center gap-space-md"}>
              <div className={"flex items-center gap-2"}>
                <span className={"material-symbols-outlined text-[#388E3C] text-[22px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className={"font-body-sm text-body-sm text-white"}>
                  Up to 25% Atelier Direct Savings
                </span>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"material-symbols-outlined text-[#388E3C] text-[22px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className={"font-body-sm text-body-sm text-white"}>
                  Express 48-Hour Dispatch
                </span>
              </div>
            </div>
          </div>
          <div className={"lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-space-sm"}>
            <div className={"w-full sm:w-auto bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl text-center sm:text-left flex flex-col items-center sm:items-start"}>
              <span className={"font-label-caps text-label-caps text-slate-200 uppercase"}>
                Season Closes In
              </span>
              <div className={"flex items-center gap-2 my-2 text-white font-numeric-price text-headline-sm"}>
                <div className={"bg-black/30 px-3 py-1.5 rounded"}>
                  03
                  <span className={"text-[10px] block text-slate-300 font-label-caps"}>
                    DAYS
                  </span>
                </div>
                <span>
                  :
                </span>
                <div className={"bg-black/30 px-3 py-1.5 rounded"}>
                  18
                  <span className={"text-[10px] block text-slate-300 font-label-caps"}>
                    HRS
                  </span>
                </div>
                <span>
                  :
                </span>
                <div className={"bg-black/30 px-3 py-1.5 rounded"}>
                  44
                  <span className={"text-[10px] block text-slate-300 font-label-caps"}>
                    MIN
                  </span>
                </div>
              </div>
              <a className={"w-full mt-2 py-3 px-6 rounded-lg bg-[#FD661D] hover:bg-secondary text-white font-label-caps text-label-caps uppercase tracking-wider text-center transition-all shadow-md active:scale-95"} href={"#"}>
                Explore Value Curation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
