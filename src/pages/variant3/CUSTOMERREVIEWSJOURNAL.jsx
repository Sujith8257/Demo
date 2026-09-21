export default function CUSTOMERREVIEWSJOURNAL() {
  return (
<>
    <section className={"max-w-[1760px] mx-auto px-margin pb-24 w-full"}>
      {/* Reviews Row */}
      <div className={"mb-space-xl"}>
        <div className={"flex items-center justify-between mb-space-md"}>
          <div>
            <span className={"font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold"}>
              Verified Collector Notes
            </span>
            <h2 className={"font-headline-md text-headline-md text-on-surface tracking-tight"}>
              Collector Testimonials
            </h2>
          </div>
          <div className={"flex items-center gap-1 text-tertiary"}>
            <span className={"material-symbols-outlined text-[20px]"}>
              star
            </span>
            <span className={"font-numeric-price text-numeric-price text-on-surface text-[18px]"}>
              4.94 / 5.0
            </span>
            <span className={"font-body-sm text-body-sm text-on-surface-variant ml-1"}>
              (1,420+ Verified Purchases)
            </span>
          </div>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter"}>
          <div className={"bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-secondary mb-3"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic leading-relaxed"}>
                "The Aster No. 04 arrived in an oiled rosewood box with a hand-signed timing certificate. Accuracy has been +2 seconds a day. Extraordinary value compared to Swiss counterparts."
              </p>
            </div>
            <div className={"mt-6 pt-4 flex items-center justify-between"}>
              <div>
                <span className={"font-label-md text-label-md text-on-surface block"}>
                  Dr. Kabir Sen
                </span>
                <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  Mumbai • Aster 04 Owner
                </span>
              </div>
              <span className={"material-symbols-outlined text-primary text-[20px]"}>
                verified
              </span>
            </div>
          </div>
          <div className={"bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-secondary mb-3"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic leading-relaxed"}>
                "The document folio has that deep, natural bark-tanned scent that modern luxury brands have entirely lost. The saddle stitching is uniform and robust."
              </p>
            </div>
            <div className={"mt-6 pt-4 flex items-center justify-between"}>
              <div>
                <span className={"font-label-md text-label-md text-on-surface block"}>
                  Meera Nambiar
                </span>
                <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  Bengaluru • Folio Owner
                </span>
              </div>
              <span className={"material-symbols-outlined text-primary text-[20px]"}>
                verified
              </span>
            </div>
          </div>
          <div className={"bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col justify-between"}>
            <div>
              <div className={"flex items-center gap-1 text-secondary mb-3"}>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
                <span className={"material-symbols-outlined text-[16px]"}>
                  star
                </span>
              </div>
              <p className={"font-body-md text-body-md text-on-surface italic leading-relaxed"}>
                "Ordered the Khurja stoneware vessels for an interior design project. The glazes have a profound geological depth. Safe delivery, plastic-free recycled packaging."
              </p>
            </div>
            <div className={"mt-6 pt-4 flex items-center justify-between"}>
              <div>
                <span className={"font-label-md text-label-md text-on-surface block"}>
                  Arjun Varma
                </span>
                <span className={"font-body-sm text-body-sm text-on-surface-variant"}>
                  New Delhi • Interior Architect
                </span>
              </div>
              <span className={"material-symbols-outlined text-primary text-[20px]"}>
                verified
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Journal Editorial Preview */}
      <div className={"bg-surface-container-high/40 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"}>
        <div className={"max-w-2xl"}>
          <span className={"font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold"}>
            The Gazette • Autumn Issue
          </span>
          <h3 className={"font-headline-md text-headline-md text-on-surface mt-1 mb-3"}>
            The Mechanics of Permanence: How Bangalore became a haven for mechanical watchmaking.
          </h3>
          <p className={"font-body-md text-body-md text-on-surface-variant leading-relaxed"}>
            From aerospace toolmaking to precision horological gear cutting. Read our deep-dive essay on the micro-machinists reviving mechanical movements across South India.
          </p>
        </div>
        <a className={"h-12 px-8 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider whitespace-nowrap flex items-center gap-2 transition-all shadow-md"} href={"#"}>
          <span>
            Read Journal Entry
          </span>
          <span className={"material-symbols-outlined text-[18px]"}>
            menu_book
          </span>
        </a>
      </div>
    </section>
</>
  );
}
