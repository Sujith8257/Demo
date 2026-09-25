import { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import DesignTaskbar from "./components/DesignTaskbar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
const PAGES={
  1:lazy(()=>import("./pages/design1/Design1.jsx")),
  2:lazy(()=>import("./pages/design2/Design2.jsx")),
  3:lazy(()=>import("./pages/design3/Design3.jsx")),
  4:lazy(()=>import("./pages/design4/Design4.jsx")),
  5:lazy(()=>import("./pages/design5/Design5.jsx")),
};
function initialDesign(){
  const selected=Number(new URLSearchParams(window.location.search).get("design"));
  if(PAGES[selected])return selected;
  const saved=Number(localStorage.getItem("amihive-cart-design"));
  return PAGES[saved]?saved:1;
}
export default function App(){
  const [design,setDesign]=useState(initialDesign);
  const reduced=useReducedMotion();
  const Page=PAGES[design];
  function selectDesign(n){
    if(n===design)return;
    const u=new URL(window.location.href);u.searchParams.set('design',String(n));
    history.replaceState({design:n},'',u);
    localStorage.setItem('amihive-cart-design',String(n));
    setDesign(n);window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
  }
  return <>
    <CartProvider variant={design}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={design} initial={reduced?false:{opacity:0,y:16}}
          animate={{opacity:1,y:0}} exit={reduced?{opacity:0}:{opacity:0,y:-10}}
          transition={{duration:reduced?0:.3,ease:'easeOut'}}>
          <Suspense fallback={<p style={{padding:'190px 24px'}}>Loading design…</p>}><Page/></Suspense>
        </motion.div>
      </AnimatePresence>
      <DemoToast/>
      <AddedAccessories />
    </CartProvider>
    <DesignTaskbar active={design} onChange={selectDesign}/>
  </>;
}
function DemoToast(){
  const {toast,setToast,lastRemoved,undo,extras}=requireCart();
  return <AnimatePresence>{toast&&<motion.div key={toast} role="status" className="cart-demo-toast"
    initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}}>
    {toast} {lastRemoved&&<button type="button" style={{marginLeft:10,color:'#ffdea6',fontWeight:800}} onClick={undo}>Undo</button>} <button type="button" aria-label="Dismiss notification" style={{marginLeft:10,color:'#ffdea6'}} onClick={()=>setToast('')}>×</button>
  </motion.div>}</AnimatePresence>;
}
import { useCart as requireCart } from "./context/CartContext.jsx";

function AddedAccessories(){
  const {extras}=requireCart();
  if(!extras.length)return null;
  return <aside aria-label="Added preview accessories" className="fixed right-4 bottom-[170px] z-[180] rounded-2xl border border-[#d9e2da] bg-white/95 shadow-lg p-3 max-w-[230px] text-xs text-[#002524] hidden lg:block">
    <strong>Added accessories</strong>
    {extras.map(x=><p key={x.name} className="mt-1">{x.qty} × {x.name} · ₹{(x.qty*x.price).toLocaleString('en-IN')}</p>)}
  </aside>;
}
