import React from 'react'
import Button from './utils/Button'
import { Link } from 'react-router-dom'
import ServiceCards from './utils/ServiceCards'

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        style={{ backgroundImage: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg')` }}
        className='w-full h-screen bg-no-repeat bg-cover bg-top relative'>
        <div className='flex flex-col h-full items-start justify-center text-textwhite max-w-screen-lg mx-auto gap-8'>
          <div className='heading text-[5vw] tracking-tight leading-tight font-bold '>
            <h1>Achieve Perfect</h1>
            <h1> Oral Health</h1>
          </div>
          <div className='description z-20 w-2/5 text-textgray'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt eveniet corporis! Inventore ex alias unde natus cupiditate nam hic! deserunt eveniet corporis! Inventore ex alias unde natus cupiditate nam hic

          </div>

          <Button link='/book-appointment' text='Book Appointment' />

        </div>





        {/* Gradient */}
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bgblue to-transparent'></div>




        {/* Contact Info  BOX */}
        <div className='absolute  w-full bg-transparent  bottom-[-15%]'>
          <div className='h-full max-w-screen-lg mx-auto bg-textwhite rounded-lg shadow-lg flex p-3 gap-1 '>
            {/* Email */}
            <div className="box border-r border-black  w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className='bg-bgblue rounded-md inline-flex p-2  '>
                <img src="/svg/mail.svg" alt="" className='w-5 h-5 text-textwhite' />
              </div>
              <h1 className='font-bold text-[1.6vw]'>Email Address</h1>
              <p className='border-b text-[0.9vw] border-black '>manjhiakash00@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="box border-r border-black  w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className='bg-bgblue rounded-md inline-flex p-2  '>
                <img src="/svg/call.svg" alt="" className='w-5 h-5 text-textwhite' />
              </div>
              <h1 className='font-bold text-[1.6vw]'>Phone Number</h1>
              <p className='border-b text-[0.9vw] border-black '>+91 9876543210</p>
            </div>

            {/* Address */}
            <div className="box   w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className='bg-bgblue rounded-md inline-flex p-2  '>
                <img src="/svg/l.svg" alt="" className='w-5 h-5 text-textwhite' />
              </div>
              <h1 className='font-bold text-[1.6vw]'>Clinic Location</h1>
              <p className='border-b text-[0.9vw] border-black  text-wrap'> Neelam Flyover Faridabad HR </p>
             
            </div>

            {/* Book Appointment */}
         
            <div className="box border-r border-black bg-bgblue rounded-lg  w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className='bg-textwhite rounded-md inline-flex p-2  '>
                <img src="/svg/calender.svg" alt="" className='w-5 h-5 text-textwhite' />
              </div>
              <h1 className='font-bold text-[1.4vw] text-white'>Book Appointment</h1>
              <Link to='/book-appointment' className='border-b text-[0.9vw] border-white text-white'>Book an Appointment now</Link>
            </div>


          </div>
        </div>

      </section>

      {/* Section 2 */}
      <section className='max-w-screen-lg mx-auto h-screen flex items-center sm:mt-[14vw] pb-20  '>
        <div className='w-1/2 h-full flex flex-col justify-center leading-tight tracking-tight '>
          <h1 className='text-[3vw] font-bold '>Professional Dental</h1>
          <h1 className='text-[3vw] font-bold '>Care Services at</h1>
          <h1 className='text-[3vw] font-bold '>Competitive Prices!</h1>

          <p className='text-zinc-600 w-4/5 leading-normal mt-10 text-sm '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem alias dignissimos asperiores fugiat debitis rerum quasi nam quia odio eligendi
          </p>

          <div className='points flex flex-col gap-4 mt-10 text-lg'>
            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-10 h-10' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-10 h-10' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='point flex items-center gap-4'>
              <img src="/svg/shield.svg" alt="" className='w-10 h-10' />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

        </div>
        <div className='w-1/2 h-full relative'>
          <div className='absolute bg-bgblue rounded-xl bottom-[-8%] right-[-10%] w-2/3 h-2/3'></div>
          <div className='relative z-10 h-full w-full'>
            <img src="/images/dentist.jpg" alt="" className='h-full w-full object-cover rounded-xl' />
          </div>
        </div>
      </section>


      {/* Section 3 */}
      <section className='w-full  bg-bgblue mt-8 '>

        <div className='max-w-screen-lg mx-auto flex justify-between items-center gap-20  py-8'>

          <h1 className='w-1/3 text-textwhite font-bold text-[1.6vw] text-wrap '>Trusted By Hundreds Of Medical Oraganizations</h1>

          <div className='flex gap-9 w-2/3'>
            <img src="/svg/logo1.svg" alt="" className='h-[3vw]' />
            <img src="/svg/logo2.svg" alt="" className='h-[3vw]' />
            <img src="/svg/logo1.svg" alt="" className='h-[3vw]' />

          </div>
        </div>

      </section>


    {/* Section 4 */}
    <section className='w-full flex flex-col items-center justify-center '>
    <ServiceCards/>
    <Button link='/service' text='View All Services' />
    </section>




    </>
  )
}

export default Home
