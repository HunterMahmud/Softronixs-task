import React from 'react';

const ConnectWithUs = () => {
    return (
        <div className='py-[124px] bg-[#F2F6FF]'>
            <div className=' bg-white p-10 w-[1296px] mx-auto  flex justify-between'>
                <div className='w-[526px] flex flex-col justify-between gap-5'>
                    <h1 className='text-[#00206D] font-bold text-[52px]'>Let’s Build an Awesome Project Together</h1>
                    <p className='text-[#656C7E] text-[18px]'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

                    <div className='flex justify-start gap-5 w-[440px]'>
                        <div className='flex items-center'>
                            <div className='bg-[#00206D] h-[84px] w-[84px] rounded-full flex items-center justify-center'>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_68_22)">
                                        <path d="M47.8044 20.4712L39.7705 10.0349C39.4731 9.64891 38.9308 9.55369 38.5195 9.81517L33.3325 13.114H26.5675C26.48 13.114 26.3928 13.1327 26.3086 13.1572L21.0634 14.6671L15.6207 13.1784L10.3323 9.81517C9.92797 9.55809 9.3955 9.64525 9.09484 10.018L0.208733 21.0249C-0.110603 21.4204 -0.0578681 21.9979 0.327386 22.3293L4.98486 26.3375L9.16333 31.9684C7.94128 33.2702 7.96508 35.3236 9.23657 36.5954C9.80017 37.1587 10.5168 37.4769 11.254 37.5509C11.2284 37.7179 11.2152 37.8874 11.2152 38.0596C11.2152 38.948 11.5613 39.7833 12.1893 40.4114C12.8177 41.0398 13.6531 41.3859 14.5415 41.3859C14.5536 41.3859 14.5653 41.3851 14.577 41.3848C14.5767 41.4075 14.5756 41.4298 14.5756 41.4525C14.5756 42.3409 14.9216 43.1763 15.5497 43.8047C16.1781 44.4327 17.0134 44.7788 17.9019 44.7788C18.0773 44.7788 18.2509 44.7645 18.4211 44.7381C18.4933 45.4779 18.8123 46.1979 19.3777 46.7633C20.0259 47.4119 20.8777 47.736 21.7295 47.736C22.5813 47.736 23.4331 47.4119 24.0817 46.7633L24.5903 46.2546L24.8038 46.4267C25.4469 47.0497 26.2819 47.361 27.1168 47.361C27.9686 47.361 28.8204 47.0369 29.4686 46.3883C30.1304 45.7266 30.4545 44.8531 30.4409 43.9841C31.3096 43.9973 32.1833 43.6736 32.8451 43.0122C33.5061 42.3508 33.8302 41.4781 33.8174 40.6095C34.7223 40.6238 35.5807 40.2762 36.2212 39.6357C36.8829 38.974 37.207 38.1006 37.1935 37.2316C38.0629 37.2447 38.9359 36.921 39.5977 36.2593C40.7271 35.1299 40.8724 33.3841 40.0349 32.0954L43.0858 25.7058L47.6726 21.7588C48.0516 21.4325 48.1095 20.867 47.8044 20.4712ZM10.0312 11.8546L13.834 14.2727L5.56164 24.3508L2.2467 21.4977L10.0312 11.8546ZM10.5677 33.2223L11.7154 32.0746C11.7502 32.0398 11.7869 32.0068 11.8242 31.9761C12.0487 31.793 12.3204 31.6838 12.6083 31.6578C12.6163 31.6571 12.6248 31.6571 12.6328 31.6567C12.6738 31.6534 12.7148 31.6512 12.7562 31.6516C13.1495 31.6571 13.515 31.8179 13.786 32.1039C14.3177 32.666 14.2892 33.5845 13.7223 34.1514L12.6094 35.2643C12.0465 35.8271 11.1306 35.8271 10.5677 35.2643C10.0049 34.701 10.0049 33.7851 10.5677 33.2223ZM13.5205 39.0802C13.2477 38.8077 13.0975 38.4452 13.0975 38.0596C13.0975 37.6739 13.2477 37.3114 13.5205 37.0386L15.746 34.8131C16.1722 34.3868 16.8424 34.27 17.3873 34.5296C17.9491 34.7973 18.2651 35.4071 18.1827 36.0205C18.1388 36.3479 17.9864 36.6562 17.7528 36.8902L15.5625 39.0802C15.2897 39.353 14.9271 39.5032 14.5415 39.5032C14.1559 39.5032 13.7933 39.353 13.5205 39.0802ZM16.8809 42.4731C16.608 42.2007 16.4579 41.8381 16.4579 41.4525C16.4579 41.0669 16.608 40.7043 16.8809 40.4315L19.106 38.206C19.5619 37.7505 20.2932 37.6523 20.8513 37.9772C21.3611 38.2738 21.628 38.8561 21.5405 39.4361C21.4925 39.7551 21.3409 40.055 21.1128 40.2832L18.9228 42.4731C18.65 42.746 18.2875 42.8961 17.9019 42.8961C17.5162 42.8961 17.1537 42.746 16.8809 42.4731ZM20.7085 45.4321C20.1456 44.8693 20.1456 43.9534 20.7085 43.3905L21.8562 42.2428C21.891 42.208 21.9272 42.1754 21.9646 42.1446C21.9657 42.1439 21.9664 42.1432 21.9672 42.1424C22.1539 41.9908 22.3733 41.8894 22.6073 41.8451C22.6128 41.8443 22.6183 41.8436 22.6238 41.8429C22.6641 41.8356 22.7051 41.8297 22.7461 41.826C22.7626 41.8246 22.779 41.8246 22.7959 41.8235C22.8296 41.8216 22.8629 41.8194 22.897 41.8198C23.2899 41.8253 23.6558 41.9857 23.9268 42.2721C23.9601 42.3072 23.9912 42.3439 24.0198 42.3816C24.4526 42.9474 24.3944 43.7878 23.8572 44.3254L22.7501 45.4325C22.1873 45.9953 21.2714 45.995 20.7085 45.4321ZM38.2665 34.9281C37.7036 35.4913 36.7877 35.491 36.2249 34.9281C36.2043 34.9076 36.1827 34.8885 36.1608 34.8706L30.1088 28.7549C29.7429 28.3854 29.1471 28.3824 28.7776 28.7483C28.4081 29.1138 28.4051 29.7096 28.7706 30.0791L34.8882 36.2604C34.8889 36.2611 34.8896 36.2618 34.8904 36.2626C35.4532 36.8254 35.4532 37.7417 34.8904 38.3046C34.6176 38.5774 34.255 38.7275 33.8694 38.7275C33.4834 38.7275 33.1208 38.5774 32.8484 38.3046L28.756 34.1697C28.3905 33.8002 27.7947 33.7972 27.4252 34.1627C27.0557 34.5286 27.0527 35.1244 27.4182 35.4939L31.448 39.5654C31.4685 39.5911 31.4905 39.6156 31.5139 39.639C32.0768 40.2019 32.0768 41.1182 31.5139 41.681C30.9507 42.2439 30.0344 42.2435 29.4716 41.6807L27.238 39.4237C26.8722 39.0542 26.2764 39.0509 25.9069 39.4167C25.5374 39.7822 25.5344 40.378 25.8999 40.7475L28.0712 42.9412C28.0917 42.9668 28.1136 42.9917 28.1374 43.0151C28.7003 43.578 28.7003 44.4943 28.1374 45.0571C27.5746 45.6203 26.6587 45.62 26.0958 45.0571C26.031 44.9923 25.9548 44.9425 25.8823 44.8868C25.8208 44.84 25.8047 44.8074 25.8354 44.7327C25.8666 44.6568 25.9131 44.5884 25.9442 44.5122C25.9786 44.4272 26.0065 44.3397 26.0336 44.2518C26.1779 43.7867 26.2203 43.2865 26.1555 42.8038C26.031 41.8777 25.5216 41.042 24.7496 40.5132C24.3325 40.2279 23.8499 40.0408 23.3496 39.9704C23.592 38.9011 23.3009 37.7417 22.5436 36.9415C21.9203 36.2831 21.0784 35.9136 20.1727 35.9011C20.1398 35.9007 20.1068 35.9007 20.0735 35.9011C20.0936 35.0369 19.7794 34.1781 19.1836 33.5486C18.5599 32.8901 17.718 32.5206 16.8127 32.5082C16.5436 32.5045 16.2718 32.5331 16.0096 32.5935C15.8976 31.8138 15.5046 31.0924 14.9095 30.5764C14.3181 30.0644 13.5743 29.7803 12.7822 29.7693C11.9484 29.7572 11.1291 30.0648 10.5099 30.624L6.87158 25.7215L15.5757 15.1175L18.3497 15.8763L14.7268 22.2693C14.2888 23.0423 14.1782 23.9396 14.4152 24.7958C14.6521 25.6523 15.208 26.365 15.9811 26.803C16.0294 26.8304 16.0781 26.8564 16.1276 26.8813C16.1312 26.8832 16.1349 26.885 16.1389 26.8868C16.2689 26.9516 16.4026 27.0073 16.5381 27.0542C17.1691 27.2728 17.8506 27.2966 18.5079 27.115C19.3641 26.878 20.0768 26.3218 20.5148 25.5491L22.8691 21.3944L27.0729 21.6925L38.2668 32.8861C38.8293 33.4493 38.8293 34.3652 38.2665 34.9281ZM38.6565 30.6138L28.1554 20.113C28.1356 20.0929 28.1147 20.0738 28.0931 20.0559C27.9419 19.9299 27.7544 19.8537 27.5566 19.8398L22.4095 19.4747C22.0536 19.4502 21.6998 19.6395 21.524 19.9497L18.8771 24.6211C18.687 24.9565 18.3776 25.1979 18.0059 25.3008C17.6345 25.4037 17.2449 25.3553 16.9091 25.1653C16.5736 24.9752 16.3323 24.6658 16.2294 24.2941C16.1265 23.9223 16.1744 23.5327 16.3649 23.1972L19.8984 16.961L21.3303 16.5491C21.3398 16.5461 21.349 16.5425 21.3585 16.5395L26.7026 14.9963H33.1597L41.2207 25.2436L38.6565 30.6138ZM42.4537 23.7663L34.9991 14.2848L38.8037 11.8652L45.7694 20.9132L42.4537 23.7663Z" fill="white" />
                                        <path d="M29.0797 11.3466C29.3207 11.3466 29.5616 11.2546 29.7455 11.0708L36.1747 4.6416C36.5424 4.27393 36.5424 3.6781 36.1747 3.31042C35.807 2.94275 35.2112 2.94275 34.8435 3.31042L28.4143 9.73963C28.0466 10.1073 28.0466 10.7031 28.4143 11.0708C28.5981 11.2546 28.8391 11.3466 29.0797 11.3466Z" fill="white" />
                                        <path d="M18.2538 11.0708C18.4376 11.2546 18.6786 11.3466 18.9196 11.3466C19.1602 11.3466 19.4011 11.2546 19.585 11.0708C19.9526 10.7031 19.9526 10.1073 19.585 9.73963L13.1558 3.31042C12.7881 2.94275 12.1923 2.94275 11.8246 3.31042C11.4569 3.6781 11.4569 4.27393 11.8246 4.6416L18.2538 11.0708Z" fill="white" />
                                        <path d="M23.9998 11.3466C24.5194 11.3466 24.9409 10.925 24.9409 10.4054V5.08472C24.9409 4.56506 24.5194 4.14355 23.9998 4.14355C23.4801 4.14355 23.0586 4.56506 23.0586 5.08472V10.4054C23.0586 10.925 23.4801 11.3466 23.9998 11.3466Z" fill="white" />
                                        <path d="M23.1307 1.67358C23.2801 2.03576 23.6525 2.27343 24.0455 2.25292C24.4337 2.23278 24.7746 1.97057 24.8947 1.60107C25.0152 1.22863 24.8841 0.804191 24.5721 0.566886C24.2538 0.324455 23.81 0.310905 23.4771 0.530998C23.1058 0.776359 22.9619 1.26488 23.1307 1.67358Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_68_22">
                                            <rect width="48" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                        </div>
                        <div>
                            <h5 className='w-[292px] text-[20px] font-bold text-[#0A1D35]'>380+ Projects Done</h5>
                            <p className='text-[#656C7E]'>From banking and insurance to wealth the management and security on there</p>
                        </div>
                    </div>
                    <div className='flex justify-start gap-5 w-[440px]'>
                        <div className='flex items-center'>
                            <div className='bg-[#00206D] h-[84px] w-[84px] rounded-full flex items-center justify-center'>
                                <img src="./happy.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h5 className='w-[292px] text-[20px] font-bold text-[#0A1D35]'>300+ Happy Clients</h5>
                            <p className='text-[#656C7E]'>From banking and insurance to wealth the management and security on there</p>
                        </div>
                    </div>


                </div>
                <div className='bg-[#0147FF] p-6 w-[493px] space-y-7'>
                    <div>
                        <h5 className='font-bold text-[36px] text-white'>Make an Appointment</h5>
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