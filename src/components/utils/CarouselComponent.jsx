import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const CarouselComponent = ({ services }) => {
  return (
    <div className='h-[60vh] sm:h-[35vw] rounded-lg overflow-hidden'>
      <div className="flex items-center h-full justify-center pt-8 sm:pt-16 pb-4 overflow-x-hidden rounded-lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full h-full rounded-lg overflow-hidden"
          speed={1000}
          effect="slide"
          cssMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {services.map((section, index) => (
            <SwiperSlide key={index}>
              <div 
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${section.image})` }}
                className="group h-full w-full bg-cover bg-center overflow-hidden rounded-lg flex items-center justify-center   shadow-lg relative"
              >
                <Link to={`/services`} className='text-white border-2 rounded-full h-24 w-24 sm:h-36 sm:w-36 p-4 text-base sm:text-[1.3vw] tracking-tight leading-none text-center flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-all duration-[1s] hover:bg-white hover:text-black'>
                  {section.title}
                </Link>

                <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-[1s]"></div>   
              </div>

              <h1 className='text-zinc-200 w-full text-center text-[4vh] font-bold absolute bottom-5 text-wrap z-20 '>{section.title}</h1>

              <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-textblack to-transparent'></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselComponent;