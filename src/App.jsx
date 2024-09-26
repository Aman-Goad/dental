import React, { useEffect } from 'react'
import Navbar from './components/utils/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Appointment from './components/Appointment'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Error from './components/Error'
import Lenis from 'lenis'

const App = () => {
  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

  })

  return (
    <div className='w-full bg-white overflow-x-hidden '>
    
      <Navbar />
      <div className='mt-[10.5vh]'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-appointment' element={<Appointment />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
