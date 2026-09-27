import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function PreCheckout1() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="w-full bg-surface-container-low py-space-md shadow-sm rounded-xl">
<div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
<div className="flex items-center justify-between gap-space-md flex-wrap pb-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Protocol Reference</span>
<span className="font-label-md text-label-md text-primary font-bold px-2 py-0.5 bg-surface rounded">ID: HH-2025-8841-B</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> Items Reserved</span>
<span className="hidden sm:inline text-outline-variant">•</span>
<span className="hidden sm:inline">Cart Expires in: 14:32</span>
</div>
</div>
<div className="relative w-full py-space-xs">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-highest -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-0 w-2/3 h-0.5 bg-tertiary-container -translate-y-1/2 z-0 transition-all duration-500"></div>
<div className="relative z-10 grid grid-cols-4 w-full text-center">
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-label-sm font-label-sm shadow-sm transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="mt-2 text-left sm:text-center">
<span className="block font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase">01 Details</span>
<span className="hidden md:block font-body-sm text-body-sm text-on-surface-variant truncate">Contact Information</span>
</div>
</div>
<div className="flex flex-col items-center group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-label-sm font-label-sm shadow-sm transition-transform group-hover:scale-105">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="mt-2 text-left sm:text-center">
<span className="block font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase">02 Shipping</span>
<span className="hidden md:block font-body-sm text-body-sm text-on-surface-variant truncate">Delivery Address</span>
</div>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-sm font-label-sm shadow-md ring-4 ring-secondary/30">
<span className="font-bold">03</span>
</div>
<div className="mt-2 text-left sm:text-center">
<span className="block font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase">03 Payment</span>
<span className="hidden md:block font-body-sm text-body-sm text-secondary font-semibold truncate">Select Method</span>
</div>
</div>
<div className="flex flex-col items-center opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-label-sm font-label-sm">
<span>04</span>
</div>
<div className="mt-2 text-left sm:text-center">
<span className="block font-label-sm text-label-sm text-on-surface-variant font-bold tracking-wider uppercase">04 Complete</span>
<span className="hidden md:block font-body-sm text-body-sm text-outline truncate">Order Confirmation</span>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
