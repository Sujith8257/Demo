import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function StatusBar(){
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pt-space-md pb-space-lg">
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
          <a className="hover:text-primary transition-colors" data-path="home" href="#">
            {"Home"}
          </a>
          <span className="text-outline-variant">
            {"/"}
          </span>
          <span className="text-on-surface font-semibold">
            {"Shopping Cart"}
          </span>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-DEFAULT text-on-surface">
          <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse">
          </span>
          <span className="font-label-sm text-label-sm tracking-widest uppercase font-bold text-on-surface">
            {"\n          Hardware Sync Online: "}
            <span className="text-secondary font-bold" id="cart-item-counter"><CartCount suffix=" Instruments Selected"/></span>
          </span>
        </div>
      </div>
    </>
  );
}
