import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkPolicy = () => {
  const slides = [
    {
      title: "Investment Policy",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-policy.png",
    },
    {
      title: "Finance Planning",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-planning.png",
    },
    {
      title: "Audit & Assurance",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-auditing.png",
    },
    {
      title: "Tax Consulting",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-policy.png",
    },
  ];

  return (
    <div className="bg-[#F2F6FF] font-Grotesk px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32">
      <div className="py-[80px] md:py-[124px] mx-auto space-y-12">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-[30px] lg:text-[52px] text-[#00206D] font-bold">
            We spend one-third of our life at work
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 bg-white space-y-16 mx-auto h-[500px] md:h-[550px] lg:h-[500px]">
                <div className="flex items-center justify-center w-20 h-20 bg-[#F2F6FF]">
                  <img className="w-12 h-12" src={slide.icon} alt="" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-[24px] font-bold">{slide.title}</h4>
                  <p className="text-[18px] text-[#656C7E]">
                    {slide.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#0147FF]">
                    <button className="font-bold">Read More</button>
                    <FaArrowRight className="w-3 h-3 font-normal" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center items-center gap-3"></div>
      </div>
    </div>
  );
};

export default WorkPolicy;





/*

<div className='p-10 bg-white space-y-16 h-[500px] md:h-[550px] lg:h-[500px] max-w-[400px] md:max-w-full mx-auto'>
                        <div className='flex items-center justify-center w-20 h-20 bg-[#0147FF]'>
                            <img className='w-12 h-12' src="/icon-planning.png" alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h4 className='text-[24px] font-bold'>Finance Planning</h4>
                            <p className='text-[18px] text-[#656C7E]'>Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.</p>
                            <div className='flex items-center gap-1 text-[#0147FF]'>
                                <button className=' font-bold '>Read More</button>
                                <FaArrowRight className='w-3 h-3 font-normal' />
                            </div>
                        </div>
                    </div>
                    <div className='p-10 bg-white space-y-16 hidden h-[500px] md:h-[550px] lg:h-[500px] md:block mx-auto'>
                        <div className='flex items-center justify-center w-20 h-20 bg-[#F2F6FF]'>
                            <img className='w-12 h-12' src="/icon-auditing.png" alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h4 className='text-[24px] font-bold'>Audit {'&'} Assurance</h4>
                            <p className='text-[18px] text-[#656C7E]'>Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.</p>
                            <div className='flex items-center gap-1 text-[#0147FF]'>
                                <button className=' font-bold '>Read More</button>
                                <FaArrowRight className='w-3 h-3 font-normal' />
                            </div>
                        </div>
                    </div>
*/