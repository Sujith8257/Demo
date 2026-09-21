export default function MADETOBEKEPTSweeping() {
  return (
<>
    <section className={"w-full py-space-xl bg-[#172337] text-white relative overflow-hidden"}>
      {/* Curved Strap Decorative Element */}
      <div className={"absolute -right-24 top-0 w-96 h-full opacity-10 pointer-events-none hidden xl:block"}>
        <svg className={"w-full h-full stroke-white fill-none"} strokeWidth={"2"} viewBox={"0 0 100 200"}>
          <path d={"M 50,0 C 80,60 10,140 50,200"}></path>
        </svg>
      </div>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"}>
          <div className={"lg:col-span-6 order-2 lg:order-1"}>
            <div className={"flex items-center gap-2 mb-space-sm"}>
              <span className={"w-3 h-3 rounded-full bg-secondary-container"}></span>
              <span className={"font-label-caps text-label-caps text-secondary-container uppercase tracking-widest"}>
                Philosophy & Provenance
              </span>
            </div>
            <h2 className={"font-headline-lg text-headline-lg text-white mb-space-md"}>
              Made to be kept, never replaced.
            </h2>
            <p className={"font-body-lg text-body-lg text-slate-300 mb-space-md leading-relaxed"}>
              In an era of programmed obsolescence, we build for longevity. Our watch movements are fully serviceable by any certified watchmaker across the world. Our leather is tanned with organic mimosa and chestnut bark to evolve a personalized patina.
            </p>
            <div className={"grid grid-cols-2 gap-space-md mb-space-lg"}>
              <div className={"p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm"}>
                <span className={"font-display-hero text-headline-lg text-inverse-primary font-bold"}>
                  100%
                </span>
                <p className={"font-body-sm text-body-sm text-slate-300 mt-1"}>
                  Sustainably sourced raw hides and recyclable packaging
                </p>
              </div>
              <div className={"p-4 rounded-lg bg-slate-800/60 backdrop-blur-sm"}>
                <span className={"font-display-hero text-headline-lg text-inverse-primary font-bold"}>
                  7-Day
                </span>
                <p className={"font-body-sm text-body-sm text-slate-300 mt-1"}>
                  Inspection policy with complete atelier guarantee
                </p>
              </div>
            </div>
            <div className={"flex flex-wrap items-center gap-space-sm"}>
              <a className={"px-7 py-3.5 rounded-lg bg-inverse-primary text-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-white transition-colors"} href={"#"}>
                Read our craft manifesto
              </a>
              <span className={"font-body-sm text-body-sm text-slate-400 flex items-center gap-1"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  verified
                </span>
                Verified Indian Guilds
              </span>
            </div>
          </div>
          <div className={"lg:col-span-6 order-1 lg:order-2"}>
            <div className={"relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-800"}>
              <img className={"w-full h-full object-cover"} data-alt={"Dramatic warm golden-hour side lighting illuminating a master craftsman assembling tiny brass watch gears using precision brass tweezers and an eye loupe on a weathered teak bench."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuClcYDQbI5AQSoIwnrtfz7SY4S-fZsGIgH55eesBGd3KqoeQqZOeFGpam5onS4HTKs9x95Safmv8ERmiKVhZSdBTIqxTcxU-QE1sXXGTa37NanFdbmjcPyWBAejWlmThYXGVBiLirdDXSX3bj2JiGkO2FFc1gCNLmQo_UYfiGTLRz9v4_ZZ1qwtDgkyZipd-ZrljdygicJWppx_HiQAMj4o96lqXDbR2jJzLtw-1lCtjEdhlcvoa7gw"} />
              {/* Bezel Inset Stamp */}
              <div className={"absolute bottom-4 right-4 bg-[#172337]/90 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-3"}>
                <span className={"material-symbols-outlined text-[24px] text-secondary-container"}>
                  construction
                </span>
                <div>
                  <p className={"font-label-caps text-label-caps uppercase text-white font-bold"}>
                    Hand Calibrated
                  </p>
                  <p className={"font-body-sm text-[12px] text-slate-300"}>
                    Bengaluru & Jaipur Studios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
