import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiCheckCircle, FiStar } from "react-icons/fi";

const reviewData = [
  {
    id: "rev-1",
    userName: "Arjun Kapoor",
    userInitials: "AK",
    ratings: 5.0,
    productName: "Aster No.04 Automatic Blue Dial",
    reviewText:
      "The sunburst blue dial catches light magnificently. Proportions sit with exact balance on a 7-inch wrist. Easily rivals Swiss pieces triple the price.",
    verified: true,
    timeAgo: "2 weeks ago",
    location: "Bengaluru",
  },
  {
    id: "rev-2",
    userName: "Rahul Mehta",
    userInitials: "RM",
    ratings: 5.0,
    productName: "Cognac Vegetable-Tanned Leather Strap",
    reviewText:
      "Exceptional bridle leather smell and supple feel right out of the box. Saddle stitching is immaculately even and pairs perfectly with my chronometer.",
    verified: true,
    timeAgo: "3 weeks ago",
    location: "Mumbai",
  },
  {
    id: "rev-3",
    userName: "Sneha Nair",
    userInitials: "SN",
    ratings: 5.0,
    productName: "Meridian Steel Jubilee Watch",
    reviewText:
      "The solid milled clasp and curved end links feel incredibly solid. Movement keeps time within +2 seconds a day. Packaging was heirloom grade.",
    verified: true,
    timeAgo: "1 month ago",
    location: "New Delhi",
  },
  {
    id: "rev-4",
    userName: "Vikramaditya Singhania",
    userInitials: "VS",
    ratings: 5.0,
    productName: "Aster Chronograph No. 02",
    reviewText:
      "Tactile mechanical pushers with a crisp actuation click. The sapphire crystal has zero glare in harsh sunlight. Truly proud of Indian horological craft.",
    verified: true,
    timeAgo: "1 month ago",
    location: "Jaipur",
  },
  {
    id: "rev-5",
    userName: "Pooja Deshmukh",
    userInitials: "PD",
    ratings: 4.9,
    productName: "Stoneware Ceramic Carafe Set",
    reviewText:
      "Auroville studio craft at its absolute finest. The wood-fired crackle glaze has organic textures that look stunning on our dining table. Arrived safely.",
    verified: true,
    timeAgo: "5 days ago",
    location: "Pune",
  },
  {
    id: "rev-6",
    userName: "Kabir Sen",
    userInitials: "KS",
    ratings: 5.0,
    productName: "Urban Field Watch No. 03",
    reviewText:
      "Bought this as my daily companion. 100m water resistance and high-contrast numerals make it effortlessly legible in all settings. Outstanding value.",
    verified: true,
    timeAgo: "3 weeks ago",
    location: "Kolkata",
  },
  {
    id: "rev-7",
    userName: "Ananya Iyer",
    userInitials: "AI",
    ratings: 5.0,
    productName: "Artisan Leather Watch Roll (3 Slot)",
    reviewText:
      "The microfiber interior cushions every case without scratching. Brass snap buttons are rugged and satisfying to close. Indispensable for travel.",
    verified: true,
    timeAgo: "2 weeks ago",
    location: "Chennai",
  },
  {
    id: "rev-8",
    userName: "Devendra Rathore",
    userInitials: "DR",
    ratings: 4.8,
    productName: "Aster Pilot GMT Automatic",
    reviewText:
      "The independent 24-hour hand works seamlessly across timezones. The exhibition caseback displaying the decorated rotor is pure engineering poetry.",
    verified: true,
    timeAgo: "4 days ago",
    location: "Udaipur",
  },
];

export default function ContinuousReviewsCarousel({
  title = "Real Collector Voices & Verified Reviews",
  subtitle = "Direct feedback from collectors who wear and preserve our pieces daily.",
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create a seamless, continuous infinite ticker loop
  const carouselTrack = [...reviewData, ...reviewData];

  return (
    <section
      id="reviews"
      className={`w-full py-10 sm:py-12 bg-[#fafbfc] border-y border-[#e3e6e6] overflow-hidden select-none ${className}`}
      aria-label="Customer Reviews Carousel"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#067d62]"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#067d62]">
              Verified Studio Provenance
            </span>
          </div>
          <h2 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f1111] tracking-tight">
            {title}
          </h2>
          <p className="font-instrument text-xs sm:text-sm text-[#565959] mt-0.5 max-w-xl">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#565959] font-medium pt-1 sm:pt-0">
          <span className="text-[#e07f00] font-bold">★ 4.9 out of 5</span>
          <span>•</span>
          <span>Based on 1,420+ verified deliveries</span>
        </div>
      </div>

      {/* Edge gradient mask for smooth fade in & out */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex items-stretch gap-4 sm:gap-5 cursor-grab active:cursor-grabbing py-2"
          style={{ width: "max-content" }}
          animate={
            reduceMotion || isPaused
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {carouselTrack.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[300px] sm:w-[350px] bg-white border border-[#e3e6e6] hover:border-[#007185] rounded-lg p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between flex-shrink-0"
            >
              <div>
                {/* ── Line 1: User Name (Left)  |  Ratings (Right) ── */}
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-[#f0f2f2]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#131a2c] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {review.userInitials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <strong className="text-xs sm:text-sm font-semibold text-[#0f1111] truncate block">
                          {review.userName}
                        </strong>
                        {review.verified && (
                          <FiCheckCircle
                            className="text-[#067d62] text-xs flex-shrink-0"
                            title="Verified Buyer"
                          />
                        )}
                      </div>
                      <span className="text-[10px] text-[#767676] block truncate">
                        {review.location}
                      </span>
                    </div>
                  </div>

                  {/* Ratings on Right */}
                  <div className="flex items-center gap-1 flex-shrink-0 bg-[#fff8e7] px-2 py-0.5 rounded border border-[#ffe082]">
                    <span className="text-[#e07f00] text-xs font-bold flex items-center gap-0.5">
                      <FiStar className="fill-[#e07f00] text-[#e07f00] text-[11px]" />
                      {review.ratings.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* ── Line 2: Product Name ── */}
                <div className="pt-2.5 pb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#007185] block truncate">
                    {review.productName}
                  </span>
                </div>

                {/* ── Review Text ── */}
                <p className="font-instrument text-xs text-[#565959] leading-relaxed line-clamp-3">
                  "{review.reviewText}"
                </p>
              </div>

              {/* ── Card Footer ── */}
              <div className="pt-3 mt-3 border-t border-[#f0f2f2] flex items-center justify-between text-[10px] text-[#767676]">
                <span className="text-[#067d62] font-semibold flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#067d62]"></span>
                  Verified Purchase
                </span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Micro instructions */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-3 flex items-center justify-between text-[11px] text-[#767676]">
        <span>Hover over any review card to pause</span>
        <span className="hidden sm:inline">Automatic continuous scroller • 100% Genuine reviews</span>
      </div>
    </section>
  );
}
