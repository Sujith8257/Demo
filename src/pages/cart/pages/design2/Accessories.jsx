import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function Accessories(){
  return (
    <>
      <div className="mt-space-xl pt-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">
                {"extension"}
              </span>
              {"\n            FIELD UPGRADES\n          "}
            </div>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              {"Compatible Field Hardware & Accessories"}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"Validated for fitment with Atlas S4, Aster No.04, and Heritage Field 40."}
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
            {"\n          Seamless Quick-Lock Attachment\n        "}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-36 bg-surface-container-low rounded-lg overflow-hidden mb-space-sm flex items-center justify-center p-space-xs relative">
                <img className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform" data-alt="Fluoroelastomer waterproof sport watch strap in alpine blaze orange with titanium buckle isolated on white studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOL3IayIte5TzfjEXa_CAxxxjpVlOUs_q5NEiJHFjJHWp1wNRSpmTI2mzMKBdxHAVMcTkIFD36cIZI6fGvZ0lEAvBkJ1idivJXUYtwIV2ucyAOCcMnQCVzln5eKceDaj050GRMSIjIwp4mU6MEKU8IxoBASkpGT9tuM_WVHTKpMtlpvtDU3-N5LXZegs7k9HAimXFCTMa2IOIsVVWVw35AMMwcqrul5xcnu5Npj4HghZZjJmc9RLg3" />
                <span className="absolute top-2 left-2 bg-surface-container-lowest text-outline font-label-sm text-[9px] px-1 py-0.5 rounded-DEFAULT font-mono">
                  {"\n                22MM SPEC\n              "}
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest mb-0.5">
                {"COMPATIBLE STRAP"}
              </div>
              <h3 className="font-label-lg text-label-lg text-primary font-bold line-clamp-1">
                {"Alpine Flare FKM Fluoro Strap 22mm"}
              </h3>
              <p className="font-body-sm text-body-sm text-outline text-[12px] mt-0.5">
                {"Hypoallergenic vulcanized rubber with quick-lock pins."}
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-lg text-label-lg font-bold text-primary font-mono">
                {"₹2,490"}
              </span>
              <button className="bg-tertiary-container text-on-tertiary px-space-sm py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-1 font-semibold" data-accessory-name="Alpine Flare FKM Strap" data-accessory-price="2490" data-cart-action="accessory" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"add"}
                </span>
                <span>
                  {"Add to Cart"}
                </span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-36 bg-surface-container-low rounded-lg overflow-hidden mb-space-sm flex items-center justify-center p-space-xs relative">
                <img className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform" data-alt="Brushed titanium magnetic fast charger puck with braided ballistic nylon cable coiled neatly on clean white marble." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-vc2AX1psi34oglvEDPcEFtFzj8aDMf7sA6ACKw9DfS4JfB_cTu511xKXvBc8TRZlYAQW46i17lVY0zsXb0QWKK-q7WBytmboIaAhCFdw6nPejmmgFEkpq5jxqocULEo3g5NEll70rAAK10xylNmel0x_9LnQr1aM-EFkwSeIpN4W2ia25zbnqheLYEeJWU3ZrejeXtQHt3bRF7j0sLbq4H0MxefX6S_tgZOmXLViFzBdwQD6S7rP" />
                <span className="absolute top-2 left-2 bg-surface-container-lowest text-outline font-label-sm text-[9px] px-1 py-0.5 rounded-DEFAULT font-mono">
                  {"\n                FAST DOCK\n              "}
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest mb-0.5">
                {"ENERGY INTERFACE"}
              </div>
              <h3 className="font-label-lg text-label-lg text-primary font-bold line-clamp-1">
                {"Titanium Magnetic Fast-Charge Puck"}
              </h3>
              <p className="font-body-sm text-body-sm text-outline text-[12px] mt-0.5">
                {"USB-C GaN compatible, 0-80% telemetry juice in 34 mins."}
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-lg text-label-lg font-bold text-primary font-mono">
                {"₹1,990"}
              </span>
              <button className="bg-tertiary-container text-on-tertiary px-space-sm py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-1 font-semibold" data-accessory-name="Titanium Fast-Charge Puck" data-accessory-price="1990" data-cart-action="accessory" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"add"}
                </span>
                <span>
                  {"Add to Cart"}
                </span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-36 bg-surface-container-low rounded-lg overflow-hidden mb-space-sm flex items-center justify-center p-space-xs relative">
                <img className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform" data-alt="Heavy duty ballistic tactical travel watch storage case open showing contoured dense high density EVA foam cutout on dark surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA770Q0soMmLmolRKzVv4mzKK1E-w9ckxSUJlrKkqxbvBYjNP9ULNLr3uAaS7RZqBbjl3gYykZN3LIpHJ04uvapJmWSHQhnWaMJzAFEeEA3fm6GqUkPudU5Z0TLiJfKmO6MSH-7I20564LqhkPMnjeoQJlZDbeoiUzldXM1d9g-XLbaFNL_nV7GOG7KcbAgg5ipuFWc6Sktvc_ZbwTyehiX_NWTMZTVYhaiVGPyaonNFRVnTIbilxdj" />
                <span className="absolute top-2 left-2 bg-surface-container-lowest text-outline font-label-sm text-[9px] px-1 py-0.5 rounded-DEFAULT font-mono">
                  {"\n                HARD VAULT\n              "}
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest mb-0.5">
                {"EXPEDITION VAULT"}
              </div>
              <h3 className="font-label-lg text-label-lg text-primary font-bold line-clamp-1">
                {"Ballistic Tactical Travel Vault"}
              </h3>
              <p className="font-body-sm text-body-sm text-outline text-[12px] mt-0.5">
                {"Crushproof shell with dense laser-cut EVA foam bed."}
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-lg text-label-lg font-bold text-primary font-mono">
                {"₹2,890"}
              </span>
              <button className="bg-tertiary-container text-on-tertiary px-space-sm py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-1 font-semibold" data-accessory-name="Ballistic Travel Vault" data-accessory-price="2890" data-cart-action="accessory" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"add"}
                </span>
                <span>
                  {"Add to Cart"}
                </span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-36 bg-surface-container-low rounded-lg overflow-hidden mb-space-sm flex items-center justify-center p-space-xs relative">
                <img className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform" data-alt="Micro-mechanical horology cleaning tools with precision micro-fiber buffing swabs and specialized anti-static liquid bottle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9WxkizUJQms86c88FntAZG1po3qCYwCoI_oG0uMYtnNYtazz7q3d9fUGMcmLOjc-vSCV-9ePsy9V4nHemO_3O7fJuzvq4DdKy-8SjLq1Zzo5PbB36LyTuDlA9iURgfvwU0j5eBEs7gefDvdmdSEsbDQ_JmL53vgw6LZONwhG-WeTHRg_ZB7sfY_hMeyh2jGrdcxdZB28oSb8pLg-m4kAucevHtkY-BnP5YwFKpx9Hd1VsTutYkwFF" />
                <span className="absolute top-2 left-2 bg-surface-container-lowest text-outline font-label-sm text-[9px] px-1 py-0.5 rounded-DEFAULT font-mono">
                  {"\n                LAB KIT\n              "}
                </span>
              </div>
              <div className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest mb-0.5">
                {"MAINTENANCE SPEC"}
              </div>
              <h3 className="font-label-lg text-label-lg text-primary font-bold line-clamp-1">
                {"Calibre Cleaning & Escapement Kit"}
              </h3>
              <p className="font-body-sm text-body-sm text-outline text-[12px] mt-0.5">
                {"Anti-static optical solution and micro-weave swabs."}
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-label-lg text-label-lg font-bold text-primary font-mono">
                {"₹990"}
              </span>
              <button className="bg-tertiary-container text-on-tertiary px-space-sm py-1.5 rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary transition-colors flex items-center gap-1 font-semibold" data-accessory-name="Calibre Cleaning Kit" data-accessory-price="990" data-cart-action="accessory" type="button">
                <span className="material-symbols-outlined text-[14px]">
                  {"add"}
                </span>
                <span>
                  {"Add to Cart"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
