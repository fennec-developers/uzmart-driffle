'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface ExplorCarousselProps {
  path: string;
  images: string[]; 
}

const ExploreCaroussel = ({ path, images }: ExplorCarousselProps) => {
  const loopedImages = [...images, ...images, ...images]; 

  return (
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
        speed={6000}
        allowTouchMove={false}
        grabCursor={true}
        className="rounded-xl"
      >
        {loopedImages.map((img, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <img
              src={`${path}/${img}`}
              alt={`Slide ${index}`}
              className="w-[210px] h-[110px] object-cover rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreCaroussel;  
