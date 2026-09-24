import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCatalogue } from "../state/CatalogueContext.jsx";

export default function QuickViewModal({ onNavigateToProductDetail }){
 const ui=useCatalogue(); const item=ui.quickView;
 const goToDetail = () => {
   ui.closeQuickView();
   if (onNavigateToProductDetail) onNavigateToProductDetail(item);
   else if (ui.onNavigateToProductDetail) ui.onNavigateToProductDetail(item);
 };
 useEffect(()=>{ if(!item)return;const onKey=e=>{if(e.key==="Escape")ui.closeQuickView()};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[item,ui.closeQuickView]);
 return <AnimatePresence>
  {item && <motion.div className="fixed inset-0 z-[500] bg-[#071916]/75 backdrop-blur-sm flex items-center justify-center p-4" role="presentation"
     initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)ui.closeQuickView()}}>
    <motion.div role="dialog" aria-modal="true" aria-label={item.title||"Product quick view"}
      initial={{scale:.94,y:16,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:.96,y:10,opacity:0}} transition={{duration:.25}}
      className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#f7faf9] text-[#181c1c] shadow-2xl p-6 sm:p-8">
      <button type="button" autoFocus aria-label="Close quick view" onClick={ui.closeQuickView} className="absolute right-4 top-4 rounded-full p-2 hover:bg-[#e6e9e8] material-symbols-outlined">close</button>
      <div className="grid sm:grid-cols-[220px_1fr] gap-6 items-center pt-5 sm:pt-0">
       <div className="aspect-square bg-[#ebeeee] rounded-xl overflow-hidden flex items-center justify-center cursor-pointer group" onClick={goToDetail} title="Click to view product overview">
        {item.image ? <img src={item.image} alt={item.title||"Watch"} className="h-full w-full object-contain group-hover:scale-105 transition-transform" /> : <span className="material-symbols-outlined text-7xl text-[#717978]">watch</span>}
       </div>
       <div className="flex flex-col gap-3">
        <span className="text-xs tracking-[.2em] font-bold uppercase text-[#755a26]">{item.series||"AMIHIVE Collection"}</span>
        <h2 className="text-3xl font-bold tracking-tight cursor-pointer hover:text-[#123b3a] transition-colors" onClick={goToDetail} title="Click to view product overview">{item.title}</h2>
        <span className="text-2xl font-bold text-[#123b3a]">{item.price_label||item.price||"Explore"}</span>
        <p className="text-sm leading-6 text-[#414848]">{item.specs||item.subtitle||"Explore the materials, engineering and distinctive finish of this timepiece."}</p>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
         <button type="button" onClick={goToDetail} className="flex-1 bg-[#123b3a] text-white font-semibold py-3 px-5 rounded-xl hover:bg-[#002524] transition-colors flex items-center justify-center gap-2">
           <span>View Product Overview</span>
           <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
         </button>
         <button type="button" onClick={ui.addModalToCart} className="bg-[#ebeeee] text-[#123b3a] font-semibold py-3 px-5 rounded-xl hover:bg-[#dde2e1] transition-colors">Add to cart</button>
        </div>
       </div>
      </div>
    </motion.div>
  </motion.div>}
 </AnimatePresence>
}
