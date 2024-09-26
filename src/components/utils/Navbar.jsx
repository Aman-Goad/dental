import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Button from './Button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useGSAP(()=>{
    document.querySelectorAll('.elem').forEach(elem => {
      let image = elem.querySelector('img');
  
      let xTransform = gsap.utils.random(-100, 100);
      gsap.registerPlugin(gsap.timeline);
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
  
      tl.set(image, {
          transformOrigin: `${xTransform < 0 ? '0%' : '100%'}`,
          
      },"start");
  
      tl.to(image, {
          scale: 0,
          borderRadius: '100%',
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top 10%',
              end: 'bottom top',
             
              scrub: true,
          }
      },"start")
      
      .to(elem,{
          xPercent:xTransform,
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
          }
      },"start")
      
  });
  })

  return (
    <div className='w-full shadow-lg sticky top-0 bg-white   text-black py-4 px-8  z-50 flex justify-between items-center'>
      <Link to='/'>
        <h1 className='text-2xl font-bold'>VR DENTAL</h1>
      </Link>

      <div className="relative flex items-center gap-8">
      <Button
        link="/book-appointment"
        text="Book Appointment"
      />
      <div
        className="text-bgblue h-12 w-12 flex items-center justify-center focus:outline-none hover:text-white hover:bg-bgblue rounded-full duration-300 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

        

        {/* Background overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Sliding menu */}
        <div
          className={`fixed top-0 right-0 h-screen backdrop-blur-md z-50 flex items-center justify-center transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0 w-1/3' : 'translate-x-full w-1/3'
          }`}
        >
          <div className="text-white text-2xl p-8">
            <Link to={`/`} className="block mb-4 text-6xl" onClick={() => setIsMenuOpen(false)}>
              {"1."} {"Home"}
            </Link>
            {["about", "service", "contact"].map((item, index) => (
              <Link
                key={index}
                to={`/${item}`}
                className="block mb-4 text-6xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {`${index + 2}.`} {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
          <button
            className="absolute top-2 right-6 text-white text-xl hover:bg-white hover:text-black rounded-full px-4 py-7 duration-300 font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
