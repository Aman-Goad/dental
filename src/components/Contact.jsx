import React from "react";
import { IoMdAdd } from "react-icons/io";
import ContactSection from "./utils/ContactSection";

const Contact = () => {
  return (
    <>
      <div className="bg-zinc-100 pb-20 mx-20">
        <div className="max-w-screen-lg mx-auto h-screen flex items-center pb-20  positon-relative">
          <div className="w-1/2 h-full flex flex-col justify-center leading-tight tracking-tight ">
            <h4 className="text-bgblue mb-5 pl-10 pt-10">Contact</h4>
            <h1 className="text-[3vw] font-bold  pl-6 ">Get in touch</h1>

            <p className="text-zinc-600 w-4/5 leading-normal mt-5 text-sm pl-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              autem alias dignissimos asperiores fugiat debitis rerum quasi nam
              quia odio eligendi
            </p>

            {/* form field */}
            <div className="points flex flex-col gap-4 mt-2 text-lg">
              <div class=" p-6 w-96">
                <form>
                  <div class="mb-4">
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      class="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      class="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      class="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>
                  {/* button */}
                  <button className="bg-bgblue z-30 text-textwtext goes herete border px-4 py-2 rounded-md hover:bg-transparent hover:border  duration-150 border-bgblue">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* right image */}
          </div>
          <div className="w-1/2 h-full relative">
            <div className="relative z-10 h-full w-full px-6">
              <img
                src="/images/dentist.jpg"
                alt="dentist image"
                className="h-full w-full object-cover rounded-l py-10 rounded"
              />
            </div>
          </div>
        </div>

        {/* contact section*/}
        <div className="relative mt-40">
          <ContactSection/>
        </div>
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
