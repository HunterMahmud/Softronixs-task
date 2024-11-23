import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy data for team members
const teamMembers = [
    {
        id: 1,
        name: 'Ronald Richards',
        role: 'Finance Advisor',
        image: '/team1.png',
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'Marketing Manager',
        image: '/team2.jpeg',
    },
    {
        id: 3,
        name: 'John Smith',
        role: 'Product Designer',
        image: '/team3.png',
    },
    {
        id: 4,
        name: 'Emily Johnson',
        role: 'Software Engineer',
        image: '/team4.jpeg',
    },
    {
        id: 5,
        name: 'Ronald Richards',
        role: 'Finance Advisor',
        image: '/team3.png',
    },
    // Add more members as needed
];

const Team = () => {
    return (
        <div className="bg-[#00206D] py-[80px] lg:py-[124px] px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32">
            <div className=" mx-auto space-y-12">
                {/* Title */}
                <div className="flex justify-center items-center">
                    <h1 className="text-center text-[30px] lg:text-[52px] text-white font-bold">
                        Meet the experts behind your success
                    </h1>
                </div>

                {/* Slider */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{
                        clickable: true,
                        el: ".team-pagination",
                        bulletClass: "team-pagination-bullet",
                        bulletActiveClass: "team-pagination-bullet-active",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    modules={[Navigation, Pagination]}
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="relative w-[306px] h-[380px] group mx-auto">
                                {/* Image */}
                                <img
                                    className="w-full h-full object-cover"
                                    src={member.image}
                                    alt={member.name}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,32,109,0)_50.47%,#00206D_100%)] before:z-10"></div>
                                {/* Text Overlay */}
                                <div className="absolute inset-0 flex flex-col ml-6 justify-end pb-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                                    <h5 className="text-[24px] text-[#F6F5F3] font-bold">
                                        {member.name}
                                    </h5>
                                    <p className="text-[#F6F5F3]">{member.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="team-pagination flex justify-center items-center gap-3 mt-10"></div>
        </div>
    );
};

export default Team;
