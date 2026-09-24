import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiHeart, FiShoppingBag, FiChevronLeft, FiChevronRight, FiZap, FiClock, FiTrendingUp, FiMapPin } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiTimerFlashLine } from "react-icons/ri";

// ─── Shared image pools ────────────────────────────────────────────────────
const watchImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAuUyQHwad-wyIxRRO5B7FfGz8-bm7DZ1HNYhTRDi0TzeWI9K-bw-09sZPALfq-Slvci1Ia300CLlrU7h0oRA6dUey4pDcrs7uFKJP9w1qOLAXaMMfFH4HUBBBqP3FIie7DQmdtGO4BThsX86MKrqrMKmu7EqVxNBQZVU7cD9IdxeXVm0Q4AWFA0r4SX2c1VPGB1jkq4GXxV9-yFca_jbleYvFB_htvAauWltVRftjqh6eEHCc7YkyX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxrSwHMR7s6BZI5BrUJjN4qfn_AOZRY74Lbjpkt8I7EIz7ChGV-9W-OE1-b5ausuVZtQks10qHZ7ICE3wbxE90Pi6Tw4IK_8f16h6cWGfwbuIGhfoMjR3nFkfvAybL_EDidacyEFA3PkDqQLoe1D5dVnHQqwQLVHxFpim4TL4EPqBElX8gokMGBb4z78kaJEBIA0YVJKWlEPxQfYIJ7o8rk8MvlHpWH4pJ85Me8PfeDux8v8LdDBK-",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRH9gNw80yrNBA-tnCQR_WPl00W1XaKhNz-xuMNAdqpHbwh2xarT8z32i4qqtBrtad-vP5CM3Mhhy4kurBOQKh6mD7-3qzjIjHEboUVUPPMEmpejJ5FlwosgT87NN9jdX18TCi_E7CR850szXNa_PouLVsu3YU8j9h_ZjVXAt4yha2g-ffYBS-upQRZ4ENPfsyVn1Vi-HrIejN7uA7WfhsQAwPtecOaY4FP0IQS8M3BPUwwQodUxTf",
];
const leatherImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKHKJaIU_NMbcaQR8hF9YaoKVatvEG8E9VxBSMVptIgVxoHWxqGh8VONEWnA63s2shGQRYtdGYmWOeh9n58vvY609PVxdu4VIwu_FeeOews76cUzzSIQVGb3heTqZ1xgWQOgQjJHbrMS3GUKs_TBOPYo0qd0351nAQ0lC3DtfndfR51yfGPfsWVpZNuxbIlhN2HzvdeB-qxlM4MgB0MNmn2riGQaUJAFiahV6TlARBk6bdqHp5U8Ww",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD7E-3nLsOIaM2a0fOzrC3DARspXB_ZMwJSS1JCoZ2Q3JvA9u53dK15uUjyEKr4MWK0YYsXsIiXhAxLlCN8N_Uvyh9TIb1coFwGHfx-iMMZWD8bKN5TYuEJAovtUb7Iqkxite0XMI4UV-YeZqNA987Fcd9UM5eP4YMubb3tKG5E6ZQRAp8tGCNxo2uceD1Wkkjkq3ghbzHuwm2XrJHGZE-1-62dYZFtkR7-OL-l285k2GJRtnCwItDo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBLXTAwUIQetbWnTIN6rfnBWoD8rZZbR1RtvZrQOWxPvn7man3oN9ne07g5LXSky11PBOqBcMRL3vtFtcROALI6oZAtohdABG7QRzmxGM7hc-6LpPAr9Lk4KesD-Kvb8O_006-e6vOulngcTu4xxsgmIUNcMwSSiTVx7OSLvNx2j4_s5F7Xoa4-EMDNkSttMelV4-I8a266FBDwux_PPOTd2-L0C00uo-N77X1KIic84UJfPo-HMAw-",
];
const ceramicImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvFCkoJroCPSDjpV5poE259CiI6fMCPTqChk-F7W6DfzI-1DCeeMZ6LW9hKa8SOGvk6poIPiP2X-jU1yNyjtPSyJrWJ1FJQwPTs3h8Lgs2h-6qb-xi1UVlTQEvOE_Y9Ov3JvAtfZePUxaenXglFRTYobT0V6WkciQM0-0cCkf0JrU6dgDCx4YWTP_xY2-tiP4TMnst9ObjKxz25RXaa_NXRFfNbFxMSvB5STPzZssQvdSubZcdwO4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8V1o5_M7pv_EOOmEiEbDeuplsVtVw5SDNhU2kus0GHjQejuHz9xCTio3_6bzhkLpHEOpo4I94yO7oe69PUNoidngwCqboRvxUuSzVB0IRSlhJ8n77GcC6nOiHCv5OLlghWNkQ30tcpscrNecF5fd2UVFAg8aFWFqDxxXjQmua3wPX85mfgNillpZSx1MKFSYLR1EKKoncGNxYCwE-UJv4g9kN8tck-M75zKrbbl8NvOua6pcE4ka8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdlqh4OlieSwBZJ9t9XxAxQm7r5AAWpUH8z6LUtV5x2oZNIgTyV-RLu4idQVCmYjvvckeX8_vY0oeJAUIc5RgBnNXfXY02a7bIFO3FLUKR5Qq8H9OosBsZEgjkUPOzERgd5H33wTYNbbDyrGeGDuTIsv363h92Bj-vMCBWZBbKUpX8JJ7oUmoj1wfCiGZARpFqeBEkd1VLPMtknZfmglWzi2UVkmCM0Fj5s-LZb-RCO9ZrTE22rpo",
];

