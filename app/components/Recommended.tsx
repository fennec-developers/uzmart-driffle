import React from 'react'
import recommendedImg1 from '../../public/recommended/1.webp'
import recommendedImg2 from '../../public/recommended/2.webp'
import recommendedImg3 from '../../public/recommended/3.webp'
import recommendedImg4 from '../../public/recommended/4.webp'
import recommendedImg5 from '../../public/recommended/5.webp'
import recommendedImg6 from '../../public/recommended/6.webp'
import recommendedImg7 from '../../public/recommended/7.webp'
import recommendedImg8 from '../../public/recommended/8.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Recommended = ({ title, showBtn, fromPrice, discount }: { title: string, showBtn: boolean, fromPrice: boolean, discount: boolean }) => {
    return (
        <section className='bg-[#0c0c0c] min-h-[20vh]'>
            <div className='max-w-[76%] py-10 mx-auto relative'>
                <h2 className='text-white font-bold text-[28px] capitalize mb-5'>{title}</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper !px-[100px]"
                    id="recommended-swiper"
                >
                    <SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className={`border border-gray-300/30 rounded-lg overflow-hidden h-[${fromPrice ? '440px' : '420px'}] !shadow-lg 
                        !hover:shadow-2xl transition-shadow duration-300 bg-[#212121]`}>
                            <img src={recommendedImg1} alt="" className='!h-[68%] w-full' />
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price">
                                    {fromPrice && (
                                        <div className="from-price flex text-[12px] px-3 py-2 rounded-sm items-center text-white gap-2 border border-purple-500 my-1 bg-[#282032]">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stop-color="#8E2DE2" />
                                                        <stop offset="100%" stop-color="#4A00E0" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                                                <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text>
                                            </svg>
                                            <span>from DZD 123456 </span>
                                        </div>
                                    )}
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <div className="amount flex justify-between items-center">
                                        <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-1 rounded-sm text-[12px] font-medium '>-60%</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={`flex items-center justify-center ${showBtn ? '' : 'hidden'}`}>
                    <a href='' className={`text-white inline-block mt-5 text-center font-semibold bg-[#212121] px-5 py-2 rounded-full text-[14px] cursor-pointer hover:bg-[#383838] transition`}>Show All</a>
                </div>
            </div>
        </section>
    )
}

export default Recommended