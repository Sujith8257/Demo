import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function GiftPayment() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">04</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Payment Method</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Safe and secure payment with full buyer protection.</p>
</div>
</div>
<div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span>256-Bit Secure Payment</span>
</div>
</div>

<div className="flex flex-col gap-space-sm">

<label className="flex items-start justify-between p-space-md rounded bg-surface-container-high cursor-pointer shadow-sm">
<div className="flex items-start gap-space-sm">
<input defaultChecked className="mt-1 accent-primary" name="payment_method" type="radio" defaultValue="upi" />
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">UPI (Google Pay, PhonePe, Paytm, QR)</span>
<span className="px-1.5 py-0.2 bg-secondary text-on-primary font-label-sm text-[9px] rounded font-bold uppercase">Fastest</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Google Pay, PhonePe, Paytm, BHIM, and Cred.</span>

<div className="mt-space-sm flex items-center gap-space-sm">
<input className="bg-surface-container-lowest px-space-md py-1.5 rounded font-body-sm text-body-sm text-on-surface focus:outline-none w-64 shadow-inner" placeholder="username@oksbi / mobile@upi" type="text" defaultValue="vikram.k@hdfcbank" />
<button className="px-space-md py-1.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold" type="button">Verify UPI ID</button>
</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Zero Surcharge</span>
</label>

<label className="flex items-start justify-between p-space-md rounded bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<input className="mt-1 accent-primary" name="payment_method" type="radio" defaultValue="card" />
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Credit / Debit Card (Visa, Mastercard, RuPay, Amex)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Safe and secure payment via 256-bit encryption.</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">credit_card</span>
</label>

<label className="flex items-start justify-between p-space-md rounded bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<input className="mt-1 accent-primary" name="payment_method" type="radio" defaultValue="netbanking" />
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Net Banking (RTGS / NEFT)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">HDFC, ICICI, SBI, Axis, Kotak, and all major Indian banks.</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">account_balance</span>
</label>

<label className="flex items-start justify-between p-space-md rounded bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<input className="mt-1 accent-primary" name="payment_method" type="radio" defaultValue="wire" />
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Direct Bank Transfer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Invoice and transfer details sent after order confirmation.</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">assured_workload</span>
</label>
</div>

<div className="mt-space-md p-space-sm rounded bg-surface-container-high flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">enhanced_encryption</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">
              All payments are securely processed with 256-bit SSL encryption and backed by our 7-day money-back guarantee.
            </span>
</div>
</section>
    </>
  );
}
