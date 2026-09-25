import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function AcquisitionGrid(){
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-lg">
          <div className="bg-surface-container-lowest rounded-DEFAULT shadow-sm overflow-hidden">
            <div className="bg-primary text-on-primary px-space-md py-space-sm hidden md:grid grid-cols-12 gap-space-sm items-center font-label-sm text-label-sm uppercase tracking-widest font-mono">
              <div className="col-span-5">
                {"Timepiece & Calibre"}
              </div>
              <div className="col-span-2 text-right">
                {"Unit Price"}
              </div>
              <div className="col-span-2 text-center">
                {"Allocation Qty"}
              </div>
              <div className="col-span-3 text-right">
                {"Line Total & Escrow"}
              </div>
            </div>
            <div className="flex flex-col">
              <CartItem cartKey="aster" className="p-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                  <div className="col-span-12 md:col-span-5 flex items-start gap-space-md">
                    <div className="w-20 h-20 bg-surface-container-high rounded-DEFAULT shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="High horology Aster No. 04 luxury mechanical watch with deep midnight blue sunburst dial, polished steel indices, curved AR sapphire crystal and surgical grade 316L stainless steel case, luxury studio lighting with dark emerald and gold reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHE9K8aD_r2nMsbJbLCJjp_7shyV1zDBKsQ3PnoZj6veocyj9xSLRxr720s7GWS0laOCjRPxALXUbd1mtukfSW_xfgAE6Icg2yQ4Szu4Q-vvO-_3H7c36vYF4lqHk_E82cUV7jGFeUUdn2awwrWIGd65l9nSzqvvG-8CCVjWq9_pXqZPd2mZATx16SJ2FNfS2TG2P6kXR3GAnzIKnjqCSGpvrMQzbkLNUK8_SDVq9e-rarAeOdPBbV" />
                      <span className="absolute top-1 left-1 bg-primary text-on-primary font-mono text-[9px] px-1 py-0.5 rounded-DEFAULT">
                        {"AUTO"}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold font-mono">
                          {"AST-N04-BLU"}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary">
                        </span>
                        <span className="font-label-sm text-[10px] text-outline font-mono">
                          {"SECURED"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                        {"Aster No.04 Automatic"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                        {"\n                      40mm × 11.2mm • Calibre AH-904 (28,800 vph) • AR Double-Domed Sapphire • Midnight Blue Sunburst\n                    "}
                      </p>
                      <div className="flex items-center gap-space-xs mt-1">
                        <span className="material-symbols-outlined text-secondary text-[14px]">
                          {"verified"}
                        </span>
                        <span className="font-label-sm text-[11px] text-outline font-mono uppercase">
                          {"COSC Precision Baseline"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 md:text-right flex md:flex-col justify-between items-baseline md:items-end">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Unit Price:"}
                    </span>
                    <div className="flex flex-col md:items-end">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                        {"₹18,990"}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline line-through font-mono">
                        {"₹21,990"}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 flex items-center justify-end md:justify-center">
                    <div className="flex items-center bg-surface-container px-space-xs py-1 rounded-DEFAULT shadow-sm">
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="decrease" type="button">
                        {"-"}
                      </button>
                      <span className="w-8 text-center font-headline-sm text-[15px] font-mono text-primary font-bold qty-value"><CartQty cartKey="aster"/></span>
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="increase" type="button">
                        {"+"}
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between md:items-end items-center">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Line Total:"}
                    </span>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold font-mono line-total">
                        {"₹18,990"}
                      </div>
                      <span className="font-label-sm text-[10px] text-on-secondary-container font-mono uppercase">
                        {"Held in Escrow"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm mt-space-sm bg-surface-container-low/50 px-space-sm py-1 rounded-DEFAULT text-label-sm font-label-sm">
                  <div className="flex items-center gap-space-md">
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"tune"}
                      </span>
                      {" Edit Configuration\n                  "}
                    </button>
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"archive"}
                      </span>
                      {" Move to Vault\n                  "}
                    </button>
                  </div>
                  <button className="text-error hover:text-error-container transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[15px]">
                      {"close"}
                    </span>
                    {" Remove Item\n                "}
                  </button>
                </div>
              </CartItem>
              <div className="h-px bg-surface-container">
              </div>
              <CartItem cartKey="heritage" className="p-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                  <div className="col-span-12 md:col-span-5 flex items-start gap-space-md">
                    <div className="w-20 h-20 bg-surface-container-high rounded-DEFAULT shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="Heritage Field 40 military grade tactical automatic watch, matte olive dial with high contrast C3 Super-LumiNova indexes, brushed gunmetal case and artisanal saddle brown bridle leather strap on neutral textured stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACeqRH9uUBjXs19sYJDB2e4GGvFe-qnpRD5uw5JzdRyDRcLsYIVC-fZkUWSNC3kosAAqwF0cWksE3ve_2xeCJnzW7-gpkDMtrFo-tRFkyVxnRRoi-cnGzUwOVIBzD8ty5b4DXyloPj4ilDccf7hIEja6f3Cbu89uB9QFLowpZMoX2lQgCXv_E8ZxCEuHFIxXXLUeiG4CvP8o-YJL447NmkY3OKgrPabOpsALXDGZvuBvSyV99iYjDx" />
                      <span className="absolute top-1 left-1 bg-primary text-on-primary font-mono text-[9px] px-1 py-0.5 rounded-DEFAULT">
                        {"FIELD"}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold font-mono">
                          {"HFO-OPS-02"}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary">
                        </span>
                        <span className="font-label-sm text-[10px] text-outline font-mono">
                          {"ALLOCATED"}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                        {"Heritage Field 40"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                        {"\n                      40mm • Calibre NH35 Automatic • C3 Super-LumiNova • Matte Olive • Hand-stitched Saddle Leather\n                    "}
                      </p>
                      <div className="flex items-center gap-space-xs mt-1">
                        <span className="material-symbols-outlined text-secondary text-[14px]">
                          {"shield"}
                        </span>
                        <span className="font-label-sm text-[11px] text-outline font-mono uppercase">
                          {"100M Mil-Spec Pressure Tested"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 md:text-right flex md:flex-col justify-between items-baseline md:items-end">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Unit Price:"}
                    </span>
                    <div className="flex flex-col md:items-end">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                        {"₹14,290"}
                      </span>
                      <span className="font-label-sm text-[11px] text-outline font-mono">
                        {"REGULAR RUN"}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 flex items-center justify-end md:justify-center">
                    <div className="flex items-center bg-surface-container px-space-xs py-1 rounded-DEFAULT shadow-sm">
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="decrease" type="button">
                        {"-"}
                      </button>
                      <span className="w-8 text-center font-headline-sm text-[15px] font-mono text-primary font-bold qty-value"><CartQty cartKey="heritage"/></span>
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="increase" type="button">
                        {"+"}
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between md:items-end items-center">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Line Total:"}
                    </span>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold font-mono line-total">
                        {"₹14,290"}
                      </div>
                      <span className="font-label-sm text-[10px] text-on-secondary-container font-mono uppercase">
                        {"Held in Escrow"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm mt-space-sm bg-surface-container-low/50 px-space-sm py-1 rounded-DEFAULT text-label-sm font-label-sm">
                  <div className="flex items-center gap-space-md">
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"tune"}
                      </span>
                      {" Edit Configuration\n                  "}
                    </button>
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"archive"}
                      </span>
                      {" Move to Vault\n                  "}
                    </button>
                  </div>
                  <button className="text-error hover:text-error-container transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[15px]">
                      {"close"}
                    </span>
                    {" Remove Item\n                "}
                  </button>
                </div>
              </CartItem>
              <div className="h-px bg-surface-container">
              </div>
              <CartItem cartKey="atlas" className="p-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-center">
                  <div className="col-span-12 md:col-span-5 flex items-start gap-space-md">
                    <div className="w-20 h-20 bg-surface-container-high rounded-DEFAULT shrink-0 overflow-hidden relative">
                      <img className="w-full h-full object-cover" data-alt="Modern Atlas S4 Dual GPS connected chronometer crafted in Grade 5 satin titanium with AMOLED high density matrix display, ceramic bezel ring, high grade charcoal FKM rubber strap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF89MW5hbOGhm3WInVDdW8Up-Ll04Akv_pqttwsEIw64W942vUCO8dy1jCk6PiNbziQQJjNO5x0l02vr-7pSvgQhk5N6l4Y_5lFt9Y4ktyaj8A7OPzRmuoC7r4MQ0OP-gRMXZThZ1HP0wf9jZb2faodwifK-sIUFhMzUSebHZbzmL533g9RDtXt7TfiFO0hvfapp8y0eIkQNDqNEYFJgNtx6YesFjdLMYyiiirK06tUUnLHkdyl2Ts" />
                      <span className="absolute top-1 left-1 bg-secondary text-on-secondary font-mono text-[9px] px-1 py-0.5 rounded-DEFAULT font-bold">
                        {"TITANIUM"}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold font-mono">
                          {"AT-S4-TITAN"}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary">
                        </span>
                        <span className="font-label-sm text-[10px] text-outline font-mono">
                          {"LIMITED ED."}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                        {"Atlas S4 Dual GPS"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                        {"\n                      44mm • Grade 5 Aerospace Titanium • Dual-Band L1+L5 GNSS • 10 ATM Waterproof • Charcoal FKM Strap\n                    "}
                      </p>
                      <div className="flex items-center gap-space-xs mt-1">
                        <span className="material-symbols-outlined text-secondary text-[14px]">
                          {"satellite_alt"}
                        </span>
                        <span className="font-label-sm text-[11px] text-outline font-mono uppercase">
                          {"Multi-Constellation Sync Tested"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 md:text-right flex md:flex-col justify-between items-baseline md:items-end">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Unit Price:"}
                    </span>
                    <div className="flex flex-col md:items-end">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                        {"₹13,990"}
                      </span>
                      <span className="font-label-sm text-[11px] text-outline font-mono">
                        {"TI-GRADE 5"}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 flex items-center justify-end md:justify-center">
                    <div className="flex items-center bg-surface-container px-space-xs py-1 rounded-DEFAULT shadow-sm">
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="decrease" type="button">
                        {"-"}
                      </button>
                      <span className="w-8 text-center font-headline-sm text-[15px] font-mono text-primary font-bold qty-value"><CartQty cartKey="atlas"/></span>
                      <button className="w-7 h-7 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-DEFAULT transition-colors font-mono" data-cart-action="increase" type="button">
                        {"+"}
                      </button>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:flex-col justify-between md:items-end items-center">
                    <span className="font-label-sm text-label-sm text-outline md:hidden font-mono uppercase">
                      {"Line Total:"}
                    </span>
                    <div className="text-right">
                      <div className="font-headline-sm text-headline-sm text-primary font-bold font-mono line-total">
                        {"₹13,990"}
                      </div>
                      <span className="font-label-sm text-[10px] text-on-secondary-container font-mono uppercase">
                        {"Held in Escrow"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm mt-space-sm bg-surface-container-low/50 px-space-sm py-1 rounded-DEFAULT text-label-sm font-label-sm">
                  <div className="flex items-center gap-space-md">
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"tune"}
                      </span>
                      {" Edit Configuration\n                  "}
                    </button>
                    <button className="text-outline hover:text-primary transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="save" type="button">
                      <span className="material-symbols-outlined text-[15px]">
                        {"archive"}
                      </span>
                      {" Move to Vault\n                  "}
                    </button>
                  </div>
                  <button className="text-error hover:text-error-container transition-colors flex items-center gap-1 font-mono uppercase" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[15px]">
                      {"close"}
                    </span>
                    {" Remove Item\n                "}
                  </button>
                </div>
              </CartItem>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-DEFAULT shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    {"local_shipping"}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    {"Armored Logistics Routing"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                  {"\n                Enter your municipal postal code to calculate insured armored escort routing windows.\n              "}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center bg-surface-container-low rounded-DEFAULT p-1">
                  <input className="w-full bg-transparent border-0 px-space-sm py-1 font-mono font-bold text-primary text-body-md focus:outline-none" maxLength="6" type="text" value="560001" />
                  <button className="bg-primary text-on-primary px-space-md py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-widest font-mono hover:bg-primary-container transition-colors shrink-0" data-cart-action="coupon" type="button">
                    {"\n                  VERIFY\n                "}
                  </button>
                </div>
                <div className="flex items-center gap-space-xs text-on-secondary-container font-mono text-[11px]">
                  <span className="material-symbols-outlined text-[14px]">
                    {"check_circle"}
                  </span>
                  <span>
                    {"Bengaluru Atelier Transit Hub: Dispatch within 24 Hours"}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-DEFAULT shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    {"lock_clock"}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    {"Atelier Vault Reserve (1)"}
                  </span>
                </div>
                <span className="font-label-sm text-[11px] text-outline font-mono uppercase">
                  {"Held 14 Days"}
                </span>
              </div>
              <div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-DEFAULT my-space-xs">
                <div className="w-12 h-12 bg-surface-container-highest rounded-DEFAULT shrink-0 overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Voyager GMT 41 mechanical aviator watch with dual tone ceramic bezel in deep teal and gold, cream dial, matte steel case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXiNJSPtKeVecUtEvRYTY1BJ-qRyCBPdHp_2ALh-EdBiQqbSAp40uOjehtfLHZWBIkHEXvLPPrC9LD6t3z8oIAW_BpEgonM-ZsQjC2F8Kx6xtvKmz9csqg_-i7wZGXeHu9EHn-RrJDi60QsoEkK9-iEWsA88dB9Hw7T8_uSFQESacFOHCOnoJGxo57lZcaN9rpbzpgcOK6A1Sqw4PQLDPZ8WPHKczdfKM6jYyWrMlTXMk7Y8KNaO0" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-label-md text-label-md text-primary font-bold truncate">
                    {"Voyager GMT 41"}
                  </div>
                  <div className="font-mono text-label-sm text-on-surface-variant">
                    {"Ref: V-GMT-412 • ₹25,990"}
                  </div>
                </div>
                <button className="text-secondary hover:text-primary p-1 transition-colors" title="Restore to Manifest" type="button" data-cart-action="accessory" data-accessory-name="Voyager GMT 41" data-accessory-price="25990">
                  <span className="material-symbols-outlined text-[20px]">
                    {"add_shopping_cart"}
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-between text-label-sm font-label-sm pt-1">
                <span className="text-outline font-mono">
                  {"Price Locked Against Forex Fluctuations"}
                </span>
                <a className="text-primary font-bold uppercase hover:underline font-mono" href="#">
                  {"View Vault"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-36">
          <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT shadow-sm">
            <div className="flex items-center justify-between mb-space-md pb-space-xs bg-surface-container-low p-space-sm rounded-DEFAULT">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  {"receipt_long"}
                </span>
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                  {"Acquisition Ledger"}
                </span>
              </div>
              <span className="font-mono font-bold text-label-sm text-outline">
                {"MANIFEST #8841-A"}
              </span>
            </div>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant font-mono uppercase text-label-sm">
                  {"Escrow Subtotal (3 Items)"}
                </span>
                <span className="font-mono font-bold text-primary text-body-md" id="subtotal-display"><CartAmount kind="subtotal"/></span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-on-surface-variant font-mono uppercase text-label-sm">
                    {"Calibre Regulation & Bench Test"}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[14px]" title="Includes multi-position timing machine verification">
                    {"help"}
                  </span>
                </div>
                <span className="font-mono text-secondary font-semibold">
                  {"₹0 (Complimentary)"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-on-surface-variant font-mono uppercase text-label-sm">
                    {"Insured Armored Escort Transit"}
                  </span>
                  <span className="material-symbols-outlined text-outline text-[14px]" title="Covered 100% under Lloyd's of London horological transit protocol">
                    {"shield"}
                  </span>
                </div>
                <span className="font-mono text-secondary font-semibold">
                  {"FREE (Above ₹1,999)"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant font-mono uppercase text-label-sm">
                  {"Applicable GST (18% Included)"}
                </span>
                <span className="font-mono text-outline" id="gst-display"><CartAmount kind="tax"/></span>
              </div>
              <div className="h-px bg-surface-container my-space-xs">
              </div>
              <div className="flex items-baseline justify-between pt-space-xs">
                <div>
                  <span className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold block">
                    {"Manifest Total"}
                  </span>
                  <span className="font-label-sm text-[10px] text-outline font-mono uppercase">
                    {"256-Bit Escrow Vault Protected"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-headline-md text-headline-md font-bold text-primary font-mono block leading-none" id="total-display"><CartAmount kind="total"/></span>
                  <span className="font-label-sm text-[10px] text-secondary font-mono">
                    {"Net Payable In Escrow"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm mt-space-lg">
              <button className="w-full h-12 bg-primary-container text-on-primary rounded-DEFAULT font-label-lg text-label-lg uppercase tracking-widest font-bold flex items-center justify-center gap-space-sm hover:bg-primary transition-all shadow-md active:scale-[0.99]" data-cart-action="checkout" type="button">
                <span className="material-symbols-outlined text-[20px]">
                  {"enhanced_encryption"}
                </span>
                <span>
                  {"Proceed to Certified Checkout"}
                </span>
              </button>
              <button className="w-full py-2.5 bg-surface-container text-primary rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider font-semibold flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-colors" data-cart-action="export" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  {"download_for_offline"}
                </span>
                <span>
                  {"Export Manifest (PDF / Escrow Receipt)"}
                </span>
              </button>
            </div>
            <div className="mt-space-lg bg-surface-container-low p-space-sm rounded-DEFAULT flex flex-col gap-1.5">
              <div className="flex items-center gap-space-xs text-primary font-bold text-label-sm uppercase font-mono">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  {"verified_user"}
                </span>
                <span>
                  {"Horological Escrow Guarantee"}
                </span>
              </div>
              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                {"\n              Every timepiece calibrated across 5 positions. Zero funds transferred to seller until 7-day atelier caliber tolerance verification window concludes. Micro-checked against ISO 1413 shock & DIN 8309 antimagnetic guidelines.\n            "}
              </p>
              <div className="flex items-center justify-between pt-1 font-label-sm text-[10px] text-outline font-mono uppercase">
                <span>
                  {"GENEVA COMPLIANT"}
                </span>
                <span>
                  {"ESCROW #AMH-2025"}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-sm rounded-DEFAULT shadow-sm flex items-center justify-between font-label-sm text-label-sm">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-mono">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                {"support_agent"}
              </span>
              <span>
                {"Concierge: +91 (800) CHRONO"}
              </span>
            </div>
            <a className="text-primary font-bold uppercase hover:underline font-mono" href="#">
              {"Live Session"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
