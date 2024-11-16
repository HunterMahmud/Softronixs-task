import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className=' font-Grotesk bg-[#00206d] py-[50px] md:py-[100px] flex items-center justify-center'>
                <div className='flex flex-col md:flex-row justify-between gap-5 px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32'>
                    <div className='text-center'>
                        <span className="text-[40px] md:text-[60px] xl:text-[90px] font-bold text-white">
                            Consultations drive business growth
                        </span>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className="text-base md:text-[18px] px-2 md:px-0 text-center md:text-left font-normal text-[#f2f6ff]">
                            Studio agencies excel in graphic design, design, branding, and visual
                            elements, offering comprehensive solutions for businesses' design
                            needs graphic platforms.
                        </span>
                        <div className='flex md:block items-center justify-center'>
                            <button className='px-10 lg:px-20 py-4 lg:py-6 bg-white text-[#00206d] font-bold'>Explore More</button>
                        </div>
                        <div className='flex md:block items-center justify-center'>
                            <div className='flex items-center md:justify-start px-2 md:px-0 relative'>

                                <div className='flex items-center realtive w-[140px]'>
                                    <img className='w-[60px] h-[60px] rounded-full z-[10] absolute' src="/team-01.jpg" alt="" />
                                    <img className='w-[60px] h-[60px] rounded-full z-[11] absolute ml-[35px]' src="/team-03.svg" alt="" />
                                    <div className='w-[60px] h-[60px] font-bold border-2 border-white flex justify-center items-center bg-[#0147FF] text-white rounded-full absolute z-[12] ml-[70px]' > 10k </div>
                                </div>
                                <span className="flex h-[60px] lg:text-[20px] font-bold  text-[#fefefe]">
                                    More than 10k+
                                    <br />
                                    trusted customers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#00206d] pb-[90px] flex justify-end'>
                <div className='flex justify-end w-full h-[350px] sm:h-[500px] md:h-[450px] lg:h-[750px]  relative'>
                    <img src="/banner1.jpg" alt="banner" className='w-full h-full object-cover object-top lg:pl-16 xl:pl-20 2xl:pl-32' />
                    <div className='absolute right-10 top-7 h-[60px] w-[60px] lg:w-[120px] lg:h-[120px] bg-white flex items-center justify-center rounded-full'>
                        <button className='h-[30px] w-[30px] lg:h-[60px] lg:w-[60px]'>
                            <MdArrowOutward className='font-bold w-full h-full text-[#00206D] text-3xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
