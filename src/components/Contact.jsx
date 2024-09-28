import React from "react";
import { IoMdAdd } from "react-icons/io";
import ContactSection from "./utils/ContactSection";

const Contact = () => {
  return (
    <>
      <div className="bg-zinc-100 py-10 sm:py-20 px-4 sm:px-20">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center leading-tight tracking-tight">
            <h4 className="text-bgblue mb-3 sm:mb-5 font-bold text-[4vw] sm:text-[2vw]">Contact</h4>
            <h1 className="text-3xl sm:text-4xl lg:text-[3vw] font-bold">Get in touch</h1>

            <p className="text-zinc-600 w-full lg:w-4/5 leading-normal mt-4 sm:mt-5 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              autem alias dignissimos asperiores fugiat debitis rerum quasi nam
              quia odio eligendi
            </p>

            {/* form field */}
            <div className="w-full max-w-md mt-6 sm:mt-8">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="10"
                    required
                    className="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 resize-none rounded"
                  ></textarea>
                </div>
                {/* button */}
                <button className="bg-bgblue z-30 text-white px-6 py-2 rounded-md hover:bg-transparent hover:text-bgblue hover:border-bgblue border border-transparent transition duration-300 ease-in-out">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* right image */}
          <div className="w-full sm:w-1/2 h-full mt-8 lg:mt-0">
            <div className="relative z-10 w-full h-64 sm:h-80 lg:h-full">
              <img
                src="/images/dentist.jpg"
                alt="dentist image"
                className="w-full h-full object-cover sm:object-center object-top rounded-lg"
              />
            </div>
          </div>
        </div>

       
      </div>
 {/* contact section*/}
 <div className="relative mt-20 sm:mt-72">
          <ContactSection/>
        </div>
      {/* faqs section */}

      <section className="max-w-4xl mx-auto py-14">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:bg-bgblue hover:text-white transition-colors duration-300">
            <p className="font-medium">Question text goes here</p>
            <button className="font-bold text-xl">+</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
