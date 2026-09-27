import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function EscrowPayment() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm">4</span>
<h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">Payment Method</h2>
</div>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span className="material-symbols-outlined text-[15px] text-secondary">security</span> 100% Secure Checkout
            </div>
</div>
<div className="space-y-space-md">

<div className="p-space-md bg-surface-container-low rounded-xl">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-on-primary"></div>
</div>
<div>
<span className="font-label-lg text-label-lg text-primary font-bold">UPI / Instant Pay</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Google Pay, PhonePe, Paytm, BHIM, Cred</span>
</div>
</div>
<span className="px-2 py-0.5 bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-bold uppercase rounded shadow-sm">0% Surcharge</span>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-lg space-y-space-sm">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Enter UPI ID</label>
<div className="flex flex-col sm:flex-row items-center gap-space-sm">
<div className="relative w-full flex-1">
<input className="w-full bg-surface-container-low text-primary font-body-md text-body-md px-space-md py-2.5 rounded focus:outline-none focus:bg-surface-container transition-colors" type="text" defaultValue="singhania@okhdfcbank" />
<span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-secondary">check_circle</span>
</div>
<button className="w-full sm:w-auto px-space-lg py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded transition-colors whitespace-nowrap font-bold shadow-sm" type="button">
                    Verify & Pay
                  </button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 pt-1">
<span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                  Your payment is protected by 256-bit encryption with a 7-day trial return guarantee.
                </p>
</div>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Credit / Debit Card (Visa, Mastercard, RuPay, Amex)</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Secure 256-bit encrypted gateway • Instant confirmation</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">credit_card</span>
</div>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Net Banking</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">HDFC, ICICI, SBI, Axis, Kotak, and all major banks</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">account_balance</span>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-bold">Direct Bank Transfer (NEFT / RTGS)</span>
<span className="block font-body-sm text-body-sm text-on-surface-variant">Recommended for high-value orders</span>
</div>
</div>
<span className="px-2 py-0.5 bg-surface-container-highest text-primary font-label-sm text-label-sm uppercase rounded">Recommended</span>
</div>
</div>
</section>
    </>
  );
}
