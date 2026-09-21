export default function NEWARRIVALSMIXEDHORIZONTALRAIL() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface-container-low"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        {/* Section Header with Rail Controls */}
        <div className={"flex items-center justify-between mb-space-lg"}>
          <div>
            <div className={"inline-flex items-center gap-1.5 font-label-caps text-label-caps text-primary uppercase tracking-wider mb-1"}>
              <span className={"material-symbols-outlined text-[16px]"}>
                auto_awesome
              </span>
              Freshly Hallmarked
            </div>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight"}>
              New Arrivals Across Ateliers
            </h2>
          </div>
          <div className={"flex items-center gap-2"}>
            <button aria-label={"Scroll left"} className={"w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center shadow-sm transition-colors"} id={"rail-prev"}>
              <span className={"material-symbols-outlined text-[18px]"}>
                chevron_left
              </span>
            </button>
            <button aria-label={"Scroll right"} className={"w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center shadow-sm transition-colors"} id={"rail-next"}>
              <span className={"material-symbols-outlined text-[18px]"}>
                chevron_right
              </span>
            </button>
          </div>
        </div>
        {/* Fluid Horizontal Scroll Container */}
        <div className={"flex gap-gutter overflow-x-auto pb-space-md scroll-smooth [scrollbar-width:none]"} id={"product-rail"}>
          {/* Product 1: Watch */}
          <div className={"min-w-[310px] w-[310px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  40mm Auto
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur text-outline hover:text-error flex items-center justify-center transition-colors z-10"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    favorite
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Pristine minimalist luxury watch with a deep midnight blue dial, silver indices, sweep seconds hand, and fine brushed bezel"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBm_mvp5oSJJu9q6T8J5j7Ls2x-9I0wLuBxZyDJgq-wlJLQC98FSfWx6aGMLEX2bDVlYpXNDPJ_9oPwpUp3rMRyuWo1hwfYc3fPFVFt4hheJxtlTUsDv7PnGaHy5XQ-fEqvwBHjd57WknsfiRvZ_xRspkCASBLcQjc-a2AJt5NQMSkvEjTiGd9poXZQI0a-84DjclgAN6UIOZzT2N-jLila0G5hiN24-Z8QGg6gG-d8_23bFEKlbJ45"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Caliber • Mumbai Workshop
              </div>
              <h4 className={"font-title-editorial text-title-editorial text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                The Meridian 38 Chronometer
              </h4>
              <div className={"flex items-center gap-1 my-1.5"}>
                <div className={"flex text-tertiary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                  (19)
                </span>
              </div>
            </div>
            <div className={"pt-3 flex items-center justify-between border-t border-transparent"}>
              <div>
                <div className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹24,500
                </div>
                <div className={"font-label-caps text-label-caps text-outline line-through"}>
                  ₹28,000
                </div>
              </div>
              <button aria-label={"Add to cart"} className={"bg-secondary-container hover:bg-secondary text-on-secondary w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  local_mall
                </span>
              </button>
            </div>
          </div>
          {/* Product 2: Saddlery Folio */}
          <div className={"min-w-[310px] w-[310px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-secondary text-on-secondary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Hand-Cut
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur text-outline hover:text-error flex items-center justify-center transition-colors z-10"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    favorite
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Tan vegetable tanned leather zippered documents folio with brass zipper teeth, shown laying on wooden workbench with burnishing stick"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD5zX9EWymPR3zigLczLFlFjA37J5-Ttbee5k2EimdSbqIGxnjH8MPoKDm6_1bQdXH0VkYONknv2-fU8gwICj3Qm24tiEKXYIYoNCP6OuP-TNxy90w76fSiBRNfi6-ByQWaYM1sB6pw_ZJ8r7_0cpjcZ2M91Vui3MODQy-D82yzd7BcJ1TswNDx-Hz90vhmspqZhitX-h-_4xd1ExO0BjeiLDxjyNC-ZepDrwgS8Pu-pEH_xDHEN1pN"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Leather • Kanpur Guild
              </div>
              <h4 className={"font-title-editorial text-title-editorial text-on-surface font-semibold group-hover:text-secondary transition-colors"}>
                Saddler's Executive Folio
              </h4>
              <div className={"flex items-center gap-1 my-1.5"}>
                <div className={"flex text-tertiary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    star_half
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                  (42)
                </span>
              </div>
            </div>
            <div className={"pt-3 flex items-center justify-between"}>
              <div>
                <div className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹6,800
                </div>
                <div className={"font-label-caps text-label-caps text-outline"}>
                  Direct Tannery
                </div>
              </div>
              <button aria-label={"Add to cart"} className={"bg-secondary-container hover:bg-secondary text-on-secondary w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  local_mall
                </span>
              </button>
            </div>
          </div>
          {/* Product 3: Brass Desk Object */}
          <div className={"min-w-[310px] w-[310px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-primary-container text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Solid Brass
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur text-outline hover:text-error flex items-center justify-center transition-colors z-10"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    favorite
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Turned solid brass hourglass desk timer and brass pen cylinder, warm golden reflections on dark slate surface"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAgyB0U7HZ3CTg4AxClS3m_YWZdW5dgxoODlaVsZG2gk_-WSmqxiccruBQaHyKuaamFQtuqpqyyyXWn-Mu27nL1LQWL1QbczbuIK-EjGSNl-2o8WT042m6xLIlZhJlJ4C6SV4S4unUvM-NAknq0UDY1PNZvlN7BtQOUQhvhS5MVPPzyRh_6OM0em75XCFthGY8phQxx_WVzyIZFypV7-l0-v4X77srS_o4h0cF243LH7E4P3KNvlooe"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Metalwork • Moradabad
              </div>
              <h4 className={"font-title-editorial text-title-editorial text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                Zenith Heavyweight Desk Timer
              </h4>
              <div className={"flex items-center gap-1 my-1.5"}>
                <div className={"flex text-tertiary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                  (11)
                </span>
              </div>
            </div>
            <div className={"pt-3 flex items-center justify-between"}>
              <div>
                <div className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹3,950
                </div>
                <div className={"font-label-caps text-label-caps text-outline"}>
                  60-minute cycle
                </div>
              </div>
              <button aria-label={"Add to cart"} className={"bg-secondary-container hover:bg-secondary text-on-secondary w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  local_mall
                </span>
              </button>
            </div>
          </div>
          {/* Product 4: Fluted Ceramic Teapot */}
          <div className={"min-w-[310px] w-[310px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-tertiary text-on-tertiary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  Kiln Edition
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur text-outline hover:text-error flex items-center justify-center transition-colors z-10"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    favorite
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Fluted stoneware teapot with bamboo handle and matching tea bowls in subtle sage green celadon glaze"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAXzKSWsDVN7Dafp5ffOr5SBbcMVCKk2OimGC6Xv4XSCc89qzfxKOASYso3I_I3V4CYw8Fcrm33iVYOOmBldYfvweg01EH9FcplJ5sbjSuCu_TVPhMWMssSIrD7AKGr60vss-A0W3vdFCsiKX5Nxe_oE1NVYsYWijXlt_XQkCdmzJDzATjxFB5u_-O4dm3kRbYVnhtzHuqWLS8dDgE1Xs2fDVGGSgeGN4MzLgrnNl2SMamswaULgTck"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Ceramics • Pondicherry
              </div>
              <h4 className={"font-title-editorial text-title-editorial text-on-surface font-semibold group-hover:text-tertiary transition-colors"}>
                Celadon Ritual Teapot
              </h4>
              <div className={"flex items-center gap-1 my-1.5"}>
                <div className={"flex text-tertiary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                  (27)
                </span>
              </div>
            </div>
            <div className={"pt-3 flex items-center justify-between"}>
              <div>
                <div className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹4,400
                </div>
                <div className={"font-label-caps text-label-caps text-outline line-through"}>
                  ₹5,200
                </div>
              </div>
              <button aria-label={"Add to cart"} className={"bg-secondary-container hover:bg-secondary text-on-secondary w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  local_mall
                </span>
              </button>
            </div>
          </div>
          {/* Product 5: Handcrafted Watch Roll */}
          <div className={"min-w-[310px] w-[310px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container mb-space-sm"}>
                <span className={"absolute top-2 left-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-2 py-0.5 rounded shadow-sm z-10"}>
                  3-Slot Watch Case
                </span>
                <button aria-label={"Save to wishlist"} className={"absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur text-outline hover:text-error flex items-center justify-center transition-colors z-10"}>
                  <span className={"material-symbols-outlined text-[18px]"}>
                    favorite
                  </span>
                </button>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Olive green oiled nubuck watch roll unrolled to reveal three plush suede compartments cushioning wristwatches, exposed contrast stitch detail"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCB77Wj58RBR6awDOD3OSS9DsHrp6N3DgWR57e1cr0AUeQY_l-QJV_codleyydvFQ0Ec8B7WmKMj21spQuww0vgCYRgrtqkNwVfpJjokbXaXuZIBda03acXZAEjTHeZawCFT2z_69coQFAzWyeoiyC9Q_zVDJxlH0LxAE_4zHRFvYJZowMd0DNXIVV-z_61lQQOxWdGSdoFkiDLPNrNKAkfn6fx1yYMNyQQyb0u1FRhWc-f9psUgCCK"} />
              </div>
              <div className={"font-label-caps text-label-caps text-outline uppercase tracking-wider mb-1"}>
                Leather • Jaipur Guild
              </div>
              <h4 className={"font-title-editorial text-title-editorial text-on-surface font-semibold group-hover:text-primary transition-colors"}>
                Nomad Nubuck Watch Guard
              </h4>
              <div className={"flex items-center gap-1 my-1.5"}>
                <div className={"flex text-tertiary"}>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"} style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    star
                  </span>
                </div>
                <span className={"font-body-sm text-body-sm text-on-surface-variant font-medium"}>
                  (35)
                </span>
              </div>
            </div>
            <div className={"pt-3 flex items-center justify-between"}>
              <div>
                <div className={"font-numeric-price text-numeric-price text-on-surface"}>
                  ₹5,200
                </div>
                <div className={"font-label-caps text-label-caps text-outline"}>
                  ₹6,000
                </div>
              </div>
              <button aria-label={"Add to cart"} className={"bg-secondary-container hover:bg-secondary text-on-secondary w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm active:scale-95"}>
                <span className={"material-symbols-outlined text-[20px]"}>
                  local_mall
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
