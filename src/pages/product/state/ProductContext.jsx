import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { designData } from "./designData.js";
const ProductContext=createContext(null);
const defaults={
 1:{finish:"Brushed 316L Stainless Steel",dialName:"Midnight Blue Sunburst",strapName:"316L Solid Link Bracelet",size:"40mm",dialMode:"topo",swatch:"Midnight Sunburst / Cognac Leather"},
 2:{finish:"Brushed 316L Stainless Steel",dialName:"Midnight Blue",strapName:"Brushed Solid Link",size:"40mm",dialMode:"topo",swatch:"Midnight Sunburst / Cognac Leather"},
 3:{finish:"Raw Micro-Bead Blasted",dialName:"Topo Elevation Vector Display",strapName:"FKM Fluoroelastomer (Forest Jade)",size:"44mm",dialMode:"topo",swatch:"Midnight"},
 4:{finish:"316L Stainless Steel",dialName:"Midnight Sunburst",strapName:"Cognac Leather",size:"40mm",dialMode:"topo",swatch:"Midnight Sunburst / Cognac Leather"},
 5:{finish:"DLC Titanium",dialName:"Midnight Nocturne",strapName:"Black Premium Leather",size:"40mm",dialMode:"topo",swatch:"Nocturne"}
};
const lookbookCaptions=["08:45 AM — Studio Desk & Structured Focus","03:30 PM — Weekend Transit & Raw Denim","09:15 PM — Nocturne Gathering & Satin Lapels"];
const activePaths={1:"automatic",2:"automatic",3:"smart",4:"fashion",5:"automatic"};
export function ProductProvider({children,variant,cart,setCart,wishlist,setWishlist}){
 const data=designData[String(variant)],initial=defaults[variant];
 const [galleryIndex,setGalleryIndex]=useState(0),[finish,setFinish]=useState(initial.finish),[dialName,setDialName]=useState(initial.dialName),
  [strapName,setStrapName]=useState(initial.strapName),[size,setSize]=useState(initial.size),[dialMode,setMode]=useState(initial.dialMode),
  [dialLabel,setDialLabel]=useState(initial.dialName),[swatch,setSwatch]=useState(initial.swatch),[qty,setQty]=useState(1),
  [faqOpen,setFaqOpen]=useState(null),[pin,setPin]=useState(""),[deliveryFeedback,setDeliveryFeedback]=useState(""),
  [wrist,setWrist]=useState(175),[lookbook,setLookbook]=useState(0),[monogramOpen,setMonogramOpen]=useState(false),
  [monogram,setMonogram]=useState(""),[suggestionOffset,setSuggestionOffset]=useState(0),[lume,setLume]=useState(false),[zoom,setZoom]=useState(false),[search,setSearch]=useState(""),[toast,setToast]=useState(null);
 const collectionRef=useRef(null),counter=useRef(0);
 const galleryImages=data.gallery||[];
 const notify=useCallback(message=>setToast({message,id:++counter.current}),[]);
 const clearToast=useCallback(()=>setToast(null),[]);
 const shiftGallery=useCallback(delta=>setGalleryIndex(i=>(i+delta+Math.max(galleryImages.length,1))%Math.max(galleryImages.length,1)),[galleryImages.length]);
 const setGallery=useCallback(index=>setGalleryIndex(Math.min(galleryImages.length-1,Math.max(index,0))),[galleryImages.length]);
 const setDialMode=useCallback((mode,label)=>{setMode(mode);setDialLabel(label);},[]);
 const adjustQty=useCallback(delta=>setQty(v=>Math.min(6,Math.max(1,v+delta))),[]);
 const toggleFaq=useCallback(idx=>setFaqOpen(v=>v===idx?null:idx),[]);
 const checkPin=useCallback(()=>setDeliveryFeedback(/^\d{6}$/.test(pin)?`PIN ${pin} has a valid six-digit format. Connect your delivery API for an actual estimate.`:"Please enter a valid six-digit postal PIN."),[pin]);
 const toggleWishlist=useCallback((name=data.title)=>{setWishlist(items=>items.includes(name)?items.filter(x=>x!==name):[...items,name]);notify("Wishlist updated (local preview).")},[setWishlist,notify,data.title]);
 const addCart=useCallback((name=data.title)=>{setCart(items=>[...items,...Array.from({length:qty},()=>name)]);notify(`${qty} × ${name} added to your local preview cart.`)},[setCart,notify,data.title,qty]);
 const toggleZoom=useCallback(()=>setZoom(p=>!p),[]);
 const shiftSuggestions=useCallback(delta=>setSuggestionOffset(prev=>(prev+delta+4)%4),[]);
 const suggestionOrder=useCallback(index=>(index+4-suggestionOffset)%4,[suggestionOffset]);
 const toggleLume=useCallback(()=>setLume(p=>!p),[]);
 const toggleMonogram=useCallback(()=>setMonogramOpen(p=>!p),[]);
 const scrollCollection=useCallback(dir=>collectionRef.current?.scrollBy({left:dir*320,behavior:"smooth"}),[]);
 const resetOptions=useCallback(()=>{setFinish(initial.finish);setDialName(initial.dialName);setStrapName(initial.strapName);setSize(initial.size);setSwatch(initial.swatch);notify("Product options reset.")},[initial,notify]);
 const galleryButtonClass=useCallback((base,index)=>{
  const clean=base.split(/\s+/).filter(x=>!(["ring-2","ring-1","ring-primary","ring-primary-container","opacity-60","opacity-70","bg-primary-container/60"].includes(x))).join(" ");
  return clean+(galleryIndex===index?" ring-2 ring-primary opacity-100":" opacity-70 hover:opacity-100")
 },[galleryIndex]);
 const optionClass=useCallback((kind,val,base)=>{
  const current={finish,strap:strapName,swatch,size,dial:dialMode,lookbook}[kind];
  const active=current===val;
  const clean=base.split(/\s+/).filter(x=>!["active","ring-2","border-2","border-secondary","bg-primary","bg-primary-container","text-on-primary","font-bold","shadow-sm"].includes(x)).join(" ");
  return clean+(active?" ring-2 ring-secondary bg-primary-container text-on-primary font-bold":" hover:ring-1 hover:ring-outline")
 },[finish,strapName,swatch,size,dialMode,lookbook]);
 const dialScreenClass=useCallback((mode,base)=>base.split(/\s+/).filter(x=>x!=="hidden").join(" ")+(mode===dialMode?"":" hidden"),[dialMode]);
 const navClass=useCallback((base,path)=>{
  const clean=base.split(/\s+/).filter(x=>!["bg-primary-container","text-on-primary","font-bold","rounded"].includes(x)).join(" ");
  return clean+(activePaths[variant]===path?" bg-primary-container text-on-primary font-bold rounded":"")
 },[variant]);
 const value=useMemo(()=>({variant,productTitle:data.title,activePath:activePaths[variant],galleryImages,thumbs:data.gallery_thumbs,cart,wishlist,
  galleryIndex,setGallery,shiftGallery,galleryCounter:`0${galleryIndex+1} / 0${Math.max(galleryImages.length,1)}`,galleryButtonClass,
  finish,setFinish,dialName,setDialName,strapName,setStrapName,size,setSize,sizeLabel:variant===3?(size==="44mm"?"44mm Extreme Display":"42mm Compact Ergonomic"):size+(size==="40mm"?" (Standard Fit)":" (Custom Lugs)"),
  dialMode,dialLabel,setDialMode,dialScreenClass,swatch,setSwatch,optionClass,qty,adjustQty,faqOpen,toggleFaq,pin,setPin,checkPin,deliveryFeedback,
  wrist,setWrist,wristLabel:`${wrist} mm (${wrist>=170?"Recommended: 44mm Chassis":"Recommended: 42mm Chassis"})`,lookbook,setLookbook,lookbookCaption:lookbookCaptions[lookbook],
  lookbookImage:null,monogramOpen,toggleMonogram,monogram,setMonogram,suggestionOffset,shiftSuggestions,suggestionOrder,lume,toggleLume,zoom,toggleZoom,search,setSearch,toast,notify,clearToast,
  collectionRef,scrollCollection,cartCount:cart.length+2,wishlistCount:wishlist.length+3,addCart,toggleWishlist,resetOptions,navClass
 }),[variant,data,cart,wishlist,galleryImages,galleryIndex,setGallery,shiftGallery,galleryButtonClass,finish,dialName,strapName,size,dialMode,dialLabel,swatch,optionClass,qty,
  adjustQty,faqOpen,toggleFaq,pin,checkPin,deliveryFeedback,wrist,lookbook,monogramOpen,toggleMonogram,monogram,suggestionOffset,shiftSuggestions,suggestionOrder,lume,toggleLume,zoom,toggleZoom,search,toast,
  notify,clearToast,scrollCollection,addCart,toggleWishlist,resetOptions,navClass,dialScreenClass]);
 return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}
export function useProduct(){const ui=useContext(ProductContext);if(!ui)throw new Error("ProductProvider not mounted");return ui;}
