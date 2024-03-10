'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import NavContent from './NavContent';

export default function NavMenu() {
    const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}
    const backgroundTransition = {duration: 1, ease: [0.76, 0, 0.24, 1]}
    const [isActive, setIsActive] = useState(false);
    const opacity = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {duration: 0.35}
        },
        closed: {
            opacity: 0,
            transition: {duration: 0.35}
        }
    }

    const background = {
        initial: {
            height: 0
        },
        open: {
            height: "100vh",
            transition,
        },
        closed: {
            height: 0,
            transition,
        }
    }
    

    return (
            <div className='fixed w-full p-[27px] box-border top-0 bg-gradient-to-r from-[#693fe6] to-[#a936e7] rounded-b-lg'>
                <div className='relative flex justify-center items-center'>
                    <div onClick={() => {setIsActive(!isActive)}} className='flex items-center justify-center gap-2 cursor-pointer'>

                        {/* <div className={`${'w-[22.5px] absolute pointer-events-none h-[1px] block bg-white transition-all duration-500 top-[6px]'} ${isActive ? '-rotate-45 origin-bottom-left top-[1px]' : ""}`}></div>
                        <div className={`${'w-[22.5px] absolute pointer-events-none h-[1px] block bg-white transition-all duration-500 top-[-6px]'} ${isActive ? 'rotate-45 origin-top-left top-[-1px]' : ""}`}> </div>  */}
                    
                        <div className='fixed flex items-center h-full'>
                            <motion.p className='absolute text-white font-semibold' variants={opacity} animate={!isActive ? "open" : "closed"}>Learn</motion.p>
                            <motion.p className='absolute  opacity-0 text-white font-semibold' variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                        </div>
                    </div>
                </div>
                <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className='absolute top-full left-0 w-full h-full backdrop-blur-xl'></motion.div>
                <AnimatePresence mode="wait">
                    {isActive && <NavContent/>}
                </AnimatePresence>
            </div>

    )
}

