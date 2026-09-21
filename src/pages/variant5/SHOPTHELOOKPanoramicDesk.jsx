export default function SHOPTHELOOKPanoramicDesk() {
  return (
<>
    <section className={"w-full py-16"}>
      <div className={"mx-auto max-w-[1760px] px-margin"}>
        <div className={"mb-8 flex flex-col justify-between gap-2 md:flex-row md:items-end"}>
          <div>
            <span className={"font-label-caps text-label-caps uppercase tracking-wider text-primary"}>
              Curated Ensemble
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              The Atelier Desk Composition
            </h2>
          </div>
          <p className={"font-body-sm text-body-sm text-outline"}>
            Click any pulsating index to inspect the handcrafted object
          </p>
        </div>
        {/* Panoramic Scene Container with Hotspots */}
        <div className={"relative w-full overflow-hidden rounded-3xl bg-surface-container-lowest shadow-xl"}>
          <div className={"relative aspect-[16/9] w-full min-h-[420px]"}>
            <img className={"h-full w-full object-cover"} data-alt={"Wide high-angle lifestyle still of a luxury executive desk featuring the Aster Chronograph on a leather valet tray, a solid bronze desk lamp, a ceramic coffee tumbler, and a fountain pen on leather desk mat"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDW0zz3ktQ9q64Jr_XD-7nGbv_yG1ucOZP97YJ3qNe-C1_YwlY3Zm90jmKYRAvp81kI2Fob-MOLKlZQft7YPrQ9Mznp7ww5qQHwiswp-XP_3Qm0JK6YNanClB6IaApUsq5SHOvOaYXyGkEFPR-eFCjgZgTaySaB6bMkF6rv3zt9BmxxLy71Ys2tZ4Qbco6GES1AKQar4VZNIfijsnxcIOPw_3NDRHQA_rMMDehrOSkQ9XOK_iz_CtuK"} />
            {/* HOTSPOT 1: The Watch */}
            <div className={"absolute left-[32%] top-[48%] -translate-x-1/2 -translate-y-1/2 group"}>
              <button aria-label={"Inspect Aster Chronograph"} className={"relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary shadow-lg transition-transform hover:scale-125"}>
                <span className={"absolute -inset-1 animate-ping rounded-full bg-secondary-container opacity-50"}></span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  add
                </span>
              </button>
              {/* Hover Card Popover */}
              <div className={"pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-56 rounded-xl bg-surface-container-lowest p-3 shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"}>
                <p className={"font-label-caps text-[10px] text-secondary-container uppercase"}>
                  Calibre 04
                </p>
                <h4 className={"font-label-md text-label-md text-on-surface"}>
                  Aster Chronograph
                </h4>
                <p className={"font-numeric-price text-sm text-on-surface mt-1"}>
                  ₹38,400
                </p>
                <a className={"mt-2 block w-full rounded bg-primary py-1 text-center font-label-caps text-[11px] uppercase text-on-primary"} href={"#"}>
                  View Artifact
                </a>
              </div>
            </div>
            {/* HOTSPOT 2: Leather Valet Tray */}
            <div className={"absolute left-[48%] top-[62%] -translate-x-1/2 -translate-y-1/2 group"}>
              <button aria-label={"Inspect Leather Valet Tray"} className={"relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary shadow-lg transition-transform hover:scale-125"}>
                <span className={"absolute -inset-1 animate-ping rounded-full bg-secondary-container opacity-50"}></span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  add
                </span>
              </button>
              <div className={"pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-56 rounded-xl bg-surface-container-lowest p-3 shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"}>
                <p className={"font-label-caps text-[10px] text-secondary-container uppercase"}>
                  Bridle Hide
                </p>
                <h4 className={"font-label-md text-label-md text-on-surface"}>
                  Catchall Valet Tray
                </h4>
                <p className={"font-numeric-price text-sm text-on-surface mt-1"}>
                  ₹3,200
                </p>
                <a className={"mt-2 block w-full rounded bg-primary py-1 text-center font-label-caps text-[11px] uppercase text-on-primary"} href={"#"}>
                  View Artifact
                </a>
              </div>
            </div>
            {/* HOTSPOT 3: Machined Brass Lamp */}
            <div className={"absolute left-[78%] top-[30%] -translate-x-1/2 -translate-y-1/2 group"}>
              <button aria-label={"Inspect Brass Lamp"} className={"relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-on-secondary shadow-lg transition-transform hover:scale-125"}>
                <span className={"absolute -inset-1 animate-ping rounded-full bg-secondary-container opacity-50"}></span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  add
                </span>
              </button>
              <div className={"pointer-events-none absolute bottom-10 right-0 w-56 rounded-xl bg-surface-container-lowest p-3 shadow-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"}>
                <p className={"font-label-caps text-[10px] text-secondary-container uppercase"}>
                  Solid Brass
                </p>
                <h4 className={"font-label-md text-label-md text-on-surface"}>
                  Equilibrium Task Light
                </h4>
                <p className={"font-numeric-price text-sm text-on-surface mt-1"}>
                  ₹16,500
                </p>
                <a className={"mt-2 block w-full rounded bg-primary py-1 text-center font-label-caps text-[11px] uppercase text-on-primary"} href={"#"}>
                  View Artifact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
