import { motion, useReducedMotion } from "motion/react";
export default function RevealSection({children,...props}){
 const reduced=useReducedMotion();
 return <motion.section {...props}
  initial={reduced?false:{opacity:0,y:12}} whileInView={{opacity:1,y:0}}
  viewport={{once:true,amount:.04,margin:"0px 0px -25px 0px"}}
  transition={{duration:.48,ease:[.22,1,.36,1]}}>{children}</motion.section>;
}
