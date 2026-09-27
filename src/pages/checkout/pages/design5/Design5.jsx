import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipientDispatch from "./RecipientDispatch.jsx";
import GiftPresentation from "./GiftPresentation.jsx";
import WhiteGloveTransit from "./WhiteGloveTransit.jsx";
import GiftPayment from "./GiftPayment.jsx";
import GiftingValuation from "./GiftingValuation.jsx";
import CheckoutLayout from "./CheckoutLayout.jsx";
export default function Design5({ onNavigateHome, onNavigateToCart, onNavigateToCatalogue }){
  return (
    <div className="checkout-variant checkout-variant-5 min-h-screen bg-surface font-body-md text-on-surface">
      <Header onNavigateHome={onNavigateHome} onNavigateToCart={onNavigateToCart} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main id="main-content" className="w-full pt-28 bg-surface min-h-screen" aria-label="Heirloom Gifting checkout preview">
        <div className="flex flex-col w-full checkout-canvas"><CheckoutLayout /></div>
      </main>
      <Footer />
    </div>
  );
}

