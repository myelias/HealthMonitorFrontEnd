"use client"
import Image from "next/image"
import React, { useRef, useState} from "react"
import { motion, useTransform, useScroll, AnimatePresence} from "framer-motion"
import HeartChartEx from "./HeartChartEx"
import canyon from '../../public/canyon.jpg'
import Landing from "./Landing"
import SubParagraph from "./SubParagraph"

export default function ParallaxScroll() {
    const [showTitle, setShowTitle] = useState(true)

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "start end"], 
    });
    const BackgroundY = useTransform(scrollYProgress, [0,1], ["0%", "70%"]); // was 200%
    const BackgroundY2 = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  
    return (
            <div ref={ref} className="relative bg-zinc-900">
                {/* <motion.div className=" text-white text-8xl font-medium absolute ml-12 top-1/2" style={{y: BackgroundY2}}>PARALLAX SCROLL</motion.div> */}
                {/* <div className='absolute'>
                    <SubParagraph value={'DESIGN YOUR FITNESS JOURNEY'} fontSize={50}/>
                </div> */}
                <motion.section className='relative w-full flex items-center justify-center' style = {{y: BackgroundY}}>
                    <Image
                        src = {canyon}
                        alt='canyon'
                        className='rounded-3xl w-11/12 mt-10'
                    />
                    <div className="absolute bottom-8 h-[20vh] w-full">
                        <Landing />
                    </div>
                </motion.section>
            </div>
  )
}
