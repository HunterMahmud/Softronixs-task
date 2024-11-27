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
      icon: "/icon-policy.svg",
    },
    {
      title: "Finance Planning",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-planning.svg",
    },
    {
      title: "Audit & Assurance",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-auditing.svg",
    },
    {
      title: "Tax Consulting",
      description:
        "Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.",
      icon: "/icon-policy.svg",
    },
  ];

  return (
    <div className="bg-[#F2F6FF] font-Grotesk px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32">
      <style>
  {`
    .swiper-button-prev,
    .swiper-button-next {
      display: none !important; /* Hides the navigation arrows */
    }
  `}
</style>
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
            el: ".work-policy-pagination",
            bulletClass: "work-policy-pagination-bullet",
            bulletActiveClass: "work-policy-pagination-bullet-active",
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
        <div className="work-policy-pagination flex justify-center items-center gap-3"></div>

      </div>
    </div>
  );
};

export default WorkPolicy;