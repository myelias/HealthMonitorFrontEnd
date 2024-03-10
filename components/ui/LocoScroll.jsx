'use client';
import React, { useEffect } from 'react'
import Intro from './Intro';

export default function LocoScroll() {
    useEffect(() =>
    {(
        async () => {
            const LocomotiveScroll = (await import ('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        }
    )()

    }, [])

  return (
    <div className='relative  flex flex-col gap-5 bg-zinc-900 h-[140vh]'>

    </div>
  )
}
