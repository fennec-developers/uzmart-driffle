import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Importez vos images de jeux ici
import imagecard1 from '../../public/recommended/1.webp';
import imagecard2 from '../../public/recommended/2.webp';
import imagecard3 from '../../public/recommended/3.webp';
import imagecard4 from '../../public/recommended/4.webp';
import imagecard5 from '../../public/recommended/5.webp';
import imagecard6 from '../../public/recommended/6.webp';

interface CardGameProps {
  image: string;
  title: string;
  platform: string;
  region: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  currency: string;
}

const CardGame: React.FC<CardGameProps> = ({
  image,
  title,
  platform,
  region,
  originalPrice,
  discountedPrice,
  discountPercentage,
  currency
}) => {
  return (
    <div className="bg-[#161616] hover:bg-[#1a1a1a] transition-all duration-300 rounded-lg overflow-hidden cursor-pointer w-[200px] h-[400px] mx-auto shadow-md hover:shadow-lg shadow-black/50">
      {/* Image du jeu */}
      <div className="h-[275px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu texte */}
      <div className="p-3">
        {/* Titre du jeu */}
        <h3 className="text-white font-medium text-sm line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        
        {/* Région (en bleu ciel) */}
        <p className="text-[#4885FF] text-xs mt-1 font-medium">{region}</p>
        
        {/* Prix */}
        <div className="mt-2">
          <div className="text-xs text-gray-400">from</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white font-bold text-md">{currency} {discountedPrice}</span>
            <div className="bg-[#FF3E3E] text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestSellingGames: React.FC = () => {
  const games = [
    {
      id: 1,
      image: imagecard1,
      title: "Palworld (Global) (PC) - Steam - Digital Key",
      platform: "PC",
      region: "Global",
      originalPrice: "5,797.99",
      discountedPrice: "5,391.14",
      discountPercentage: "7%",
      currency: "DZD"
    },
    {
      id: 2,
      image: imagecard2,
      title: "EA SPORTS FC 24 (Global) (PC) - EA App - Digital Key",
      platform: "PC",
      region: "Global",
      originalPrice: "7,999.99",
      discountedPrice: "5,999.99",
      discountPercentage: "25%",
      currency: "DZD"
    },
    {
      id: 3,
      image: imagecard3,
      title: "The Last of Us Part II",
      platform: "PS5, PS4",
      region: "Global",
      originalPrice: "$49.99",
      discountedPrice: "$39.99",
      discountPercentage: "20%",
      currency: "USD"
    },
    {
      id: 4,
      image: imagecard4,
      title: "Red Dead Redemption 2",
      platform: "PC, PS4, Xbox One",
      region: "Global",
      originalPrice: "$39.99",
      discountedPrice: "$29.99",
      discountPercentage: "25%",
      currency: "USD"
    },
    {
      id: 5,
      image: imagecard5,
      title: "Hogwarts Legacy",
      platform: "PC, PS5, Xbox Series X/S",
      region: "Global",
      originalPrice: "$59.99",
      discountedPrice: "$44.99",
      discountPercentage: "25%",
      currency: "USD"
    },
    {
      id: 6,
      image: imagecard6,
      title: "Cyberpunk 2077",
      platform: "PC, PS5, Xbox Series X/S",
      region: "Global",
      originalPrice: "$49.99",
      discountedPrice: "$29.99",
      discountPercentage: "40%",
      currency: "USD"
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#0C0C0C] w-full">
      <div style={{ maxWidth: '1500px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Best Selling Games</h2>
          
          {/* Navigation buttons déplacés en haut */}
          <div className="flex items-center gap-3">
            <button className="bestselling-swiper-button-prev bg-[#212121] rounded-full p-2.5 text-white hover:bg-[#383838] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button className="bestselling-swiper-button-next bg-[#212121] rounded-full p-2.5 text-white hover:bg-[#383838] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>

          </div>
        </div>
        
        <div className="relative" id="bestselling-swiper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.bestselling-swiper-button-next',
              prevEl: '.bestselling-swiper-button-prev',
            }}
            // Suppression de l'autoplay
            loop={true}
            slidesPerView={1.5}
            spaceBetween={8}
            slidesPerGroup={2} // Fait défiler 2 cartes à la fois
            className="w-full"
            breakpoints={{
              540: { slidesPerView: 2.2, spaceBetween: 8, slidesPerGroup: 2 },
              768: { slidesPerView: 3.2, spaceBetween: 10, slidesPerGroup: 2 },
              1024: { slidesPerView: 4.3, spaceBetween: 12, slidesPerGroup: 2 },
              1280: { slidesPerView: 5.5, spaceBetween: 12, slidesPerGroup: 2 },
            }}
          >
            {games.map((game) => (
              <SwiperSlide key={game.id}>
                <CardGame
                  image={game.image}
                  title={game.title}
                  platform={game.platform}
                  region={game.region}
                  originalPrice={game.originalPrice}
                  discountedPrice={game.discountedPrice}
                  discountPercentage={game.discountPercentage}
                  currency={game.currency}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Bouton View All en bas */}
        <div className="flex justify-center mt-10">
          <a 
            href="#" 
            className="bg-[#212121] hover:bg-[#383838] text-white font-medium rounded-md px-6 py-3 transition-colors duration-300 inline-flex items-center gap-2"
          >
            show all
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingGames;
