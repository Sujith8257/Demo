import React, { useState, useEffect, useRef } from 'react';
import { heroSlides as defaultSlides } from '../../data/customerHomeData';

const HeroCarousel = ({ slides = defaultSlides, autoplayDelay = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoplayDelay);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide, isPaused, autoplayDelay, totalSlides]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-4 md:pt-5 lg:pt-6 pb-space-xl lg:pb-space-2xl">
      {/* Carousel Container */}
      <div
        aria-label="Curated Editorial Carousel"
        className="relative w-full rounded-2xl group/carousel select-none"
        id="hero-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Slides Track Viewport */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={slide.id || idx} className="w-full flex-shrink-0" data-slide-index={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-stretch">
                  {/* Left: Editorial Content */}
                  <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center bg-surface-container-lowest p-space-lg md:p-space-2xl rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] min-h-[460px]">
                    <div
                      className="inline-flex items-center gap-space-2xs w-fit px-space-sm py-space-2xs rounded-full font-label-bold text-label mb-space-md tracking-wider"
                      style={{
                        backgroundColor: slide.badgeBg || '#f3f3fe',
                        color: slide.badgeColor === 'primary' ? '#004094' : (slide.badgeColor || '#004094'),
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: slide.dotColor || '#004094' }}
                      />
                      {slide.badge}
                    </div>

                    <h1 className="font-headline-1 text-headline-1 md:text-[38px] md:leading-[1.18] text-on-surface tracking-tight mb-space-md whitespace-pre-line">
                      {slide.title}
                    </h1>

                    <p className="font-body-regular text-body-regular text-on-surface-variant max-w-lg mb-space-xl leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-space-md">
                      {slide.primaryAction && (
                        <a
                          className="h-12 px-space-xl bg-secondary-container hover:bg-[#e55513] text-on-primary font-body-bold text-body-bold rounded-lg shadow-[0_4px_12px_rgba(253,102,29,0.25)] flex items-center justify-center gap-space-xs transition-all transform hover:-translate-y-0.5"
                          href={slide.primaryAction.href}
                        >
                          <span>{slide.primaryAction.text}</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </a>
                      )}
                      {slide.secondaryAction && (
                        <a
                          className="h-12 px-space-lg bg-surface-container-lowest text-primary hover:bg-surface-container-low border border-outline-variant font-body-bold text-body-bold rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.04)] flex items-center justify-center gap-space-2xs transition-all"
                          href={slide.secondaryAction.href}
                        >
                          {slide.secondaryAction.icon && (
                            <span className="material-symbols-outlined text-[18px] text-primary">
                              {slide.secondaryAction.icon}
                            </span>
                          )}
                          <span>{slide.secondaryAction.text}</span>
                        </a>
                      )}
                    </div>

                    {slide.guarantees && (
                      <div className="mt-space-2xl pt-space-md flex items-center gap-space-xl text-outline font-label text-label border-t border-surface-container-high">
                        {slide.guarantees.map((g, gi) => (
                          <span key={gi} className="flex items-center gap-space-2xs">
                            <span className="material-symbols-outlined text-primary text-[16px]">
                              {g.icon}
                            </span>
                            {g.text}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Visual */}
                  <div className="order-1 lg:order-2 lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-surface-container-low">
                    <img
                      className="w-full h-full object-cover"
                      alt={slide.caption || 'Editorial Feature'}
                      src={slide.image}
                    />
                    {slide.imageTag && (
                      <div className="absolute top-space-md right-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-space-2xs rounded-full font-label text-label text-on-surface shadow-sm flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: slide.imageTagDot || '#fd661d' }}
                        />
                        {slide.imageTag}
                      </div>
                    )}
                    {slide.caption && (
                      <div className="absolute bottom-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded-lg shadow-sm border border-outline-variant/30 hidden sm:flex items-center gap-space-xs text-caption font-label">
                        <span className="font-bold text-on-surface">{slide.caption}</span>
                        <span className="text-outline">{slide.captionSub}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls & Bottom Bar */}
        <div className="mt-space-md flex items-center justify-between bg-surface-container-lowest px-space-md sm:px-space-lg py-space-xs rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/30">
          {/* Left: Slide Counter Badge */}
          <div className="flex items-center gap-space-xs">
            <span className="font-label-bold text-caption uppercase text-outline tracking-wider hidden sm:inline">
              Feature:
            </span>
            <span className="font-label-bold text-label text-primary bg-primary-fixed/50 px-2 py-0.5 rounded-full">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Center: Pagination Dots */}
          <div
            aria-label="Slide indicators"
            className="flex items-center gap-space-xs"
            role="tablist"
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to Slide ${idx + 1}`}
                aria-selected={idx === currentSlide}
                className="group flex items-center py-2 px-1 focus:outline-none"
                role="tab"
              >
                <span
                  className={
                    idx === currentSlide
                      ? 'h-2 w-8 rounded-full bg-primary transition-all duration-300'
                      : 'h-2 w-2 rounded-full bg-outline-variant group-hover:bg-outline transition-all duration-300'
                  }
                />
              </button>
            ))}
          </div>

          {/* Right: Prev / Next Navigation Buttons */}
          <div className="flex items-center gap-space-xs">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface hover:text-primary transition-all flex items-center justify-center border border-outline-variant/40 shadow-xs focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface hover:text-primary transition-all flex items-center justify-center border border-outline-variant/40 shadow-xs focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Connected Story Dock: Dark Navy Panel */}
      <div className="mt-space-md bg-[#0B192C] text-on-primary rounded-xl p-space-lg md:p-space-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="max-w-2xl">
            <div className="flex items-center gap-space-xs font-label-bold text-caption tracking-widest text-[#ffb866] uppercase mb-1">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              THIS WEEK'S STORY
            </div>
            <h2 className="font-headline-2 text-headline-2 text-surface-bright mb-1 tracking-tight">
              Inside the craft.
            </h2>
            <p className="font-body-regular text-body-regular text-[#c2c6d5] leading-relaxed">
              Discover the people, materials, and deliberate patience behind pieces made to outlive passing trends.
            </p>
          </div>
          <a
            className="self-start md:self-center shrink-0 px-space-lg py-space-sm bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-bright font-body-bold text-body-bold rounded-lg transition-colors flex items-center gap-space-xs"
            href="#makers"
          >
            <span>Meet the Makers</span>
            <span className="material-symbols-outlined text-[18px]">east</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
