import { AnimatePresence, motion } from "motion/react";
import { useCatalogue } from "../state/CatalogueContext.jsx";
export default function Toast(){const {toast,clearToast}=useCatalogue();return <AnimatePresence>
{toast && <motion.div role="status" aria-live="polite" key={toast.id} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}}
 className="fixed z-[450] bottom-26 right-4 sm:right-8 max-w-[min(90vw,420px)] flex items-center gap-3 bg-[#123b3a] text-white rounded-xl py-3 px-4 shadow-2xl border border-[#b6d0c7]/30">
 <span className="material-symbols-outlined text-[#e7c991]">check_circle</span><span className="text-sm">{toast.message}</span>
 <button className="ml-1 material-symbols-outlined text-lg" onClick={clearToast} type="button" aria-label="Dismiss notification">close</button>
</motion.div>}
</AnimatePresence>}
