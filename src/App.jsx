import React from 'react'
import Navbar from './components/utils/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Appointment from './components/Appointment'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Error from './components/Error'

const App = () => {
  return (
    <div className='w-full bg-white '>
    
      <Navbar />
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
