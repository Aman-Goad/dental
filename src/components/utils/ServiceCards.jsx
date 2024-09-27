import { motion } from 'framer-motion'
import React, { useState } from 'react'
import CarouselComponent from './CarouselComponent'

const ServiceCards = () => {

    const [services, setServices] = useState(
        [
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
            {
              "title": "Dental Checkups",
              "image": "https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "sectionSummary": "Regular dental checkups are vital to maintain good oral hygiene and detect issues early."
            },
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
          <h1 className="text-[3vw] font-bold overflow-hidden">

           <motion.span
            initial={{ y:"40%", opacity:0 ,rotate:"40deg" }}
            whileInView={{ rotate:0, y:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:1.2, ease:[0.22,1,0.36,1] }}
            className="inline-block origin-left"
           > Discover the Transformative Dental</motion.span>
           
          </h1>
          <h1 className="text-[3vw] font-bold overflow-hidden">
            
            <motion.span
            initial={{ y:"40%", opacity:0 ,rotate:"40deg" }}
            whileInView={{ rotate:0, y:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:1.2, ease:[0.22,1,0.36,1] }}
            className="inline-block origin-left"
            >Solutions at Our Dentistry!</motion.span>
          </h1>

          <p className="w-2/3 mx-auto text-center mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!
          </p>
        </div>

       <CarouselComponent services={services} />
         
     
      </section>


    
  )
}

export default ServiceCards
