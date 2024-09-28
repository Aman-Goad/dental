import React from 'react'
import Maps from './utils/Maps'
import { FaArrowRight, FaStar, FaTooth } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Work from './utils/Work';
const About = () => {
  return (
    <div className='w-full'>
     <div className='w-full sm:h-screen bg-zinc-100 '>
      <div className=' mx-auto sm:h-full flex items-center justify-center'>
     <section className="w-full h-full  flex items-center sm:justify-between justify-start sm:gap-x-12 gap-x-0 flex-col-reverse sm:flex-row">
            <div className="sm:w-1/2 sm:h-full sm:pl-64 sm:flex flex-col justify-center p-4 sm:p-0 ">
            <h3 className="sm:text-[2vw] text-[2vh]  font-bold text-bgblue">About</h3>
            
            <div className="flex flex-col sm:leading-none leading-[1.2] sm:tracking-tight">
            <h1 className="sm:text-[4vw] text-[4vh] font-bold">Experienced</h1>
            <h1 className="sm:text-[4vw] text-[4vh] font-bold">Dentist in</h1>
            <h1 className="sm:text-[4vw] text-[4vh] font-bold">Maryland City</h1>
            </div>

            <p className="sm:text-[1.2vw] text-[1.8vh] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!</p>
            </div>

            <div className="sm:w-1/2  sm:h-full    ">
            <img src="/images/bed.jpg" alt="" className='w-full h-full object-cover' />
            
            </div>
              
            </section>
     </div>
     </div>


     <section className='max-w-screen-lg sm:mt-16 mx-auto h-[90vh] flex items-center    overflow-hidden sm:p-0 p-4  flex-col sm:flex-row'>
      <div className='sm:w-1/2 sm:h-full w-full   py-10  '>
      <div className='leading-[1.1] tracking-tight'>
      <h1 className='sm:text-[2.6vw] text-[4vh] font-bold '>Trust Our Proficient </h1>
      <h1 className='sm:text-[2.6vw] text-[4vh] font-bold'>Dentists for Quality and </h1>
      <h1 className='sm:text-[2.6vw] text-[4vh] font-bold'>Comfort</h1>
      </div>
      <p className='sm:text-[1.1vw] text-[1.8vh] mt-6 text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
      officiis vitae dignissimos repudiandae quod necessitatibus quae.
      Quae animi nulla rerum iste doloribus!</p>

      <div className=' w-full h-1/2 mt-12 flex  gap-3'>
          <div className="content w-2/3 h-full  ">
              <div className='w-full   flex items-center justify-start'>
              <div className='flex items-center justify-center bg-blue-100 rounded-md p-2'>
              <FaTooth className='sm:text-[1vw] text-[1.8vh] text-bgblue' />
              </div>
              </div>
              <div className='w-full mt-4 '>
              <h1 className='sm:text-[1.5vw] text-[2vh] font-bold'>Lorem, ipsum.</h1>
                <p className='sm:text-[1vw] text-[1.6vh] mt-2 text-zinc-700 leading-[1.2]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eos error, ipsa quas rem </p>

              <Link to="/#" className='sm:text-[1.1vw] text-[1.6vh] mt-6 text-blue-600 flex items-center gap-x-2'>Learn More <FaArrowRight /></Link>
              </div>
          </div>
          
          <div className="content w-2/3 h-full  ">
              <div className='w-full   flex items-center justify-start '>
              <div className='flex items-center justify-center bg-blue-100 rounded-md p-2'>
              <FaTooth className='sm:text-[1vw] text-[1.8vh] text-bgblue' />
              </div>
              </div>
              <div className='w-full mt-4 '>
              <h1 className='sm:text-[1.5vw] text-[2vh] font-bold'>Lorem, ipsum.</h1>
                <p className='sm:text-[1vw] text-[1.6vh] mt-2 text-zinc-700 leading-[1.2]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eos error, ipsa quas rem minima </p>

              <Link to="/#" className='sm:text-[1.1vw] text-[1.6vh] mt-6 text-blue-600 flex items-center gap-x-2'>Learn More <FaArrowRight /></Link>
              </div>
          </div>
      </div>
      </div>
      <div className='sm:w-1/2 h-full  sm:p-8'>
      <img src="/images/bed.jpg" alt="" className='w-full h-full object-cover  rounded-md  ' />
      </div>
     </section>

          <Work />


          <section className="max-w-screen-lg mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <div className="flex text-bgblue mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-600 mb-6">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </p>
                <div className="flex items-center">
                  <img src="/images/dentist.jpg" alt="Customer 1" className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-gray-500">New York, NY</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                <div className="flex text-bgblue mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-600 mb-6">
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <div className="flex items-center">
                  <img src="/images/dentist.jpg" alt="Customer 2" className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-sm text-gray-500">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Maps />
    </div>
  )
}

export default About
