import { motion } from "framer-motion";

/**
 * Skeleton primitive.
 * @param {"shimmer"|"pulse"|"wave"} variant
 */
export default function Skeleton({
  variant = "shimmer",
  className = "",
  style = {},
  rounded = "rounded-lg",
}) {
  const base =
    "relative overflow-hidden bg-surface-container-high " + rounded + " " + className;

  if (variant === "pulse") {
    return (
      <motion.div
        className={base}
        style={style}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    );
  }

  if (variant === "wave") {
    return (
      <div className={base} style={style}>
        <motion.div
          className="absolute inset-0 bg-surface-container-highest opacity-60"
          animate={{ scaleX: [0, 1, 0], originX: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  // default: shimmer
  return (
    <div className={base} style={style}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
