import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function DaylightCart(){
  return (
    <>
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-space-lg">
          <div className="flex items-center justify-between pb-space-lg">
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-wider text-outline">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                {"1"}
              </span>
              <span className="text-on-surface font-bold">
                {"Chamber Inspection"}
              </span>
              <span className="text-outline-variant">
                {"•"}
              </span>
              <span className="w-6 h-6 rounded-full bg-surface-container text-outline flex items-center justify-center font-semibold">
                {"2"}
              </span>
              <span>
                {"Shipping"}
              </span>
              <span className="text-outline-variant">
                {"•"}
              </span>
              <span className="w-6 h-6 rounded-full bg-surface-container text-outline flex items-center justify-center font-semibold">
                {"3"}
              </span>
              <span>
                {"Payment"}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">
                {"verified"}
              </span>
              <span>
                {"Inspected by Atelier Master Horologist"}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <article className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CartItem cartKey="aster" className="flex flex-col sm:flex-row gap-space-lg">
                  <div className="w-full sm:w-44 h-48 sm:h-44 rounded-lg bg-surface-container-low overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="Minimalist product view of the Aster No.04 automatic watch with midnight blue textured dial, titanium DLC matte black case, dark petrol sailcloth textured strap, isolated on neutral porcelain background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSVK1UJrim2gJW87xDdU_dXpitQsVZvDTtxC1MbqEa0d6sweif6thiHTR3o4LxD7x-Hiwe6JK2JHjWgvGNAxzGx_NjL-p6sw1O6exaJfaW7NdWwuhPux_cQBeNnj-eeJQy0DcCbsVhKyGZPsVAGwl8NT45hUWJMLhkUtdEcu3XTDiTmTMT0n3hWV2AtFIcx2HI7csINpb24N_OyxaXXhxOfRbGozF_jF6Rrf8cFigkPoxmJwdwvlYn" />
                    <span className="absolute top-2 left-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase">
                      {"\n                  LE / 150\n                "}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-space-sm">
                    <div>
                      <div className="flex items-start justify-between gap-space-md">
                        <div>
                          <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold">
                            {"Aster Atelier • Reference AST-N04-BLU"}
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">
                            {"Aster No.04 Automatic — Midnight Edition"}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                            {"₹18,990"}
                          </span>
                          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                            {"Taxes & Insurance Incl."}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs mt-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Finishing"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"40mm Titanium DLC"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Strap Calibre"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"Petrol Sailcloth"}
                          </span>
                        </div>
                        <div className="flex flex-col col-span-2 sm:col-span-1">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Regulation"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary font-semibold font-mono">
                            {"-2/+4 sec/day"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
                      <div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]">
                          {"edit_note"}
                        </span>
                        <span>
                          {"Bespoke Caseback Engraving: "}
                          <strong>
                            {"\"HOROLOGY MMXXV\" (Free)"}
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="flex items-center bg-surface-container rounded-DEFAULT overflow-hidden">
                          <button aria-label="Decrease quantity" className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="decrease" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"remove"}
                            </span>
                          </button>
                          <span className="w-8 text-center font-label-md text-label-md text-on-surface font-mono"><CartQty cartKey="aster"/></span>
                          <button aria-label="Increase quantity" className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="increase" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"add"}
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <button className="p-2 text-outline hover:text-primary transition-colors rounded-DEFAULT hover:bg-surface-container" title="Move to Atelier Vault" data-cart-action="save" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"bookmark"}
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors rounded-DEFAULT hover:bg-error-container" title="Remove from Chamber" data-cart-action="remove" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"delete"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CartItem>
              </article>
              <article className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CartItem cartKey="heritage" className="flex flex-col sm:flex-row gap-space-lg">
                  <div className="w-full sm:w-44 h-48 sm:h-44 rounded-lg bg-surface-container-low overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="Studio photograph of the Heritage Field 40 Night Ops tactical wristwatch with sandblasted matte gunmetal case, tritium gas tubes glow, military canvas strap, placed on off-white ceramic table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Y68yISH6mChr4gWEorLSicmxzzELueqoMclLlG4GI1ajzqRtKVozpaX-BQpEHnac_A1o0yaZF6k9837np6yk3LBhZJAH_xY6zTapeY6yuJr6xLI3Th7TB6C1MpEvRWQ6nCVl1MrCGpU7g89W_mqSy1uHqqVYFkT59J_5gt-UG4yV-hiUgJqcJ5gbz_LfLQ1Amg_uEpY7nneMQl9vVkFE7eBYVO0tUmssla1QfVBs1Jnyk4wvLux7" />
                    <span className="absolute top-2 left-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase">
                      {"\n                  Tritium H3\n                "}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-space-sm">
                    <div>
                      <div className="flex items-start justify-between gap-space-md">
                        <div>
                          <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold">
                            {"Amihive Archive • Ref. HF-40-NO"}
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">
                            {"Heritage Field 40 — Night Ops Edition"}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                            {"₹14,290"}
                          </span>
                          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                            {"Inspected Escapement"}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs mt-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Chassis"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"Sandblasted Cage 316L"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Luminescence"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"GTLS Tritium Tubes"}
                          </span>
                        </div>
                        <div className="flex flex-col col-span-2 sm:col-span-1">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Depth Rating"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary font-semibold font-mono">
                            {"100M / 10 ATM"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                          {"done_all"}
                        </span>
                        <span>
                          {"Includes additional olive ballistic nylon tactical strap"}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="flex items-center bg-surface-container rounded-DEFAULT overflow-hidden">
                          <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="decrease" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"remove"}
                            </span>
                          </button>
                          <span className="w-8 text-center font-label-md text-label-md text-on-surface font-mono"><CartQty cartKey="heritage"/></span>
                          <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="increase" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"add"}
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <button className="p-2 text-outline hover:text-primary transition-colors rounded-DEFAULT hover:bg-surface-container" data-cart-action="save" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"bookmark"}
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors rounded-DEFAULT hover:bg-error-container" data-cart-action="remove" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"delete"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CartItem>
              </article>
              <article className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CartItem cartKey="atlas" className="flex flex-col sm:flex-row gap-space-lg">
                  <div className="w-full sm:w-44 h-48 sm:h-44 rounded-lg bg-surface-container-low overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                    <img className="w-full h-full object-cover" data-alt="Contemporary luxury digital hybrid watch with monolithic grade 5 titanium case, AMOLED dark screen with orange and teal telemetry chronograph display, black fluoroelastomer band on white museum surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xUKNPj4Fqperwg9OGFYDFxqHqPqxrnDOxpL109USqA2d797tNwYcUDVhWc2n09EkR9csdPcVd_ut1ThCk9H2IwQr19ybU9awtA6Uw55eIQMt-G9vDH570xl4eJRVduk7cg93V69H6OabxUm2HZeqds2oIyXZ1RyFxw52i4rmmNlj705hmabB-80N6d1zoxRj__2u9n053B5SZyct8vAQPY50KvawR1_LhfbPAalkuNDenqDQ_B3K" />
                    <span className="absolute top-2 left-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-secondary-fixed font-label-sm text-label-sm tracking-wider uppercase">
                      {"\n                  Grade 5 Ti\n                "}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-space-sm">
                    <div>
                      <div className="flex items-start justify-between gap-space-md">
                        <div>
                          <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold">
                            {"Chronometric Telemetry • Ref. AT-S4-STH"}
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">
                            {"Atlas S4 Dual GPS — Stealth Titanium"}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="font-headline-sm text-headline-sm text-primary font-bold block">
                            {"₹13,990"}
                          </span>
                          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                            {"In Stock"}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs mt-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Material"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"Grade 5 Monolithic Ti"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Optics"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            {"1000 Nits AMOLED"}
                          </span>
                        </div>
                        <div className="flex flex-col col-span-2 sm:col-span-1">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                            {"Power Cell"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary font-semibold font-mono">
                            {"14 Days Reserve"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                          {"speed"}
                        </span>
                        <span>
                          {"Includes atelier magnetic contact induction dock"}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md">
                        <div className="flex items-center bg-surface-container rounded-DEFAULT overflow-hidden">
                          <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="decrease" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"remove"}
                            </span>
                          </button>
                          <span className="w-8 text-center font-label-md text-label-md text-on-surface font-mono"><CartQty cartKey="atlas"/></span>
                          <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="increase" type="button">
                            <span className="material-symbols-outlined text-[16px]">
                              {"add"}
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <button className="p-2 text-outline hover:text-primary transition-colors rounded-DEFAULT hover:bg-surface-container" data-cart-action="save" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"bookmark"}
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors rounded-DEFAULT hover:bg-error-container" data-cart-action="remove" type="button">
                            <span className="material-symbols-outlined text-[18px]">
                              {"delete"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CartItem>
              </article>
              <div className="flex flex-col sm:flex-row items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center text-secondary-fixed flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      {"local_shipping"}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg font-semibold text-on-surface">
                      {"Express Courier & Free Transit Insurance"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-outline">
                      {"Signature-verified delivery with live tracking and full insurance coverage."}
                    </p>
                  </div>
                </div>
                <a className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold hover:underline whitespace-nowrap" href="#">
                  {"\n              Protocol Specs →\n            "}
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 sticky top-28 flex flex-col gap-space-md">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg">
                <div className="bg-primary-container p-space-lg text-on-primary">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                      {"Chamber Settlement"}
                    </span>
                    <span className="font-label-sm text-label-sm font-mono text-outline-variant">
                      {"3 REFERENCES"}
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary">
                    {"Acquisition Summary"}
                  </h2>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        {"Calibre Valuation Subtotal"}
                      </span>
                      <span className="font-mono text-on-surface font-semibold"><CartAmount kind="subtotal"/></span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <div className="flex items-center gap-1 text-secondary">
                        <span className="material-symbols-outlined text-[16px]">
                          {"stars"}
                        </span>
                        <span className="font-medium">
                          {"Member Discount"}
                        </span>
                      </div>
                      <span className="font-mono text-secondary font-bold"><CartAmount kind="discount"/></span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        {"Express Delivery"}
                      </span>
                      <span className="font-mono text-on-tertiary-container font-semibold uppercase">
                        {"FREE"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">
                        {"Transit Insurance"}
                      </span>
                      <span className="font-mono text-on-tertiary-container font-semibold uppercase">
                        {"Complimentary"}
                      </span>
                    </div>
                  </div>
                  <div className="pt-space-xs">
                    <div className="flex items-center bg-surface-container-low rounded-lg p-space-xs shadow-inner">
                      <span className="material-symbols-outlined text-outline text-[18px] ml-space-xs">
                        {"key"}
                      </span>
                      <input className="w-full bg-transparent border-0 px-space-xs py-space-xs font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none uppercase font-mono" placeholder="Coupon Code / Voucher..." type="text" />
                      <button className="bg-primary text-on-primary px-space-sm py-space-xs rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors" data-cart-action="coupon" type="button">
                        {"\n                    Apply\n                  "}
                      </button>
                    </div>
                  </div>
                  <div className="pt-space-sm bg-surface-container-low p-space-md rounded-lg">
                    <div className="flex items-baseline justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                          {"Total Amount"}
                        </span>
                        <span className="font-label-sm text-[10px] text-outline-variant font-mono">
                          {"INCL. APPLICABLE VAT/GST"}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight"><CartAmount kind="total"/></span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary-container text-on-primary py-space-md px-space-lg rounded-DEFAULT font-label-lg text-label-lg uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-space-sm shadow-md hover:shadow-lg active:scale-[0.99]" data-cart-action="checkout" type="button">
                    <span>
                      {"Proceed to Checkout"}
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                      {"arrow_forward"}
                    </span>
                  </button>
                  <button className="w-full bg-transparent hover:bg-surface-container text-on-surface py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-space-xs" type="button">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      {"account_balance_wallet"}
                    </span>
                    <span>
                      {"Bank Transfer / Split Payment"}
                    </span>
                  </button>
                  <div className="pt-space-xs flex flex-col gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        {"verified_user"}
                      </span>
                      <span>
                        {"Tamper-evident Sealed Packaging"}
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        {"update"}
                      </span>
                      <span>
                        {"7-Day Trial & Free Return Policy"}
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        {"shield"}
                      </span>
                      <span>
                        {"256-Bit Bank Grade Secure Checkout"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-lg flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    {"support_agent"}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="font-label-md text-label-md text-on-surface font-semibold block">
                    {"Private Horologist Concierge"}
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">
                    {"Direct line available 24/7 for chamber assistance."}
                  </span>
                </div>
                <a className="p-2 text-primary hover:text-secondary transition-colors" href="#" title="Contact Concierge">
                  <span className="material-symbols-outlined text-[20px]">
                    {"chat"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
