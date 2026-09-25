import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function MobileCheckout(){
  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-md p-space-md shadow-lg z-40 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline">
            {"Total Calibrated"}
          </span>
          <span className="font-headline-sm text-headline-sm font-bold text-primary font-mono" id="mobile-summary-total"><CartAmount kind="total"/></span>
        </div>
        <button className="bg-primary-container text-on-primary px-space-lg py-2.5 rounded-lg font-label-md text-label-md uppercase font-bold flex items-center gap-1" data-cart-action="checkout" type="button">
          <span>
            {"Checkout"}
          </span>
          <span className="material-symbols-outlined text-[16px]">
            {"arrow_forward"}
          </span>
        </button>
      </div>
    </>
  );
}
