import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function CuratedVaultHeader(){
  return (
    <>
      <div className="flex flex-col gap-space-xs">
        <nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline tracking-widest uppercase">
          <a className="hover:text-primary transition-colors" data-path="home" href="#">
            {"Home"}
          </a>
          <span className="text-outline-variant">
            {"/"}
          </span>
          <span className="text-on-surface font-semibold">
            {"Shopping Cart"}
          </span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              {"VARIATION 05 • HAUTE HORLOGERIE HEIRLOOM SUITE"}
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mt-1">
              {"Your Curated Vault"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
              {"\n            Handcrafted timepieces and bespoke presentation ensembles prepared for gifting, personal milestones, and generational provenance.\n          "}
            </p>
          </div>
          <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-secondary text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
              {"card_giftcard"}
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                {"Concierge Gifting Active"}
              </span>
              <span className="font-body-sm text-body-sm text-outline">
                {"Complimentary wax seal & calligraphic card"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
