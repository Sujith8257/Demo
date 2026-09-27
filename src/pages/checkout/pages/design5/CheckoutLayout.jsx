import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
import RecipientDispatch from "./RecipientDispatch.jsx";
import GiftPresentation from "./GiftPresentation.jsx";
import WhiteGloveTransit from "./WhiteGloveTransit.jsx";
import GiftPayment from "./GiftPayment.jsx";
import GiftingValuation from "./GiftingValuation.jsx";
export default function CheckoutLayout() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full pb-space-xl">

<div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<span className="text-secondary font-bold">Heirloom Curation</span>
<span className="text-outline-variant">/</span>
<span>Presentation Atelier</span>
<span className="text-outline-variant">/</span>
<span className="text-primary font-bold">Gift Checkout</span>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-1 rounded">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Atelier Gifting Reserve Active • Order Ref: AMH-GIFT-9942</span>
</div>
</div>

<div className="mb-space-lg flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[24px]">featured_seasonal_and_gifts</span>
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Curated Gifting Protocol</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Milestone Heirloom Checkout</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Every timepiece prepared for milestone presentation arrives encapsulated in velvet-lined solid walnut, complete with diamond-engraved dedication and bespoke calligraphic dispatch.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"><div className="lg:col-span-8 flex flex-col gap-space-lg"><RecipientDispatch /><GiftPresentation /><WhiteGloveTransit /><GiftPayment /></div><GiftingValuation /></div>
</div>
    </>
  );
}
