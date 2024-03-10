import React, { useState } from 'react'
import MenuButton from './MenuButton';
import { motion } from 'framer-motion';

export default function Menu({isActive, setIsActive}) {

    const menu = {
        open: {  
            width: "480px", 
            height: "650px", 
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.50, type: "tween", ease: [0.76, 0, 0.24, 1]}
    
        },
    
        closed: {
            width: "60px",
            height: "60px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.50, delay: 0.25, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    
    }  


    return (
        
        <div className='fixed top-14 right-12 flex items-center justify-center'>
             <motion.div 
                className=' bg-gradient-to-br from-[#693fe6] to-[#A356F6] rounded-3xl relative'
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
            </motion.div>
            <MenuButton isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>

        </div>

    )
}
