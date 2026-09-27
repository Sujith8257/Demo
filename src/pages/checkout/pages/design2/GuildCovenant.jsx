import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function GuildCovenant() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-low p-space-md rounded flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">policy</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Customer Guarantee & Protection</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Your payment is 100% protected and safe. If you are not completely satisfied during the 7-day trial period, hassle-free returns and a full refund are guaranteed.
            </p>
</div>
</div>
    </>
  );
}
