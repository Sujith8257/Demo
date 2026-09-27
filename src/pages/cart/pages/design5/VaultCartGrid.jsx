import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function VaultCartGrid(){
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                {"Items in Cart (3)"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-mono">
                {"EST. DELIVERY: 48 HOURS"}
              </span>
            </div>
            <CartItem cartKey="aster" className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row gap-space-md items-center justify-between group transition-all hover:shadow-md">
              <div className="relative w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-surface-container-low shrink-0 flex items-center justify-center">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High horology Aster No.04 automatic watch resting on natural raw linen and polished walnut desk, showing off a champagne dial with petrol blue hands, macro precision detail, soft studio illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZGF94BUSqmAvbvEt-jyT8AFNi8yzdfdXVD91my-i8BLN_5Ra6FC4MXkGL9XA63kFtfvfzjebmHyu9n8IwQhs81AGfNA9MlmC12uZKYTXvAJCILK3Kq5rZTOZ3qyEIEQfhdPvEneJrTU9bFC2eGpLtytpXBhgEWZbrYuSyOwFC2MpdIMz5JgGAQf-z8njSe5ai31-QQAzehhxLa0saC8KoJ9qYe2rbBXSZbAxroFmB6oMovk7UuP4" />
                <span className="absolute top-2 left-2 bg-primary text-on-primary font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-wider">
                  {"Calibre 9015"}
                </span>
              </div>
              <div className="flex flex-col flex-1 min-w-0 w-full gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                  <span>
                    {"Atelier Aster"}
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span className="text-outline">
                    {"Mechanical"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                  {"Aster No. 04 Automatic"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  {"39mm 316L Steel • Champagne Sunburst Dial • Italian Bridle Calfskin"}
                </p>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-DEFAULT">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      {"verified_user"}
                    </span>
                    {" Master Chronometer Test\n                "}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">
                    {"Ref: AST-04-CH"}
                  </span>
                </div>
              </div>
              <div className="flex sm:flex-col items-end justify-between sm:justify-center w-full sm:w-auto gap-space-sm shrink-0">
                <div className="text-right">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹18,990"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Excl. Milestone Case"}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-low px-2 py-1 rounded-DEFAULT">
                  <button aria-label="Decrease quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="decrease" type="button">
                    {"−"}
                  </button>
                  <span className="font-label-md text-label-md font-mono text-on-surface px-1"><CartQty cartKey="aster"/></span>
                  <button aria-label="Increase quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                </div>
              </div>
            </CartItem>
            <CartItem cartKey="heritage" className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row gap-space-md items-center justify-between group transition-all hover:shadow-md">
              <div className="relative w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-surface-container-low shrink-0 flex items-center justify-center">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Heritage Field 40 millimeter vintage field watch on distressed deep brown leather strap with matte cream dial, railway indices, warm natural heirloom atmosphere on rich slate surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeqFFo17LzrBAMSNTJBOMSdR8n8u_W4cryAD40bzIHPkBzYVdC74br38cRandwmFgcB5A89cMwxMumVEKL5iJCUshiYehHnML0ktYY3O6SbADBoUY1S4uHEmY8wV3JEmV6FNot6S_IdrN9l_RkplfnHrmGzHPkFr-ybXhU2ZqGZ47Q0325ahPGR47fxzZ_d6eC7kwbnjjiSbg7vu23a24yqsURHCjhDOfOufeuJwdc66bWYSDmw3BV" />
                <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-wider">
                  {"Manual Wind"}
                </span>
              </div>
              <div className="flex flex-col flex-1 min-w-0 w-full gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                  <span>
                    {"Vanguard Series"}
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span className="text-outline">
                    {"Collector Edition"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                  {"Heritage Field 40"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  {"40mm Bead-Blasted Case • Box Sapphire Crystal • 100m Depth"}
                </p>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-DEFAULT">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      {"inventory_2"}
                    </span>
                    {" Archival Wooden Box\n                "}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">
                    {"Ref: HF-40-VNG"}
                  </span>
                </div>
              </div>
              <div className="flex sm:flex-col items-end justify-between sm:justify-center w-full sm:w-auto gap-space-sm shrink-0">
                <div className="text-right">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹14,290"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Standard Packaging"}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-low px-2 py-1 rounded-DEFAULT">
                  <button aria-label="Decrease quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="decrease" type="button">
                    {"−"}
                  </button>
                  <span className="font-label-md text-label-md font-mono text-on-surface px-1"><CartQty cartKey="heritage"/></span>
                  <button aria-label="Increase quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                </div>
              </div>
            </CartItem>
            <CartItem cartKey="atlas" className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row gap-space-md items-center justify-between group transition-all hover:shadow-md">
              <div className="relative w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-surface-container-low shrink-0 flex items-center justify-center">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Atlas S4 modern hybrid sports horology watch resting against matte ceramic stand, titanium chassis with subtle champagne gold accent ring, luxury tactical aesthetics, clean bright morning illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6fXPeyxhQpjIFxr8cX5WofxbvWa6xU9QAwcpsaBFpdPMiqPIH_yRhBQwCALw76UECsLj-so8bqcicsiAO1hh0P53pmT1gf5VSRbXJD9pdRqPOZujaQa5Cn0dQSL_7z9fn238evHXQglKcjKNxbVP5GTDswWoeNGL5PmmQu8Z_tOib07FcEOmc-t9hSzx7NlUbkF_VFLGy4-hTu6cakzzwVoi95UAaLj_8pUrgTaPRZCKajNBDJqU" />
                <span className="absolute top-2 left-2 bg-primary-container text-on-primary font-label-sm text-[9px] uppercase px-1.5 py-0.5 rounded-DEFAULT font-bold tracking-wider">
                  {"Titanium Grade 5"}
                </span>
              </div>
              <div className="flex flex-col flex-1 min-w-0 w-full gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                  <span>
                    {"Meridian Lab"}
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span className="text-outline">
                    {"Connected Escapement"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                  {"Atlas S4 GPS Chronometer"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  {"Multi-Band Satellite Sync • Solar Sapphire • FKM Rubber Strap"}
                </p>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-DEFAULT">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      {"workspace_premium"}
                    </span>
                    {" Dual Cert Geneva Seal\n                "}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">
                    {"Ref: ATL-S4-TIT"}
                  </span>
                </div>
              </div>
              <div className="flex sm:flex-col items-end justify-between sm:justify-center w-full sm:w-auto gap-space-sm shrink-0">
                <div className="text-right">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">
                    {"₹13,990"}
                  </span>
                  <span className="block font-label-sm text-label-sm text-outline">
                    {"Charging Vault Incl."}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-low px-2 py-1 rounded-DEFAULT">
                  <button aria-label="Decrease quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="decrease" type="button">
                    {"−"}
                  </button>
                  <span className="font-label-md text-label-md font-mono text-on-surface px-1"><CartQty cartKey="atlas"/></span>
                  <button aria-label="Increase quantity" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-label-sm font-bold" data-cart-action="increase" type="button">
                    {"+"}
                  </button>
                </div>
              </div>
            </CartItem>
          </div>
          <div className="relative bg-secondary-fixed/30 rounded-full p-1 overflow-hidden shadow-md">
            <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-space-lg md:p-space-xl flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-start gap-space-md">
                  <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[28px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                      {"redeem"}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                        {"BESPOKE VAULT UPGRADE"}
                      </span>
                      <span className="bg-secondary text-on-secondary font-label-sm text-[9px] font-bold px-1.5 py-0.5 rounded-DEFAULT uppercase">
                        {"Archival Edition"}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
                      {"Milestone Heirloom Presentation Coffret"}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"\n                    Transform your delivery into an indelible personal ceremony with solid walnut casing, hand-poured wax seal, and personal dedication.\n                  "}
                    </p>
                  </div>
                </div>
                <label className="flex items-center gap-space-sm bg-surface-container px-space-md py-space-sm rounded-lg cursor-pointer hover:bg-secondary-fixed/40 transition-colors shrink-0">
                  <input defaultChecked className="w-5 h-5 accent-primary rounded cursor-pointer" id="giftToggle" type="checkbox" />
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-primary font-bold">
                      {"Prepare as Gift Suite"}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
                      {"+₹1,200 All-Inclusive"}
                    </span>
                  </div>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="relative rounded-lg overflow-hidden h-36 bg-surface-container-low group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal solid walnut presentation watch box with aged brass quadrant hinges and velvet cream interior, handcrafted joinery, museum heirloom aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOrHiVZlGts3YMoMZoHBbdsn75vwK0kwSCilbXcoKr0u_UAZJsTywNZJ5QuqzrP0T0IEVzo8WRSWweRBaljf3h2xPJLkf--sHdab0aEuyLvUl38dJJ0crHbkv_D9DsMXuoILG6Y84U_VB4jhJXi5gGeQv620Yd2whaKWylvlzc3uhilftglsF4tZkY65jvv6NBXxDKsaDsHvQTBVt078MWyD6Pejk4dmSbGj95yLsGs3PiGepgwO31" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold tracking-wider">
                      {"Solid Walnut Coffret"}
                    </span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-36 bg-surface-container-low group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of a deep emerald green wax seal stamped with an intricate horology escapement insignia on textured cream letterpress paper with deckled edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0nItRtYctzbpYSBKfdBHEFEool_K6ChCnirGL2dRs-LPNWVQYlK9Of24vAdq8eVl5lFFsulBd1v9ZRQcUkBcHNJKOiz_4f3hndm9EYH0OLd5MSMnzf-lsFYlOF2Mw7BhNIq9oi2zyOp3mU5MmYcPKn9e6pdh_eC-Np4GjxIg3VTUJTB8XhUosQWXe7HXkdT_04KPdyFjWxYIxwk_fw8JPdCJZpfrowjWEq3pSmiLXkXaCGkKCr648" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold tracking-wider">
                      {"Letterpress Certificate & Wax Seal"}
                    </span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden h-36 bg-surface-container-low group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Heavy brushed solid brass plaque custom engraved with commemorative serif dedication message, subtle lighting reflections highlighting precision bevels." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMuWkKCNwNC--gEuKlIpV8V4YOwPg-o9BZKef2_3cSGeaQ9v28DcOu-_kLXUVS1MkwNZw7ICt31v7fktkavqIhOOIsdQGBzEnF01jsXOSVUNUOPz8yTNeUtFusQBUtE8fbLW2gaHDxq7JZPujz5rGv0LetF9r_yhSv2MZCgiD8hbNhD-oLYcjP_0wEkFvlh6IPZZvHD5fXwYvXyAlwf1pVRiYr6NVU9bjU0Fd8pr95ofoq8fHn7TtE" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-sm">
                    <span className="font-label-sm text-label-sm text-on-primary uppercase font-bold tracking-wider">
                      {"Laser Brass Plaque"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider" htmlFor="plateText">
                      {"Custom Engraved Brass Plate Dedication"}
                    </label>
                    <span className="font-label-sm text-label-sm text-outline font-mono">
                      {"42 / 65 characters"}
                    </span>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner" id="plateText" type="text" value="To Arthur — Celebrating 30 Years of Precision" />
                    <span className="absolute right-3 top-2.5 material-symbols-outlined text-outline text-[18px]">
                      {"history_edu"}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-outline">
                    {"Will be diamond-drag engraved into 1.5mm brushed horological brass and affixed within the lid interior."}
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider" htmlFor="giftLetter">
                    {"Calligraphic Letterpress Message (Enclosed in Wax Envelope)"}
                  </label>
                  <textarea className="w-full bg-surface-container-lowest p-space-md rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner" id="giftLetter" placeholder="Enter your heartfelt message. Our atelier scribe will transcribe this in archival ink..." rows="2">
                    {"May your journey forward keep rhythm with passion, quiet excellence, and the relentless measure of genuine ambition."}
                  </textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                  <label className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                    <input defaultChecked className="w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox" />
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                        {"Discreet Gifting Invoice"}
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        {"Omit all prices from package and customs slips"}
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                    <input defaultChecked className="w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox" />
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                        {"Heirloom Provenance Ledger"}
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        {"Include blank generational lineage transfer leaf"}
                      </span>
                    </div>
                  </label>
                </div>
                <details className="group bg-surface-container-lowest p-space-md rounded-lg">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        {"local_shipping"}
                      </span>
                      <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
                        {"Recipient Direct Delivery Details"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      {"expand_more"}
                    </span>
                  </summary>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-md mt-space-sm border-t border-surface-container">
                    <input className="bg-surface-container-low px-space-md py-space-sm rounded-lg text-body-sm text-on-surface focus:outline-none" placeholder="Recipient Full Legal Name" type="text" value="Arthur Montgomery" />
                    <input className="bg-surface-container-low px-space-md py-space-sm rounded-lg text-body-sm text-on-surface focus:outline-none" placeholder="Confidential Courier Contact" type="tel" value="+91 98200 44129" />
                    <input className="bg-surface-container-low px-space-md py-space-sm rounded-lg text-body-sm text-on-surface focus:outline-none sm:col-span-2" placeholder="Private Residence / Atelier Address" type="text" value="Apartment 42B, The Oberoi Enclave" />
                    <div className="flex items-center gap-space-xs sm:col-span-2 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        {"info"}
                      </span>
                      <span>
                        {"Direct recipient tracking notifications can be delayed until specified milestone date."}
                      </span>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-40">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">
                {"Order Summary"}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                {"AUTHENTICATED"}
              </span>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant font-body-sm">
                <span>
                  {"Subtotal (3 Items)"}
                </span>
                <span className="font-mono text-on-surface font-semibold"><CartAmount kind="subtotal"/></span>
              </div>
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant font-body-sm">
                <span className="flex items-center gap-1">
                  <span>
                    {"Gift Packaging"}
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    {"redeem"}
                  </span>
                </span>
                <span className="font-mono text-secondary font-bold"><CartAmount kind="gift"/></span>
              </div>
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant font-body-sm">
                <span className="flex items-center gap-1">
                  <span>
                    {"Express Delivery"}
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-outline">
                    {"verified"}
                  </span>
                </span>
                <span className="font-mono text-tertiary-container font-bold uppercase tracking-wider text-[11px] bg-secondary-fixed/50 px-1.5 py-0.5 rounded-DEFAULT">
                  {"FREE"}
                </span>
              </div>
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant font-body-sm">
                <span>
                  {"Transit Insurance"}
                </span>
                <span className="font-mono text-on-surface">
                  {"Included"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg flex items-baseline justify-between mt-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline block">
                  {"Total Amount"}
                </span>
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">
                  {"Zero Transaction Surcharge"}
                </span>
              </div>
              <div className="text-right">
                <span className="font-headline-md text-headline-md text-primary font-bold font-mono"><CartAmount kind="total"/></span>
                <span className="block font-label-sm text-label-sm text-outline font-mono">
                  {"INR NETT"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <button className="w-full bg-primary-container text-on-primary hover:bg-primary transition-colors py-space-md px-space-lg rounded-DEFAULT font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-sm shadow-sm group" data-cart-action="checkout" type="button">
                <span>
                  {"Proceed to Checkout"}
                </span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                  {"arrow_forward"}
                </span>
              </button>
              <button className="w-full bg-transparent hover:bg-surface-container py-space-sm text-primary transition-colors rounded-DEFAULT font-label-md text-label-md font-semibold flex items-center justify-center gap-space-xs" data-cart-action="save-config" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  {"bookmark_add"}
                </span>
                <span>
                  {"Save for Later"}
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  {"verified"}
                </span>
                <span className="font-body-sm text-body-sm">
                  {"256-bit Secure Encryption"}
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  {"flight_takeoff"}
                </span>
                <span className="font-body-sm text-body-sm">
                  {"GPS Tracked Express Delivery"}
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  {"restore"}
                </span>
                <span className="font-body-sm text-body-sm">
                  {"7-Day Return Guarantee"}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-high/60 p-space-md rounded-xl flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                {"support_agent"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                {"Atelier Concierge Hotline"}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Need advice on caliber selections or bespoke hand-engravings? "}
                <a className="text-secondary font-bold underline" href="#">
                  {"Connect via Vault Chat"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
