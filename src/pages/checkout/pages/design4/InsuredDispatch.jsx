import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function InsuredDispatch() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
<div className="p-space-lg flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion("section-03-body")}>
<div className="flex items-center gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm">
                03
              </div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Transit Security Matrix</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Insured Dispatch Protocol</h3>
</div>
</div>
<div className="flex items-center gap-space-sm">
<span className="hidden sm:inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider bg-surface-container px-2.5 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">local_shipping</span> Armored Transit
              </span>
<span className="material-symbols-outlined text-outline transition-transform duration-200" id="icon-03">{accordionOpen["section-03-body"] ? "expand_less" : "expand_more"}</span>
</div>
</div>
<div className={["px-space-lg pb-space-lg pt-0 space-y-space-sm", !accordionOpen["section-03-body"] ? "hidden" : ""].join(" ")} id="section-03-body">

<label className="block p-space-md rounded-lg bg-surface-container cursor-pointer">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked className="mt-1 accent-primary" name="transit" type="radio" />
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-primary">Signature-Verified Armored Courier Transit</span>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Complimentary</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Armored Mercedes Sprinter dispatch with two-factor custody log and cryogenic temper-evident lock ring. Live telemetry satellite ping provided post-release.
                    </p>
<div className="mt-2 flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">timer</span>
<span>Estimated Handover: 48 Hours post-chronometer tolerance sign-off</span>
</div>
</div>
</div>
<span className="font-label-lg text-label-lg text-primary font-bold">₹0</span>
</div>
</label>

<label className="block p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer opacity-75">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<input className="mt-1 accent-primary" name="transit" type="radio" />
<div>
<span className="font-label-lg text-label-lg text-on-surface">Atelier Guild Lounge Collection (Bengaluru Showroom)</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Direct physical handover inside the private VIP vault lounge with our Master Horologist. Champagne reception & individual case sizing included.
                    </p>
</div>
</div>
<span className="font-label-lg text-label-lg text-primary font-bold">₹0</span>
</div>
</label>
</div>
</div>
    </>
  );
}
