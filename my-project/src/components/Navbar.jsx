import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full font-semibold'>
      <div className='flex items-center gap-2'>
        <img src={assets.arrow_left} className='w-8 p-2 bg-black cursor-pointer rounded-2xl' alt=""></img>
        <img src={assets.arrow_right} className='w-8 p-2 bg-black cursor-pointer rounded-2xl' alt=""></img>
      </div>
      <div className='flex items-center gap-4'>
        <p className='text-black bg-white text-[15px] px-4 py-1 rounded-2xl '></p>
        
      </div>
    </div>
  )
}

export default Navbar
