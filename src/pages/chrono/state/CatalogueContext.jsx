import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
const Context=createContext(null);
const firstSort={
  1:"Featured Chronometry", 2:"Featured Calibration",3:"Battery Endurance (High - Low)",
  4:"Curated Horology",5:"Curator's Recommendation"
};
export function CatalogueProvider({children,variant,cart,setCart,wishlist,setWishlist,onNavigateToProductDetail}){
 const [category,setCategory]=useState("all");
 const [palette,setPalette]=useState("all");
 const [hero,setHero]=useState("Automatic Watches");
 const [mode,setMode]=useState("all");
 const [sort,setSort]=useState(firstSort[variant]);
 const [query,setQuery]=useState("");
 const [filtersOpen,setFiltersOpen]=useState(variant!==4);
 const [density,setDensity]=useState(4);
 const [quickView,setQuickView]=useState(null);
 const [toast,setToast]=useState(null);
 const recentRef=useRef(null),lookbookRef=useRef(null),sequence=useRef(0);
 const notify=useCallback(message=>{setToast({message,id:++sequence.current});},[]);
 const clearToast=useCallback(()=>setToast(null),[]);
 const toggleWishlist=useCallback(name=>{
   setWishlist(prev=>prev.includes(name)?prev.filter(x=>x!==name):[...prev,name]);
   notify(`${name} — wishlist updated (preview)`);
 },[setWishlist,notify]);
 const addCart=useCallback(name=>{
  setCart(prev=>[...prev,name]);notify(`${name} added to preview cart`);
 },[setCart,notify]);
 const openQuickView=useCallback(item=>{
  if(onNavigateToProductDetail){
   onNavigateToProductDetail(item);
  }else{
   setQuickView(item);
  }
 },[onNavigateToProductDetail]);
 const closeQuickView=useCallback(()=>setQuickView(null),[]);
 const addModalToCart=useCallback(()=>{if(quickView){addCart(quickView.title);setQuickView(null)}},[quickView,addCart]);
 const toggleFilters=useCallback(()=>setFiltersOpen(prev=>!prev),[]);
 const scrollRecent=useCallback(dx=>recentRef.current?.scrollBy({left:dx,behavior:"smooth"}),[]);
 const scrollLookbook=useCallback(dx=>lookbookRef.current?.scrollBy({left:dx,behavior:"smooth"}),[]);
 const resetFilters=useCallback(()=>{setCategory("all");setPalette("all");setQuery("");setSort(firstSort[variant])},[variant]);
 const sortOrder=useCallback((price,index)=>{
  const s=sort.toLowerCase();
  if(s.includes("low to high")||s.includes("low to")||s.includes("accessible to"))return price;
  if(s.includes("high to low")||s.includes("haute to accessible"))return -price;
  return index;
 },[sort]);
 const activeClass=useCallback((type,key,base)=>{
  const active=type==="hero"?hero===key:type==="palette"?palette===key:type==="density"?density===Number(key):type==="mode"?mode===key:category===key;
  const stripped=base.split(/\s+/).filter(x=>!['bg-primary','text-on-primary','bg-primary-container','text-on-surface-variant','bg-surface-container','bg-surface-container-low','bg-surface-container-high','font-bold','active','active-filter','shadow-sm'].includes(x)).join(" ");
  return stripped+(active?" bg-primary text-on-primary font-bold shadow-sm":" bg-surface-container-low text-on-surface-variant hover:bg-surface-container");
 },[hero,palette,density,category,mode]);
 const productClass=useCallback((base,title,description="",tags="",color="")=>{
  let pass=!query||(`${title} ${description}`).toLowerCase().includes(query.toLowerCase());
  if(variant===5){
   pass=pass&&(category==="all"||tags.split(/\s+/).includes(category))&&(palette==="all"||palette===color);
  }
  if(variant===3 && mode!=="all"){
   const data=(title+" "+description).toLowerCase();
   const smart=/(smart|amoled|gps|ecg|sensor|fit|pulse|atlas)/.test(data);
   pass=pass&&(mode==="smart"?smart:!smart);
  }
  return base+" catalogue-product-card cursor-pointer"+(pass?"":" hidden");
 },[query,variant,category,palette,mode]);
 const gridClass=useCallback(base=>base.replace(/lg:grid-cols-[345]/g,"").concat(` lg:grid-cols-${filtersOpen?density:5}`),[density,filtersOpen]);
 const value=useMemo(()=>({variant,cart,wishlist,category,setCategory,palette,setPalette,hero,setHero,mode,setMode,sort,setSort,query,setQuery,
  filtersOpen,toggleFilters,density,setDensity,
  quickView,openQuickView,closeQuickView,addModalToCart,toast,notify,clearToast,toggleWishlist,addCart,scrollRecent,scrollLookbook,
  recentRef,lookbookRef,resetFilters,sortOrder,activeClass,productClass,gridClass,onNavigateToProductDetail
 }),[variant,cart,wishlist,category,palette,hero,mode,sort,query,filtersOpen,density,quickView,toast,
 notify,clearToast,toggleWishlist,addCart,openQuickView,closeQuickView,addModalToCart,toggleFilters,
 scrollRecent,scrollLookbook,resetFilters,sortOrder,activeClass,productClass,gridClass,onNavigateToProductDetail]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useCatalogue(){const ui=useContext(Context);if(!ui)throw new Error("CatalogueProvider missing");return ui;}
