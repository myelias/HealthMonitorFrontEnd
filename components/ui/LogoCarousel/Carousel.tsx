'use client'
import React, { useEffect, useRef } from 'react'
import { useMeasure } from "@uidotdev/usehooks";
import fitbitlogo from '../../../public/Fitbit_Logo_White_RGB.png'
import garminlogo from '../../../public/Garmin_Logo With_Delta-white-low-res.png'
import whooplogo from '../../../public/WHOOP_Puck_White.svg'
import pelotonlogo from '../../../public/peloton_logo_rgb_ko.svg'
import { animate, motion, useMotionValue, useTime, useTransform } from 'framer-motion'
import Logos from './Logos'

export default function Carousel() {

  const [ref, { width }] = useMeasure();

  const xSlide = useMotionValue(0);

  useEffect(()=>{
    let slide;
    let finalposition = -width 
    slide = animate(xSlide, [0,finalposition],
      {
        ease:'linear',
        duration: 37,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });

      return (slide.complete);


  },[xSlide,width])

  const logos = [
    garminlogo,
    fitbitlogo,
    whooplogo,
    pelotonlogo
  ]
  return(
    <div className='relative w-full h-[30vh] overflow-hidden'>
      <div className='absolute w-2/3 h-full top-0 right-0 bg-gradient-to-r from-transparent to-zinc-900 z-10'/>
      <div className='absolute w-2/3 h-full top-0 left-0 bg-gradient-to-l from-transparent to-zinc-900 z-10'/>
      <motion.div className='absolute left-0 flex gap-x-4 w-full max-h-[30vh]' ref={ref} style={{x: xSlide}}>
        {logos.map((logos,index)=>(
          <Logos logo={logos} key={index}/>
        ))}
      </motion.div>
      <motion.div className='absolute left-full flex gap-x-4 w-full max-h-[30vh]' ref={ref} style={{x: xSlide}}>
        {logos.map((logos,index)=>(
          <Logos logo={logos} key={index}/>
        ))}
      </motion.div>
    </div>

  )
}
