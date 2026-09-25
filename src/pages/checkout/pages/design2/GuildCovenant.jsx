import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function GuildCovenant() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-low p-space-md rounded flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-[24px] mt-0.5">policy</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Independent Horological Guild Covenant</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Your capital allocation remains in strict neutral escrow custody. In the event of chronometer tolerance variance (&gt;+6/-4s day) or mechanical imperfection during the 7-day inspection window, instantaneous reverse transit and complete reimbursement are triggered automatically.
            </p>
</div>
</div>
    </>
  );
}
