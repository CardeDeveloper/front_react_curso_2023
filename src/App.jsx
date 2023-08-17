import { useState } from 'react'
import './App.css'
import Admin from './components/admin/Admin'
import NavbarApp from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Stats from './components/stats/Stats'



function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <NavbarApp></NavbarApp>
    <div className='container mx-auto'>
      <Outlet></Outlet>
    </div>
    

    </>
  )
}

export default App
