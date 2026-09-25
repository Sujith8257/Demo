import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function PostCheckout1() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest p-space-sm shadow-xl z-40 flex items-center justify-between gap-space-sm native-mobile-checkout rounded-xl">
<div className="flex flex-col pl-2">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant leading-none">Net Total</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">₹43,270</span>
</div>
<button className="flex-1 max-w-[240px] h-12 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded font-bold flex items-center justify-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Express Pay</span>
</button>
</div>
    </>
  );
}
