import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCart } from "../context/CartContext.jsx";

const money = amount => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(amount);
export function CartItem({cartKey,children,className="",...rest}){
  const {quantities}=useCart();
  const reduced=useReducedMotion();
  return <AnimatePresence mode="popLayout">{Boolean(quantities[cartKey]) && (
    <motion.div {...rest} data-cart-key={cartKey} className={`${className} cart-motion-card`}
      layout={!reduced} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}}
      exit={reduced?{opacity:0}:{opacity:0,height:0,scale:.97}} transition={{duration:reduced?0:.27}}>
      {children}
    </motion.div>
  )}</AnimatePresence>;
}
export function CartQty({cartKey}){const {quantities}=useCart();return <>{quantities[cartKey]||0}</>;}
export function CartCount({suffix="",className=""}){const {totalCount}=useCart();return className?<span className={className}>{totalCount}{suffix}</span>:<>{totalCount}{suffix}</>;}
export function CartAmount({kind}){
  const {amounts}=useCart();
  const val=amounts[kind]||0;
  const prefix=kind==='discount'||kind==='voucher'?'-':kind==='gift'?'+':'';
  return <>{prefix}{money(val)}</>;
}
export function AppliedVoucher({children,...rest}){
  const {voucher}=useCart();return voucher?<div {...rest}>{children}</div>:null;
}
