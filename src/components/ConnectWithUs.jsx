import React from 'react';

const ConnectWithUs = () => {
    return (
        <div className='py-[80px] lg:py-[124px] px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32 bg-[#F2F6FF]'>
            <div className=' bg-white mx-auto  flex flex-col lg:flex-row justify-between gap-10'>
                <div className=' flex flex-col justify-between p-5 lg:p-9 gap-5'>
                    <h1 className='text-[#00206D] font-bold text-[30px] text-center lg:text-left lg:text-[52px]'>Let’s Build an Awesome Project Together</h1>
                    <p className='text-[#656C7E] text-[17px] lg:text-[18px]  text-center lg:text-left'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

                    <div className='flex justify-start flex-col md:flex-row gap-5 mx-auto lg:mx-0 max-w-[440px]'>
                        <div className='flex items-center mx-auto md:mx-0'>
                            <div className='bg-[#00206D]  h-[84px] w-[84px] rounded-full flex items-center justify-center'>
                            <img className=' lg:h-auto lg:w-auto' src="./customer.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[20px]  text-center md:text-left font-bold text-[#0A1D35]'>380+ Projects Done</h5>
                            <p className='text-[#656C7E]  text-center md:text-left'>From banking and insurance to wealth the management and security on there</p>
                        </div>
                    </div>
                    <div className='flex justify-start flex-col md:flex-row gap-5 mx-auto lg:mx-0 max-w-[440px]'>
                        <div className='flex items-center mx-auto md:mx-0'>
                            <div className='bg-[#00206D] h-[84px] w-[84px] rounded-full flex items-center justify-center'>
                                <img className=' lg:h-auto lg:w-auto' src="./happy.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[20px] font-bold text-[#0A1D35]  text-center md:text-left'>300+ Happy Clients</h5>
                            <p className='text-[#656C7E]  text-center md:text-left'>From banking and insurance to wealth the management and security on there</p>
                        </div>
                    </div>


                </div>
                <div className='bg-[#0147FF] p-4 md:p-6 space-y-7'>
                    <div>
                        <h5 className='font-bold text-[20px] lg:text-[36px] text-white'>Make an Appointment</h5>
                        <p className='text-[#F4F4F4]'>Feel free to contact with us, we don’t spam your email</p>
                    </div>
                    <form className='space-y-4 mt-7'>
                        <input className='w-full h-[50px] p-4' type="text" placeholder='First Name *'/>
                        <input className='w-full h-[50px] p-4' type="email" placeholder='Email Here *'/>
                        <input className='w-full h-[50px] p-4' type="sele" placeholder='Select Service *'/>
                        <textarea className='w-full h-[100px] p-4' placeholder='Your Comment *'></textarea>
                        <button className='bg-[#00206D] font-bold text-[#FFFFFF] px-5 py-3'>Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConnectWithUs;