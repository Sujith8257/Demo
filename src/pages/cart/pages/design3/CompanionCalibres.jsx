import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function CompanionCalibres(){
  return (
    <>
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-space-lg">
          <div className="flex items-center justify-between mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                {"Curated Additions"}
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
                {"Companion Dark Chamber Calibres"}
              </h2>
            </div>
            <div className="flex items-center gap-space-xs">
              <button aria-label="Previous recommendation" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="scroll-left" type="button">
                <span className="material-symbols-outlined text-[20px]">
                  {"arrow_back"}
                </span>
              </button>
              <button aria-label="Next recommendation" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors" data-cart-action="scroll-right" type="button">
                <span className="material-symbols-outlined text-[20px]">
                  {"arrow_forward"}
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden relative mb-space-sm flex items-center justify-center">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Deep dark minimalist watch with black ceramic bezel, matte carbon fiber dial, and sapphire display back isolated on light parchment surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRY1ibPwkvTG--2rfVTneS-GyPWk91CBdhlkr1Y8vrwGcA3TffOa_6_y10truSy_XIa27sSnmkPk69ZoC8GckHFSjpGuz3ApX2UZ0YslXuBCEGVo8qdnMe-3lmtTnr4yKmu5FMN2-Sn6nRS9IQ9z9hyiFGkRMyIqC25q7GVjjNRWeLt8dDQ4oPqDOfnJLwsxdFI2gZdgZ49lWz_5QdCG0qrabsyEWhJxj1xOtab8UzgCAzs44J3aKY" />
                  <span className="absolute top-2 right-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-on-primary font-label-sm text-label-sm">
                    {"\n                In Stock\n              "}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                  {"Kronos • Automatic"}
                </span>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">
                  {"Chronoflex Stealth 42"}
                </h4>
                <p className="font-body-sm text-body-sm text-outline mt-1 line-clamp-2">
                  {"Ceramic case with 68-hour power reserve calibre."}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"₹16,450"}
                </span>
                <button className="px-space-md py-1.5 rounded-DEFAULT bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center gap-1" data-accessory-name="Chronoflex Stealth 42" data-accessory-price="16450" data-cart-action="accessory" type="button">
                  <span>
                    {"Add"}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden relative mb-space-sm flex items-center justify-center">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Tactical diver watch with deep petrol blue dial, luminescent indices, ceramic rotating bezel, stainless steel mesh bracelet on porcelain background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmW93iZPeKvpaKN0D0iJtLaJ8M9Boox7NiRIzgABTz1RMjkQzWDeSt3l3R0B6R2aTjwQqZDvvE756-t2zixZSr7E1Akq3572w8f0mP0D86hDp3Qj9fQYvFcBnApsmKfVQcAu_GFiBPf3navt3rzvfc0gFEJ4mduXd5aiSBCi8MMWTZ5uAr_WHA_aDsVIxEnUSX2w6PP8MHnbPkAfX2xDTfS7Du-AzgqA8X5UeZexZ0d3qJK5LMsDEN" />
                  <span className="absolute top-2 right-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-on-primary font-label-sm text-label-sm">
                    {"\n                300M Rated\n              "}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                  {"Nautilus Marine"}
                </span>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">
                  {"Abyssos Deep Blue 41"}
                </h4>
                <p className="font-body-sm text-body-sm text-outline mt-1 line-clamp-2">
                  {"Helium escape valve and unidirectional ceramic bezel."}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"₹19,200"}
                </span>
                <button className="px-space-md py-1.5 rounded-DEFAULT bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center gap-1" data-accessory-name="Abyssos Deep Blue 41" data-accessory-price="19200" data-cart-action="accessory" type="button">
                  <span>
                    {"Add"}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden relative mb-space-sm flex items-center justify-center">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Fine Italian horology watch roll made of dark petrol bridle leather with brass hardware and soft beige suede interior cushion holding two wristwatches" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOfSQjuGboo-tN2Bqhkr6LzfwpYNE1uhI4RT-U3GP9DBWcBomOjHk9NoL1izAOWZOkQdXbOcdnbAZTt53Y3Td7dF-t9V1HBUD1tu5uxnRWmXudmfFxWNnbupa3ADJOUv5i8bcCnShpERVGNgTyAVuS2sfqHcdE4MCUtOe4e8l8TYelmgPYBGyUViF1ISFeCIb-dN7IybdXsmRmvsPd1UzZpsddn7xitD5hDqDVQkRWbdWVU-u1o49C" />
                  <span className="absolute top-2 right-2 px-space-xs py-0.5 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                    {"\n                Accessory\n              "}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                  {"Atelier Leather"}
                </span>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">
                  {"Nocturne 3-Watch Roll"}
                </h4>
                <p className="font-body-sm text-body-sm text-outline mt-1 line-clamp-2">
                  {"Tuscan bridle leather with anti-magnetic lining."}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"₹4,800"}
                </span>
                <button className="px-space-md py-1.5 rounded-DEFAULT bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center gap-1" data-accessory-name="Nocturne 3-Watch Roll" data-accessory-price="4800" data-cart-action="accessory" type="button">
                  <span>
                    {"Add"}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden relative mb-space-sm flex items-center justify-center">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Automatic watch winder crafted in high-gloss piano black lacquered wood with glass inspection window and soft warm LED backlight on minimal shelf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUL7bNqXrS5V58-CsXmgpXZQ8zGOekk_pZbxzvSBD5zmnUWiYWXrEf_Ogc96wqCQ-3UX9UA7wf91m38GlWlNGY3dRQihdXoNeFzuMAtKIR_9VjNdV-A3ir-9u6YMg6gNAquZEgPqTdg6rDdybS2VO-V-22ltl0TUVeiMEpoSWRgHPcDFiW3U9yXRh9mVvb_QhV6j4fZE4gkP1Gohmiw5tq2Z9l3rccnDlFVS3VVlxIvmeaRk9hBIHW" />
                  <span className="absolute top-2 right-2 px-space-xs py-0.5 rounded-DEFAULT bg-primary text-on-primary font-label-sm text-label-sm">
                    {"\n                Precision\n              "}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">
                  {"Mabuchi Calibre"}
                </span>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold mt-0.5">
                  {"Dual Escapement Winder"}
                </h4>
                <p className="font-body-sm text-body-sm text-outline mt-1 line-clamp-2">
                  {"Whisper-quiet magnetic rotor with directional modes."}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {"₹8,500"}
                </span>
                <button className="px-space-md py-1.5 rounded-DEFAULT bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center gap-1" data-accessory-name="Dual Escapement Winder" data-accessory-price="8500" data-cart-action="accessory" type="button">
                  <span>
                    {"Add"}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    {"add"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
