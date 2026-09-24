import { useProduct } from "../../state/ProductContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01AsterNo04Automatic from "./Section01AsterNo04Automatic.jsx";
import Section02OneWatchDifferentMoments from "./Section02OneWatchDifferentMoments.jsx";
import Section03The98MmSilhouette from "./Section03The98MmSilhouette.jsx";
import Section04CompleteTheCuratedLook from "./Section04CompleteTheCuratedLook.jsx";
import Section05FromTheAsterSeries from "./Section05FromTheAsterSeries.jsx";
import Section06CollectorNotesAuthenticity from "./Section06CollectorNotesAuthenticity.jsx";
export default function Design4() {
 const ui=useProduct();
 return (<main className="w-full pt-24 sm:pt-28 bg-surface min-h-screen" id="main-content"><div className="flex flex-col w-full"><div className="w-full bg-surface-container-low"><div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-sm flex items-center justify-between text-body-sm text-on-surface-variant"><nav className="flex items-center gap-space-xs font-label-sm uppercase tracking-wider"><a className="hover:text-primary transition-colors" href="#" onClick={e => {e.preventDefault(); ui.notify("Home — link preview only");}}>{"Home"}</a><span className="text-outline-variant">{"/"}</span><a className="hover:text-primary transition-colors" href="#" onClick={e => {e.preventDefault(); ui.notify("Everyday & Classic — link preview only");}}>{"Everyday & Classic"}</a><span className="text-outline-variant">{"/"}</span><span className="text-on-surface font-semibold">{"Aster No.04 Automatic"}</span></nav><div className="hidden sm:flex items-center gap-space-sm font-label-sm text-secondary tracking-widest uppercase"><span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span><span>{"Atelier Stock Ref. AST-N04-BLU"}</span></div></div></div><Section01AsterNo04Automatic /><Section02OneWatchDifferentMoments /><Section03The98MmSilhouette /><Section04CompleteTheCuratedLook /><Section05FromTheAsterSeries /><Section06CollectorNotesAuthenticity /></div></main>);
}
