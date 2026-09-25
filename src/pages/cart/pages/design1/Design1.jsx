import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { useCartInteractions } from "../../context/useCartInteractions.js";
import Breadcrumbs from "./Breadcrumbs.jsx";
import CartHero from "./CartHero.jsx";
import CartColumns from "./CartColumns.jsx";
import Accessories from "./Accessories.jsx";
import RecentlyViewed from "./RecentlyViewed.jsx";

export default function Design1({ onNavigateHome, onNavigateToCatalogue }){
  const cart=useCart();
  const { handleClick, handleChange }=useCartInteractions();
  return (
    <div className="amihive-page">
      <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue} />
      <main className="w-full pt-36 bg-surface min-h-screen" onClick={handleClick} onChange={handleChange}>
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden bg-background">
            <div className="absolute -top-40 right-10 w-[540px] h-[540px] rounded-full bg-secondary-fixed/20 blur-[120px] pointer-events-none">
            </div>
            <div className="absolute top-[40%] -left-32 w-[480px] h-[480px] rounded-full bg-primary-fixed/25 blur-[140px] pointer-events-none">
            </div>
            <div className="max-w-7xl mx-auto px-space-lg pt-space-md pb-space-xl">
              <Breadcrumbs />
              <CartHero />
              <CartColumns />
              <Accessories />
              <RecentlyViewed />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

