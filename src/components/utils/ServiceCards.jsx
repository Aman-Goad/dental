import React, { useState } from 'react'

const ServiceCards = () => {

    const [services, setServices] = useState(
        [
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
            {
              "title": "Restorative Dentistry",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Orthodontic treatments like braces help align teeth for a beautiful smile  help align teeth for a beautiful smile."
            },
            {
              "title": "Cosmetic Dentistry",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile."
            }
          ]
    )
  return (
<section className="max-w-screen-lg mx-auto sm:mt-16  mb-16">
        <div className="flex flex-col leading-tight tracking-tight text-center">
          <h1 className="text-[3vw] font-bold">
            Discover the Transformative Dental
          </h1>
          <h1 className="text-[3vw] font-bold">Solutions at Our Dentistry!</h1>

          <p className="w-2/3 mx-auto text-center mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!
          </p>
        </div>

        
        <div className="flex items-center h-[25vw] justify-center gap-4 pt-16 pb-4">
        {services.map((section, index) => (
        <div 
          key={index} 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${section.image})` }}
          className="h-full w-1/3 bg-cover bg-center overflow-hidden rounded-lg flex items-center justify-center shadow-lg relative"
        >
          <div className="text-center z-20 pt-[80%] hover:pt-[30%] hover:p-4 duration-300 cursor-pointer">
            <h3 className="text-white text-[3vw]  pb-2 leading-none text-wrap font-bold">{section.title}</h3>
            <p className="text-white mt-6 text-sm md:text-base lg:text-lg">{section.sectionSummary}</p>
          </div>
          <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent'></div>
        </div>
      ))}
    </div>
         
     
      </section>


    
  )
}

export default ServiceCards
