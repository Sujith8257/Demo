import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
import ContactCredentials from "./ContactCredentials.jsx";
import VaultDestination from "./VaultDestination.jsx";
import InsuredLogistics from "./InsuredLogistics.jsx";
import EscrowPayment from "./EscrowPayment.jsx";
import OrderSummary from "./OrderSummary.jsx";
export default function CheckoutLayout() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-margin-mobile lg:px-margin pb-24">

<div className="pt-8 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm mb-1">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Secure Checkout</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Step 2 of 2</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
          Checkout — Complete Your Order Securely
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          3 items reserved in your cart. Review your details and complete your purchase securely.
        </p>
</div>

<div className="flex items-center gap-space-md p-space-sm pl-space-md bg-surface-container rounded-full shadow-sm self-start md:self-end">
<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-dim" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<span className="material-symbols-outlined text-[15px] text-primary absolute">verified</span>
</div>
<div className="flex flex-col pr-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">256-Bit SSL Encryption</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Verified & Safe Checkout</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start"><div className="lg:col-span-8 flex flex-col gap-space-xl"><ContactCredentials /><VaultDestination /><InsuredLogistics /><EscrowPayment /></div><OrderSummary /></div>
</div>
    </>
  );
}
