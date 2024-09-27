import { motion } from 'framer-motion';
import { useRef } from 'react';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut", // Added smooth easing
    },
  },
};

const itemVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6, // Added duration for smoother animation
      ease: "easeOut", // Added smooth easing
    }
  },
};

export default function ContactSection() {
  return (
    <div className="absolute w-full bg-transparent bottom-[-15%]">
      <motion.div
        className="h-full max-w-screen-lg mx-auto flex gap-1 overflow-hidden bg-textwhite rounded-lg shadow-lg"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Email */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center bg-textwhite rounded-lg shadow-lg z-40"
        >
          <div className="bg-bgblue rounded-md inline-flex p-2">
            <img src="/svg/mail.svg" alt="mail" className="w-5 h-5 text-textwhite" />
          </div>
          <h1 className="font-bold text-[1.6vw]">Email Address</h1>
          <p className="border-b text-[0.9vw] border-black">pdcjtrfeawo1s@outlook.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center bg-textwhite rounded-lg shadow-lg z-30"
        >
          <div className="bg-bgblue rounded-md inline-flex p-2">
            <img src="/svg/call.svg" alt="call" className="w-5 h-5 text-textwhite" />
          </div>
          <h1 className="font-bold text-[1.6vw]">Phone Number</h1>
          <p className="border-b text-[0.9vw] border-black">+91 9876543210</p>
        </motion.div>

        {/* Address */}
        <motion.div
          variants={itemVariants}
          className="box border border-zinc-300 w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center bg-textwhite rounded-lg shadow-lg z-20"
        >
          <div className="bg-bgblue rounded-md inline-flex p-2">
            <img src="/svg/l.svg" alt="location" className="w-5 h-5 text-textwhite" />
          </div>
          <h1 className="font-bold text-[1.6vw]">Clinic Location</h1>
          <p className="border-b text-[0.9vw] border-black">Neelam Flyover Faridabad HR</p>
        </motion.div>

        {/* Book Appointment */}
        <motion.div
          variants={itemVariants}
          className="box bg-bgblue w-1/4 h-full p-6 flex flex-col gap-2 items-start justify-center text-textwhite rounded-lg shadow-lg z-10"
        >
          <div className="bg-textwhite rounded-md inline-flex p-2">
            <img src="/svg/calender.svg" alt="calendar" className="w-5 h-5 text-textwhite" />
          </div>
          <h1 className="font-bold text-[1.4vw] text-white">Book Appointment</h1>
          <a href="/book-appointment" className="border-b text-[0.9vw] border-white text-white">
            Book an Appointment now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
