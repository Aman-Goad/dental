import React, { useState } from "react";
import Button from "./Button";
import WhiteButton from "./WhiteButton";

const ServiceBigCard = () => {
  const [bigServices, setBigServices] = useState([
    {
      title: "Dental Checkups",
      color: "bg-blue-100",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop",
      description:
        "Regular dental checkups are essential for maintaining oral health and preventing potential issues before they become serious.",
    },
    {
      title: "Teeth Whitening",
      color: "bg-green-100",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1474&auto=format&fit=crop",
      description:
        "Our professional teeth whitening treatments can help you achieve a brighter, more confident smile in just one session.",
    },
    {
      title: "Orthodontics",
      color: "bg-pink-100",
      image:
        "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1470&auto=format&fit=crop",
      description:
        "We offer a range of orthodontic treatments to straighten teeth and correct bite issues for both children and adults.",
    },
    {
      title: "Dental Implants",
      color: "bg-yellow-100",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dental-implant-illustration.jpg/800px-Dental-implant-illustration.jpg",
      description:
        "Dental implants provide a permanent solution for missing teeth, restoring both function and aesthetics to your smile.",
    },
    {
      title: "Root Canal Therapy",
      color: "bg-purple-100",
      image:
        "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1470&auto=format&fit=crop",
      description:
        "Our gentle root canal therapy can save severely damaged teeth, alleviating pain and preserving your natural smile.",
    },
    {
      title: "Pediatric Dentistry",
      color: "bg-red-100",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop",
      description:
        "We specialize in creating positive dental experiences for children, ensuring their oral health starts off on the right foot.",
    },
    {
      title: "Cosmetic Dentistry",
      color: "bg-indigo-100",
      image:
        "https://www.fitzgeralddentistry.com/wp-content/uploads/2018/12/cosmetic-dentistry-in-Murfreesboro.jpg",
      description:
        "Transform your smile with our range of cosmetic dentistry services, including veneers, bonding, and smile makeovers.",
    },
    {
      title: "Oral Surgery",
      color: "bg-orange-100",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1470&auto=format&fit=crop",
      description:
        "Our skilled oral surgeons provide expert care for complex dental procedures, ensuring your comfort and safety.",
    },
  ]);

  return (
    <div className="max-w-screen-lg mx-auto grid sm:grid-cols-2 gap-8">
      {bigServices.map((service, index) => (
        <div
          key={index}
          className={` p-5 pb-0 rounded-lg  relative group overflow-hidden`}
        >
          <div className="w-full h-1/2 mb-4">
            <img
              src={`${service.image}`}
              alt={service.title}
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-700 mb-8">{service.description}</p>
          <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-700"></div>

          <div className="relative z-10 mb-4">
            <WhiteButton
              link="/book-appointment"
              text="Learn More"
              color="text-bgblue"
              bg="bg-textwhite"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBigCard;
