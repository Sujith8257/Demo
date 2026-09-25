import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useCartInteractions } from "../../context/useCartInteractions.js";
import NocturnalHero from "./NocturnalHero.jsx";
import DaylightCart from "./DaylightCart.jsx";
import Craftsmanship from "./Craftsmanship.jsx";
import CompanionCalibres from "./CompanionCalibres.jsx";

export default function Design3({ onNavigateHome, onNavigateToCatalogue }){
  const cart=useCart();
  const { handleClick, handleChange }=useCartInteractions();
  return (
    <div className="amihive-page">
      <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main className="w-full pt-36 bg-surface min-h-screen" onClick={handleClick} onChange={handleChange}>
        <div className="flex flex-col w-full">
          <NocturnalHero />
          <DaylightCart />
          <Craftsmanship />
          <CompanionCalibres />
        </div>
      </main>
      <Footer />
    </div>
  );
}

