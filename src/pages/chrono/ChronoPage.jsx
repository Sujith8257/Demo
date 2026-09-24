import "./styles/chrono.css";
import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { CatalogueProvider } from "./state/CatalogueContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DesignTaskbar from "./components/DesignTaskbar.jsx";
import QuickViewModal from "./components/QuickViewModal.jsx";
import Toast from "./components/Toast.jsx";
import Design1 from "./pages/design1/Design1.jsx";
import Design2 from "./pages/design2/Design2.jsx";
import Design3 from "./pages/design3/Design3.jsx";
import Design4 from "./pages/design4/Design4.jsx";
import Design5 from "./pages/design5/Design5.jsx";
const pages={1:Design1,2:Design2,3:Design3,4:Design4,5:Design5};
function readVariant(){const q=Number(new URLSearchParams(window.location.search).get("design"));if(pages[q])return q;
 const saved=Number(window.localStorage.getItem("amihive-chrono-design"));return pages[saved]?saved:1;}
export default function ChronoPage({ onNavigateHome, onNavigateToProductDetail }){
 const [active,setActive]=useState(readVariant);
 const [cart,setCart]=useState([]),[wishlist,setWishlist]=useState([]);
 const reduced=useReducedMotion(),Page=pages[active];
 useEffect(()=>{window.localStorage.setItem("amihive-chrono-design",String(active));const url=new URL(window.location.href);url.searchParams.set("design",String(active));window.history.replaceState({},"",url)},[active]);
 useEffect(()=>{const pop=()=>setActive(readVariant());window.addEventListener("popstate",pop);return()=>window.removeEventListener("popstate",pop)},[]);
 const change=design=>{if(design===active)return;setActive(design);window.scrollTo({top:0,behavior:"instant"})};

 const handleContentClick = (e) => {
  if (e.target.closest("input, select, textarea, aside, nav")) return;
  const btn = e.target.closest("button");
  if (btn) {
   const text = (btn.textContent || "").toLowerCase();
   const isAddOrWishlist = text.includes("cart") || text.includes("add") || text.includes("registry") || text.includes("waitlist") || text.includes("filter");
   const isHeart = btn.querySelector(".material-symbols-outlined")?.textContent?.includes("favorite");
   if (isAddOrWishlist || isHeart) return;
   const isPreview = btn.querySelector(".material-symbols-outlined")?.textContent?.includes("visibility") || (btn.title || "").toLowerCase().includes("quick") || (btn.getAttribute("aria-label") || "").toLowerCase().includes("quick");
   if (isPreview) {
    e.preventDefault();
    e.stopPropagation();
    onNavigateToProductDetail?.();
    return;
   }
  }
  const card = e.target.closest('[data-product-link="true"], .catalogue-product-card, article');
  if (card) {
   const text = card.textContent || "";
   const isAtlas = text.includes("Atlas") || text.includes("GPS") || text.includes("Telemetry");
   const targetDesign = isAtlas ? 3 : (active === 3 ? 3 : active);
   onNavigateToProductDetail?.({ design: targetDesign });
  }
 };

 return <MotionConfig reducedMotion="user">
  <a className="sr-only focus:not-sr-only focus:fixed focus:z-[999] focus:top-2 focus:left-2 bg-white text-primary p-3" href="#main-content">Skip to main content</a>
  <AnimatePresence mode="wait" initial={false}>
   <motion.div key={active} initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-9}}
    transition={{duration:.25}} className="min-h-screen bg-surface">
    <CatalogueProvider key={active} variant={active} cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} onNavigateToProductDetail={onNavigateToProductDetail}>
     <Header onNavigateHome={onNavigateHome}/>
     <div id="main-content" className="preview-root" onClick={handleContentClick}><Page/></div>
     <Footer/>
     <QuickViewModal onNavigateToProductDetail={onNavigateToProductDetail}/>
     <Toast/>
    </CatalogueProvider>
   </motion.div>
  </AnimatePresence>
  <DesignTaskbar active={active} onChange={change} onNavigateHome={onNavigateHome}/>
 </MotionConfig>;
}
