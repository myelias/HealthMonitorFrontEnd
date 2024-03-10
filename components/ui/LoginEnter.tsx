import { motion } from 'framer-motion'
import React from 'react'

export default function LoginEnter({action}) {
  return (
  //  <motion.button className="btn relative flex items-center justify-start overflow-hidden transition-all w-[150px] h-[70px] rounded-3xl bg-white hover:bg-white group">  {/* purple box */}  
  //   <motion.span className="w-full h-full bg-purple-600 rounded-3xl absolute ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1 group-hover:-translate-y-full"></motion.span>  
  //   <motion.span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">    hover effect 2  </motion.span>
  //  </motion.button>

  <motion.button className="absolute flex items-center justify-center  rounded-3xl transition-all w-[150px] h-[50px] overflow-hidden bg-transparent group text-white"> 
    <motion.span className="w-full h-full rounded-3xl text-xl flex items-center border-gray-400 border-2 justify-center absolute ease-out duration-300 group-hover:scale-[0.66]"> {action} </motion.span>  
    <motion.span className="w-[90%] h-[90%] flex items-center justify-center bg-gradient-to-br text-xl font-semibold text-zinc-900 from-[#693fe6] to-[#A356F6] rounded-3xl duration-200 top-full absolute z-10 group-hover:-translate-y-full group-hover:scale-90"> LOGIN</motion.span>  
  </motion.button>
  )
}

