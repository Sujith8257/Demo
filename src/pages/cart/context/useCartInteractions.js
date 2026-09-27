import { useCallback } from "react";
import { useCart } from "./CartContext.jsx";

export function useCartInteractions(){
  const cart=useCart();
  const handleClick=useCallback((event)=>{
    const link = event.target.closest("a");
    if (link) {
      const path = link.dataset.path || "";
      const text = (link.textContent || "").trim().toLowerCase();
      if (path === "home" || text === "home" || link.closest('[data-path="home"]')) {
        event.preventDefault();
        cart.onNavigateHome?.();
        return;
      }
      if (path === "catalogue" || text.includes("catalogue") || text.includes("collection") || text.includes("continue shopping") || text.includes("browse")) {
        event.preventDefault();
        cart.onNavigateToCatalogue?.();
        return;
      }
      if (link.dataset.cartAction === "checkout" || text.includes("checkout")) {
        event.preventDefault();
        cart.onNavigateToCheckout?.();
        return;
      }
    }

    const button=event.target.closest("button");
    if(!button){if(event.target.closest('a[href="#"]'))event.preventDefault();return;}
    const btnText = (button.textContent || "").trim().toLowerCase();
    const action=button.dataset.cartAction;

    if (action === "checkout" || btnText.includes("checkout") || btnText.includes("proceed to secure") || btnText.includes("proceed to escrow")) {
      event.preventDefault();
      if (cart.onNavigateToCheckout) {
        cart.onNavigateToCheckout();
      } else {
        cart.setToast("Checkout preview only: connect this page to your Spring Boot API.");
      }
      return;
    }

    if(!action)return;
    event.preventDefault();
    const item=button.closest("[data-cart-key]")?.dataset.cartKey;
    switch(action){
      case "increase":if(item)cart.adjust(item,1);break;
      case "decrease":if(item)cart.adjust(item,-1);break;
      case "remove":if(item)cart.remove(item);break;
      case "save":if(item)cart.save(item);break;
      case "undo":cart.undo();break;
      case "remove-voucher":cart.setVoucher(false);cart.setToast("Voucher removed.");break;
      case "coupon":{
        const field=event.currentTarget.querySelector('#coupon-input')||event.currentTarget.querySelector('input[placeholder*="Voucher"]')||event.currentTarget.querySelector('input[placeholder*="voucher"]')||event.currentTarget.querySelector('input[placeholder*="Coupon"]');
        const entered=field?.value.trim().toUpperCase()||"";
        if(entered==="TOURBILLON10"||entered==="ATELIER1500"){
          cart.setVoucher(true);cart.setPromo(entered);cart.setToast("Preview voucher applied.");
        }else cart.setToast("Preview code: TOURBILLON10");
        break;
      }
      case "pincode":cart.setToast("Enter your delivery PIN manually to preview availability.");break;
      case "empty-preview":cart.setEmptyModal(x=>!x);break;
      case "reset":cart.reset();break;
      case "scroll-left":{
        const target=event.currentTarget.querySelector('#accessoriesContainer')||event.currentTarget.querySelector('[class*="overflow-x-auto"]');
        target?.scrollBy({left:-320,behavior:'smooth'});break;
      }
      case "scroll-right":{
        const target=event.currentTarget.querySelector('#accessoriesContainer')||event.currentTarget.querySelector('[class*="overflow-x-auto"]');
        target?.scrollBy({left:320,behavior:'smooth'});break;
      }
      case "angle":{
        const n=Number(button.dataset.angle)||0;
        cart.setAngle(n);
        const images=Array.from(event.currentTarget.querySelectorAll('#item-aster img'));
        if(images[n-1]){const hero=event.currentTarget.querySelector('#aster-main-img');if(hero)hero.src=images[n-1].src;}
        break;
      }
      case "accessory":cart.addAccessory(button.dataset.accessoryName||"Accessory",Number(button.dataset.accessoryPrice)||0);break;
      case "checkout":
        if (cart.onNavigateToCheckout) {
          cart.onNavigateToCheckout();
        } else {
          cart.setToast("Checkout preview only: connect this page to your Spring Boot API.");
        }
        break;
      case "export":cart.setToast("Export can be connected to your backend manifest endpoint.");break;
      case "save-config":cart.setToast("Gifting configuration saved in this preview.");break;
      default:break;
    }
  },[cart]);
  const handleChange=useCallback((event)=>{
    const el=event.target;
    if(el.id==='giftToggle')cart.setGift(el.checked);
    if(el.id==='pincode-input'&&el.value.length===6){
      const box=event.currentTarget.querySelector('#pincode-status');
      if(box)box.textContent='PIN entered (preview only; delivery API not connected).';
    }
  },[cart]);
  return {handleClick,handleChange};
}
