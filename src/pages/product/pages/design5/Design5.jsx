import { useProduct } from "../../state/ProductContext.jsx";
import RevealSection from "../../components/RevealSection.jsx";
import { motion } from "motion/react";
import Section01AsterNo04Automatic from "./Section01AsterNo04Automatic.jsx";
import Section02InsideTheMovementNocturne from "./Section02InsideTheMovementNocturne.jsx";
import Section03TheMidnightEdit from "./Section03TheMidnightEdit.jsx";
import Section04CollectorTestimonials from "./Section04CollectorTestimonials.jsx";
import Section05RecentlyViewedVaultSuggestions from "./Section05RecentlyViewedVaultSuggestions.jsx";
export default function Design5() {
 const ui=useProduct();
 return (<main className="w-full pt-36 bg-surface min-h-screen" id="main-content"><div className="flex flex-col w-full"><Section01AsterNo04Automatic /><Section02InsideTheMovementNocturne /><Section03TheMidnightEdit /><Section04CollectorTestimonials /><Section05RecentlyViewedVaultSuggestions /></div></main>);
}
