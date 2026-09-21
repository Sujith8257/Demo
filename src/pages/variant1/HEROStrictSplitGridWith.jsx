export default function HEROStrictSplitGridWith() {
  return (
<>
    <section className={"relative w-full overflow-hidden bg-surface-container-low"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"grid grid-cols-1 lg:grid-cols-12 min-h-[580px] items-center gap-space-lg"}>
          {/* Left Column: Architectural Typographic Spec */}
          <div className={"lg:col-span-6 py-space-xl flex flex-col justify-center z-10"}>
            <div className={"flex items-center gap-space-xs mb-space-sm text-primary"}>
              <span className={"font-label-caps text-label-caps tracking-widest uppercase bg-surface-container px-3 py-1 rounded-full text-primary"}>
                Horological Edition 04 / 2025
              </span>
              <span className={"w-8 h-[1px] bg-primary"}></span>
              <span className={"font-body-sm text-body-sm text-outline"}>
                Ref. AH-9042
              </span>
            </div>
            <h1 className={"font-display-hero text-display-hero text-on-surface mb-space-sm max-w-lg"}>
              Time, considered differently.
            </h1>
            <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-md mb-space-lg"}>
              Engineered movements, hand-finished cases, and considered proportions. Built for longevity across generations.
            </p>
            <div className={"flex flex-wrap items-center gap-space-sm mb-space-lg"}>
              <a className={"inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary-container text-on-secondary font-label-caps text-label-caps tracking-wider uppercase transition-transform hover:scale-[0.985] shadow-md"} href={"#aster-collection"}>
                <span>
                  Explore The Collection
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  arrow_forward
                </span>
              </a>
              <a className={"inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-caps text-label-caps tracking-wider uppercase transition-colors hover:bg-surface-container shadow-sm"} href={"#specification-triptych"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  precision_manufacturing
                </span>
                <span>
                  Engineering Specs
                </span>
              </a>
            </div>
            {/* Chronograph Telemetry Micro-Widget */}
            <div className={"grid grid-cols-3 gap-space-sm pt-space-sm bg-surface-container-lowest p-space-sm rounded-xl max-w-md shadow-sm"}>
              <div>
                <span className={"font-label-caps text-label-caps text-outline block uppercase"}>
                  Movement
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  Calibre AH-28
                </span>
              </div>
              <div>
                <span className={"font-label-caps text-label-caps text-outline block uppercase"}>
                  Beat Rate
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  28,800 vph
                </span>
              </div>
              <div>
                <span className={"font-label-caps text-label-caps text-outline block uppercase"}>
                  Tolerance
                </span>
                <span className={"font-label-md text-label-md text-secondary-container font-bold"}>
                  -2 / +4 sec
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: Massive Watch Dial Composition Cutting Viewport Edge */}
          <div className={"lg:col-span-6 relative h-[500px] lg:h-[620px] flex items-center justify-start lg:justify-end"}>
            {/* Solitary circular bezel graphic cutting beyond right bound */}
            <div className={"absolute -right-28 lg:-right-36 w-[540px] h-[540px] lg:w-[680px] lg:h-[680px] rounded-full bg-surface-container-high shadow-xl flex items-center justify-center p-6"}>
              <div className={"w-full h-full rounded-full bg-surface-container-lowest relative overflow-hidden flex items-center justify-center shadow-inner"}>
                {/* Macro Watch Dial Image */}
                <img className={"absolute inset-0 w-full h-full object-cover scale-105"} data-alt={"Macro close-up shot of an exquisite minimalist luxury automatic watch face, sunburst navy blue dial with precision indices, stainless steel fluted bezel, polished chamfered hands caught in soft directional gallery light with warm golden reflections."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAAkMTyV7lOTZsiqwh45M9TcbCIFRmvYcDHd8_Peo9TmZzrdo1SUnwNeH5RBg9FzoKQnI1cGNCsTrT_3BMenQqP7oL4hGmuveZeCBcHuMyYnrghGtal2FpRWMi1KST96vSVCYvKYZDupU9GiQcvQgBOjRtNf3t0MI82Rg2uB6i6VSmUJFFyRAF3rF8XhxFQPLcdNb1neQrREz_0IK3OCMlGDr9PCtJ3EjzxoBHEZx8qrKlXQ1RqOWFt"} />
                {/* Precision Indices Overlay & Chrono Mask Ring */}
                <div className={"absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-transparent to-surface/20 pointer-events-none"}></div>
                {/* Floating Specification Badge */}
                <div className={"absolute bottom-16 left-16 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-3"}>
                  <span className={"w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping"}></span>
                  <div>
                    <div className={"font-label-caps text-label-caps uppercase text-outline"}>
                      Batch Status
                    </div>
                    <div className={"font-label-md text-label-md text-on-surface"}>
                      Allocation: 48 Remaining
                    </div>
                  </div>
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
