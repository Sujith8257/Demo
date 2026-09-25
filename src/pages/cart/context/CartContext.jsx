import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);
export const BASE_PRICES = Object.freeze({aster:18990,heritage:14290,atlas:13990});
const INITIAL_QUANTITIES = Object.freeze({aster:1,heritage:1,atlas:1});
const BENEFITS={1:3000,2:2500,3:2500,4:0,5:0};

export function CartProvider({variant,children,onNavigateToCheckout,onNavigateHome,onNavigateToCatalogue,onNavigateToProductDetail}) {
  const [quantities,setQuantities] = useState({...INITIAL_QUANTITIES});
  const [saved,setSaved] = useState([]);
  const [extras,setExtras] = useState([]);
  const [voucher,setVoucher] = useState(true);
  const [gift,setGift] = useState(true);
  const [promo,setPromo] = useState("");
  const [toast,setToast] = useState("");
  const [lastRemoved,setLastRemoved] = useState(null);
  const [emptyModal,setEmptyModal] = useState(false);
  const [angle,setAngle] = useState(0);

  const adjust=useCallback((key,delta)=>{
    if(!(key in BASE_PRICES)) return;
    setQuantities(current=>({...current,[key]:Math.max(0,Math.min(99,(current[key]||0)+delta))}));
  },[]);
  const remove=useCallback((key)=>{
    if(!(key in BASE_PRICES))return;
    setLastRemoved({key,qty:quantities[key]||1});
    setQuantities(current=>({...current,[key]:0}));
    setToast("Timepiece removed. You can undo this action.");
  },[quantities]);
  const undo=useCallback(()=>{
    if(lastRemoved){setQuantities(old=>({...old,[lastRemoved.key]:lastRemoved.qty}));setToast("Timepiece restored.");setLastRemoved(null);}
  },[lastRemoved]);
  const save=useCallback(key=>{
    setSaved(old=>old.includes(key)?old:[...old,key]);
    setQuantities(old=>({...old,[key]:0}));
    setToast("Saved to your preview wishlist.");
  },[]);
  const addAccessory=useCallback((name,price)=>{
    if(!name||!Number.isFinite(price)||price<0)return;
    setExtras(old=>{const found=old.find(x=>x.name===name);return found?old.map(x=>x.name===name?{...x,qty:x.qty+1}:x):[...old,{name,price,qty:1}];});
    setToast(`${name} added to preview cart.`);
  },[]);
  const reset=useCallback(()=>{
    setQuantities({...INITIAL_QUANTITIES});setExtras([]);setSaved([]);setVoucher(true);setGift(true);setPromo("");setEmptyModal(false);setToast("Preview cart reset.");
  },[]);
  const totalCount=Object.values(quantities).reduce((a,b)=>a+b,0)+extras.reduce((a,b)=>a+b.qty,0);
  const subtotal=Object.entries(BASE_PRICES).reduce((total,[key,price])=>total+price*(quantities[key]||0),0)+extras.reduce((total,x)=>total+x.price*x.qty,0);
  const discount=subtotal===0?0:BENEFITS[variant]||0;
  const voucherDiscount=subtotal===0?0:(variant===1&&voucher?1500:0);
  const giftCost=subtotal===0?0:(variant===5&&gift?1200:0);
  const total=Math.max(0,subtotal-discount-voucherDiscount+giftCost);
  const tax=Math.round(total*18/118);
  const amounts={subtotal,discount,voucher:voucherDiscount,gift:giftCost,total,tax};
  const value={variant,quantities,saved,extras,voucher,setVoucher,gift,setGift,promo,setPromo,toast,setToast,lastRemoved,
    emptyModal,setEmptyModal,angle,setAngle,adjust,remove,undo,save,addAccessory,reset,totalCount,amounts,
    onNavigateToCheckout,onNavigateHome,onNavigateToCatalogue,onNavigateToProductDetail};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart(){const context=useContext(CartContext);if(!context)throw new Error("Missing CartProvider");return context;}
