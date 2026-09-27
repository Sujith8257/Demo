import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function InstantPayment() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">04</span>
<h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">Payment Method</h2>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span>256-Bit Secure Payment</span>
</div>
</div>
<div className="space-y-space-sm">

<div className="bg-surface-container-low p-space-md rounded shadow-sm">
<div className="flex items-center justify-between">
<label className="flex items-center gap-space-sm cursor-pointer">
<input defaultChecked className="accent-primary-container" name="payment_mode" type="radio" />
<span className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold">UPI (Google Pay, PhonePe, Paytm)</span>
</label>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-primary text-on-primary uppercase">Recommended</span>
</div>
<div className="mt-space-md pl-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
<div className="flex-1 flex items-center bg-surface-container-lowest px-space-md py-2 rounded">
<span className="material-symbols-outlined text-secondary text-[18px] mr-2">alternate_email</span>
<input className="w-full bg-transparent font-body-md text-body-md text-primary font-semibold focus:outline-none" type="text" defaultValue="vikram@okaxis" />
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
</div>
<button className="px-space-md py-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded hover:bg-primary-container transition-colors shadow-sm" type="button">
                  Pay via UPI
                </button>
</div>
</div>

<div className="bg-surface-container p-space-md rounded hover:bg-surface-container-high transition-colors">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<label className="flex items-center gap-space-sm cursor-pointer">
<input className="accent-primary-container" name="payment_mode" type="radio" />
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-primary font-bold uppercase">HDFC Regalia Infinite Visa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-mono">•••• 4092</span>
</div>
</label>
<div className="flex items-center gap-space-sm pl-6 sm:pl-0">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">CVV:</span>
<input className="w-14 bg-surface-container-lowest text-center font-mono py-1 rounded focus:outline-none text-primary font-bold" maxLength="3" placeholder="•••" type="password" />
<span className="font-label-sm text-label-sm text-on-surface-variant">Exp: 09/28</span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<label className="flex items-center gap-space-sm cursor-pointer">
<input className="accent-primary-container" name="payment_mode" type="radio" />
<span className="font-label-md text-label-md text-primary font-bold uppercase">Net Banking</span>
</label>
<div className="hidden sm:flex items-center gap-1">
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface">HDFC</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface">ICICI</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface">SBI</span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface">AXIS</span>
</div>
</div>
</div>

<div className="bg-surface-container p-space-md rounded hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<label className="flex items-center gap-space-sm cursor-pointer">
<input className="accent-primary-container" name="payment_mode" type="radio" />
<div>
<span className="font-label-md text-label-md text-primary font-bold uppercase">Cash on Delivery (COD)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-2">(Max Order ₹50,000)</span>
</div>
</label>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">+₹150 Handling Fee</span>
</div>
</div>
</div>
</div>
    </>
  );
}
