import React, { useState } from 'react'
import Button from './Button'
import WhiteButton from './WhiteButton'

const ServiceBigCard = () => {

    const [bigServices, setBigServices] = useState([
        { title: "Dental Checkups", color: "bg-blue-100" },
        { title: "Teeth Whitening", color: "bg-green-100" },
        { title: "Orthodontics", color: "bg-pink-100" },
        { title: "Dental Implants", color: "bg-yellow-100" },
        { title: "Root Canal Therapy", color: "bg-purple-100" },
        { title: "Pediatric Dentistry", color: "bg-red-100" },
        { title: "Cosmetic Dentistry", color: "bg-indigo-100" },
        { title: "Oral Surgery", color: "bg-orange-100" }, // Added new service
    ])
    
  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-8">
        {bigServices.map((service, index) => (
          <div key={index} className={` p-5 pb-0 rounded-lg  relative group overflow-hidden`}>
            <div className="w-full h-1/2 mb-4">
              <img src={`https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg`} alt={service.title} className="w-full h-full object-cover object-center rounded-lg" />
            </div>
            
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-700"></div>

            <div className='relative z-10 mb-4'>
              <WhiteButton link='/book-appointment' text='Learn More' color='text-bgblue' bg='bg-textwhite' />
            </div>

          </div>
        ))}
      </div>
  )
}

export default ServiceBigCard
