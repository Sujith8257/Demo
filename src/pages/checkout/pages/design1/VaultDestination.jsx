import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function VaultDestination() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">2</span>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">Vault Destination Address</h2>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">2 Saved Vaults</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">

<div className="p-space-md bg-primary-fixed/20 rounded-xl relative cursor-pointer shadow-sm transition-all">
<div className="flex items-start justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">home_pin</span>
<span className="font-label-lg text-label-lg text-primary font-bold">Home Atelier</span>
</div>
<div className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">check</span>
</div>
</div>
<p className="font-body-md text-body-md text-primary font-medium leading-relaxed mb-space-sm">
                42/1 Brunton Road, Ashok Nagar<br />
                Bengaluru, Karnataka 560025
              </p>
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm rounded uppercase">Default Shipping</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-secondary">verified</span> Verified PIN
                </span>
</div>
</div>

<div className="p-space-md bg-surface-container-low hover:bg-surface-container rounded-xl relative cursor-pointer transition-all group">
<div className="flex items-start justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">domain</span>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Office / Studio Penthouse</span>
</div>
<div className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                Penthouse 8, UB City Tower, Vittal Mallya Rd<br />
                Bengaluru, Karnataka 560001
              </p>
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded uppercase">Secondary Access</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
<button className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary transition-colors font-bold self-start" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span> + Add New Vault Address
            </button>
<label className="flex items-center gap-space-sm cursor-pointer select-none group">
<div className="relative flex items-center justify-center">
<input defaultChecked className="peer sr-only" type="checkbox" />
<div className="w-4 h-4 rounded bg-surface-container peer-checked:bg-primary transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[13px] text-on-primary">check</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                Billing address same as shipping address
              </span>
</label>
</div>
</section>
    </>
  );
}
