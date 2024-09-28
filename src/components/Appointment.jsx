import React, { useState } from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import Button from './utils/Button'

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
   <>

   <div className='bg-bgblue h-[40vh] max-w-screen mx-auto sm:mt-16 bg-[url("https://images.unsplash.com/photo-1670250721717-889b17349fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVldGh8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-cover bg-center'>

        <div className="flex flex-col leading-tight tracking-tight text-center text-white">
          <h1 className="text-[3vw] font-bold overflow-hidden pt-10"> book your appointment</h1>
          <p className="w-2/3 mx-auto text-center mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!
          </p>
          </div>

   </div>
   {/* another section */}
    <div class="container mx-auto  bg-slate-50">
    <div class="flex flex-wrap justify-center items-center">
  {/* form section */}
      <div class="w-full md:w-1/2 lg:w-2/5 bg-white p-8 shadow-md rounded-lg">
        <h2 class="text-3xl font-bold mb-6 text-bgblue">Book Your Appointment</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
            <input type="tel" id="phone" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div class="mb-4">
            <label for="service" class="block text-gray-700 font-bold mb-2">Service</label>
            <select id="service" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select a service</option>
              <option>Consultation</option>
              <option>Dental Cleaning</option>
              <option>Check-up</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-bold mb-2">Date</label>
            <input type="date" id="date" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div class="mb-4">
            <label for="time" class="block text-gray-700 font-bold mb-2">Time</label>
            <input type="time" id="time" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div class="text-center">
            <Button text=" Book Appointment">
             
            </Button>
          </div>
        </form>
      </div>

      {/* image */}
      <div class="w-full md:w-1/2 lg:w-2/5 md:ml-8 mt-8 md:mt-0 p-20">
        <img src="/images/dentist.jpg" alt="Dentist Appointment" class="rounded-lg shadow-md w-full"/>
      </div>
    </div>
  </div>

   </>
  )
}

export default Appointment
