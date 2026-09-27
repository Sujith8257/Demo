import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function OrderSummary() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="lg:col-span-5 sticky top-28 space-y-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
<div className="flex items-center justify-between pb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Order #AM-8820</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Order Summary</h2>
</div>
<span className="font-label-sm text-label-sm bg-primary-container text-on-primary px-2.5 py-1 rounded">
              3 Items
            </span>
</div>

<div className="space-y-space-sm pb-space-md">

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="w-16 h-16 rounded bg-primary-container flex-shrink-0 overflow-hidden relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Close up horology macro shot of Aster No. 04 luxury timepiece with deep midnight blue sunray dial and silver rhodium hands on pure black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBooW2By5CmCgJlSshK8azXSzOADeG_D5DB1PziQ5HEH6zsux259-Iu65d9b3Sh7_9yJje4-hHkz87LQTAuZ6MUYawMgJ-aTDXmHel8Bn6WW4_m6ApkS0KsI0WOFuVmr1b1gmevMqI0bAzM0WZjHgW2YiQtmd6yYgTe17Do8_rBsjtGAuX_ftfo0C9crUeGDMlnhqn_3o0_jD6hVU8UQA-9WHA7-bKjnam3zsjEfmnqGvQ6iGIIdtZd" />
</div>
<div className="flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Automatic</span>
<h4 className="font-label-lg text-label-lg text-primary truncate">Aster No. 04 Midnight</h4>
<div className="font-body-sm text-body-sm text-on-surface-variant">39.5mm • Stainless Steel</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-primary font-bold">₹18,450</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant line-through">₹21,000</span>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="w-16 h-16 rounded bg-primary-container flex-shrink-0 overflow-hidden relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Tactical military grade Heritage Field 40 watch with matte black carbon dial, olive canvas strap and luminescent syringe hands in high contrast moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzUheP6_80YR5n0SM6bJPI9-KhC_8oRdoOwKyTMCtxc2yX_kX1B_jtHdV07YxjTq4niWP0o1lt98xI0mOOV4cOlGaRVb7L_uQ0G1q9_iJ13Mja2vrTkP6AX-frqZyLe_Z_UYXvst556U63Aowol7iQrqSoKPdeBGucPCuRofc67oni06T8t4CsjWcAUY_fOkch8TZGjsZoQVQqwYIuOCqPZhqOwKNJ2E83_FDbeIF7uAhARsIpIZYq" />
</div>
<div className="flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Mechanical</span>
<h4 className="font-label-lg text-label-lg text-primary truncate">Heritage Field 40 Ops</h4>
<div className="font-body-sm text-body-sm text-on-surface-variant">40mm • Gunmetal DLC</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-primary font-bold">₹14,920</span>
<span className="block font-label-sm text-label-sm text-on-surface-variant">Item #02</span>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="w-16 h-16 rounded bg-primary-container flex-shrink-0 overflow-hidden relative shadow-sm">
<img className="w-full h-full object-cover" data-alt="Atlas S4 horological titanium watch with exposed tourbillon style escapement and brushed stealth titanium links resting on dark slate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD372A3Ape67RIx97jEWCgIFYaex-ejW-OKMOlImEKW0rupwdm0DN52Fg73p5_aK23LHc-HqLvr38fKmUxDuOk4q5Sakf73_pdVcB4MkLdYm4CX9UD83wgBaK6EWH0Qmt2JdsKm8rBbE4PsBSwkkRc1WgVVOVyspUujLsJcwtYsuEMfGjsX7ChuIVaDQJhGypBezJ2vHpRsnvpBxb1oWFDKCM6z-e8TOgMtbSh2HL8L4TKJ9vV9vNBn" />
</div>
<div className="flex-1 min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">Smart Watch</span>
<h4 className="font-label-lg text-label-lg text-primary truncate">Atlas S4 Stealth GPS</h4>
<div className="font-body-sm text-body-sm text-on-surface-variant">42mm • Grade 5 Titanium</div>
</div>
<div className="text-right">
<span className="font-label-lg text-label-lg text-primary font-bold">₹13,900</span>
<span className="block font-label-sm text-label-sm text-secondary font-semibold">Special Edition</span>
</div>
</div>
</div>

<div className="py-space-md space-y-2">
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Subtotal (3 Items)</span>
<span className="text-on-surface font-medium">₹47,270</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">stars</span>
                Member Discount
              </span>
<span className="text-secondary font-medium">-₹2,500</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">sell</span>
                Promo Code (CALIBRE5)
              </span>
<span className="text-secondary font-medium">-₹1,500</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Express Delivery</span>
<span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">FREE</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Shipping Insurance</span>
<span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">Complimentary</span>
</div>
</div>

<div className="pt-space-md flex items-end justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block">Total Amount</span>
<span className="font-body-sm text-body-sm text-secondary block mt-0.5">GST (18%) & All Taxes Included</span>
</div>
<div className="text-right">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">₹43,270</span>
</div>
</div>

<div className="mt-space-lg">
<button className="w-full h-14 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest rounded shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-space-sm group" type="button">
<span className="material-symbols-outlined text-[20px] text-secondary-fixed group-hover:scale-110 transition-transform">lock_open</span>
<span>Complete Order — ₹43,270</span>
</button>
</div>

<div className="mt-space-md pt-space-md text-center space-y-space-xs">
<a className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">call_split</span>
              Split Payment Options
            </a>
<div className="pt-space-xs flex items-center justify-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">support_agent</span>
<span>Customer Support: <strong className="text-primary">+91 (800) CHRONO</strong></span>
</div>
</div>
</div>

<div className="p-space-md bg-surface-container rounded-lg flex items-center gap-space-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[22px] text-primary flex-shrink-0">workspace_premium</span>
<p className="font-body-sm text-body-sm leading-snug">
            Each movement tested under 5 spatial angles and 3 thermal states. Chronometer certificate serials permanently inscribed on immutable ledger.
          </p>
</div>
</div>
    </>
  );
}
