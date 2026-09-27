import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({
  id,
  kicker,
  kickerIcon,
  kickerColor = 'primary',
  title,
  description,
  actionText,
  actionLink = '#',
  onActionClick,
  statusBadge,
  products = [],
  onAddToCart,
  onBuyNow,
  onWishlistToggle,
  bgVariant = 'default',
  borderBottom = true,
}) => {
  const bgClasses =
    bgVariant === 'highlight'
      ? 'bg-surface-container-low/40 rounded-2xl my-space-lg'
      : '';

  const borderClass = borderBottom ? 'border-b border-surface-container-high' : '';

  return (
    <section
      id={id}
      className={`w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl ${borderClass} ${bgClasses}`}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
        <div>
          {kicker && (
            <div
              className={`inline-flex items-center gap-space-2xs font-label-bold text-label uppercase tracking-widest mb-1 ${
                kickerColor === 'primary'
                  ? 'text-primary'
                  : kickerColor === 'secondary'
                  ? 'text-secondary-container'
                  : 'text-outline'
              }`}
            >
              {kickerIcon && (
                <span className="material-symbols-outlined text-[16px]">{kickerIcon}</span>
              )}
              {kicker}
            </div>
          )}

          <h2 className="font-headline-1 text-headline-1 text-on-surface tracking-tight">
            {title}
          </h2>

          {description && (
            <p className="font-body-regular text-body-regular text-on-surface-variant mt-1">
              {description}
            </p>
          )}
        </div>

        {/* Right action / status */}
        <div className="flex items-center gap-space-md self-start md:self-end">
          {statusBadge && (
            <div className="flex items-center gap-space-xs text-caption font-label text-outline">
              <span className="w-2 h-2 rounded-full bg-[#388E3C]" />
              {statusBadge}
            </div>
          )}

          {actionText && (
            <a
              href={actionLink}
              onClick={(e) => {
                if (onActionClick) {
                  e.preventDefault();
                  onActionClick();
                }
              }}
              className="font-body-bold text-body-bold text-primary flex items-center gap-1 hover:underline cursor-pointer"
            >
              {actionText}
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </a>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg mobile-card-carousel no-scrollbar">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            onWishlistToggle={onWishlistToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
