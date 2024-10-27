import {useState} from 'react'
import { animate, motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Item10 } from "../../Item10";

import { Item4 } from "../../Item4";
import { transition } from 'three/webgpu';

const skillVariant={
  initial:{
    x:0,y:0,opacity:.5,scale:1.3
  },
  animate:{
    x:0,opacity:.9,scale:1,transition:{duration:1}
  }
}
export default function SkillContainer() {


    const [currentSkill,setCurrentSkill]= useState('SKILLS')

    console.log(currentSkill)
  return (
    <div className='skills-Container'>
    
    <div   className="circle-container">
      <div className='skill-title-container'>
        <div className='skill-title'>SKILLS</div>
        <div className='animation-home' >
        <Canvas>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Item4/>
      
    </Canvas>
    
        </div>
        </div>
      
      <div className='skill-plates'>
<motion.div  initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}} onHoverStart={()=>setCurrentSkill('CSS')} onHoverEnd={()=>setCurrentSkill('SKILLS')}   id={'CSSlogo'} className="circle-item"><img className='z=-1' src='/css-3-logo.svg' width='100px'/></motion.div>
<motion.div   initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}  onHoverStart={()=>setCurrentSkill('HTML')} onHoverEnd={()=>setCurrentSkill('SKILLS')}     id='HTMLlogo' className="circle-item"><img src='/html-logo.svg' width='100px'/></motion.div>
<motion.div    initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('JavaScript')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}  id='JSlogo' className="circle-item"><img src='/javascript-logo.svg' width='100px'/></motion.div>
<motion.div  initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('React')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}   id='Reactlogo' className="circle-item"><img src='/ReactLogo-Photoroom.png' width='300px'/></motion.div>
<motion.div  initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('TypeScript')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}  id='TSlogo' className="circle-item"><img src='/typescript-logo.svg' width='120px'/></motion.div>
<motion.div initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('Tailwind')}  onHoverEnd={()=>setCurrentSkill('SKILLS')} id='Tailwindlogo' className="circle-item"><img src='/tailwind-logo.svg' width='100px'/></motion.div>
<motion.div initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}  onHoverStart={()=>setCurrentSkill('Firebase')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}  id='Firebaselogo' className="circle-item"><img src='/firebaseLogo2.png' width='70px'/></motion.div>
<motion.div initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('React Router DOM')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}  id='Routerlogo' className="circle-item"><img src='/ReactRouterLogo.png' width='100px'/></motion.div>
<motion.div  initial='initial' whileInView='animate' viewport={{ once: true }} variants={skillVariant} whileHover={{scale:1.05}}   onHoverStart={()=>setCurrentSkill('Git')}  onHoverEnd={()=>setCurrentSkill('SKILLS')}  id='Gitlogo' className="circle-item"><img src='/gitLogo2.png' width='80px'/></motion.div>
</div>
 <div id='skills-middle' ></div> 

</div>
 
     </div>
  )
}
