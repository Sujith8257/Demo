import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function PreCheckout1() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="relative w-full bg-primary-container text-on-primary overflow-hidden pt-10 pb-28">

<div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 overflow-hidden">
<svg className="w-[900px] h-[900px] animate-[spin_120s_linear_infinite]" fill="none" viewBox="0 0 800 800">
<circle cx="400" cy="400" r="380" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1"></circle>
<circle cx="400" cy="400" r="340" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="400" cy="400" r="300" stroke="currentColor" strokeDasharray="1 11" strokeWidth="1.5"></circle>
<circle cx="400" cy="400" r="220" stroke="currentColor" strokeWidth="0.75"></circle>
<line stroke="currentColor" strokeWidth="0.5" x1="400" x2="400" y1="20" y2="780"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="20" x2="780" y1="400" y2="400"></line>
</svg>
<div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/20 via-transparent to-primary-fixed/10 blur-3xl"></div>
</div>

<div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin z-10 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-space-sm bg-primary/60 backdrop-blur-md px-space-md py-1.5 rounded-full mb-space-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-widest uppercase text-on-primary-container">
          Cart Reserved: <span className="text-secondary-fixed font-bold tracking-normal" id="countdown" aria-label="Preview countdown">{formatCountdown(remaining)}</span> Remaining
        </span>
<span className="text-secondary/50">•</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary">256-Bit SSL Encryption</span>
</div>
<h1 className="font-headline-xl text-headline-xl tracking-tight text-on-primary max-w-3xl leading-tight">
        A Considered Finish.<br className="hidden sm:inline" /> Your Collection, Secured.
      </h1>
<p className="mt-space-sm font-body-md text-body-md text-on-primary-container max-w-2xl">
        3 premium timepieces reserved in your cart <span className="font-mono text-on-primary bg-primary/80 px-2 py-0.5 rounded">#AM-8820-NC</span>. Complete checkout to confirm your order and delivery.
      </p>

<div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md lg:gap-space-xl text-on-primary-container font-label-sm text-label-sm uppercase tracking-widest">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">verified_user</span>
<span>Secure Checkout</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">shield_lock</span>
<span>Insured Delivery</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">precision_manufacturing</span>
<span>Direct Dispatch</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
<svg className="relative block w-full h-[88px] text-surface" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1440 96">
<path d="M0,0 C480,96 960,96 1440,0 L1440,96 L0,96 Z"></path>
</svg>
</div>
</section>
    </>
  );
}
