import { useState } from "react";

// Watch company logos designed in clean monochrome white matching the user's reference image
const watchBrands = [
  {
    name: "ROLEX",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
        {/* Rolex Coronet Crown */}
        <path d="M18 14 L13 5 L17 9 L22 3 L27 9 L31 5 L26 14 Z M16 16 h12 v2 h-12 z" />
        <text x="40" y="24" fontFamily="'Times New Roman', Georgia, serif" fontWeight="bold" fontSize="18" letterSpacing="3">
          ROLEX
        </text>
      </svg>
    ),
  },
  {
    name: "OMEGA",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 145 40" xmlns="http://www.w3.org/2000/svg">
        {/* Greek Omega Symbol */}
        <path d="M12 21 C12 14 17 10 23 10 C29 10 34 14 34 21 C34 24 32 26 29 27 L33 27 L33 29 L23 29 L23 27 C25 27 27 25 28 22 C28 16 25 12 23 12 C21 12 18 16 18 22 C19 25 21 27 23 27 L23 29 L13 29 L13 27 L17 27 C14 26 12 24 12 21 Z" />
        <text x="42" y="24" fontFamily="'Futura', 'Century Gothic', sans-serif" fontWeight="700" fontSize="17" letterSpacing="4">
          OMEGA
        </text>
      </svg>
    ),
  },
  {
    name: "TUDOR",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 145 40" xmlns="http://www.w3.org/2000/svg">
        {/* Tudor Shield Crest */}
        <path d="M15 6 L31 6 L31 16 C31 22 23 28 23 28 C23 28 15 22 15 16 Z M18 9 L18 16 C18 20 23 24 23 24 C23 24 28 20 28 16 L28 9 Z M19 13 h8 v2 h-8 z" />
        <text x="40" y="24" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="17" letterSpacing="4">
          TUDOR
        </text>
      </svg>
    ),
  },
  {
    name: "TAG HEUER",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg">
        {/* TAG Heuer Shield */}
        <polygon points="12,7 32,7 36,15 22,29 8,15" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="14" y="14" fontFamily="sans-serif" fontWeight="900" fontSize="7" letterSpacing="1">TAG</text>
        <text x="12" y="22" fontFamily="sans-serif" fontWeight="900" fontSize="7" letterSpacing="1">HEUER</text>
        <text x="44" y="23" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="16" letterSpacing="2">
          TAG HEUER
        </text>
      </svg>
    ),
  },
  {
    name: "SEIKO",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="25" fontFamily="'Impact', 'Arial Black', sans-serif" fontWeight="bold" fontSize="21" letterSpacing="5">
          SEIKO
        </text>
      </svg>
    ),
  },
  {
    name: "TISSOT",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
        {/* Swiss Cross */}
        <rect x="12" y="7" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M19 11 h4 v10 h-4 z M16 14 h10 v4 h-10 z" />
        <text x="38" y="22" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="800" fontSize="16" letterSpacing="2">
          TISSOT
        </text>
        <text x="40" y="30" fontFamily="sans-serif" fontSize="7" letterSpacing="3" opacity="0.8">
          1853
        </text>
      </svg>
    ),
  },
  {
    name: "HAMILTON",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        {/* Stylized Art-Deco H */}
        <path d="M12 7 h5 v7 h8 v-7 h5 v18 h-5 v-7 h-8 v7 h-5 z" />
        <text x="36" y="23" fontFamily="'Century Gothic', 'Tw Cen MT', sans-serif" fontWeight="700" fontSize="15" letterSpacing="4">
          HAMILTON
        </text>
      </svg>
    ),
  },
  {
    name: "PATEK PHILIPPE",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 195 40" xmlns="http://www.w3.org/2000/svg">
        {/* Calatrava Cross icon */}
        <circle cx="20" cy="18" r="3" />
        <path d="M20 7 v6 M20 23 v6 M9 18 h6 M25 18 h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="36" y="19" fontFamily="'Georgia', serif" fontWeight="700" fontSize="13" letterSpacing="2">
          PATEK PHILIPPE
        </text>
        <text x="75" y="29" fontFamily="sans-serif" fontSize="7" letterSpacing="4" opacity="0.8">
          GENEVE
        </text>
      </svg>
    ),
  },
  {
    name: "IWC",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="24" fontFamily="'Times New Roman', Georgia, serif" fontWeight="bold" fontSize="22" letterSpacing="3">
          IWC
        </text>
        <text x="72" y="22" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="8" fontWeight="600" letterSpacing="3">
          SCHAFFHAUSEN
        </text>
      </svg>
    ),
  },
  {
    name: "BREITLING",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 165 40" xmlns="http://www.w3.org/2000/svg">
        {/* Breitling B Wing Symbol */}
        <path d="M12 18 C16 11 24 11 26 14 C26 18 20 22 16 23 C22 23 27 25 26 27 C24 29 18 29 14 26 L12 26 Z" />
        <text x="36" y="23" fontFamily="'Trebuchet MS', sans-serif" fontWeight="800" fontSize="16" letterSpacing="3">
          BREITLING
        </text>
      </svg>
    ),
  },
  {
    name: "CASIO",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="25" fontFamily="'Arial Black', sans-serif" fontWeight="900" fontSize="20" letterSpacing="3">
          CASIO
        </text>
      </svg>
    ),
  },
  {
    name: "CITIZEN",
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 145 40" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="24" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="5">
          CITIZEN
        </text>
      </svg>
    ),
  },
];

export default function WatchBrandsInfiniteCarousel({ className = "" }) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate to ensure perfectly continuous seamless infinite scrolling
  const brandTrack = [...watchBrands, ...watchBrands];

  return (
    <section
      className={`w-full bg-transparent overflow-hidden border-y border-outline-variant/15 select-none ${className}`}
      aria-label="Watch Brand Partners"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Edge gradient mask for smooth fade-in and fade-out */}
      <div
        className="relative w-full overflow-hidden py-4 sm:py-5"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="brand-marquee-track flex items-center py-2"
          style={{
            width: "max-content",
            animation: "brandMarquee 32s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {brandTrack.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="group/brand flex items-center justify-center px-8 sm:px-12 py-2 text-on-surface/55 hover:text-primary transition-all duration-300 cursor-pointer select-none flex-shrink-0"
              style={{
                animation: `subtleBrandFloat 3.6s ease-in-out infinite`,
                animationDelay: `${(idx % 6) * 0.6}s`,
              }}
              title={brand.name}
            >
              <div className="transition-all duration-300 transform group-hover/brand:scale-110">
                {brand.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes subtleBrandFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        .brand-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
