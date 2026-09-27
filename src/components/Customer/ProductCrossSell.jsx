import React, { useState } from 'react';

const COMPLEMENTARY_PRODUCTS = [
  {
    id: 'rec-1',
    guild: 'LEATHER GUILD',
    name: 'Vagabond Waxed Weekender',
    price: 7490,
    originalPrice: 8900,
    badge: 'Save 15%',
    badgeColor: 'bg-[#E8F5E9] text-[#388E3C]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYZK7xdHrJApGQ_2QMGGqLPwObtMA4qd-x2nOi8GMkDp_pwaoTCYCWVJnlArk8K0uLOAXuuGtr1Uvjm4blcq5ZezZTfI1-k6waU0Rve81dWQwTyNVc1CsAG9yukr6KfMcV-kvCj3crYlDng6rEmPSEEI1rMsHUmzJv4MFJEY9AaToFM9HXx68gQMRlXBMLl91IxJMLDTSTkGD_GuUIuU_cnr8Y-DZBw_OyHaozzRdd3Vt9hVMa-j2wFQ',
    alt: 'Handmade full-grain waxed canvas and saddle leather travel weekender duffle bag on neutral background.'
  },
  {
    id: 'rec-2',
    guild: 'AMIHIVE TIME',
    name: 'Chronoscope No.01 Enamel',
    price: 24500,
    originalPrice: null,
    badge: null,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA598_K2_FMbhsRta-4y7eQGL5nV4aSx2eHcrQ4eGT07jYp8g6AiDVqtqqFXQLslDBS2qicvIr4MF_pwysQaEWlvtew54Z3pMyjq7Y10D4l6aiHyufyFkcJybc5MiEoiMen1OTU0ODPt7KeYMC41zXxE58hGzo8YYn3larJVbRP9El31xGhRTajWnlE3orpJB9nn7At6ohx6NBAdoqemoEy4IxJUcIxr02kq8xIFhBfhCZULtBC6yEs7g',
    alt: 'Sleek minimalist automatic chronograph watch with white enamel dial and black shell cordovan strap.'
  },
  {
    id: 'rec-3',
    guild: 'STUDIO GLASS',
    name: 'Ribbed Artisan Night Carafe',
    price: 2890,
    originalPrice: 3400,
    badge: 'Few Left',
    badgeColor: 'bg-[#FFEBEE] text-[#D32F2F]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVcwSepRFP8aLnJn-X4rUUNOFfWt9AaWngB6JOMFXvFNhMXGzapvW6KqVQ4Ph67dsdQ5l-1TYQUcsJDskxwmQUybMBAUYyPoptRQBumzPNgTEyr-de2Rv4-IbDyqHE7tyJGbM8lK5kEVNh0XCkxW1waG0iQBAmXG0F-qHzPNARTddZkVcWXPSSdX-cHKdtbd5dIyHG33YzJ0EFtDav_xSdG3TuA4nMpDcZCJUHABcG5Wh0j-G7iNH5pQ',
    alt: 'Handblown ribbed borosilicate glass bedside carafe with solid walnut ball stopper.'
  },
  {
    id: 'rec-4',
    guild: 'LEATHER GUILD',
    name: 'Minimalist Cardfold In Cognac',
    price: 1750,
    originalPrice: null,
    badge: null,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdNBKZQ04p8iolkEn3Ivix58P70CHTxXycUoc0ljjgX2M1gxPg9xVlkAJOOgdyu6oD8YDx3KET_hl1h1iQKRktE0j97JLLR6x1JjtMqkzhG2Umkm5DeRLUO8fsOiLr7pn4fngvYeiJJXiQTyWC0oRQaUWjnO1j_XG49mHjBKTPivGWah2tBDGhUKQUcJH_HeNEhEbEbnDtBWf35dPIoPI7I4t0Q0Z9rXg1sUEZ-91qXSWJiP3ypGfMg',
    alt: 'Slim vegetable-tanned Italian leather cardholder wallet in matching cognac brown with burnished edges.'
  }
];

export default function ProductCrossSell({ products = COMPLEMENTARY_PRODUCTS, onQuickAdd }) {
  const [addedItems, setAddedItems] = useState({});

  const handleQuickAdd = (product) => {
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    if (onQuickAdd) onQuickAdd(product);
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex items-end justify-between mb-space-lg">
          <div className="space-y-space-2xs">
            <span className="font-label-bold text-label-bold text-secondary uppercase tracking-widest">
              CURATED MATCHES
            </span>
            <h2 className="font-headline-2 text-headline-2 text-on-surface font-bold">
              Frequently Complemented With
            </h2>
          </div>
          <a
            href="/home#curated"
            className="font-label-bold text-label-bold text-primary hover:underline hidden sm:inline"
          >
            Explore Full Studio Collection →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs sm:gap-space-md">
          {products.map((item) => {
            const isAdded = addedItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col group border border-surface-container/60"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-surface-container mb-space-xs relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  {item.badge && (
                    <span
                      className={`absolute top-2 left-2 font-label-bold text-label-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="font-caption text-caption text-secondary uppercase font-semibold">
                  {item.guild}
                </span>
                <h4 className="font-body-bold text-body-bold text-on-surface truncate">
                  {item.name}
                </h4>

                <div className="flex items-center gap-space-xs my-space-2xs">
                  <span className="font-body-bold text-body-bold text-on-surface">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  {item.originalPrice && (
                    <span className="font-caption text-caption text-outline line-through">
                      ₹{item.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleQuickAdd(item)}
                  className={`mt-auto w-full py-2 font-label-bold text-label-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    isAdded
                      ? 'bg-[#388E3C] text-white'
                      : 'bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <span className="material-symbols-outlined text-[16px]">check</span>
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      <span>Quick Add</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
