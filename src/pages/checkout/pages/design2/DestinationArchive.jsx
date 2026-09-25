import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
export default function DestinationArchive() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="flex flex-col gap-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">done_all</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 01 • Destination Archive</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">
                  Vikramaditya K. Singhania • 42/1 Brunton Rd, Ashok Nagar, Bengaluru, KA 560025 (+91 98450 12890)
                </span>
</div>
</div>
<button className="shrink-0 px-space-sm py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:bg-surface-container-high transition-colors" type="button">
              Edit Spec
            </button>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex items-center justify-between gap-space-md">
<div className="flex items-start gap-space-sm min-w-0">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">done_all</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Step 02 • Armored Freight Manifest</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold truncate">
                  Insured Armored Air Courier • Est. Transit Window: 48h (Cryo-Lock + Realtime Dual GPS Tracked)
                </span>
</div>
</div>
<button className="shrink-0 px-space-sm py-1 rounded font-label-sm text-label-sm uppercase tracking-wider text-secondary hover:bg-surface-container-high transition-colors" type="button">
              Change Rail
            </button>
</div>
</div>
    </>
  );
}
