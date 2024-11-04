import {useRef , useState} from 'react'
import { motion , useScroll, useSpring, useTransform} from 'framer-motion'
import { Canvas } from "@react-three/fiber";
import { Item7 } from "../../Item7";
import './Projects.css'






const items=[
    {
        id:1,
        title:"CINEQuest",
        img:'CQHome.png',
        img2:'CQDetails.png',
        img3:'CQList.png',
        description:'With its user-friendly design and extensive database of films, CINEQuest serves as both a movie tracking tool and a vibrant social platform for sharing film experiences.Users can discover new films through curated recommendations and engage in discussions about their favorite movies',
        tools:['React','TypeScript','Tailwind CSS'],
        link:"https://github.com/ayush7654/CineQuest",
        live:"https://cine-quest-two.vercel.app/"
     },
    {
        id:2,
        title:"QuickMart",
        img:"QMHome.png",
        img2:"QMStore2.png",
        img3:"QMDetails.png",
        description:'QuickMart is a versatile shopping app that offers a wide selection of products. Users can browse items, create shopping lists, and make secure payments. With real-time order tracking and exclusive discounts, QuickMart simplifies the shopping experience for all types of essentials.',
        tools:['React','JavaScript','CSS','Firebase'],
        link:"https://github.com/ayush7654/QuickMart",
        live:"https://quick-mart-dgou.vercel.app/"
    },
    {
        id:3,
        title:"Code Editor",
        img:'CodeEditor.png',
        img2:'CodeEditorImg2.png',
        img3:'CodeEditorImg3.png',
        description:'A simple and lightweight code editor designed for developers, offering real-time syntax highlighting, multi-language support, and seamless integration with Git. Boost productivity with customizable themes and keyboard shortcuts. Perfect for coding on the go or in a full development environment.',
        tools:['React','JavaScript','CSS'],
        link:"https://github.com/ayush7654/CodeEditor",
        live:"https://code-editor-ivory-alpha.vercel.app/"
    },
]

const Single=({item})=>{

    const[clickedImg,setClickedImg]= useState('')

   

    return (
        <section id='Projects' className='h-screen'>
     
           
            <div className='project-container'>
                <div className={clickedImg?'modal-overlay':'modal-overlay-hidden'}></div>
                <div className="project-wrapper">
                    <div className='project-content' style={{}}>
                    <div className='project-imageContainer' >
                    
                    <motion.img  viewport={{ once: true }} initial={{scale:1.3}} whileInView={{scale:1}} transition={{duration:1}} whileHover={{scale:1.1,transition:{duration:.5}}}  className='websiteImg' src={item.img} onClick={()=>setClickedImg(item.img)}/>
                    <motion.img viewport={{ once: true }} initial={{scale:1.3}} whileInView={{scale:1}} transition={{duration:1}} whileHover={{scale:1.1,transition:{duration:.5}}} className='websiteImg2' src={item.img2} onClick={()=>setClickedImg(item.img2)}/>
                    <motion.img  viewport={{ once: true }} initial={{scale:1.3}} whileInView={{scale:1}} transition={{duration:1}} whileHover={{scale:1.1,transition:{duration:.5}}} className='websiteImg3' src={item.img3} onClick={()=>setClickedImg(item.img3)}/>
                    </div>
                <motion.div viewport={{ once: true }}  initial={{opacity:.2}} whileInView={{opacity:1}} transition={{opacity:{duration:1.5,delay:.3}}}  className="textContainer">
                    <div className='textContent'>
                    <h2 className=''>{item.title}</h2>
                    <p>{item.description}</p>
                    <div>
                        <div className='project-tools'>Tools: {item.tools.map((tool)=><div key={tool} >{tool}</div>)}</div>
                       
                    </div >
                    <div className='flex flex-row justify-around'>
                  <a href={item.link} target='blank' className='project-btn'>Code</a> 
                    <a href={item.live} target='blank' className='project-btn' style={{backgroundColor:'#459fa169 '}}>Live </a>
                    </div>
                   
                    
                    </div>
                  
                </motion.div>
                    </div>
              
                </div>
               <div className={clickedImg?'enlargedImg':'enlargedImg-hidden'}>
                <div className='cancel-btn' onClick={()=>setClickedImg('')}>X</div>
                    <img src={clickedImg}/>
                </div> 
              
            </div>

            
        </section>
    )
}
export default function Project1() {

    const ref=useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});
    const ScaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
  
    
  return (
    <div className='project1' ref={ref}>
        <div className='progress'>
            <div className='project-title-container'>
            <div className='project-title'>PROJECTS</div>
            <div className='projects-animation' >
           
          
        <Canvas>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Item7/>
      
    </Canvas>
    
        </div>
        </div>
            <motion.div style={{scaleX:ScaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}

    </div>
  )
}




