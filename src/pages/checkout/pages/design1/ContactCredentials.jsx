import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function ContactCredentials() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">1</span>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">Contact Credentials</h2>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center gap-1 font-bold">
<span className="material-symbols-outlined text-[15px]">badge</span> Atelier Member Verified
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Full Legal Name</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-primary font-body-md text-body-md font-semibold flex items-center justify-between">
<span>Vikramaditya K. Singhania</span>
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Dispatch Email</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-primary font-body-md text-body-md truncate">
                v.singhania@guild-atelier.in
              </div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Armored Courier Mobile</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-primary font-body-md text-body-md">
                +91 98450 12890
              </div>
</div>
</div>
<label className="flex items-center gap-space-sm cursor-pointer select-none group pt-space-xs">
<div className="relative flex items-center justify-center">
<input defaultChecked className="peer sr-only" id="sms-notify" type="checkbox" />
<div className="w-4 h-4 rounded bg-surface-container peer-checked:bg-primary transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-on-primary">check</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
              Discrete encrypted SMS dispatch notifications with armored transport waypoint milestones
            </span>
</label>
</section>
    </>
  );
}
