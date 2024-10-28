import '../../index.css'
import { motion } from 'framer-motion';
import SkillContainer from './SkillContainer';
import './Skills.css'



export default function Skills() {





   
  return (
    <div className='skills' >
        <SkillContainer/>
       
  <motion.div viewport={{ once: true }} initial={{x:-700,y:-100}} whileInView={{x:-400,y:-100}} transition={{duration:8,delay:1}} className='planet1'>
   
     <img src='/planet1.png'/></motion.div>
<motion.div viewport={{ once: true }} initial={{x:600,y:400}} whileInView={{x:400,y:150}} transition={{duration:8,delay:1}} className='planet2'>
    
    <img src='/planet2.png' />
    </motion.div>

<motion.div viewport={{ once: true }} initial={{x:600 ,y:-300}} whileInView={{x:400,y:-200}} transition={{duration:8,delay:1}} className='planet3'>
    <img src='/planet3.png' />
     </motion.div>
<motion.div viewport={{ once: true }} initial={{x:-600 ,y:0}} whileInView={{x:-500}} transition={{duration:8,delay:1}}  className='planet4'>
     
     <img src='/planet4.png' />
     </motion.div>
     <motion.div viewport={{ once: true }} initial={{x:200 ,y:-450}} whileInView={{x:200,y:-380}} transition={{duration:8,delay:1}}  className='planet5'>
     
     <img src='/planet5.png' />
     </motion.div>  

     <div  className='planet4-sm'>
    
    <img src='/planet4.png' />
    </div> 

    <div  className='planet3-sm'>
    
    <img src='/planet3.png' />
    </div> 

    </div>
  )
}

