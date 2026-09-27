import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
import EscrowIntro from "./EscrowIntro.jsx";
import DestinationArchive from "./DestinationArchive.jsx";
import PaymentMechanism from "./PaymentMechanism.jsx";
import GuildCovenant from "./GuildCovenant.jsx";
import OrderSummary from "./OrderSummary.jsx";
export default function CheckoutLayout() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"><div className="lg:col-span-8 flex flex-col gap-space-lg"><EscrowIntro /><DestinationArchive /><PaymentMechanism /><GuildCovenant /></div><OrderSummary /></div>
</div>
    </>
  );
}
