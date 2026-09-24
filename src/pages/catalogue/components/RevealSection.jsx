import { motion, useReducedMotion } from "motion/react";

// Original section is still a real semantic section; only entrance animation is added.
export default function RevealSection({ children, ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.section>
  );
}
