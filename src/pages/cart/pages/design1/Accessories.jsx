import { CartItem, CartQty, CartAmount, AppliedVoucher, CartCount } from "../../components/cartWidgets.jsx";
export default function Accessories(){
  return (
    <>
      <section className="mt-space-xl pt-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-md">
          <div>
            <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[14px]">
                {"tune"}
              </span>
              <span>
                {"CALIBRATED PAIRINGS"}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              {"\n              Complete the Look — Atelier Accessories\n            "}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"\n              Engineered additions to accompany your registered timepieces. Added items seamlessly merge into the active escrow parcel.\n            "}
            </p>
          </div>
          <div className="flex items-center gap-space-xs">
            <button className="w-9 h-9 rounded-full bg-surface-container-lowest shadow-sm hover:bg-surface-container text-primary flex items-center justify-center transition-colors" data-cart-action="scroll-left" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"chevron_left"}
              </span>
            </button>
            <button className="w-9 h-9 rounded-full bg-surface-container-lowest shadow-sm hover:bg-surface-container text-primary flex items-center justify-center transition-colors" data-cart-action="scroll-right" type="button">
              <span className="material-symbols-outlined text-[18px]">
                {"chevron_right"}
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-space-md overflow-x-auto pb-space-sm scroll-smooth" id="accessoriesContainer">
          <div className="min-w-[260px] md:min-w-[280px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
                <img className="w-full h-full object-cover transition-transform hover:scale-105" data-alt="Handcrafted Horween Chromexcel rich cognac brown leather replacement watch strap with quick release spring bars and satin stainless steel buckle on dark velvet cloth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy_xlE_EZ6e54mDDS4NoU5B0jRGMKUuWxEv-Nndb05A6qY8G7rao-hmBAMtRqHUxyH9tsuQRY6WtXKkom9J4XIWr2faJy_vp_yKj0FK3z8M_aThvyCtigAigLmKwYt4iM7GdVtDIl2-YR2aJV5rqYYUI7gpkyhB6id3ZBPDatCDOtpyVtMC72Tq9_w7wtoiF8rFrlGr_eCeH1w-BLLmBbYhNIZrIXghT_YOF-pWV9pz3Gd97Vs3lMh" />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                {"GENUINE LEATHER"}
              </span>
              <h4 className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                {"Horween Chromexcel Strap (20mm)"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {"Cognac pull-up finish with quick-release bars."}
              </p>
            </div>
            <div className="flex items-center justify-between mt-space-md pt-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"₹2,890"}
              </span>
              <button className="px-space-md py-1.5 bg-primary text-on-primary rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider font-bold hover:bg-primary-container transition-colors" data-accessory-name="Horween Strap" data-accessory-price="2890" data-cart-action="accessory" type="button">
                {"\n                + Add\n              "}
              </button>
            </div>
          </div>
          <div className="min-w-[260px] md:min-w-[280px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
                <img className="w-full h-full object-cover transition-transform hover:scale-105" data-alt="Machined solid brushed brass desktop valet tray with suede lining for mechanical watch resting and cufflinks against minimal architectural concrete desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKAqLX96akcGOxXOcUbMWgwBllm8zxPwqf2nPEHsqMCdjndvilMGthxmhLgur9uOfLDHehwZ9cWoNvGxDtz_u7Vv6sEET8AY4tfy3DYGl6NMQBGqnfRBH9XL6CAkCe0J_V40bf0Bp3ugeG879zdXIS7zCa_3UJ4woA83ZjQNrWcOUCpUG4ArCMufjJEJJPwF3OPvMvjanvLmmLqCTeCbZ8yGa6bKc2Ec12PYQOOmqys3BMHjF2tY9g" />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                {"DESK ACCESSORY"}
              </span>
              <h4 className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                {"Solid Brass Atelier Valet Tray"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {"Lined with Forest Jade Italian alcantara."}
              </p>
            </div>
            <div className="flex items-center justify-between mt-space-md pt-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"₹3,850"}
              </span>
              <button className="px-space-md py-1.5 bg-primary text-on-primary rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider font-bold hover:bg-primary-container transition-colors" data-accessory-name="Brass Valet Tray" data-accessory-price="3850" data-cart-action="accessory" type="button">
                {"\n                + Add\n              "}
              </button>
            </div>
          </div>
          <div className="min-w-[260px] md:min-w-[280px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
                <img className="w-full h-full object-cover transition-transform hover:scale-105" data-alt="Luxury handcrafted Tuscan espresso leather 3-slot travel watch roll case with soft cream velvet cushions and snap brass closures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoIaFnU7qAez0pesC6eDuHzRVbvTvFL_RwKiJ4ZFa-jEKEIkE-svTqB4pDxUoT6WuhhMWLk-T_ZufbyOZ5-r6fF1PmJ11dYOPGdmY3nLGkpX_YrNAeq6g_l066PJ0AqsDF9m1KbVMrlqrm3c-DJOLGx86uYL-kO53eOraK5_-CYQjAek-adz9mzM0oRMQX2RPC7SnniwwQrLOosfeeWfdg1vImAGC_Q8vuh_dUU3A0tgSOyt4zz6mB" />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                {"TRAVEL & STORAGE"}
              </span>
              <h4 className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                {"Tuscan Leather 3-Slot Watch Roll"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {"Rigid sliding cushion base with snap closures."}
              </p>
            </div>
            <div className="flex items-center justify-between mt-space-md pt-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"₹5,490"}
              </span>
              <button className="px-space-md py-1.5 bg-primary text-on-primary rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider font-bold hover:bg-primary-container transition-colors" data-accessory-name="Watch Roll" data-accessory-price="5490" data-cart-action="accessory" type="button">
                {"\n                + Add\n              "}
              </button>
            </div>
          </div>
          <div className="min-w-[260px] md:min-w-[280px] bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-full h-44 rounded-lg bg-surface-container-low overflow-hidden mb-space-sm">
                <img className="w-full h-full object-cover transition-transform hover:scale-105" data-alt="Watchmakers 10x achromatic inspection loupe with anodized aluminum body and branded ultra fine microfiber polishing cloth in wooden presentation box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtkHEPHyhPWNI3D0VHHScS4qJ_mignn1iCQKTLcntMIR-dRhWFLNpNDqxmVMVkaM_PlvZjHwNzx_JA63T-oNNl3w9wooTQQFaYpYmjJ4OGtAr6zvuKJ-Vlgz-3HirAIO_eTvo-xBdRJ6mO_x8gY48KZCrZpSCsWnLFK14fGHwk6RRNUkqqAf67twE_CQzwAushLZbP-_z1iBimjOXyEoM30P8iUNZA_WpfKo06ye6tBzkN2P0rrC6B" />
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                {"HOROLOGIST INSTRUMENT"}
              </span>
              <h4 className="font-label-lg text-label-lg text-primary font-bold mt-0.5">
                {"Escapement 10x Loupe & Care Kit"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {"Achromatic lens + 2 antistatic cloths."}
              </p>
            </div>
            <div className="flex items-center justify-between mt-space-md pt-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {"₹1,450"}
              </span>
              <button className="px-space-md py-1.5 bg-primary text-on-primary rounded-DEFAULT font-label-sm text-label-sm uppercase tracking-wider font-bold hover:bg-primary-container transition-colors" data-accessory-name="Loupe Kit" data-accessory-price="1450" data-cart-action="accessory" type="button">
                {"\n                + Add\n              "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
