import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function CartColumns(){
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <div className="hidden flex items-center justify-between bg-primary text-on-primary px-space-md py-space-sm rounded-lg shadow-md transition-all" id="undoToast">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                {"archive"}
              </span>
              <span className="font-body-sm text-body-sm">
                {"Timepiece relocated to your private Horology Wishlist."}
              </span>
            </div>
            <button className="text-secondary-fixed hover:text-white font-label-sm text-label-sm uppercase tracking-wider font-bold underline" data-cart-action="undo" type="button">
              {"\n              Undo Removal\n            "}
            </button>
          </div>
          <CartItem cartKey="aster" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm transition-all hover:shadow-md" id="item-aster">
            <div className="flex flex-col sm:flex-row gap-space-md">
              <div className="flex sm:flex-col gap-space-xs items-center shrink-0">
                <div className="w-28 h-36 md:w-36 md:h-44 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden relative">
                  <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="High-end luxury wristwatch with midnight blue sunburst dial, brushed stainless steel bezel and link bracelet against pristine white atelier background with soft dramatic horology studio lighting" id="aster-main-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxfXAuFkF8xqtRoy1tXqbv1Bd6rNa4KumptZteMTH8dCXiDfG-8O5hCWdqUsNEjQ1z5VYEvTZsP3EGLTjY_h5eqS5B1_gyt5RyEhVwEveEyAnR01z-uix5dzittOI3EkNr00Yj_lO4qwDIptvtP0C61mr1_u2CUky6kcL-wcVwSR-idwsA3Mzbci8OU3HgEYNNUnTTmZnSK6hZvw47lyLBCZZDdY9SLjAokPAAJNImMOMgRNkPKSG" />
                  <span className="absolute top-2 left-2 bg-primary/90 text-on-primary font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-widest">
                    {"40MM"}
                  </span>
                </div>
                <div className="flex sm:flex-row gap-1">
                  <button className="w-7 h-7 rounded-DEFAULT bg-surface-container overflow-hidden hover:opacity-80" data-angle="1" data-cart-action="angle" type="button">
                    <img className="w-full h-full object-cover" data-alt="Close up macro detail of midnight blue dial indices and sapphire crystal of luxury watch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByHbaVBE4US_ri-WSQnr10fhzYYx4zZ5bOsuKWG5bGaIPEIj-zhJks1Lz2WZenlZgUdi6p9iFLHqDN8X9eC_CC_ehb-jcpIYdYM20hGO9Okpi28eQLZHMHetklY9ERH92lTO4N-rTYLu6s8G3A_3H-eCnzc-mZlEYUYLneqymAJ1NaS4Nwj6Q8S8XAHLTIc8E8sPKiiBik1CggrhNRetX0mol2Sc8U2cvKtGOwdVjA6pTEls2pbA2I" />
                  </button>
                  <button className="w-7 h-7 rounded-DEFAULT bg-surface-container overflow-hidden hover:opacity-80" data-angle="2" data-cart-action="angle" type="button">
                    <img className="w-full h-full object-cover" data-alt="Caseback exhibition view showing automatic rotor and escapement wheel jewels" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Ost-iQ8i1M72IVMlBwj_dm0uKzLxh82xN_XA__X3vRL5YR6nSDidXCAqmd08QPK8B7XQCqcT5Wt0Iwv2neySRYZqM-kc1P7mkoKoBOsaW57HH88NqGwVZFsTMJX45qpC9LcxLDDfdvMmfmsrv6FfYYA9tTSDhPjm5XSfJcnPqoBXPsKXoitN-DHWPfjU4lIGnupRBhJi4XxETegU8nWuq7TZg-RxILu7BPDpbKWwwLXTN_yBtpZR" />
                  </button>
                  <button className="w-7 h-7 rounded-DEFAULT bg-surface-container overflow-hidden hover:opacity-80" data-angle="3" data-cart-action="angle" type="button">
                    <img className="w-full h-full object-cover" data-alt="Side profile showing ribbed crown and polished stainless steel bevel lugs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyh00t6dt3FLzOh9d_ekgwtiFau_GaMJnBthz1l_l0dYSUCVv8RPKHH0BZSWA8-nHnOocSBJMehN0ZfPKG0GhJazBfWZ7f8v--8HTpLXm2mLhv4lVrl2sAQ2bSM6NUzPrqnuf-t1h9lLbfBqT7mbjaMIiWCyGZM7bTbQGUq794EQNuhzUclL8Ck-CEfeJQ1Z3JOxbAcC4XOO_Nrex-UhqWNgDj82QCLX8vsyf2lzen2tJ3BQ8wYQX" />
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-space-sm mb-space-xs">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-bold">
                        {"AMIHIVE TIMEPIECES"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Aster No.04 Automatic"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                        {"Ref: AST-N04-BLU"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"₹18,990"}
                      </div>
                      <div className="font-body-sm text-body-sm text-outline line-through">
                        {"₹21,990"}
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        {"Save ₹3,000"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-space-xs my-space-sm">
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"40mm Case"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Midnight Blue Sunburst"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Brushed 316L Steel"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Calibre NH35A (41h Reserve)"}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm text-secondary text-label-sm font-label-sm">
                    <span className="flex items-center gap-1 font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-container">
                        {"verified"}
                      </span>
                      {"\n                      Calibre Inspected • Ready in Atelier Vault\n                    "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-space-xs rounded-b-xl">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      {"Quantity:"}
                    </span>
                    <div className="flex items-center bg-surface-container-lowest rounded-lg shadow-sm">
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="decrease" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"remove"}
                        </span>
                      </button>
                      <span className="w-8 text-center font-label-md text-label-md text-primary font-bold" id="aster-qty"><CartQty cartKey="aster"/></span>
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="increase" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"add"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"bookmark"}
                      </span>
                      {"\n                      Save for Later\n                    "}
                    </button>
                    <button className="flex items-center gap-1 text-error hover:text-on-error-container font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="remove" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"delete_outline"}
                      </span>
                      {"\n                      Remove\n                    "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <CartItem cartKey="heritage" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm transition-all hover:shadow-md" id="item-heritage">
            <div className="flex flex-col sm:flex-row gap-space-md">
              <div className="w-28 h-36 md:w-36 md:h-44 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden shrink-0 relative">
                <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="Vintage military inspired luxury field watch with matte olive green dial, luminescent Arabic numerals and handcrafted brown saddle leather strap with contrast ecru stitching on light marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbPLRn-soHMy4lexUqvdP4eHGG4QcCNSkenVa6Rz7-TSrOu7wJzCPvy7Cml2_c00xIVIMDUfDeouorhS1w8_4_-s93m4ZjJXC08vhMJonWGmKUAOCcYtrJYx3UlW3hpFqzQz2T8fD1RllnWZym4zhpKUEw16W9n4IPRvFIBBzxYB1_99GmVHG22SufMDaOUx7_AoZJY7bwpXAZIRLhOWtHL_RCKihCg3Gj190FDSCTfxSmpB5ubUMn" />
                <span className="absolute top-2 left-2 bg-primary/90 text-on-primary font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-widest">
                  {"40MM"}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-space-sm mb-space-xs">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-bold">
                        {"HERITAGE ATELIER"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Field 40 Vintage Escapement"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                        {"Ref: HFO-OPS-02"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"₹14,290"}
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary-container font-bold bg-tertiary-fixed/30 px-1.5 py-0.5 rounded-DEFAULT">
                        {"In Stock"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-space-xs my-space-sm">
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Matte Olive Green"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Tuscan Saddle Leather"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Sapphire Box Crystal"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"100m Water Resistant"}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm text-secondary text-label-sm font-label-sm">
                    <span className="flex items-center gap-1 font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-container">
                        {"lock"}
                      </span>
                      {"\n                      In Stock • Dispatches in 24h\n                    "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-space-xs rounded-b-xl">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      {"Quantity:"}
                    </span>
                    <div className="flex items-center bg-surface-container-lowest rounded-lg shadow-sm">
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="decrease" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"remove"}
                        </span>
                      </button>
                      <span className="w-8 text-center font-label-md text-label-md text-primary font-bold" id="heritage-qty"><CartQty cartKey="heritage"/></span>
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="increase" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"add"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"bookmark"}
                      </span>
                      {"\n                      Save for Later\n                    "}
                    </button>
                    <button className="flex items-center gap-1 text-error hover:text-on-error-container font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="remove" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"delete_outline"}
                      </span>
                      {"\n                      Remove\n                    "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <CartItem cartKey="atlas" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm transition-all hover:shadow-md" id="item-atlas">
            <div className="flex flex-col sm:flex-row gap-space-md">
              <div className="w-28 h-36 md:w-36 md:h-44 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden shrink-0 relative">
                <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="High tech luxury connected timepiece with grade 5 titanium chassis, ultra sharp AMOLED extreme display showing chronograph dial, forest jade rubber strap on polished dark slate plinth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOdWiLZqFTv4eFto5qbcoOyBUwn5OzraP61gLsdRRL1tuCeFId-KAe3K6cmN-kTaN24zXb8CJ-ph8Dw6FPQiTw56BfQ8YsTLNGTWeMqy_TIAKEPVB3LTK4Hw_1sZUUx_KK0Rvj7Q8Z_C28tZsPItcrVEO8XvkHovwqgY6QyMNVRocm7Z35Gffzj5LTYUZG7eyJfpM41KQuivVKUGEKlbZfC7Whikuf_1f9S4CYguuplWOHWj1WGn4n" />
                <span className="absolute top-2 left-2 bg-secondary-container text-on-secondary-container font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-widest">
                  {"TITANIUM"}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-space-sm mb-space-xs">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-bold">
                        {"ATLAS INSTRUMENTS"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"Atlas S4 Dual GPS Chrono"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                        {"Ref: AT-S4-TITAN"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold">
                        {"₹13,990"}
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        {"Limited Allotment"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-space-xs my-space-sm">
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"44mm Grade 5 Titanium"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"FKM Fluororubber Forest Jade"}
                    </span>
                    <span className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-DEFAULT">
                      {"Sub-meter Dual L1/L5"}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm text-secondary text-label-sm font-label-sm">
                    <span className="flex items-center gap-1 font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[15px] text-tertiary-container">
                        {"format_image_left"}
                      </span>
                      {"\n                      Includes 2-Year International Atelier Guarantee\n                    "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-space-xs rounded-b-xl">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      {"Quantity:"}
                    </span>
                    <div className="flex items-center bg-surface-container-lowest rounded-lg shadow-sm">
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="decrease" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"remove"}
                        </span>
                      </button>
                      <span className="w-8 text-center font-label-md text-label-md text-primary font-bold" id="atlas-qty"><CartQty cartKey="atlas"/></span>
                      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" data-cart-action="increase" type="button">
                        <span className="material-symbols-outlined text-[16px]">
                          {"add"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md">
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"bookmark"}
                      </span>
                      {"\n                      Save for Later\n                    "}
                    </button>
                    <button className="flex items-center gap-1 text-error hover:text-on-error-container font-label-sm text-label-sm uppercase tracking-wider transition-colors" data-cart-action="remove" type="button">
                      <span className="material-symbols-outlined text-[17px]">
                        {"delete_outline"}
                      </span>
                      {"\n                      Remove\n                    "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <div className="bg-primary text-on-primary rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed text-[28px]">
                  {"lock_clock"}
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-primary">
                  {"AMIHIVE 100% Safe & Secure Checkout"}
                </h4>
                <p className="font-body-sm text-body-sm text-outline-variant">
                  {"Your payment is securely processed with full transit insurance and a 7-day hassle-free return guarantee."}
                </p>
              </div>
            </div>
            <a className="whitespace-nowrap px-space-md py-space-xs rounded-DEFAULT bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-secondary-fixed transition-colors" href="#">
              {"\n              Learn More\n            "}
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 sticky top-40">
          <div className="bg-surface-container-lowest rounded-xl [border-top-right-radius:96px] p-space-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-25">
              <svg className="w-full h-full text-secondary" viewBox="0 0 100 100">
                <path d="M 0 0 A 100 100 0 0 1 100 100" fill="none" stroke="currentColor" strokeDasharray="3 3" strokeWidth="2">
                </path>
                <circle cx="90" cy="10" fill="currentColor" r="4">
                </circle>
              </svg>
            </div>
            <div className="flex items-center justify-between mb-space-md">
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                {"Order Summary"}
              </h2>
              <span className="font-label-sm text-label-sm font-mono text-outline uppercase">
                {"INR (₹)"}
              </span>
            </div>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <div className="flex items-center justify-between text-on-surface">
                <span>
                  {"Subtotal (3 Timepieces)"}
                </span>
                <span className="font-mono font-semibold"><CartAmount kind="subtotal"/></span>
              </div>
              <div className="flex items-center justify-between text-tertiary-container">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    {"stars"}
                  </span>
                  {"\n                  Atelier Tier Privilege\n                "}
                </span>
                <span className="font-mono font-semibold"><CartAmount kind="discount"/></span>
              </div>
              <div className="flex items-center justify-between text-on-surface">
                <span className="flex items-center gap-1">
                  <span>
                    {"Express Delivery & Insurance"}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[15px]" title="Complimentary express courier for orders over ₹1,999">
                    {"help_outline"}
                  </span>
                </span>
                <span className="font-label-sm text-label-sm font-bold text-secondary tracking-wider uppercase">
                  {"Complimentary"}
                </span>
              </div>
              <AppliedVoucher  className="flex items-center justify-between bg-surface-container-low px-space-sm py-1.5 rounded-DEFAULT" id="voucher-applied-row">                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    {"sell"}
                  </span>
                  <span className="font-label-sm text-label-sm font-bold font-mono">
                    {"CALIBRE5"}
                  </span>
                  <span className="text-label-sm text-outline-variant font-sans">
                    {"(Horology Welcome)"}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="font-mono text-body-sm font-semibold text-primary"><CartAmount kind="voucher"/></span>
                  <button className="text-outline hover:text-error" data-cart-action="remove-voucher" type="button">
                    <span className="material-symbols-outlined text-[15px]">
                      {"close"}
                    </span>
                  </button>
                </div>
</AppliedVoucher>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low/40 rounded-lg p-space-sm">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold block mb-1">
                {"\n                Atelier Invitation / Voucher Code\n              "}
              </label>
              <div className="flex items-center gap-space-xs">
                <input className="flex-1 bg-surface-container-lowest px-space-sm py-2 rounded-DEFAULT font-label-md text-label-md text-primary uppercase placeholder:text-outline focus:outline-none" id="coupon-input" placeholder="e.g. TOURBILLON10" type="text" />
                <button className="px-space-md py-2 bg-primary text-on-primary rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider font-bold hover:bg-primary-container transition-colors" data-cart-action="coupon" type="button">
                  {"\n                  Apply\n                "}
                </button>
              </div>
            </div>
            <div className="w-full h-[1px] bg-surface-container-high my-space-md">
            </div>
            <div className="flex items-end justify-between mb-space-md">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                  {"Total Amount"}
                </span>
                <p className="font-label-sm text-label-sm text-outline">
                  {"All taxes and shipping included"}
                </p>
              </div>
              <div className="text-right">
                <span className="font-headline-md text-headline-md text-primary font-bold font-mono" id="final-total"><CartAmount kind="total"/></span>
              </div>
            </div>
            <button className="w-full py-space-sm bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg uppercase tracking-wider font-bold shadow-md hover:bg-primary transition-all flex items-center justify-center gap-space-sm mb-space-sm" data-cart-action="checkout" type="button">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                {"lock"}
              </span>
              <span>
                {"Proceed to Checkout"}
              </span>
            </button>
            <div className="w-full grid grid-cols-2 gap-space-xs mb-space-md">
              <button className="py-2 bg-surface-container-low hover:bg-surface-container text-primary rounded-DEFAULT font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"account_balance"}
                </span>
                {"\n                Bank Transfer\n              "}
              </button>
              <button className="py-2 bg-surface-container-low hover:bg-surface-container text-primary rounded-DEFAULT font-label-sm text-label-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"credit_card"}
                </span>
                {"\n                Zero-Cost EMI\n              "}
              </button>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  {"verified_user"}
                </span>
                <span>
                  {"256-Bit Secure Encryption"}
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  {"schedule"}
                </span>
                <span>
                  {"7-Day Return & Trial Period"}
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  {"shield"}
                </span>
                <span>
                  {"5-Year Movement Warranty"}
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container rounded-lg p-space-sm flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[22px]">
                {"support_agent"}
              </span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm font-bold uppercase text-primary">
                  {"Private Horology Concierge"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Questions on movement tolerances? "}
                  <a className="text-secondary font-bold underline" href="#">
                    {"Talk to an Atelier Specialist"}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
