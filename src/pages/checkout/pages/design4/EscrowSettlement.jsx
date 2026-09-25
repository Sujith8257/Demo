import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function EscrowSettlement() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
<div className="p-space-lg flex items-center justify-between bg-primary-container text-on-primary">
<div className="flex items-center gap-space-md">
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold">
                04
              </div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Final Clearance</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Escrow Settlement & Authorization</h3>
</div>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary-fixed bg-primary px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[16px]">lock_clock</span> 7-Day Protection Active
            </div>
</div>
<div className="p-space-lg space-y-space-md">

<div className="p-space-md bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">verified</span>
<div>
<span className="font-label-md text-label-md text-primary block">Conditional Atelier Escrow Hold</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  No funds are cleared to the master atelier until your <strong className="text-on-surface">7-Day Precision Trial</strong> completes. If timekeeping drifts outside ISO 3159 chronometer parameters or dial flaws emerge, initiate a zero-cost reverse courier return for an immediate 100% refund.
                </p>
</div>
</div>

<div className="grid grid-cols-3 gap-space-xs bg-surface-container p-1 rounded-lg">
<button className="py-2.5 px-space-sm rounded font-label-md text-label-md uppercase tracking-wider text-center bg-surface-container-lowest text-primary shadow-sm" id="tab-upi" type="button" onClick={() => setPaymentTab("upi")} data-active={paymentTab === "upi"}>
                UPI Escrow / QR
              </button>
<button className="py-2.5 px-space-sm rounded font-label-md text-label-md uppercase tracking-wider text-center text-on-surface-variant hover:text-primary" id="tab-card" type="button" onClick={() => setPaymentTab("card")} data-active={paymentTab === "card"}>
                Encrypted Card
              </button>
<button className="py-2.5 px-space-sm rounded font-label-md text-label-md uppercase tracking-wider text-center text-on-surface-variant hover:text-primary" id="tab-netbanking" type="button" onClick={() => setPaymentTab("netbanking")} data-active={paymentTab === "netbanking"}>
                High-Value Wire
              </button>
</div>

<div className={["space-y-space-md pt-space-xs", paymentTab !== "upi" ? "hidden" : ""].join(" ")} id="panel-upi">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-center">
<div className="space-y-space-sm">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Enter Virtual Payment Address (VPA)</label>
<div className="relative">
<input className="w-full bg-surface-container-low px-space-md py-3 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="username@bank" type="text" defaultValue="vikram.singhania@okhdfcbank" />
<span className="material-symbols-outlined absolute right-3 top-3.5 text-secondary text-[20px]">verified</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-secondary">security</span>
<span>Instant authorization via Google Pay, PhonePe, BHIM, Cred</span>
</div>
</div>

<div className="bg-surface-container p-space-md rounded-lg flex items-center gap-space-md">
<div className="w-24 h-24 bg-surface-container-lowest p-1.5 rounded shadow-sm flex-shrink-0 flex items-center justify-center">

<svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100">
<rect height="30" rx="3" width="30" x="0" y="0"></rect>
<rect fill="#fff" height="20" width="20" x="5" y="5"></rect>
<rect height="12" width="12" x="9" y="9"></rect>
<rect height="30" rx="3" width="30" x="70" y="0"></rect>
<rect fill="#fff" height="20" width="20" x="75" y="5"></rect>
<rect height="12" width="12" x="79" y="79"></rect>
<rect height="30" rx="3" width="30" x="0" y="70"></rect>
<rect fill="#fff" height="20" width="20" x="5" y="75"></rect>
<rect height="12" width="12" x="9" y="79"></rect>
<rect height="8" width="8" x="40" y="10"></rect>
<rect height="18" width="8" x="52" y="10"></rect>
<rect height="6" width="12" x="40" y="38"></rect>
<rect height="12" width="15" x="60" y="42"></rect>
<rect height="22" width="8" x="40" y="60"></rect>
<rect height="8" width="15" x="55" y="70"></rect>
<rect height="12" width="12" x="78" y="45"></rect>
<rect height="20" width="10" x="80" y="70"></rect>
</svg>
</div>
<div>
<span className="font-label-md text-label-md text-primary block">Dynamic Session QR</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Scan with any banking app to lock the ₹43,270 tranche directly into AMIHIVE Escrow Trust.
                    </p>
</div>
</div>
</div>
</div>

<div className={["space-y-space-sm pt-space-xs", paymentTab !== "card" ? "hidden" : ""].join(" ")} id="panel-card">
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Cardholder Designation</label>
<input className="w-full bg-surface-container-low px-space-md py-3 rounded text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="VIKRAMADITYA K SINGHANIA" type="text" />
</div>
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Vault Tokenized Card Number</label>
<div className="relative">
<input className="w-full bg-surface-container-low px-space-md py-3 rounded text-on-surface font-mono text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="4532 •••• •••• 9921" type="text" />
<span className="material-symbols-outlined absolute right-3 top-3.5 text-secondary text-[20px]">credit_card</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Expiry</label>
<input className="w-full bg-surface-container-low px-space-md py-3 rounded text-on-surface font-mono text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="09 / 28" type="text" />
</div>
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">CVV / CVC</label>
<input className="w-full bg-surface-container-low px-space-md py-3 rounded text-on-surface font-mono text-body-md focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" maxLength="4" placeholder="•••" type="password" />
</div>
</div>
</div>

<div className={["space-y-space-sm pt-space-xs", paymentTab !== "netbanking" ? "hidden" : ""].join(" ")} id="panel-netbanking">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Select Designated Clearing Bank</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
<button className="p-space-sm bg-surface-container rounded text-center font-label-sm text-label-sm text-primary hover:bg-surface-container-high transition-colors" type="button">HDFC Imperia</button>
<button className="p-space-sm bg-surface-container rounded text-center font-label-sm text-label-sm text-primary hover:bg-surface-container-high transition-colors" type="button">ICICI Wealth</button>
<button className="p-space-sm bg-surface-container rounded text-center font-label-sm text-label-sm text-primary hover:bg-surface-container-high transition-colors" type="button">Axis Burgundy</button>
<button className="p-space-sm bg-surface-container rounded text-center font-label-sm text-label-sm text-primary hover:bg-surface-container-high transition-colors" type="button">Kotak Privy</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">RTGS transfers above ₹5,00,000 are allocated immediate dual-signatory escrow certificates automatically.</p>
</div>
</div>
</div>
    </>
  );
}
