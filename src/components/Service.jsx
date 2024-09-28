import React from "react";
import ServiceCards from "./utils/ServiceCards";
import ServiceBigCard from "./utils/ServiceBigCard";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
const Service = () => {
  return (
    <div>
      <section className="w-full py-10 sm:py-20 bg-zinc-100">
        <div className="max-w-screen-lg mx-auto h-full flex items-center justify-center px-4 sm:px-0">
          <section className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="w-full sm:w-1/3 h-full">
              <h3 className="text-[4vw] sm:text-[2vw] font-bold text-bgblue">
                Services
              </h3>

              <div className="flex flex-col leading-tight tracking-tight">
                <h1 className="text-[8vw] sm:text-[4vw] font-bold">
                  <motion.span
                  initial={{opacity: 0, y: "40%" , rotate: 10}}
                  whileInView={{opacity: 1, y: 0, rotate: 0}}
                  transition={{delay: 0.2, duration: 0.9}}
                  className="inline-block origin-left"
                  viewport={{once: true}}
                  >

                  Discover
                  </motion.span>
                  </h1>
                <h1 className="text-[8vw] sm:text-[4vw] font-bold overflow-hidden">
                  <motion.span
                  initial={{opacity: 0, y: "40%" , rotate: 10}}
                  whileInView={{opacity: 1, y: 0, rotate: 0}}
                  transition={{delay: 0.2, duration: 0.9}}
                  className="inline-block origin-left"
                  viewport={{once: true}}
                  >

                  Our Dental
                  </motion.span>
                </h1>
                <h1 className="text-[8vw] sm:text-[4vw] font-bold overflow-hidden">
                  <motion.span
                  initial={{opacity: 0, y: "40%" , rotate: 10}}
                  whileInView={{opacity: 1, y: 0, rotate: 0}}
                  transition={{delay: 0.2, duration: 0.9}}
                  className="inline-block origin-left"
                  viewport={{once: true}}
                  >

                  Solutions
                  </motion.span>
                </h1>
              </div>

              <p className="text-[3vw] sm:text-[1.2vw] mt-4">
                {/* Placeholder for service description */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                officiis vitae dignissimos repudiandae quod necessitatibus quae.
                Quae animi nulla rerum iste doloribus!
              </p>
            </div>

            <div className="w-full sm:w-2/3 h-full flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-0">
              <div className="w-full sm:w-[45%] h-64 sm:h-full rounded-lg relative overflow-hidden group">
                <img
                  src="/images/doctor.jpg"
                  alt="Doctor"
                  className="w-full h-full object-cover  object-center rounded-lg"
                  loading="lazy"
                />

                <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-[1s]"></div>
              </div>
              <div className="w-full sm:w-1/3 h-64 sm:h-[50%] rounded-lg relative overflow-hidden group mt-4 sm:mt-0">
                <img
                  src="/images/ser.jpg"
                  alt="Service"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[30] transition-all duration-[1s]"></div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* service cards */}
      <section className="service-cards">
        <ServiceCards />
      </section>

      {/* service Big Card */}

      <section className="service-big-card py-16">
        <ServiceBigCard />
      </section>

      {/* SECTION 4 WHY CHOOSE US */}
      <div className="bg-gray-100 py-10 px-5">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold overflow-hidden ">
              <motion.span
              initial={{opacity: 0, y: "40%" , rotate: 10}}
              whileInView={{opacity: 1, y: 0, rotate: 0}}
              transition={{delay: 0.2, duration: 0.9}}
              className="inline-block origin-left"
              viewport={{once: true}}
              >

              Why Choose
              </motion.span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold overflow-hidden ">
              <motion.span
              initial={{opacity: 0, y: "40%" , rotate: 10}}
              whileInView={{opacity: 1, y: 0, rotate: 0}}
              transition={{delay: 0.2, duration: 0.9}}
              className="inline-block origin-left"
              viewport={{once: true}}
              >

              {/* Placeholder for clinic name */}
              ZipDentist
              </motion.span>
            </h2>
            <p className="mt-4 text-gray-600">
              {/* Placeholder for why choose us description */}
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices.
            </p>
          </div>
          {/* image div */}
          <div className="flex justify-center items-center  h-[35vh] w-[90%]  md:h-[50vh] md:w-[50vh]">
            <img
              src="images/ser.jpg"
              alt="Dentist"
              className="rounded-lg shadow-lg mb-6 w-full h-full object-cover max-w-sm"
              loading="lazy"
            />
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="flex flex-col sm:gap-6   text-center md:text-left">
              <div className="flex flex-col items-start sm:gap-4  p-4 sm:p-0">
                <h3 className="text-3xl font-bold text-bgblue">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <CountUp end={130} duration={2} start={0} useEasing={true} useGrouping={true} separator="," decimal="." prefix="" suffix="+" enableScrollSpy scrollSpyOnce={true} />
                  </motion.span>
                </h3>
                <p className="text-gray-600 text-start">
                  {/* Placeholder for dentist description */}
                  Experienced dentists in our network, ensuring you receive top-quality care.
                </p>
              </div>
              <div className="flex flex-col items-start sm:gap-4 p-4 sm:p-0">
                <h3 className="text-3xl font-bold text-bgblue">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <CountUp end={25} duration={2} start={0} useEasing={true} useGrouping={true} separator="," decimal="." prefix="" suffix="+" enableScrollSpy scrollSpyOnce={true} />
                  </motion.span>
                </h3>
                <p className="text-gray-600 text-start  ">
                  {/* Placeholder for experience description */}
                  Years of combined experience, providing trusted dental services to our community.
                </p>
              </div>
              <div className="flex flex-col items-start sm:gap-4 p-4 sm:p-0">
                <h3 className="text-3xl font-bold text-bgblue">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <CountUp end={100} duration={2} start={0} useEasing={true} useGrouping={true} separator="," decimal="." prefix="" suffix="%" enableScrollSpy scrollSpyOnce={true} />
                  </motion.span>
                </h3>
                <p className="text-gray-600 text-start">
                  {/* Placeholder for satisfaction description */}
                  Patient satisfaction rate, reflecting our commitment to exceptional dental care.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
   
  );
};

export default Service;
