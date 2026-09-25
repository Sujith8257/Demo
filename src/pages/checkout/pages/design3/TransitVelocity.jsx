import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function TransitVelocity() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex items-center gap-space-sm mb-space-sm">
<span className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">03</span>
<h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">Armored Transit Velocity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
<label className="flex items-start gap-space-sm p-space-md rounded bg-surface-container-low cursor-pointer shadow-sm">
<input defaultChecked className="mt-1 accent-primary-container" name="transit_tier" type="radio" />
<div className="flex flex-col">
<div className="flex items-center justify-between gap-space-sm">
<span className="font-label-md text-label-md uppercase text-primary font-bold">Priority Armored Air</span>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">COMPLIMENTARY</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">24–36 Hour Dedicated Logistics Flight with temperature & pressure vault stabilization.</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-md rounded bg-surface-container cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="mt-1 accent-primary-container" name="transit_tier" type="radio" />
<div className="flex flex-col">
<div className="flex items-center justify-between gap-space-sm">
<span className="font-label-md text-label-md uppercase text-primary font-bold">Same-Day Direct Courier</span>
<span className="font-label-md text-label-md text-primary font-bold">₹450</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Guaranteed Delivery before 20:00 IST via encrypted dual-escort locked case (Bengaluru Urban).</span>
</div>
</label>
</div>
</div>
    </>
  );
}
