import React, { useState } from 'react';

export default function MobileStickyPurchaseBar({
  price = 18990,
  originalPrice = 21990,
  onAddToCart,
  onBuyNow
}) {
  const [added, setAdded] = useState(false);
  const savings = originalPrice - price;
  const discountPct = Math.round((savings / originalPrice) * 100);

  const handleCartClick = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur border-t border-surface-container px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="font-headline-3-mobile text-headline-3-mobile text-on-surface font-bold">
          ₹{price.toLocaleString('en-IN')}
        </span>
        <span className="font-caption text-caption text-[#388E3C] font-semibold">
          Save ₹{savings.toLocaleString('en-IN')} ({discountPct}% off)
        </span>
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end max-w-[240px]">
        <button
          onClick={handleCartClick}
          aria-label="Add to cart"
          className={`px-3 py-2.5 rounded-lg font-label-bold text-label-bold flex items-center justify-center shadow-sm transition-all ${
            added
              ? 'bg-[#388E3C] text-white'
              : 'bg-[#FF9F00] text-[#191B23] hover:brightness-105 active:scale-95'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {added ? 'check' : 'shopping_bag'}
          </span>
        </button>

        <button
          onClick={onBuyNow}
          className="flex-1 py-2.5 px-4 rounded-lg bg-secondary-container text-on-secondary font-label-bold text-label-bold text-center shadow-md active:scale-95 transition-all"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
