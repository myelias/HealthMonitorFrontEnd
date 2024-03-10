'use client'
import React, {useEffect, useRef} from 'react'
import { useScroll, motion, useTransform, useTime } from 'framer-motion'


export default function SubParagraph({value, fontSize}) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start 0.4", "start 0.25"],
    });
    const time = useTime();
    const rotate = useTransform(
    time,
    [0, 2500], // For every 2 seconds...
    [0, 1], 
    );
    
    const Word = ({children, progress, range}) => {
        const amount = range[1] - range[0]
        const step = amount / children.length
        return (
          <span className='relative mr-3 mt-3'>
            {
              children.split("").map((char, i) => {
                const start = range[0] + (i * step);
                const end = range[0] + ((i + 1) * step)
                return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
              })
            }
          </span>
        )
      }

      const Char = ({children, progress, range}) => {
        const opacity = useTransform(progress, range, [0,1])
        return (
          <span>     
            <span className='absolute opacity-0'>{children}</span>   
            <motion.span style={{opacity: opacity}}>{children}</motion.span>  
          </span>   
        )
      
      }

    
    
  const fontVariant =
    {
        50: 'text-xl text-white flex flex-wrap font-medium max-w-[1200px]',
        500: 'text-9xl text-white flex flex-wrap font-medium max-w-[1200px]'
    }
    

    const splitParagraph = value.split(" ");
    return (
        // text-8xl
        // ${fontVariant} text-white flex flex-wrap font-medium max-w-[1200px]
        <p ref={ref} className={fontVariant[fontSize]}>
            {
                splitParagraph.map((word, index) => {
                    const start = index / splitParagraph.length;
                    const end = start + (1 / (splitParagraph.length));
                    return <Word key={index} range={[start,end]} progress = {rotate}>{word}</Word>
                })

            }
        </p>
    )
}


