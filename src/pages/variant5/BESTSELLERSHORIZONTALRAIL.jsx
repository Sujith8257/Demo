export default function BESTSELLERSHORIZONTALRAIL() {
  return (
<>
    <section className={"w-full py-16"}>
      <div className={"mx-auto max-w-[1760px] px-margin"}>
        <div className={"mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"}>
          <div>
            <span className={"font-label-caps text-label-caps uppercase tracking-wider text-primary"}>
              In Demand Now
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
              Marketplace Bestsellers
            </h2>
          </div>
          <div className={"flex items-center gap-3"}>
            <button aria-label={"Scroll left"} className={"flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors"}>
              <span className={"material-symbols-outlined"}>
                arrow_back
              </span>
            </button>
            <button aria-label={"Scroll right"} className={"flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors"}>
              <span className={"material-symbols-outlined"}>
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        {/* Horizontal Scrollable Container */}
        <div className={"flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"} id={"bestseller-rail"}>
          {/* Card 1: Aster No. 04 */}
          <div className={"min-w-[300px] max-w-[320px] flex-shrink-0 snap-start rounded-2xl bg-surface-container-lowest p-4 shadow-sm hover:shadow-xl transition-all"}>
            <div className={"relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container"}>
              <img className={"h-full w-full object-cover transition-transform duration-300 hover:scale-105"} data-alt={"Minimalist automatic mechanical wristwatch with sunburst navy blue dial, polished silver hands, and hand-stitched tan saddle leather strap on light concrete pedestal"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAuUyQHwad-wyIxRRO5B7FfGz8-bm7DZ1HNYhTRDi0TzeWI9K-bw-09sZPALfq-Slvci1Ia300CLlrU7h0oRA6dUey4pDcrs7uFKJP9w1qOLAXaMMfFH4HUBBBqP3FIie7DQmdtGO4BThsX86MKrqrMKmu7EqVxNBQZVU7cD9IdxeXVm0Q4AWFA0r4SX2c1VPGB1jkq4GXxV9-yFca_jbleYvFB_htvAauWltVRftjqh6eEHCc7YkyX"} />
              <span className={"absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 font-label-caps text-[10px] uppercase text-on-primary"}>
                Certified Atelier
              </span>
              <span className={"absolute top-3 right-3 rounded-full bg-surface-container-lowest/80 p-1.5 backdrop-blur hover:text-secondary-container transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  favorite
                </span>
              </span>
            </div>
            <div className={"mt-4"}>
              <div className={"flex items-center gap-1 text-tertiary-container"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  4.92
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (128 reviews)
                </span>
              </div>
              <h3 className={"mt-1 font-title-editorial text-title-editorial text-on-surface truncate"}>
                Aster Calibre No. 04
              </h3>
              <p className={"font-body-sm text-body-sm text-outline truncate"}>
                Aster Horology • Jaipur
              </p>
              <div className={"mt-4 flex items-center justify-between"}>
                <div>
                  <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                    ₹38,400
                  </span>
                  <span className={"ml-2 font-body-sm text-body-sm text-outline line-through"}>
                    ₹44,000
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-primary px-2 py-0.5 rounded bg-[#388E3C]"}>
                  Save ₹5,600
                </span>
              </div>
              <button className={"mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-secondary-container py-2.5 font-label-caps text-label-caps uppercase text-on-secondary hover:bg-secondary transition-colors"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Acquire
              </button>
            </div>
          </div>
          {/* Card 2: Monolithic Stoneware */}
          <div className={"min-w-[300px] max-w-[320px] flex-shrink-0 snap-start rounded-2xl bg-surface-container-lowest p-4 shadow-sm hover:shadow-xl transition-all"}>
            <div className={"relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container"}>
              <img className={"h-full w-full object-cover transition-transform duration-300 hover:scale-105"} data-alt={"Sculptural textured monolithic ceramic vase thrown by hand with raw volcanic sand inclusions and a matte charcoal wash finish on raw wood gallery table"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCB_Ki8dD0T1pRXV-XCkkObLMkXACuZKvIpnPT6fUlv2TDaWLcjfHbs6ZB7Jus7FdPxmkEQfyeOmtYwCzeIlh6U4Sgkp8VutCln9SOKk0qAgnQwEle5gr6cTrrG6zMKbcEafBqnJdNR-9-xnkcFmExvqc94fPtMvwH7u825mxSr7lspf2QlUHgGqqEKaBEYlMQiQ7yMSAEOU_G0DhLbmA_0VnuhYspthpTLodKT_w4L81rwtQhqK8I-"} />
              <span className={"absolute top-3 left-3 rounded-full bg-tertiary px-2.5 py-1 font-label-caps text-[10px] uppercase text-on-tertiary"}>
                Master Potter
              </span>
              <span className={"absolute top-3 right-3 rounded-full bg-surface-container-lowest/80 p-1.5 backdrop-blur hover:text-secondary-container transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  favorite
                </span>
              </span>
            </div>
            <div className={"mt-4"}>
              <div className={"flex items-center gap-1 text-tertiary-container"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  4.88
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (64 reviews)
                </span>
              </div>
              <h3 className={"mt-1 font-title-editorial text-title-editorial text-on-surface truncate"}>
                Monolithic Stoneware Urn
              </h3>
              <p className={"font-body-sm text-body-sm text-outline truncate"}>
                Auro Studio • Puducherry
              </p>
              <div className={"mt-4 flex items-center justify-between"}>
                <div>
                  <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                    ₹7,200
                  </span>
                  <span className={"ml-2 font-body-sm text-body-sm text-outline line-through"}>
                    ₹8,500
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-primary px-2 py-0.5 rounded bg-[#388E3C]"}>
                  Save 15%
                </span>
              </div>
              <button className={"mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-secondary-container py-2.5 font-label-caps text-label-caps uppercase text-on-secondary hover:bg-secondary transition-colors"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Acquire
              </button>
            </div>
          </div>
          {/* Card 3: Saddle Leather Briefcase */}
          <div className={"min-w-[300px] max-w-[320px] flex-shrink-0 snap-start rounded-2xl bg-surface-container-lowest p-4 shadow-sm hover:shadow-xl transition-all"}>
            <div className={"relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container"}>
              <img className={"h-full w-full object-cover transition-transform duration-300 hover:scale-105"} data-alt={"Handcrafted vegetable-tanned chestnut leather briefcase with hand-waxed saddlery stitches and heavy solid brass hardware, staged on studio white podium"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAFZTByRPwZx6M7VMJomqK8t54pzzr49b1Iq8Lk_V70n6bpqV1ZOLS8fQXLFG2qNGnxwwNnyS9E6oo7zV79uiQRgRuMuKAnDKJWW4m5MEFGPF0YRC1pA-6CaekqkVPu3yF9aNNoztuyuWZcoloB6RsnZXbqSGUFJLWgmP2_lXY5jOiiqCnJPi2mh-4-20qzkAPl0Scf4zoFb7hcFKQl4rioW9Q30A-7s7ho_3UDgTI-uJ_BmXAvBtiC"} />
              <span className={"absolute top-3 left-3 rounded-full bg-error px-2.5 py-1 font-label-caps text-[10px] uppercase text-on-error"}>
                Only 3 Left
              </span>
              <span className={"absolute top-3 right-3 rounded-full bg-surface-container-lowest/80 p-1.5 backdrop-blur hover:text-secondary-container transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  favorite
                </span>
              </span>
            </div>
            <div className={"mt-4"}>
              <div className={"flex items-center gap-1 text-tertiary-container"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  4.96
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (89 reviews)
                </span>
              </div>
              <h3 className={"mt-1 font-title-editorial text-title-editorial text-on-surface truncate"}>
                Saddle Leather Briefcase
              </h3>
              <p className={"font-body-sm text-body-sm text-outline truncate"}>
                Raw Hide Guild • Kanpur
              </p>
              <div className={"mt-4 flex items-center justify-between"}>
                <div>
                  <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                    ₹24,800
                  </span>
                  <span className={"ml-2 font-body-sm text-body-sm text-outline line-through"}>
                    ₹29,000
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-primary px-2 py-0.5 rounded bg-[#388E3C]"}>
                  Save ₹4,200
                </span>
              </div>
              <button className={"mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-secondary-container py-2.5 font-label-caps text-label-caps uppercase text-on-secondary hover:bg-secondary transition-colors"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Acquire
              </button>
            </div>
          </div>
          {/* Card 4: Brass Architect Desk Lamp */}
          <div className={"min-w-[300px] max-w-[320px] flex-shrink-0 snap-start rounded-2xl bg-surface-container-lowest p-4 shadow-sm hover:shadow-xl transition-all"}>
            <div className={"relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container"}>
              <img className={"h-full w-full object-cover transition-transform duration-300 hover:scale-105"} data-alt={"Machined solid brushed brass task lamp with counterweight pendulum arm sitting on an architect desk with engineering drafting paper"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuA9IBLxLg82e8c5nh54PseaVr3AFpZjEngTk-hBx5V1VTceY_dHtfbm4sBnFbgbGcC8cEsb_rGHIdDJdh2mXanJ2ih3u6S_5TUe7WPFLoM1qBCRSEFCCQqazl7Uhk48Lb1cRH4BBSgW9Z1Pl4N3cwlDNGar1kzIb2UCR60Wwm80u9wmlg7mJJF0KJFmkRXmBBHvAiyKK7mD5B4f7cni40qqfkMlOLBKkALQ6HidxnNX7WqKptE_f-S8"} />
              <span className={"absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 font-label-caps text-[10px] uppercase text-on-primary"}>
                Hand-Turned
              </span>
              <span className={"absolute top-3 right-3 rounded-full bg-surface-container-lowest/80 p-1.5 backdrop-blur hover:text-secondary-container transition-colors"}>
                <span className={"material-symbols-outlined text-[18px]"}>
                  favorite
                </span>
              </span>
            </div>
            <div className={"mt-4"}>
              <div className={"flex items-center gap-1 text-tertiary-container"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"font-label-md text-label-md text-on-surface"}>
                  4.84
                </span>
                <span className={"font-body-sm text-body-sm text-outline"}>
                  (42 reviews)
                </span>
              </div>
              <h3 className={"mt-1 font-title-editorial text-title-editorial text-on-surface truncate"}>
                Machined Brass Desk Luminaire
              </h3>
              <p className={"font-body-sm text-body-sm text-outline truncate"}>
                Forge 1880 • Moradabad
              </p>
              <div className={"mt-4 flex items-center justify-between"}>
                <div>
                  <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                    ₹16,500
                  </span>
                  <span className={"ml-2 font-body-sm text-body-sm text-outline line-through"}>
                    ₹18,000
                  </span>
                </div>
                <span className={"font-label-caps text-label-caps text-on-primary px-2 py-0.5 rounded bg-[#388E3C]"}>
                  Save ₹1,500
                </span>
              </div>
              <button className={"mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-secondary-container py-2.5 font-label-caps text-label-caps uppercase text-on-secondary hover:bg-secondary transition-colors"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  shopping_bag
                </span>
                Acquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
