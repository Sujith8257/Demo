import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function ManifestBreadcrumbs(){
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-outline">
          <a className="hover:text-primary transition-colors" data-path="home" href="#">
            {"Home"}
          </a>
          <span className="text-outline-variant font-mono">
            {"/"}
          </span>
          <span className="text-primary font-bold">
            {"Shopping Cart"}
          </span>
        </div>
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-space-sm py-1 rounded-DEFAULT">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary">
          </span>
          <span className="font-mono">
            {"ATELIER DISPATCH PIPELINE: ACTIVE"}
          </span>
        </div>
      </div>
    </>
  );
}
