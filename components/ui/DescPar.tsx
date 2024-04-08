'use client'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

export default function DescPar({description, fontSize, marginView}) {
    const body = useRef(null);
    const desc = description;
    const isInView = useInView(body, {once: false, margin: marginView})
    const fontVariant =
    {
        1: 'text-9xl font-normal text-gray-200 flex',
        2: 'text-4xl font-thin text-gray-200 flex',
        3: 'text-xl font-normal text-gray-200 flex'
    }
    const animation = {
      initial: {y: "102%"},
      enter: i => ({y: "0%", transition: {duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: 0.17 * i}}),
      leave: i => ({y: "-102%", transition: {duration: 0.35, ease: [0.33, 1, 0.68, 1],  delay: 0.17 * i}}),
    }
  
  
  
    return(
      <div ref={body} className={fontVariant[fontSize]}>
        {
          desc.map( (phrase, index) => {
            return <div key={index} className='overflow-hidden mr-3'>
              <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? "enter" : "leave"}>{phrase}</motion.p>
            </div>
          })
        }
      </div>
  
    )
}

