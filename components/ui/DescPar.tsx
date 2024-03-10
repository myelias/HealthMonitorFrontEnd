import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

export default function DescPar({description}) {
    const body = useRef(null);
    const desc = description;
    const isInView = useInView(body, {once: false,})
  
    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.3 * i}})
    }
  
  
  
    return(
      <div ref={body} className='text-xs text-white'>
        {
          desc.map( (phrase, index) => {
            return <div key={index} className='overflow-hidden'>
              <motion.p className='font-semibold' custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div>
  
    )
}

