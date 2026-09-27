import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  id,
  brand,
  name,
  subtitle,
  price,
  priceFormatted,
  originalPriceFormatted,
  discount,
  stockLeft,
  savings,
  rating,
  reviews,
  badge,
  badgeType = 'tag',
  image,
  images,
  autoplayDelay = 2000,
  onAddToCart,
  onBuyNow,
  onWishlistToggle,
  isWishlisted: initialWishlisted = false,
}) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  // Normalize image list
  const imageList =
    Array.isArray(images) && images.length > 0
      ? images
      : image
      ? [image]
      : [];

  const totalImages = imageList.length;

  // Auto transition images every 2 seconds on mobile & desktop
  useEffect(() => {
    if (isHovered || totalImages <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % totalImages);
    }, autoplayDelay);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, totalImages, autoplayDelay]);

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % totalImages);
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        nextImage(e);
      } else {
        prevImage(e);
      }
    }
    touchStartX.current = null;
  };

  const handleCardClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
    if (onWishlistToggle) {
      onWishlistToggle(id, nextState);
    }
  };

  const currentImg = imageList[activeImageIndex] || image;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({ id, brand, name, price, image: currentImg });
    }
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    if (onBuyNow) {
      onBuyNow({ id, brand, name, price, image: currentImg });
    } else {
      navigate('/cart');
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,86,195,0.08)] transition-all group flex flex-col justify-between border border-outline-variant/30 cursor-pointer select-none"
    >
      {/* Image Carousel Container */}
      <div
        className="aspect-square bg-surface-container-low overflow-hidden relative touch-pan-y"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
        >
          {imageList.map((imgSrc, imgIdx) => (
            <div key={imgIdx} className="w-full h-full flex-shrink-0 relative">
              <img
                alt={`${name} - View ${imgIdx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={imgSrc}
              />
            </div>
          ))}
        </div>

        {/* Left and Right Navigation Arrows (Visible on mobile & desktop hover) */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-container-lowest/90 hover:bg-white text-on-surface shadow-md flex items-center justify-center transition-all z-20 backdrop-blur-xs opacity-90 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-container-lowest/90 hover:bg-white text-on-surface shadow-md flex items-center justify-center transition-all z-20 backdrop-blur-xs opacity-90 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chevron_right</span>
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-space-xs left-space-xs flex items-center gap-1 z-10 pointer-events-none">
          {stockLeft && (
            <span className="bg-[#D32F2F] text-on-primary px-space-xs py-0.5 rounded text-caption font-label-bold shadow-xs flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-bright" />
              {stockLeft}
            </span>
          )}

          {discount && (
            <span className="bg-[#388E3C] text-on-primary px-space-xs py-0.5 rounded text-caption font-label-bold shadow-xs">
              {discount}
            </span>
          )}

          {badge && badgeType === 'tag' && !discount && (
            <span className="bg-surface-container-lowest/90 px-space-xs py-1 rounded text-caption font-label-bold text-on-surface shadow-xs">
              {badge}
            </span>
          )}

          {badge && badgeType === 'fire' && (
            <span className="bg-secondary-container text-on-primary px-space-xs py-0.5 rounded text-caption font-label-bold shadow-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
              {badge}
            </span>
          )}

          {badge && badgeType === 'bestseller' && (
            <span className="bg-primary text-on-primary px-space-xs py-0.5 rounded text-caption font-label-bold shadow-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">military_tech</span>
              {badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label="Save to Wishlist"
          className="absolute top-space-xs right-space-xs w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#D32F2F] shadow-xs transition-colors z-10 cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{
              color: isWishlisted ? '#D32F2F' : undefined,
              fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            favorite
          </span>
        </button>

        {/* Carousel Indicators / Dots (Visible on mobile & desktop) */}
        {totalImages > 1 && (
          <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1.5 z-10 pointer-events-none">
            {imageList.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === activeImageIndex
                    ? 'w-4 h-1.5 bg-surface-bright shadow'
                    : 'w-1.5 h-1.5 bg-surface-bright/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-space-md flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          {rating ? (
            <div className="flex items-center gap-1 text-caption text-outline mb-1 font-label">
              <span className="material-symbols-outlined text-[#FD661D] text-[14px]">star</span>
              <span className="font-bold text-on-surface">{rating.toFixed(1)}</span>
              {reviews && <span>({reviews} reviews)</span>}
            </div>
          ) : (
            brand && <span className="font-label text-caption text-outline uppercase">{brand}</span>
          )}

          <h3 className="font-headline-3 text-headline-3 text-on-surface line-clamp-1 group-hover:text-primary transition-colors mt-0.5">
            {name}
          </h3>

          {subtitle && (
            <p className="font-body-regular text-caption text-outline mt-0.5 line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pricing & Buttons */}
        <div className="pt-space-md flex flex-col justify-end">
          {/* Price line */}
          <div className="flex flex-wrap items-baseline gap-space-xs mb-space-xs">
            <span className="font-headline-2 text-headline-2 text-on-surface">
              {priceFormatted || `₹${price?.toLocaleString('en-IN')}`}
            </span>
            {originalPriceFormatted && (
              <span className="text-caption text-outline line-through">
                {originalPriceFormatted}
              </span>
            )}
            {savings && (
              <span className="text-caption font-bold text-[#388E3C]">{savings}</span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-space-xs border-t border-surface-container-high/60">
            <button
              onClick={handleAddToCart}
              className="flex-1 h-9 sm:h-10 px-2.5 sm:px-space-sm bg-surface-container-low hover:bg-surface-container-high text-[#FD661D] border border-[#FD661D]/30 rounded-lg font-body-bold text-label flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 h-9 sm:h-10 px-2.5 sm:px-space-sm bg-secondary-container hover:bg-[#e55513] text-on-primary rounded-lg font-body-bold text-label flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
