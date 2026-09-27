import { motion, useReducedMotion } from "framer-motion";
import { FiWatch, FiGift, FiAward, FiCompass, FiShield } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const valueItems = [
  { text: "Automatic mechanical watches", icon: FiWatch },
  { text: "Handcrafted vegetable leather", icon: FiShield },
  { text: "Small-batch ceramics", icon: HiSparkles },
  { text: "Premium curation gifting", icon: FiGift },
  { text: "Numbered limited editions", icon: FiAward },
  { text: "Direct studio provenance", icon: FiCompass },
];

export default function ValuePropositionMarquee({ className = "" }) {
  const reduceMotion = useReducedMotion();
  // Triplicate so the continuous infinite scroll is completely seamless
  const track = [...valueItems, ...valueItems, ...valueItems];

  return (
    <section
      className={`w-full py-3.5 bg-primary text-on-primary overflow-hidden shadow-inner relative select-none ${className}`}
      aria-label="Atelier Guarantees and Value Propositions"
    >
      {/* Edge gradient fade masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex items-center whitespace-nowrap font-label-caps text-label-caps tracking-[0.14em] uppercase"
          style={{ width: "max-content" }}
          animate={reduceMotion ? {} : { x: ["0%", "-33.333%"] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={reduceMotion ? {} : { animationPlayState: "paused" }}
        >
          {track.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 cursor-pointer opacity-95 hover:opacity-100 transition-opacity"
              >
                <Icon className="text-[14px] text-inverse-primary flex-shrink-0" />
                <span className="font-semibold">{item.text}</span>
                <span className="text-inverse-primary/60 font-bold ml-6 select-none">
                  •
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