// ─── Product datasets ──────────────────────────────────────────────────────
const recentlyViewed = [
  { id: "rv-1", name: "Aster Calibre No. 04", brand: "Aster Horology · Jaipur", price: "₹38,400", mrp: "₹44,000", rating: 4.9, reviews: 128, badge: "Certified Atelier", badgeColor: "bg-primary text-on-primary", images: watchImgs, tag: null },
  { id: "rv-2", name: "Craftsman Tote 04", brand: "Kanpur Tannery", price: "₹12,800", mrp: "₹15,000", rating: 4.8, reviews: 94, badge: "Full Grain", badgeColor: "bg-secondary text-on-secondary", images: leatherImgs, tag: null },
  { id: "rv-3", name: "Stoneware Vessel No. 7", brand: "Auroville Earthworks", price: "₹4,200", mrp: "₹5,500", rating: 4.7, reviews: 61, badge: "1 of 25", badgeColor: "bg-tertiary text-on-tertiary", images: ceramicImgs, tag: null },
  { id: "rv-4", name: "Chrono Brass Desk Dial", brand: "Moradabad Foundry", price: "₹8,900", mrp: "₹11,000", rating: 4.6, reviews: 42, badge: "Special Value", badgeColor: "bg-[#388E3C] text-white", images: watchImgs.slice(1), tag: null },
  { id: "rv-5", name: "Navigator Moonphase", brand: "Aster Horology · Jaipur", price: "₹52,000", mrp: "₹60,000", rating: 5.0, reviews: 17, badge: "Limited", badgeColor: "bg-error text-on-error", images: watchImgs, tag: null },
];

