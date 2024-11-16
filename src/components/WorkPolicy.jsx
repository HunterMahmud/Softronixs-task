import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const WorkPolicy = () => {
    return (
        <div className='bg-[#F2F6FF] font-Grotesk px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32'>
            <div className='py-[124px] mx-auto space-y-12'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-center text-[30px] lg:text-[52px] text-[#00206D] font-bold'>We spend one-third of our life at work</h1>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='p-10 bg-white space-y-16 hidden h-[500px] md:h-[550px] lg:h-[500px] md:block  mx-auto'>
                        <div className='flex items-center justify-center w-20 h-20 bg-[#F2F6FF]'>
                            <img className='w-12 h-12' src="/icon-policy.png" alt="" />
                        </div>
                        <div className='space-y-4'>
                            <h4 className='text-[24px] font-bold'>Investment Policy</h4>
                            <p className='text-[18px] text-[#656C7E]'>Morem ipsum dolor sittemet adipiscing Morem ipsum dolor sittemet adipiscing elitflorai psum dolor psum.</p>
                            <div className='flex items-center gap-1 text-[#0147FF]'>
                                <button className=' font-bold '>Read More</button>
                                <FaArrowRight className='w-3 h-3 font-normal' />
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-2 h-2' src="/Ellipse.png" alt="" />
                    <img className='w-4 h-4' src="/Ellipse1.png" alt="" />
                    <img className='w-2 h-2' src="/Ellipse.png" alt="" />
                    <img className='w-2 h-2' src="/Ellipse.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WorkPolicy;