import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import AccountTelemetry from "./AccountTelemetry.jsx";
import RapidDestination from "./RapidDestination.jsx";
import TransitVelocity from "./TransitVelocity.jsx";
import InstantPayment from "./InstantPayment.jsx";
import OrderSummary from "./OrderSummary.jsx";
import CheckoutLayout from "./CheckoutLayout.jsx";
import PostCheckout1 from "./PostCheckout1.jsx";
export default function Design3({ onNavigateHome, onNavigateToCart, onNavigateToCatalogue }){
  return (
    <div className="checkout-variant checkout-variant-3 min-h-screen bg-surface font-body-md text-on-surface">
      <Header onNavigateHome={onNavigateHome} onNavigateToCart={onNavigateToCart} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main id="main-content" className="w-full pt-[88px] sm:pt-[100px] min-h-screen" aria-label="Express Velocity checkout preview">
        <div className="flex flex-col w-full checkout-canvas"><CheckoutLayout /><PostCheckout1 /></div>
      </main>
      <Footer />
    </div>
  );
}

