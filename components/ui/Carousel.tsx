"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import image from 'next/image'



export default function Carousel() {
  const carouselDivs = [1,2,3,4,5]
 
  return (
    <div>
      <motion.div className = 'absolute h-1/4 top-1/2'>
        <motion.div className=' box-content display-flex h-full w-[400px] absolute -left-16 bottom-16'>
          {carouselDivs.map(n  => {
            return(
            <motion.div className='h-full w-full rounded-xl bg-inherit'>{n}</motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

