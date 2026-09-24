import { useCatalogue } from "../../state/CatalogueContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01Section from "./Section01Section.jsx";
import Section02AWatchForThe from "./Section02AWatchForThe.jsx";
import Section03ShopBySilhouettesMaterial from "./Section03ShopBySilhouettesMaterial.jsx";
import Section04MeridianClassic38 from "./Section04MeridianClassic38.jsx";
import Section05ChosenForTheMoment from "./Section05ChosenForTheMoment.jsx";
import Section06RecentlyStyledOnThe from "./Section06RecentlyStyledOnThe.jsx";

export default function Design5() {
 const ui=useCatalogue();
 return (<main className="w-full pt-41 bg-surface min-h-[70vh]"><div className="flex flex-col w-full"><Section01Section /><Section02AWatchForThe /><Section03ShopBySilhouettesMaterial /><Section04MeridianClassic38 /><Section05ChosenForTheMoment /><Section06RecentlyStyledOnThe /></div></main>);
}
