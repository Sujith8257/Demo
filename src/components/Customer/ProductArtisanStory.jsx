import React from 'react';

export default function ProductArtisanStory() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="artisan-story">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">
        {/* Split Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 space-y-space-sm pr-0 lg:pr-space-lg">
            <span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">
              GENUINE WORKBENCH INTEGRITY
            </span>
            <h2 className="font-headline-1 text-headline-1 text-on-surface">
              Born from the collision of classic watchmaking and natural leathercraft.
            </h2>
            <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
              The Aster series was conceived to dismantle the false dichotomy between disposable fast-fashion watches and inaccessible luxury status pieces. Designed in our studio and assembled alongside heritage guild technicians, each Aster No.04 represents over 14 hours of direct bench work.
            </p>
            <div className="pt-space-xs flex items-center gap-space-lg text-on-surface font-body-bold flex-wrap">
              <div>
                <div className="font-headline-2 text-headline-2 text-primary font-bold">14h</div>
                <div className="font-caption text-caption text-on-surface-variant">Manual Bench Assembly</div>
              </div>
              <div>
                <div className="font-headline-2 text-headline-2 text-primary font-bold">316L</div>
                <div className="font-caption text-caption text-on-surface-variant">Marine Stainless Steel</div>
              </div>
              <div>
                <div className="font-headline-2 text-headline-2 text-primary font-bold">28.8k</div>
                <div className="font-caption text-caption text-on-surface-variant">High-Frequency VPH</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-surface-container">
              <img
                className="w-full h-full object-cover"
                data-alt="Intimate documentary photograph of a master watchmaker using precision brass tweezers and an eye loupe to adjust the delicate escapement balance wheel of an automatic watch in an atmospheric warm workshop."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBylJM1quaQQWYy6pmSrgoBCavQPSBz1GTjNSzW9x5br84jipoX5kWPiZ0Mdq9TDjA2nrQq4uiZCTmW13Gai40k8USo_vx-MelFCzsq39PUNJcvh9bEeQ667_zFirKrbTRgyx4XhAQKnvwAcKPFyKeiv6zFyKCCOhKL4JkG2ik3JdtRcpSD0LpAqSgGsLt5vHRR7YMLv-xQ9EeVLkKkV8BxqGEhw8MYcxCpsuonNPLees-FFMygHDltdg"
                alt="Master Watchmaker adjusting balance wheel"
                loading="lazy"
              />
              <div className="absolute bottom-space-md left-space-md right-space-md p-space-sm rounded-xl bg-inverse-surface/80 backdrop-blur text-inverse-on-surface">
                <span className="font-label-bold text-label-bold block">Bengaluru Horology Studio</span>
                <span className="font-caption text-caption text-outline-variant">
                  Regulation &amp; 72-Hour Chronometric Rate Verification
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Split Row 2: Dial Finishing & Leather Origin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <div className="rounded-2xl bg-surface-container-low p-space-lg flex flex-col justify-between space-y-space-md border border-surface-container/60">
            <div className="space-y-space-xs">
              <span className="font-label-bold text-label-bold text-primary uppercase">
                DIAL ARCHITECTURE
              </span>
              <h3 className="font-headline-2 text-headline-2 text-on-surface">
                Radial Sunburst Finishing
              </h3>
              <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
                The deep midnight blue dial is treated with a microscopic chemical brush pattern that shifts from brooding ink tones in low interior lighting to vivid celestial blue highlights under direct daylight.
              </p>
            </div>
            <div className="aspect-16/9 rounded-xl overflow-hidden bg-surface-container shadow-sm">
              <img
                className="w-full h-full object-cover"
                data-alt="Extreme macro close-up of a blue sunburst watch dial capturing the metallic radial texture, faceted silver hour markers, and fine typography printing under dramatic directional lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBty6bWZIYQ4BPRv9178dN5f_yDTHUSRZd3T2Weu3YiN29grJcPWaIUViZxM_zcVk4IBrNnSYQ61TAk5ybJkhYdyah78fUzbZg4FRyJhB3JHxqb0vbM5EVKkgasYDY3t57Ll5s_OY9CnEOH34wu0kVHGfKiIDA5G_wq_Z2a4k03p1JLqaxpZBxMGmSs1ymr-zt-GWS-mWeOfTjK_i8EWyktfmf9soQmKSnITLobhA9-iG0F6JZYyfskAw"
                alt="Radial sunburst finishing detail"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-surface-container-low p-space-lg flex flex-col justify-between space-y-space-md border border-surface-container/60">
            <div className="space-y-space-xs">
              <span className="font-label-bold text-label-bold text-secondary uppercase">
                ETHICAL TUSCAN TANNERY
              </span>
              <h3 className="font-headline-2 text-headline-2 text-on-surface">
                Ponte a Egola Leather
              </h3>
              <p className="font-body-regular text-body-regular text-on-surface-variant leading-relaxed">
                Sourced directly from a member tannery of the Italian Vegetable-Tanned Leather Consortium. Completely chrome-free, skin-breathable, and fitted with quick-release push pins for effortless strap switches.
              </p>
            </div>
            <div className="aspect-16/9 rounded-xl overflow-hidden bg-surface-container shadow-sm">
              <img
                className="w-full h-full object-cover"
                data-alt="Artisanal leather workshop scene showing full hides of cognac vegetable-tanned leather, heavy brass saddlery needles, waxed linen threads and burnished watch straps laid out on weathered oak table."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXsTrVCYg8jCp9HLkFea45vhyMU1sqaw_WajgMM2Q8-QD8fsNbEd5gEYTl6gyLOHYuwdTuh3UTQENcaI021w3--cJIuauwb_DkSmHsSNShN3jLn0NdSnFF6Wj2m-ZS-vxWivxUtbqa822QB8-kKczZ86zFxUW_yEFQURkoG0SztWOKg66JxRc6D-EOHgR2vo-a5HUiJhbvDvIa11GcK8NCGiZ5pAP5aiJkCP6WigndUxqwxR1g0x_vQ"
                alt="Ponte a Egola leather workshop"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
