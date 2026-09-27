import React from 'react';
import { Link } from 'react-router-dom';

const MemberBanner = ({
  onViewOffers,
  onJoin,
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pb-space-3xl">
      <div className="bg-[#101B2B] text-on-primary rounded-2xl p-space-xl md:p-space-3xl relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
        {/* Decorative faint gradient background glow */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
          <div className="max-w-xl space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-lowest/10 rounded-full text-caption font-label-bold text-[#ffb866] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary-container" />
              AMIHIVE MEMBER WEEK
            </div>
            <h2 className="font-headline-1 text-headline-1 md:text-[34px] text-surface-bright tracking-tight">
              Selected favourites, better value.
            </h2>
            <p className="font-body-regular text-body-regular text-[#c2c6d5] leading-relaxed">
              Patron tier members unlock early access to rare batch releases, complimentary custom monogramming, and private maker studio visits throughout this week.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
            <a
              className="h-12 px-space-xl bg-secondary-container hover:bg-[#e55513] text-on-primary font-body-bold text-body-bold rounded-lg shadow-[0_4px_12px_rgba(253,102,29,0.25)] flex items-center justify-center gap-space-xs transition-all cursor-pointer"
              href="#recommended"
              onClick={(e) => {
                if (onViewOffers) {
                  e.preventDefault();
                  onViewOffers();
                }
              }}
            >
              <span>View Member Offers</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </a>

            <Link
              to="/profile"
              onClick={(e) => {
                if (onJoin) {
                  e.preventDefault();
                  onJoin();
                }
              }}
              className="h-12 px-space-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-bright font-body-bold text-body-bold rounded-lg flex items-center justify-center transition-colors"
            >
              Sign In / Join Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBanner;
