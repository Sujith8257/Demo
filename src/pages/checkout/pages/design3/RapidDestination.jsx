import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function RapidDestination() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">02</span>
<h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">Rapid Destination Delivery</h2>
</div>
<button className="font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">add</span>
              Add New Address
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">

<label className="relative flex flex-col p-space-md rounded cursor-pointer transition-all bg-surface-container-low shadow-sm">
<input defaultChecked className="sr-only" name="delivery_address" type="radio" />
<div className="flex items-center justify-between mb-space-xs">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  Home Sanctuary
                </span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container text-on-secondary-container uppercase">
                  Default
                </span>
</div>
<p className="font-body-md text-body-md text-primary font-semibold">42/1 Brunton Road, Ashok Nagar</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bengaluru, Karnataka 560025</p>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px] text-secondary">flash_on</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Express Zone • 1-Day Delivery</span>
</div>
</label>

<label className="relative flex flex-col p-space-md rounded cursor-pointer transition-all bg-surface-container hover:bg-surface-container-high">
<input className="sr-only" name="delivery_address" type="radio" />
<div className="flex items-center justify-between mb-space-xs">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">
<span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                  Gym & Sports Lab
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Metro Hub</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Koramangala 4th Block, 80ft Road</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bengaluru, Karnataka 560034</p>
<div className="mt-space-sm pt-space-xs flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Transit Time: 24–48 Hours</span>
</div>
</label>
</div>
</div>
    </>
  );
}
