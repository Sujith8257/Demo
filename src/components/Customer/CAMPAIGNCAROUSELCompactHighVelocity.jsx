import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Stagger slide-up: each card slides in from bottom with 100ms delay
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const campaigns = [
  {
    tag: "Horology Focus",
    tagBg: "bg-primary/10",
    tagColor: "text-primary",
    title: "New Season Timepieces",
    desc: "Dual-timezone mechanicals and sapphire exhibition casebacks.",
    cta: "Explore 18 pieces",
    ctaColor: "text-primary",
  },
  {
    tag: "Live Showcase",
    tagBg: "bg-secondary-fixed",
    tagColor: "text-secondary",
    title: "National Artisan Week",
    desc: "Direct interaction with 24 master craftspeople in real time.",
    cta: "Enter virtual rooms",
    ctaColor: "text-secondary",
  },
  {
    tag: "Celebrations",
    tagBg: "bg-tertiary-fixed",
    tagColor: "text-tertiary",
    title: "The Curated Gift Edit",
    desc: "Monogrammed cases, hand-cast bronze, and bespoke folios.",
    cta: "Curate for someone",
    ctaColor: "text-tertiary",
  },
  {
    tag: "Atelier Club",
    tagBg: "bg-primary-fixed",
    tagColor: "text-primary",
    title: "Private Member Offers",
    desc: "Privileged early access to limited prototype batches.",
    cta: "Access reserve",
    ctaColor: "text-primary",
  },
];

export default function CAMPAIGNCAROUSELCompactHighVelocity() {
  return (
    <>
      <section className={"w-full bg-surface-container-low py-12"}>
        <div className={"mx-auto max-w-[1760px] px-margin"}>
          <div className={"mb-8 flex items-center justify-between"}>
            <div>
              <span className={"font-label-caps text-label-caps uppercase text-secondary-container"}>
                Curator's Highlights
              </span>
              <h2 className={"font-headline-md text-headline-md text-on-surface"}>
                Expressive Campaigns
              </h2>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"font-label-caps text-label-caps text-outline"}>
                AUTUMN / WINTER 2025
              </span>
            </div>
          </div>

          {/* Animated stagger grid */}
          <motion.div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {campaigns.map((c, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                className={"group relative overflow-hidden rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-shadow"}
              >
                <div className={`mb-4 inline-flex rounded-full ${c.tagBg} px-3 py-1 font-label-caps text-label-caps uppercase ${c.tagColor} font-bold`}>
                  {c.tag}
                </div>
                <h3 className={"font-headline-sm text-headline-sm text-on-surface leading-snug"}>
                  {c.title}
                </h3>
                <p className={"mt-2 font-body-sm text-body-sm text-on-surface-variant"}>
                  {c.desc}
                </p>
                <div className={"mt-6 flex items-center justify-between"}>
                  <span className={`font-label-md text-label-md ${c.ctaColor} group-hover:underline`}>
                    {c.cta}
                  </span>
                  <FiArrowRight className={`${c.ctaColor} text-lg`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
