import Countdown from "../../components/Countdown.jsx";
import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function NocturnalHero(){
  return (
    <>
      <section className="relative w-full bg-primary-container text-on-primary overflow-hidden shadow-2xl">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none">
        </div>
        <div className="absolute top-1/2 right-12 w-80 h-80 rounded-full bg-secondary-fixed-dim/15 blur-3xl pointer-events-none">
        </div>
        <div className="max-w-7xl mx-auto px-space-lg pt-space-xl pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-primary/70 backdrop-blur-md self-start">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping">
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                  {"Atelier Vault Lock • Live Chamber"}
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-on-primary-container font-mono">
                  {"CHAMBER ALLOTMENT • REF. CL-9042"}
                </span>
                <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-primary font-bold leading-none">
                  {"\n              Your Collection. "}
                  <span className="text-secondary-fixed">
                    {"Almost Yours."}
                  </span>
                </h1>
              </div>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                {"\n            Three certified timepieces reserved in your cart. Calibrated, inspected, and primed for insured express delivery.\n          "}
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <div className="flex items-center gap-space-sm bg-primary px-space-md py-space-sm rounded-lg shadow-inner">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    {"lock_clock"}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant">
                    {"Allocation Lock Active:"}
                  </span>
                  <span className="font-label-md text-label-md font-mono text-secondary-fixed font-bold tracking-widest" id="countdown"><Countdown /></span>
                </div>
                <div className="flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm tracking-wider uppercase">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                    {"verified_user"}
                  </span>
                  <span>
                    {"Vault ID: AM-8820-NC"}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-secondary/40 via-surface-tint/20 to-secondary-fixed/40 shadow-2xl flex items-center justify-center group">
                <div className="absolute inset-1 rounded-full border border-secondary-fixed/30 border-dashed animate-[spin_120s_linear_infinite] pointer-events-none">
                </div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner bg-primary flex items-center justify-center">
                  <img className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700 ease-out" data-alt="Macro photographic close-up of a high horology midnight watch dial featuring BGW9 blue luminous hands and indices, dark rhodium frosted sunburst guilloche pattern, titanium bezel frame, and deep emerald petrol tint reflections under cinematic studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAanLUERBcVze36i2xztKLacZT2KsZ37U5LgevT6qlWH8TG7Pt20NoXUToisTkXFFrYuLdoJDnM-3KtrZ2pVl2T2MGthonWdpT5d2i8cDlvZuswrMrk8swF4lbxx9yyS8BUoFAWIQ4sN8RetEO2tnK5w-C2ETPGtofUb2vcB-7hNwIZ4pTPdWYqibZ9ikeR_SWfLFALda5PkDJs2APWshI7ec3T8Caa3bTuLRBH2XkdQr8P2Bl-mosc" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-surface-bright/20 pointer-events-none">
                  </div>
                  <div className="absolute inset-x-0 bottom-4 flex flex-col items-center pointer-events-none text-center">
                    <span className="px-space-sm py-0.5 rounded-full bg-primary/90 text-secondary-fixed font-label-sm text-label-sm tracking-widest uppercase">
                      {"\n                  BGW9 Super-LumiNova • Active\n                "}
                    </span>
                    <span className="font-label-sm text-[9px] text-primary-fixed-dim/90 font-mono mt-0.5">
                      {"ASTER NO.04 • 28,800 VPH"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 inset-x-0 h-16 sm:h-24 pointer-events-none fill-surface">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <path d="M0,0 C480,95 960,95 1440,0 L1440,80 L0,80 Z">
            </path>
          </svg>
        </div>
      </section>
    </>
  );
}
