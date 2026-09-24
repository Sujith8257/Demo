import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";


export default function Section05Section() {
  const ui = useCatalogue();
  return (<RevealSection className="mt-space-xl py-space-lg overflow-hidden border-t border-outline-variant/10"><div className="max-w-4xl mx-auto flex items-center justify-between opacity-40 hover:opacity-80 transition-opacity gap-6 flex-wrap px-4"><span className="font-headline-sm text-headline-sm uppercase tracking-widest font-black text-on-surface">{"CASIO"}</span><span className="font-headline-sm text-headline-sm uppercase tracking-widest font-serif font-black text-on-surface">{"SEIKO"}</span><span className="font-headline-sm text-headline-sm uppercase tracking-widest font-mono font-bold text-on-surface">{"TUDOR"}</span><span className="font-headline-sm text-headline-sm uppercase tracking-widest font-sans font-bold text-on-surface">{"TITAN"}</span><span className="font-headline-sm text-headline-sm uppercase tracking-widest font-serif font-bold text-on-surface">{"Ω OMEGA"}</span></div></RevealSection>);
}
