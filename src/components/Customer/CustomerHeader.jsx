import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiShield, FiTruck, FiRotateCcw, FiCheckCircle, FiClock, FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { HiCheckBadge } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

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

export default function CustomerHeader({
  showNavStrip = true,
  theme = "variant5",
  onNavigateToCatalogue,
  onNavigateHome,
  onNavigateToCart,
}) {
  let routerNavigate;
  try {
    routerNavigate = useNavigate();
  } catch (e) {
    routerNavigate = null;
  }

  const goHome = (e) => {
    if (e) e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    else if (routerNavigate) routerNavigate("/home");
    else window.location.href = "/";
  };

  const goToCatalogue = (e) => {
    if (e) e.preventDefault();
    if (onNavigateToCatalogue) onNavigateToCatalogue();
    else if (routerNavigate) routerNavigate("/products");
    else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "chrono");
      window.location.href = url.toString();
    }
  };

  const goToCart = (e) => {
    if (e) e.preventDefault();
    if (onNavigateToCart) onNavigateToCart();
    else if (routerNavigate) routerNavigate("/cart");
    else {
      const url = new URL(window.location.href);
      url.searchParams.set("page", "cart");
      window.location.href = url.toString();
    }
  };

  const isPetrol = theme === "variant5" || theme === "petrol";
  const [visible, setVisible] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const reduceMotion = useReducedMotion();

  const handleNavAnchor = (e, hash) => {
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#categories" || hash === "#collection" || hash === "#bestsellers") {
      goToCatalogue(e);
    } else {
      goHome(e);
    }
  };

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
        setVisible(true);
      } else {
        setVisible(false);
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
                onClick={goHome}
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
                  goToCatalogue(e);
                }}
                className="relative flex items-center w-full"
              >
                <div className="relative flex-1 flex items-center">
                  <FiSearch className="absolute left-3.5 text-outline text-[17px] pointer-events-none" />
                  <input
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
                className={`relative h-8 sm:h-9 px-2 sm:px-3 flex items-center gap-1 sm:gap-1.5 rounded-md transition-colors font-instrument text-xs font-semibold cursor-pointer ${
                  isPetrol ? "text-white/90 hover:bg-white/10 hover:text-white" : "hover:bg-surface-container hover:text-on-surface text-on-surface-variant"
                }`}
                data-path="cart"
                href="#"
                onClick={goToCart}
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
                    goToCatalogue(e);
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1 flex items-center">
                    <FiSearch className="absolute left-3 text-outline text-sm pointer-events-none" />
                    <input
                      className="w-full h-9 pl-9 pr-3 bg-white rounded-md font-instrument text-sm text-[#171B1B] placeholder:text-[#707776] focus:outline-none border border-outline-variant/40"
                      placeholder="Search timepieces, craft..."
                      type="search"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className={`h-9 px-4 font-bold text-xs uppercase tracking-wider rounded-md ${
                      isPetrol ? "bg-[#C7A66A] text-[#171B1B]" : "bg-[#ff9f1c] text-[#131a2c]"
                    }`}
                  >
                    Go
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category Navigation Strip */}
        {showNavStrip && (
          <div
            className={`border-b select-none transition-colors ${
              isPetrol
                ? "bg-[#0E3231] border-white/10"
                : "bg-surface/90 border-outline-variant/20"
            }`}
          >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <nav aria-label="Product categories" className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
                <a
                  className={`flex-shrink-0 px-2.5 py-1 text-xs sm:text-[13px] font-semibold tracking-wide rounded-md transition-colors cursor-pointer ${
                    isPetrol
                      ? "text-white bg-white/10 hover:bg-white/15"
                      : "text-on-surface bg-surface-container hover:bg-surface-container-high"
                  }`}
                  data-path="all"
                  href="#collection"
                  onClick={(e) => handleNavAnchor(e, "#collection")}
                >
                  All Categories
                </a>
                {navCategories.map((c, idx) => (
                  <a
                    key={idx}
                    className={`flex-shrink-0 px-2.5 py-1 text-xs sm:text-[13px] font-medium tracking-wide rounded-md transition-colors cursor-pointer ${
                      isPetrol
                        ? "text-[#DDE9E4] hover:text-white hover:bg-white/10"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                    }`}
                    data-path={c.path}
                    href={`#${c.path}`}
                    onClick={(e) => handleNavAnchor(e, `#${c.path}`)}
                  >
                    {c.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="fixed top-0 bottom-0 left-0 w-[82%] max-w-[320px] z-50 bg-[#0E3231] text-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 bg-[#0D2D2C]">
                <span className="font-poppins text-xl font-bold tracking-tight lowercase text-white">
                  amihive
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                  className="w-8 h-8 rounded-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                <div className="pb-2 mb-2 border-b border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A66A] px-2">
                    Browse Categories
                  </span>
                </div>
                {navCategories.map((c, idx) => (
                  <a
                    key={idx}
                    href={`#${c.path}`}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavAnchor(e, `#${c.path}`);
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-white/40">›</span>
                  </a>
                ))}

                <div className="pt-4 pb-2 mb-2 border-b border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A66A] px-2">
                    Quick Links
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    goToCatalogue(e);
                  }}
                  className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>Explore Catalogue</span>
                </button>
                <button
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    goToCart(e);
                  }}
                  className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>Shopping Cart</span>
                </button>
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-white/10 bg-[#0D2D2C] text-xs text-slate-400 text-center">
                Elevated Editorial Commerce · AMIHIVE
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
