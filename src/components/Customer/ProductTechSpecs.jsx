import React from 'react';

const DEFAULT_SPECS = {
  caseAndCrystal: [
    { label: 'Case Diameter', value: '40.0 mm' },
    { label: 'Lug-to-Lug Distance', value: '47.5 mm (Ergonomic curved lugs)' },
    { label: 'Case Thickness', value: '10.8 mm' },
    { label: 'Case Material', value: 'Surgical Grade 316L Stainless Steel' },
    { label: 'Crystal', value: 'Double-domed sapphire with AR coating' },
    { label: 'Water Resistance', value: '5 ATM / 50 meters / 165 feet' },
  ],
  dialAndHands: [
    { label: 'Dial Tone', value: 'Deep Midnight Sunray Blue' },
    { label: 'Indices', value: 'Applied diamond-cut steel batons' },
    { label: 'Luminescence', value: 'Super-LumiNova BGW9 (Blue glow)' },
  ],
  movementEngine: [
    { label: 'Caliber', value: 'Miyota 9015 Premium Automatic' },
    { label: 'Beat Rate', value: '28,800 bph / 4 Hertz' },
    { label: 'Jewels', value: '24 Synthetic Rubies' },
    { label: 'Power Reserve', value: '42 Hours' },
    { label: 'Winding / Hacking', value: 'Automatic + Manual Wind + Hacking seconds' },
  ],
  strapAndPackaging: [
    { label: 'Strap Width', value: '20 mm taper to 18 mm buckle' },
    { label: 'Strap Leather', value: 'Full-grain Italian vegetable-tanned cowhide' },
    { label: 'Clasp', value: 'Deployant Butterfly 316L clasp' },
    { label: 'Warranty', value: '2 Years International Studio Warranty' },
  ],
};

export default function ProductTechSpecs({ specs = DEFAULT_SPECS }) {
  const data = { ...DEFAULT_SPECS, ...specs };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low" id="specifications">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-3xl mb-space-lg space-y-space-2xs">
          <span className="font-label-bold text-label-bold text-primary tracking-widest uppercase">
            TECHNICAL BLUEPRINT
          </span>
          <h2 className="font-headline-2 text-headline-2 text-on-surface font-bold">
            Complete Product Specifications
          </h2>
          <p className="font-body-regular text-body-regular text-on-surface-variant">
            Full mechanical and material disclosure for discerning collectors and horology enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container/60">
          {/* Spec Column 1 */}
          <div className="space-y-space-md">
            <div>
              <h3 className="font-body-bold text-body-bold text-primary uppercase pb-space-xs border-b border-surface-container">
                Case &amp; Crystal
              </h3>
              <dl className="space-y-space-2xs pt-space-xs font-body-regular text-body-regular">
                {data.caseAndCrystal.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between py-1.5 ${
                      idx < data.caseAndCrystal.length - 1 ? 'border-b border-surface-container-low' : ''
                    }`}
                  >
                    <dt className="text-on-surface-variant">{item.label}</dt>
                    <dd className="font-body-bold text-on-surface text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-body-bold text-body-bold text-primary uppercase pb-space-xs border-b border-surface-container">
                Dial &amp; Hands
              </h3>
              <dl className="space-y-space-2xs pt-space-xs font-body-regular text-body-regular">
                {data.dialAndHands.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between py-1.5 ${
                      idx < data.dialAndHands.length - 1 ? 'border-b border-surface-container-low' : ''
                    }`}
                  >
                    <dt className="text-on-surface-variant">{item.label}</dt>
                    <dd className="font-body-bold text-on-surface text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Spec Column 2 */}
          <div className="space-y-space-md">
            <div>
              <h3 className="font-body-bold text-body-bold text-secondary uppercase pb-space-xs border-b border-surface-container">
                Movement Engine
              </h3>
              <dl className="space-y-space-2xs pt-space-xs font-body-regular text-body-regular">
                {data.movementEngine.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between py-1.5 ${
                      idx < data.movementEngine.length - 1 ? 'border-b border-surface-container-low' : ''
                    }`}
                  >
                    <dt className="text-on-surface-variant">{item.label}</dt>
                    <dd className="font-body-bold text-on-surface text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-body-bold text-body-bold text-secondary uppercase pb-space-xs border-b border-surface-container">
                Strap &amp; Packaging
              </h3>
              <dl className="space-y-space-2xs pt-space-xs font-body-regular text-body-regular">
                {data.strapAndPackaging.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between py-1.5 ${
                      idx < data.strapAndPackaging.length - 1 ? 'border-b border-surface-container-low' : ''
                    }`}
                  >
                    <dt className="text-on-surface-variant">{item.label}</dt>
                    <dd className="font-body-bold text-on-surface text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
