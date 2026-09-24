import { useProduct } from "../../state/ProductContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01Section from "./Section01Section.jsx";
import Section02AsterNo04Automatic from "./Section02AsterNo04Automatic.jsx";
import Section03TheTechnicalCalibre from "./Section03TheTechnicalCalibre.jsx";
import Section04SculptedForTheCollector from "./Section04SculptedForTheCollector.jsx";
import Section05FromTheAsterCollection from "./Section05FromTheAsterCollection.jsx";
import Section06CollectorReviews from "./Section06CollectorReviews.jsx";
import Section07Section from "./Section07Section.jsx";
export default function Design1() {
 const ui=useProduct();
 return (<main className="w-full pt-36 bg-surface min-h-screen" id="main-content"><div className="flex flex-col w-full"><Section01Section /><Section02AsterNo04Automatic /><Section03TheTechnicalCalibre /><Section04SculptedForTheCollector /><Section05FromTheAsterCollection /><Section06CollectorReviews /><Section07Section /></div></main>);
}
