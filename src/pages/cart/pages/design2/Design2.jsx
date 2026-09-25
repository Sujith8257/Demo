import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useCartInteractions } from "../../context/useCartInteractions.js";
import StatusBar from "./StatusBar.jsx";
import PerformanceHero from "./PerformanceHero.jsx";
import CartColumns from "./CartColumns.jsx";
import Accessories from "./Accessories.jsx";
import AssuranceBanner from "./AssuranceBanner.jsx";
import EmptyCartModal from "./EmptyCartModal.jsx";
import MobileCheckout from "./MobileCheckout.jsx";

export default function Design2({ onNavigateHome, onNavigateToCatalogue }){
  const cart=useCart();
  const { handleClick, handleChange }=useCartInteractions();
  return (
    <div className="amihive-page">
      <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main className="w-full pt-36 bg-surface min-h-screen" onClick={handleClick} onChange={handleChange}>
        <div className="flex flex-col w-full">
          <div className="max-w-7xl mx-auto px-space-lg w-full pb-space-xl">
            <StatusBar />
            <PerformanceHero />
            <CartColumns />
            <Accessories />
            <AssuranceBanner />
          </div>
          <EmptyCartModal />
          <MobileCheckout />
        </div>
      </main>
      <Footer />
    </div>
  );
}

