import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiShield, FiTruck, FiRotateCcw, FiCheckCircle, FiClock, FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";

const announcementItems = [
  { text: "Secure payments", icon: FiShield },
  { text: "Free delivery above ₹1,999", icon: FiTruck },
  { text: "Easy 7-day returns", icon: FiRotateCcw },
  { text: "Verified authentic craft", icon: FiCheckCircle },
  { text: "Atelier Certified", icon: HiCheckBadge },
  { text: "48h Express Dispatch", icon: FiClock },
];

const navCategories = [
  { name: "Discover", path: "discover" },
  { name: "Watches", path: "watches" },
  { name: "Handcrafts", path: "handcrafts" },
  { name: "Leather", path: "leather" },
  { name: "Home & Living", path: "home-living" },
  { name: "Gifts", path: "gifts" },
  { name: "New Arrivals", path: "new-arrivals" },
  { name: "Limited Editions", path: "limited-editions" },
  { name: "Offers", path: "special-offers" },
];

export default function Header({ showNavStrip = true }) {
  const [visible, setVisible] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const reduceMotion = useReducedMotion();

  const announcementTrack = [
    ...announcementItems,
    ...announcementItems,
    ...announcementItems,
  ];

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 10) {
        setVisible(true);
      } else if (current < lastScrollY.current) {
        setVisible(true);   // scrolling up → show
      } else {
        setVisible(false);  // scrolling down → hide
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      >
        {/* Continuous Infinite Announcement Carousel */}
        <div className="w-full bg-surface-container-high py-1.5 overflow-hidden border-b border-outline-variant/30 select-none relative">
          <div
            className="relative w-full overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex items-center whitespace-nowrap font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
              style={{ width: "max-content" }}
              animate={reduceMotion ? {} : { x: ["0%", "-33.333%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={reduceMotion ? {} : { animationPlayState: "paused" }}
            >
              {announcementTrack.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 px-6">
                    <Icon className="text-[13px] text-primary flex-shrink-0" />
                    <span className="font-semibold">{item.text}</span>
                    <span className="text-outline-variant/80 ml-6 select-none font-bold">
                      •
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Main Header Row */}
        <div className="w-full bg-surface border-b border-outline-variant/20">
          <div className="h-16 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-6">
            {/* Left: Mobile Hamburger + Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-1"
              >
                <FiMenu className="text-xl" />
              </button>

              <a
                className="group flex items-center gap-1.5 text-on-surface decoration-0"
                data-path="home"
                href="/"
              >
                <span className="font-poppins text-2xl font-extrabold tracking-tight text-on-surface lowercase">
                  amihive
                </span>
              </a>
            </div>

            {/* Middle: Desktop Search Input with Amber Button */}
            <div className="flex-1 max-w-xl lg:max-w-2xl hidden md:block">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("featured") || document.getElementById("deals");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center w-full"
              >
                <div className="relative flex-1 flex items-center">
                  <FiSearch className="absolute left-3.5 text-outline text-[17px] pointer-events-none" />
                  <input
                    className="w-full h-10 pl-10 pr-4 bg-surface-container-lowest rounded-l-md font-instrument text-sm text-on-surface placeholder:text-outline/70 focus:outline-none border border-r-0 border-outline-variant/40 focus:border-primary transition-colors"
                    placeholder="Search watches, straps and handcrafted pieces..."
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 px-5 bg-[#ff9f1c] hover:bg-[#e07f00] text-[#131a2c] font-bold text-xs uppercase tracking-wider rounded-r-md transition-colors flex items-center justify-center cursor-pointer border border-[#ff9f1c]"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Right: Actions (Wishlist, Account, Cart) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={() => setMobileSearchOpen((o) => !o)}
                aria-label="Toggle Search"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-md hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors"
              >
                <FiSearch className="text-lg" />
              </button>

              <a
                aria-label="Wishlist"
                className="relative h-9 px-2.5 sm:px-3 flex items-center gap-1.5 rounded-md hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors font-instrument text-xs font-semibold"
                data-path="wishlist"
                href="#bestsellers"
              >
                <FiHeart className="text-base sm:text-lg text-primary" />
                <span className="hidden sm:inline">Wishlist</span>
                <span className="min-w-[18px] h-[18px] bg-secondary-container text-on-secondary rounded-full font-label-caps text-[9px] flex items-center justify-center px-1 font-bold">
                  3
                </span>
              </a>

              <a
                aria-label="Cart"
                className="relative h-9 px-2.5 sm:px-3 flex items-center gap-1.5 rounded-md hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors font-instrument text-xs font-semibold"
                data-path="cart"
                href="#deals"
              >
                <FiShoppingBag className="text-base sm:text-lg text-primary" />
                <span className="hidden sm:inline">Cart</span>
                <span className="min-w-[18px] h-[18px] bg-primary text-on-primary rounded-full font-label-caps text-[9px] flex items-center justify-center px-1 font-bold">
                  2
                </span>
              </a>

              <button
                aria-label="Account profile"
                className="h-9 px-2.5 sm:px-3 rounded-md hover:bg-surface-container text-on-surface-variant flex items-center gap-1.5 transition-colors font-instrument text-xs font-semibold cursor-pointer"
              >
                <FiUser className="text-base" />
                <span className="hidden lg:inline">Account</span>
              </button>
            </div>
          </div>

          {/* Desktop Category Nav Strip */}
          {showNavStrip && (
            <nav
              aria-label="Marketplace Navigation"
              className="h-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex items-center gap-6 overflow-x-auto text-xs font-medium text-on-surface-variant select-none border-t border-outline-variant/15"
            >
              <a href="#collection" className="font-semibold text-primary hover:text-primary transition-colors">
                Collection
              </a>
              <a href="#deals" className="hover:text-primary transition-colors flex items-center gap-1">
                <span>Deals</span>
                <span className="bg-[#cc1023] text-white text-[9px] px-1.5 py-0.2 rounded font-bold uppercase">Sale</span>
              </a>
              <a href="#categories" className="hover:text-primary transition-colors">
                Categories
              </a>
              <a href="#bestsellers" className="hover:text-primary transition-colors">
                Bestsellers
              </a>
              <a href="#customizer" className="hover:text-primary transition-colors">
                Customizer
              </a>
              <a href="#reviews" className="hover:text-primary transition-colors">
                Reviews
              </a>
              <a href="#care" className="hover:text-primary transition-colors">
                Care & Warranty
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[82vw] max-w-[340px] bg-surface z-[101] flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-surface-container-lowest"></div>
                  </div>
                  <span className="font-headline-sm text-headline-sm font-extrabold uppercase tracking-tight text-on-surface">
                    AMIHIVE
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface"
                  aria-label="Close menu"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              {/* Drawer Category Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                <p className="font-label-caps text-label-caps uppercase text-outline tracking-wider px-3 mb-2">
                  Categories
                </p>
                {navCategories.map((cat) => (
                  <a
                    key={cat.path}
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container text-body-md font-semibold transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-outline text-xs">›</span>
                  </a>
                ))}

                {/* Atelier Guarantees in Drawer */}
                <div className="pt-4 mt-4 border-t border-outline-variant/30 space-y-2 px-3">
                  <p className="font-label-caps text-label-caps uppercase text-outline tracking-wider mb-2">
                    Our Standards
                  </p>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                    <FiShield className="text-primary text-sm flex-shrink-0" />
                    <span>Secure Encrypted Payments</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                    <FiTruck className="text-primary text-sm flex-shrink-0" />
                    <span>Free Delivery Above ₹1,999</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                    <FiRotateCcw className="text-primary text-sm flex-shrink-0" />
                    <span>7-Day Easy Returns Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                    <HiCheckBadge className="text-primary text-sm flex-shrink-0" />
                    <span>Atelier Authenticity Certified</span>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Account CTA */}
              <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low">
                <button className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-sm">
                  Sign In / Register
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
