export default function DUALFEATURESPOTLIGHTSIDEA() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch"}>
          {/* SIDE A: Automatic, without compromise (Horology) */}
          <div className={"relative bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"}>
            <div className={"absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-2xl pointer-events-none"}></div>
            <div>
              <div className={"flex items-center justify-between mb-space-sm"}>
                <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider flex items-center gap-1"}>
                  <span className={"w-2 h-2 rounded-full bg-primary"}></span>
                  Atelier Mechanical Studio
                </span>
                <span className={"font-label-caps text-label-caps text-outline"}>
                  Calibration Certificate #0912
                </span>
              </div>
              <h3 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs"}>
                Automatic, without
                <span className={"text-primary"}>
                  compromise.
                </span>
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Every mechanical movement undergoes five-position regulation, laser-poised hairspring balancing, and 14 days of timing trials before case assembly.
              </p>
            </div>
            {/* Circular Bezel Macro Visual */}
            <div className={"relative my-4 flex items-center justify-center"}>
              <div className={"w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-surface-container-high shadow-inner relative flex items-center justify-center"}>
                {/* Chronograph tick marks styling SVG */}
                <svg className={"absolute inset-0 w-full h-full text-outline-variant"} viewBox={"0 0 300 300"}>
                  <circle cx={"150"} cy={"150"} fill={"none"} r={"140"} stroke={"currentColor"} strokeDasharray={"2, 6"} strokeWidth={"1.5"}></circle>
                  <circle cx={"150"} cy={"150"} fill={"none"} r={"128"} stroke={"currentColor"} strokeWidth={"0.5"}></circle>
                </svg>
                <div className={"w-full h-full rounded-full overflow-hidden shadow-lg bg-surface-container"}>
                  <img className={"w-full h-full object-cover"} data-alt={"Macro extreme close up of a watch escapement wheel turning, ruby jewels shimmering in light with engraved blued steel rotor plates"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDSpzebvhzD6O7HcQrGUVmurO0oN4awLuZWHKZU5lSEJMeDlFrG1kWeJACzTaBkBgVV_J6mZjuS-V1HXsfpSImkd-_5lgYdKkBFXfzowcg-hXZXNPaBTu0g_2LTUhzu9ioGoyqAzEJHIP0wuf_OEH_kcBU-K1-3De2vA1AZbGOl6jZePxqnCgb45AShM9zuQtVYGZM-jI85bDao2NIGZlq_9x17wj7hAAr2suA7W3ZI2GW0Tvh0xhov"} />
                </div>
              </div>
            </div>
            {/* Horology Specification Meter Component */}
            <div className={"bg-surface-container-low rounded-xl p-4 mt-space-sm"}>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-3"}>
                Mechanical Tolerances
              </div>
              <div className={"grid grid-cols-3 gap-3 text-center"}>
                <div className={"bg-surface-container-lowest rounded-lg py-2 px-1"}>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                    -2 / +4
                  </div>
                  <div className={"font-label-caps text-label-caps text-outline"}>
                    Sec / Day
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-lg py-2 px-1"}>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                    50 ATM
                  </div>
                  <div className={"font-label-caps text-label-caps text-outline"}>
                    Water Shield
                  </div>
                </div>
                <div className={"bg-surface-container-lowest rounded-lg py-2 px-1"}>
                  <div className={"font-headline-sm text-headline-sm font-bold text-on-surface"}>
                    42 Hrs
                  </div>
                  <div className={"font-label-caps text-label-caps text-outline"}>
                    Power Reserve
                  </div>
                </div>
              </div>
              <a className={"mt-4 flex items-center justify-center gap-2 w-full py-3 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-container transition-colors"} href={"#"}>
                Explore Horology Collection
              </a>
            </div>
          </div>
          {/* SIDE B: Made slowly. Chosen carefully (Leathercraft & Ceramics) */}
          <div className={"relative bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"}>
            <div className={"absolute -left-20 -top-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-2xl pointer-events-none"}></div>
            <div>
              <div className={"flex items-center justify-between mb-space-sm"}>
                <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider flex items-center gap-1"}>
                  <span className={"w-2 h-2 rounded-full bg-secondary"}></span>
                  Tannery & Clay Workshops
                </span>
                <span className={"font-label-caps text-label-caps text-outline"}>
                  Zero Synthetic Coatings
                </span>
              </div>
              <h3 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs"}>
                Made slowly.
                <span className={"text-secondary"}>
                  Chosen carefully.
                </span>
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                We work directly with third-generation artisans tanning hides in natural tree bark extracts and potting local alluvial clay shaped by hand on steady wooden wheels.
              </p>
            </div>
            {/* Organic Hand-Shaped Contour Visual */}
            <div className={"relative my-4 flex items-center justify-center"}>
              <div className={"w-full max-w-[340px] h-64 rounded-[48px_16px_48px_16px] overflow-hidden shadow-lg bg-surface-container"}>
                <img className={"w-full h-full object-cover"} data-alt={"Hands of a master artisan awl-piercing thick bridle leather alongside an unglazed terracotta jug in a natural sunlit workshop in India"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDXycupsWZbyr9451wd3dVR7UAW-QsHbuSatZPJx84KI1L8ZR8N3CFxd5Lc60QIB0qxcCa3KL3E7fhXpsS8cNTM-XvOQWHXGHF6MC2XMVFEGG2TZBRw6-Gcy9h5j2-EVQfXeSuORtC3bv3jkPGgT527K67JBqbis5gk9V9tRkwjaqXxpsLQx1fb6o68sT0dW54vHuFlRl_CST337TA0dF82HvmOvnoRJVEcSuTk85UzIt1H0oKtJc9L"} />
              </div>
            </div>
            {/* Artisan Provenance Certificate Component */}
            <div className={"bg-surface-container-low rounded-xl p-4 mt-space-sm"}>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-2"}>
                Artisan Provenance Certificate
              </div>
              <div className={"flex items-center justify-between py-2 border-b border-surface-container-high font-body-sm text-body-sm"}>
                <span className={"text-on-surface-variant"}>
                  Guild Origin:
                </span>
                <span className={"font-semibold text-on-surface"}>
                  Pondicherry & Kanpur Guilds
                </span>
              </div>
              <div className={"flex items-center justify-between py-2 border-b border-surface-container-high font-body-sm text-body-sm"}>
                <span className={"text-on-surface-variant"}>
                  Tanning Agent:
                </span>
                <span className={"font-semibold text-on-surface"}>
                  Mimosa & Chestnut Bark
                </span>
              </div>
              <div className={"flex items-center justify-between py-2 font-body-sm text-body-sm"}>
                <span className={"text-on-surface-variant"}>
                  Curing Period:
                </span>
                <span className={"font-semibold text-on-surface"}>
                  45 Days Pit Tanned
                </span>
              </div>
              <a className={"mt-3 flex items-center justify-center gap-2 w-full py-3 bg-secondary-container text-on-secondary rounded-lg font-label-caps text-label-caps uppercase tracking-wider hover:bg-secondary transition-colors"} href={"#"}>
                Read Tannery & Potter Chronicles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
