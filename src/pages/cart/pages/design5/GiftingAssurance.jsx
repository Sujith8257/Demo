import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function GiftingAssurance(){
  return (
    <>
      <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl my-space-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md max-w-xl">
          <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10">
              </circle>
              <polyline points="12 6 12 12 16 14">
              </polyline>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2">
              </path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
              {"Your cart is waiting — Explore watches worth making time for."}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              {"\n            Every timepiece listed on AMIHIVE undergoes a 30-point chronometric verification prior to dispatch.\n          "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <a className="bg-primary text-on-primary hover:bg-primary-container px-space-lg py-space-sm rounded-DEFAULT font-label-md text-label-md font-bold transition-colors" data-path="discover" href="#">
            {"\n          Continue Shopping\n        "}
          </a>
          <a className="bg-surface-container-lowest hover:bg-surface-container text-on-surface px-space-md py-space-sm rounded-DEFAULT font-label-md text-label-md font-semibold transition-colors" data-path="curated-vault" href="#">
            {"\n          Saved Items\n        "}
          </a>
        </div>
      </div>
    </>
  );
}
