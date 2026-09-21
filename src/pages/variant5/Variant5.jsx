import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiShoppingBag, FiCheck, FiArrowRight, FiShield, FiTruck, FiRotateCcw, FiAward } from "react-icons/fi";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant5Skeleton from "./Variant5Skeleton.jsx";
import HEROWITHSWEEPINGSTRAPRIBBON from "./HEROWITHSWEEPINGSTRAPRIBBON.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import ContinuousReviewsCarousel from "../../components/reviews/ContinuousReviewsCarousel.jsx";
import WatchBrandsInfiniteCarousel from "../../components/layout/WatchBrandsInfiniteCarousel.jsx";

// ─── Reference Datasets from AmiHive ──────────────────────────────────────────
const usps = [
  { title: "Insured Shipping", text: "Free on every order", icon: FiTruck },
  { title: "Certified Original", text: "Every piece verified", icon: FiAward },
  { title: "2 Year Warranty", text: "On all movements", icon: FiShield },
  { title: "7 Day Returns", text: "No questions asked", icon: FiRotateCcw },
];

const categories = [
  { name: "Automatic Watches", count: "24 items", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500&q=80" },
  { name: "Chronographs", count: "16 items", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80" },
  { name: "Leather Straps", count: "32 items", image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=500&q=80" },
  { name: "Steel Bracelets", count: "18 items", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
  { name: "Accessories", count: "14 items", image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=500&q=80" },
  { name: "Gift Sets", count: "9 items", image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=500&q=80" },
];

const deals = [
  { id: "d1", name: "Aster No.04", subtitle: "Automatic Blue Dial", price: 18990, originalPrice: 21990, discount: 14, rating: 4.7, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85" },
  { id: "d2", name: "Aster No.02", subtitle: "Chronograph", price: 22990, originalPrice: 27990, discount: 18, rating: 4.6, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=85" },
  { id: "d3", name: "Meridian Steel", subtitle: "Jubilee Bracelet", price: 24990, originalPrice: 28990, discount: 13, rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85" },
  { id: "d4", name: "Heritage No.01", subtitle: "Classic Leather", price: 16990, originalPrice: 19990, discount: 15, rating: 4.5, image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=85" },
  { id: "d5", name: "Urban No.03", subtitle: "Everyday Field Watch", price: 14990, originalPrice: 17990, discount: 17, rating: 4.4, image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=85" },
];

const bestsellers = [
  { id: "f1", type: "watch", name: "Aster No.04", subtitle: "Automatic Blue Dial Watch", price: 18990, originalPrice: 21990, rating: 4.7, ratings: 284, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=85" },
  { id: "f2", type: "strap", name: "Signature Clasp", subtitle: "Steel Jubilee Strap", price: 3490, originalPrice: 3990, rating: 4.6, ratings: 96, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=85" },
  { id: "f3", type: "watch", name: "Aster No.01", subtitle: "Classic Everyday", price: 16990, originalPrice: 19990, rating: 4.8, ratings: 412, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=600&q=85" },
  { id: "f4", type: "accessory", name: "Travel Case", subtitle: "Leather Watch Roll", price: 2290, originalPrice: 2790, rating: 4.5, ratings: 63, image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=85" },
  { id: "f5", type: "watch", name: "Meridian No.02", subtitle: "Steel Chronograph", price: 24990, originalPrice: 28990, rating: 4.6, ratings: 178, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85" },
  { id: "f6", type: "strap", name: "Cognac Strap", subtitle: "Italian Leather", price: 2990, originalPrice: 3490, rating: 4.7, ratings: 141, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=85" },
  { id: "f7", type: "watch", name: "Urban No.03", subtitle: "Everyday Field Watch", price: 14990, originalPrice: 17990, rating: 4.4, ratings: 87, image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=85" },
  { id: "f8", type: "watch", name: "Heritage No.01", subtitle: "Classic Leather", price: 16990, originalPrice: 19990, rating: 4.5, ratings: 205, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85" },
];

const testimonials = [
  { initials: "AK", name: "Arjun K.", date: "2 weeks ago", rating: 5, text: "The blue dial looks significantly better in person. Proportions are exactly what I wanted." },
  { initials: "RM", name: "Rahul M.", date: "1 month ago", rating: 5, text: "Leather feels premium and the watch sits with a really balanced presence on the wrist." },
  { initials: "SN", name: "Sneha N.", date: "1 month ago", rating: 4, text: "Great everyday watch, packaging and delivery were both excellent." },
];

function formatPrice(val) {
  return Number(val).toLocaleString("en-IN");
}

export default function Variant5() {
  const [activeTab, setActiveTab] = useState("all");
  const [wishlist, setWishlist] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  const toggleWishlist = (id, name) => {
    setWishlist((prev) => {
      const next = !prev[id];
      showToast(next ? `Saved "${name}" to Wishlist` : `Removed "${name}" from Wishlist`);
      return { ...prev, [id]: next };
    });
  };

  const handleAddToCart = (name) => {
    showToast(`Added "${name}" to your Cart`);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterDone(true);
      showToast("Thank you for joining the Collector Circle!");
    }
  };

  const filteredBestsellers = bestsellers.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <div className="relative bg-[#ffffff] min-h-screen font-instrument text-[#0f1111] antialiased">
      <SkipLink />
      <Header />

      <PageLoader skeleton={<Variant5Skeleton />} duration={800}>
        <main id="main-content" className="w-full pt-[92px] md:pt-[132px] pb-16">
          {/* 1. Hero Banner Carousel */}
          <HEROWITHSWEEPINGSTRAPRIBBON />

          {/* Watch Brand Partners Infinite Marquee */}
          <WatchBrandsInfiniteCarousel />

          {/* 2. Compact 4-Column USP Assurance Strip */}
          <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-[#e3e6e6] rounded-md overflow-hidden bg-[#f6f7f9]">
              {usps.map((usp, idx) => {
                const Icon = usp.icon;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 sm:p-4 flex items-center gap-3 ${
                      idx !== usps.length - 1 ? "md:border-r border-[#e3e6e6]" : ""
                    } ${idx === 0 || idx === 1 ? "border-b md:border-b-0 border-[#e3e6e6]" : ""} ${
                      idx % 2 === 0 ? "border-r md:border-r-0 border-[#e3e6e6]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-[#e3e6e6] flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon className="text-sm" />
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-semibold text-[#0f1111]">
                        {usp.title}
                      </strong>
                      <span className="text-[11px] text-[#565959] leading-tight block">
                        {usp.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. Shop by Category (6 Columns) */}
          <section id="categories" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-[#0f1111]">
                Shop by category
              </h2>
              <a href="#collection" className="text-xs text-[#007185] hover:underline font-medium">
                View all categories
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#collection"
                  className="group bg-white border border-[#e3e6e6] hover:border-[#007185] rounded-md p-2.5 flex flex-col items-center text-center transition-all duration-200"
                >
                  <div className="w-full h-28 sm:h-32 rounded overflow-hidden bg-[#f6f7f9] mb-2 relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#0f1111] group-hover:text-[#007185] transition-colors leading-tight">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-[#565959] mt-0.5">
                    {cat.count}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* 4. Today's Flash Deals (5 Columns) */}
          <section id="deals" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-[#0f1111]">
                  Today's deals
                </h2>
                <span className="bg-[#cc1023] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">
                  Flash Sale
                </span>
              </div>
              <a href="#collection" className="text-xs text-[#007185] hover:underline font-medium">
                View all deals
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {deals.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white border border-[#e3e6e6] hover:border-[#007185] rounded-md p-3 flex flex-col transition-all duration-200"
                >
                  {/* Discount Badge */}
                  <span className="absolute top-4 left-4 z-10 bg-[#cc1023] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {item.discount}% off
                  </span>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(item.id, item.name)}
                    aria-label="Save to wishlist"
                    className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-white/90 border border-[#e3e6e6] flex items-center justify-center text-xs transition-colors hover:bg-white"
                  >
                    <FiHeart
                      className={`${
                        wishlist[item.id] ? "fill-[#cc1023] text-[#cc1023]" : "text-[#565959]"
                      }`}
                    />
                  </button>

                  <div className="w-full h-36 sm:h-40 rounded overflow-hidden bg-[#f6f7f9] mb-2.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <strong className="text-xs sm:text-sm font-semibold text-[#0f1111] line-clamp-1">
                      {item.name}
                    </strong>
                    <span className="text-[11px] text-[#565959] line-clamp-1 mb-1">
                      {item.subtitle}
                    </span>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-[11px] text-[#e07f00] mb-2">
                      <span>★</span>
                      <span className="font-semibold">{item.rating}</span>
                    </div>

                    {/* Price Row */}
                    <div className="mt-auto pt-1 flex items-baseline gap-2">
                      <strong className="text-sm sm:text-base font-bold text-[#0f1111]">
                        ₹{formatPrice(item.price)}
                      </strong>
                      <s className="text-xs text-[#767676]">
                        ₹{formatPrice(item.originalPrice)}
                      </s>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-2.5 w-full py-1.5 bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-bold text-xs rounded transition-colors cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Customizer Callout Strip */}
          <section id="customizer" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="bg-[#131a2c] text-white rounded-lg p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[#ff9f1c] text-xs font-bold uppercase tracking-wider mb-1 block">
                  Bespoke Configuration
                </span>
                <h2 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Build your own timepiece
                </h2>
                <p className="font-instrument text-white/80 text-xs sm:text-sm leading-relaxed">
                  Choose your dial color, vegetable-tanned leather or steel jubilee strap, and case size — delivered exactly the way you want it.
                </p>
              </div>
              <a
                href="#bestsellers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#ff9f1c] hover:bg-[#e07f00] text-[#131a2c] font-bold text-xs sm:text-sm transition-all flex-shrink-0 cursor-pointer shadow-md"
              >
                <span>Start Customizing</span>
                <FiArrowRight />
              </a>
            </div>
          </section>

          {/* 6. Bestsellers Filterable Catalog */}
          <section id="bestsellers" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
              <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl font-bold text-[#0f1111]">
                Bestsellers & Curated Collection
              </h2>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                {[
                  { id: "all", label: "All Items" },
                  { id: "watch", label: "Watches" },
                  { id: "strap", label: "Straps" },
                  { id: "accessory", label: "Accessories" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#131a2c] text-white font-bold"
                        : "bg-[#f6f7f9] text-[#565959] hover:bg-[#e3e6e6]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredBestsellers.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white border border-[#e3e6e6] hover:border-[#007185] rounded-md overflow-hidden flex flex-col transition-all duration-200"
                >
                  <div className="relative w-full h-44 sm:h-52 bg-[#f6f7f9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={() => toggleWishlist(item.id, item.name)}
                      aria-label="Save to wishlist"
                      className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 border border-[#e3e6e6] flex items-center justify-center text-xs transition-colors hover:bg-white cursor-pointer"
                    >
                      <FiHeart
                        className={`${
                          wishlist[item.id] ? "fill-[#cc1023] text-[#cc1023]" : "text-[#565959]"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-3 flex flex-col flex-1">
                    <strong className="text-xs sm:text-sm font-semibold text-[#0f1111] line-clamp-1">
                      {item.name}
                    </strong>
                    <span className="text-[11px] text-[#565959] line-clamp-1 mb-1">
                      {item.subtitle}
                    </span>

                    <div className="flex items-center gap-1 text-[11px] text-[#565959] mb-2">
                      <span className="text-[#e07f00]">★</span>
                      <span className="font-semibold text-[#0f1111]">{item.rating}</span>
                      <span>({item.ratings})</span>
                    </div>

                    <div className="mt-auto pt-1 flex items-baseline gap-2">
                      <strong className="text-sm sm:text-base font-bold text-[#0f1111]">
                        ₹{formatPrice(item.price)}
                      </strong>
                      <s className="text-xs text-[#767676]">
                        ₹{formatPrice(item.originalPrice)}
                      </s>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-2.5 w-full py-2 bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] font-bold text-xs rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <FiShoppingBag className="text-xs" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Product Discovery Hub (Recently Viewed, Recommendations, Deals in Watches) */}
          <div className="mt-8">
            <ProductDiscoveryHub />
          </div>

          {/* 8. Continuous Infinite Reviews Carousel */}
          <ContinuousReviewsCarousel className="mt-10 sm:mt-12" />

          {/* 9. Collector Circle Newsletter Box */}
          <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="bg-[#f6f7f9] border border-[#e3e6e6] rounded-lg p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="font-poppins text-lg sm:text-xl font-bold text-[#0f1111] mb-1">
                  Join the Collector Circle
                </h2>
                <p className="font-instrument text-xs sm:text-sm text-[#565959] max-w-md">
                  Get private access to limited edition drops, workshop logs, and invitation-only atelier events.
                </p>
              </div>

              {newsletterDone ? (
                <div className="flex items-center gap-2 text-[#067d62] font-semibold text-xs sm:text-sm bg-emerald-50 px-4 py-2.5 rounded border border-emerald-200">
                  <FiCheck className="text-base" />
                  <span>You are subscribed to the collector circle.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex items-center gap-2 w-full md:w-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="h-10 px-3.5 bg-white border border-[#e3e6e6] rounded text-xs sm:text-sm text-[#0f1111] placeholder:text-[#767676] outline-none focus:border-[#007185] min-w-[220px] sm:min-w-[280px]"
                  />
                  <button
                    type="submit"
                    className="h-10 px-5 bg-[#131a2c] hover:bg-[#232f47] text-white font-bold text-xs rounded transition-colors cursor-pointer flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </PageLoader>

      {/* Floating Interactive Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#067d62] text-white px-4 py-3 rounded shadow-lg text-xs font-semibold flex items-center gap-2"
          >
            <FiCheck className="text-base" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
