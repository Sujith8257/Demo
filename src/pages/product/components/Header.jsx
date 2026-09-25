import BaseHeader from "../../../components/layout/Header.jsx";

export default function Header({ onNavigateHome, onNavigateToCatalogue, onNavigateToCart, ...props }) {
  return (
    <BaseHeader
      showNavStrip={false}
      theme="variant5"
      onNavigateHome={onNavigateHome}
      onNavigateToCatalogue={onNavigateToCatalogue}
      onNavigateToCart={onNavigateToCart}
      {...props}
    />
  );
}
