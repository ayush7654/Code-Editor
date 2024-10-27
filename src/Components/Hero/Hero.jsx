import React from 'react'
import './Hero.css'
import { animate, motion } from 'framer-motion'

import { Item10 } from "../../Item10";
import { Item4 } from "../../Item4";


import Skills from '../Skills/Skills'

import Resume from '../Resume/Resume'



import { Canvas } from "@react-three/fiber";
 import { useState, useRef } from 'react'
import {  useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
 







const textVariants={
    initial:{
        
        
        scale:2,
        
    },
    animate:{
        
        
        scale:1,
        transition:{
            delay:1.5,
            duration:3,
            type:'ease-in-out'
           /*  staggerChildren:0.1 */

    },
}
}
const sliderVariants={
    initial:{
        x:0,
        
    },
    animate:{
        x:'-220%',
        transition:{
         /*    repeat:Infinity, */
            repeatType:'mirror',
            duration:20
            

    },
}
}





export default function Hero() {


  return (
    <div className='hero'>
      
     
 
        <div className="hero-wrapper">
     
        <div  className="hero-textContainer">
        <div className='hero-title'>                               
            <motion.div initial={{scale:3, opacity:0,filter:'blur(3px)'}} animate={{scale:1,opacity:1,filter:'blur(0)'}} transition={{duration:2,delay:1}}  className='hero-title-content-line1'>FRONT-END</motion.div>
            <div className='hero-title-content-line2'>
               <motion.div initial={{scale:3, opacity:0,filter:'blur(3px)'}} animate={{scale:1,opacity:1,filter:'blur(0)'}} transition={{duration:2,delay:1}}  className='hero-line2-A'> DEVEL</motion.div> 
              <div className='animation-title' >
        <Canvas>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Item10 />
      
    </Canvas>
    
        </div>
        <motion.div initial={{scale:3, opacity:0,filter:'blur(3px)'}} animate={{scale:1,opacity:1,filter:'blur(0)'}} transition={{duration:2,delay:1}}  className='hero-line2-B'>PER</motion.div>

        </div>
            
        </div>
        <motion.div  initial={{scale:3, opacity:0,filter:'blur(3px)'}} animate={{scale:1,opacity:1,filter:'blur(0)'}} transition={{duration:2,delay:1}}  className='hero-name'>AYUSH SHRIVASTAVA</motion.div>
        
          
        
        </div>
      
       
           
         <div className='imageContainer'>
          <div className='hero-img-content'>
        
          </div>

        </div> 
       
        </div>
       {/*  <motion.div className="slidingText" initial='initial' animate='animate' variants={sliderVariants}>
            Something 
        </motion.div> */}
        
      
    </div>
  )
}

function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(2400), { radius: 1.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  } 