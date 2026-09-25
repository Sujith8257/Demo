import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function SecuredVaultDestination() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
<div className="p-space-lg flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion("section-02-body")}>
<div className="flex items-center gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                02
              </div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Armored Dispatch Point</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Secured Vault Destination</h3>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="hidden sm:inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider bg-surface-container px-2.5 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">fmd_good</span> UB City Tower
              </span>
<span className="material-symbols-outlined text-outline transition-transform duration-200" id="icon-02">{accordionOpen["section-02-body"] ? "expand_less" : "expand_more"}</span>
</div>
</div>
<div className={["px-space-lg pb-space-lg pt-0", !accordionOpen["section-02-body"] ? "hidden" : ""].join(" ")} id="section-02-body">

<div className="p-space-md rounded-lg bg-surface-container-low shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">villa</span>
<span className="font-label-lg text-label-lg text-primary">Bengaluru Private Residence</span>
<span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 rounded">Default Hub</span>
</div>
<button className="font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:underline" type="button">Change</button>
</div>
<p className="font-body-md text-body-md text-on-surface">
                Penthouse Atelier 8, UB City Tower, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001
              </p>
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs text-primary font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[15px] text-secondary">radar</span>
                  Verified GPS Courier Zone
                </span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[15px] text-secondary">lock</span>
                  Armored Courier Route Active
                </span>
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-[15px] text-secondary">badge</span>
                  Biometric ID Required at Handover
                </span>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between">
<button className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">add_circle</span> Add Alternative Vault Chamber
              </button>
<span className="font-label-sm text-label-sm text-on-surface-variant">Zone 1 Secure Air-Cargo Hub</span>
</div>
</div>
</div>
    </>
  );
}
