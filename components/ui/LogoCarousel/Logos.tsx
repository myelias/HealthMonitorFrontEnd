import React from 'react'
import Image from "next/image"

function Logos({logo}) {
  return (
    <div className='relative flex flex-col justify-center items-center pl-2 pr-2 w-1/4'>
      <Image
      src={logo}
      alt='logopicture'
      objectFit='contain'
      className=''
      />
    </div>
  )
}

export default Logos