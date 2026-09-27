import React, { useState } from 'react';
import { giftCollections as defaultGifts } from '../../data/customerHomeData';

const recipientOptions = [
  'For Him',
  'For Her',
  'Weddings',
  'Birthdays',
  'Milestones & Promotions',
];

const budgetOptions = [
  'Under ₹2,500',
  'Under ₹5,000',
  '₹5,000 - ₹15,000',
  'Premium & Heirloom',
];

const GiftFinder = ({ gifts = defaultGifts }) => {
  const [selectedRecipient, setSelectedRecipient] = useState('For Him');
  const [selectedBudget, setSelectedBudget] = useState('Under ₹5,000');

  // Filter gifts based on selections
  const filteredGifts = gifts.filter((gift) => {
    const matchRecipient =
      !gift.recipients ||
      gift.recipients.length === 0 ||
      gift.recipients.includes(selectedRecipient);
    const matchBudget = !gift.budget || gift.budget === selectedBudget;
    return matchRecipient || matchBudget; // graceful match to always showcase pieces
  });

  const displayGifts = filteredGifts.length > 0 ? filteredGifts : gifts;

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl bg-surface-container-lowest rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] my-space-lg"
      id="gift-finder"
    >
      <div className="max-w-3xl mb-space-xl">
        <div className="inline-flex items-center gap-1 text-primary font-label-bold text-label uppercase tracking-widest mb-1">
          <span className="material-symbols-outlined text-[16px]">card_giftcard</span>
          Personalized Concierge
        </div>
        <h2 className="font-headline-1 text-headline-1 text-on-surface tracking-tight">
          Find the Right Gift
        </h2>
        <p className="font-body-regular text-body-regular text-on-surface-variant mt-1">
          Skip generic gift cards. Select by person or milestone to reveal pieces wrapped in archival presentation.
        </p>
      </div>

      {/* Filter Matrix */}
      <div className="space-y-space-md pb-space-xl">
        <div>
          <label className="font-label-bold text-caption text-outline uppercase tracking-wider block mb-space-xs">
            By Recipient or Occasion
          </label>
          <div className="flex flex-wrap gap-space-xs" id="gift-recipient-filters">
            {recipientOptions.map((item) => {
              const isSelected = selectedRecipient === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedRecipient(item)}
                  className={`px-space-md py-space-xs rounded-full font-body-medium text-label transition-all ${
                    isSelected
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="font-label-bold text-caption text-outline uppercase tracking-wider block mb-space-xs">
            By Budget
          </label>
          <div className="flex flex-wrap gap-space-xs" id="gift-budget-filters">
            {budgetOptions.map((item) => {
              const isSelected = selectedBudget === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedBudget(item)}
                  className={`px-space-md py-space-xs rounded-full font-body-medium text-label transition-all ${
                    isSelected
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Card Previews for Selected Gifting Collections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {displayGifts.slice(0, 3).map((gift) => (
          <div
            key={gift.id}
            className="relative rounded-xl overflow-hidden bg-surface-container-low p-space-lg flex flex-col justify-end min-h-[220px] group cursor-pointer shadow-xs hover:shadow-md transition-all"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={gift.title}
              src={gift.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191B23]/90 via-[#191B23]/40 to-transparent" />
            <div className="relative z-10 text-on-primary">
              <span className="font-label-bold text-caption text-tertiary-fixed tracking-wider uppercase">
                {gift.badge}
              </span>
              <h4 className="font-headline-3 text-headline-3 text-surface-bright mb-1">
                {gift.title}
              </h4>
              <p className="font-body-regular text-caption text-[#c2c6d5] mb-2">
                {gift.description}
              </p>
              <span className="font-label-bold text-label text-[#ffb866]">
                {gift.priceInfo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftFinder;
