import {useEffect,useState} from "react";
export default function Countdown(){
  const [seconds,setSeconds]=useState(28*60+40);
  useEffect(()=>{
    const timer=setInterval(()=>setSeconds(s=>s<=0?0:s-1),1000);
    return ()=>clearInterval(timer);
  },[]);
  return <>{String(Math.floor(seconds/60)).padStart(2,"0")}:{String(seconds%60).padStart(2,"0")}</>;
}
