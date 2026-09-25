import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import DesignTaskbar from "./components/DesignTaskbar.jsx";
import {CheckoutUIProvider} from "./context/CheckoutUI.jsx";
const PAGES={
  1:lazy(()=>import('./pages/design1/Design1.jsx')),
  2:lazy(()=>import('./pages/design2/Design2.jsx')),
  3:lazy(()=>import('./pages/design3/Design3.jsx')),
  4:lazy(()=>import('./pages/design4/Design4.jsx')),
  5:lazy(()=>import('./pages/design5/Design5.jsx')),
};
const key='amihive-checkout-design';
function startingDesign(){
 const url=Number(new URLSearchParams(window.location.search).get('design'));
 if(PAGES[url])return url;
 try{const saved=Number(window.localStorage.getItem(key));if(PAGES[saved])return saved;}catch{}
 return 1;
}
export default function App(){
 const [active,setActive]=useState(startingDesign);
 const reduced=useReducedMotion();
 useEffect(()=>{
  const handler=()=>{const n=Number(new URLSearchParams(window.location.search).get('design'));if(PAGES[n])setActive(n);};
  window.addEventListener('popstate',handler);return()=>window.removeEventListener('popstate',handler);
 },[]);
 function choose(n){
  if(n===active)return;
  const u=new URL(window.location.href);u.searchParams.set('design',String(n));window.history.pushState({design:n},'',u);
  try{window.localStorage.setItem(key,String(n));}catch{}
  setActive(n);window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
 }
 const Page=PAGES[active];
 return <>
  <AnimatePresence mode="wait" initial={false}>
   <motion.div key={active} initial={reduced?false:{opacity:0,y:13}} animate={{opacity:1,y:0}} exit={reduced?{opacity:0}:{opacity:0,y:-9}} transition={{duration:reduced?0:.26,ease:'easeOut'}}>
    <CheckoutUIProvider design={active}>
      <Suspense fallback={<div style={{padding:'190px 28px',color:'#002524'}}>Loading checkout design…</div>}><Page /></Suspense>
    </CheckoutUIProvider>
   </motion.div>
  </AnimatePresence>
  <DesignTaskbar active={active} onChange={choose}/>
 </>;
}
