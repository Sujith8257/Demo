import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
import AccountTelemetry from "./AccountTelemetry.jsx";
import RapidDestination from "./RapidDestination.jsx";
import TransitVelocity from "./TransitVelocity.jsx";
import InstantPayment from "./InstantPayment.jsx";
import OrderSummary from "./OrderSummary.jsx";
export default function CheckoutLayout() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-md lg:py-space-lg">

<section className="w-full bg-surface-container-low rounded-xl p-space-md lg:p-space-lg mb-space-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-secondary">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</span>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Fast & Secure</span>
<h1 className="font-headline-sm text-headline-sm text-primary">Express Checkout</h1>
</div>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[16px]">timer</span>
<span>ITEMS RESERVED IN CART: <strong className="text-primary tabular-nums font-bold" id="escrow-timer" aria-label="Preview countdown">14:59</strong></span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<button className="group flex items-center justify-center gap-space-sm py-3 px-4 rounded bg-surface-container-lowest hover:bg-surface transition-all shadow-sm" type="button">
<span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[14px]">qr_code_scanner</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md uppercase text-primary leading-tight">UPI QuickPay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">GPay / PhonePe / BHIM</span>
</div>
</button>
<button className="group flex items-center justify-center gap-space-sm py-3 px-4 rounded bg-surface-container-lowest hover:bg-surface transition-all shadow-sm" type="button">
<span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[14px]">contactless</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md uppercase text-primary leading-tight">Apple / Google Pay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Biometric One-Touch</span>
</div>
</button>
<button className="group flex items-center justify-center gap-space-sm py-3 px-4 rounded bg-surface-container-lowest hover:bg-surface transition-all shadow-sm" type="button">
<span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[14px]">credit_score</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md uppercase text-primary leading-tight">CRED Pay</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Instant Club Reward ₹750</span>
</div>
</button>
</div>
<div className="flex items-center gap-space-md mt-space-md pt-space-xs text-center justify-center">
<span className="w-12 h-px bg-outline-variant opacity-40"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">or continue with registered address & configured payment</span>
<span className="w-12 h-px bg-outline-variant opacity-40"></span>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start"><div className="lg:col-span-7 flex flex-col gap-space-lg"><AccountTelemetry /><RapidDestination /><TransitVelocity /><InstantPayment /></div><OrderSummary /></div>
</div>
    </>
  );
}
