import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";


export default function Section01Section() {
  const ui = useCatalogue();
  return (<RevealSection className="w-full bg-surface-container-low"><div className="max-w-[1440px] mx-auto px-gutter py-space-sm flex flex-wrap items-center justify-between gap-space-sm"><nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-outline"><a className="hover:text-primary transition-colors" href="#">{"Home"}</a><span className="text-outline-variant">{"/"}</span><a className="hover:text-primary transition-colors" href="#">{"Watches"}</a><span className="text-outline-variant">{"/"}</span><span className="text-primary font-bold">{"Curated Style Edit"}</span></nav><div className="flex items-center gap-space-md"><span className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>{"\n          24 Fresh Atelier Editions Available Today\n        "}</span><div className="hidden md:flex items-center gap-1 font-label-sm text-label-sm text-secondary font-bold"><span className="material-symbols-outlined text-[16px]">{"sync_alt"}</span><span>{"Complimentary Quick-Release Strap On Orders > ₹12,000"}</span></div></div></div></RevealSection>);
}
