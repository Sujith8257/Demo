import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function GiftingValuation() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="lg:col-span-4 sticky top-28 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">inventory_2</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Gifting Vault Valuation</h3>
</div>
<span className="px-2 py-0.5 bg-surface-container-high font-label-sm text-label-sm text-primary font-bold rounded">3 Items</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block pb-space-sm">Pre-Allocated Milestone Registry</span>

<div className="flex flex-col gap-space-sm py-space-sm">

<div className="flex items-center gap-space-sm p-space-xs rounded hover:bg-surface-container-low transition-colors">
<div className="w-14 h-14 rounded bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="High precision macro photo of Aster No 04 Automatic luxury watch with midnight blue sunburst dial and steel link bracelet on dark stone background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkNLfJCj18nlDtf84hDd-t7caIkTjq0jlMPDlZlpMRy21x1gGm6honHE-JS_HJ2rwMYUL1_lFmaRF0JRxr4uRwTzR08v3C0AE_lr8PGAdV3xCihmh-JaOX5AA7v4O46Rx-z0tiBbgIGMcgxXlunz5MgFUuryJtGMKyOC-WzSmTqgMZbiUnNOTt3Yg631TEEz379DaIu0iXNpzuEP2p2oJJ9_ATzYq65Kz63TYd4RDNznCHily_VyyY" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-primary font-bold truncate">Aster No.04 Automatic</span>
<span className="font-body-sm text-[12px] text-on-surface-variant truncate">Midnight Blue / Bracelet • Cal. 8802</span>
<span className="font-label-sm text-[11px] text-secondary font-bold">Qty: 1</span>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-primary font-bold">₹18,990</span>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-xs rounded hover:bg-surface-container-low transition-colors">
<div className="w-14 h-14 rounded bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Front view photograph of Heritage Field 40 military field watch with forest green matte textured dial and distressed saddle brown leather strap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HjfZuecpSDIL9Xk_ZwFGrAv01zzkQWqiwvuHU1doSGqHAuhKp2LDF1_0bpIJbd_f0WILLjcJQJzLH9n2HbhqcH_BJ-OenX9Q1UiJBTAEtNipOwG4-CVSIvguhmk8U8hw-1nmfUXfQde_l3Yp0U80jxhxJ6uBjcPGy8qiaFsIwMatVR6Pdq-zNjFnjQTebCt5mVp2bTnd_Us5Xq6nIVitDR-iHEvQmh_s4k3wS6zrtoSPkPv6YkEs" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-primary font-bold truncate">Heritage Field 40</span>
<span className="font-body-sm text-[12px] text-on-surface-variant truncate">Forest Green / Leather • Cal. H-20</span>
<span className="font-label-sm text-[11px] text-secondary font-bold">Qty: 1</span>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-primary font-bold">₹14,290</span>
</div>
</div>

<div className="flex items-center gap-space-sm p-space-xs rounded hover:bg-surface-container-low transition-colors">
<div className="w-14 h-14 rounded bg-surface-container overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Technical studio photo of Atlas S4 Dual GPS watch with satin graphite titanium case and silicone strap on parchment paper backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCItFLzVYYx77dUWg2aG0J-CSd7gnT7KFQROSJD40AC9Q918won-BvS9UpQvWnuEovn6-DeEiDnkWkv-mcrbQGTor449-QaiACZ-BBZdj4cJY8iIx8RHezV8flS_pvKUdo7rhNOdW_gVsCCEBHwDU9jN8o1FjCJR6nL4LUlY5XQdcrobVzq6c8xcF7HwXLppbC7_IfveMIP3iM1byhJPNBqGcIGpJUHusEmo915QeYPiZQwC85jEMbQ" />
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-md text-label-md text-primary font-bold truncate">Atlas S4 Dual GPS</span>
<span className="font-body-sm text-[12px] text-on-surface-variant truncate">Graphite Titanium • Escapement Ver. 4</span>
<span className="font-label-sm text-[11px] text-secondary font-bold">Qty: 1</span>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-lg text-label-lg text-primary font-bold">₹13,990</span>
</div>
</div>
</div>

<div className="pt-space-md flex flex-col gap-2">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Cart Subtotal (3 Pieces)</span>
<span className="font-semibold text-primary">₹47,270</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<span className="text-on-surface-variant">Milestone Presentation Coffret</span>
<span className="material-symbols-outlined text-[14px] text-secondary">workspace_premium</span>
</div>
<span className="text-secondary font-bold font-label-sm text-label-sm uppercase">Included (Complimentary)</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Bespoke Engraving & Wax Seal</span>
<span className="text-secondary font-bold font-label-sm text-label-sm uppercase">Included</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Gifting Privilege Discount</span>
<span className="text-tertiary-container font-semibold">-₹3,000</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<div className="flex items-center gap-1">
<span className="text-on-surface-variant">Validated Voucher</span>
<span className="px-1.5 py-0.2 bg-secondary-container text-on-secondary-container rounded font-label-sm text-[9px] font-bold">CALIBRE5</span>
</div>
<span className="text-tertiary-container font-semibold">-₹1,500</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Express Delivery</span>
<span className="text-secondary font-bold font-label-sm text-label-sm uppercase">FREE</span>
</div>

<div className="mt-space-sm pt-space-sm bg-surface-container p-space-md rounded flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Amount</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Includes all duties, taxes & insurance</span>
</div>
<div className="text-right">
<span className="font-headline-md text-headline-md text-primary font-bold">₹42,770</span>
</div>
</div>
</div>

<div className="mt-space-md flex flex-col gap-space-sm">
<button className="w-full bg-[#123B3A] hover:bg-[#002524] text-on-primary py-3.5 px-space-md rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 group" type="button">
<span className="material-symbols-outlined text-[20px] text-secondary group-hover:scale-110 transition-transform">lock</span>
<span>Complete Order — ₹42,770</span>
</button>
<p className="font-body-sm text-[11px] text-center text-on-surface-variant">
              By confirming, you authorize our atelier to commence custom brass engraving. Dispatched in tamper-sealed wooden coffret within 24 hours.
            </p>
</div>

<div className="mt-space-md p-space-md rounded bg-[#F2E9D8] flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Atelier Gifting Concierge</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Need advice on engraving font or custom wax seal?</span>
</div>
</div>
<button className="px-space-sm py-1 bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold shadow-sm transition-colors whitespace-nowrap" type="button">
              Chat Live
            </button>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-xl flex items-center gap-space-md">
<div className="w-12 h-12 rounded bg-surface-container-lowest text-secondary flex items-center justify-center shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">gavel</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">7-Day Recipient Inspection Window</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">
              If the recipient desires a different model or size, our express courier will collect and exchange hassle-free.
            </p>
</div>
</div>
</div>
    </>
  );
}
