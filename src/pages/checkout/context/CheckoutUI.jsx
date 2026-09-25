import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
const CheckoutContext=createContext(null);
export function formatCountdown(seconds){const n=Math.max(0,seconds);return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;}
export function CheckoutUIProvider({ children, design }){
  const [paymentTab,setPaymentTab]=useState('upi');
  const [accordionOpen,setAccordionOpen]=useState({'section-01-body':true,'section-02-body':true,'section-03-body':true});
  const toggleAccordion=(name)=>setAccordionOpen(prev=>({...prev,[name]:!prev[name]}));
  const [engraving,setEngraving]=useState('To Arthur — Celebrating 30 Years of Precision & Leadership. 2025.');
  const [giftingIntent,setGiftingIntent]=useState('recipient');
  const [remaining,setRemaining]=useState(design===4?28*60+14:14*60+59);
  const [toast,setToast]=useState('');
  const [addressEditorOpen,setAddressEditorOpen]=useState(false);
  const [previewAddress,setPreviewAddress]=useState('');
  const [selectedBank,setSelectedBank]=useState('');
  const reduced=useReducedMotion();
  useEffect(()=>{const id=setInterval(()=>setRemaining(v=>Math.max(0,v-1)),1000);return ()=>clearInterval(id);},[]);
  useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),4500);return ()=>clearTimeout(id);},[toast]);
  function onDemoButton(event){
    const button=event.target.closest('button');if(!button)return;
    if(button.disabled)return;
    const label=(button.innerText||button.getAttribute('aria-label')||'').replace(/\s+/g,' ').trim();
    const low=label.toLowerCase();
    if(/add (new|alternative).*address|new vault address/.test(low)){setAddressEditorOpen(true);return;}
    if(/^(hdfc|icici|axis|kotak)/.test(low)){setSelectedBank(label);setToast(`Selected ${label} (preview).`);return;}
    if(/upi quickpay|apple \/ google pay|cred pay/.test(low)){setPaymentTab(low.includes('upi')?'upi':low.includes('apple')?'card':'upi');setToast(`Selected ${label.split('  ')[0]} for this preview.`);return;}
    if(/verify|connect|switch profile|edit dossier|change rail|edit spec|modify billing/.test(low)){setToast(`${label}: connect your backend to enable this action.`);return;}
    if(/authorize|complete|pay|proceed|checkout|confirm|seal ledger|express pay/.test(low)){
      setToast('Preview only: no payment has been charged or order placed. Connect your payment provider and backend.');
    }
  }
  return <CheckoutContext.Provider value={{paymentTab,setPaymentTab,remaining,formatCountdown,setToast,setAddressEditorOpen,previewAddress,selectedBank,accordionOpen,toggleAccordion,engraving,setEngraving,giftingIntent,setGiftingIntent}}>
   <div onClick={onDemoButton}>{children}</div>
   <AnimatePresence>{toast&&<motion.div key="toast" role="status" className="demo-toast" initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:15}}>{toast}<button type="button" aria-label="Dismiss" style={{marginLeft:12,color:'#ffdea6'}} onClick={()=>setToast('')}>×</button></motion.div>}</AnimatePresence>
   <AnimatePresence>{addressEditorOpen&&<motion.div className="address-modal-overlay" initial={reduced?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>{if(e.target===e.currentTarget)setAddressEditorOpen(false)}}>
      <motion.form className="address-modal" initial={reduced?false:{scale:.97,y:15}} animate={{scale:1,y:0}} onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);setPreviewAddress(String(data.get('address')||''));setAddressEditorOpen(false);setToast('Preview address saved locally in this design. Connect your account API for persistence.');}}>
       <h2 style={{fontSize:21,fontWeight:800,color:'#002524'}}>New delivery address</h2>
       <p style={{fontSize:12,color:'#536c64',marginTop:5}}>For design preview only. Nothing is sent to a server.</p>
       <label>Recipient name<input name="recipient" autoComplete="name" required placeholder="Full name"/></label>
       <label>Street address<input name="address" autoComplete="street-address" required placeholder="House number and street"/></label>
       <label>Postal code<input name="postcode" autoComplete="postal-code" required placeholder="PIN / ZIP code"/></label>
       <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:17}}><button type="button" onClick={()=>setAddressEditorOpen(false)} style={{background:'#f1f4f4'}}>Cancel</button><button type="submit" style={{background:'#002524',color:'white'}}>Save preview</button></div>
      </motion.form>
     </motion.div>}</AnimatePresence>
  </CheckoutContext.Provider>;
}
export function useCheckoutUI(){const ctx=useContext(CheckoutContext);if(!ctx)throw new Error('CheckoutUIProvider required');return ctx;}
