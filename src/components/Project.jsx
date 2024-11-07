import React from 'react';

const Project = () => {
    return (
        <div className='w-[1296px] mx-auto my-[124px] space-y-12'>
            <div className='flex justify-between relative '>
                <h4 className='w-[636px] text-[52px] font-bold text-[#00206D]'>A Complete solution for global business</h4>
                <div className='absolute bottom-4 right-0'>
                    <button className='text-white py-5 px-9 font-bold  bg-[#0147FF]'>View All Projects</button>
                </div>
            </div>
            {/* image people */}
            <div className='space-y-10'>
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <img className='w-[620px] h-[470px]' src="/people1.png" alt="" />
                        <h4 className='text-[#00206D] text-[36px] font-bold'>Market Research and Analysis.</h4>
                        <p className='text-[#656C7E] text-[18px]'>Business Analysis  / Marketing</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-[620px] h-[470px]' src="/people2.png" alt="" />
                        <h4 className='text-[#00206D] text-[36px] font-bold'>Business Solution</h4>
                        <p className='text-[#656C7E] text-[18px]'>Development / Marketing</p>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <div className='space-y-2'>
                        <img className='w-[620px] h-[470px]' src="/people3.png" alt="" />
                        <h4 className='text-[#00206D] text-[36px] font-bold'>Best mortgage rates guaranteed</h4>
                        <p className='text-[#656C7E] text-[18px]'>Marketing / Optimized</p>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-[620px] h-[470px]' src="/people4.png" alt="" />
                        <h4 className='text-[#00206D] text-[36px] font-bold'>Based on your Correct situation</h4>
                        <p className='text-[#656C7E] text-[18px]'>Branding / Development / Marketing</p>
                    </div>

                </div>
                
            </div>
        </div>

    );
};

export default Project;