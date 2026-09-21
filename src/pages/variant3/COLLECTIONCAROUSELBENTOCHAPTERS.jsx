import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

// Zoom-in fade: cards scale from 0.92 → 1 while fading in
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const collections = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtp22s0UecNqyskL4oFWcvkMSqbSI3UJW2rQnCexMaz6mtP9RlcBbFt0vuJGTXz_1BmF32O-j6Iw5xho_ebtKIyQiMs9anEOx6zKWc_-N8EPfr5oJQGQY4jJ3dgu0cE7s5lQJDbG_cAYyjoav2b9Y5c6GOPi9xtn6VDnL06WGGSXZAOsv579SFFwbq4R4urXI6oYPIECxfT4bBJ4wzbPutVHIV3Yun417HIOJuAwW71h11qk8Ko3c2",
    count: "24 Models",
    countColor: "text-inverse-primary",
    title: "Automatic",
    desc: "Calibrated self-winding mechanisms.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDQG3Rjk4Ev3nmP9zK-fIu1-l0jg36jEGC1YLhlC6MjX4YJURBD2dMQ-RErWJbs1KUniwInPCzMSkR97aKbz6LF9vS2DT-O8qrPChuAt3zTw6nZIOjDDSlsTOqMjnDL1T7JBus4H30BPDICdhlPPN-bBNihLkht1D80jzHrxiGmXunoFBa_ryXzCYXN9I1YPubsnTsHhhVMKqe_a4ohujm3cX2IoLte1ws0Jw5nXQhllqDKhFTWfTe",
    count: "18 Creations",
    countColor: "text-secondary-container",
    title: "Heritage Leather",
    desc: "Full-grain hides saddle-stitched by hand.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhdlqh4OlieSwBZJ9t9XxAxQm7r5AAWpUH8z6LUtV5x2oZNIgTyV-RLu4idQVCmYjvvckeX8_vY0oeJAUIc5RgBnNXfXY02a7bIFO3FLUKR5Qq8H9OosBsZEgjkUPOzERgd5H33wTYNbbDyrGeGDuTIsv363h92Bj-vMCBWZBbKUpX8JJ7oUmoj1wfCiGZARpFqeBEkd1VLPMtknZfmglWzi2UVkmCM0Fj5s-LZb-RCO9ZrTE22rpo",
    count: "32 Sculptures",
    countColor: "text-tertiary-fixed-dim",
    title: "Handcrafts & Clay",
    desc: "Thrown on traditional kick-wheels.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkBsDUKwkfhXBcqnrJgcstuDTSSEnyVFGgBAyAyODpRPnbDk7FTaD_koILI5wp5meG5DeU0DjH_gBJmIdtSc64VMAfAOzOx8rDxsAXnWy3SQDzt-doapBPgndFrxaGDtp8MSGks73DHqHpqeUNXFd14z9PoWIkD5FXT0n8Lfk_iEaCQB4exbfiYjQiQpwjoWFmESX2I26Af6rN1UNGBdTpdDPaub41wseMwo9mNpCEIJexmmaPE_kW",
    count: "Concierge Service",
    countColor: "text-inverse-primary",
    title: "Heirloom Gifting",
    desc: "Numbered certificates & custom monogram.",
  },
];

export default function COLLECTIONCAROUSELBENTOCHAPTERS() {
  return (
    <>
      <section className={"w-full bg-surface-container-low py-space-xl my-space-lg"}>
        <div className={"max-w-[1760px] mx-auto px-margin"}>
          <div className={"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-lg"}>
            <div>
              <span className={"font-label-caps text-label-caps text-primary tracking-widest uppercase font-bold"}>
                Curated Portfolios
              </span>
              <h2 className={"font-headline-lg text-headline-lg text-on-surface tracking-tight"}>
                Explore by Discipline
              </h2>
            </div>
            <div className={"flex items-center gap-2"}>
              <button aria-label={"Scroll collections left"} className={"w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm"}>
                <HiChevronLeft className="text-xl" />
              </button>
              <button aria-label={"Scroll collections right"} className={"w-10 h-10 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm"}>
                <HiChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Zoom-in fade grid */}
          <motion.div
            className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {collections.map((col, i) => (
              <motion.a
                key={i}
                href={"#"}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={"group relative h-72 rounded-2xl overflow-hidden bg-surface-dim shadow-sm flex flex-col justify-end p-6"}
                style={{ display: "flex" }}
              >
                <div
                  className={"absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"}
                  style={{ backgroundImage: `url('${col.img}')` }}
                />
                <div className={"absolute inset-0 bg-gradient-to-t from-[#10131B] via-[#10131B]/40 to-transparent"} />
                <div className={"relative z-10 text-white"}>
                  <span className={`font-label-caps text-label-caps ${col.countColor} tracking-widest uppercase`}>
                    {col.count}
                  </span>
                  <h3 className={"font-headline-md text-headline-md leading-tight text-white mb-1"}>
                    {col.title}
                  </h3>
                  <p className={"font-body-sm text-body-sm text-slate-300"}>
                    {col.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
