import { useState ,useRef, useEffect} from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Project1 from './Components/Projects/Project1'


import {motion,AnimatePresence, useAnimationControls,useInView, useScroll} from 'framer-motion'

import { Canvas } from "@react-three/fiber";
 
import {  useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import './App.css'

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1800), { radius: 1.5 }))
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


function App() {

  const controls = useAnimationControls()

   const handleClick=()=>{
    controls.start('bounce')
   }

   const ref= useRef(null)
   const isInView = useInView(ref)

   const {scrollYProgress}= useScroll()
 
   

  return (
    <div >
      <div>
      <div className='w-full h-[200%] absolute inset-0' id='stars-div'>
<Canvas camera={{ position: [0, 0, 1] }}>
      <Stars  />
    </Canvas>
</div>  
       
      <section  id="Homepage" className=''>
      
        <Header/>
       
        <Hero/>
       </section>
       <section id="Skills" className=''>
        <Skills/>
        </section> 
      </div>
    
       


       <div id='Projects-Container'>
       <Project1/>
       </div>
        
       
    
       
    </div>
  )
}

export default App


