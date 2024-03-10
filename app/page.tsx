'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import ParallaxScroll from '@/components/ui/ParallaxScroll';
import SubParagraph from '@/components/ui/SubParagraph';
import Head from 'next/head';
import canyon from '../public/canyon.jpg'
import { motion } from "framer-motion"
import Reac, { useState } from 'react';
import Carousel from '@/components/ui/Carousel';
import HeartChartEx from '@/components/ui/HeartChartEx';
import LocoScroll from '@/components/ui/LocoScroll';
import Landing from '@/components/ui/Landing';
import MenuButton from '@/components/ui/MenuButton';
import Menu from '@/components/ui/Menu';
import NavMenu from '@/components/ui/NavMenu';
import Cursor from '@/components/ui/Cursor';
import LoginButton from '@/components/ui/MenuButton';
import LoginEnter from '@/components/ui/LoginEnter';
import MenuBlur from '@/components/ui/MenuBlur';
import DescPar from '@/components/ui/DescPar';

const inter = Inter({subsets: ["latin"]});
const description = ['AI powered health metrics from your wearable devices','Any metric', 'Any device.']
export default function Home() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <main className='relative h-full w-full bg-zinc-900'>
      <MenuBlur isActive={isActive} setIsActive={setIsActive}/>
      <section className = 'relative h-[60vh]'>

        <div className='absolute top-1/3 right-9 z-50'>
          <Menu isActive={isActive} setIsActive={setIsActive}/>
        </div>
        <div className='relative ml-36 top-[30%]'>
          <SubParagraph value={'DESIGN YOUR FITNESS JOURNEY'} fontSize={500}/>
          <div className='relative top-[32%] left-0'>
            <DescPar description={description}/>
          </div>
          <div className='relative top-[45%] left-0'>
            <LoginEnter action={"LOGIN"}/>
          </div>
          <div className='relative top-[45%] left-44'>
            <LoginEnter action={"SIGN UP"}/>
          </div>
        </div>
      </section>
        
      <ParallaxScroll/>
      <section id='intro' className='bg-zinc-900 relative'>
        <LocoScroll/>
      </section> 
        {/*<div className = 'absolute left-0 top-0 ml-32 mt-20 w-1/3 h-5/6'>
          <h1 className='relative text-8xl text-slate-300 font-bold'> Take charge of your health.</h1>
          <SubParagraph value = {paragraph}/>
        </div>
        <div className='absolute top-0 left-1/2 w-1/2'>
          <div className='box-content h-screen w-full absolute rounded-xl z-10 bg-gradient-to-t from-black to-transparent'></div>
          <div className='box-content h-screen w-1/2 absolute rounded-xl z-10 bg-gradient-to-r from-black to-transparent'></div>
          <div className='absolute top-0'>
            <Image
                src={track}
                alt="track"
                className='rounded-xl h-screen'
            />
          </div>
        </div>
        <div id = "intro" className='relative h-[140vh] bg-black m-0'>
          <LocoScroll/>
          <Description/>
        </div>
        {/*
        <section className='relative w-full h-full items-center flex justify-center bg-black h-100vh'>
          <ParallaxScroll/>
          <div className="absolute h-[30vh] rounded-lg bg-black">
            <HeartChartEx/>
          </div>
        </section>*/}
     

      {/*<Head>
         Head tag contains metadata, which means the information in the Head tag is NOT DISPLAYED on the page but is used by browsers and search engines
        </Head>*/}
    </main>
    
  )
}
