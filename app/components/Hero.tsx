import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import slide1Img from '../../public/slider/1.webp'
import slide2Img from '../../public/slider/2.webp'
import slide3Img from '../../public/slider/3.webp'
import slide4Img from '../../public/slider/4.webp'
import slide5Img from '../../public/slider/5.webp'
import slide6Img from '../../public/slider/6.webp'

import hero1Img from '../../public/hero/1.webp'
import hero2Img from '../../public/hero/2.webp'
import hero3Img from '../../public/hero/3.webp'
import hero4Img from '../../public/hero/4.webp'
import hero5Img from '../../public/hero/5.webp'
import '../Hero.css'

const Hero = () => {
  return (
    <section className='min-h-[60vh] w-full mx-auto bg-[#0C0C0C] py-4 sm:py-6 lg:py-10 box-border'>
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[70vh] max-w-[95%] md:max-w-[90%] lg:max-w-[86%] gap-3 md:gap-4 px-0 sm:px-4 mx-auto box-border">
        {/* Left Column */}
        <div className="w-full lg:w-[70%] flex gap-3 md:gap-4 flex-col">
          {/* Swiper section (top) */}
          <div className="h-[40vh] md:h-[50vh] lg:flex-[7] rounded-xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              id="hero-swiper"
              className="w-full h-full"
              slidesPerView={1}
            >
              {[slide1Img, slide2Img, slide3Img, slide4Img, slide5Img, slide6Img].map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={slide}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Row */}
          <div className="h-[18vh] md:h-[25vh] lg:h-auto lg:flex-[3] flex gap-2 md:gap-4">
            <div className="w-1/2 rounded-xl overflow-hidden h-full">
              <img
                src={hero1Img}
                alt="Bottom Left"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-1/2 rounded-xl overflow-hidden h-full">
              <img
                src={hero3Img}
                alt="Bottom Right"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Hidden on small screens, visible as horizontal items on medium screens */}
        <div className="w-full mt-2 md:mt-0 lg:mt-0 lg:w-[30%] grid grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4">
          <div className="h-[16vh] md:h-[25vh] lg:h-auto lg:flex-[1.25] rounded-xl overflow-hidden">
            <img
              src={hero2Img}
              alt="Right Top"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-[16vh] md:h-[25vh] lg:h-auto lg:flex-[1] rounded-xl overflow-hidden">
            <img
              src={hero4Img}
              alt="Right Middle"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-[16vh] md:h-[25vh] lg:h-auto lg:flex-[1] rounded-xl overflow-hidden">
            <img
              src={hero5Img}
              alt="Right Bottom"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
