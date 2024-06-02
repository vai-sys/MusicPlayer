
import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
function App() {


  return (
    <>
     <div>
      <div className='bg-black h-screen'>
        <div className='h-[90%] flex'>
         <Sidebar/>
        </div>
      
          <Player/>
      

      </div>
     </div>
      
    </>
  )
}

export default App
