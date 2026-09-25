import { motion, useReducedMotion } from "motion/react";
const names=['Atelier Classic','Escrow Ledger','Express Velocity','Midnight Vault','Heirloom Gifting'];
export default function DesignTaskbar({active,onChange,onNavigateToCart,onNavigateHome}){
 const reduce=useReducedMotion();
 return <nav className="design-taskbar" aria-label="Switch checkout design">
   <div className="design-taskbar-inner">
     <div className="hidden lg:flex items-center gap-2 pl-3 pr-4 mr-1 border-r border-[#dae4e0]" aria-hidden="true">
      <span className="material-symbols-outlined text-[20px] text-[#123b3a]">palette</span>
      <span className="text-[11px] font-extrabold text-[#002524] whitespace-nowrap">AMIHIVE<br/><span className="text-[9px] font-semibold text-[#637e75]">DESIGNS</span></span>
     </div>
     {onNavigateHome && (
       <button type="button" className="design-tab" onClick={onNavigateHome} title="Back to Home">
         <span className="relative z-10">← Home</span>
       </button>
     )}
     {onNavigateToCart && (
       <button type="button" className="design-tab" onClick={onNavigateToCart} title="Back to Cart">
         <span className="relative z-10">← Cart</span>
       </button>
     )}
     {names.map((name,idx)=><button key={name} className="design-tab" type="button" data-active={active===idx+1} aria-current={active===idx+1?'page':undefined} onClick={()=>onChange(idx+1)}>
        {active===idx+1&&<motion.span className="design-active-pill" layoutId="active-design-tab" transition={reduce?{duration:0}:{type:'spring',stiffness:450,damping:34}}/>}
        <span className="relative z-10">Design {idx+1}<span className="design-tab-small">{name}</span></span>
      </button>)}
   </div>
 </nav>
}
