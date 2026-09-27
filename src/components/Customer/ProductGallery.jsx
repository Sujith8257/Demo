import React, { useState } from 'react';

const DEFAULT_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUj8qvR2uCCD0Xa1XlYs6bQA0GhQY88RuRI24b19PzzWWYEp-lCkIehZrTtVdZ0yS984FlXzKW8nzP9dGXjjwTA8X4o3PZulkxoZovfVHrIblzPJWK2vtUbkcv7_3hGruu8Mv86cy_XjsZ7bpvwzFxSZRikON-_spQpmtgd7oQEaqeB84UMf1LdJbBpB4tfdarGvty5Uknu3rXyt8TFmUO7iwfhlgkYd_vPIx3ya0WJr7L9_TyGkhK4Q',
    alt: 'Macro front dial view of Aster No 04 Automatic luxury blue sunburst dial watch with brushed 316L stainless steel case, polished bevels and faceted silver indices on a pristine studio backdrop.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPdCPPF74fyE9m6YwIxVjpKRGYoyvw630m9xzHDfHIzQbsOD8kraarHK3mL-mb3Vl2fSQHbwOEp29-xh4XOH5UhjmqnjzLAqD97oI05NipykENu4HsV7o0TMBAanoASZvEAEEOchzzOAtn8OOn1WQutA4BWRRrud4Q8M8XII8Ms2uhNlzV4639GRkrz7LkMPO4-PsIjBRqaxF7p0e1GMd3BRPv2wGjimP5BXZRrt8mW573deXGi12CSg',
    alt: 'Dynamic side angle view showing the slender 10.8mm profile of a stainless steel mechanical watch case with signed knurled crown and domed sapphire crystal.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARDkkp1RPiBTE4QL79sAXRjdr_AfHX24FvJASFx5iNryyyd4l5_OBbxGjk7kCyMhxaU4To_u5d4xPbiZw6xYYT45-hZWi8l-4VglMYkpKoZ95tP7oND7beJiMoKA9da4PhwuHrsFG6ho5NC-B4ct4S_cKDKJU1_BUvH7y6sWn3BcgeXB_wQWYY6yapDQKZsgWLBVlbnq88WSVM8U7FCd0j95Kq8AWtwXvpqInHvsy_Gh3TsT7xAa98VA',
    alt: 'Natural lifestyle wrist shot of a gentleman wearing the Aster No 04 blue dial watch paired with an artisan cognac leather strap and tailored linen cuff.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfddbiTqDhzUFPuIfs_NOQ9G-10RGTy4fVK_s3VhAWpghXsXuMrw2mNSRmspzYGS1S_IgPKnpsqagisszyVFG5eGPy7Ngeg3tfIW4Vzqw6awAyVPxDx3MjxWip-J6lIWvIjNK2L96LcP4-MP9meXOLIZTC4Qrp0AQVdphZuomjgcL5FynbrS4ntXsopSUZCVdlv5Dpvol7OD66YPxvj78NXPwHYGBKJBHdLMz6WwQKIhHDkeIkS4iXGw',
    alt: 'Close up detail shot of hand-stitched vegetable-tanned Tuscan leather strap in cognac brown featuring laser engraved deployant steel clasp.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOPy51TSYHeg40vdG-1XHJ3m19KlhQbT5CPRfipu_r3BtR3emi3sEhR9iAejsMThNBJsHjq5yrzj1npgUVP7oXsE4L53soOuAQby4F8_R_nU4_Q8-WoVe6P3YTNen39yeBEip7pedhOKWw1Rf97KiG6VlwFMlycKQtDhe6n9ufSZsTiFRN6uik2I8UwNeQoCPE9kyx52mGUJY9W9ER4P6fPKP0MpDCri9Mpo4U7Ya_ej2f5yjeksPFbA',
    alt: 'Exhibition mineral glass caseback displaying the decorated mechanical automatic rotor and ruby bearings of the Miyota 9015 caliber.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB01YCmvP4G1csE-lebS7IJloD7NNvD_7gmA_-nIAtsRWwa19PO88OXRRK6q55sLB-IWNwIFOYx87bONAjfOiWdPp4e0i24SJ4aRgfc_CBMukF_7A3lApxpq3Fm0gcJMNOmAl9Mk578sF-JKoovzvKcuHhC1d-tXYxUdUqWb8iag4FpG4nte7iyd17DoO_ZbdrBMqLTb2HZ5keNW6c6AHu_xyqn7wUwVWxtP1wVi7ueul-YcRierfVYQA',
    alt: 'Luxury presentation unboxing experience showing heavy dark navy rigid gift box with embossed gold foil AMIHIVE emblem and travel watch pouch.'
  }
];

