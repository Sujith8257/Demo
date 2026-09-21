export default function SHOPBYOCCASIONINTERACTIVEGALLERY() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface-container-low"} id={"occasions-section"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col md:flex-row md:items-end justify-between mb-space-lg"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider block mb-1"}>
              Purpose & Gifting
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
              Curated By Occasion
            </h2>
          </div>
          <p className={"font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0"}>
            Selecting a gift should carry the same intentional weight as its making. Explore assemblies refined for key milestones.
          </p>
        </div>
        {/* Occasion Selector Tabs / Pills */}
        <div className={"flex gap-2 overflow-x-auto pb-space-sm mb-space-md [scrollbar-width:none]"}>
          <button className={"occasion-tab active px-5 py-2.5 rounded-full font-label-md text-label-md bg-on-surface text-surface-container-lowest transition-all"} data-target={"occ-milestone"}>
            Milestone Achievement
          </button>
          <button className={"occasion-tab px-5 py-2.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-all"} data-target={"occ-wedding"}>
            Weddings & Heirlooms
          </button>
          <button className={"occasion-tab px-5 py-2.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-all"} data-target={"occ-anniversary"}>
            Anniversaries
          </button>
          <button className={"occasion-tab px-5 py-2.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-all"} data-target={"occ-corporate"}>
            Corporate Bespoke
          </button>
          <button className={"occasion-tab px-5 py-2.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-all"} data-target={"occ-housewarming"}>
            Housewarming & Living
          </button>
        </div>
        {/* Active Expander Card */}
        <div className={"bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm"}>
          {/* Milestone Content Panel */}
          <div className={"occasion-panel grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"} id={"occ-milestone"}>
            <div className={"lg:col-span-5"}>
              <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2"}>
                Occasion Curation 01
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface font-bold mb-space-xs"}>
                The Milestone Guild Box
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Designed for career peaks, graduations, and major breakthroughs. Contains an individually numbered automatic time instrument accompanied by a bridle leather desk blotter and personalized brass bookplate.
              </p>
              <div className={"space-y-2 mb-space-md"}>
                <div className={"flex items-center gap-2 font-body-sm text-body-sm text-on-surface"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    check_circle
                  </span>
                  Laser-engraved custom dedication on caseback included
                </div>
                <div className={"flex items-center gap-2 font-body-sm text-body-sm text-on-surface"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    check_circle
                  </span>
                  Handmade archival paper keepsake certificate
                </div>
                <div className={"flex items-center gap-2 font-body-sm text-body-sm text-on-surface"}>
                  <span className={"material-symbols-outlined text-primary text-[18px]"}>
                    check_circle
                  </span>
                  Silk-lined presentation chest with key
                </div>
              </div>
              <div className={"flex items-center gap-space-sm pt-2"}>
                <button className={"bg-secondary-container text-on-secondary hover:bg-secondary font-label-caps text-label-caps uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"}>
                  Personalize & Order • ₹29,500
                </button>
                <button className={"bg-surface-container-high text-on-surface hover:bg-surface-dim font-label-caps text-label-caps uppercase tracking-wider px-4 py-3.5 rounded-lg transition-colors"}>
                  View Spec Sheet
                </button>
              </div>
            </div>
            <div className={"lg:col-span-7 grid grid-cols-2 gap-4"}>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-500"} data-alt={"Curated celebration gift box with black leather watch roll, automatic steel watch, and an engraved brass fountain pen"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBIQIe1KtagCIv9fK0hCB65P3TRmcIpzYpPcfz_hkkX-4VVEjCTyIkTQIuPPqJMpd3zY3PlnUGpGViQtzidcv9OVSqq-kpKxGMEQtE673eSvYEZWu3uCTqaMGgJx0Bt62sd7SymEMojIrugfuZnGkIHaTVPCGjlf77A7CvnxppWQhAxKpOsZGiexmYvpN57SdNnew4JfEM8D8k573YQ00C8K8MxbzOj-4m9-tJFLp68pOTTnni7rOtk"} />
              </div>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover hover:scale-105 transition-transform duration-500"} data-alt={"Artisan custom engraving initials on a polished watch caseback using micro diamond stylus in studio"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC0MxpOqj166AwTcfGr7KW7G21zhKX6SPt014VRT84mABKuwB-JU6oyhwwimJGa-NVFvgsnecS4bsY1aIcV7FTq2GJmmxiuU4pCWHoVJPpdCTg8PUQo_w2QfDYaH2O5-ZtO2jfAqHfJY5OqISgokrgNxSDC2RSqgpWwbP3Opn4ofBgzV7IVBEZj3OZdjiGMGKzBBOTXoHmKyTUrPexjFMZXiVkaOsrYGmoxkfsiES-3dQ6-On2ocxys"} />
              </div>
            </div>
          </div>
          {/* Weddings Content Panel (Hidden by default) */}
          <div className={"occasion-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"} id={"occ-wedding"}>
            <div className={"lg:col-span-5"}>
              <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2"}>
                Occasion Curation 02
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface font-bold mb-space-xs"}>
                His & Hers Atelier Pairings
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Two balanced dress watches coupled with matching vegetable-tanned passport folios and a set of two studio-thrown porcelain flutes glazed in pearl white.
              </p>
              <div className={"space-y-2 mb-space-md"}>
                <div className={"flex items-center gap-2 font-body-sm text-body-sm text-on-surface"}>
                  <span className={"material-symbols-outlined text-secondary text-[18px]"}>
                    check_circle
                  </span>
                  Coordinated sequential serial hallmarking
                </div>
                <div className={"flex items-center gap-2 font-body-sm text-body-sm text-on-surface"}>
                  <span className={"material-symbols-outlined text-secondary text-[18px]"}>
                    check_circle
                  </span>
                  Wax-sealed handwritten maker's blessing letter
                </div>
              </div>
              <button className={"bg-secondary-container text-on-secondary hover:bg-secondary font-label-caps text-label-caps uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"}>
                Inquire Bespoke Pair • ₹42,000
              </button>
            </div>
            <div className={"lg:col-span-7 grid grid-cols-2 gap-4"}>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Pair of his and hers dress watches in rose gold and stainless steel placed upon silk cloth next to white handmade porcelain cups"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBEkUR5VXrKwSqij1eI6w_jGf6Hcfv-IbSoDoqvcWHiO9gd88qB-TdvwZNpafOknRogYWGVGDUCPhNcJCTem1gB3PNbXlF1a_GzBE_H-nrSGcpDluAptpVzPNE16LRI6AiLXqI3_Qq241M3WkMT5m-iCTBMpxRewe4LtAqErMpyqC3E9-fDV4zlz0nZ-IugECcONh6WwTaBTjCoqs1XX3ZmeROy7EyGsiFZWLIMW2uCK1umtaxmx-Xr"} />
              </div>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Monogrammed bridle leather passport cases tied with cream ribbon on rustic wood background"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBUXucCP0S_TtCNsKB0QBcZLaXy7IJgzMZITc41NsiBgXHP1ofoi2seg1W_65I-SfxXUn_b5Ro4r9yjw5XxwK_ZBc48_5cXrtbaLu9vrKBwU9TZjNuytKurV2JqArmha88VS-1NqNE7Zq5F9BQi_Ai7NGzHe3WdorH0T0abdlLleNAibyRYBU0zOwsnzjGbj--IzzxS718Y-wt2EyVj1-SUCdSHoxfqMpDzi1vI9Qy2hB4ewm9fwCVF"} />
              </div>
            </div>
          </div>
          {/* Anniversaries Content Panel */}
          <div className={"occasion-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"} id={"occ-anniversary"}>
            <div className={"lg:col-span-5"}>
              <span className={"font-label-caps text-label-caps text-tertiary uppercase tracking-widest block mb-2"}>
                Occasion Curation 03
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface font-bold mb-space-xs"}>
                Year Marks & Heirlooms
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Timeless heirlooms honoring enduring commitments. Choose between custom leather watch trays or wood-fired ceramic centerpiece vases.
              </p>
              <button className={"bg-secondary-container text-on-secondary hover:bg-secondary font-label-caps text-label-caps uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"}>
                Explore Anniversary Sets
              </button>
            </div>
            <div className={"lg:col-span-7 grid grid-cols-2 gap-4"}>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Large studio ceramic centerpiece vase with raw texture alongside a classic mechanical pocket watch"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuB4XXXMu31MAkIlF1ikXPJE9AsPCiUpiqVVuaeBHu40KpruOBy1mO9DjY5ZonZ1pgQBArzC2BNIUH3s40IS_zzC6Mf7BXKMskD9bFYqBgVqvMHnuNhFNjiAMCXeAFN298sh-EBOIpKbBnGbjylE-zWeRTTKyTjuNVuhFEI-jqNZEh6EkMIpcR1BXkE4ctDSRYGcpqTg8X3cyuXWwXFDL1ImEe_-XqZyPWmlfbNvl5L33RjatzVMW6EN"} />
              </div>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Handcrafted leather valet tray filled with keys, mechanical watch, and gold wedding band"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD0NaFUvJ-_YOmnfSi_uDV7fzmqNepX22iHLoOzz10axaRvvM9lmoVeMO9FWe7I3kOmSag4D0q01JMFs1dwpJVF0VG4Xf_PV6P99HjCPqYTj2ORQNbRX-XS3UWjy6GuIlXJ_ekBYsuZ78YQ8yhl0siNm0-w16BnEfmb3m14FXT0k4IZJyEe61j169BSeAE5zENZ21vD4UwGiBYUAHYaZiQFqIbMxTcwSmhQFJwIFv-4m3RRoX39Xi2e"} />
              </div>
            </div>
          </div>
          {/* Corporate Bespoke */}
          <div className={"occasion-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"} id={"occ-corporate"}>
            <div className={"lg:col-span-5"}>
              <span className={"font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2"}>
                Occasion Curation 04
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface font-bold mb-space-xs"}>
                Distinguished Corporate Orders
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Curated for leadership retreats, board appointments, and cornerstone partnerships. Dedicated atelier support with volume hallmark stamping.
              </p>
              <button className={"bg-primary text-on-primary hover:bg-primary-container font-label-caps text-label-caps uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"}>
                Connect With Concierge
              </button>
            </div>
            <div className={"lg:col-span-7 grid grid-cols-2 gap-4"}>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Array of ten identical top-grain leather portfolios debossed with subtle crests arranged on mahogany conference table"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBXs4b1P74blcUOkpQ9ITqhLbSD1Bsb_JMKpVgX2N5U2saEdMvrrTLmhebS0MvPnqChtI4-r0de2sA5s5oNF7lNPkXXlOlyLqDUtkuG36tVafkjhA7ikj81tNde2XOBACZ_Lv0hLjylm_xwQkzVJGV_HEY6rmvir_6byPGVOgM1UVi40Npq7-mu0H_ynspv4xHGdr2XuOtg_gI6fSP6OuaX72GksIlZ3dAndn--8FiXYAVYIBJc7nXh"} />
              </div>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Row of five luxury minimal wristwatches in presentation boxes with custom engraved casebacks"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuB66m5TZhe9NQvGbk3zIlFTbZsYvEYonoWE-hFmiiGl8xSjCgJM_Ai67blvEyb91CLoweXfre5S1zTuWt5zBq4UVxkkShZjK8ZN1zqgF7e6FJ64YR8Z4F0iLwnSV8TlF16o0-9NslARqldFIGqsPMslOYbcyBlRRO11OfeIB0Cj9sFQ2V-LKoLZBjyKepifq7V0otlj0cvh99GWRWbRtmcYWOnZOgl2tdmUKioQii10vA3KJznj1AGY"} />
              </div>
            </div>
          </div>
          {/* Housewarming */}
          <div className={"occasion-panel hidden grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"} id={"occ-housewarming"}>
            <div className={"lg:col-span-5"}>
              <span className={"font-label-caps text-label-caps text-tertiary uppercase tracking-widest block mb-2"}>
                Occasion Curation 05
              </span>
              <h3 className={"font-headline-md text-headline-md text-on-surface font-bold mb-space-xs"}>
                Sanctuary & Home Warmth
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed"}>
                Architectural brass objects, hand-loomed throw blankets, and artisanal ceramics that immediately settle a house into a lived-in sanctuary.
              </p>
              <button className={"bg-secondary-container text-on-secondary hover:bg-secondary font-label-caps text-label-caps uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors"}>
                Explore Living Curations
              </button>
            </div>
            <div className={"lg:col-span-7 grid grid-cols-2 gap-4"}>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Cozy modern interior living room styled with handmade ceramic mugs, wool blanket, and brass table clock"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBYmDQN0PlidgmypARDoND5rQqY2FauME8iOGJht1YbAwCeqlgf6SS0wjCg4bBGcS278NcYg2BJRofXRqmHDmb3jg94Q-i5lRniMm-zNXGD0qgewnSUf8ia-dvYn4hyOy2hHD_MK3Bzyw6W73O6nkUGYPzoIz4h3eDce-mGE3Cm1pWkOdrDpK5Jg7IsiA7vN8D4CrjR5ukVuMrOu52iGO2vLEDhVSt3yIxA4ZB_c1Xr-mB4UmXzCkNO"} />
              </div>
              <div className={"rounded-2xl overflow-hidden bg-surface-container aspect-square shadow-sm"}>
                <img className={"w-full h-full object-cover"} data-alt={"Close up of artisan hand-thrown clay planters with succulent plants on a warm sunny window ledge"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuATX6strnqK-ic4GpmFwmWWXTJNPgZCaPJugrYLtMAf7wvvDwwPyuzCmGhvfjdFUt0dXKalPi_BGWGkGSDnQOSyKfbG8HEzfLFA7_Md2RChBCI1OKyoYYU0QJrY_hC8ubO8UNIRV3bk1PcIeBsYmSMhjSjC-qIVXGCTYMW0WdIuKow2QMOCR_vTq1xmcSC9doWE8oiv14vcE8AvnixstWlWjIk1I0faCQ1b7PvUYZ9a4XOgnUahxgsZ"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
