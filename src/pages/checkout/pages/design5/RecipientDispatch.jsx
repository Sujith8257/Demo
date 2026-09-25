import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function RecipientDispatch() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-7 h-7 rounded bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center font-bold">01</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Gifting Intent & Recipient Dispatch</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Choose how this acquisition is physically routed from the horological vault.</p>
</div>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">markunread_mailbox</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm my-space-md">
<label className="flex items-start gap-space-sm p-space-md rounded bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input className="mt-1 accent-primary" name="gifting_intent" type="radio" defaultValue="self" checked={giftingIntent === "self"} onChange={() => setGiftingIntent("self")} />
<div className="flex flex-col">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-bold">Deliver to Myself</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Receive the packaged coffret personally for direct in-hand presentation.</span>
</div>
</label>
<label className="flex items-start gap-space-sm p-space-md rounded bg-surface-container-high cursor-pointer shadow-sm">
<input className="mt-1 accent-secondary" name="gifting_intent" type="radio" defaultValue="recipient" checked={giftingIntent === "recipient"} onChange={() => setGiftingIntent("recipient")} />
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Send Directly to Gift Recipient</span>
<span className="px-1.5 py-0.2 bg-secondary text-on-primary font-label-sm text-[9px] rounded font-bold uppercase">Selected</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">White-glove armored dispatch straight to the recipient's private residence.</span>
</div>
</label>
</div>

<div className={["mt-space-md flex flex-col gap-space-md", giftingIntent === "recipient" ? "" : "hidden"].join(" ")}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold flex items-center justify-between">
<span>Recipient Full Name & Title</span>
<span className="text-secondary font-label-sm text-[10px]">Verified Profile</span>
</label>
<div className="relative">
<input className="w-full bg-surface-container-low px-space-md py-2.5 rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm" type="text" defaultValue="Arthur Pendelton / Director of Horology" />
<span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-secondary">verified</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold flex items-center justify-between">
<span>Recipient Contact Line</span>
<span className="text-on-surface-variant font-label-sm text-[10px]">Logistics Only</span>
</label>
<div className="relative">
<input className="w-full bg-surface-container-low px-space-md py-2.5 rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm" type="text" defaultValue="+91 97412 88301" />
<span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-on-surface-variant">smartphone</span>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant italic">Used solely for armored courier delivery coordination. Pricing details are strictly redacted.</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold">Recipient Vault / Residence Address</label>
<textarea className="w-full bg-surface-container-low px-space-md py-2 rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm resize-none" rows="2" defaultValue={"Villa 14, Palm Meadows, Whitefield, Bengaluru 560066, Karnataka"} />
</div>

<div className="p-space-md rounded bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block">Purchaser & Billing Identity</span>
<span className="font-body-sm text-body-sm text-on-surface font-bold">Vikramaditya K. • 42/1 Brunton Road, Bengaluru 560025</span>
</div>
</div>
<button className="text-secondary hover:text-primary font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1" type="button">
<span>Modify Billing</span>
<span className="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
</section>
    </>
  );
}