const recommended = [
  { id: "rc-1", name: "Pilot GMT Automatic", brand: "Aster Horology · Jaipur", price: "₹47,500", mrp: "₹55,000", rating: 4.9, reviews: 203, badge: "Artisan Pick", badgeColor: "bg-primary text-on-primary", images: watchImgs, tag: "Top Pick" },
  { id: "rc-2", name: "Heritage Briefcase 08", brand: "Kanpur Tannery", price: "₹22,000", mrp: "₹26,000", rating: 4.8, reviews: 88, badge: "Full Grain", badgeColor: "bg-secondary text-on-secondary", images: leatherImgs, tag: "For You" },
  { id: "rc-3", name: "Kiln Mug Set of 4", brand: "Auroville Earthworks", price: "₹3,200", mrp: null, rating: 4.7, reviews: 56, badge: "Set of 4", badgeColor: "bg-tertiary text-on-tertiary", images: ceramicImgs, tag: "New" },
  { id: "rc-4", name: "Skeleton Tourbillon", brand: "Aster Horology · Jaipur", price: "₹1,24,000", mrp: "₹1,40,000", rating: 5.0, reviews: 9, badge: "Only 3 Left", badgeColor: "bg-error text-on-error", images: watchImgs.slice(2), tag: "Rare" },
  { id: "rc-5", name: "Vegetable Tanned Wallet", brand: "Kanpur Tannery", price: "₹2,800", mrp: "₹3,400", rating: 4.6, reviews: 137, badge: "Bestseller", badgeColor: "bg-[#388E3C] text-white", images: leatherImgs.slice(1), tag: null },
];

const watchDeals = [
  { id: "wd-1", name: "Aster Solar Quartz", brand: "Aster Horology · Jaipur", price: "₹18,500", mrp: "₹28,000", rating: 4.5, reviews: 74, badge: "Save 34%", badgeColor: "bg-error text-on-error", images: watchImgs, tag: "Deal", dealEnds: "2h 14m" },
  { id: "wd-2", name: "Field Watch — Canvas", brand: "Aster Horology · Jaipur", price: "₹24,900", mrp: "₹32,000", rating: 4.7, reviews: 51, badge: "Save 22%", badgeColor: "bg-error text-on-error", images: watchImgs.slice(1), tag: "Flash", dealEnds: "5h 48m" },
  { id: "wd-3", name: "Dress Watch Mesh", brand: "Aster Horology · Jaipur", price: "₹31,200", mrp: "₹40,000", rating: 4.9, reviews: 32, badge: "Save 22%", badgeColor: "bg-error text-on-error", images: watchImgs.slice(2), tag: "Deal", dealEnds: "12h 00m" },
  { id: "wd-4", name: "Chrono Split-Second", brand: "Aster Horology · Jaipur", price: "₹68,000", mrp: "₹95,000", rating: 4.8, reviews: 14, badge: "Save 28%", badgeColor: "bg-error text-on-error", images: watchImgs, tag: "Limited", dealEnds: "1d 3h" },
  { id: "wd-5", name: "GMT Pilot Black", brand: "Aster Horology · Jaipur", price: "₹42,000", mrp: "₹52,000", rating: 4.6, reviews: 29, badge: "Save 19%", badgeColor: "bg-error text-on-error", images: watchImgs.slice(1), tag: "Deal", dealEnds: "8h 20m" },
];

const newArrivals = [
  { id: "na-1", name: "Artisan Sand Watch", brand: "Auroville Earthworks", price: "₹6,400", mrp: null, rating: 4.9, reviews: 3, badge: "Just In", badgeColor: "bg-primary text-on-primary", images: ceramicImgs, tag: "New" },
  { id: "na-2", name: "Cognac Folio Case", brand: "Kanpur Tannery", price: "₹9,200", mrp: null, rating: 5.0, reviews: 2, badge: "Just In", badgeColor: "bg-primary text-on-primary", images: leatherImgs, tag: "New" },
  { id: "na-3", name: "Aster Moonphase II", brand: "Aster Horology · Jaipur", price: "₹58,000", mrp: null, rating: 5.0, reviews: 1, badge: "Just In", badgeColor: "bg-primary text-on-primary", images: watchImgs, tag: "New" },
  { id: "na-4", name: "Speckled Carafe Set", brand: "Auroville Earthworks", price: "₹7,800", mrp: null, rating: 4.8, reviews: 4, badge: "Just In", badgeColor: "bg-primary text-on-primary", images: ceramicImgs.slice(1), tag: "New" },
  { id: "na-5", name: "Waxed Canvas Tote", brand: "Kanpur Tannery", price: "₹11,500", mrp: null, rating: 4.9, reviews: 6, badge: "Just In", badgeColor: "bg-primary text-on-primary", images: leatherImgs.slice(2), tag: "New" },
];

