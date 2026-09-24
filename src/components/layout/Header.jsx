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

export default function Header({ showNavStrip = true, theme = "default", onNavigateToCatalogue, onNavigateHome }) {
  const isPetrol = theme === "variant5" || theme === "petrol";
  const [visible, setVisible] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${
          isPetrol
            ? "bg-[#123B3A]/98 shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
            : "bg-surface/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Continuous Infinite Announcement Carousel */}
        <div
          className={`w-full py-1.5 overflow-hidden border-b select-none relative ${
            isPetrol
              ? "bg-[#0D2D2C] border-[#123B3A]/60 text-[#DDE9E4]"
              : "bg-surface-container-high border-outline-variant/30 text-on-surface-variant"
          }`}
        >
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
              className={`flex items-center whitespace-nowrap font-label-caps text-label-caps uppercase tracking-wider ${
                isPetrol ? "text-[#F7F6F2]" : "text-on-surface-variant"
              }`}
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
                    <Icon className={`text-[13px] flex-shrink-0 ${isPetrol ? "text-[#C7A66A]" : "text-primary"}`} />
                    <span className={`font-semibold tracking-wide ${isPetrol ? "text-[#F7F6F2]" : ""}`}>{item.text}</span>
                    <span className={`${isPetrol ? "text-[#C7A66A]/60" : "text-outline-variant/80"} ml-6 select-none font-bold`}>
                      •
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Main Header Row */}
        <div className={`w-full border-b ${isPetrol ? "bg-[#123B3A] border-white/10" : "bg-surface border-outline-variant/20"}`}>
          <div className="h-14 sm:h-16 max-w-[1320px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-6">
            {/* Left: Mobile Hamburger + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className={`md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center transition-colors -ml-1 ${
                  isPetrol ? "text-white hover:bg-white/10" : "text-on-surface hover:bg-surface-container"
                }`}
              >
                <FiMenu className="text-lg sm:text-xl" />
              </button>

              <a
                className="group flex items-center gap-1.5 text-on-surface decoration-0 select-none cursor-pointer"
                data-path="home"
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
              >
                <span className={`font-poppins text-xl sm:text-2xl font-extrabold tracking-tight lowercase ${
                  isPetrol ? "text-white group-hover:text-[#C7A66A] transition-colors" : "text-on-surface"
                }`}>
                  amihive
                </span>
              </a>
            </div>

            {/* Middle: Desktop Search Input with Amber / Champagne Button */}
            <div className="flex-1 max-w-xl lg:max-w-2xl hidden md:block">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onNavigateToCatalogue) {
                    onNavigateToCatalogue({ query: searchQuery.trim() });
                  } else {
                    const target = document.getElementById("featured") || document.getElementById("deals");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative flex items-center w-full"
              >
                <div className="relative flex-1 flex items-center">
                  <FiSearch className="absolute left-3.5 text-outline text-[17px] pointer-events-none" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 bg-white rounded-l-md font-instrument text-sm text-[#171B1B] placeholder:text-[#707776] focus:outline-none border border-r-0 border-outline-variant/40 focus:border-[#123B3A] transition-colors"
                    placeholder="Search watches, straps and handcrafted pieces..."
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className={`h-10 px-5 font-bold text-xs uppercase tracking-wider rounded-r-md transition-colors flex items-center justify-center cursor-pointer border ${
                    isPetrol
                      ? "bg-[#C7A66A] hover:bg-[#B28E52] text-[#171B1B] border-[#C7A66A]"
                      : "bg-[#ff9f1c] hover:bg-[#e07f00] text-[#131a2c] border-[#ff9f1c]"
                  }`}
                >
                  Search
                </button>
              </form>
            </div>

            {/* Right: Actions (Search Toggle, Wishlist, Account, Cart) */}
            <div className="flex items-center gap-1 sm:gap-2.5">
              <button
                onClick={() => setMobileSearchOpen((o) => !o)}
                aria-label="Toggle Search"
                className={`md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md transition-colors ${
                  mobileSearchOpen
                    ? isPetrol
                      ? "bg-[#C7A66A] text-[#171B1B]"
                      : "bg-primary text-on-primary"
                    : isPetrol
                    ? "text-[#C7A66A] hover:bg-white/10"
                    : "hover:bg-surface-container hover:text-on-surface text-on-surface-variant"
                }`}
              >
                <FiSearch className="text-base sm:text-lg" />
              </button>

              <a
                aria-label="Wishlist"
                className={`relative h-8 sm:h-9 px-2 sm:px-3 flex items-center gap-1 sm:gap-1.5 rounded-md transition-colors font-instrument text-xs font-semibold ${
                  isPetrol ? "text-white/90 hover:bg-white/10 hover:text-white" : "hover:bg-surface-container hover:text-on-surface text-on-surface-variant"
                }`}
                data-path="wishlist"
                href="#bestsellers"
              >
                <FiHeart className={`text-base sm:text-lg ${isPetrol ? "text-[#C7A66A]" : "text-primary"}`} />
                <span className="hidden sm:inline">Wishlist</span>
                <span className={`min-w-[16px] sm:min-w-[18px] h-4 sm:h-[18px] rounded-full font-label-caps text-[9px] flex items-center justify-center px-1 font-bold ${
                  isPetrol ? "bg-[#C7A66A] text-[#171B1B]" : "bg-secondary-container text-on-secondary"
                }`}>
                  3
                </span>
              </a>

              <a
                aria-label="Cart"
                className={`relative h-8 sm:h-9 px-2 sm:px-3 flex items-center gap-1 sm:gap-1.5 rounded-md transition-colors font-instrument text-xs font-semibold ${
                  isPetrol ? "text-white/90 hover:bg-white/10 hover:text-white" : "hover:bg-surface-container hover:text-on-surface text-on-surface-variant"
                }`}
                data-path="cart"
                href="#deals"
              >
                <FiShoppingBag className={`text-base sm:text-lg ${isPetrol ? "text-[#C7A66A]" : "text-primary"}`} />
                <span className="hidden sm:inline">Cart</span>
                <span className={`min-w-[16px] sm:min-w-[18px] h-4 sm:h-[18px] rounded-full font-label-caps text-[9px] flex items-center justify-center px-1 font-bold ${
                  isPetrol ? "bg-[#34745F] text-white" : "bg-primary text-on-primary"
                }`}>
                  2
                </span>
              </a>

              <button
                aria-label="Account profile"
                className={`h-8 sm:h-9 px-2 sm:px-3 rounded-md hidden sm:flex items-center gap-1.5 transition-colors font-instrument text-xs font-semibold cursor-pointer ${
                  isPetrol ? "text-white/90 hover:bg-white/10 hover:text-white" : "hover:bg-surface-container text-on-surface-variant"
                }`}
              >
                <FiUser className="text-base" />
                <span className="hidden lg:inline">Account</span>
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
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={`md:hidden px-3.5 py-2.5 border-t overflow-hidden ${
                  isPetrol
                    ? "bg-[#0D2D2C] border-white/10"
                    : "bg-surface-container border-outline-variant/30"
                }`}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMobileSearchOpen(false);
                    if (onNavigateToCatalogue) {
                      onNavigateToCatalogue({ query: searchQuery.trim() });
                    } else {
                      const target = document.getElementById("featured") || document.getElementById("deals") || document.getElementById("categories");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1 flex items-center">
                    <FiSearch className={`absolute left-3 text-[15px] pointer-events-none ${isPetrol ? "text-[#707776]" : "text-outline"}`} />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search watches, straps, craft..."
                      className={`w-full h-9 pl-9 pr-3 rounded-lg text-xs font-instrument focus:outline-none transition-colors ${
                        isPetrol
                          ? "bg-white text-[#171B1B] placeholder:text-[#707776] border border-[#DDE9E4] focus:border-[#C7A66A]"
                          : "bg-surface text-on-surface placeholder:text-outline border border-outline-variant focus:border-primary"
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`h-9 px-3.5 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer ${
                      isPetrol
                        ? "bg-[#C7A66A] hover:bg-[#B28E52] text-[#171B1B]"
                        : "bg-[#ff9f1c] hover:bg-[#e07f00] text-white"
                    }`}
                  >
                    Go
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

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
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className={`fixed top-0 left-0 bottom-0 w-[84vw] max-w-[340px] z-[101] flex flex-col shadow-2xl ${
                isPetrol ? "bg-[#F7F6F2] text-[#171B1B]" : "bg-surface text-on-surface"
              }`}
            >
              {/* Drawer Header */}
              <div className={`p-4 border-b flex items-center justify-between ${
                isPetrol ? "bg-[#123B3A] border-[#0D2D2C] text-white" : "border-outline-variant/30"
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                    isPetrol ? "bg-[#C7A66A]" : "bg-primary"
                  }`}>
                    <div className={`w-1 h-1 rounded-full ${isPetrol ? "bg-[#123B3A]" : "bg-surface-container-lowest"}`}></div>
                  </div>
                  <span className={`font-headline-sm text-headline-sm font-extrabold uppercase tracking-tight ${
                    isPetrol ? "text-white" : "text-on-surface"
                  }`}>
                    AMIHIVE
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                    isPetrol ? "bg-white/10 hover:bg-white/20 text-white" : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                  }`}
                  aria-label="Close menu"
                >
                  <FiX className="text-lg" />
                </button>
              </div>

              {/* Drawer Quick Section Links + Categories */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {/* On-page section shortcuts */}
                <p className={`font-label-caps text-label-caps uppercase tracking-wider px-3 mb-2 font-bold ${
                  isPetrol ? "text-[#123B3A]" : "text-outline"
                }`}>
                  Explore Atelier
                </p>
                {[
                  { name: "Collection Hero", href: "#collection" },
                  { name: "Today's Flash Deals", href: "#deals" },
                  { name: "Shop By Category", href: "#categories" },
                  { name: "Bespoke Customizer", href: "#customizer" },
                  { name: "Bestsellers Roster", href: "#bestsellers" },
                  { name: "Collector Reviews", href: "#reviews" },
                ].map((sec) => (
                  <a
                    key={sec.href}
                    href={sec.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-body-md font-semibold transition-colors ${
                      isPetrol
                        ? "text-[#171B1B] hover:bg-[#DDE9E4] hover:text-[#123B3A]"
                        : "text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    <span>{sec.name}</span>
                    <span className={`text-xs ${isPetrol ? "text-[#707776]" : "text-outline"}`}>›</span>
                  </a>
                ))}

                <div className={`pt-3 my-2 border-t ${isPetrol ? "border-[#DDE9E4]" : "border-outline-variant/30"}`}>
                  <p className={`font-label-caps text-label-caps uppercase tracking-wider px-3 mb-2 font-bold ${
                    isPetrol ? "text-[#123B3A]" : "text-outline"
                  }`}>
                    Product Categories
                  </p>
                  {navCategories.map((cat) => (
                    <a
                      key={cat.path}
                      href="#collection"
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (onNavigateToCatalogue) {
                          e.preventDefault();
                          onNavigateToCatalogue();
                        }
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-body-md font-medium transition-colors cursor-pointer ${
                        isPetrol
                          ? "text-[#707776] hover:bg-[#DDE9E4] hover:text-[#171B1B]"
                          : "text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-xs ${isPetrol ? "text-[#707776]" : "text-outline"}`}>›</span>
                    </a>
                  ))}
                </div>

                {/* Atelier Guarantees in Drawer */}
                <div className={`pt-4 mt-3 border-t space-y-2.5 px-3 ${
                  isPetrol ? "border-[#DDE9E4]" : "border-outline-variant/30"
                }`}>
                  <p className={`font-label-caps text-label-caps uppercase tracking-wider mb-2 font-bold ${
                    isPetrol ? "text-[#123B3A]" : "text-outline"
                  }`}>
                    Atelier Standards
                  </p>
                  <div className={`flex items-center gap-2 text-xs font-medium ${
                    isPetrol ? "text-[#707776]" : "text-on-surface-variant"
                  }`}>
                    <FiShield className={`text-sm flex-shrink-0 ${isPetrol ? "text-[#34745F]" : "text-primary"}`} />
                    <span>Secure Encrypted Payments</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-medium ${
                    isPetrol ? "text-[#707776]" : "text-on-surface-variant"
                  }`}>
                    <FiTruck className={`text-sm flex-shrink-0 ${isPetrol ? "text-[#34745F]" : "text-primary"}`} />
                    <span>Free Delivery Above ₹1,999</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-medium ${
                    isPetrol ? "text-[#707776]" : "text-on-surface-variant"
                  }`}>
                    <FiRotateCcw className={`text-sm flex-shrink-0 ${isPetrol ? "text-[#34745F]" : "text-primary"}`} />
                    <span>7-Day Easy Returns Guarantee</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-medium ${
                    isPetrol ? "text-[#707776]" : "text-on-surface-variant"
                  }`}>
                    <HiCheckBadge className={`text-sm flex-shrink-0 ${isPetrol ? "text-[#34745F]" : "text-primary"}`} />
                    <span>Atelier Authenticity Certified</span>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Account CTA */}
              <div className={`p-4 border-t ${
                isPetrol ? "bg-white border-[#DDE9E4]" : "bg-surface-container-low border-outline-variant/30"
              }`}>
                <button className={`w-full py-2.5 rounded-lg font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-sm transition-all cursor-pointer ${
                  isPetrol
                    ? "bg-[#123B3A] hover:bg-[#0D2D2C] text-white"
                    : "bg-primary text-on-primary"
                }`}>
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
