import React, { useState, useEffect, useRef } from 'react';
import { upcomingProducts as defaultUpcoming } from '../../data/customerHomeData';

function UpcomingCard({ product, isNotified, onToggleNotify }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const imageList =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];

  const totalImages = imageList.length;

  useEffect(() => {
    if (isHovered || totalImages <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % totalImages);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, totalImages]);

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % totalImages);
  };

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

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,86,195,0.08)] transition-all group flex flex-col justify-between border border-outline-variant/30 select-none">
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
                alt={`${product.name} - View ${imgIdx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={imgSrc}
              />
            </div>
          ))}
        </div>

        {/* Left and Right Navigation Arrows */}
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
        <span className="absolute top-space-xs left-space-xs bg-[#D32F2F] text-on-primary px-space-xs py-0.5 rounded text-caption font-label-bold shadow-xs flex items-center gap-1 z-10 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-surface-bright animate-pulse" />
          {product.launchDate}
        </span>
        <span className="absolute bottom-space-xs left-space-xs bg-surface-container-lowest/90 px-space-xs py-0.5 rounded text-caption font-label text-on-surface shadow-xs z-10 pointer-events-none">
          {product.batchInfo}
        </span>

        {/* Dot Indicators */}
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

      <div className="p-space-md flex-1 flex flex-col justify-between">
        <div>
          <span className="font-label text-caption text-outline uppercase">{product.brand}</span>
          <h3 className="font-headline-3 text-headline-3 text-on-surface line-clamp-1 group-hover:text-primary transition-colors mt-0.5">
            {product.name}
          </h3>
          <p className="font-body-regular text-caption text-outline mt-0.5">
            {product.subtitle}
          </p>
        </div>

        <div className="pt-space-md flex items-center justify-between border-t border-surface-container-high/60 mt-space-sm">
          <div>
            <span className="font-headline-2 text-headline-2 text-on-surface">
              {product.priceFormatted || `₹${product.price?.toLocaleString('en-IN')}`}
            </span>
          </div>
          <button
            onClick={() => onToggleNotify(product.id)}
            className={`h-10 px-space-md border rounded-lg font-body-bold text-label flex items-center gap-1 transition-all cursor-pointer ${
              isNotified
                ? 'bg-[#388E3C] text-white border-[#388E3C]'
                : 'border-primary text-primary hover:bg-primary hover:text-on-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isNotified ? 'check_circle' : 'notifications'}
            </span>
            {isNotified ? 'Subscribed' : 'Notify Me'}
          </button>
        </div>
      </div>
    </div>
  );
}

const UpcomingProductsSection = ({ products = defaultUpcoming }) => {
  const [notifiedMap, setNotifiedMap] = useState({});

  const toggleNotify = (id) => {
    setNotifiedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl border-b border-surface-container-high">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
        <div>
          <div className="inline-flex items-center gap-space-2xs text-[#D32F2F] font-label-bold text-label uppercase tracking-widest mb-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            Limited Batch Reservations
          </div>
          <h2 className="font-headline-1 text-headline-1 text-on-surface tracking-tight">
            Upcoming Products
          </h2>
          <p className="font-body-regular text-body-regular text-on-surface-variant mt-1">
            Preview limited batch releases opening soon for reservation.
          </p>
        </div>
        <div className="text-caption font-label text-outline">
          Early access reservation privileges for members
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg mobile-card-carousel">
        {products.map((product) => (
          <UpcomingCard
            key={product.id}
            product={product}
            isNotified={!!notifiedMap[product.id]}
            onToggleNotify={toggleNotify}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomingProductsSection;
