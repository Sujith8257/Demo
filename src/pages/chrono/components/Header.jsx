import BaseHeader from "../../../components/layout/Header.jsx";

export default function Header({ onNavigateHome, onNavigateToCatalogue, ...props }) {
  return (
    <BaseHeader
      showNavStrip={false}
      theme="variant5"
      onNavigateHome={onNavigateHome}
      onNavigateToCatalogue={onNavigateToCatalogue}
      {...props}
    />
  );
}
