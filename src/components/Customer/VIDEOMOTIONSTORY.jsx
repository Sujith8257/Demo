import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PiFilmReel } from "react-icons/pi";
import { TbHandFinger, TbRulerMeasure, TbFlame, TbAward } from "react-icons/tb";
import { RiPlayCircleLine } from "react-icons/ri";

// ─── Animated count-up number ───────────────────────────────────────────────
function CountUp({ to, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

// ─── Process step ───────────────────────────────────────────────────────────
const steps = [
  {
    icon: TbFlame,
    label: "Raw Material Selection",
    desc: "Sourced from certified mines — brass, stainless steel, vegetable-tanned hide.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
  {
    icon: TbRulerMeasure,
    label: "Precision Calibration",
    desc: "Every component measured to ±0.003mm on optical comparators before assembly.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TbHandFinger,
    label: "Hand Finishing",
    desc: "Artisans spend up to 6 hours per piece — filing, polishing, and signing by hand.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: TbAward,
    label: "Atelier Certification",
    desc: "Each piece receives a numbered certificate and QR-linked provenance ledger.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────
const stats = [
  { value: 1050, suffix: "°C", label: "Casting Temp" },
  { value: 47, suffix: "+", label: "Craft Steps" },
  { value: 6, suffix: "hrs", label: "Per Piece" },
  { value: 100, suffix: "%", label: "Handmade" },
];

// ─── Main section ────────────────────────────────────────────────────────────
export default function VIDEOMOTIONSTORY() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-surface-container-low overflow-hidden"
      >
        {/* ── Top band: eyebrow + headline ── */}
        <motion.div
          className="max-w-[1760px] mx-auto px-margin pt-16 pb-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemUp}
            className="inline-block font-label-caps text-label-caps tracking-[0.2em] uppercase text-secondary mb-3"
          >
            The Maker's Code
          </motion.span>
          <motion.h2
            variants={itemUp}
            className="font-headline-lg text-headline-lg text-on-surface font-extrabold leading-tight max-w-xl"
          >
            Craft isn't a finish.<br />
            <span className="text-primary">It's the foundation.</span>
          </motion.h2>
          <motion.p
            variants={itemUp}
            className="mt-4 font-body-lg text-body-lg text-on-surface-variant max-w-lg"
          >
            Every object carries the memory of its making. We document, certify,
            and celebrate each step — from raw ore to your hands.
          </motion.p>
        </motion.div>

        {/* ── Stat bar ── */}
        <motion.div
          className="border-y border-outline-variant/30 bg-surface"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="max-w-[1760px] mx-auto px-margin grid grid-cols-2 md:grid-cols-4 divide-x divide-outline-variant/30">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center py-6 gap-1">
                <span className="font-extrabold text-on-surface" style={{ fontSize: "32px", letterSpacing: "-0.03em" }}>
                  {inView ? <CountUp to={s.value} suffix={s.suffix} duration={1400 + i * 200} /> : `0${s.suffix}`}
                </span>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Main body: steps + video ── */}
        <div className="max-w-[1760px] mx-auto px-margin py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Steps list */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-container cursor-default transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`${step.color} text-xl`} />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">
                      {step.label}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                  {/* Step number badge */}
                  <span className="ml-auto font-label-caps text-label-caps text-outline/50 tabular-nums flex-shrink-0 pt-0.5">
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Video card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl bg-inverse-surface">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrVlzy0OrsUswsTFZhZK17CEaSV681QCLb7RCP3BhK9ichcXmn5C9oS2U_Z_FMaBYrXqhMVyUYn-w4I9YUQ6hZv1pAG3Bczz_bl9IMwtPVKi0QJRae47gFF2cspLE9dluR1ZqeVqEtOqBxUGXzx4Y_PDC0No0XQsbrN4fGCy74OYgp95_eQ4_Ukd9lr07RKvM1q0lvAIsXgiOd8jfXEPWxtJVaZWkOGG52XNO-2zMHUzyYu9oE8AdO"
                alt="Master craftsman at work"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:from-black/50" />

              {/* Pulsing ring play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer pulse rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    style={{ margin: "-20px" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    animate={{ scale: [1, 1.9, 1.9], opacity: [0.4, 0, 0] }}
                    transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
                    style={{ margin: "-20px" }}
                  />
                  {/* Play button */}
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label="Play Documentary"
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-2xl"
                  >
                    <RiPlayCircleLine className="text-4xl ml-0.5" />
                  </motion.button>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <PiFilmReel className="text-white text-lg" />
                  <span className="font-label-md text-label-md text-white font-semibold">
                    The Craft Documentary
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-label-caps text-label-caps text-white/70 uppercase tracking-widest">
                    12 min • 4K
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-caps text-[10px] uppercase tracking-wider">
                    New
                  </span>
                </div>
              </div>
            </div>

            {/* CTA below video */}
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Filmed across 7 studios in India. No scripts. No re-takes.
              </p>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
              >
                Full Series
                <span className="text-lg">→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
