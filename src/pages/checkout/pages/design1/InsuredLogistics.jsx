import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function InsuredLogistics() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">3</span>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">Express Delivery Options</h2>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center gap-1 font-bold">
<span className="material-symbols-outlined text-[16px]">lock_clock</span> 100% Fully Insured
            </span>
</div>
<div className="space-y-space-md">

<label className="flex items-start gap-space-md p-space-md bg-primary-fixed/20 rounded-xl cursor-pointer transition-all">
<div className="pt-0.5">
<div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-on-primary"></div>
</div>
</div>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-primary font-bold">Express Air Delivery</span>
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm rounded uppercase">Free (Atelier Covered)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Guaranteed priority delivery within 48 hours. Real-time GPS tamper-evident seal tracking.
                  </p>
</div>
<div className="text-left sm:text-right">
<span className="font-label-lg text-label-lg text-primary font-bold uppercase tracking-wider">₹0</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant line-through">₹2,400</span>
</div>
</div>
</label>

<label className="flex items-start gap-space-md p-space-md bg-surface-container-low hover:bg-surface-container rounded-xl cursor-pointer transition-all group">
<div className="pt-0.5">
<div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
</div>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                      Premium White-Glove Hand Delivery & Sizing
                    </span>
<span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded uppercase">Concierge</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Hand-carried by certified guild horologist. Timegrapher amplitude test & micro-link sizing on delivery.
                  </p>
</div>
<div className="text-left sm:text-right">
<span className="font-label-lg text-label-lg text-primary font-bold">+₹1,500</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">Scheduled Slot</span>
</div>
</div>
</label>
</div>
</section>
    </>
  );
}
