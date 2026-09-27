import BaseHeader from "../../../components/Customer/CustomerHeader.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Header({ onNavigateHome, onNavigateToCatalogue, onNavigateToCart, ...props }) {
  const cart = useCart();
  const goHome = onNavigateHome || cart?.onNavigateHome;
  const goCatalogue = onNavigateToCatalogue || cart?.onNavigateToCatalogue;
  const goCart = onNavigateToCart || (() => window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <BaseHeader
      showNavStrip={true}
      theme="variant5"
      onNavigateHome={goHome}
      onNavigateToCatalogue={goCatalogue}
      onNavigateToCart={goCart}
      {...props}
    />
  );
}
