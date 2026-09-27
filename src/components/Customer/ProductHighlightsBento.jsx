import React from 'react';

const HIGHLIGHTS = [
  {
    icon: 'precision_manufacturing',
    title: 'Miyota 9015 Automatic Caliber',
    desc: '28,800 vibrations per hour (4Hz) providing an exceptionally smooth 8-beat second-hand sweep with 42-hour continuous power reserve.',
    colorScheme: 'primary'
  },
  {
    icon: 'diamond',
    title: 'Double-Domed Sapphire Crystal',
    desc: 'Scratch-proof Mohs 9 hardness crystal treated with multi-layer anti-reflective undercoating for ultra-clear dial legibility in bright sunlight.',
    colorScheme: 'primary'
  },
  {
    icon: 'water_drop',
    title: '5 ATM Marine Resistance',
    desc: 'Dual gasket screw-in exhibition caseback rated to 50 meters of water resistance, built to survive unexpected downpours and desk dives alike.',
    colorScheme: 'primary'
  },
  {
    icon: 'texture',
    title: 'Hand-Cut Tuscan Cowhide',
    desc: 'Tanned exclusively with chestnut bark and mimosa extracts, developing a rich individual caramel patina unique to your wear history.',
    colorScheme: 'secondary'
  },
  {
    icon: 'shield_with_heart',
    title: '316L Surgical Steel Construction',
    desc: 'Hypoallergenic low-carbon steel block CNC-milled with hand-brushed satin flanks and mirror-polished chamfered bezels.',
    colorScheme: 'secondary'
  },
  {
    icon: 'schedule',
    title: 'Regulated in 3 Positions',
    desc: 'Each individual movement is tested and adjusted by our bench horologists in Bengaluru to achieve dependable +/- 7 seconds daily variance.',
    colorScheme: 'secondary'
  }
];

export default function ProductHighlightsBento({ items = HIGHLIGHTS }) {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="overview">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-3xl mb-space-lg space-y-space-2xs">
          <span className="font-label-bold text-label-bold text-primary tracking-widest uppercase">
            HOROLOGY SPEC SHEET
          </span>
          <h2 className="font-headline-2 text-headline-2 text-on-surface font-bold">
            Mastery in Every Micron
          </h2>
          <p className="font-body-regular text-body-regular text-on-surface-variant">
            The Aster No.04 pairs dependable high-beat mechanical engineering with artisanal leathercraft, created for connoisseurs who value daily durability over vanity branding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {items.map((item, idx) => {
            const isPrimary = item.colorScheme === 'primary';
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs hover:shadow-md transition-shadow border border-surface-container/50"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isPrimary
                      ? 'bg-primary-fixed text-on-primary-fixed'
                      : 'bg-secondary-fixed text-on-secondary-fixed'
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-3 text-headline-3 text-on-surface">{item.title}</h3>
                <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
