import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function PerformanceHero(){
  return (
    <>
      <div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none text-primary" fill="currentColor" viewBox="0 0 400 200">
          <path d="M0 0 C 150 80, 250 20, 400 120 L 400 200 L 0 200 Z">
          </path>
        </svg>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md relative z-10">
          <div>
            <div className="flex items-center gap-space-xs mb-1">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                {"tune"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                {"CALIBRATED FIELD TELEMETRY"}
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              {"Active Performance Cart"}
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl mt-1">
              {"\n            Multisport precision chronographs, biometric telemetry computers, and certified shockproof diving timepieces queued for armored courier dispatch.\n          "}
            </p>
          </div>
          <div className="flex flex-wrap gap-space-xs items-center">
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-DEFAULT text-on-surface">
              <span className="material-symbols-outlined text-[14px] text-primary">
                {"satellite_alt"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {"Dual-Band L1+L5 GNSS"}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-DEFAULT text-on-surface">
              <span className="material-symbols-outlined text-[14px] text-primary">
                {"water_drop"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {"10 ATM Water Integrity"}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-DEFAULT text-on-surface">
              <span className="material-symbols-outlined text-[14px] text-primary">
                {"shield"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {"Grade 5 Titanium Verified"}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-DEFAULT text-on-surface">
              <span className="material-symbols-outlined text-[14px] text-primary">
                {"ecg_heart"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {"Continuous Biometric Sync"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
