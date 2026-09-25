import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useCartInteractions } from "../../context/useCartInteractions.js";
import CuratedVaultHeader from "./CuratedVaultHeader.jsx";
import VaultCartGrid from "./VaultCartGrid.jsx";
import ArtisanAdditions from "./ArtisanAdditions.jsx";
import GiftingAssurance from "./GiftingAssurance.jsx";

export default function Design5({ onNavigateHome, onNavigateToCatalogue }){
  const cart=useCart();
  const { handleClick, handleChange }=useCartInteractions();
  return (
    <div className="amihive-page">
      <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main className="w-full pt-36 bg-surface min-h-screen" onClick={handleClick} onChange={handleChange}>
        <div className="flex flex-col w-full">
          <div className="w-full max-w-7xl mx-auto px-space-lg py-space-lg flex flex-col gap-space-xl">
            <CuratedVaultHeader />
            <VaultCartGrid />
            <ArtisanAdditions />
            <GiftingAssurance />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

