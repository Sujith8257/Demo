import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiShoppingBag,
  FiCheck,
  FiArrowRight,
  FiShield,
  FiTruck,
  FiRotateCcw,
  FiAward,
  FiCompass,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiTimerFlashLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import Header from "../../components/layout/Header.jsx";
import Footer from "../../components/layout/Footer.jsx";
import SkipLink from "../../components/layout/SkipLink.jsx";
import PageLoader from "../../components/skeleton/PageLoader.jsx";
import Variant5Skeleton from "./Variant5Skeleton.jsx";
import HEROWITHSWEEPINGSTRAPRIBBON from "./HEROWITHSWEEPINGSTRAPRIBBON.jsx";
import ProductDiscoveryHub from "../../components/products/ProductDiscoveryHub.jsx";
import ContinuousReviewsCarousel from "../../components/reviews/ContinuousReviewsCarousel.jsx";
import WatchBrandsInfiniteCarousel from "../../components/layout/WatchBrandsInfiniteCarousel.jsx";

// ─── Shared Brand Datasets ──────────────────────────────────────────────────
const categories = [
  {
    name: "Automatic Watches",
    count: "24 Pieces",
    tag: "Self-Winding",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dress Chronographs",
    count: "16 Pieces",
    tag: "Precision Calibre",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bridle Leather Straps",
    count: "32 Options",
    tag: "Hand-Stitched",
    image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Steel Jubilee Bracelets",
    count: "18 Styles",
    tag: "Solid Milled",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Leather Horology Rolls",
    count: "14 Items",
    tag: "Archival Storage",
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Heirloom Gift Coffrets",
    count: "9 Suites",
    tag: "Limited Registry",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── Image pools for multi-angle product carousels ─────────────────────────
const watchImgSets = {
  blue: [
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=600&q=85",
  ],
  chrono: [
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85",
  ],
  steel: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=85",
  ],
  leather: [
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=85",
  ],
  tactical: [
    "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=85",
  ],
};

const deals = [
  {
    id: "d1",
    name: "Aster No.04 Blue Dial",
    brand: "Aster Horology · Cal. 9015",
    price: "₹18,990",
    mrp: "₹21,990",
    discount: "Save 14%",
    rating: 4.9,
    reviews: 284,
    dealEnds: "2h 45m",
    badge: "Flash Deal",
    badgeColor: "bg-error text-on-error",
    images: watchImgSets.blue,
  },
  {
    id: "d2",
    name: "Aster Chronograph No.02",
    brand: "Aster Horology · Mechanical",
    price: "₹22,990",
    mrp: "₹27,990",
    discount: "Save 18%",
    rating: 4.8,
    reviews: 178,
    dealEnds: "5h 12m",
    badge: "Flash Deal",
    badgeColor: "bg-error text-on-error",
    images: watchImgSets.chrono,
  },
  {
    id: "d3",
    name: "Meridian Steel Jubilee",
    brand: "Meridian Atelier · Sapphire",
    price: "₹24,990",
    mrp: "₹28,990",
    discount: "Save 13%",
    rating: 4.9,
    reviews: 312,
    dealEnds: "8h 30m",
    badge: "Trending",
    badgeColor: "bg-secondary-container text-on-secondary-container",
    images: watchImgSets.steel,
  },
  {
    id: "d4",
    name: "Heritage No.01 Cognac",
    brand: "Heritage Line · Vegetable Tan",
    price: "₹16,990",
    mrp: "₹19,990",
    discount: "Save 15%",
    rating: 4.7,
    reviews: 205,
    dealEnds: "11h 00m",
    badge: "Special Value",
    badgeColor: "bg-[#067d62] text-white",
    images: watchImgSets.leather,
  },
  {
    id: "d5",
    name: "Urban Field Watch No.03",
    brand: "Aster Tactical · 100M Water",
    price: "₹14,990",
    mrp: "₹17,990",
    discount: "Save 17%",
    rating: 4.6,
    reviews: 87,
    dealEnds: "1d 4h",
    badge: "Field Spec",
    badgeColor: "bg-primary text-on-primary",
    images: watchImgSets.tactical,
  },
];

const bestsellers = [
  {
    id: "f1",
    type: "watch",
    name: "Aster No.04 Automatic",
    brand: "Aster Horology · Sunburst Blue",
    price: "₹18,990",
    mrp: "₹21,990",
    rating: 4.9,
    reviews: 284,
    badge: "Artisan Bestseller",
    badgeColor: "bg-primary text-on-primary",
    images: watchImgSets.blue,
  },
  {
    id: "f2",
    type: "strap",
    name: "Signature Steel Clasp",
    brand: "AmiHive Straps · Solid 316L",
    price: "₹3,490",
    mrp: "₹3,990",
    rating: 4.8,
    reviews: 96,
    badge: "Interchangeable",
    badgeColor: "bg-secondary text-on-secondary",
    images: watchImgSets.steel,
  },
  {
    id: "f3",
    type: "watch",
    name: "Aster No.01 Classic",
    brand: "Aster Horology · Clean Dial",
    price: "₹16,990",
    mrp: "₹19,990",
    rating: 4.9,
    reviews: 412,
    badge: "Top Rated",
    badgeColor: "bg-primary text-on-primary",
    images: watchImgSets.chrono,
  },
  {
    id: "f4",
    type: "accessory",
    name: "Italian Leather Watch Roll",
    brand: "Jaipur Saddlery · 3 Compartments",
    price: "₹2,290",
    mrp: "₹2,790",
    rating: 4.7,
    reviews: 63,
    badge: "Travel Essential",
    badgeColor: "bg-tertiary text-on-tertiary",
    images: watchImgSets.leather,
  },
  {
    id: "f5",
    type: "watch",
    name: "Meridian Chronograph",
    brand: "Meridian Atelier · Ceramic Bezel",
    price: "₹24,990",
    mrp: "₹28,990",
    rating: 4.8,
    reviews: 178,
    badge: "Limited Edition",
    badgeColor: "bg-error text-on-error",
    images: watchImgSets.steel,
  },
  {
    id: "f6",
    type: "strap",
    name: "Cognac Harness Leather",
    brand: "Kanpur Guild · Vegetable Tanned",
    price: "₹2,990",
    mrp: "₹3,490",
    rating: 4.9,
    reviews: 141,
    badge: "Full Grain",
    badgeColor: "bg-secondary text-on-secondary",
    images: watchImgSets.leather,
  },
  {
    id: "f7",
    type: "watch",
    name: "Urban No.03 Field Canvas",
    brand: "Aster Tactical · Khaki Strap",
    price: "₹14,990",
    mrp: "₹17,990",
    rating: 4.7,
    reviews: 87,
    badge: "Daily Driver",
    badgeColor: "bg-primary text-on-primary",
    images: watchImgSets.tactical,
  },
  {
    id: "f8",
    type: "watch",
    name: "Heritage Dress Automatic",
    brand: "Heritage Line · Exhibition Back",
    price: "₹16,990",
    mrp: "₹19,990",
    rating: 4.8,
    reviews: 205,
    badge: "Classic",
    badgeColor: "bg-primary text-on-primary",
    images: watchImgSets.blue,
  },
];

// ─── Reusable Manual Product Image Carousel ──────────────────────────────────
function ManualProductImageCarousel({ images, name }) {
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = images && images.length > 0 ? images : ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=85"];

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-surface-container select-none group">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIdx}
          src={imgs[imgIdx]}
          alt={name}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.2 }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Prev / Next manual user controls */}
      {imgs.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setImgIdx((i) => (i - 1 + imgs.length) % imgs.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all z-20 shadow-md cursor-pointer"
            aria-label="Previous image"
          >
            <FiChevronLeft className="text-base" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setImgIdx((i) => (i + 1) % imgs.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all z-20 shadow-md cursor-pointer"
            aria-label="Next image"
          >
            <FiChevronRight className="text-base" />
          </button>
        </>
      )}

      {/* Dot Indicators corresponding to number of images */}
      {imgs.length > 1 && (
        <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-20">
          {imgs.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setImgIdx(i);
              }}
              className={`rounded-full transition-all cursor-pointer ${
                i === imgIdx
                  ? "w-4 h-1.5 bg-white shadow-xs"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
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
    <div className="relative bg-surface min-h-screen font-body-md text-on-surface antialiased">
      <SkipLink />
      <Header showNavStrip={false} />

      <PageLoader skeleton={<Variant5Skeleton />} duration={800}>
        <main id="main-content" className="w-full pt-[92px] pb-16">
          {/* 1. Hero Banner Carousel (Fitted to page width) */}
          <HEROWITHSWEEPINGSTRAPRIBBON />

          {/* Watch Brand Partners Infinite Marquee */}
          <WatchBrandsInfiniteCarousel />

          {/* 3. Shop by Category - Luxury Discovery Bento matching ProductDiscoveryHub */}
          <section id="categories" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiCompass className="text-primary text-base" />
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                    Curated Horological Disciplines
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Shop by Category
                </h2>
              </div>
              <a
                href="#collection"
                className="hidden sm:inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Explore Full Roster</span>
                <FiArrowRight />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {categories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#collection"
                  className="group relative bg-surface-container-lowest rounded-2xl border border-outline-variant/25 shadow-xs hover:shadow-xl transition-all duration-300 p-3 flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-container mb-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 rounded-full px-2 py-0.5 bg-surface-container-lowest/90 backdrop-blur-xs font-label-caps text-[9px] uppercase tracking-wider font-bold text-primary shadow-xs">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-title-editorial text-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-1">
                      {cat.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-on-surface-variant">
                      <span>{cat.tag}</span>
                      <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 4. Today's Flash Deals matching ProductDiscoveryHub card design */}
          <section id="deals" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <RiTimerFlashLine className="text-error text-base animate-pulse" />
                  <span className="font-label-caps text-label-caps text-error uppercase tracking-widest font-bold">
                    Limited Allocations & Flash Pricing
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Today's Flash Deals
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-caps text-[11px] text-error font-bold uppercase bg-error-container/40 px-3 py-1 rounded-full border border-error-container flex items-center gap-1.5">
                  <FiClock className="text-xs" />
                  <span>Next Allocation Drops in 4h 18m</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {deals.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image with Badges, Multi-image dots, Left/Right arrows & Wishlist */}
                  <div className="relative aspect-square w-full overflow-hidden bg-surface-container select-none">
                    <ManualProductImageCarousel images={item.images} name={item.name} />

                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-label-caps text-[10px] uppercase font-bold tracking-wider bg-error text-on-error shadow-xs">
                      {item.discount}
                    </span>

                    {/* Wishlist Button */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggleWishlist(item.id, item.name)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-xs flex items-center justify-center transition-colors hover:bg-surface-container-lowest shadow-xs cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <FiHeart
                        className={`text-base ${
                          wishlist[item.id] ? "fill-error text-error" : "text-on-surface-variant"
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[#FF9F00]">
                        {[1, 2, 3, 4].map((s) => (
                          <BsStarFill key={s} className="text-[11px]" />
                        ))}
                        {item.rating >= 4.8 ? (
                          <BsStarFill className="text-[11px]" />
                        ) : (
                          <BsStarHalf className="text-[11px]" />
                        )}
                      </div>
                      <span className="font-label-caps text-[10px] text-outline">({item.reviews})</span>
                    </div>

                    <h3 className="font-title-editorial text-sm font-bold text-on-surface truncate">
                      {item.name}
                    </h3>
                    <p className="font-body-sm text-xs text-outline truncate mb-1">
                      {item.brand}
                    </p>

                    {/* Deal Timer */}
                    <div className="flex items-center gap-1 mt-1 mb-2">
                      <RiTimerFlashLine className="text-error text-xs" />
                      <span className="font-label-caps text-[10px] text-error uppercase font-bold">
                        Ends in {item.dealEnds}
                      </span>
                    </div>

                    {/* Price Row */}
                    <div className="mt-auto pt-2 flex items-baseline gap-2">
                      <span className="font-numeric-price text-numeric-price text-on-surface font-bold">
                        {item.price}
                      </span>
                      <span className="font-body-sm text-xs text-outline line-through">
                        {item.mrp}
                      </span>
                    </div>

                    {/* CTA Button matching ProductCard */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 font-label-caps text-label-caps uppercase tracking-wider font-bold transition-all bg-secondary-container hover:bg-secondary text-on-secondary shadow-xs cursor-pointer"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>Add to Bag</span>
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Bespoke Timepiece Customizer - Luxury Atelier Presentation */}
          <section id="customizer" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#002a63] via-primary to-[#0f1a1d] text-white p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ffb866]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-white/10 backdrop-blur-md font-label-caps text-[10px] uppercase tracking-widest text-[#ffddba] font-bold mb-4 border border-white/15">
                    <HiSparkles className="text-sm text-[#ffddba]" />
                    <span>Atelier Bespoke Registry</span>
                  </div>

                  <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                    Build Your Own Master Timepiece
                  </h2>

                  <p className="font-body-lg text-sm sm:text-base text-white/85 leading-relaxed mb-5 max-w-xl">
                    Select your handcrafted sunburst or enamel dial, harness bridle leather or solid jubilee bracelet, and case dimensions — calibrated by hand and signed by third-generation Jaipur master horologists.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 font-medium">
                    <span className="flex items-center gap-1.5">
                      <FiShield className="text-[#ffddba]" /> 25-Year Transferable Warranty
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5">
                      <FiAward className="text-[#ffddba]" /> Free Archival Monogramming
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5">
                      <FiTruck className="text-[#ffddba]" /> Insured Wood Coffret Dispatch
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#bestsellers"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider font-bold shadow-xl transition-all cursor-pointer"
                  >
                    <span>Start Customizing</span>
                    <FiArrowRight className="text-lg" />
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Bestsellers & Curated Collection matching ProductDiscoveryHub */}
          <section id="bestsellers" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiAward className="text-primary text-base" />
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold">
                    Verified Atelier Acquisitions
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Bestsellers & Curated Collection
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto select-none">
                {[
                  { id: "all", label: "All Items" },
                  { id: "watch", label: "Watches" },
                  { id: "strap", label: "Straps" },
                  { id: "accessory", label: "Accessories" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full font-label-caps text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredBestsellers.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image Container with manual multi-image carousel */}
                  <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-surface-container select-none">
                    <ManualProductImageCarousel images={item.images} name={item.name} />

                    {/* Badge */}
                    <span className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-label-caps text-[10px] uppercase font-bold tracking-wider ${item.badgeColor} shadow-xs`}>
                      {item.badge}
                    </span>

                    {/* Wishlist Button */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggleWishlist(item.id, item.name)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-xs flex items-center justify-center transition-colors hover:bg-surface-container-lowest shadow-xs cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <FiHeart
                        className={`text-base ${
                          wishlist[item.id] ? "fill-error text-error" : "text-on-surface-variant"
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[#FF9F00]">
                        {[1, 2, 3, 4].map((s) => (
                          <BsStarFill key={s} className="text-[11px]" />
                        ))}
                        {item.rating >= 4.8 ? (
                          <BsStarFill className="text-[11px]" />
                        ) : (
                          <BsStarHalf className="text-[11px]" />
                        )}
                      </div>
                      <span className="font-label-caps text-[10px] text-outline">({item.reviews})</span>
                    </div>

                    <h3 className="font-title-editorial text-title-editorial font-bold text-on-surface truncate">
                      {item.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-outline truncate mb-2">
                      {item.brand}
                    </p>

                    {/* Price Row */}
                    <div className="mt-auto pt-2 flex items-baseline gap-2">
                      <span className="font-numeric-price text-numeric-price text-on-surface font-bold">
                        {item.price}
                      </span>
                      <span className="font-body-sm text-body-sm text-outline line-through">
                        {item.mrp}
                      </span>
                    </div>

                    {/* CTA Button matching ProductDiscoveryHub */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 font-label-caps text-label-caps uppercase tracking-wider font-bold transition-all bg-secondary-container hover:bg-secondary text-on-secondary shadow-xs cursor-pointer"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>Add to Bag</span>
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Product Discovery Hub (Recently Viewed, Recommendations, Deals in Watches) */}
          <div className="mt-6">
            <ProductDiscoveryHub />
          </div>

          {/* 8. Continuous Infinite Reviews Carousel */}
          <ContinuousReviewsCarousel className="mt-14" />

          {/* 9. Collector Circle Newsletter Box */}
          <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest font-bold block mb-1">
                  Atelier Dispatch & Private Releases
                </span>
                <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                  Join the Collector Circle
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md">
                  Receive private invitations to preview numbered cohort drops, workshop dispatches, and private atelier allocations.
                </p>
              </div>

              {newsletterDone ? (
                <div className="flex items-center gap-2 text-[#067d62] font-semibold text-xs sm:text-sm bg-emerald-50 px-5 py-3 rounded-xl border border-emerald-200">
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
                    className="h-11 px-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-sm text-on-surface placeholder:text-outline outline-none focus:border-primary min-w-[240px] sm:min-w-[300px] shadow-xs"
                  />
                  <button
                    type="submit"
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider font-bold rounded-xl transition-colors cursor-pointer flex-shrink-0 shadow-xs"
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
            className="fixed bottom-6 right-6 z-[9999] bg-[#067d62] text-white px-5 py-3 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2"
          >
            <FiCheck className="text-base" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
