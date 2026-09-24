import "./styles/product.css";
import { useEffect,useState } from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import { ProductProvider } from "./state/ProductContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DesignTaskbar from "./components/DesignTaskbar.jsx";
import GalleryModal from "./components/GalleryModal.jsx";
import Toast from "./components/Toast.jsx";
import Design1 from "./pages/design1/Design1.jsx";
import Design2 from "./pages/design2/Design2.jsx";
import Design3 from "./pages/design3/Design3.jsx";
import Design4 from "./pages/design4/Design4.jsx";
import Design5 from "./pages/design5/Design5.jsx";
const designs={1:Design1,2:Design2,3:Design3,4:Design4,5:Design5};
function readDesign(){const url=Number(new URLSearchParams(location.search).get("design"));if(designs[url])return url;try{const saved=Number(localStorage.getItem("amihive-product-design"));if(designs[saved])return saved;}catch{}return 1;}
export default function ProductDetailPage({ onNavigateHome, onNavigateToCatalogue }){
 const [active,setActive]=useState(readDesign),[cart,setCart]=useState([]),[wishlist,setWishlist]=useState([]);
 const Page=designs[active],reduced=useReducedMotion();
 useEffect(()=>{try{localStorage.setItem("amihive-product-design",String(active));}catch{}const url=new URL(location.href);url.searchParams.set("design",String(active));history.replaceState({},"",url)},[active]);
 useEffect(()=>{const pop=()=>setActive(readDesign());addEventListener("popstate",pop);return()=>removeEventListener("popstate",pop)},[]);
 function onChange(next){if(next===active)return;setActive(next);scrollTo({top:0,behavior:"instant"})}
 return <MotionConfig reducedMotion="user">
  <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[999] focus:bg-white focus:p-3">Skip to main content</a>
  <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-8}} transition={{duration:.25}}
   className="min-h-screen bg-surface"><ProductProvider key={active} variant={active} cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}>
    <Header onNavigateHome={onNavigateHome} onNavigateToCatalogue={onNavigateToCatalogue}/><Page/><Footer/><GalleryModal/><Toast/>
   </ProductProvider></motion.div></AnimatePresence>
  <DesignTaskbar active={active} onChange={onChange} onNavigateHome={onNavigateHome}/>
 </MotionConfig>;
}
