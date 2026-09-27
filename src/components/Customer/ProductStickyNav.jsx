import React, { useState, useEffect, useRef } from 'react';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'artisan-story', label: 'Artisan Craftsmanship' },
  { id: 'reviews-section', label: 'Collector Reviews (96)' },
  { id: 'faq-section', label: 'Care & FAQ' },
];

export default function ProductStickyNav() {
  const [activeTab, setActiveTab] = useState('overview');
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sync with mobile header scroll hide/reveal
      if (currentScrollY <= 25) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Active tab spy
      const scrollPosition = currentScrollY + 180;
      for (let i = TABS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TABS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(TABS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`sticky z-40 bg-surface-container-lowest/95 backdrop-blur shadow-sm border-b border-surface-container/60 transition-all duration-300 ease-in-out ${
        headerVisible ? 'top-[136px] md:top-[112px]' : 'top-0 md:top-[112px]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop overflow-x-auto scrollbar-none">
        <div className="flex items-center space-x-space-md py-space-xs min-w-max text-on-surface-variant font-body-bold text-body-bold">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => scrollToSection(e, tab.id)}
                className={`py-2 px-1 transition-all ${
                  isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'hover:text-on-surface border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
