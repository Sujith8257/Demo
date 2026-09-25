import { motion, useReducedMotion } from "motion/react";

const OPTIONS=[
  {id:1,caption:"Classic",label:"Design 1"},
  {id:2,caption:"Sport",label:"Design 2"},
  {id:3,caption:"Nocturne",label:"Design 3"},
  {id:4,caption:"Manifest",label:"Design 4"},
  {id:5,caption:"Gifting",label:"Design 5"},
];
export default function DesignTaskbar({active,onChange,onNavigateHome}){
  const reduced=useReducedMotion();
  return <nav aria-label="Switch cart designs" className="design-taskbar">
    <div className="design-taskbar__inner">
      <div className="design-taskbar__label"><span style={{color:'#ffdea6'}}>AMIHIVE</span><br/>DESIGN PREVIEW</div>
      {onNavigateHome && (
        <button type="button" onClick={onNavigateHome} title="Back to Home" style={{marginRight:4,borderRight:'1px solid #5e7774',paddingRight:12}}>
          <span className="sm:hidden">←</span>
          <span className="hidden sm:inline">← Home</span>
        </button>
      )}
      {OPTIONS.map(design=><button type="button" key={design.id} aria-pressed={active===design.id}
        title={design.caption} onClick={()=>onChange(design.id)}>
        {active===design.id&&<motion.div layoutId="active-design" aria-hidden="true"
          initial={false} transition={reduced?{duration:0}:{type:'spring',stiffness:410,damping:32}}
          style={{position:'absolute',inset:0,zIndex:0,background:'#ffdea6',borderRadius:13}}/>}
        <span className="sm:hidden">{design.id}</span>
        <span className="hidden sm:inline">{design.label}</span>
      </button>)}
    </div>
  </nav>;
}
