import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function WhiteGloveTransit() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm pb-space-md">
<span className="w-7 h-7 rounded bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">03</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Express White-Glove Courier Delivery</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Secure express handling with specialized protective packaging.</p>
</div>
</div>
<div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded bg-primary-container text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[24px]">security</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">White-Glove Express Courier & Gift Box</span>
<span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary font-label-sm text-[9px] rounded font-bold uppercase">Included</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Delivered with care in luxury gift packaging. Signature required upon delivery with full transit insurance.
                </p>
<div className="flex items-center gap-space-md mt-2 font-label-sm text-label-sm text-primary font-semibold">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">alarm</span> Guaranteed Delivery: 2 Days</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span> 100% Free Transit Insurance</span>
</div>
</div>
</div>
<div className="text-right flex-shrink-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-bold">Delivery Fee</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">FREE</span>
</div>
</div>
</section>
    </>
  );
}
