export default function AMIHIVEJOURNALAsymmetric3Story() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface-container-lowest"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-4"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider"}>
              Amihive Journal
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              Dispatches from the Atelier
            </h2>
          </div>
          <a className={"font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1"} href={"#"}>
            Read all stories
            <span className={"material-symbols-outlined text-[16px]"}>
              arrow_forward
            </span>
          </a>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-lg"}>
          {/* Large Story (7 Columns) */}
          <article className={"lg:col-span-7 flex flex-col group cursor-pointer"}>
            <div className={"relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface-container mb-space-sm shadow-sm"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"} data-alt={"Portrait of an Indian master watchmaker sitting under an incandescent desk lamp calibrating a balance cock with brass micro-tweezers."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDwS4SbAjoHSYM7qrNhxWuVbI3yj4VBf3JNeVZKrTq14BDk5p1Nn4lPrWdYtaYMOV9LczfkD4Dv7uLQutKPlJGPHby0GS55f3-TKLOq3SJCUHwA9YaukDHnV8giBt8nYsoK5u81DTbCliwww02bCJl5jwlIEy0b0K3jTk7R9UpBxMkoak5SMflzwWxOlbRGvi7_-_gZE-rDmAE3xX1tfPox8b6ua_fnZ6ZelCSptaC77-3GgkQPr6Gi"} />
              <span className={"absolute top-4 left-4 px-3 py-1 rounded bg-surface/90 backdrop-blur-md font-label-caps text-label-caps uppercase text-on-surface"}>
                Cover Feature · 8 Min Read
              </span>
            </div>
            <div className={"flex items-center gap-space-xs font-label-caps text-label-caps text-outline mb-1"}>
              <span>
                Bengaluru Watchmaking Quarter
              </span>
              <span>
                •
              </span>
              <span>
                By Ananya Sen
              </span>
            </div>
            <h3 className={"font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2"}>
              The revival of Indian micro-mechanical horology.
            </h3>
            <p className={"font-body-md text-body-md text-on-surface-variant line-clamp-2"}>
              How a small cooperative of aerospace toolmakers and traditional gem-setters in Southern India came together to forge domestic mechanical movements.
            </p>
          </article>
          {/* 2 Compact Maker Stories (5 Columns Stacked) */}
          <div className={"lg:col-span-5 flex flex-col gap-space-md justify-between"}>
            <article className={"flex gap-space-sm group cursor-pointer p-space-sm rounded-xl hover:bg-surface-container-low transition-colors"}>
              <div className={"w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container"}>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Piles of raw vegetable tanned calfskins drying inside an airy heritage tannery in Kanpur with soft raking sunbeams."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC_v7Z76YwW_ejr7tbGA4QBi76RiYO9eiJQ_II-pcLxa9dEX27Hv8m-JZdAHHPFmAjpIh_AZdSoFhR-TM41-qe_ya5KHzOlsbjwALboeBGTsllPhFtvOK8YBHviPM9n3Kcr2alkqROo0Jry45WAzaq8dNqUCTxWNEJzU0Noo9j_ftAidyKrHjSLSKWm8TZX9PzsYvaLbTszssVBDMAqu-5giTCQkuZ13K0zfL490LTOhlmtp6LS8mwj"} />
              </div>
              <div className={"flex flex-col justify-center"}>
                <span className={"font-label-caps text-label-caps text-tertiary uppercase mb-1"}>
                  Guild Spotlight
                </span>
                <h4 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-1"}>
                  The 140-Year Mimosa Tanning Tradition in Kanpur.
                </h4>
                <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                  Why ancient tree bark tannins create leather that doesn't crack over decades of exposure.
                </p>
              </div>
            </article>
            <div className={"w-full h-px bg-surface-container-high"}></div>
            <article className={"flex gap-space-sm group cursor-pointer p-space-sm rounded-xl hover:bg-surface-container-low transition-colors"}>
              <div className={"w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container"}>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Potter hands coated with wet earthenware clay shaping the neck of a tall amphora vessel on a spinning wooden kick wheel."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4mG-HtP8H2Wcw88sHpA7lyDVBKVJM-QVXjYtMtOLQeRjXqRV-9hqT6ejii7QqWMmG3i9hacNs2tC5VIE3WRPhGIFUbW1ridDFK2hvDHQ6DiLTX1slwlHnjNQ3rPcG-Q-lP8s6Cb9R7FM6-oRRfjY4fuP3WQH3z1XnGkvUgWrrvbs2vv8-sx13Z56oIojhH9v29AC9rcpJxOos6Sj-DBdrs4Kabep48gP69CPZXLkg5ha_OuW-6uJ"} />
              </div>
              <div className={"flex flex-col justify-center"}>
                <span className={"font-label-caps text-label-caps text-primary uppercase mb-1"}>
                  Material Inquiry
                </span>
                <h4 className={"font-title-editorial text-title-editorial text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-1"}>
                  The Mathematics of the Ceramic Double-Curve.
                </h4>
                <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2"}>
                  Auroville potters explore structural balance and ancient harmonic ratios in functional clay.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
