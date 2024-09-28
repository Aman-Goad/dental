import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. John Doe',
      role: 'Dentist',
      image: '/images/doctor.jpg',
      description: 'Experienced dentist specializing in general and cosmetic dentistry.'
    },
    {
      name: 'Dr. Jane Smith',
      role: 'Orthodontist',
      image: '/images/doctor.jpg',
      description: 'Expert in orthodontics with a focus on creating beautiful smiles.'
    },
    {
      name: 'Dr. Mike Johnson',
      role: 'Oral Surgeon',
      image: '/images/doctor.jpg',
      description: 'Skilled oral surgeon with years of experience in complex procedures.'
    }
  ]

  return (
    <div className='w-full min-h-screen  sm:py-20 py-10'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='overflow-hidden text-center  mb-16 '>
        <motion.span 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='heading text-center font-bold sm:text-[3vw] text-[3vh] tracking-tight leading-tight origin-bottom'
        >
          Our Experienced Team
        </motion.span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className='bg-white rounded-lg overflow-hidden shadow-lg '
            >
              <div className='h-64 w-full'>
                <img src={member.image} alt={member.name} className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{member.name}</h3>
                <p className='text-sm text-gray-600 mb-4'>{member.role}</p>
                <p className='text-gray-700'>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
