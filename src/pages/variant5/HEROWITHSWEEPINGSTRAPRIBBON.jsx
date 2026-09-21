export default function HEROWITHSWEEPINGSTRAPRIBBON() {
  return (
<>
    <section className={"relative w-full overflow-hidden pb-16 pt-6"}>
      {/* Fluid background ribbon guide curve */}
      <div className={"pointer-events-none absolute inset-0 z-0 opacity-40"}>
        <svg className={"h-full w-full"} fill={"none"} preserveAspectRatio={"none"} viewBox={"0 0 1440 820"}>
          <path d={"M-100,120 C340,30 520,380 820,210 C1140,40 1320,320 1600,180 L1600,820 L-100,820 Z"} fill={"url(#strap-gradient)"}></path>
          <defs>
            <lineargradient id={"strap-gradient"} x1={"0"} x2={"1"} y1={"0"} y2={"1"}>
              <stop offset={"0%"} stopColor={"#afc6ff"} stopOpacity={"0.28"}></stop>
              <stop offset={"45%"} stopColor={"#ffb866"} stopOpacity={"0.16"}></stop>
              <stop offset={"100%"} stopColor={"#FAF8FF"} stopOpacity={"0.0"}></stop>
            </lineargradient>
          </defs>
        </svg>
      </div>
      <div className={"relative z-10 mx-auto max-w-[1760px] px-margin"}>
        {/* Top Micro Index Bar */}
        <div className={"mb-6 flex flex-wrap items-center justify-between gap-4 font-label-caps text-label-caps uppercase text-on-surface-variant"}>
          <div className={"flex items-center gap-3"}>
            <span className={"inline-flex h-2 w-2 animate-ping rounded-full bg-secondary-container"}></span>
            <span className={"tracking-widest font-semibold text-primary"}>
              FLOW EDITION 05 // CURATED MARKETPLACE
            </span>
          </div>
          <div className={"flex items-center gap-4 text-xs font-medium tracking-wider"}>
            <span className="">
              COORDINATES: 28.6139° N, 77.2090° E
            </span>
            <span className={"text-outline-variant"}>
              •
            </span>
            <span className="">
              ESTIMATED DISPATCH: TODAY 16:00 IST
            </span>
          </div>
        </div>
        {/* Interactive 3-Slide Hero Engine */}
        <div className={"relative min-h-[580px] w-full"} id={"hero-slider-root"}>
          {/* SLIDE 1 (Default Active): Aster Chronograph & Saddlery Leather */}
          <div className={"hero-slide active grid grid-cols-1 items-center gap-8 transition-all duration-700 lg:grid-cols-12"} data-slide={"0"}>
            <div className={"flex flex-col items-start lg:col-span-6"}>
              <div className={"mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider text-primary"}>
                <span className={"material-symbols-outlined text-[14px]"}>
                  watch
                </span>
                Horology & Saddlery Cohort 04
              </div>
              <h1 className={"font-display-hero text-display-hero text-on-surface leading-[1.08] tracking-tight"}>
                Objects calibrated for
                <span className={"text-primary italic"}>
                  lifetime
                </span>
                use.
              </h1>
              <p className={"mt-4 max-w-xl font-body-lg text-body-lg text-on-surface-variant"}>
                Precision Swiss-calibre ticking within surgical 316L steel, bound by vegetable-tanned harness leather burnished by third-generation Jaipur saddle artisans.
              </p>
              <div className={"mt-8 flex flex-wrap items-center gap-4"}>
                <button className={"flex items-center gap-2 rounded-lg bg-secondary-container px-7 py-3.5 font-label-md text-label-md uppercase tracking-wider text-on-secondary shadow-lg shadow-secondary-container/20 transition-transform active:scale-95"}>
                  Acquire Calibre 04
                  <span className={"material-symbols-outlined text-base"}>
                    arrow_forward
                  </span>
                </button>
                <button className={"flex items-center gap-2 rounded-lg bg-surface-container-highest px-6 py-3.5 font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors"}>
                  <span className={"material-symbols-outlined text-base"}>
                    play_circle
                  </span>
                  Watch Provenance (2m)
                </button>
              </div>
              {/* Mini Specs Badge Ribbon */}
              <div className={"mt-10 grid grid-cols-3 gap-4 w-full max-w-md pt-6 bg-surface-container-low/70 rounded-xl p-4"}>
                <div>
                  <p className={"font-label-caps text-label-caps text-outline uppercase"}>
                    Movement
                  </p>
                  <p className={"font-headline-sm text-headline-sm text-on-surface mt-0.5"}>
                    Cal. 9015
                  </p>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    42h Reserve
                  </p>
                </div>
                <div>
                  <p className={"font-label-caps text-label-caps text-outline uppercase"}>
                    Hide Origin
                  </p>
                  <p className={"font-headline-sm text-headline-sm text-on-surface mt-0.5"}>
                    Grade 1
                  </p>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    Karnal Tannery
                  </p>
                </div>
                <div>
                  <p className={"font-label-caps text-label-caps text-outline uppercase"}>
                    Guarantee
                  </p>
                  <p className={"font-headline-sm text-headline-sm text-primary mt-0.5"}>
                    25-Yr
                  </p>
                  <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                    Transferable
                  </p>
                </div>
              </div>
            </div>
            {/* Hero Graphic Composition with Cutout Leather S-Curve */}
            <div className={"relative flex items-center justify-center lg:col-span-6"}>
              <div className={"relative h-[480px] w-full max-w-[540px]"}>
                {/* Fluid curved shadow layer */}
                <div className={"absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary-fixed-dim/30 via-secondary-fixed/40 to-surface-container-high blur-2xl"}></div>
                {/* Primary Visual Card */}
                <div className={"relative h-full w-full overflow-hidden rounded-[32px] bg-surface-container-lowest p-4 shadow-xl"}>
                  <img className={"h-full w-full object-cover rounded-[24px]"} data-alt={"Editorial luxury showcase of an artisanal Aster automatic chronograph resting alongside hand-stitched tan saddle leather watch straps and polished brass calipers on soft natural linen studio surface, dramatic directional side lighting"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBtqgYihvz62cIBCw9G9S3_v4kW_2Bu2OsWliMrPkfOk5QwJ_a6qldyAeGrPVUMwIhP_F_l1cs939dLP6hM_ngG_6hRpVNTcyq-Xgy_U3Qn2GNG2Rm-nkFOVN1PCKO0-f43WOKLnoYrANSFi-e6f9fkg64c6TN54yCNeCHqcsP9FB-0H3ItDLt1rTDAoIWo4hZLFeSchDjxfHN5bDiwC0yFpzjSRDSo_ss5ld9p8YzFjZCQC0xEkmDD"} />
                  <div className={"absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-surface-container-lowest/90 p-4 shadow-md backdrop-blur-md"}>
                    <div>
                      <span className={"inline-block font-label-caps text-label-caps uppercase text-secondary-container"}>
                        Limited Edition run
                      </span>
                      <h3 className={"font-headline-sm text-headline-sm text-on-surface"}>
                        Aster Chronograph No. 04
                      </h3>
                      <p className={"font-body-sm text-body-sm text-on-surface-variant"}>
                        Batch 14 of 50 pieces remaining
                      </p>
                    </div>
                    <div className={"text-right"}>
                      <span className={"font-numeric-price text-numeric-price text-on-surface"}>
                        ₹38,400
                      </span>
                      <div className={"font-label-caps text-label-caps uppercase text-tertiary-container"}>
                        Certified Atelier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SLIDE 2: Rotating Bezel Graphic Engineering */}
          <div className={"hero-slide hidden grid-cols-1 items-center gap-8 transition-all duration-700 lg:grid-cols-12"} data-slide={"1"}>
            <div className={"flex flex-col items-start lg:col-span-5"}>
              <div className={"mb-4 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider text-primary"}>
                <span className={"material-symbols-outlined text-[14px]"}>
                  precision_manufacturing
                </span>
                Dynamic Bezel Calibration
              </div>
              <h2 className={"font-display-hero text-display-hero text-on-surface leading-tight tracking-tight"}>
                Calculated to the
                <span className={"text-secondary-container"}>
                  micron
                </span>
                .
              </h2>
              <p className={"mt-4 font-body-lg text-body-lg text-on-surface-variant"}>
                Every index marker is micro-engraved into cold-rolled surgical grade titanium. Tested under 20-bar hydrostatic pressure for subterranean and maritime fidelity.
              </p>
              <div className={"mt-8 flex items-center gap-4"}>
                <button className={"rounded-lg bg-primary px-7 py-3.5 font-label-md text-label-md uppercase tracking-wider text-on-primary shadow-lg shadow-primary/25"}>
                  Explore Engineering Lab
                </button>
              </div>
            </div>
            <div className={"relative flex items-center justify-center lg:col-span-7"}>
              <div className={"relative flex h-[480px] w-full items-center justify-center"}>
                {/* SVG Dial Bezel Decorative Gauge */}
                <svg className={"absolute h-[420px] w-[420px] animate-[spin_60s_linear_infinite]"} viewBox={"0 0 200 200"}>
                  <circle cx={"100"} cy={"100"} fill={"none"} r={"92"} stroke={"#e3e1e8"} strokeDasharray={"3 3"} strokeWidth={"1.5"}></circle>
                  <circle cx={"100"} cy={"100"} fill={"none"} r={"82"} stroke={"#c2c6d5"} strokeWidth={"0.75"}></circle>
                  <circle cx={"100"} cy={"100"} fill={"none"} r={"68"} stroke={"#004094"} strokeDasharray={"1 8"} strokeLinecap={"round"} strokeWidth={"1.5"}></circle>
                </svg>
                <div className={"relative z-10 h-[360px] w-[360px] overflow-hidden rounded-full shadow-2xl bg-surface-container-lowest p-2"}>
                  <img className={"h-full w-full object-cover rounded-full"} data-alt={"Macro close-up shot of an intricate mechanical skeleton wristwatch movement with rotating sapphire bezel, gold tourbillon balance wheel, and polished blued steel hands under soft gallery lighting"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCbegZ8j4sqLSW_3OoXU-3dL-xD9HSm40Shd_T-GsbIzJ5FZlXu9oSPeY0GCaMIn1zdT0suie7qDFEKiFH4zX5uJnB7LILdYTaSoshJJ-zYZXsGTp-DU1tOk3bnEmIMTt1UUE0OLFfFE1bq3yWfS731Kv-55uwsvnliJyPZk4t9LdoZsL96xokoX9zJjFsecMtmuuy8uuNgYwpjo7jw0zvMtV78G3EegbiuE-RfelB_kv74mbX916li"} />
                </div>
              </div>
            </div>
          </div>
          {/* SLIDE 3: The Gift of Craft & Bespoke Packaging */}
          <div className={"hero-slide hidden grid-cols-1 items-center gap-8 transition-all duration-700 lg:grid-cols-12"} data-slide={"2"}>
            <div className={"flex flex-col items-start lg:col-span-6"}>
              <div className={"mb-4 inline-flex items-center gap-2 rounded-full bg-tertiary-fixed px-3 py-1 font-label-caps text-label-caps uppercase tracking-wider text-tertiary"}>
                <span className={"material-symbols-outlined text-[14px]"}>
                  redeem
                </span>
                Heirloom Gifting & Milestone Suites
              </div>
              <h2 className={"font-display-hero text-display-hero text-on-surface leading-tight tracking-tight"}>
                The gift of
                <span className={"text-secondary"}>
                  provenance
                </span>
                and care.
              </h2>
              <p className={"mt-4 font-body-lg text-body-lg text-on-surface-variant"}>
                Encased in solid reforested rosewood presentation coffrets, custom monogrammed brass plaques, and archival parchment signed directly by the maker.
              </p>
              <div className={"mt-8 flex items-center gap-4"}>
                <button className={"rounded-lg bg-secondary-container px-7 py-3.5 font-label-md text-label-md uppercase tracking-wider text-on-secondary shadow-md"}>
                  Configure Gift Suite
                </button>
              </div>
            </div>
            <div className={"relative flex items-center justify-center lg:col-span-6"}>
              <div className={"relative h-[440px] w-full overflow-hidden rounded-3xl bg-surface-container-lowest p-3 shadow-xl"}>
                <img className={"h-full w-full object-cover rounded-2xl"} data-alt={"Artisanal gift coffret open on an untreated oak table, showing a handcrafted watch, a leather folio, heavy cotton hand-torn paper certificate with wax stamp seal, illuminated by warm morning sunlight"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDl2uvMFO3Vm7ie5HABWDDEgpkFhVzbyIEjY_Gb_U2Ycur1qWDfPBIohYSsEkvWEB_NfyccJSxdfFYOp8TIOJdSY0ZSKe23Fv4evG8d7MhbwzDo-TGtqwAIGa3wAXqGrl8WKM54AHMCip2e8s8YxfLe43x9erFdxHD0K8EuVZYn0uX39VHVwYGdClkDkVc6JVJJAUzYkD9XvZQqApowIfU6P5ooq3nRYPaMNeHEm_g5eRfM2EMzlz1G"} />
              </div>
            </div>
          </div>
        </div>
        {/* Hero Slide Controls & Indicator */}
        <div className={"mt-8 flex items-center justify-between border-t-0 pt-2"}>
          <div className={"flex items-center gap-3"}>
            <button aria-label={"Go to slide 1"} className={"slide-dot h-2 w-10 rounded-full bg-primary transition-all duration-300"}></button>
            <button aria-label={"Go to slide 2"} className={"slide-dot h-2 w-3 rounded-full bg-outline-variant transition-all duration-300"}></button>
            <button aria-label={"Go to slide 3"} className={"slide-dot h-2 w-3 rounded-full bg-outline-variant transition-all duration-300"}></button>
          </div>
          <div className={"flex items-center gap-2"}>
            <button aria-label={"Previous Slide"} className={"flex h-10 w-10 items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors"}>
              <span className={"material-symbols-outlined text-[18px]"}>
                chevron_left
              </span>
            </button>
            <button aria-label={"Next Slide"} className={"flex h-10 w-10 items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors"}>
              <span className={"material-symbols-outlined text-[18px]"}>
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
