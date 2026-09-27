import BaseHeader from "../../../components/Customer/CustomerHeader.jsx";

export default function Header({ onNavigateHome, onNavigateToCatalogue, onNavigateToCart, ...props }) {
  return (
    <BaseHeader
      showNavStrip={true}
      theme="variant5"
      onNavigateHome={onNavigateHome}
      onNavigateToCatalogue={onNavigateToCatalogue}
      onNavigateToCart={onNavigateToCart}
      {...props}
    />
  );
}
