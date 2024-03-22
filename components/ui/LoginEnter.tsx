import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function LoginEnter({action, buttonSize}) {

  const buttonSizeSet = {
    small: "relative flex items-center justify-center rounded-2xl transition-all w-[150px] h-[50px] overflow-hidden bg-transparent group text-white",
    large: "relative flex items-center justify-center rounded-2xl transition-all w-[200px] h-[50px] overflow-hidden bg-transparent group text-white"
  }

  const body = useRef(null);
  const isInView = useInView(body, {once: false, margin: '-15%'})
  const animation = {
    initial: {y: "100%"},
    enter: ({y: "0%", transition: {duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: .1 }}),
    leave:  ({y: "-100%", transition: {duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: .1 }}),
  }

  return (
  <div className='relative overflow-hidden' ref={body}>
    <motion.button className= {buttonSizeSet[buttonSize]} variants={animation} initial="initial" animate={isInView ? "enter" : "leave"}> 
      <motion.span className="w-full h-full rounded-2xl text-xl flex items-center border-gray-400 border-2 justify-center absolute ease-out duration-300 group-hover:scale-[0.66]"> {action} </motion.span>  
      <motion.span className="w-[90%] h-[90%] flex items-center justify-center bg-gradient-to-br text-xl font-semibold text-zinc-900 from-[#693fe6] to-[#983dfa] rounded-2xl duration-200 top-full absolute z-10 group-hover:-translate-y-full group-hover:scale-90">{action}</motion.span>  
    </motion.button>
  </div>
  )
}

