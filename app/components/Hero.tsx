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
    <section className='min-h-[60vh] mx-auto bg-[#0C0C0C]'>
      <div className="flex h-[70vh] max-w-[80%] gap-4 py-10 mx-auto">
        {/* Left Column */}
        <div className="w-[70%] flex gap-4 flex-col">
          {/* Swiper section (top) */}
          <div className="flex-[7] rounded-xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              id="hero-swiper"
              className="w-full h-full"
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
          <div className="flex-[3] flex gap-4">
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                src={hero1Img}
                alt="Bottom Left"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-1/2 rounded-xl overflow-hidden">
              <img
                src={hero3Img}
                alt="Bottom Right"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[30%] flex flex-col gap-4">
          <div className="flex-[1.25] rounded-xl overflow-hidden">
            <img
              src={hero2Img}
              alt="Right Top"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-[1] rounded-xl overflow-hidden">
            <img
              src={hero4Img}
              alt="Right Middle"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-[1] rounded-xl overflow-hidden">
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
