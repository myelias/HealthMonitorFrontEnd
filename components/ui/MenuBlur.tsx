import { motion } from 'framer-motion'
import React from 'react'

export default function MenuBlur({isActive, setIsActive}) {

    const blur = {
        open: {  
            opacity: 1,
            transition: { duration: 0.50, delay:0.25, type: "tween", ease: [0.76, 0, 0.24, 1]},
            zIndex: 50
        },
    
        closed: {
            opacity: 0,
            transition: { duration: 0.50, delay: .50, type: "tween", ease: [0.76, 0, 0.24, 1]},
            zIndex:-1
        }
    }  

  return (
    <motion.div
                className='fixed top-0 left-0 w-full h-full backdrop-brightness-50'
                variants={blur}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
    </motion.div>
  )
}