const trendingNear = [
  { id: "tn-1", name: "Aster No. 04 Blue", brand: "Aster Horology · Jaipur", price: "₹38,400", mrp: "₹44,000", rating: 4.9, reviews: 214, badge: "🔥 Trending", badgeColor: "bg-secondary-container text-on-secondary-container", images: watchImgs, tag: null, city: "Bengaluru" },
  { id: "tn-2", name: "Bridle Leather Bag", brand: "Kanpur Tannery", price: "₹18,000", mrp: "₹22,000", rating: 4.7, reviews: 98, badge: "🔥 Trending", badgeColor: "bg-secondary-container text-on-secondary-container", images: leatherImgs, tag: null, city: "Mumbai" },
  { id: "tn-3", name: "Raku Bowl Black", brand: "Auroville Earthworks", price: "₹2,900", mrp: "₹3,800", rating: 4.6, reviews: 72, badge: "🔥 Trending", badgeColor: "bg-secondary-container text-on-secondary-container", images: ceramicImgs, tag: null, city: "Delhi" },
  { id: "tn-4", name: "Pilot Chronograph", brand: "Aster Horology · Jaipur", price: "₹55,000", mrp: "₹65,000", rating: 4.8, reviews: 61, badge: "🔥 Trending", badgeColor: "bg-secondary-container text-on-secondary-container", images: watchImgs.slice(1), tag: null, city: "Chennai" },
  { id: "tn-5", name: "Tan Travel Folio", brand: "Kanpur Tannery", price: "₹8,400", mrp: "₹10,500", rating: 4.7, reviews: 44, badge: "🔥 Trending", badgeColor: "bg-secondary-container text-on-secondary-container", images: leatherImgs.slice(1), tag: null, city: "Hyderabad" },
];

