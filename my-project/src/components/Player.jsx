import React from 'react'
import { songsData} from '../assets/assets'
import {assets} from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      
      <div className='flex items-center gap-4 '>
         <img className='w-12' src={songsData[0].image} alt="img"></img>
         <div>
            <p className='text-white'>{songsData[0].name}</p>
            <p className='text-sm font-light text-white'>{songsData[0].desc}</p>
         </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
         <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""></img>
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=""></img>
          <img className='w-4 cursor-pointer' src={assets.play_icon} alt=""></img>
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt=""></img>
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""></img>
          
         </div>
         <div className='flex items-center gap-5'>
          <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr className='w-10 h-1 bg-green-800 border-none rounded full'></hr>
          </div>
          <p>3:20</p>
         </div>
      </div>
      {/* Dummy Icons */}
      {/* <div className='items-center gap-2 opacity-75'>
        <img className='w-4 ' src={assets.plays_icon} alt=""></img>
        <img className='w-4 ' src={assets.mic_icon} alt=""></img>
        <img className='w-4 ' src={assets.queue_icon} alt=""></img>
        <img className='w-4 ' src={assets.speaker_icon} alt=""></img>
        <img className='w-4 ' src={assets.volume_icon} alt=""></img>
        <div className='w-20 h-1 rounded bg-slate-50'>
          
        </div>
        <img className='w-4 ' src={assets.mini_player_icon} alt=""></img>
        <img className='w-4 ' src={assets.zoom_icon} alt=""></img>
      </div> */}
      
    </div>
  )
}

export default Player
