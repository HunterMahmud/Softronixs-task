import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className='my-[124px] w-[1296px] mx-auto space-y-12'>
            <div className='flex justify-center items-center'>
                <h1 className='text-center w-[636px] text-[52px] text-[#00206D] font-bold'>Recent blog {"&"} articles about technology</h1>
            </div>
            <div className='flex items-center gap-6'>
                <div className='w-[416px] border-[#656C7E4D] border'>
                    <div className='w-[416px] h-[320px]'>
                        <img className='w-[416px] h-[320px]' src="/blog1.png" alt="" />
                    </div>
                    <div className='p-5 space-y-3'>
                        <p className='text-[#0147FF] flex gap-2 items-center'>Knowledge
                            <span>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_45_76)">
                                        <path d="M2.50033 5.08463C3.65091 5.08463 4.58366 4.15188 4.58366 3.0013C4.58366 1.85071 3.65091 0.917969 2.50033 0.917969C1.34973 0.917969 0.416992 1.85071 0.416992 3.0013C0.416992 4.15188 1.34973 5.08463 2.50033 5.08463Z" fill="#0147FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_45_76">
                                            <rect width="5" height="5" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            26 June 2024
                        </p>
                        <h4 className='text-[24px] font-semibold text-[#00206D] '>How You Can Find A Design Job You Will Truly</h4>
                        
                        <div className='flex items-center gap-1 text-[#0147FF]'>
                            <button className='font-bold '>Read More </button>
                            <FaArrowRight className='w-3 h-3 font-normal' />
                        </div>
                    </div>
                </div>
                <div className='w-[416px] border-[#656C7E4D] border'>
                    <div className='w-[416px] h-[320px]'>
                        <img className='w-[416px] h-[320px]' src="/blog2.png" alt="" />
                    </div>
                    <div className='p-5 space-y-3'>
                        <p className='text-[#0147FF] flex gap-2 items-center'>Knowledge
                            <span>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_45_76)">
                                        <path d="M2.50033 5.08463C3.65091 5.08463 4.58366 4.15188 4.58366 3.0013C4.58366 1.85071 3.65091 0.917969 2.50033 0.917969C1.34973 0.917969 0.416992 1.85071 0.416992 3.0013C0.416992 4.15188 1.34973 5.08463 2.50033 5.08463Z" fill="#0147FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_45_76">
                                            <rect width="5" height="5" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            26 June 2024
                        </p>
                        <h4 className='text-[24px] font-semibold text-[#00206D] '>The Missing Advice I Needed When Starting My Career</h4>
                        
                        <div className='flex items-center gap-1 text-[#0147FF]'>
                            <button className='font-bold '>Read More </button>
                            <FaArrowRight className='w-3 h-3 font-normal' />
                        </div>
                    </div>
                </div>
                <div className='w-[416px] border-[#656C7E4D] border'>
                    <div className='w-[416px] h-[320px]'>
                        <img className='w-[416px] h-[320px]' src="/blog3.png" alt="" />
                    </div>
                    <div className='p-5 space-y-3'>
                        <p className='text-[#0147FF] flex gap-2 items-center'>Knowledge
                            <span>
                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_45_76)">
                                        <path d="M2.50033 5.08463C3.65091 5.08463 4.58366 4.15188 4.58366 3.0013C4.58366 1.85071 3.65091 0.917969 2.50033 0.917969C1.34973 0.917969 0.416992 1.85071 0.416992 3.0013C0.416992 4.15188 1.34973 5.08463 2.50033 5.08463Z" fill="#0147FF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_45_76">
                                            <rect width="5" height="5" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            26 June 2024
                        </p>
                        <h4 className='text-[24px] font-semibold text-[#00206D] '>How to Craft The Perfect Web Design and Developer</h4>
                        
                        <div className='flex items-center gap-1 text-[#0147FF]'>
                            <button className='font-bold '>Read More </button>
                            <FaArrowRight className='w-3 h-3 font-normal' />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Blog;