
import React, { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Marvin McKinney",
            role: "Product Manager",
            review:
                "Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are already company and the reviews that I have already are all excellent. Not only the design but the are company and the reviews code",
            image: "./testimoni1.png",
        },
        {
            id: 2,
            name: "Jane Cooper",
            role: "Software Engineer",
            review:
                "This platform has been a game-changer for my work! The templates are easy to use and perfectly designed. Highly recommended!",
            image: "https://thumbs.dreamstime.com/b/indian-man-young-good-looking-people-smiling-standing-isolated-white-background-31400054.jpg",
        },
        {
            id: 3,
            name: "Albert Flores",
            role: "CEO, TechWorld",
            review:
                "I love how customizable and user-friendly the templates are. They’ve saved me hours of work. Simply amazing!",
            image: "https://www.yourtango.com/sites/default/files/image_blog/2024-09/types-of-singles-professional.png",
        },
    ];

    // State to track the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers for navigation
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Current testimonial data
    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className='px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32 mx-auto my-[80px] lg:my-[124px] flex flex-col lg:flex-row justify-between gap-5'>
            <div className=' flex flex-col justify-between gap-5'>
                <h1 className='text-[#00206D] font-bold text-[30px] lg:text-[52px] text-center lg:text-left'>Happy Users AroundFrom Worlds</h1>
                <p className='text-[#656C7E] text-[18px]  text-center lg:text-left'>Ever find yourself staring at your computer screen a good consulting slogan to coind yourself.</p>
                <div className='flex flex-col 3xl:flex-row justify-start gap-5'>
                    <div className='flex lg:w-[224px] h-[60px] gap-[16px] items-center flex-nowrap w-full z-[42]'>
                        <div className='flex w-[132px] gap-[-24px] items-center shrink-0 flex-nowrap relative z-[43] mx-auto lg:mx-0'>
                            <div className='w-[60px] h-[60px] shrink-0 relative z-[44]'>
                                <div className='w-full h-full bg-[url(../team-01.jpg)]  bg-no-repeat rounded-full absolute top-0 left-0 z-[45]' />
                            </div>
                            <div className='w-[60px] h-[60px] shrink-0 relative z-[46] ml-[-25px]'>
                                <div className='w-full h-full bg-[url(../team-03.svg)]  bg-no-repeat rounded-full absolute top-0 left-0 z-[47]' />
                            </div>
                            <div className='w-[60px] h-[60px] shrink-0 relative z-[48] ml-[-25px]'>
                                <div className='w-full h-full bg-[url(../team-03.svg)]  bg-no-repeat rounded-full absolute top-0 left-0 z-[49]' />
                            </div>
                            <div className='w-[60px] h-[60px] shrink-0 relative z-[50] ml-[-25px]'>
                                <div className='w-full h-full font-bold border-2 border-white flex justify-center items-center bg-[#0147FF] text-white rounded-full absolute top-0 left-0 z-[51]' > 10k </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='xl:text-[17px] 2xl:text-[20px] font-bold text-[#00206D] text-center lg:text-left'>Trusted by 5000+ Worldwide Brands & Customers</p>
                    </div>
                </div>
                <div className=' mx-auto lg:mx-0 my-5'>
                    <button className='bg-[#0147FF] text-white font-bold py-5 px-9'>Make Appointment</button>
                </div>
            </div>

            <div className='hidden lg:block'>
                <div className='flex justify-center items-center h-full'>
                    <div className='w-[60px] h-[60px] bg-[#F2F6FF] flex justify-center items-center rounded-full cursor-pointer'
                        onClick={handlePrev}>
                        <GoArrowLeft className='h-6 w-6 text-[#00206D]' />
                    </div>
                </div>
            </div>
            <div className='p-7 lg:max-w-[526px] min-h-[300px] bg-[#F2F6FF] flex flex-col justify-around gap-5'>

                <div className='flex gap-2'>

                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"
                                fill="#ECB014"
                            />
                        </svg>
                    ))}

                </div>
                <p className='text-[18px] text-[#656C7E]'>“ {currentTestimonial.review} ”</p>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-[62px] w-[62px] rounded-full object-cover' src={`${currentTestimonial.image}`} alt="" />
                    <div className=''>
                        <h5 className='font-bold text-[#180030] text-[20px]'>{currentTestimonial.name}</h5>
                        <p className='text-[#525D71] '>{currentTestimonial.role}</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center gap-2 lg:gap-0 mt-5'>
                <div className='w-[60px] h-[60px] bg-[#F2F6FF] lg:hidden flex justify-center items-center rounded-full cursor-pointer'
                    onClick={handlePrev}>
                    <GoArrowLeft className='h-6 w-6 text-[#00206D]' />
                </div>
                <div className='w-[60px] h-[60px] bg-[#F2F6FF]  flex justify-center items-center rounded-full cursor-pointer'
                    onClick={handleNext}>
                    <GoArrowRight className='h-6 w-6 text-[#00206D]' />
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
