import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function ManifestHero(){
  return (
    <>
      <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm mb-space-lg">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
          <div className="flex-1">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest bg-secondary-fixed text-on-secondary-fixed px-space-xs py-0.5 rounded-DEFAULT font-mono">
                {"ALLOCATION PROTOCOL"}
              </span>
              <span className="text-outline text-label-sm font-mono tracking-widest">
                {"ISO 1413 / DIN 8309 ASSURED"}
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mb-space-xs">
              {"Your Shopping Cart"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {"\n            In Cart • "}
              <span className="text-primary font-medium">
                {"3 Items Ready for Dispatch"}
              </span>
              {". Fully insured express delivery with 7-day returns.\n          "}
            </p>
          </div>
          <div className="flex items-center gap-space-md bg-surface-container-low p-space-md rounded-DEFAULT min-w-[280px]">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                <circle className="text-surface-container-highest" cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeWidth="3">
                </circle>
                <circle className="text-secondary transition-all duration-700" cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="21.1" strokeWidth="3">
                </circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-label-sm text-[11px] font-bold text-primary font-mono leading-none">
                  {"0.02s"}
                </span>
                <span className="font-label-sm text-[8px] text-outline font-mono">
                  {"DEV/24H"}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                {"TOLERANCE QUOTA"}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                {"99.88%"}
              </span>
              <span className="font-label-sm text-[11px] text-on-secondary-container">
                {"Chronometer Passed"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
