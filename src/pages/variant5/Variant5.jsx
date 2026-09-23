import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiShoppingBag,
  FiArrowRight,
  FiShield,
  FiTruck,
  FiRotateCcw,
  FiAward,
  FiCompass,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
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
import SHOPBYBUDGETHorizontalPill from "../variant1/SHOPBYBUDGETHorizontalPill.jsx";
import WATCHMATERIALSTRIPTYCHConnected3 from "../variant1/WATCHMATERIALSTRIPTYCHConnected3.jsx";
import VALUEDEALSECTIONDeepBlue from "../variant2/VALUEDEALSECTIONDeepBlue.jsx";
import PRODUCTINTEGRITYTRIPTYCH from "../variant4/PRODUCTINTEGRITYTRIPTYCH.jsx";

// ─── Shared Brand Datasets ──────────────────────────────────────────────────
const categories = [
  {
    name: "Automatic Watches",
    sub: "Self-Winding",
    tag: "Self-Winding",
    count: "24 Pieces",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dress Chronographs",
    sub: "Precision Calibre",
    tag: "Precision Calibre",
    count: "16 Pieces",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bridle Leather Straps",
    sub: "Hand-Stitched",
    tag: "Hand-Stitched",
    count: "32 Options",
    img: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=80",
    image: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Steel Jubilee Bracelets",
    sub: "Solid Milled",
    tag: "Solid Milled",
    count: "18 Styles",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Leather Horology Rolls",
    sub: "Archival Storage",
    tag: "Archival Storage",
    count: "14 Items",
    img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=80",
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Heirloom Gift Coffrets",
    sub: "Limited Registry",
    tag: "Limited Registry",
    count: "9 Suites",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
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
    badgeColor: "bg-[#C95F50] text-white",
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
    badgeColor: "bg-[#C95F50] text-white",
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
    badgeColor: "bg-[#C7A66A] text-[#171B1B]",
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
    badgeColor: "bg-[#34745F] text-white",
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
    badgeColor: "bg-[#DDE9E4] text-[#123B3A]",
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
    badgeColor: "bg-[#C7A66A] text-[#171B1B]",
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
    badgeColor: "bg-[#DDE9E4] text-[#123B3A]",
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
    badgeColor: "bg-[#34745F] text-white",
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
    badgeColor: "bg-[#F2E9D8] text-[#171B1B]",
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
    badgeColor: "bg-[#E8E2EE] text-[#123B3A]",
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
    badgeColor: "bg-[#DDE9E4] text-[#123B3A]",
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
    badgeColor: "bg-[#123B3A] text-white",
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
    badgeColor: "bg-[#123B3A] text-white",
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

  const filteredBestsellers = bestsellers.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <div className="relative bg-[#F7F6F2] min-h-screen font-body-md text-[#171B1B] antialiased">
      <SkipLink />
      <Header showNavStrip={false} theme="variant5" />

      <PageLoader skeleton={<Variant5Skeleton />} duration={800}>
        <main id="main-content" className="w-full pt-[82px] sm:pt-[92px] pb-0">
          {/* 1. Hero Banner Carousel (Fitted to page width) */}
          <HEROWITHSWEEPINGSTRAPRIBBON />

          {/* Watch Brand Partners Infinite Marquee */}
          <WatchBrandsInfiniteCarousel className="my-3 sm:my-5" theme="variant5" />

          {/* 3. Shop by Category */}
          <section id="categories" className="max-w-[1400px] mx-auto px-6 sm:px-10 py-10 sm:py-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#123B3A] uppercase">
                  Curated Horological Disciplines
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171B1B] mt-1">
                  Shop by Category
                </h2>
              </div>
              <a
                href="#collection"
                className="text-sm font-semibold text-[#123B3A] hover:text-[#0D2D2C] transition-colors"
              >
                Explore full roster →
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <img
                    src={cat.img || cat.image}
                    alt={cat.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 transition-transform group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#123B3A] group-hover:ring-offset-2"
                  />
                  <h3 className="text-base font-bold text-[#171B1B] leading-snug group-hover:text-[#123B3A] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#707776] mt-1">{cat.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Today's Flash Deals matching ProductDiscoveryHub card design */}
          <section id="deals" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <RiTimerFlashLine className="text-[#C95F50] text-base animate-pulse" />
                  <span className="font-label-caps text-label-caps text-[#C95F50] uppercase tracking-widest font-bold">
                    Limited Allocations & Flash Pricing
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-[#171B1B] font-bold">
                  Today's Flash Deals
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-caps text-[11px] text-[#C95F50] font-bold uppercase bg-[#C95F50]/10 px-3 py-1 rounded-full border border-[#C95F50]/30 flex items-center gap-1.5">
                  <FiClock className="text-xs" />
                  <span>Next Allocation Drops in 4h 18m</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {deals.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-[#DDE9E4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image with Badges, Multi-image dots, Left/Right arrows & Wishlist */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F7F6F2] select-none">
                    <ManualProductImageCarousel images={item.images} name={item.name} />

                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-label-caps text-[10px] uppercase font-bold tracking-wider bg-[#C95F50] text-white shadow-xs">
                      {item.discount}
                    </span>

                    {/* Wishlist Button */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggleWishlist(item.id, item.name)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center transition-colors hover:bg-white text-[#123B3A] shadow-xs cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <FiHeart
                        className={`text-base ${
                          wishlist[item.id] ? "fill-[#C95F50] text-[#C95F50]" : "text-[#123B3A]"
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[#C7A66A]">
                        {[1, 2, 3, 4].map((s) => (
                          <BsStarFill key={s} className="text-[11px]" />
                        ))}
                        {item.rating >= 4.8 ? (
                          <BsStarFill className="text-[11px]" />
                        ) : (
                          <BsStarHalf className="text-[11px]" />
                        )}
                      </div>
                      <span className="font-label-caps text-[10px] text-[#707776]">({item.reviews})</span>
                    </div>

                    <h3 className="font-title-editorial text-sm font-bold text-[#171B1B] truncate">
                      {item.name}
                    </h3>
                    <p className="font-body-sm text-xs text-[#707776] truncate mb-1">
                      {item.brand}
                    </p>

                    {/* Deal Timer */}
                    <div className="flex items-center gap-1 mt-1 mb-2">
                      <RiTimerFlashLine className="text-[#C95F50] text-xs" />
                      <span className="font-label-caps text-[10px] text-[#C95F50] uppercase font-bold">
                        Ends in {item.dealEnds}
                      </span>
                    </div>

                    {/* Price Row */}
                    <div className="mt-auto pt-2 flex items-baseline gap-2">
                      <span className="font-numeric-price text-numeric-price text-[#123B3A] font-bold">
                        {item.price}
                      </span>
                      <span className="font-body-sm text-xs text-[#707776] line-through">
                        {item.mrp}
                      </span>
                    </div>

                    {/* CTA Button matching ProductCard */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 font-label-caps text-label-caps uppercase tracking-wider font-bold transition-all bg-[#34745F] hover:bg-[#2C604F] text-white shadow-xs cursor-pointer"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>Add to Bag</span>
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </section>
 
          {/* Curated Value Season (from Variant 2) */}
          <VALUEDEALSECTIONDeepBlue
            containerClassName="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            className="mt-14 sm:mt-16"
            bgClass="bg-[#123B3A]"
            badgeClass="bg-[#34745F] text-white"
            checkColorClass="text-[#34745F]"
            btnClass="bg-[#C7A66A] hover:bg-[#B28E52] text-[#171B1B] font-bold"
            clockBoxClass="bg-black/40 border border-white/10"
          />

          {/* 5. Bespoke Timepiece Customizer - Luxury Atelier Presentation */}
          <section id="customizer" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#123B3A] via-[#0D2D2C] to-[#171B1B] text-white p-8 sm:p-12 lg:p-14 shadow-xl overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#C7A66A]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#34745F]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 bg-[#F2E9D8]/15 backdrop-blur-md font-label-caps text-[10px] uppercase tracking-widest text-[#C7A66A] font-bold mb-4 border border-[#C7A66A]/40">
                    <HiSparkles className="text-sm text-[#C7A66A]" />
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
                      <FiShield className="text-[#C7A66A]" /> 25-Year Transferable Warranty
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5">
                      <FiAward className="text-[#C7A66A]" /> Free Archival Monogramming
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5">
                      <FiTruck className="text-[#C7A66A]" /> Insured Wood Coffret Dispatch
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#bestsellers"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C7A66A] hover:bg-[#B28E52] text-[#171B1B] font-label-md text-label-md uppercase tracking-wider font-bold shadow-xl transition-all cursor-pointer"
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
                  <FiAward className="text-[#123B3A] text-base" />
                  <span className="font-label-caps text-label-caps text-[#123B3A] uppercase tracking-widest font-bold">
                    Verified Atelier Acquisitions
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-[#171B1B] font-bold">
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
                        ? "bg-[#123B3A] text-white shadow-sm"
                        : "bg-white hover:bg-[#DDE9E4] text-[#707776] hover:text-[#171B1B] border border-[#DDE9E4]"
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
                  className="rounded-2xl bg-white border border-[#DDE9E4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image Container with manual multi-image carousel */}
                  <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#F7F6F2] select-none">
                    <ManualProductImageCarousel images={item.images} name={item.name} />

                    {/* Badge */}
                    <span className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-label-caps text-[10px] uppercase font-bold tracking-wider ${item.badgeColor} shadow-xs`}>
                      {item.badge}
                    </span>

                    {/* Wishlist Button */}
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggleWishlist(item.id, item.name)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center transition-colors hover:bg-white text-[#123B3A] shadow-xs cursor-pointer"
                      aria-label="Wishlist"
                    >
                      <FiHeart
                        className={`text-base ${
                          wishlist[item.id] ? "fill-[#C95F50] text-[#C95F50]" : "text-[#123B3A]"
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[#C7A66A]">
                        {[1, 2, 3, 4].map((s) => (
                          <BsStarFill key={s} className="text-[11px]" />
                        ))}
                        {item.rating >= 4.8 ? (
                          <BsStarFill className="text-[11px]" />
                        ) : (
                          <BsStarHalf className="text-[11px]" />
                        )}
                      </div>
                      <span className="font-label-caps text-[10px] text-[#707776]">({item.reviews})</span>
                    </div>

                    <h3 className="font-title-editorial text-title-editorial font-bold text-[#171B1B] truncate">
                      {item.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#707776] truncate mb-2">
                      {item.brand}
                    </p>

                    {/* Price Row */}
                    <div className="mt-auto pt-2 flex items-baseline gap-2">
                      <span className="font-numeric-price text-numeric-price text-[#123B3A] font-bold">
                        {item.price}
                      </span>
                      <span className="font-body-sm text-body-sm text-[#707776] line-through">
                        {item.mrp}
                      </span>
                    </div>

                    {/* CTA Button matching ProductDiscoveryHub */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAddToCart(item.name)}
                      className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 font-label-caps text-label-caps uppercase tracking-wider font-bold transition-all bg-[#34745F] hover:bg-[#2C604F] text-white shadow-xs cursor-pointer"
                    >
                      <FiShoppingBag className="text-sm" />
                      <span>Add to Bag</span>
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Horological Anatomy (Tolerances Without Compromise from Variant 1) */}
          <WATCHMATERIALSTRIPTYCHConnected3
            containerClassName="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            bgClass="bg-[#F7F6F2]"
            kickerClass="text-[#123B3A]"
            cardBgClass="bg-white border border-[#DDE9E4] shadow-xs"
            fieldTagClass="bg-white/95 text-[#123B3A] border border-[#DDE9E4]"
            borderClass="border-[#DDE9E4]"
          />

          {/* 8. Shop By Investment Range (Portfolio Accessibility from Variant 1) */}
          <SHOPBYBUDGETHorizontalPill
            containerClassName="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            bgClass="bg-[#F7F6F2]"
            cardBgClass="bg-white border border-[#DDE9E4]"
            kickerClass="text-[#123B3A]"
            activeBtnClass="bg-[#123B3A] text-white shadow-md"
            inactiveBtnClass="bg-[#F7F6F2] hover:bg-[#DDE9E4] text-[#171B1B] border border-[#DDE9E4]/60"
            activeKickerClass="text-[#C7A66A]"
            inactiveKickerClass="text-[#707776] group-hover:text-[#123B3A]"
            ctaBtnClass="bg-[#34745F] hover:bg-[#2C604F] text-white font-bold"
            activeTierTextClass="text-[#123B3A]"
            activeSnapshotBgClass="bg-[#F7F6F2] border border-[#DDE9E4]"
          />

          {/* 8. Product Discovery Hub (Recently Viewed, Recommendations, Deals in Watches) */}
          <div className="mt-6">
            <ProductDiscoveryHub theme="variant5" />
          </div>

          {/* 8. Continuous Infinite Reviews Carousel */}
          <ContinuousReviewsCarousel className="mt-14" theme="variant5" />

          {/* 9. Four Pillars of Material Integrity & Standard of Authenticity (from Variant 4) */}
          <PRODUCTINTEGRITYTRIPTYCH
            containerClassName="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
            className="mt-14 sm:mt-16 !pb-2"
            bgClass="bg-[#F7F6F2]"
            cardBgClass="bg-white border border-[#DDE9E4] shadow-xs"
            kickerClass="text-[#123B3A]"
            pillar1IconClass="bg-[#DDE9E4] text-[#123B3A]"
            pillar1TagClass="text-[#123B3A]"
            pillar2IconClass="bg-[#F2E9D8] text-[#C7A66A]"
            pillar2TagClass="text-[#C7A66A]"
            pillar3IconClass="bg-[#E8E2EE] text-[#123B3A]"
            pillar3TagClass="text-[#123B3A]"
            pillar4IconClass="bg-[#DCE8EE] text-[#123B3A]"
            pillar4TagClass="text-[#707776]"
            trustBarBgClass="bg-white border border-[#DDE9E4] shadow-xs"
            trustBarIconClass="text-[#123B3A]"
          />
        </main>

        <Footer className="!mt-0" theme="variant5" />
      </PageLoader>

      {/* Floating Interactive Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#34745F] text-white px-5 py-3 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2"
          >
            <FiCheck className="text-base" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
