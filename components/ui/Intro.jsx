'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import bikersblur from '../../public/bikers.jpg'
import triathalon from '../../public/traithalon.jpg'
import olympic from '../../public/olympicbiker.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const backgroundImage = useRef(null);
    const introBackground = useRef(null);
    const container = useRef(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    target: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        })
    }, [])
  return (
  
  <div className='w-full flex relative justify-center'>
            {/*<div className='w-full relative h-[140vh]' ref={container}>
                
            </div>
            <div className='flex justify-center relative mt-[35vh]'>
                    <div ref={introBackground} data-scroll data-scroll-speed="0.7">
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7" className=' object-cover text-9xl font-bold text-slate-50 '>SMOOTH SCROLL</h1>
  </div>*/}
        </div>
  )
}
