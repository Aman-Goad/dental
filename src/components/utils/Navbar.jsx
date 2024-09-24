import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full sm:px-20 py-4 px-2 flex justify-between items-center sticky top-0 z-50 bg-white'>
      <div className='logo font-bold'>
        <img src="" alt="" />
        <h1>ZipDentist</h1>
      </div>

      {/* Menu */}

        <div className='menu flex items-center gap-8'>
            <ul className='flex gap-8'>
                <li><Link to="/">Home</Link></li>
                {["about", "service", "contact"].map((item) => (
                    <li className='capitalize' key={item}><Link to={`/${item}`}>{item}</Link></li>
                ))}
            </ul>
            <Link to="/book-appointment" className='bg-[#abcbea] text-[#3272EB] font-bold px-4 py-2 rounded-md'>Book Appointment</Link>
        </div>
    </nav>
  )
}

export default Navbar
