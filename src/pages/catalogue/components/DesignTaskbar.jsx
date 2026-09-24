import { motion } from "motion/react";

const designs = [
  { id: 1, name: "Editorial", short: "01" },
  { id: 2, name: "Calibration", short: "02" },
  { id: 3, name: "Performance", short: "03" },
  { id: 4, name: "Midnight", short: "04" },
  { id: 5, name: "Style Edit", short: "05" },
];

export default function DesignTaskbar({ active, onChange, onNavigateHome }) {
 return (
  <nav aria-label="Preview five watch catalogue designs"
    className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-[300] w-[min(96vw,840px)] rounded-2xl bg-[#102e2b]/96 border border-[#b9c9c4]/30 px-2 sm:px-3 py-2 sm:py-2.5 shadow-[0_15px_55px_rgba(0,0,0,.32)] backdrop-blur-xl text-white">
   <div className="flex gap-1 sm:gap-2 items-center">
    {onNavigateHome && (
      <button
        type="button"
        onClick={onNavigateHome}
        aria-label="Back to Home page"
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition-colors shrink-0 border-r border-white/20 mr-1 cursor-pointer"
      >
        <span className="text-sm">←</span>
        <span>Home</span>
      </button>
    )}
    <span className="hidden md:flex flex-col pl-1 pr-3 border-r border-white/20 shrink-0">
      <span className="text-[10px] uppercase tracking-[.16em] text-[#c9b17a] font-bold">Catalogue</span>
      <span className="text-xs font-semibold text-white/80">5 Variants</span>
    </span>
    {designs.map(d => (
     <button type="button" key={d.id} aria-pressed={active === d.id}
       aria-label={`Show design ${d.id}: ${d.name}`} onClick={() => onChange(d.id)}
       className="relative grow min-w-0 overflow-hidden h-11 sm:h-12 rounded-xl px-1 text-center focus-visible:outline-2 focus-visible:outline-[#dfc892]">
       {active === d.id && <motion.span layoutId="design-active" className="absolute inset-0 rounded-xl bg-[#e7c991]" transition={{ type:"spring", stiffness:420, damping:38 }} />}
       <span className={`relative z-10 flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-bold ${active===d.id?"text-[#112e2b]":"text-white/75 hover:text-white"}`}>
        <span className="font-mono text-[11px] opacity-75">{d.short}</span>
        <span className="hidden sm:inline truncate">{d.name}</span>
       </span>
     </button>
    ))}
   </div>
  </nav>
 );
}
