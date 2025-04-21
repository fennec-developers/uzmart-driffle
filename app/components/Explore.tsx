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
        <section className='bg-[#212121]'>
            <div className="py-10 px-4  text-white max-w-[76%] py-10 mx-auto relative">
                <h2 className="text-2xl font-bold mb-6">Explore by <span className='capitalize'>{section}</span></h2>
                <div className="w-full overflow-hidden py-4 px-4">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView="auto"
                        freeMode={true}
                        loop={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={7000}
                        allowTouchMove={false}
                        grabCursor={true}
                        className="rounded-xl"
                    >
                        {section === 'platforms' && data.map((img, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <img
                                    src={`${path}/${img}`}
                                    alt={`Slide ${index}`}
                                    className="w-[210px] h-[110px] object-cover rounded-xl shadow-md"
                                />
                            </SwiperSlide>
                        ))}

                        {section === 'categories' && data.map((item, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <div className='flex items-center justify-cenetr bg-[#353535] rounded-lg py-6 px-10'>
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