export default function ProductGallery({ images = DEFAULT_IMAGES, badge = 'CERTIFIED HOROLOGY' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryList = images && images.length > 0 ? images : DEFAULT_IMAGES;
  const currentImage = galleryList[activeIndex] || galleryList[0];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Aster No.04 Automatic Blue Dial Watch',
          text: 'Check out this handcrafted mechanical timepiece on AMIHIVE',
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <div className="lg:col-span-5 flex flex-col-reverse md:flex-row gap-space-sm lg:sticky lg:top-[124px]">
      {/* Vertical Thumbnails Rail */}
      <div
        className="flex md:flex-col gap-space-xs overflow-x-auto md:overflow-y-visible shrink-0 pb-2 md:pb-0 scrollbar-none"
        id="gallery-thumbs"
      >
        {galleryList.map((item, idx) => {
          const isSelected = activeIndex === idx;
          const imgSrc = typeof item === 'string' ? item : item.src;
          const imgAlt = typeof item === 'string' ? `Thumbnail ${idx + 1}` : item.alt;

          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden bg-surface-container shadow-sm p-1 transition-all thumb-btn ${
                isSelected
                  ? 'ring-2 ring-primary-container opacity-100 scale-[1.02]'
                  : 'opacity-70 hover:opacity-100 hover:scale-[1.01]'
              }`}
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover rounded"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {/* Main Viewport Visual */}
      <div className="relative flex-1 aspect-square rounded-xl bg-surface-container-lowest overflow-hidden shadow-md flex items-center justify-center group cursor-zoom-in">
        <img
          id="main-view-img"
          src={typeof currentImage === 'string' ? currentImage : currentImage.src}
          alt={typeof currentImage === 'string' ? 'Product view' : currentImage.alt}
          onClick={() => setLightboxOpen(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Quick Overlays */}
        <div className="absolute top-space-sm right-space-sm flex flex-col gap-space-xs z-10">
          <button
            id="wishlist-btn"
            onClick={() => setWishlisted(!wishlisted)}
            className={`w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur shadow-md flex items-center justify-center transition-all ${
              wishlisted ? 'text-secondary-container scale-110' : 'text-on-surface hover:text-secondary-container'
            }`}
            title="Save to Wishlist"
            aria-label="Save to Wishlist"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: wishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface shadow-md flex items-center justify-center hover:text-primary transition-colors relative"
            title="Share with colleagues"
            aria-label="Share product"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
            {shareCopied && (
              <span className="absolute -left-20 bg-inverse-surface text-inverse-on-surface text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap animate-fade-in">
                Link copied!
              </span>
            )}
          </button>
        </div>

        {/* Zoom Hint */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-space-sm left-space-sm bg-inverse-surface/85 backdrop-blur text-inverse-on-surface px-space-xs py-space-2xs rounded font-label text-label flex items-center gap-space-2xs cursor-pointer select-none"
        >
          <span className="material-symbols-outlined text-[16px]">zoom_in</span>
          <span>
            <span className="hidden sm:inline">Hover or click to inspect</span>
            <span className="sm:hidden">Tap to zoom</span> macro dial
          </span>
        </div>

        {/* Certified Studio Stamp Badge */}
        {badge && (
          <div className="absolute top-space-sm left-space-sm bg-primary-fixed text-on-primary-fixed font-label-bold text-label-bold px-space-xs py-space-2xs rounded flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span>{badge}</span>
          </div>
        )}
      </div>

      {/* Optional Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
          <img
            src={typeof currentImage === 'string' ? currentImage : currentImage.src}
            alt="Expanded view"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
