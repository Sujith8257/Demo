import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import EscrowIntro from "./EscrowIntro.jsx";
import DestinationArchive from "./DestinationArchive.jsx";
import PaymentMechanism from "./PaymentMechanism.jsx";
import GuildCovenant from "./GuildCovenant.jsx";
import OrderSummary from "./OrderSummary.jsx";
import PreCheckout1 from "./PreCheckout1.jsx";
import CheckoutLayout from "./CheckoutLayout.jsx";
export default function Design2({ onNavigateHome, onNavigateToCart, onNavigateToCatalogue }){
  return (
    <div className="checkout-variant checkout-variant-2 min-h-screen bg-surface font-body-md text-on-surface">
      <Header onNavigateHome={onNavigateHome} onNavigateToCart={onNavigateToCart} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main id="main-content" className="w-full pt-28 bg-surface min-h-screen" aria-label="Checkout preview">
        <div className="flex flex-col w-full checkout-canvas"><PreCheckout1 /><CheckoutLayout /></div>
      </main>
      <Footer />
    </div>
  );
}

