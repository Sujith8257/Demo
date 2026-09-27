import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function CartHero(){
  return (
    <>
      <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-sm mb-space-lg overflow-hidden">
        <svg className="absolute -right-20 -top-24 w-[420px] h-[420px] text-surface-container opacity-70 pointer-events-none hidden md:block" fill="none" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeDasharray="2 6" strokeWidth="1.5">
          </circle>
          <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.75">
          </circle>
          <circle cx="200" cy="200" r="145" stroke="currentColor" strokeDasharray="12 4" strokeWidth="1.2">
          </circle>
          <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.75">
          </circle>
          <path d="M200 10 L200 30 M200 370 L200 390 M10 200 L30 200 M370 200 L390 200" stroke="currentColor" strokeWidth="2">
          </path>
        </svg>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-DEFAULT mb-space-sm text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[14px]">
                {"verified"}
              </span>
              <span>
                {"3 Items in Your Cart"}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mb-space-xs">
              {"\n              Your Selection\n            "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {"\n              Review your selected timepieces before proceeding to checkout. Each watch is 100% genuine and verified.\n            "}
            </p>
          </div>
          <div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg">
            <div className="flex items-center gap-space-xs">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-label-sm text-[11px] flex items-center justify-center font-bold">
                {"1"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                {"Cart Review"}
              </span>
            </div>
            <div className="w-8 h-[2px] bg-secondary-fixed-dim">
            </div>
            <div className="flex items-center gap-space-xs opacity-60">
              <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] flex items-center justify-center font-bold">
                {"2"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                {"Checkout"}
              </span>
            </div>
            <div className="w-8 h-[2px] bg-surface-container">
            </div>
            <div className="flex items-center gap-space-xs opacity-40">
              <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] flex items-center justify-center font-bold">
                {"3"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                {"Delivery"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
