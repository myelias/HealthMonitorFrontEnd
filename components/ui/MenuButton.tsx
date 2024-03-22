import { animate, cubicBezier, motion } from 'framer-motion'
import React from 'react'


export default function LoginButton({isActive, toggleMenu}) {
return(
    <div className='absolute w-[60px] h-[60px] top-0 right-0 overflow-hidden rounded-2xl cursor-pointer'>
        <motion.div 
            className='relative w-full h-full'
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: .9, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className='w-full h-full'
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className='w-full h-full'
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
)

}

function PerspectiveText({label}) {
    return (    
        <div className='flex flex-col justify-center items-center h-full w-full transition-transform group'>
            <p className=' transition-all text-zinc-900 font-bold '>{label}</p> 
            {/* <p className=' absolute top-full text-zinc-900 font-bold'>{label}</p> */}
        </div>
    )
}
