import { useCheckoutUI } from "../../context/CheckoutUI.jsx";
import ClientDossier from "./ClientDossier.jsx";
import SecuredVaultDestination from "./SecuredVaultDestination.jsx";
import InsuredDispatch from "./InsuredDispatch.jsx";
import EscrowSettlement from "./EscrowSettlement.jsx";
import OrderSummary from "./OrderSummary.jsx";
export default function CheckoutLayout() {
  const { paymentTab, setPaymentTab, remaining, formatCountdown, accordionOpen, toggleAccordion, engraving, setEngraving, giftingIntent, setGiftingIntent } = useCheckoutUI();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin -mt-6 mb-space-xl z-30">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start"><div className="lg:col-span-7 flex flex-col gap-space-md"><ClientDossier /><SecuredVaultDestination /><InsuredDispatch /><EscrowSettlement /></div><OrderSummary /></div>
</div>
    </>
  );
}
