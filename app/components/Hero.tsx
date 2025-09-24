import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1Img from '../../public/slider/1.webp';
import slide2Img from '../../public/slider/2.webp';
import slide3Img from '../../public/slider/3.webp';
import slide4Img from '../../public/slider/4.webp';
import slide5Img from '../../public/slider/5.webp';
import slide6Img from '../../public/slider/6.webp';
import hero1Img from '../../public/hero/1.webp';
import hero2Img from '../../public/hero/2.webp';
import hero3Img from '../../public/hero/3.webp';
import hero4Img from '../../public/hero/4.webp';
import hero5Img from '../../public/hero/5.webp';

import '../Hero.css';

const Hero = () => {
  return (
    <section className='bg-[#0C0C0C]'>
      {/* 
        This container combines both approaches.
        - Mobile: `px-4 py-6` for nice spacing.
        - Desktop: `lg:max-w-[80%]` and `lg:py-10` to match your desktop version.
      */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:max-w-[80%] lg:py-10">
        {/*
          MAIN LAYOUT BEHAVIOR
          - Mobile (default): A single column (`flex-col`). Height is determined by content (`h-auto`).
          - Desktop (lg): Your exact two-column layout (`lg:flex-row`) with the specific height (`lg:h-[70vh]`).
        */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[70vh]">

          {/* === Left Column: Behaves differently on mobile vs. desktop === */}
          <div className="w-full lg:w-[70%] flex flex-col gap-4">
            {/* Swiper Section */}
            {/* Mobile: takes full space with aspect ratio. Desktop: uses flex-[7] to get correct size. */}
            <div className="aspect-[16/9] lg:aspect-auto lg:flex-[7] rounded-xl overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                id="hero-swiper"
                className="w-full h-full"
              >
                {[slide1Img, slide2Img, slide3Img, slide4Img, slide5Img, slide6Img].map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={slide} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Bottom Row - HIDDEN on mobile, appears on desktop to match your design */}
            <div className="hidden lg:flex lg:flex-[3] gap-4">
              <div className="w-1/2 rounded-xl overflow-hidden">
                <img src={hero1Img} alt="Bottom Left" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 rounded-xl overflow-hidden">
                <img src={hero3Img} alt="Bottom Right" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* === Right Column: Behaves differently on mobile vs. desktop === */}
          {/* Mobile: A 2x1 grid to show key visuals. Desktop: your 3-row flex column. */}
          <div className="w-full lg:w-[30%] grid grid-cols-2 lg:flex lg:flex-col gap-4">
              {/* Image 1: always visible */}
              <div className="aspect-square lg:aspect-auto lg:flex-[1.25] rounded-xl overflow-hidden">
                  <img src={hero2Img} alt="Side Feature 1" className="w-full h-full object-cover" />
              </div>
               {/* Image 2: always visible */}
              <div className="aspect-square lg:aspect-auto lg:flex-[1] rounded-xl overflow-hidden">
                  <img src={hero4Img} alt="Side Feature 2" className="w-full h-full object-cover" />
              </div>
              {/* Image 3: HIDDEN on mobile, appears on desktop */}
              <div className="hidden lg:block lg:flex-[1] rounded-xl overflow-hidden">
                  <img src={hero5Img} alt="Side Feature 3" className="w-full h-full object-cover" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;