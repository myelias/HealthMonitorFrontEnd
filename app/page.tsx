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
import Menu from '@/components/ui/Menu';
import LoginEnter from '@/components/ui/LoginEnter';
import MenuBlur from '@/components/ui/MenuBlur';
import DescPar from '@/components/ui/DescPar';
import Floatshapes from '@/components/ui/Floatshapes';
import runner from '../public/running.jpg'
import Spline from '@splinetool/react-spline';
// import ChartCard from '@/components/ui/ChartCard';

const inter = Inter({subsets: ["latin"]});
const description = ['AI powered health metrics from your wearable devices.','Any metric.', ' Any device.']
const Enter1 = ['DESIGN',' YOUR']
const Enter2 = ['FITNESS']
const Enter3 = ['JOURNEY']
export default function Home() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <main className='relative h-full w-full '>
      <MenuBlur isActive={isActive} setIsActive={setIsActive}/> 
      <section className = 'relative h-[120vh] bg-zinc-900'>
        <div className='absolute top-0 left-0 w-full h-[120vh] pointer-events-none'>
          <Spline scene="https://prod.spline.design/Rj-oDXVrrLquAAoy/scene.splinecode" />
        </div>
        <div className='absolute top-[28%] right-9 z-50'>
          <Menu isActive={isActive} setIsActive={setIsActive}/>
        </div>
        <div className='relative w-full top-[17%] flex flex-col items-left justify-left'>
          <div className='relative ml-32'>
          <DescPar description={Enter1} fontSize={1} marginView={"-26%"}/>
          <DescPar description={Enter2} fontSize={1} marginView={"-26%"}/>
          <DescPar description={Enter3} fontSize={1} marginView={"-26%"}/>
          </div>
        </div>
        <div className='relative top-[17%] w-full '>
          <div className='relative ml-32  flex justify-left items-left flex-col space-y-6'>
            <div className='relative left-0 '>
              <DescPar description={description} fontSize={2} marginView={"-26%"}/>
            </div>
            <div className='relative left-0 flex space-x-5'>
              <LoginEnter action={"LOGIN"} buttonSize={"small"}/>
              <LoginEnter action={"GET STARTED"} buttonSize={"large"}/>
            </div>
          </div> 
        </div>
      </section>
      <section className='relative h-[100vh] bg-zinc-900'>
        {/* <div className='relative top-[60px] w-full flex flex-col justify-center items-center '>
          <DescPar description={['Connect', 'with', 'your', ]} fontSize={2} marginView={"-10%"}/>
          <ChartCard/>
        </div> */}
      </section> 
      {/* <ParallaxScroll/>
      <section id='intro' className='bg-zinc-900 relative'>
        <LocoScroll/>
      </section>  */}
      {/*<Head>
         Head tag contains metadata, which means the information in the Head tag is NOT DISPLAYED on the page but is used by browsers and search engines
        </Head>*/}
    </main>
    
  )
}
