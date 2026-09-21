export default function FEATUREDMAKERSSTAGGEREDHORIZONTALVISUAL() {
  return (
<>
    <section className={"max-w-[1760px] mx-auto px-margin py-24 w-full"}>
      <div className={"mb-space-lg"}>
        <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold"}>
          The Human Hands
        </span>
        <h2 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
          Featured Master Artisans
        </h2>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-space-lg"}>
        {/* Maker 1: Bangalore Horologist */}
        <div className={"bg-surface-container-lowest rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all"}>
          <div className={"w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-inner bg-surface-container-high"}>
            <img className={"w-full h-full object-cover"} data-alt={"Portrait of an Indian watchmaker wearing a horologist loupe eyeglasses looking up from his workbench under warm task lighting with watch components around him."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDzd2YaWCfCgS8yggtJn_MNvQl3mBorAdVY3C6XdkcPCn2DhJxp1YTgFNlQ4Ef7a1Z-O0v9dil4YDKYm4EefkzyEvttVIf4thlS_hnDU_klb8X3Q56TryYMAU-_l73TM4iCMw1ACw-HGLwcjOh7fUoKkFF537uHRBYPVIk-uxhHBgGqSoIc_VEfT1DzLZ8hVdUGwdduwWeSuCbtXoUQa0LKdieq4IHMsSm33bTSbGD8L9xBeSJFboje"} />
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex items-center gap-2 mb-1"}>
              <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                S. Venkatraman
              </span>
              <span className={"material-symbols-outlined text-[18px] text-primary"}>
                verified
              </span>
            </div>
            <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2"}>
              Master Horologist • Whitefield Atelier
            </span>
            <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4"}>
              "We construct timepieces not to tell you what minute it is, but to remind you of the mechanical beauty ticking silently through life."
            </p>
            <div className={"flex items-center gap-4 text-body-sm text-body-sm text-on-surface"}>
              <span className={"font-semibold"}>
                24 Releases
              </span>
              <span className={"text-outline-variant"}>
                •
              </span>
              <span className={"font-semibold"}>
                18 Yrs Bench Experience
              </span>
            </div>
          </div>
        </div>
        {/* Maker 2: Jaipur Brass Artisan */}
        <div className={"bg-surface-container-lowest rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-all"}>
          <div className={"w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-inner bg-surface-container-high"}>
            <img className={"w-full h-full object-cover"} data-alt={"Portrait of a female brass smith artisan in Jaipur workshop wearing traditional indigo handloom apron, filing a cast brass ornament with focus and smiling gently."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBLDryJFF-GozqJDRO1IKM-UMUN7TAp7lQdyB7c5LhVNLNLjsXazFtpyTaAEwgLaerjw6MNMs9EOpPOWHmxN-0vgeJauLPAfDfKvlQS14vnWH3MH_iDxQw-KSyP91j3XFCpNI-UeA7WIXIWPTvNLAgMRMGT4WyV44COWSl9FXMkx60arxTaLufttS6GrBZZxzcWF4_R31Uh70h6nEgQoW-6ZZ3rXWQ-UUk6NhIeETt67hU9xEvEmRVO"} />
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex items-center gap-2 mb-1"}>
              <span className={"font-headline-sm text-headline-sm text-on-surface font-bold"}>
                Ananya Sharma
              </span>
              <span className={"material-symbols-outlined text-[18px] text-primary"}>
                verified
              </span>
            </div>
            <span className={"font-label-caps text-label-caps text-secondary uppercase tracking-wider mb-2"}>
              Sand-Cast Metalwork • Amber Works
            </span>
            <p className={"font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4"}>
              "Recycled virgin brass, organic red sand molds, and patience. There is a musical resonance to solid brass that machines simply cannot fake."
            </p>
            <div className={"flex items-center gap-4 text-body-sm text-body-sm text-on-surface"}>
              <span className={"font-semibold"}>
                39 Sculptures
              </span>
              <span className={"text-outline-variant"}>
                •
              </span>
              <span className={"font-semibold"}>
                National Craft Awardee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
