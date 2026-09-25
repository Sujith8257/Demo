import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function ClientDossier() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
<div className="p-space-lg flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion("section-01-body")}>
<div className="flex items-center gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                01
              </div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Verified Member</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Client Escapement Dossier</h3>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="hidden sm:inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider bg-surface-container px-2.5 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Dossier Active
              </span>
<span className="material-symbols-outlined text-outline transition-transform duration-200" id="icon-01">{accordionOpen["section-01-body"] ? "expand_less" : "expand_more"}</span>
</div>
</div>
<div className={["px-space-lg pb-space-lg pt-0", !accordionOpen["section-01-body"] ? "hidden" : ""].join(" ")} id="section-01-body">
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="space-y-0.5">
<div className="font-label-lg text-label-lg text-on-surface">Vikramaditya K. Singhania</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-sm">
<span>v.singhania@guild-atelier.in</span>
<span>•</span>
<span>+91 98450 12890</span>
</div>
</div>
<button className="self-start sm:self-center font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-4" type="button">
                Edit Dossier
              </button>
</div>

<div className="mt-space-md p-space-md bg-surface-container rounded-lg flex items-start gap-space-sm">
<input defaultChecked className="mt-1 w-4 h-4 rounded text-primary-container accent-primary-container cursor-pointer" id="discreet" type="checkbox" />
<label className="cursor-pointer" htmlFor="discreet">
<span className="font-label-md text-label-md text-primary block">Tactical Plainwrap Packaging Active</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Exterior freight casing stripped of AMIHIVE branding and luxury marks. Accompanied by neutral bonded customs manifests to ensure ultimate transit privacy.
                </span>
</label>
</div>
</div>
</div>
    </>
  );
}
