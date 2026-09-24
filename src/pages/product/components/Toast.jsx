import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useProduct } from "../state/ProductContext.jsx";
export default function Toast(){const ui=useProduct();
 useEffect(()=>{if(!ui.toast)return;const t=setTimeout(ui.clearToast,3600);return()=>clearTimeout(t)},[ui.toast,ui.clearToast]);
 return <AnimatePresence>{ui.toast&&<motion.div role="status" aria-live="polite" key={ui.toast.id} className="fixed bottom-24 right-3 z-[940] flex max-w-[min(94vw,430px)] items-center gap-3 rounded-xl border border-white/20 bg-[#123b3a] p-4 text-sm text-white shadow-2xl"
  initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}>
  <span className="material-symbols-outlined text-[#e7c991]">info</span><span>{ui.toast.message}</span>
  <button type="button" aria-label="Dismiss notification" onClick={ui.clearToast} className="material-symbols-outlined ml-2">close</button></motion.div>}</AnimatePresence>;
}
