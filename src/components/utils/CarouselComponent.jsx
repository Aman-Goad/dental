import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination,Autoplay } from 'swiper/modules'; // Updated path
import { Link } from 'react-router-dom';



const CarouselComponent = ({ services }) => {
  return (
<div
className='h-[35vw]  '
>
    <div className="flex items-center h-full justify-center pt-16 pb-4 overflow-x-hidden rounded-lg">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper w-full h-full"
        speed={1000}
        effect="slide"
        cssMode={true}
      >
        {services.map((section, index) => (
          <SwiperSlide key={index}>
            <div 
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${section.image})` }}
              className="group h-full w-full bg-cover bg-center overflow-hidden rounded-lg flex items-center justify-center shadow-lg relative"
            >
              <Link to={`/services`} className='text-white border-2 rounded-full h-36 w-36 p-4 text-[2vw]  tracking-tight leading-none text-center flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-all duration-[1s] hover:bg-white hover:text-black '>{section.title}</Link>

              <div className="absolute top-0 right-0 w-10 h-10 bg-black opacity-0 rounded-full scale-0 group-hover:opacity-30 group-hover:scale-[40] transition-all duration-[1s]"></div>   
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};


export default CarouselComponent;