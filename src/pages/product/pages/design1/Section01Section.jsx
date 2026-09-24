import { useProduct } from "../../state/ProductContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";

export default function Section01Section() {
 const ui=useProduct();
 return (<RevealSection className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-md pb-space-sm"><div className="flex flex-wrap items-center justify-between gap-space-sm"><nav className="flex items-center gap-space-xs font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant"><a className="hover:text-primary transition-colors" data-path="home" href="#" onClick={e => {e.preventDefault(); ui.notify("home — link preview only");}}>{"Home"}</a><span>{"/"}</span><a className="hover:text-primary transition-colors" data-path="automatic" href="#" onClick={e => {e.preventDefault(); ui.notify("automatic — link preview only");}}>{"Automatic Watches"}</a><span>{"/"}</span><span className="text-primary font-bold">{"Aster No.04 Automatic"}</span></nav><div className="flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"><span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{"Ref. AST-N04-BLU"}</span><span className="hidden sm:inline text-outline">{"|"}</span><span className="hidden sm:inline">{"Calibre AH-904 Manufactured"}</span></div></div></RevealSection>);
}
