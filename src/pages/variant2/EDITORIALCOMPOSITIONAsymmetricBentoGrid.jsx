export default function EDITORIALCOMPOSITIONAsymmetricBentoGrid() {
  return (
<>
    <section className={"w-full py-space-xl bg-surface-container-low"}>
      <div className={"max-w-[1760px] mx-auto px-margin"}>
        <div className={"flex flex-col mb-space-lg"}>
          <span className={"font-label-caps text-label-caps text-primary uppercase tracking-wider"}>
            Curator's Architecture
          </span>
          <h2 className={"font-headline-lg text-headline-lg text-on-surface"}>
            The Atelier Compendium
          </h2>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-12 gap-space-md"}>
          {/* Large Hero Feature: The Automatic Edit (7 Columns) */}
          <div className={"lg:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group"}>
            <div className={"p-space-lg relative"}>
              <div className={"flex items-center justify-between mb-4"}>
                <span className={"px-3 py-1 rounded-full bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider"}>
                  Volume IV Curated
                </span>
                <span className={"font-label-caps text-label-caps text-outline uppercase"}>
                  42mm - 38mm Range
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md text-on-surface mb-2"}>
                The Automatic Edit
              </h3>
              <p className={"font-body-md text-body-md text-on-surface-variant max-w-lg mb-6"}>
                Independent calibres meeting bespoke sapphire tolerances. A review of automatic movements engineered without compromise for collectors and daily observers.
              </p>
              <div className={"flex items-center gap-space-sm"}>
                <a className={"px-6 py-3 rounded-lg bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-container transition-colors flex items-center gap-2"} href={"#"}>
                  <span>
                    View 18 Selected Calibres
                  </span>
                  <span className={"material-symbols-outlined text-[16px]"}>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            {/* Shallow curved boundary inside image */}
            <div className={"relative h-72 sm:h-96 w-full overflow-hidden bg-surface-container"}>
              <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"} data-alt={"Macro photography of automatic watch open heart dial balance wheel spinning, ruby jewels gleaming under soft focused tungsten lighting with brushed titanium case."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCgR9yQQqi7lOzQMban6qfxA1sdYA7CtYEEGpDhAlJuK_h58r5D8EPDe3iTVBhhi-yItkpJCYm5R2w1jzqwaeof_-6Grt4_vTgIpTwF9CKPrSPQq3dPSXhFXT5BARYPSCn006PMWgHwtoQPj-A76ypDV6xLMbaOKIxXmSgcir3KNKMXTlns6ElTG0Vnc8QN4tE5LCWGrjAEg_H9sNd7hzbNYz_yUboWSD9aE7pRN9cQgK9N4edvVl0X"} />
              <div className={"absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"}></div>
              <div className={"absolute bottom-4 left-6 text-white"}>
                <p className={"font-label-caps text-label-caps uppercase tracking-wider text-slate-300"}>
                  Case Study 01
                </p>
                <p className={"font-title-editorial text-title-editorial font-bold"}>
                  Titanium Field & Observatory Chronograph
                </p>
              </div>
            </div>
          </div>
          {/* Stacked Modules (5 Columns) */}
          <div className={"lg:col-span-5 flex flex-col gap-space-md"}>
            {/* Module 1: Leather Atelier */}
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md group hover:bg-surface-container-high/30 transition-colors"}>
              <div className={"w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container"}>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Master leather crafter hand-burnishing edges of dark cognac calfskin watch strap on wooden bench with traditional edge beveler tool."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAxV2VsyM4lpJ6rZnkjg9iR5P0VNRmLvbFfVNy0dmnfURqBMngpkETknFGCP4XjrUfeeQRTXAsI3AE7_ipTT-yaZNbKnuSoDKfO6vvV9cFffB-WwQcxSxGYLLhB0gQesPfvhLIS-7MNIj6lFNb2E_aP8y_iOTt8xhJvlMABvahffo29keqx91EHPvwMMLfnXtG5ozVYCfuiHplK0CIK-pM103DAbEKeLyUI_4VS3jjgx4cT0lq5G4ll"} />
              </div>
              <div className={"flex-1 min-w-0"}>
                <span className={"font-label-caps text-label-caps text-tertiary uppercase"}>
                  Material Focus
                </span>
                <h4 className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                  Leather Atelier
                </h4>
                <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5 mb-2"}>
                  Harness leather, cordovan hides, and custom strap sizing designed to age with integrity.
                </p>
                <a className={"font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1"} href={"#"}>
                  Discover pieces
                  <span className={"material-symbols-outlined text-[14px]"}>
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            {/* Module 2: Objects for Home */}
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md group hover:bg-surface-container-high/30 transition-colors"}>
              <div className={"w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container"}>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Cast bronze paperweight and brutalist black clay coffee cup on clean architectural limestone desk with soft shadows."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuByqFG_daeR2yK1Np5uFYeWgAkh33S051ni4RlEF9e9zILgrCeZ60eJAFebks6zlWvSvm5epnz4lhAgL6AVC1qC9FOVTp-fktAzDwq10YHRGIaenRPPswTAbTqlNBwTuy2TL_P4Nw9m0pnQo-4betku8AvYd9NGEseRVZ95cVIhwkLD-kvMAFKiftWxEsHv94Wdv51NknLS7IEzlBfdLY6u19qJpCUZT53yorYDKHoenXh69UTkQccY"} />
              </div>
              <div className={"flex-1 min-w-0"}>
                <span className={"font-label-caps text-label-caps text-primary uppercase"}>
                  Tactile Living
                </span>
                <h4 className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                  Objects for Home
                </h4>
                <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5 mb-2"}>
                  Heavyweight brass, raw stone, and turned walnut accessories for curated interiors.
                </p>
                <a className={"font-label-md text-label-md text-primary hover:text-primary-container flex items-center gap-1"} href={"#"}>
                  View objects
                  <span className={"material-symbols-outlined text-[14px]"}>
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            {/* Module 3: Gifts Under ₹5,000 */}
            <div className={"bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center gap-space-md group hover:bg-surface-container-high/30 transition-colors"}>
              <div className={"w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container"}>
                <img className={"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"} data-alt={"Carefully curated small leather travel tray, silver key hook, and embossed linen notebook in a gift presentation box."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuD9EAaPIhqGEQvCK9zJaNEOTc4tkdEbzAPhAIuRUJiQDRr_OHaZPY2hc-ujMxQ7BD691TubAE-wOYar3g9F4nI0PLGsb1uTjyOPWvzd8XSTEicXX6BdicyRrg4-vtIJzK7kNfEDKhwszKVVTy2tPBONFyvcF6uz2e4md0VDj3l7QgK9dtihwexzpXxvEg1dmZ46JSPt2qXtnlO0MvG2bXm5uFIK-Pgr-AOk5wIOov1V-qKkybxSc2Qg"} />
              </div>
              <div className={"flex-1 min-w-0"}>
                <span className={"font-label-caps text-label-caps text-secondary uppercase"}>
                  Gift Directory
                </span>
                <h4 className={"font-headline-sm text-headline-sm text-on-surface truncate"}>
                  Under ₹5,000
                </h4>
                <p className={"font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5 mb-2"}>
                  Remarkable craftsmanship without excess. Handpicked gifts prepared in wax-sealed boxes.
                </p>
                <a className={"font-label-md text-label-md text-secondary hover:text-secondary-container flex items-center gap-1"} href={"#"}>
                  Explore gift edit
                  <span className={"material-symbols-outlined text-[14px]"}>
                    chevron_right
                  </span>
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
