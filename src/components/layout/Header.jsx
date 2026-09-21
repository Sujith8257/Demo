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

export default function Header() {
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
        <div className="w-full">
          <div className="h-16 max-w-[1760px] mx-auto px-margin flex items-center justify-between gap-3 sm:gap-space-md">
            {/* Left: Mobile Hamburger + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-space-md">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-1"
              >
                <FiMenu className="text-xl" />
              </button>

              <a
                className="group flex items-center gap-2 text-on-surface decoration-0"
                data-path="home"
                href="#"
              >
                <div className="w-3 h-3 rounded-full bg-primary relative flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-surface-container-lowest"></div>
                </div>
                <span className="font-headline-sm text-headline-sm tracking-tight font-extrabold text-on-surface uppercase text-lg sm:text-xl">
                  AMIHIVE
                </span>
              </a>
            </div>

            {/* Middle: Desktop Search Input */}
            <div className="flex-1 max-w-2xl lg:max-w-3xl xl:max-w-4xl hidden md:block">
              <div className="relative flex items-center">
                <FiSearch className="absolute left-space-sm text-outline text-[18px] pointer-events-none" />
                <input
                  className="w-full h-11 pl-11 pr-4 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest border border-outline-variant/20 focus:border-primary transition-colors"
                  placeholder="Search watches, handcrafted pieces, gifts and more..."
                  type="text"
                />
              </div>
            </div>

            {/* Right: Actions (Mobile Search Toggle, Wishlist, Cart, Profile) */}
            <div className="flex items-center gap-1 sm:gap-space-sm">
              <button
                onClick={() => setMobileSearchOpen((o) => !o)}
                aria-label="Toggle Search"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors"
              >
                <FiSearch className="text-lg" />
              </button>

              <a
                aria-label="Wishlist"
                className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors"
                data-path="wishlist"
                href="#"
              >
                <FiHeart className="text-lg sm:text-xl" />
                <span className="absolute top-1 right-1 min-w-[17px] h-[17px] bg-secondary-container text-on-secondary rounded-full font-label-caps text-[9px] leading-tight flex items-center justify-center px-1 font-bold">
                  3
                </span>
              </a>

              <a
                aria-label="Cart"
                className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-surface-container hover:text-on-surface text-on-surface-variant transition-colors"
                data-path="cart"
                href="#"
              >
                <FiShoppingBag className="text-lg sm:text-xl" />
                <span className="absolute top-1 right-1 min-w-[17px] h-[17px] bg-primary text-on-primary rounded-full font-label-caps text-[9px] leading-tight flex items-center justify-center px-1 font-bold">
                  2
                </span>
              </a>

              <button
                aria-label="Account profile"
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-0.5 text-on-primary hover:bg-primary-container transition-colors"
              >
                <FiUser className="text-[15px]" />
              </button>
            </div>
          </div>

          {/* Expandable Mobile Search Bar */}
          <AnimatePresence>
            {mobileSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden px-margin py-2.5 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center gap-2 overflow-hidden"
              >
                <div className="relative flex-1 flex items-center">
                  <FiSearch className="absolute left-3 text-outline text-[16px] pointer-events-none" />
                  <input
                    autoFocus
                    className="w-full h-10 pl-9 pr-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container"
                    placeholder="Search watches, leather, ceramics..."
                    type="text"
                  />
                </div>
                <button
                  onClick={() => setMobileSearchOpen(false)}
                  className="text-on-surface-variant hover:text-on-surface text-xs font-semibold px-2 py-1.5 uppercase font-label-caps"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop & Tablet Category Bar */}
          <nav
            aria-label="Primary Marketplace Categories"
            className="h-11 sm:h-12 max-w-[1760px] mx-auto px-margin flex items-center gap-5 sm:gap-6 lg:gap-8 overflow-x-auto text-body-sm font-label-md select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {navCategories.map((cat, i) => (
              <a
                key={cat.path}
                className={`whitespace-nowrap transition-colors flex items-center gap-1 ${
                  i === 0
                    ? "text-on-surface font-bold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                data-path={cat.path}
                href="#"
              >
                {cat.name}
              </a>
            ))}
          </nav>
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
