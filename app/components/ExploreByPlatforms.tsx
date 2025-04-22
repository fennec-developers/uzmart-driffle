import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import xbox from '../../public/categories/xbox.png';
import gogcom from '../../public/categories/gogcom.png';
import nintendo from '../../public/categories/nintendo.png';
import playstation from '../../public/categories/playstation.png';
import rockstar from '../../public/categories/rockstar.png';
import steam from '../../public/categories/steam.png';
import epicgames from '../../public/categories/epicgames.png';


interface PlatformCardProps {
  icon: string;
  name: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ icon, name }) => {
    return (
      <div className="bg-[#131313] hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl overflow-hidden cursor-pointer h-[150px] mx-auto w-full max-w-[250px]">
        <div className="p-0 flex items-center justify-center h-full w-full">
          <img 
            src={icon} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    );
  };

const ExploreByPlatforms: React.FC = () => {
  const platforms = [
    { icon: steam, name: 'Steam' },
    { icon: playstation, name: 'PlayStation' },
    { icon: xbox, name: 'Xbox' },
    { icon: nintendo, name: 'Nintendo' },
    { icon: epicgames, name: 'Epic Games' },
    { icon: gogcom, name: 'GOG.com' },
    { icon: rockstar, name: 'Rockstar' },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px est le breakpoint pour md dans Tailwind
    };

    // Vérifier au chargement
    handleResize();

    // Écouter les changements de taille
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-[#0C0C0C] w-full">
      <div style={{ maxWidth: '1500px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Explore By Platforms</h2>
         
        </div>
        
        <div className="relative" id="platforms-swiper">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            slidesPerView={1.2} // Affiche 1.2 carte pour montrer une partie de la suivante
            spaceBetween={16}
            centeredSlides={false}
            loop={true} // Ajoute l'effet de boucle infinie
            className="w-full"
            breakpoints={{
              500: { 
                slidesPerView: 2.2, // Affiche 2.2 cartes pour montrer une partie de la suivante
                spaceBetween: 16 
              },
              640: { 
                slidesPerView: 2.5, 
                spaceBetween: 20 
              },
              768: { 
                slidesPerView: 4, 
                spaceBetween: 20
              },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
              1536: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {platforms.map((platform, index) => (
              <SwiperSlide key={index}>
                <PlatformCard 
                  icon={platform.icon}
                  name={platform.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ExploreByPlatforms;