// ─── Multi-image Product Card ───────────────────────────────────────────────
function ProductCard({ product, accent = "secondary", showDeal = false, showCity = false, theme = "default", onNavigateToCatalogue }) {
  const isPetrol = theme === "variant5" || theme === "petrol";
  const [imgIdx, setImgIdx] = useState(0);
  const [wished, setWished] = useState(false);
  const imgs = product.images || [];

  const accentMap = {
    secondary: isPetrol ? "bg-[#34745F] text-white hover:bg-[#2C604F] font-bold" : "bg-secondary-container text-on-secondary hover:bg-secondary",
    primary: isPetrol ? "bg-[#34745F] text-white hover:bg-[#2C604F] font-bold" : "bg-secondary-container text-on-secondary hover:bg-secondary",
    error: isPetrol ? "bg-[#34745F] text-white hover:bg-[#2C604F] font-bold" : "bg-secondary-container text-on-secondary hover:bg-secondary",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onClick={() => onNavigateToCatalogue?.()}
      className={`min-w-[280px] max-w-[300px] flex-shrink-0 snap-start rounded-2xl ${
        isPetrol ? "bg-white border border-[#DDE9E4]" : "bg-surface-container-lowest"
      } shadow-sm hover:shadow-xl transition-shadow flex flex-col cursor-pointer`}
    >
      {/* ── Image carousel with multi-image navigation ── */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-surface-container select-none group">
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIdx}
            src={imgs[imgIdx]}
            alt={product.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Prev / Next arrows — manual user control */}
        {imgs.length > 1 && (
          <>
            <button
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

        {/* Dot indicators */}
        {imgs.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIdx(i);
                }}
                className={`rounded-full transition-all ${
                  i === imgIdx
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Badge */}
        {(() => {
          const badgeCls = isPetrol
            ? (() => {
                const b = (product.badge || "").toLowerCase();
                if (b.includes("save") || b.includes("left") || b.includes("deal") || b.includes("flash") || b.includes("rare") || b.includes("limited")) {
                  return "bg-[#C95F50] text-white";
                }
                if (b.includes("atelier") || b.includes("certified") || b.includes("bestseller") || b.includes("special")) {
                  return "bg-[#34745F] text-white";
                }
                if (b.includes("pick") || b.includes("artisan") || b.includes("trending")) {
                  return "bg-[#C7A66A] text-[#171B1B]";
                }
                return "bg-[#DDE9E4] text-[#123B3A]";
              })()
            : product.badgeColor;
          return (
            <span className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 font-label-caps text-[10px] uppercase font-bold tracking-wider ${badgeCls}`}>
              {product.badge}
            </span>
          );
        })()}

        {/* Wishlist toggle */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.stopPropagation();
            setWished((w) => !w);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
            isPetrol
              ? "bg-white/90 hover:bg-white text-[#123B3A] shadow-xs cursor-pointer"
              : "bg-surface-container-lowest/80 hover:bg-surface-container-lowest"
          }`}
          aria-label="Wishlist"
        >
          <FiHeart
            className={`text-base ${
              wished
                ? isPetrol
                  ? "fill-[#C95F50] text-[#C95F50]"
                  : "fill-error text-error"
                : isPetrol
                ? "text-[#123B3A]"
                : "text-on-surface-variant"
            }`}
          />
        </motion.button>

        {/* Tag pill */}
        {product.tag && (
          <span className={`absolute top-3 left-1/2 -translate-x-1/2 z-10 font-label-caps text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
            isPetrol ? "bg-[#123B3A] text-white" : "bg-inverse-surface text-inverse-on-surface"
          }`}>
            {product.tag}
          </span>
        )}
      </div>

      {/* ── Product Info ── */}
      <div className="p-4 flex flex-col flex-1">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-1">
          <div className={`flex ${isPetrol ? "text-[#C7A66A]" : "text-[#FF9F00]"}`}>
            {[1,2,3,4].map(s => <BsStarFill key={s} className="text-[11px]" />)}
            {product.rating >= 4.5
              ? <BsStarFill className="text-[11px]" />
              : <BsStarHalf className="text-[11px]" />}
          </div>
          <span className={`font-label-caps text-[10px] ${isPetrol ? "text-[#707776]" : "text-outline"}`}>({product.reviews})</span>
        </div>

        <h3 className={`font-title-editorial text-title-editorial ${isPetrol ? "text-[#171B1B] font-bold" : "text-on-surface"} truncate`}>{product.name}</h3>
        <p className={`font-body-sm text-body-sm ${isPetrol ? "text-[#707776]" : "text-outline"} truncate`}>{product.brand}</p>

        {/* City tag for trending */}
        {showCity && product.city && (
          <div className="flex items-center gap-1 mt-1">
            <FiMapPin className={`text-[11px] ${isPetrol ? "text-[#123B3A]" : "text-secondary"}`} />
            <span className={`font-label-caps text-[10px] uppercase ${isPetrol ? "text-[#123B3A] font-bold" : "text-secondary"}`}>Trending in {product.city}</span>
          </div>
        )}

        {/* Deal timer */}
        {showDeal && product.dealEnds && (
          <div className="flex items-center gap-1 mt-1">
            <RiTimerFlashLine className={`text-sm ${isPetrol ? "text-[#C95F50]" : "text-error"}`} />
            <span className={`font-label-caps text-[10px] uppercase font-bold ${isPetrol ? "text-[#C95F50]" : "text-error"}`}>Ends in {product.dealEnds}</span>
          </div>
        )}

        {/* Price row */}
        <div className="flex items-center gap-2 mt-2">
          <span className={`font-numeric-price text-numeric-price font-bold ${isPetrol ? "text-[#123B3A]" : "text-on-surface"}`}>{product.price}</span>
          {product.mrp && (
            <span className={`font-body-sm text-body-sm line-through ${isPetrol ? "text-[#707776]" : "text-outline"}`}>{product.mrp}</span>
          )}
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={(e) => e.stopPropagation()}
          className={`mt-auto pt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 font-label-caps text-label-caps uppercase tracking-wider transition-colors ${accentMap[accent]}`}
        >
          <FiShoppingBag className="text-sm" />
          Add to Bag
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Section Rail ───────────────────────────────────────────────────────────
function RailSection({ title, eyebrow, icon: Icon, products, accent, showDeal, showCity, bg = "bg-surface", theme = "default", onNavigateToCatalogue }) {
  const isPetrol = theme === "variant5" || theme === "petrol";
  const sectionId = `rail-${title.replace(/\s+/g, "-").toLowerCase()}`;

  const scroll = (dir) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <motion.section
      className={`w-full py-6 sm:py-8 ${isPetrol ? "bg-[#F7F6F2]" : bg}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {Icon && <Icon className={`${isPetrol ? "text-[#123B3A]" : "text-primary"} text-base`} />}
              <span className={`font-label-caps text-label-caps ${isPetrol ? "text-[#123B3A] font-bold" : "text-primary"} uppercase tracking-widest`}>
                {eyebrow}
              </span>
            </div>
            <h2 className={`font-headline-md text-headline-md ${isPetrol ? "text-[#171B1B]" : "text-on-surface"} font-bold`}>{title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isPetrol
                  ? "bg-white hover:bg-[#DDE9E4] text-[#123B3A] border border-[#DDE9E4]"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
              aria-label="Scroll left"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scroll(1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isPetrol
                  ? "bg-white hover:bg-[#DDE9E4] text-[#123B3A] border border-[#DDE9E4]"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
              aria-label="Scroll right"
            >
              <FiChevronRight />
            </button>
            <a
              href="#collection"
              onClick={(e) => {
                if (onNavigateToCatalogue) {
                  e.preventDefault();
                  onNavigateToCatalogue();
                }
              }}
              className={`ml-2 font-label-md text-label-md cursor-pointer ${isPetrol ? "text-[#123B3A] hover:text-[#0D2D2C] font-semibold" : "text-primary hover:underline"} hidden sm:block`}
            >
              See all
            </a>
          </div>
        </div>

        {/* Scrollable rail */}
        <div
          id={sectionId}
          className="group flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard
                product={p}
                accent={accent}
                showDeal={showDeal}
                showCity={showCity}
                theme={theme}
                onNavigateToCatalogue={onNavigateToCatalogue}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Main export: 5-section Product Discovery Hub ────────────────────────────
export default function ProductDiscoveryHub({ theme = "default", onNavigateToCatalogue }) {
  const isPetrol = theme === "variant5" || theme === "petrol";

  return (
    <div className="w-full">
      {/* 1. Recently Viewed */}
      <RailSection
        title="Recently Viewed"
        eyebrow="Your History"
        icon={FiClock}
        products={recentlyViewed}
        accent="secondary"
        bg="bg-surface"
        theme={theme}
        onNavigateToCatalogue={onNavigateToCatalogue}
      />

      {/* 2. Recommendations for You */}
      <RailSection
        title="Recommendations for You"
        eyebrow="Curated Picks"
        icon={HiSparkles}
        products={recommended}
        accent="primary"
        bg="bg-surface-container-low"
        theme={theme}
        onNavigateToCatalogue={onNavigateToCatalogue}
      />

      {/* 3. Deals for You in Watches */}
      <RailSection
        title="Deals for You in Watches"
        eyebrow="Limited Time Offers"
        icon={FiZap}
        products={watchDeals}
        accent="error"
        showDeal={true}
        bg="bg-surface"
        theme={theme}
        onNavigateToCatalogue={onNavigateToCatalogue}
      />

      {/* 4. New Arrivals */}
      <RailSection
        title="New Arrivals"
        eyebrow="Just Landed"
        icon={HiSparkles}
        products={newArrivals}
        accent="primary"
        bg="bg-surface-container-low"
        theme={theme}
        onNavigateToCatalogue={onNavigateToCatalogue}
      />

      {/* 5. Trending Near You */}
      <RailSection
        title="Trending Near You"
        eyebrow="Local Favourites"
        icon={FiTrendingUp}
        products={trendingNear}
        accent="secondary"
        showCity={true}
        bg="bg-surface"
        theme={theme}
        onNavigateToCatalogue={onNavigateToCatalogue}
      />
    </div>
  );
}
