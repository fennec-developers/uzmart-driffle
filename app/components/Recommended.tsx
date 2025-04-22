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
const Recommended = () => {
    return (
        <section className='bg-[#0c0c0c] min-h-[20vh]'>
            <div className='max-w-[76%] py-10 mx-auto relative'>
                <h2 className='text-white font-bold text-[28px] capitalize mb-5'>Recommended for you</h2>
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
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg1} alt=""/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg1} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg2} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg3} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg4} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg5} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg6} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg7} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' border border-gray-400 rounded-lg overflow-hidden '>
                            <img src={recommendedImg8} alt="" className=''/>
                            <div className="content p-[0.8rem]">
                                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                                <p className='recommended-card-country text-[#4885ff] font-bold'>POLAND</p>
                                <div className="price mt-[8px]">
                                    <span className='recommended-price-from text-gray-300 text-[12px] '>from</span>
                                    <p className='recommended-price text-white font-sm font-bold '>DZD 123,345</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Recommended
