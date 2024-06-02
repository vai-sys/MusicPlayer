
import './App.css'
import Display from './components/Display'


import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Display /></>
    },
   
   
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}



export default App
