import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";


export default function Section01Section() {
  const ui = useCatalogue();
  return (<RevealSection className="w-full bg-surface-container-low px-gutter py-space-sm"><div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"><div className="flex items-center gap-space-xs"><a className="hover:text-primary transition-colors" href="#">{"Home"}</a><span className="text-outline-variant">{"/"}</span><a className="hover:text-primary transition-colors" href="#">{"Watches"}</a><span className="text-outline-variant">{"/"}</span><span className="text-primary font-bold">{"Catalogue Calibration"}</span></div><div className="flex items-center gap-space-md text-[11px] font-mono tracking-tight text-outline"><span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>{"ISO 1413 / ISO 22810 REGISTRY"}</span><span>{"LAT: 47.0016° N • LON: 6.9452° E"}</span></div></div></RevealSection>);
}
