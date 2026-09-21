import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Wraps a page. Shows `skeleton` for `duration`ms then cross-fades to `children`.
 */
export default function PageLoader({ children, skeleton, duration = 1500 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ position: "absolute", inset: 0, zIndex: 40, background: "var(--color-surface, #faf8ff)" }}
          >
            {skeleton}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
