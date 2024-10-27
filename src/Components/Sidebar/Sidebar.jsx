import {useState} from 'react'
import './Sidebar.css'
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import { motion } from 'framer-motion' 


const variants={
    open:{
        clipPath:'circle(1200px at 40px 40px)',
        transition:{
            type:"spring",
            stiffness:20,
        }
    },
    closed:{
        clipPath:'circle(25px at 30px 45px)',
        transition:{
            delay:0.5,
            type:'spring',
            stiffness:400,
        damping:40,            }
    }
}
export default function Sidebar() {

    const[ open,setOpen]= useState(false)
    
  return (
    <motion.div className='sidebar' animate={open?'open':"closed"}>
        <motion.div className='bg' variants={variants}>
            <Links/>
        </motion.div>
        <div className='toggleBtn-container'>
        <ToggleButton setOpen={setOpen}/>
        </div>
        
    </motion.div>
  )
}
