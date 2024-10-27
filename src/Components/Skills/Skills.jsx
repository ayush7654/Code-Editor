import '../../index.css'
import { motion } from 'framer-motion';
import SkillContainer from './SkillContainer';
import './Skills.css'



export default function Skills() {



/* const skills = [
    { id: 'CSSlogo', name: 'CSS', src: '/css-3-logo.svg', size: '100px', x: -350 },
    { id: 'HTMLlogo', name: 'HTML', src: '/html-logo.svg', size: '100px', x: 300 },
    { id: 'JSlogo', name: 'JavaScript', src: '/javascript-logo.svg', size: '100px', x: -360 },
    { id: 'Reactlogo', name: 'React', src: '/ReactLogo-Photoroom.png', size: '300px', x: 350 },
    { id: 'TSlogo', name: 'TypeScript', src: '/typescript-logo.svg', size: '120px', x: 100 },
    { id: 'Tailwindlogo', name: 'Tailwind', src: '/tailwind-logo.svg', size: '100px', x: -400 },
    { id: 'Firebaselogo', name: 'Firebase', src: '/firebaseLogo2.png', size: '70px', x: 600 },
    { id: 'Routerlogo', name: 'React Router DOM', src: '/ReactRouterLogo.png', size: '100px', x: -600 },
    { id: 'Gitlogo', name: 'Git', src: '/gitLogo2.png', size: '80px', x: 0 }
  ];
 */

   
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

    </div>
  )
}

