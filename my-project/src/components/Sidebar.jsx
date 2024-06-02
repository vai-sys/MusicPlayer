import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white '>
        <div className='bg-[#121212bb] h-[15%] rounded flex flex-col justify-around mb-5 pb-4'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer text-sm pb-2'>
              <img src={assets.home_icon} className='w-7 h-auto' alt="img"/>
              <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer text-sm'>
              <img src={assets.search_icon} className='w-7 h-auto' alt="img"/>
              <p className='font-bold'>Search</p>
            </div>
            </div>

            <div className='bg-[#121212a0] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                     <div className='flex items-center gap-3 text-sm'>
                         <img className='w-6' src={assets.stack_icon} alt="img"></img>
                         <p className=' font-semibold'>your Library</p>
                     </div>
                     <div className='flex items-center gap-3 ' >
                          <img src={assets.arrow_icon} alt="arrow"  className='w-4'></img>
                          <img className='w-4' src={assets.plus_icon} alt="plus"></img>
                     </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create Your First playlist</h1>
                    <p className='font-light' >It's Easy we will help you</p>
                    <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-5'>
                    <h1>Lets's Find Some Podcasts to follow</h1>
                    <p className='font-light' >we will Keep you  Update on New Episode</p>
                    <button className='px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
                </div>
                 
            </div>

        </div>
     
    
  )
}

export default Sidebar
