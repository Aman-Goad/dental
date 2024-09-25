import React from "react";
import ServiceCards from "./utils/ServiceCards";
import ServiceBigCard from "./utils/ServiceBigCard";

const Service = () => {
  return (
    <div >
      <div className="w-full py-20 bg-zinc-200 ">
      <div className="max-w-screen-lg mx-auto  h-full  flex items-center justify-center ">
            <section className="w-full  flex items-center justify-between gap-x-8">
            <div className="w-1/3 h-full ">
            <h3 className="text-[2vw] font-bold text-bgblue">Services</h3>
            
            <div className="flex flex-col leading-none tracking-tight">
            <h1 className="text-[4vw] font-bold">Discover</h1>
            <h1 className="text-[4vw] font-bold">Our Dental </h1>
            <h1 className="text-[4vw] font-bold">Solutions</h1>
            </div>

            <p className="text-[1.2vw] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!</p>
            </div>

            <div className="w-2/3  h-full flex items-center gap-4  ">
                <img src="/images/doct.jpg" alt="" className="w-[45%] h-full rounded-lg" />
                <img src="/images/ser.jpg" alt="" className="w-1/3 h-[50%] rounded-lg" />
            </div>
              
            </section>
      </div>

         
      </div>

    {/* service cards */}
    <section className="service-cards">

      <ServiceCards/>
    </section>


    {/* service Big Card */}

    <section className="service-big-card py-16">
     <ServiceBigCard/>
    </section>


      




    </div>
  );
};

export default Service;
