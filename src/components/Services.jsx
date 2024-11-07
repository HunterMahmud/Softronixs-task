import React from 'react';

const Services = () => {
    return (
        <div className=' my-[100px]'>
            <div className='flex items-center justify-between mx-auto w-[1296px] h-[174px]'>
                <div className='flex items-center justify-center w-[388px] h-[94px] gap-[20px]'>
                    <div className='w-[90px] h-[90px] bg-[#F2F6FF] flex items-center justify-center'>
                        <img className='w-[48px] h-[48px]' src="./icon1.png" alt="icon" />
                    </div>
                    <div className='h-[94px] w-[274px]'>
                        <h3 className='font-bold text-[20px] text-[#00206D]'>Highly Expert Team</h3>
                        <p className='text-[#656C7E]'>Finance helps you to convert into a strategic asset get.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between w-[388px] h-[94px] gap-[20px]'>
                    <div className='w-[90px] h-[90px] bg-[#F2F6FF] flex items-center justify-center'>
                        <img className='w-[48px] h-[48px]' src="./icon2.png" alt="icon" />
                    </div>
                    <div className='h-[94px] w-[274px]'>
                        <h3 className='font-bold text-[20px] text-[#00206D]'>24/7 Customer Service</h3>
                        <p className='text-[#656C7E]'>Finance helps you to convert into a strategic asset get.</p>
                    </div>

                </div>
                <div className='flex items-center justify-between w-[388px] h-[94px] gap-[20px]'>
                    <div className='w-[90px] h-[90px] bg-[#F2F6FF] flex items-center justify-center'>
                        <img className='w-[48px] h-[48px]' src="./icon3.png" alt="icon" />
                    </div>
                    <div className='h-[94px] w-[274px]'>
                        <h3 className='font-bold text-[20px] text-[#00206D]'>Competitive Pricing</h3>
                        <p className='text-[#656C7E]'>Finance helps you to convert into a strategic asset get.</p>
                    </div>

                </div>

            </div>
            <div className='h-[2px] bg-[#656c7e1e] w-[1296px] mx-auto'>

            </div>
            
        </div>
    );
};

export default Services;