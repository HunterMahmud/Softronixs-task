import React from 'react';

const Project = () => {
    return (
        <div className='mx-auto py-[80px] md:my-[124px] space-y-12 px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32'>
            <div className='flex md:justify-between relative items-center justify-center flex-col md:flex-row'>
                <h4 className='text-[30px] lg:text-[52px] md:max-w-[50%] max-w-full md:w-full font-bold text-[#00206D] text-center md:text-left'>A Complete solution for global business</h4>
                <div className='md:absolute md:bottom-4 md:right-0'>
                    <button className='text-white py-5 px-9 font-bold mt-5 bg-[#0147FF]'>View All Projects</button>
                </div>
            </div>
            {/* image people */}
            <div className='space-y-10 '>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10'>
                    <div className='space-y-2'>
                        <img className='' src="/people1.png" alt="" />
                        <h4 className='text-[#00206D] text-2xl lg:text-[36px] font-bold'>Market Research and Analysis.</h4>
                        <p className='text-[#656C7E] text-[18px]'>Business Analysis  / Marketing</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='' src="/people2.png" alt="" />
                        <h4 className='text-[#00206D] text-2xl lg:text-[36px] font-bold'>Business Solution</h4>
                        <p className='text-[#656C7E] text-[18px]'>Development / Marketing</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='' src="/people3.png" alt="" />
                        <h4 className='text-[#00206D] text-2xl lg:text-[36px] font-bold'>Best mortgage rates guaranteed</h4>
                        <p className='text-[#656C7E] text-[18px]'>Marketing / Optimized</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='' src="/people4.png" alt="" />
                        <h4 className='text-[#00206D] text-2xl lg:text-[36px] font-bold'>Based on your Correct situation</h4>
                        <p className='text-[#656C7E] text-[18px]'>Branding / Development / Marketing</p>
                    </div>

                </div>
                
            </div>
        </div>

    );
};

export default Project;