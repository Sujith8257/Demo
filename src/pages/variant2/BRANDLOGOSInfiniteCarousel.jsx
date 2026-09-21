import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// ─── Brand data — logo via Clearbit Logo API ───────────────────────────────
const brands = [
  {
    name: "Rolex",
    domain: "rolex.com",
    hover: "lift",
  },
  {
    name: "Tudor",
    domain: "tudorwatch.com",
    hover: "rotate",
  },
  {
    name: "Omega",
    domain: "omegawatches.com",
    hover: "glow",
  },
  {
    name: "Seiko",
    domain: "seiko.com",
    hover: "skew",
  },
  {
    name: "Titan",
    domain: "titanwatches.co.in",
    hover: "bounce",
  },
  {
    name: "Casio",
    domain: "casio.com",
    hover: "reveal",
  },
  {
    name: "Citizen",
    domain: "citizenwatch.com",
    hover: "flip",
  },
  {
    name: "Fossil",
    domain: "fossil.com",
    hover: "shake",
  },
  {
    name: "Tissot",
    domain: "tissotwatches.com",
    hover: "lift",
  },
  {
    name: "Hamilton",
    domain: "hamiltonwatch.com",
    hover: "rotate",
  },
];

// ─── Per-logo hover animation configs ──────────────────────────────────────
function getHoverProps(type) {
  switch (type) {
    case "lift":
      return {
        whileHover: { y: -10, scale: 1.15 },
        transition: { type: "spring", stiffness: 400, damping: 18 },
      };
    case "rotate":
      return {
        whileHover: { rotate: [0, -8, 8, -4, 4, 0], scale: 1.1 },
        transition: { duration: 0.55 },
      };
    case "glow":
      return {
        whileHover: {
          scale: 1.12,
          filter: "drop-shadow(0 0 14px rgba(0,64,148,0.55)) grayscale(0%) opacity(1)",
        },
        transition: { duration: 0.25 },
      };
    case "skew":
      return {
        whileHover: { skewX: -7, scale: 1.08 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
      };
    case "bounce":
      return {
        whileHover: { scale: [1, 1.22, 0.93, 1.12, 1] },
        transition: { duration: 0.52, ease: "easeOut" },
      };
    case "reveal":
      return {
        whileHover: { scale: 1.1, y: -4 },
        transition: { duration: 0.3, ease: "easeOut" },
      };
    case "flip":
      return {
        whileHover: { rotateY: 18, scale: 1.08 },
        transition: { duration: 0.35 },
      };
    case "shake":
      return {
        whileHover: { x: [0, -5, 5, -4, 4, 0], scale: 1.08 },
        transition: { duration: 0.45 },
      };
    default:
      return {
        whileHover: { scale: 1.1 },
        transition: { duration: 0.25 },
      };
  }
}

// ─── Single logo tile ───────────────────────────────────────────────────────
function LogoTile({ brand }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { whileHover, transition } = getHoverProps(brand.hover);

  const logoUrl = `https://logo.clearbit.com/${brand.domain}`;

  return (
    <motion.div
      whileHover={whileHover}
      transition={transition}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex-shrink-0 flex items-center justify-center px-10 cursor-pointer select-none"
      style={{ transformStyle: "preserve-3d" }}
      title={brand.name}
    >
      {!imgError ? (
        <motion.img
          src={logoUrl}
          alt={brand.name}
          onError={() => setImgError(true)}
          animate={{
            filter: hovered
              ? "grayscale(0%) opacity(1)"
              : "grayscale(100%) opacity(0.45)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            height: "36px",
            width: "auto",
            maxWidth: "120px",
            objectFit: "contain",
          }}
        />
      ) : (
        /* Fallback: styled brand name if image fails */
        <motion.span
          animate={{
            opacity: hovered ? 1 : 0.4,
            color: hovered ? "#004094" : "#737785",
          }}
          transition={{ duration: 0.25 }}
          className="font-extrabold tracking-[0.14em] uppercase"
          style={{ fontSize: "15px", fontFamily: "Manrope, sans-serif" }}
        >
          {brand.name}
        </motion.span>
      )}
    </motion.div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
export default function BRANDLOGOSInfiniteCarousel() {
  const reduceMotion = useReducedMotion();

  // Duplicate the array so the seam is invisible
  const track = [...brands, ...brands];

  return (
    <section className="w-full bg-surface py-10 overflow-hidden border-y border-outline-variant/30">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8 px-margin">
        <div className="flex-1 h-px bg-outline-variant/40 max-w-[180px]" />
        <span className="font-label-caps text-label-caps text-outline tracking-[0.2em] uppercase whitespace-nowrap">
          Our Providers
        </span>
        <div className="flex-1 h-px bg-outline-variant/40 max-w-[180px]" />
      </div>

      {/* Scrolling track */}
      <div
        className="relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex items-center py-2"
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{ width: "max-content" }}
        >
          {track.map((brand, i) => (
            <LogoTile key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </motion.div>
      </div>

      {/* Sub-caption */}
      <p className="text-center font-body-sm text-body-sm text-outline mt-6">
        Exclusively curated from verified ateliers & heritage manufacturers.
      </p>
    </section>
  );
}
