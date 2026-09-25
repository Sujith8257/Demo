import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function EscrowIntro() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest">
<span className="material-symbols-outlined text-[14px]">tune</span>
<span>Step 03 Protocol Stage</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Escrow Settlement & Authorization</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Funds remain insulated in 256-bit certified tier-1 banking escrow. Settlement unlocks exclusively after your 7-day atelier horological precision audit.
          </p>
</div>
    </>
  );
}
