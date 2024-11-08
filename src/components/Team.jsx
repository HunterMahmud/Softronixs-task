import React from 'react';

const Team = () => {
    return (
        <div className='bg-[#00206D] '>
            <div className='py-[124px] w-[1296px] mx-auto space-y-12'>
                <div className='flex justify-center items-center'>
                    <h1 className='text-center w-[636px] text-[52px] text-white font-bold'>Meet the experts behind your success</h1>
                </div>
                {/* image */}
                <div className='flex items-center gap-6'>
                    <div className='w-[306px] h-[380px]  '>
                        <img className='w-[306px] h-[380px]' src="/team1.png" alt="" />
                    </div>
                    <div className='w-[306px] h-[380px]  '>
                        <div className="relative w-[306px] h-[380px]">
                            {/* Image */}
                            <img
                                className="w-full h-full object-cover"
                                src="/team2.jpeg"
                                alt="Team Member"
                            />

                            {/* Custom Gradient Overlay */}
                            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,32,109,0)_50.47%,#00206D_100%)] before:z-10"></div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex flex-col ml-6 justify-end pb-6 text-white z-20">
                                <h5 className="text-[24px] text-[#F6F5F3] font-bold">Ronald Richards</h5>
                                <p className="text-[#F6F5F3]">Finance Advisor</p>
                            </div>
                        </div>


                    </div>
                    <div className='w-[306px] h-[380px]  '>
                        <img className='w-[306px] h-[380px]' src="/team3.png" alt="" />
                    </div>
                    <div className='w-[306px] h-[380px]  '>
                        <img className='w-[306px] h-[380px]' src="/team4.jpeg" alt="" />
                    </div>

                </div>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-2 h-2' src="/Ellipsewhite.png" alt="" />
                    <img className='w-4 h-4' src="/Ellipsewhite1.png" alt="" />
                    <img className='w-2 h-2' src="/Ellipsewhite.png" alt="" />
                    <img className='w-2 h-2' src="/Ellipsewhite.png" alt="" />
                    <img className='w-2 h-2' src="/Ellipsewhite.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Team;