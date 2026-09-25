import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function CartColumns(){
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <CartItem cartKey="atlas" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md relative group transition-all" id="item-atlas">
            <div className="w-full md:w-44 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center p-space-sm">
              <img className="object-contain w-full h-full mix-blend-multiply" data-alt="Technical high-precision smartwatch with black titanium casing, vibrant AMOLED dial displaying dual GPS telemetry and heart rate, sitting on neutral studio slate backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtlp_nZxBQ14cg6oXr9MeTQmHPww4taVIiOlOcx1cEa84rHscAuLC8SB5aP66E2hHrhhwHYsnCpAK-oJEN4lw_HziidhkCwOy4rFDqmnly0GTfo3rcG181FimxBQIz7tI1cJm0DTzy7Tk52CvpjE4KCUdoBbXSPT3A-R_V0NrKRHpuoCzl2bTyGUdMDT5sLvCZMVvsx_VMioXfQg8SE4C4royRaoEqXTB-3jn9PLhyFpvSLjY7jkkD" />
              <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-[9px] px-1.5 py-0.5 rounded-DEFAULT tracking-widest uppercase font-bold">
                {"\n              SMART SPEC\n            "}
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                        {"ATLAS TELEMETRY"}
                      </span>
                      <span className="text-outline-variant font-mono">
                        {"•"}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline font-mono">
                        {"REF: AT-S4-TITAN"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                      {"Atlas S4 Dual GPS — Multisport Instrument"}
                    </h2>
                  </div>
                  <button className="text-outline hover:text-error transition-colors p-1" title="Remove Instrument" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[20px]">
                      {"delete_sweep"}
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-space-sm bg-surface-container-low p-space-xs rounded-DEFAULT my-space-sm font-label-sm text-label-sm text-on-surface-variant">
                  <div>
                    <span className="text-outline">
                      {"DIAL:"}
                    </span>
                    {" 44mm Extreme AMOLED"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"CHASSIS:"}
                    </span>
                    {" Grade 5 Ti (52g)"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"BAND:"}
                    </span>
                    {" FKM Jade (22mm QR)"}
                  </div>
                </div>
                <div className="flex items-center gap-space-xs mt-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                    {"verified"}
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">
                    {"iOS 16+ & Android 12+ Active Sync Verified"}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-space-sm mt-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="decrease" type="button">
                    {"-"}
                  </button>
                  <span className="w-8 text-center font-label-md text-label-md font-bold text-primary" id="qty-atlas"><CartQty cartKey="atlas"/></span>
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                  <button className="ml-space-sm font-label-sm text-label-sm text-outline hover:text-primary underline uppercase tracking-wider" data-cart-action="save" type="button">
                    {"Save for Later"}
                  </button>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-space-xs justify-end">
                    <span className="font-label-sm text-label-sm text-outline line-through">
                      {"₹16,490"}
                    </span>
                    <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded-DEFAULT font-bold">
                      {"15% OFF"}
                    </span>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">
                    {"₹13,990"}
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <CartItem cartKey="aster" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md relative group transition-all" id="item-aster">
            <div className="w-full md:w-44 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center p-space-sm">
              <img className="object-contain w-full h-full mix-blend-multiply" data-alt="High precision stainless steel diving watch with deep blue dial, rotating ceramic bezel, luminescent hands, photographed on dry dark brushed slate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_37PyZP2B47fmF4A5Ttca8eKDhqpBl2I3U0w7fM0no4uLVSlYfIsUDrnrem9zpX-KCtCwjfqDhku5cJV91HJ29TQ5_Uy05mQrK-RuFvcNtcujcbrImWW7Nb57sSQX7RyqJdMKvgQ8YKKdsfaAE0NWuyXboXdehfCLyNmJ5HFGkXnkZvA-ORzzbcBBEv3ft9XVjXBGNzkyJb1iYznl2G_j69KFs5cyFM1rwWim6HWbbf5i3AHRcz_" />
              <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-[9px] px-1.5 py-0.5 rounded-DEFAULT tracking-widest uppercase font-bold">
                {"\n              DIVER SPEC\n            "}
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                        {"ASTER ATELIER"}
                      </span>
                      <span className="text-outline-variant font-mono">
                        {"•"}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline font-mono">
                        {"REF: AST-N04-BLU"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                      {"Aster No.04 Automatic — Sports Diver Spec"}
                    </h2>
                  </div>
                  <button className="text-outline hover:text-error transition-colors p-1" title="Remove Instrument" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[20px]">
                      {"delete_sweep"}
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-space-sm bg-surface-container-low p-space-xs rounded-DEFAULT my-space-sm font-label-sm text-label-sm text-on-surface-variant">
                  <div>
                    <span className="text-outline">
                      {"WATER:"}
                    </span>
                    {" 100M Depth Integrity"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"CRYSTAL:"}
                    </span>
                    {" Double-Domed AR Sapphire"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"CROWN:"}
                    </span>
                    {" Screw-Down Gasket"}
                  </div>
                </div>
                <div className="flex items-center gap-space-xs mt-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    {"verified_user"}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                    {"ISO 6425 Certified Pressure Chamber Verified"}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-space-sm mt-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="decrease" type="button">
                    {"-"}
                  </button>
                  <span className="w-8 text-center font-label-md text-label-md font-bold text-primary" id="qty-aster"><CartQty cartKey="aster"/></span>
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                  <button className="ml-space-sm font-label-sm text-label-sm text-outline hover:text-primary underline uppercase tracking-wider" data-cart-action="save" type="button">
                    {"Save for Later"}
                  </button>
                </div>
                <div className="text-right">
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">
                    {"₹18,990"}
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <CartItem cartKey="heritage" className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col md:flex-row gap-space-md relative group transition-all" id="item-heritage">
            <div className="w-full md:w-44 h-48 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center p-space-sm">
              <img className="object-contain w-full h-full mix-blend-multiply" data-alt="Tactical military field watch with matte black case, high-contrast numerical markers, olive drab cordura tactical nylon strap on textured canvas surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQU89kFf4ejHWZPXFmP0ALn7DStw_-8UN1hp3D7HN_4HVjE_gqHK1jC6NnIdoJKn9PThms3sVTtDOu6udUW8fXqyY8KP3l-ZwprotOdXtM9XJA518A5RdL1qZrUdko_lY2goQP783iopBXha-XJddDSeVvaRtd9yAa4yNaxhSSvZ8Xha76dLUWoFHszep4BQ_prjFCKWEgMQpNTTzRIASfInHKq0cUeIq_eYyZDfuR2mDY1bn4Bozd" />
              <span className="absolute top-2 left-2 bg-on-surface-variant text-surface font-label-sm text-[9px] px-1.5 py-0.5 rounded-DEFAULT tracking-widest uppercase font-bold">
                {"\n              TACTICAL FIELD\n            "}
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                        {"HERITAGE FIELD OPS"}
                      </span>
                      <span className="text-outline-variant font-mono">
                        {"•"}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline font-mono">
                        {"REF: HFO-OPS-02"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                      {"Heritage Field 40 — Tactical Instrument"}
                    </h2>
                  </div>
                  <button className="text-outline hover:text-error transition-colors p-1" title="Remove Instrument" data-cart-action="remove" type="button">
                    <span className="material-symbols-outlined text-[20px]">
                      {"delete_sweep"}
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 gap-x-space-sm bg-surface-container-low p-space-xs rounded-DEFAULT my-space-sm font-label-sm text-label-sm text-on-surface-variant">
                  <div>
                    <span className="text-outline">
                      {"PROTECTION:"}
                    </span>
                    {" Shock Resistant Cage"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"RATING:"}
                    </span>
                    {" 10 ATM Integrity"}
                  </div>
                  <div>
                    <span className="text-outline">
                      {"STRAP:"}
                    </span>
                    {" Mil-Spec Cordura"}
                  </div>
                </div>
                <div className="flex items-center gap-space-xs mt-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                    {"radar"}
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">
                    {"Anti-Magnetic Escapement Inner Cage"}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-space-sm mt-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs">
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="decrease" type="button">
                    {"-"}
                  </button>
                  <span className="w-8 text-center font-label-md text-label-md font-bold text-primary" id="qty-heritage"><CartQty cartKey="heritage"/></span>
                  <button className="w-8 h-8 rounded-DEFAULT bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                  <button className="ml-space-sm font-label-sm text-label-sm text-outline hover:text-primary underline uppercase tracking-wider" data-cart-action="save" type="button">
                    {"Save for Later"}
                  </button>
                </div>
                <div className="text-right">
                  <div className="font-headline-sm text-headline-sm text-primary font-bold">
                    {"₹14,290"}
                  </div>
                </div>
              </div>
            </div>
          </CartItem>
          <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">
                  {"network_ping"}
                </span>
              </div>
              <div>
                <div className="font-label-md text-label-md uppercase font-bold text-primary">
                  {"Precision Sync Guarantee"}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  {"All timepieces pass 72-hour timing machine analysis before departure."}
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-32 h-8 text-secondary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 30">
                <path d="M0 15 L 20 15 L 30 5 L 45 25 L 60 12 L 75 18 L 85 2 L 100 22 L 120 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-40">
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col">
            <div className="flex items-center justify-between pb-space-sm">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"Order Telemetry"}
              </span>
              <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 rounded-DEFAULT text-outline font-mono">
                {"ENCRYPTED"}
              </span>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-lg my-space-sm">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-outline block mb-1">
                {"Armored Transit Estimator"}
              </label>
              <div className="flex items-center gap-space-xs">
                <input className="bg-surface-container-lowest px-space-sm py-1.5 rounded-DEFAULT font-label-md text-label-md text-on-surface w-full focus:outline-none" id="pincode-input" placeholder="Enter Pincode..." type="text" value="110001" />
                <button className="bg-surface-container text-on-surface px-space-sm py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase hover:bg-surface-container-high transition-colors whitespace-nowrap flex items-center gap-1" data-cart-action="pincode" type="button">
                  <span className="material-symbols-outlined text-[14px]">
                    {"my_location"}
                  </span>
                  <span>
                    {"Detect"}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-1 mt-1 text-tertiary-container font-label-sm text-[11px] font-semibold" id="pincode-status">
                <span className="material-symbols-outlined text-[13px]">
                  {"local_shipping"}
                </span>
                <span>
                  {"Express Secure Transit available — Dispatch within 24h"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm py-space-sm">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>
                  {"Selected Calibres Subtotal"}
                </span>
                <span className="font-mono font-semibold text-on-surface" id="summary-subtotal"><CartAmount kind="subtotal"/></span>
              </div>
              <div className="flex justify-between items-center text-tertiary-container font-semibold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    {"local_offer"}
                  </span>
                  {"\n                Performance Bundle Savings\n              "}
                </span>
                <span className="font-mono" id="summary-discount"><CartAmount kind="discount"/></span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="flex items-center gap-1">
                  {"\n                Armored Transit Insurance\n                "}
                  <span className="material-symbols-outlined text-[14px] text-outline" title="Includes 100% replacement valuation guarantee during carrier custody.">
                    {"info"}
                  </span>
                </span>
                <span className="font-mono text-tertiary-container uppercase font-bold text-label-sm">
                  {"Complimentary"}
                </span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant text-label-sm text-[11px]">
                <span>
                  {"Goods & Services Tax (18% Included)"}
                </span>
                <span className="font-mono text-outline" id="summary-gst"><CartAmount kind="tax"/></span>
              </div>
            </div>
            <div className="pt-space-sm flex justify-between items-baseline">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  {"Total Certified Value"}
                </span>
                <span className="font-label-sm text-[10px] text-outline-variant">
                  {"Inclusive of all duties"}
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-primary font-bold font-mono" id="summary-total"><CartAmount kind="total"/></span>
            </div>
            <button className="mt-space-md w-full bg-primary-container text-on-primary py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary transition-all flex items-center justify-center gap-space-xs shadow-md group" data-cart-action="checkout" type="button">
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed group-hover:translate-x-0.5 transition-transform">
                {"lock"}
              </span>
              <span>
                {"Proceed to Escrow Checkout"}
              </span>
            </button>
            <div className="grid grid-cols-2 gap-space-xs mt-space-md pt-space-sm font-label-sm text-[11px] text-outline">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  {"verified"}
                </span>
                <span>
                  {"Geneva Escapement Protocol"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  {"rotate_right"}
                </span>
                <span>
                  {"7-Day Return Inspection"}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                {"support_agent"}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-label-md text-label-md font-bold text-primary">
                {"Horology Specialist Online"}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                {"Direct consultation on strap fitment or calibre specs."}
              </div>
            </div>
            <button className="text-secondary font-label-sm text-label-sm font-bold uppercase hover:underline" type="button">
              {"Chat"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
