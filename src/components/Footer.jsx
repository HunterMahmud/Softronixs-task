import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#00206D] pb-[60px]'>
            <div className='px-2 md:px-5 lg:px-16 xl:px-20 2xl:px-32 mx-auto  text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between py-[80px] lg:py-[124px] gap-10 items-center mx-auto'>
                    {/* website logo with links */}
                    <div className='flex flex-col items-center justify-between mx-auto'>
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_177)">
                                        <path d="M37.7986 27.7397C37.7525 27.6406 37.7096 27.5583 37.6698 27.4924C37.0105 26.305 35.7506 24.8475 33.8909 23.1196L33.8516 23.08L33.8319 23.0606L33.812 23.0407H33.792C32.948 22.2361 32.4135 21.6951 32.1897 21.4181C31.7801 20.8905 31.6884 20.3564 31.9122 19.8153C32.0703 19.4064 32.6644 18.5429 33.6929 17.2237C34.2339 16.5246 34.6623 15.9642 34.9788 15.5421C37.2608 12.5082 38.2502 10.5695 37.9466 9.72529L37.8288 9.528C37.7496 9.40922 37.5451 9.30056 37.2158 9.20146C36.8856 9.10258 36.4637 9.08622 35.9491 9.15213L30.2512 9.19149C30.1589 9.15878 30.0271 9.16183 29.8554 9.20146C29.6839 9.2411 29.5981 9.26099 29.5981 9.26099L29.4989 9.31054L29.4202 9.37007C29.3542 9.40943 29.2816 9.47866 29.2024 9.57761C29.1236 9.67622 29.0577 9.79195 29.0051 9.92382C28.3847 11.5198 27.6794 13.0037 26.8878 14.3754C26.3998 15.1933 25.9515 15.9021 25.5422 16.5023C25.1334 17.1023 24.7905 17.5444 24.5137 17.8277C24.2365 18.1114 23.9863 18.3386 23.7617 18.5102C23.5373 18.682 23.3661 18.7545 23.2475 18.728C23.1287 18.7014 23.0168 18.6751 22.9108 18.6488C22.7263 18.53 22.5778 18.3685 22.4659 18.164C22.3535 17.9596 22.2779 17.7023 22.2383 17.3923C22.1989 17.0821 22.1756 16.8154 22.169 16.591C22.1628 16.367 22.1657 16.0501 22.179 15.6412C22.1928 15.2322 22.1989 14.9554 22.1989 14.8103C22.1989 14.309 22.2087 13.7649 22.2283 13.178C22.2483 12.591 22.2644 12.126 22.2779 11.7834C22.2914 11.4404 22.2976 11.0776 22.2976 10.695C22.2976 10.3125 22.2743 10.0125 22.2283 9.79479C22.1829 9.57734 22.1131 9.36626 22.0211 9.16162C21.9286 8.95719 21.7932 8.79905 21.6155 8.68679C21.4375 8.57467 21.2161 8.48569 20.9527 8.41958C20.2536 8.26137 19.3633 8.17579 18.2815 8.16248C15.8283 8.13615 14.252 8.29456 13.5529 8.63752C13.2759 8.78242 13.0253 8.9804 12.8012 9.23085C12.5637 9.52114 12.5306 9.67955 12.702 9.70561C13.4935 9.82418 14.0539 10.1078 14.3837 10.5562L14.5025 10.7939C14.5949 10.9653 14.6873 11.2688 14.7796 11.704C14.8719 12.1392 14.9314 12.6206 14.9576 13.148C15.0234 14.111 15.0234 14.9354 14.9576 15.6211C14.8915 16.3072 14.8292 16.8413 14.7696 17.2238C14.7101 17.6063 14.6211 17.9163 14.5025 18.1536C14.3837 18.391 14.3046 18.5362 14.265 18.5888C14.2254 18.6415 14.1924 18.6747 14.1662 18.6877C13.9948 18.7534 13.8165 18.7869 13.6319 18.7869C13.4471 18.7869 13.223 18.6944 12.9592 18.5097C12.6956 18.3249 12.4219 18.0712 12.1383 17.748C11.8546 17.4247 11.5348 16.9729 11.1785 16.3926C10.8225 15.8123 10.4532 15.1265 10.0706 14.3351L9.75415 13.7612C9.55631 13.392 9.28604 12.8544 8.94309 12.1488C8.59993 11.443 8.29661 10.7603 8.03293 10.1008C7.92753 9.82383 7.76919 9.61296 7.55817 9.46785L7.45915 9.40832C7.39331 9.35565 7.28763 9.29973 7.14266 9.24013C6.99748 9.18061 6.846 9.13792 6.68758 9.11165L1.26649 9.15102C0.71252 9.15102 0.336649 9.27651 0.138734 9.52716L0.0595268 9.64573C0.0199578 9.71177 0 9.81725 0 9.96242C0 10.1075 0.039569 10.2856 0.118776 10.4965C0.910157 12.3565 1.77077 14.1502 2.7006 15.8781C3.63044 17.606 4.43846 18.9978 5.12416 20.0524C5.81 21.1077 6.50907 22.1037 7.22139 23.04C7.9337 23.9765 8.4052 24.5767 8.63589 24.8404C8.86686 25.1045 9.04828 25.302 9.18016 25.4339L9.67488 25.9087C9.99143 26.2253 10.4563 26.6045 11.0696 27.0463C11.6831 27.4883 12.3623 27.9235 13.1075 28.3525C13.8529 28.7809 14.72 29.1304 15.7094 29.4007C16.6986 29.6713 17.6614 29.7799 18.598 29.7275H20.8733C21.3348 29.6877 21.6844 29.5426 21.922 29.2921L22.0007 29.193C22.0537 29.1143 22.1032 28.9919 22.149 28.8274C22.1953 28.6625 22.2183 28.4809 22.2183 28.2833C22.2047 27.7162 22.2479 27.2052 22.3466 26.7502C22.4452 26.2953 22.5576 25.9523 22.6833 25.7214C22.809 25.4906 22.9507 25.2959 23.1085 25.138C23.2667 24.9798 23.3793 24.884 23.4455 24.851C23.5112 24.8178 23.5636 24.7953 23.6032 24.7818C23.9197 24.6763 24.2923 24.7784 24.7214 25.0887C25.1501 25.3986 25.5522 25.7814 25.9284 26.2362C26.3043 26.6915 26.756 27.2023 27.2835 27.7694C27.8114 28.3367 28.2729 28.7583 28.6684 29.0357L29.064 29.2732C29.3281 29.4316 29.6711 29.5767 30.0933 29.7086C30.5147 29.8404 30.8839 29.8733 31.2009 29.8074L36.2657 29.7284C36.7666 29.7284 37.1564 29.6455 37.4329 29.4809C37.71 29.3161 37.8746 29.1344 37.9277 28.9369C37.9806 28.7391 37.9834 28.5147 37.9377 28.2638C37.8908 28.0136 37.8446 27.8386 37.7986 27.7397Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_177">
                                            <rect width="38" height="38" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className="text-[29px] font-bold">Flexio</span>
                        </div>
                        <div className='space-y-4 mt-4 mx-auto'>
                            <p className='md:text-[18px] text-center w-full max-w-[300px]'>Each demo built with Teba will look different. You can customize almost anythin appearance of your website with only a few.</p>
                            <div className='flex gap-2 justify-center items-center text-center w-full'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.625 17.5C14.8889 17.5 13.1701 17.125 11.4688 16.375C9.76736 15.625 8.22222 14.5556 6.83333 13.1667C5.44444 11.7778 4.375 10.2361 3.625 8.54167C2.875 6.84722 2.5 5.125 2.5 3.375V2.5H7.41667L8.1875 6.6875L5.8125 9.08333C6.11806 9.625 6.45833 10.1389 6.83333 10.625C7.20833 11.1111 7.61111 11.5625 8.04167 11.9792C8.44444 12.3819 8.88542 12.7674 9.36458 13.1354C9.84375 13.5035 10.3611 13.8472 10.9167 14.1667L13.3333 11.75L17.5 12.6042V17.5H16.625Z" fill="white" />
                                </svg>
                                <p className='text-center'>123-456-7890</p>
                            </div>
                            <div className='flex gap-2 justify-center items-center text-center w-full'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66666 16.6663V3.33301H18.3333V16.6663H1.66666ZM9.99999 10.833L16.6667 6.66634V4.99967L9.99999 9.16634L3.33332 4.99967V6.66634L9.99999 10.833Z" fill="white" />
                                </svg>
                                <p className='text-center'>flexio@example.com</p>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center md:items-start'>
                        <h5 className='text-[20px] font-bold text-center w-full'>Quick Links</h5>
                        <a className='md:text-[18px]  text-center w-full' href="">About Us</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Our Team</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Pricing Plans</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Blogs</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Contact Us</a>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center md:items-start'>
                        <h5 className='text-[20px] font-bold text-center w-full'>Services</h5>
                        <a className='md:text-[18px]  text-center w-full' href="">UI/UX Design</a>
                        <a className='md:text-[18px]  text-center w-full' href="">App Development</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Digital Marketing</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Web Development</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Cyber Security</a>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center md:items-start'>
                        <h5 className='text-[20px] font-bold w-full text-center'>Information</h5>
                        <a className='md:text-[18px]  text-center w-full' href="">Working Process</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Privacy Policy</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Terms {"&"} Conditions</a>
                        <a className='md:text-[18px]  text-center w-full' href="">Faqs</a>
                    </div>

                </div>
                <div className='h-[1px] bg-[#525D7180]'></div>
                <div className='flex flex-col md:flex-row justify-between items-center py-10 gap-5'>
                    <div className='text-[#F2F6FF] text-center md:text-left'>Copyright © 2024 ducor. All rights reserved.</div>
                    <div className='flex gap-3'>
                        <div className='h-11 w-11 bg-white flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6663 11.2503H13.7497L14.583 7.91699H11.6663V6.25033C11.6663 5.39251 11.6663 4.58366 13.333 4.58366H14.583V1.78374C14.3116 1.7477 13.2855 1.66699 12.2021 1.66699C9.94001 1.66699 8.33301 3.04771 8.33301 5.58342V7.91699H5.83301V11.2503H8.33301V18.3337H11.6663V11.2503Z" fill="#00206D" />
                        </svg>
                        </div>
                        <div className='h-11 w-11 bg-[#0147FF] flex items-center justify-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.78375 4.16645C5.78345 4.84504 5.37175 5.45569 4.7428 5.71045C4.11385 5.96521 3.39324 5.81321 2.92077 5.32613C2.4483 4.83904 2.31831 4.11413 2.5921 3.49323C2.8659 2.87233 3.4888 2.47942 4.16709 2.49978C5.06798 2.52682 5.78416 3.26515 5.78375 4.16645ZM5.83375 7.06645H2.50042V17.4998H5.83375V7.06645ZM11.1004 7.06645H7.78375V17.4998H11.0671V12.0248C11.0671 8.97475 15.0421 8.69142 15.0421 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4504 5.94145 11.0671 8.46642L11.1004 7.06645Z" fill="white" />
                            </svg>
                        </div>
                        <div className='h-11 w-11 bg-white flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5104 4.71386C17.8743 4.99528 17.1996 5.18011 16.5088 5.26225C17.2366 4.82659 17.7812 4.14124 18.0411 3.33386C17.3573 3.74016 16.6088 4.02613 15.8282 4.17933C15.1693 3.47637 14.2483 3.07801 13.2848 3.0791C11.3605 3.0791 9.79975 4.63933 9.79975 6.56451C9.79975 6.83764 9.83109 7.1025 9.88967 7.35806C6.99206 7.21219 4.42506 5.82553 2.70565 3.71666C2.39608 4.24855 2.23338 4.85314 2.2342 5.46855C2.2342 6.67765 2.84967 7.74485 3.78458 8.36965C3.23115 8.35215 2.6899 8.20269 2.20599 7.9336C2.20545 7.94824 2.20545 7.96288 2.20545 7.97672C2.20545 9.66582 3.40683 11.0748 5.00166 11.3947C4.70234 11.4757 4.3936 11.5167 4.08352 11.5164C3.85831 11.5164 3.63976 11.4957 3.42733 11.4549C3.8711 12.8392 5.15739 13.8471 6.683 13.8747C5.44845 14.8437 3.92391 15.3693 2.35453 15.3671C2.07677 15.3673 1.79925 15.3509 1.52344 15.3181C3.1167 16.3423 4.97127 16.8859 6.86535 16.8839C13.2763 16.8839 16.7817 11.5734 16.7817 6.96808C16.7817 6.8174 16.778 6.6662 16.7713 6.51713C17.4536 6.0242 18.0425 5.41355 18.5104 4.71386Z" fill="#00206D" />
                        </svg>

                        </div>
                        <div className='h-11 w-11 bg-white flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8567 1.66699C11.7946 1.66854 12.2698 1.67351 12.6805 1.68573L12.8422 1.69102C13.0291 1.69766 13.2134 1.70599 13.4357 1.71641C14.3224 1.75738 14.9273 1.89766 15.4586 2.10391C16.0078 2.31572 16.4717 2.60183 16.9349 3.06503C17.3974 3.52822 17.6836 3.99349 17.8961 4.54141C18.1016 5.07197 18.2419 5.67753 18.2836 6.56433C18.2935 6.78655 18.3015 6.97088 18.3081 7.15775L18.3133 7.31949C18.3255 7.73011 18.3311 8.20543 18.3328 9.1433L18.3335 9.76463C18.3336 9.84055 18.3336 9.91888 18.3336 9.99972L18.3335 10.2348L18.333 10.8562C18.3314 11.794 18.3265 12.2694 18.3142 12.68L18.3089 12.8417C18.3023 13.0286 18.294 13.213 18.2836 13.4351C18.2426 14.322 18.1016 14.9268 17.8961 15.458C17.6842 16.0074 17.3974 16.4713 16.9349 16.9345C16.4717 17.397 16.0057 17.6831 15.4586 17.8955C14.9273 18.1011 14.3224 18.2414 13.4357 18.2831C13.2134 18.293 13.0291 18.3011 12.8422 18.3076L12.6805 18.3128C12.2698 18.3251 11.7946 18.3306 10.8567 18.3324L10.2353 18.333C10.1594 18.333 10.0811 18.333 10.0002 18.333H9.76516L9.14375 18.3325C8.20591 18.331 7.7306 18.326 7.31997 18.3137L7.15824 18.3085C6.97136 18.3018 6.78703 18.2935 6.56481 18.2831C5.67801 18.2421 5.07384 18.1011 4.5419 17.8955C3.99328 17.6838 3.5287 17.397 3.06551 16.9345C2.60231 16.4713 2.3169 16.0053 2.1044 15.458C1.89815 14.9268 1.75856 14.322 1.7169 13.4351C1.707 13.213 1.69892 13.0286 1.69238 12.8417L1.68714 12.68C1.67495 12.2694 1.66939 11.794 1.66759 10.8562L1.66748 9.1433C1.66903 8.20543 1.67399 7.73011 1.68621 7.31949L1.69151 7.15775C1.69815 6.97088 1.70648 6.78655 1.7169 6.56433C1.75786 5.67683 1.89815 5.07266 2.1044 4.54141C2.3162 3.9928 2.60231 3.52822 3.06551 3.06503C3.5287 2.60183 3.99398 2.31641 4.5419 2.10391C5.07315 1.89766 5.67731 1.75808 6.56481 1.71641C6.78703 1.70652 6.97136 1.69844 7.15824 1.6919L7.31997 1.68666C7.7306 1.67446 8.20591 1.6689 9.14375 1.6671L10.8567 1.66699ZM10.0002 5.83308C7.69781 5.83308 5.83356 7.69935 5.83356 9.99972C5.83356 12.3021 7.69984 14.1664 10.0002 14.1664C12.3027 14.1664 14.1669 12.3001 14.1669 9.99972C14.1669 7.69732 12.3006 5.83308 10.0002 5.83308ZM10.0002 7.49974C11.381 7.49974 12.5002 8.61863 12.5002 9.99972C12.5002 11.3805 11.3813 12.4997 10.0002 12.4997C8.6195 12.4997 7.50023 11.3809 7.50023 9.99972C7.50023 8.61897 8.61908 7.49974 10.0002 7.49974ZM14.3752 4.58308C13.8008 4.58308 13.3336 5.04967 13.3336 5.62403C13.3336 6.19841 13.8002 6.66572 14.3752 6.66572C14.9496 6.66572 15.4169 6.19913 15.4169 5.62403C15.4169 5.04967 14.9488 4.58236 14.3752 4.58308Z" fill="#00206D" />
                        </svg>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;