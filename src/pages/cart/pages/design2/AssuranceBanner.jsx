import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function AssuranceBanner(){
  return (
    <>
      <div className="mt-space-xl p-space-md bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-outline text-[22px]">
            {"developer_mode"}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {"View UX edge-case states:"}
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <button className="px-space-md py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors rounded-DEFAULT font-label-sm text-label-sm uppercase font-semibold" data-cart-action="empty-preview" type="button">
            {"\n          Preview Empty Cart State\n        "}
          </button>
          <button className="px-space-md py-1.5 bg-surface-container-lowest text-outline hover:text-primary transition-colors rounded-DEFAULT font-label-sm text-label-sm uppercase font-semibold" data-cart-action="reset" type="button">
            {"\n          Reset Telemetry\n        "}
          </button>
        </div>
      </div>
    </>
  );
}
