import { useProduct } from "../../state/ProductContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01AtlasS4DualGps from "./Section01AtlasS4DualGps.jsx";
import Section02BuiltForTheDemands from "./Section02BuiltForTheDemands.jsx";
import Section03ComprehensiveTelemetryHardwareSpecificatio from "./Section03ComprehensiveTelemetryHardwareSpecificatio.jsx";
import Section04CompareAmihivePerformanceFleet from "./Section04CompareAmihivePerformanceFleet.jsx";
import Section05EngineeredPerformanceAccessories from "./Section05EngineeredPerformanceAccessories.jsx";
import Section06TelemetryFitDurabilityFaq from "./Section06TelemetryFitDurabilityFaq.jsx";
export default function Design3() {
 const ui=useProduct();
 return (<main className="w-full pt-24 sm:pt-28 bg-surface min-h-screen" id="main-content"><div className="flex flex-col w-full"><div className="w-full bg-surface-container-low py-space-sm px-margin-mobile lg:px-margin"><div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xs text-on-surface-variant font-label-sm text-label-sm"><nav className="flex items-center gap-space-xs uppercase tracking-wider"><a className="hover:text-primary transition-colors" data-path="home" href="#" onClick={e => {e.preventDefault(); ui.notify("home — link preview only");}}>{"Home"}</a><span className="text-outline-variant">{"/"}</span><a className="hover:text-primary transition-colors" data-path="sports" href="#" onClick={e => {e.preventDefault(); ui.notify("sports — link preview only");}}>{"Sports & Smart"}</a><span className="text-outline-variant">{"/"}</span><span className="text-primary font-bold">{"Atlas S4 Dual GPS"}</span></nav><div className="flex items-center gap-space-md bg-surface-container-lowest px-space-md py-1 rounded shadow-sm text-primary"><div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span><span className="font-label-sm tracking-widest uppercase text-tertiary-container">{"Telemetry Escapement: Online"}</span></div><span className="text-outline-variant">{"|"}</span><span className="font-mono text-xs">{"CAL: GNSS-L1+L5.908"}</span></div></div></div><Section01AtlasS4DualGps /><Section02BuiltForTheDemands /><Section03ComprehensiveTelemetryHardwareSpecificatio /><Section04CompareAmihivePerformanceFleet /><Section05EngineeredPerformanceAccessories /><Section06TelemetryFitDurabilityFaq /></div></main>);
}
