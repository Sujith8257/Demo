export default function VALUEMANIFESTOMARQUEEREPLACEDWITH() {
  return (
<>
    <section className={"w-full bg-white border-y border-slate-200 py-6 overflow-hidden relative"}>
      <style>
        @keyframes marqueeProviders &#123;
  0% &#123; transform: translateX(0); &#125;
  100% &#123; transform: translateX(-50%); &#125;
&#125;
.provider-track &#123;
  display: flex;
  width: max-content;
  animation: marqueeProviders 28s linear infinite;
&#125;
.provider-track:hover &#123;
  animation-play-state: paused;
&#125;
      </style>
      <div className={"mx-auto max-w-[1760px] px-margin py-4"}>
        <div className={"flex items-center justify-center gap-4 text-xs font-semibold tracking-widest text-outline uppercase mb-8"}>
          <span className={"h-px w-16 bg-outline-variant"}></span>
          <span className={"font-label-caps text-label-caps text-on-surface-variant tracking-widest"}>
            OUR PROVIDERS
          </span>
          <span className={"h-px w-16 bg-outline-variant"}></span>
        </div>
        <div className={"relative w-full overflow-hidden"}>
          {/* Edge fade gradient masks */}
          <div className={"pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-36 z-10 bg-gradient-to-r from-white to-transparent"}></div>
          <div className={"pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-36 z-10 bg-gradient-to-l from-white to-transparent"}></div>
          {/* Continuous Marquee Track */}
          <div className={"provider-track items-center py-2 opacity-70 transition-opacity hover:opacity-100"}>
            {/* Set 1 */}
            <div className={"flex items-center gap-12 md:gap-16 pr-12 md:pr-16"}>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[26px] text-outline"}>
                  crown
                </span>
                ROLEX
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[24px] text-outline"}>
                  shield
                </span>
                TUDOR
              </div>
              <div className={"flex items-center gap-1.5 tracking-wider font-extrabold text-xl md:text-2xl text-on-surface-variant uppercase font-headline-sm cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[24px] text-outline"}>
                  schedule
                </span>
                OMEGA
              </div>
              <div className={"flex items-center gap-2 cursor-pointer"}>
                <img alt={"H Company Partner Logo"} className={"h-7 md:h-8 object-contain filter grayscale opacity-80 hover:opacity-100 transition-opacity"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDZIBEpt8lVVhEF1blSsKlENg1j_lhIaXMVWW5B4eJIvqkwHEnly6LHfmOBCHo86G9wokOZD94wEenW_kxv_BU11YBpNZiAShXx5Dfe1GU65hGQOwmoa3kqsUYuq8Ms_UPE0azOz-PUpASMySw_gWf9ypDSDrH7jDBy85Z9RHBhkDxO_V5Rrz9FJ7cv8_AqQQS0p62aJgTrtgYZhnCcXW5UCbXFflYTbJJRvD9_Rcsn2dedrvUBLN6C1ISxfHXAZFJW4g"} />
              </div>
              <div className={"flex items-center gap-1.5 tracking-widest font-bold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  SEIKO
                </span>
              </div>
              <div className={"flex items-center gap-1.5 tracking-wider font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  TITAN
                </span>
                <span className={"text-[10px] font-semibold text-outline uppercase tracking-normal border-l border-outline-variant pl-1.5"}>
                  EDGE
                </span>
              </div>
              <div className={"flex items-center gap-1 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  CASIO
                </span>
                <span className={"text-xs font-semibold text-outline"}>
                  EDIFICE
                </span>
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[22px] text-outline"}>
                  precision_manufacturing
                </span>
                ASTER HOROLOGY
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[22px] text-outline"}>
                  hourglass_bottom
                </span>
                LONGINES
              </div>
            </div>
            {/* Set 2 (Seamless clone) */}
            <div aria-hidden={"true"} className={"flex items-center gap-12 md:gap-16 pr-12 md:pr-16"}>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[26px] text-outline"}>
                  crown
                </span>
                ROLEX
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[24px] text-outline"}>
                  shield
                </span>
                TUDOR
              </div>
              <div className={"flex items-center gap-1.5 tracking-wider font-extrabold text-xl md:text-2xl text-on-surface-variant uppercase font-headline-sm cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[24px] text-outline"}>
                  schedule
                </span>
                OMEGA
              </div>
              <div className={"flex items-center gap-2 cursor-pointer"}>
                <img alt={"H Company Partner Logo"} className={"h-7 md:h-8 object-contain filter grayscale opacity-80 hover:opacity-100 transition-opacity"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDZIBEpt8lVVhEF1blSsKlENg1j_lhIaXMVWW5B4eJIvqkwHEnly6LHfmOBCHo86G9wokOZD94wEenW_kxv_BU11YBpNZiAShXx5Dfe1GU65hGQOwmoa3kqsUYuq8Ms_UPE0azOz-PUpASMySw_gWf9ypDSDrH7jDBy85Z9RHBhkDxO_V5Rrz9FJ7cv8_AqQQS0p62aJgTrtgYZhnCcXW5UCbXFflYTbJJRvD9_Rcsn2dedrvUBLN6C1ISxfHXAZFJW4g"} />
              </div>
              <div className={"flex items-center gap-1.5 tracking-widest font-bold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  SEIKO
                </span>
              </div>
              <div className={"flex items-center gap-1.5 tracking-wider font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  TITAN
                </span>
                <span className={"text-[10px] font-semibold text-outline uppercase tracking-normal border-l border-outline-variant pl-1.5"}>
                  EDGE
                </span>
              </div>
              <div className={"flex items-center gap-1 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span>
                  CASIO
                </span>
                <span className={"text-xs font-semibold text-outline"}>
                  EDIFICE
                </span>
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[22px] text-outline"}>
                  precision_manufacturing
                </span>
                ASTER HOROLOGY
              </div>
              <div className={"flex items-center gap-2 tracking-widest font-extrabold text-lg md:text-xl text-on-surface-variant uppercase cursor-pointer hover:text-primary transition-colors"}>
                <span className={"material-symbols-outlined text-[22px] text-outline"}>
                  hourglass_bottom
                </span>
                LONGINES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
