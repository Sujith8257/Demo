import React from 'react';
import { makerStories as defaultMakers } from '../../data/customerHomeData';

const MakerStories = ({ makers = defaultMakers }) => {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-2xl"
      id="makers"
    >
      <div className="bg-surface-container-low rounded-2xl p-space-lg md:p-space-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Editorial statement */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-bold text-label tracking-widest uppercase">
              <span className="material-symbols-outlined text-[16px]">handyman</span>
              ORIGIN &amp; CRAFTSMANSHIP
            </div>
            <h2 className="font-headline-1 text-headline-1 text-on-surface tracking-tight">
              Hands Behind the Objects
            </h2>
            <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
              Meet the artisans and designers behind selected AMIHIVE pieces. We reject anonymous factory assembly lines in favor of independent studios where each watch caliber is regulated by hand, ceramics bear maker stamps, and leather retains its natural grain integrity.
            </p>
            <div className="pt-space-xs">
              <a
                className="h-11 px-space-lg bg-surface-container-lowest text-primary hover:bg-surface hover:text-primary-container font-body-bold text-body-bold rounded-lg shadow-sm inline-flex items-center gap-space-xs transition-all"
                href="#makers"
              >
                <span>Explore Maker Stories</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </a>
            </div>
          </div>

          {/* Maker Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-space-md">
            {makers.map((maker, idx) => (
              <div
                key={maker.name || idx}
                className={`flex flex-col space-y-2 ${idx === 2 ? 'hidden sm:flex' : ''}`}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container shadow-xs group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={maker.name}
                    src={maker.image}
                  />
                </div>
                <div>
                  <p className="font-body-bold text-body-bold text-on-surface">{maker.name}</p>
                  <p className="font-label text-caption text-outline">{maker.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakerStories;
