import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'


export default function ChartCard() {
    const chartref = useRef(null)
    const isInView = useInView( chartref, {once: false, margin: '-15%'})
    const animation = {
        enter: ({y: "10%", transition: {duration: 1.7, ease: [0.33, 1, 0.68, 1], delay: .1 }}),
        leave:  ({y: "-100%", transition: {duration: 1.7, ease: [0.33, 1, 0.68, 1], delay: .1 }}),
      }

    return(
        <div className='relative top-10 w-full h-1/2 overflow-hidden' ref={chartref}>
            <motion.div className='w-1/2 h-60 bg-gradient-to-br from-[#693fe6] to-[#983dfa] rounded-3xl relative' variants={animation} initial="leave" animate={isInView? "enter" : "leave" }>
                HELLO
            </motion.div>
        </div>
    )
}