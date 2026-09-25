import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useCartInteractions } from "../../context/useCartInteractions.js";
import ManifestBreadcrumbs from "./ManifestBreadcrumbs.jsx";
import ManifestHero from "./ManifestHero.jsx";
import AcquisitionGrid from "./AcquisitionGrid.jsx";

export default function Design4({ onNavigateHome, onNavigateToCatalogue }){
  const cart=useCart();
  const { handleClick, handleChange }=useCartInteractions();
  return (
    <div className="amihive-page">
      <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main className="w-full pt-36 bg-surface min-h-screen" onClick={handleClick} onChange={handleChange}>
        <div className="flex flex-col w-full">
          <div className="w-full max-w-7xl mx-auto px-space-lg py-space-lg">
            <ManifestBreadcrumbs />
            <ManifestHero />
            <AcquisitionGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

