"use client"
import Image from "next/image"
import React, { useRef } from "react"
import { motion, useTransform, useScroll} from "framer-motion"


export default function ParallaxScroll() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "start end"],
    });
    const BackgroundY = useTransform(scrollYProgress, [0,1], ["0%", "300%"]);
    const BackgroundY2 = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);
  
    return (
    <section ref = {ref}
     className='w-full h-full relative bg-black'>
        <motion.h1 className='absolute top-[20px] w-full text-8xl text-center font-bold text-slate-50' style = {{y: BackgroundY}}> 
            With any device
        </motion.h1>
        {/*<motion.div className='absolute bg-slate-400 z-10 w-screen h-full top-1/2' style = {{y: BackgroundY2}} >
            New page here
        </motion.div>*/}
        {/* bg-[#6527f5]  */}
    </section>
  )
}
