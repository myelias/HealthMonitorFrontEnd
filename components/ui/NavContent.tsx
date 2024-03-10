import { motion } from 'framer-motion'
import React from 'react'

export default function NavContent() {

    const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}
    const height = {
        initial: {
          height: 0
        },
        enter: {
          height: "auto",
          transition
        },
        exit: {
          height: 0,
          transition
        }
    }

  return (
    <motion.div className='overflow-hidden' variants={height} initial="initial" animate="enter" exit="exit">

      <div className='flex gap-[50px] mb-20'>
        <div className='flex flex-col justify-between'>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>



          {/* <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>

          <Footer /> */}

        </div>

        {/* <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/> */}

      </div>

    </motion.div>
  )
}

