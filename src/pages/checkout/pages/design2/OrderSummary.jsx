import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function OrderSummary() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b pb-space-sm border-surface-container-highest">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">receipt_long</span>
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">Order Summary</span>
</div>
<span className="font-label-sm text-label-sm font-mono text-on-surface-variant">#8841-PRECISION</span>
</div>
<div className="flex flex-col gap-space-md divide-y divide-surface-container-high">
<div className="flex items-center gap-space-sm pt-space-xs first:pt-0">
<div className="w-16 h-16 rounded bg-surface-container-high flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-contain" data-alt="Macro studio photograph of Aster No 04 Automatic mechanical timepiece with deep petrol green dial, stainless steel polished bezel, and sapphire crystal on light background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7R3a8cn6PROMaK_OnK1xjdTqg1NgH4LjbhEVewqZs3LEmmjQOmXoGe5ioQ1gQMjzun53U4i-OpXooj12u7NzD27EJotdH7w9UGpijZYHLthOM4gzBuoP78A9UAiW_aoBaTzh62d-jd5sqhTuOneCfVagf7YGy3IDJJJJJVgLDBy2fNGfeqWf8ozWAbtE91U72g1vRN8kK5ZBPCNb572lNPoO8srDNlg9kgjEI2GHsOtD3NM1LReE" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-primary font-bold truncate">Aster No.04 Automatic</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">40mm • Cal. 8901 • Qty 1</span>
<span className="font-label-md text-label-md text-secondary font-mono mt-0.5">₹18,990</span>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-sm">
<div className="w-16 h-16 rounded bg-surface-container-high flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-contain" data-alt="Refined catalog photography of Heritage Field mechanical military field watch with forest green textured dial and brushed titanium case on light background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTDbvLW3ZtytQmp-iOW_XwupfZ3H-43H7mYXBN4xzU5QjoM-mjTEjmCMJ-_j7DzU-FlFykycaGx7SQEd56tyydxBABQh2wt4eBH0ZVLPN5wo94oZZFU0u8OD0KRPSSqrq-bZEy4wpsaUCtUnGD731vBfPy9NkVwGzDWpdR1bBmThgoVkzA7J8guvzsbfvYVXOG2ISjrMdHrxcZ9KNRHDbvyDR5v99AJuckN4LkXsVLZHqhWT41jODZ" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-primary font-bold truncate">Heritage Field 40</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Forest Green • Hack Seconds • Qty 1</span>
<span className="font-label-md text-label-md text-secondary font-mono mt-0.5">₹14,290</span>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-sm">
<div className="w-16 h-16 rounded bg-surface-container-high flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
<img className="w-full h-full object-contain" data-alt="Technical product shot of Atlas S4 GPS horological navigation tool watch in Grade 5 Titanium with graphite dial and DLC coated hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWoB6femCmI18ikNpblQWWJkt16Z9GKuRN346Ss0vwkCFO6BYphZXAOTch10BzOHMa1u17nZoiFs38q6Ww19P9tqlVUSAnj8s6HLKVzggbUYXh_Zqpdgf_Bi2527pa5TODkSKbES0rIoG9RFqdxcTxbW5ZPKtgXzBo09bu63V4CiT-E-Qv7BDy-y_6zbwjU7SaKj-vy7-Ujm2wDwf8akick1admUqtf7rKWyS1XdTk6MSC72B5LjzF" />
</div>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-label-md text-label-md text-primary font-bold truncate">Atlas S4 Chrono GPS</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Grade 5 Ti • Graphite • Qty 1</span>
<span className="font-label-md text-label-md text-secondary font-mono mt-0.5">₹13,990</span>
</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex flex-col gap-1">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Promo Discount</span>
<span className="text-tertiary font-bold font-mono">CALIBRE5 (-₹1,500)</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Member Discount</span>
<span className="text-tertiary font-bold font-mono">TIER-1 (-₹3,000)</span>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-sm border-t border-surface-container-highest">
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Subtotal (3 Items)</span>
<span className="font-mono text-on-surface">₹47,270</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Quality Inspection</span>
<span className="text-tertiary font-label-sm text-label-sm uppercase font-bold">Complimentary</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Insured Delivery</span>
<span className="text-tertiary font-label-sm text-label-sm uppercase font-bold">FREE</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Total Discounts</span>
<span className="text-secondary font-mono">-₹4,500</span>
</div>
<div className="flex items-center justify-between pt-space-sm border-t border-surface-container-high mt-space-xs">
<div>
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wider block">Total Amount</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Inclusive of 18% IGST & Duties</span>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-primary font-bold font-mono">₹42,770</span>
<span className="font-label-sm text-label-sm text-secondary block uppercase">All Taxes Included</span>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Chronometric Benchmark Declarations</span>
</div>
<div className="grid grid-cols-2 gap-2 text-center pt-space-xs">
<div className="p-2 bg-surface-container rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Shock Stability</span>
<span className="font-label-md text-label-md text-primary font-bold">ISO 1413</span>
</div>
<div className="p-2 bg-surface-container rounded flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Antimagnetic</span>
<span className="font-label-md text-label-md text-primary font-bold">DIN 8309</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal pt-1">
            Every timepiece is thoroughly verified and tested prior to secure packaging.
          </p>
</div>
<div className="p-space-md bg-primary-container text-on-primary rounded shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">support_agent</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary">Dedicated Atelier Concierge</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Horologist Desk: Standby</span>
</div>
</div>
<button className="px-space-sm py-1 bg-surface-container-lowest text-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface transition-colors" type="button">
            Connect
          </button>
</div>
</div>
    </>
  );
}
