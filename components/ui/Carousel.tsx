"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Image from 'next/image'
import runner from '../../public/runner.jpeg'


export default function Carousel() {
  const carouselDivs = [1,2,3,4,5]
 
  return (
    <div>
      <motion.div className = 'cursor-pointer h-1/2 top-1/2 mx-60 overflow-x-scroll'>
        <motion.div className=' box-content flex h-full w-full' drag="x">
          {carouselDivs.map(n  => {
            return(
            <motion.div key={n} className='min-w-80 rounded-xl bg-slate-400 text-black px-9'>
              <Image
                src={runner}
                alt="Picture of the runner"
                className='rounded-xl h-full w-full pointer-events-none'
            />
            </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

