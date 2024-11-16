import React from 'react';

const Services = () => {
    return (
        <div className="my-[80px] lg:my-[100px] px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32  flex justify-center items-center mx-auto ">
            <div className='flex justify-center items-center mx-auto w-full'>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 mx-auto w-full">

                    {/* Service Item 1 */}
                    <div className="flex items-center w-full max-w-[400px] lg:max-w-full gap-5 mx-auto">
                        <div className="w-24 h-24 lg:w-20 lg:h-20 bg-[#F2F6FF] flex items-center justify-center rounded-lg">
                            <img className="w-8 h-8 md:w-12 md:h-12" src="./icon1.png" alt="icon" />
                        </div>
                        <div className='w-full'>
                            <h3 className="font-bold text-lg lg:text-xl text-[#00206D]">
                                Highly Expert Team
                            </h3>
                            <p className="text-sm lg:text-base text-[#656C7E]">
                                Finance helps you to convert into a strategic asset get.
                            </p>
                        </div>
                    </div>

                    {/* Service Item 2 */}
                    <div className="flex items-center w-full max-w-[400px] lg:max-w-full gap-5 mx-auto">
                        <div className="w-24 h-24 lg:w-20 lg:h-20 bg-[#F2F6FF] flex items-center justify-center rounded-lg">
                            <img className="w-8 h-8 md:w-12 md:h-12" src="./icon2.png" alt="icon" />
                        </div>
                        <div className='w-full'>
                            <h3 className="font-bold text-lg lg:text-xl text-[#00206D]">
                                24/7 Customer Service
                            </h3>
                            <p className="text-sm lg:text-base text-[#656C7E]">
                                Finance helps you to convert into a strategic asset get.
                            </p>
                        </div>
                    </div>

                    {/* Service Item 3 */}
                    <div className="flex items-center w-full max-w-[400px] lg:max-w-full gap-5 mx-auto">
                        <div className="w-24 h-24 lg:w-20 lg:h-20 bg-[#F2F6FF] flex items-center justify-center rounded-lg">
                            <img className="w-8 h-8 md:w-12 md:h-12" src="./icon3.png" alt="icon" />
                        </div>
                        <div className='w-full'>
                            <h3 className="font-bold text-lg lg:text-xl text-[#00206D]">
                                Competitive Pricing
                            </h3>
                            <p className="text-sm lg:text-base text-[#656C7E]">
                                Finance helps you to convert into a strategic asset get.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#656c7e1e] max-w-screen-xl mx-auto mt-16"></div>
        </div>
    );
};

export default Services;
