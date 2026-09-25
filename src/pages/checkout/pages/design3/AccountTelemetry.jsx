import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function AccountTelemetry() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">01</span>
<h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">Verified Telemetry Account</h2>
</div>
<button className="font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">sync_alt</span>
              Switch Profile
            </button>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container-low p-space-sm rounded gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary">Vikramaditya K.</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">+91 98450 12890 • vikram@horocart.in</span>
</div>
</div>
<span className="inline-flex items-center self-start sm:self-center px-2 py-0.5 rounded font-label-sm text-label-sm bg-primary text-on-primary uppercase tracking-wider">
              Club Chrono Tier 1
            </span>
</div>
<label className="flex items-start gap-space-sm mt-space-sm cursor-pointer select-none">
<input defaultChecked className="mt-0.5 h-4 w-4 rounded accent-primary-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">
              Dispatch real-time SMS chronometry telemetry, encrypted seal code, and courier live GPS tracking pin.
            </span>
</label>
</div>
    </>
  );
}
