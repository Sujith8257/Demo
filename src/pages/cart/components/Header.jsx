import { CartCount } from "./cartWidgets.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Header({ onNavigateHome, onNavigateToCatalogue }) {
  const cart = useCart();
  // Prefer props, then context callbacks
  const goHome = onNavigateHome || cart.onNavigateHome;
  const goCatalogue = onNavigateToCatalogue || cart.onNavigateToCatalogue;

  const handleLogoClick = (e) => {
    e.preventDefault();
    goHome?.();
  };
  const handleNavClick = (e) => {
    e.preventDefault();
    goCatalogue?.();
  };

  return (
    <>
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full bg-primary-container text-on-primary py-space-xs">
        <div className="max-w-7xl mx-auto px-space-lg flex items-center justify-between font-label-sm text-label-sm tracking-wider uppercase text-outline-variant">
          <div className="flex items-center gap-space-sm">
            <span>
              {"VERIFIED ATELIER ESCAPEMENT"}
            </span>
            <span className="text-primary-fixed-dim">
              {"•"}
            </span>
            <span>
              {"INSURED GLOBAL TRANSIT"}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-sm">
            <span>
              {"AUTHENTIC HOROLOGY CERTIFICATION"}
            </span>
            <span className="text-primary-fixed-dim">
              {"•"}
            </span>
            <span>
              {"7-DAY CALIBRE INSPECTION GUARANTEE"}
            </span>
          </div>
        </div>
      </div>
      <div className="h-20 w-full max-w-7xl mx-auto px-space-lg flex items-center justify-between gap-space-lg">
        <a className="flex items-center gap-space-sm focus:outline-none" data-path="home" href="#" onClick={handleLogoClick}>
          <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
              {"timelapse"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-primary font-bold leading-none">
              {"AMIHIVE"}
            </span>
            <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase leading-none mt-0.5">
              {"HAUTE HORLOGERIE"}
            </span>
          </div>
        </a>
        <div className="flex-1 max-w-xl hidden md:flex items-center">
          <div className="w-full flex items-center bg-surface-container-low px-space-md py-space-sm rounded-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="material-symbols-outlined text-outline text-[18px] mr-space-sm">
              {"search"}
            </span>
            <input className="w-full bg-transparent border-0 p-0 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" placeholder="Search references, movements, or calibres (e.g. 4130, Tourbillon)..." type="text" />
            <div className="flex items-center gap-space-xs pl-space-sm">
              <kbd className="font-label-sm text-label-sm bg-surface-container px-space-xs py-0.5 rounded-DEFAULT text-on-surface-variant font-mono">
                {"⌘K"}
              </kbd>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <a className="p-space-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" data-path="wishlist" href="#" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined text-[22px]">
              {"bookmark_border"}
            </span>
          </a>
          <a className="p-space-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" data-path="account-vault" href="#" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined text-[22px]">
              {"shield"}
            </span>
          </a>
          <a className="relative p-space-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" data-path="cart" href="#" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined text-[22px]">
              {"shopping_bag"}
            </span>
            <CartCount className="absolute top-1 right-1 w-4 h-4 rounded-full bg-secondary text-on-secondary font-label-sm text-[9px] flex items-center justify-center font-bold" />
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              {"person"}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-surface-container-lowest/90">
        <div className="max-w-7xl mx-auto px-space-lg">
          <nav className="flex items-center gap-space-lg overflow-x-auto py-space-sm" data-active-classes="text-primary font-bold">
            {["DISCOVER","LUXURY","AUTOMATIC","SMART","SPORTS","FASHION","CLASSIC","EVERYDAY","NEW ARRIVALS","LIMITED EDITIONS","OFFERS"].map((cat) => (
              <a key={cat} className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors cursor-pointer" href="#" onClick={handleNavClick}>
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}
