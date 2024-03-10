'use client'
import React, { useEffect, useRef } from 'react'
import bikersblur from '../../public/bikers.jpg'
import canyon from '../../public/canyon.jpg'
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


export default function Landing() {

  const phrase = 'TAKE CHARGE OF YOUR HEALTH'
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  useEffect( () => {
    gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
    requestAnimationFrame(animate);
  }, [])

  let direction = -1;



  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.015 * direction;
  }

  return (

    <div className ='relative overflow-hidden h-[20vh] ml-[71px] mr-[71px]'> 
      <div className='absolute top-20'>
        <div ref={slider} className='relative whitespace-nowrap'>
          <p ref={firstText} className='relative m-0 text-white text-9xl pr-12 font-bold'>{phrase}</p>
          <p ref={secondText} className='absolute left-full top-0 text-white text-9xl pr-12 font-bold'>{phrase}</p>
        </div>
      </div>
    
    </div>
  )
}
