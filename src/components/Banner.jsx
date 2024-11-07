import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className='font-Grotesk bg-[#00206d] py-[100px] flex items-center justify-center'>
                <div className='custom-container flex justify-between h-[330px] '>
                    <div>
                        <span className="flex w-[660px] h-[330px] justify-start items-start font text-[100px] font-bold leading-[110px] text-white tracking-[-4px]  text-left z-[35]">
                            Consultations drive business growth
                        </span>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className="flex w-[526px] h-[90px] justify-start items-start text-[18px] font-normal leading-[30px] text-[#f2f6ff] ">
                            Studio agencies excel in graphic design, design, branding, and visual
                            elements, offering comprehensive solutions for businesses' design
                            needs graphic platforms.
                        </span>
                        <div className='flex w-[174px] h-[60px] pt-[22px] pr-[36px] pb-[22px] pl-[36px] gap-[10px] justify-center items-center flex-nowrap bg-white '>
                            <span className="h-[16px] shrink-0 basis-auto  text-[16px] font-bold leading-[16px] text-[#00206d] relative text-left whitespace-nowrap z-[41]">
                                Explore More
                            </span>
                        </div>
                        <div className='flex w-[328px] h-[60px] gap-[16px] items-center flex-nowrap  z-[42]'>

                            <div className='flex w-[132px] gap-[-24px] items-center shrink-0 flex-nowrap relative z-[43]'>
                                <div className='w-[60px] h-[60px] shrink-0 relative z-[44]'>
                                    <div className='w-full h-full bg-[url(../team-01.jpg)]  bg-no-repeat rounded-full absolute top-0 left-0 z-[45]' />
                                </div>
                                <div className='w-[60px] h-[60px] shrink-0 relative z-[46] ml-[-25px]'>
                                    <div className='w-full h-full bg-[url(./team-03.svg)]  bg-no-repeat rounded-full absolute top-0 left-0 z-[47]' />
                                </div>
                                <div className='w-[60px] h-[60px] shrink-0 relative z-[48] ml-[-25px]'>

                                    <div className='w-full h-full font-bold border-2 border-white flex justify-center items-center bg-[#0147FF] text-white rounded-full absolute top-0 left-0 z-[49]' > 10k </div>
                                </div>
                            </div>
                            <span className="flex w-[180px] h-[60px] justify-start items-start shrink-0 text-[20px] font-bold leading-[30px] text-[#fefefe] relative text-left overflow-hidden z-[51]">
                                More than 10k+
                                <br />
                                trusted customers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#00206d] pb-[90px] flex items-end justify-end'>
                <div className='h-[800px] relative'>
                    <img src="/banner1.jpg" alt="banner" className='w-[1420px] h-full ' />
                    <div className='absolute right-10 top-7 w-[120px] h-[120px] bg-white flex items-center justify-center rounded-full'>
                        <button className='h-[60px] w-[60px]'>
                            <MdArrowOutward className='font-bold w-full h-full text-[#00206D] text-3xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
