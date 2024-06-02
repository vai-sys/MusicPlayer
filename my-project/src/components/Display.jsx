import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Navbar from './Navbar'

const Display = () => {
  return (
    <div>
       <div>
    <div className='h-screen bg-black'>
         <div className='h-[80%] flex'>
          <Sidebar/>
          <Navbar/> 
        </div>
        
        <Player/>
       </div>
       
       
       
      </div>
    </div>
  )
}

export default Display
