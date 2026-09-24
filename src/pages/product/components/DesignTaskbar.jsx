import { motion, useReducedMotion } from "motion/react";
const items=[
 {id:1,short:"01",label:"Classic Atelier"},
 {id:2,short:"02",label:"Technical Console"},
 {id:3,short:"03",label:"Atlas S4 GPS"},
 {id:4,short:"04",label:"Editorial Lifestyle"},
 {id:5,short:"05",label:"Midnight Nocturne"}
];
export default function DesignTaskbar({active,onChange}){
 const reduced=useReducedMotion();
 return <nav aria-label="Choose a product page design" className="fixed inset-x-0 bottom-0 z-[900] flex justify-center p-2 sm:bottom-4 pointer-events-none">
  <div className="pointer-events-auto flex w-full max-w-4xl items-center gap-1 rounded-2xl border border-white/20 bg-[#102a28]/96 px-2 py-2 text-white shadow-[0_18px_50px_rgba(0,0,0,.35)] backdrop-blur-xl sm:w-auto sm:gap-1.5 sm:px-3">
   <div className="hidden border-r border-white/15 px-3 pr-5 lg:block"><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#f2dba2]">AMIHIVE</div><div className="text-xs font-semibold">Design preview</div></div>
   {items.map(item=><button key={item.id} type="button" title={item.label} aria-pressed={active===item.id} aria-label={`Switch to design ${item.id}: ${item.label}`}
     onClick={()=>onChange(item.id)} className={`relative h-12 min-w-0 flex-1 overflow-hidden rounded-xl px-2 sm:min-w-[112px] sm:flex-none sm:px-3 ${active===item.id?"text-[#102a28]":"text-white/75 hover:text-white"}`}>
      {active===item.id&&<motion.span layoutId="active-design" className="absolute inset-0 rounded-xl bg-[#edd29b]" transition={reduced?{duration:0}:{type:"spring",stiffness:460,damping:35}}/>}
      <span className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-2"><span className="font-mono text-[12px] font-bold opacity-85">{item.short}</span><span className="hidden text-[11px] font-bold sm:block">{item.label}</span></span>
   </button>)}
  </div>
 </nav>;
}
