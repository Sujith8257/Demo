import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function PaymentMechanism() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest p-space-lg rounded shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center justify-between border-b pb-space-sm border-surface-container-highest">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
<span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">Payment Method</span>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-widest bg-tertiary-container/10 px-2 py-0.5 rounded">
              Secure Payment
            </span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs bg-surface-container-high p-1 rounded">
<button className="py-2 px-1 text-center rounded font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface" type="button" onClick={() => setPaymentTab("upi")} data-payment-active={paymentTab === "upi"}>
              UPI Instant
            </button>
<button className="py-2 px-1 text-center rounded font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-lowest text-primary font-bold shadow-sm" type="button" onClick={() => setPaymentTab("card")} data-payment-active={paymentTab === "card"}>
              Credit / Debit
            </button>
<button className="py-2 px-1 text-center rounded font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface" type="button" onClick={() => setPaymentTab("netbanking")} data-payment-active={paymentTab === "netbanking"}>
              Net Banking
            </button>
<button className="py-2 px-1 text-center rounded font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-on-surface" type="button" onClick={() => setPaymentTab("wire")} data-payment-active={paymentTab === "wire"}>
              Bank Transfer
            </button>
</div>
<div className="flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row gap-space-md">
<div className="w-full md:w-1/2 p-space-md bg-primary-container text-on-primary rounded shadow-md flex flex-col justify-between h-48 relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/15 rounded-full blur-2xl"></div>
<div className="flex items-center justify-between relative z-10">
<div className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">Secure Card</span>
</div>
<span className="font-headline-sm text-headline-sm italic tracking-widest font-bold text-secondary">WORLD ELITE</span>
</div>
<div className="relative z-10 my-auto">
<div className="font-headline-sm text-headline-sm tracking-widest font-mono text-surface-bright">
                    •••• •••• •••• 4092
                  </div>
<div className="flex items-center gap-space-md mt-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">EXP 08/28</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">CVC Encrypted</span>
</div>
</div>
<div className="flex items-center justify-between relative z-10">
<div>
<span className="font-label-sm text-label-sm uppercase text-on-primary-container block">Cardholder</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-semibold">V K SINGHANIA</span>
</div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-secondary/80"></div>
<div className="w-7 h-7 rounded-full bg-primary/70"></div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-between gap-space-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Cardholder Name
                  </label>
<input className="w-full bg-surface-container-low text-on-surface px-space-md py-2.5 rounded font-body-sm text-body-sm focus:outline-none cursor-default font-mono" readOnly type="text" defaultValue="VIKRAMADITYA K SINGHANIA" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                    Card Number
                  </label>
<div className="relative flex items-center">
<input className="w-full bg-surface-container-low text-on-surface px-space-md py-2.5 rounded font-body-sm text-body-sm focus:outline-none cursor-default font-mono tracking-wider" readOnly type="text" defaultValue="•••• •••• •••• 4092" />
<span className="absolute right-3 material-symbols-outlined text-secondary text-[20px]">lock</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                      Expiry Date
                    </label>
<input className="w-full bg-surface-container-low text-on-surface px-space-md py-2.5 rounded font-body-sm text-body-sm focus:outline-none cursor-default font-mono text-center" readOnly type="text" defaultValue="08 / 28" />
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                      CVV
                    </label>
<input className="w-full bg-surface-container text-on-surface px-space-md py-2.5 rounded font-body-sm text-body-sm focus:outline-none font-mono text-center" type="password" defaultValue="882" />
</div>
</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>256-bit encryption active. Your card details are stored securely.</span>
</div>
<div className="flex flex-col gap-space-sm pt-space-xs">
<label className="flex items-center gap-space-sm cursor-pointer">
<input defaultChecked className="w-4 h-4 text-primary bg-surface-container-lowest rounded accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Save card securely for future purchases</span>
</label>
<label className="flex items-center gap-space-sm cursor-pointer">
<input defaultChecked className="w-4 h-4 text-primary bg-surface-container-lowest rounded accent-primary cursor-pointer" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Billing address is same as shipping address</span>
</label>
</div>
</div>
<div className="pt-space-md border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-space-md">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface py-2.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Back to Shipping</span>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-widest shadow-md hover:bg-primary transition-all" type="button">
<span>Review & Complete Order</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
    </>
  );
}
