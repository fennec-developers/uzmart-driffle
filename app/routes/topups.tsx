import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroLeft from '../../public/hero/hero-left.webp'
import HeroRight from '../../public/hero/hero-right.webp'
import ProductImage1 from '../../public/products/1.webp'
import ProductImage2 from '../../public/products/2.webp'
import ProductImage3 from '../../public/products/3.webp'
import ProductImage4 from '../../public/products/4.webp'
import ProductImage5 from '../../public/products/5.webp'
import TopupImg1 from '../../public/topups/choose-your-game.webp'
import TopupImg2 from '../../public/topups/enter-account-details.webp'
import TopupImg3 from '../../public/topups/pay-with-any-payment.webp'
import TopupImg4 from '../../public/topups/pick-denomination.webp'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';
const Topups = () => {
    const [search, setSearch] = useState('');
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const productImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4, ProductImage5];
    const topupSwiperImages = [TopupImg1, TopupImg2, TopupImg3, TopupImg4]
    const products = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        image: productImages[i % productImages.length],
        name: `Product ${i + 1}`,
        country: 'Global'
    }));

    const swiperCards = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        image: topupSwiperImages[i % topupSwiperImages.length],
        title: `Swiper Card ${i + 1}`,
        subtitle: 'Subtitle'
    }));

    return (
        <div className='bg-[#161616]'>

            {/* Hero Section */}
            <section className="relative text-center min-h-[60vh] bg-black overflow-hidden">
                <img
                    src={HeroLeft}
                    alt="Hero Left"
                    width={'66%'}
                    className="absolute left-[-20%] top-[0%] hidden md:block"
                />
                <img
                    src={HeroRight}
                    alt="Hero Right"
                    width={'40%'}
                    className="absolute right-[-10%] top-[-10%] hidden md:block"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center px-4">
                        <h1 className="text-[3.2em] font-bold text-white leading-[1.2em]">
                            <span className='text-purple-500'>Instantly Top-Up</span> <br />
                            Your Favorite Games!
                        </h1>
                        <p className="text-md mt-2 text-[#8f8f8f]">Enhance your gameplay with quick top-ups <br /> of in-game currency.</p>
                    </div>
                </div>
            </section>

            {/* Products List */}
            <section className="space-y-6 lg:max-w-[76%] mx-auto py-20">
                <h2 className='text-white text-3xl font-bold'>Top-up Your Account</h2>
                <div className="w-[92%]">
                    <form className="w-full">
                        <label htmlFor="custom-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none transition-colors duration-300 peer-focus:text-white">
                                <svg className="w-4 h-4 text-white peer-focus:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="custom-search"
                                //   ref={searchInputRef}
                                //   onFocus={() => setShowSearchList(true)}
                                //   onChange={(e) => setSearchTerm(e.target.value)}
                                //   value={searchTerm}
                                className="peer block  w-full text-[17px] placeholder:text-[17px] font-medium p-3 pt-4 ps-10 text-sm text-gray-100 bg-[#212121] rounded-md placeholder-gray-500 placeholder:text-[12px] placeholder:font-medium focus:outline-none focus:ring-0 focus:border-0"
                                placeholder="Search games, in-game currencies, etc for topup"
                                required
                            />
                        </div>
                    </form>
                </div>


                <div className="grid px-10 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products
                        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
                        .map(product => (
                            <div className={`border border-gray-300/30 cursor-pointer rounded-lg overflow-hidden h-[420px] !shadow-lg 
                                !hover:shadow-2xl hover:bg-[#323232]  transition-shadow transition duration-300 bg-[#212121]`}>
                                <img src={product.image} alt="" className='!h-[80%] w-full' />
                                <div className="content p-[0.8rem]">
                                    <h3 className='recommended-card-title text-white text-md'>{product.name}</h3>
                                    <div className="relative top-4">

                                        <p className='recommended-card-country text-[17px] text-[#4885ff] font-bold'>{product.country}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="text-center">
                    <button className="mt-10 px-6 py-3 bg-[#353535] text-white font-bold rounded-full hover:bg-[#484848] transition">View more products</button>
                </div>
            </section>

            {/* Swiper Section */}
            <section className='bg-black mx-auto py-20'>
                <div className='lg:max-w-[76%] mx-auto'>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-white text-[32px]">How Direct Top-Up Works</h2>
                        <div className="flex gap-2">
                            {/* Optional custom swiper navigation */}
                            <button ref={prevRef} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                                <ChevronLeft size={20} />
                            </button>
                            <button ref={nextRef} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper: any) => {
                            if (typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                    >
                        {swiperCards.map(card => (
                            <SwiperSlide key={card.id} className="">
                                <div className="border rounded p-4 text-center">
                                    <img src={card.image} alt={card.title} className="mx-auto !w-full" />
                                    <h3 className="mt-2 font-medium">{card.title}</h3>
                                    <p className="text-sm text-gray-500">{card.subtitle}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>
        </div>
    );
};

export default Topups;
