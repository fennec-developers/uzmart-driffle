import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
type PlatformProps = {
    section: 'platforms';
    data: string[];
    path: string;
};

type CategoryItem = {
    name: string;
    image: string;
};

type CategoryProps = {
    section: 'categories';
    data: CategoryItem[];
    path: string;
};

type ExploreProps = PlatformProps | CategoryProps;

const Explore = ({ data, path, section }: { data: ExploreProps, path: string, section: string }) => {
    const [scrollSpeed, setScrollSpeed] = useState(50); // pixels per second
    const controls = useAnimation();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const delta = Math.abs(window.scrollY - lastScrollY);
            lastScrollY = window.scrollY;
            setScrollSpeed(Math.max(10, 50 - delta)); // reduce speed on scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        controls.start({
            x: ['0%', '-100%'],
            transition: {
                ease: 'linear',
                duration: 100 / scrollSpeed,
                repeat: Infinity,
            },
        });
    }, [scrollSpeed]);
    return (
        <section className='bg-[#161616]'>
            {/* Responsive container and padding */}
            <div className="py-10 mx-auto text-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Explore by <span className='capitalize'>{section}</span></h2>
                <div className="w-full overflow-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={section === 'categories' ? 20 : 15}
                        slidesPerView="auto"
                        freeMode={true}
                        loop={true}
                        autoplay={{ delay: 1, disableOnInteraction: false }}
                        speed={8000}
                        allowTouchMove={false}
                        className="explore-swiper"
                    >
                        {section === 'platforms' && (data as string[]).map((img, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }} className='cursor-pointer'>
                                <img src={`/${path}/${img}`} alt={`Platform ${index}`} className="w-40 sm:w-52 h-auto object-contain rounded-xl" />
                            </SwiperSlide>
                        ))}
                        {section === 'categories' && (data as CategoryItem[]).map((item, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <div className='w-36 h-28 sm:w-44 sm:h-32 object-cover rounded-xl shadow-md text-center flex items-center justify-center bg-[#484848] font-semibold text-lg'>
                                    {item.name}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Explore
