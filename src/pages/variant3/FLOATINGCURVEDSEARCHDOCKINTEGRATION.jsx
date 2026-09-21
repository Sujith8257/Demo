export default function FLOATINGCURVEDSEARCHDOCKINTEGRATION() {
  return (
<>
    <section className={"relative z-30 max-w-[1100px] w-full mx-auto px-margin -mt-10 sm:-mt-14 md:-mt-16 mb-space-xl"}>
      <div className={"bg-surface-container-lowest rounded-2xl shadow-xl shadow-surface-dim/40 p-3 sm:p-4 transition-all"}>
        <div className={"flex flex-col md:flex-row items-stretch md:items-center gap-3"}>
          {/* Input Group */}
          <div className={"flex-1 flex items-center gap-3 px-4 py-2.5 bg-surface-container-low rounded-xl"}>
            <span className={"material-symbols-outlined text-outline text-[22px]"}>
              search
            </span>
            <input className={"w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"} placeholder={"Search mechanical watches, veg-tan bags, Jaipur pottery..."} type={"text"} />
            <button aria-label={"Clear or voice filter"} className={"text-outline-variant hover:text-on-surface"}>
              <span className={"material-symbols-outlined text-[18px]"}>
                tune
              </span>
            </button>
          </div>
          {/* Direct Category Selector */}
          <div className={"hidden lg:flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-xl font-label-md text-label-md text-on-surface-variant"}>
            <span className={"material-symbols-outlined text-[18px]"}>
              category
            </span>
            <select className={"bg-transparent text-on-surface focus:outline-none cursor-pointer pr-4"}>
              <option>
                All Collections
              </option>
              <option>
                Mechanical Watches
              </option>
              <option>
                Saddlery Leather
              </option>
              <option>
                Heritage Ceramics
              </option>
              <option>
                Brass Architectural
              </option>
            </select>
          </div>
          {/* Search CTA */}
          <button className={"h-12 px-8 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-primary/20 transition-all"}>
            <span>
              Search
            </span>
            <span className={"material-symbols-outlined text-[18px]"}>
              arrow_forward
            </span>
          </button>
        </div>
        {/* Suggested Tag Intent Row */}
        <div className={"flex items-center gap-2 pt-3 px-2 overflow-x-auto"}>
          <span className={"font-label-caps text-label-caps uppercase text-outline tracking-wider whitespace-nowrap"}>
            Suggested Curations:
          </span>
          <a className={"px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded-full font-body-sm text-body-sm text-on-surface whitespace-nowrap transition-colors"} href={"#bestsellers"}>
            Automatic watch
          </a>
          <a className={"px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded-full font-body-sm text-body-sm text-on-surface whitespace-nowrap transition-colors"} href={"#leather"}>
            Leather bag
          </a>
          <a className={"px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded-full font-body-sm text-body-sm text-on-surface whitespace-nowrap transition-colors"} href={"#vault"}>
            Wedding gift
          </a>
          <a className={"px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded-full font-body-sm text-body-sm text-on-surface whitespace-nowrap transition-colors"} href={"#home"}>
            Handmade décor
          </a>
          <a className={"px-3 py-1 bg-surface-container hover:bg-surface-container-high rounded-full font-body-sm text-body-sm text-on-surface whitespace-nowrap transition-colors"} href={"#brass"}>
            Cast Brass Inlay
          </a>
        </div>
      </div>
    </section>
</>
  );
}
