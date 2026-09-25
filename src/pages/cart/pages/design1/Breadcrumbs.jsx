import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function Breadcrumbs(){
  return (
    <>
      <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md tracking-wider uppercase mb-space-md">
        <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
          <span className="material-symbols-outlined text-[15px]">
            {"home"}
          </span>
          {"\n          Home\n        "}
        </a>
        <span className="text-outline-variant">
          {"/"}
        </span>
        <span className="text-primary font-bold">
          {"Shopping Cart"}
        </span>
      </nav>
    </>
  );
}
