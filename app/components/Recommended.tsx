import React from 'react';
import recommendedImg1 from '../../public/recommended/1.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Recommended = ({ title, showBtn, fromPrice, discount, productPage }: { title: string, showBtn: boolean, fromPrice: boolean, discount: boolean, productPage: boolean }) => {

    const ProductCard = () => (
        // RESPONSIVE HEIGHT: Taller on mobile, shorter on desktop
        <div className={`border border-gray-700/80 rounded-lg overflow-hidden h-[440px] lg:h-[420px] shadow-lg bg-[#212121] transition-transform hover:-translate-y-1`}>
            <img src={recommendedImg1} alt="" className='h-[68%] w-full object-cover' />
            <div className="p-3">
                <h3 className='recommended-card-title text-white text-sm'>PlayStation Store 50 EUR Gift Card (Germany) - Digital Key</h3>
                <p className='recommended-card-country text-[#4885ff] font-bold text-xs mt-1'>POLAND</p>
                <div className="price mt-2">
                    {fromPrice && (
                        <div className="from-price flex text-[12px] px-2 py-1.5 rounded-sm items-center text-white gap-2 border border-purple-600/50 my-2 bg-[#282032]">
                            {/* SVG */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8E2DE2" /><stop offset="100%" stop-color="#4A00E0" /></linearGradient></defs><circle cx="12" cy="12" r="12" fill="url(#grad)" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif" font-weight="bold">p</text></svg>
                            <span>from DZD 123,456</span>
                        </div>
                    )}
                    <span className='recommended-price-from text-gray-400 text-xs'>from</span>
                    <div className="amount flex justify-between items-center">
                        <p className='recommended-price text-white font-bold'>DZD 123,345</p>
                        {discount && <p className='discount-price text-white bg-red-500 px-2 py-0.5 rounded-sm text-xs font-bold'>-60%</p>}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className='bg-[#0c0c0c]'>
            <div className={`py-10 mx-auto relative ${productPage ? 'px-0' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
                <h2 className='text-white font-bold text-2xl sm:text-3xl capitalize mb-6 px-4 sm:px-0'>{title}</h2>
                <Swiper
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 1.5, spaceBetween: 15 },
                        640: { slidesPerView: 2.5, spaceBetween: 20 },
                        768: { slidesPerView: 3.5, spaceBetween: 30 },
                        1024: { slidesPerView: productPage ? 4 : 5, spaceBetween: 30 },
                    }}
                    className="mySwiper px-4 sm:px-0"
                    id="recommended-swiper"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index}><ProductCard /></SwiperSlide>
                    ))}
                </Swiper>
                {showBtn && (
                    <div className="flex items-center justify-center mt-8">
                        <a href='' className="text-white text-center font-semibold bg-[#212121] px-6 py-2.5 rounded-full text-sm cursor-pointer hover:bg-[#383838] transition">Show All</a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Recommended;