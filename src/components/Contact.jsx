import React from "react";
import { IoMdAdd } from "react-icons/io";

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
                      class="mt-1 block w-full p-2 border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
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
            <div className="relative z-10 h-full w-full">
              <img
                src="/images/dentist.jpg"
                alt=""
                className="h-full w-full object-cover rounded-l py-10"
              />
            </div>
          </div>
        </div>

        {/* contact section*/}
        <div>
          {/* email */}
          <div className="flex bg-bgblue p-3 gap-1 mx-48 ">
            <div className="box border-r border-black  w-1/3   h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className="bg-bgblue rounded-md inline-flex p-2  ">
                <img
                  src="/svg/mail.svg"
                  alt=""
                  className="w-5 h-5 text-textwhite"
                />
              </div>
              <h1 className="font-bold text-[1.6vw]">Email Address</h1>
              <p className="border-b text-[0.9vw] border-black ">
                manjhiakash00@gmail.com
              </p>
            </div>
            {/* Phone */}
            <div className="box border-r border-black  w-1/3 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className="bg-bgblue rounded-md inline-flex p-2  ">
                <img
                  src="/svg/call.svg"
                  alt=""
                  className="w-5 h-5 text-textwhite"
                />
              </div>
              <h1 className="font-bold text-[1.6vw]">Phone Number</h1>
              <p className="border-b text-[0.9vw] border-black ">
                +91 9876543210
              </p>
            </div>
            {/* Address */}
            <div className="box   w-1/3 h-full p-6 flex flex-col gap-2 items-start justify-center">
              <div className="bg-bgblue rounded-md inline-flex p-2  ">
                <img
                  src="/svg/l.svg"
                  alt=""
                  className="w-5 h-5 text-textwhite"
                />
              </div>
              <h1 className="font-bold text-[1.6vw]">Clinic Location</h1>
              <p className="border-b text-[0.9vw] border-black  text-wrap">
                {" "}
                Neelam Flyover Faridabad HR{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* faqs section */}

      <section className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button className="text-gray-800 font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button className="text-gray-800 font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button class="text-gray-800 font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button className="text-gray-800 font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button className="text-gray-800 font-bold text-xl">+</button>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <p className="text-gray-800 font-medium">Question text goes here</p>
            <button className="text-gray-800 font-bold text-xl">+</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
