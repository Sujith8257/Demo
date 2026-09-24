import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useProduct } from "../state/ProductContext.jsx";
export default function GalleryModal(){
 const ui=useProduct();
 useEffect(()=>{if(!ui.zoom)return;const key=e=>{if(e.key==="Escape")ui.toggleZoom()};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[ui.zoom,ui.toggleZoom]);
 return <AnimatePresence>{ui.zoom&&<motion.div role="presentation" className="fixed inset-0 z-[950] flex items-center justify-center bg-[#001b1b]/90 p-4 backdrop-blur-lg"
  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)ui.toggleZoom()}}>
   <motion.div role="dialog" aria-modal="true" aria-label="Expanded product gallery" className="relative flex w-full max-w-5xl flex-col items-center rounded-2xl bg-[#f7faf9] p-4 shadow-2xl sm:p-7"
    initial={{scale:.96,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.96,opacity:0}}>
    <button type="button" autoFocus onClick={ui.toggleZoom} className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 shadow" aria-label="Close expanded gallery"><span className="material-symbols-outlined">close</span></button>
    {ui.galleryImages.length?<>
     <img src={ui.galleryImages[ui.galleryIndex]||ui.galleryImages[0]} alt={`${ui.productTitle} expanded view`} className="h-[min(63vh,570px)] w-full rounded-xl object-contain"/>
     <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
      <button type="button" onClick={()=>ui.shiftGallery(-1)} className="rounded-lg border px-3 py-2" aria-label="Previous gallery image">‹</button>
      {ui.galleryImages.map((src,index)=><button type="button" key={index} aria-label={`Gallery image ${index+1}`} aria-pressed={ui.galleryIndex===index}
       onClick={()=>ui.setGallery(index)} className={`h-12 w-12 overflow-hidden rounded-md border-2 ${ui.galleryIndex===index?"border-[#755a26]":"border-transparent"}`}><img src={src} alt="" className="h-full w-full object-cover" /></button>)}
      <button type="button" onClick={()=>ui.shiftGallery(1)} className="rounded-lg border px-3 py-2" aria-label="Next gallery image">›</button>
     </div></>:<p>This design uses a CSS watch simulator rather than a separate gallery image.</p>}
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
