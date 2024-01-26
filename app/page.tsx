
import Image from 'next/image'
import { Inter } from 'next/font/google';
import ParallaxScroll from '@/components/ui/ParallaxScroll';
import Head from 'next/head';
import runner from '../public/runner.jpeg'
import woman from '../public/womanhappy.png'
import { motion } from "framer-motion"
import Reac from 'react';
import Carousel from '@/components/ui/Carousel';

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className='absolute h-full w-full bg-slate-100'>
        <section className='static top-0 w-full h-full'></section> 
        <h1 className='absolute left-0 top-0 h-5/6 w-1/3 text-8xl text-black font-bold ml-8 mt-20'> Take charge of your health.</h1>
        <div className='absolute top-40 left-2/3 w-1/3'>
          <div className='box-content h-[624px] w-[400px] bg-black relative -left-16 bottom-16'></div>
          <div className='absolute top-0'>
            <Image
                src={runner}
                alt="Picture of the runner"
                width={400}
                height={400}
            />
          </div>
        </div>
        <Carousel/>
        <ParallaxScroll/>
        <section className='relative h-100vh w-full top-0' >
          <div className='relative h-full bottom-60'>
                <Image 
                    src={woman}
                    alt="woman"
                    width={1500}
                    height={1500}
                />
          </div>
        </section>
      {/*<Head>
         Head tag contains metadata, which means the information in the Head tag is NOT DISPLAYED on the page but is used by browsers and search engines
        </Head>*/}
    </main>
    
  )
}
