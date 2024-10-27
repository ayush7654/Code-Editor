import {useState} from 'react'
import { animate, motion  } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
import { easeIn } from 'framer-motion/dom'
import Resume from '../Resume/Resume'

const headerVariants={
  initial:{
    y:'-50%',
    opacity:0,
    height:'200%'
  },
  animate:{
    y:0,
    opacity:1,
   
    height:'15%',
    transition:{
      duration:2,
      
    }
  }
}
export default function Header() {

  const [contactOpen,setContactOpen]= useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false);

 
  return (
    <motion.div className='navbar' /* initial='initial' animate='animate' variants={headerVariants} */>
     <Sidebar/>
      <div className='nav-wrapper'>
      <div className=''></div> 
        <div className='header-links'> 
           <a href="https://github.com/ayush7654" target="_blank"><div className='head-link'><img src='/GithubLogo3.png'/></div> </a>
            <div onClick={()=>setContactOpen(prev=>!prev)} className='head-link'><img src='/MailLogo2.png'/></div> 
           <div className='head-link'><img src='/LinkedInLogo2.png'/></div> 
           <div className='resume-link' onClick={()=>setModalIsOpen(true)}>Resume</div>
         
          {/* social media links */}
        </div>
       <div style={{ display: contactOpen ? 'block' : 'none' }} className="contact-section">
 
  <form action="mailto:youremail@example.com" method="POST" enctype="text/plain">
    <label htmlFor="name">Name:</label>
    <input type="text" id="form-name" name="name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="form-email" name="email" required />

    <label htmlFor="message">Message:</label>
    <textarea id="form-message" name="message" required></textarea>

    <motion.button  whileTap={{scale:.97}} id='form-button' type="submit">Send Message</motion.button>
  </form>
</div> 

      </div>

      <div className='absolute'>
            
            <Resume isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} />
        </div>


    </motion.div>
  )
}
