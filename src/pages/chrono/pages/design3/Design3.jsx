import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01BuiltForEveryMove from "./Section01BuiltForEveryMove.jsx";
import Section02Section from "./Section02Section.jsx";
import Section038PerformanceInstruments from "./Section038PerformanceInstruments.jsx";
import Section04AtlasS4DualGps from "./Section04AtlasS4DualGps.jsx";
import Section05ChooseByTheWay from "./Section05ChooseByTheWay.jsx";
import Section06TheActiveCalibreProtocol from "./Section06TheActiveCalibreProtocol.jsx";
export default function Design3() {
  const ui = useCatalogue();
  return <main className="w-full pt-24 sm:pt-28 bg-surface min-h-[70vh]"><div className="flex flex-col w-full"><Section01BuiltForEveryMove /><Section02Section /><Section038PerformanceInstruments /><Section04AtlasS4DualGps /><Section05ChooseByTheWay /><Section06TheActiveCalibreProtocol /></div></main>;
}
