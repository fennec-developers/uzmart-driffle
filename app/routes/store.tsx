import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/dialogAnimation.css';
import 'swiper/css';

// Ajoutez ce style en ligne (ou créez un fichier CSS séparé)
const swipeStyles = `
  .categories-swiper .swiper-slide {
    width: auto !important;
  }
`;

// Importez les images pour les cards
import imagecard1 from '../../public/recommended/1.webp';
import imagecard2 from '../../public/recommended/2.webp';
import imagecard3 from '../../public/recommended/3.webp';
import imagecard4 from '../../public/recommended/4.webp';
import imagecard5 from '../../public/recommended/5.webp';
import imagecard6 from '../../public/recommended/6.webp';

// Interface pour les produits
interface ProductCardProps {
  image: string;
  title: string;
  platform: string;
  region: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  currency: string;
}

// Options de filtre
const filterOptions = [
  { name: "Product Type", expanded: false },
  { name: "Platforms", expanded: false },
  { name: "Genres", expanded: false },
  { name: "Languages", expanded: false },
  { name: "Region", expanded: false },
  { name: "Works on", expanded: false }
];

// Types de produits
const productTypes = [
  { name: "DLC", count: "4499" },
  { name: "E-learning", count: "111" },
  { name: "Game", count: "9446" },
  { name: "Game gift", count: "6" },
  { name: "Game point", count: "311" },
  { name: "Gift card", count: "1651" },
  { name: "Software", count: "580" },
  { name: "Subscription", count: "74" },
  { name: "Topup", count: "461" }
];

// Platforms
const platformTypes = [
  { name: "360", count: "1" },
  { name: "Acronis", count: "4" },
  { name: "AdGuard", count: "4" },
  { name: "Aiarty", count: "2" },
  { name: "AIDA64", count: "1" },
  { name: "AirCash", count: "4" },
  { name: "American Express", count: "5" },
  { name: "AnyViewer", count: "2" },
  { name: "AOMEI", count: "33" },
  { name: "Ashampoo", count: "3" },
  { name: "Avast", count: "55" },
  { name: "AVG", count: "68" },
  { name: "Azteco", count: "13" },
  { name: "Battle.net", count: "28" },
  { name: "Be the King Topup", count: "13" },
  { name: "Bigo Live", count: "24" },
  { name: "Bigo Live Topup", count: "9" },
  { name: "Binance", count: "348" },
  { name: "Bitdefender", count: "25" },
  { name: "BitJem", count: "148" },
  { name: "BitJeton", count: "32" },
  { name: "Bitnovo", count: "10" },
  { name: "Bitsa", count: "4" },
  { name: "Bleach Mobile 3D Topup", count: "16" },
  { name: "Blood Strike Topup", count: "6" },
  { name: "Brawlhalla", count: "5" },
  { name: "Steam", count: "20887" },
  { name: "Xbox Live", count: "978" },
  { name: "PSN", count: "162" }
];

// Genres (shorter list as example)
const genreTypes = [
  { name: "Action", count: "5400" },
  { name: "Adventure", count: "3200" },
  { name: "Casual", count: "2800" },
  { name: "Indie", count: "6500" },
  { name: "Massively Multiplayer", count: "1200" },
  { name: "Racing", count: "900" },
  { name: "RPG", count: "3700" },
  { name: "Simulation", count: "2100" },
  { name: "Sports", count: "1100" },
  { name: "Strategy", count: "2900" }
];

// Languages
const languageTypes = [
  { name: "English", count: "22726" },
  { name: "French", count: "9500" },
  { name: "German", count: "9300" },
  { name: "Italian", count: "7800" },
  { name: "Spanish", count: "9100" },
  { name: "Portuguese", count: "6200" },
  { name: "Russian", count: "7500" },
  { name: "Japanese", count: "4100" },
  { name: "Korean", count: "2800" },
  { name: "Chinese", count: "5400" },
  { name: "Arabic", count: "1200" }
];

// Works on
const worksOnTypes = [
  { name: "Windows", count: "22726" },
  { name: "Mac", count: "4897" },
  { name: "Linux", count: "3459" },
  { name: "Xbox One", count: "735" },
  { name: "Xbox Series X|S", count: "731" },
  { name: "Playstation 4", count: "95" },
  { name: "Playstation 5", count: "175" },
  { name: "Nintendo Switch", count: "62" },
  { name: "Android", count: "118" },
  { name: "iOS", count: "87" }
];

// Region
const regionTypes = [
  { name: "Global", count: "18500" },
  { name: "Europe", count: "9800" },
  { name: "North America", count: "8900" },
  { name: "Asia", count: "4500" },
  { name: "Middle East", count: "2100" },
  { name: "Africa", count: "1300" },
  { name: "South America", count: "3200" },
  { name: "Oceania", count: "2800" }
];

// Composant Card de produit (repris de BestSellingGames)
const ProductCard: React.FC<ProductCardProps> = ({
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
    <div className="bg-[#161616] hover:bg-[#1a1a1a] transition-all duration-300 rounded-sm overflow-hidden cursor-pointer w-[170px] sm:w-[200px] h-[400px] sm:h-[430px] md:h-[440px] lg:h-[450px] mx-auto shadow-md hover:shadow-lg shadow-black/50 border[1px] border-[#333]">
      {/* Image du jeu */}
      <div className="h-[220px] sm:h-[275px] xs:h-[260px] md:h-[240px] lg:h-[287px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu texte */}
      <div className="p-3">
        {/* Titre du jeu */}
        <h3 className="text-white font-bold text-sm line-clamp-2 min-h-[40px] font-['Onest']">
          {title}
        </h3>
        
        {/* Région (en bleu ciel) */}
        <p className="text-[#4885FF] text-xs mt-1 font-medium font-['Onest']">{region}</p>
        
        {/* Prix */}
        <div className="mt-2">
          <div className="text-xs text-gray-400 font-['Onest']">from</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-white font-bold text-md font-['Onest']">{currency} {discountedPrice}</span>
            <div className="bg-[#FF3E3E] text-white text-xs font-bold px-2 py-1 rounded font-['Onest']">
              -{discountPercentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant de Filtre pour le drawer mobile
const FilterDrawer: React.FC<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {
  const [drawerClass, setDrawerClass] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Product Type": false,
    "Platforms": false,
    "Genres": false,
    "Languages": false,
    "Region": false,
    "Works on": false
  });
  
  // Function to toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setDrawerClass('dialog-enter');
    } else {
      setDrawerClass('dialog-exit');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}>
      <div 
        className={`${drawerClass} fixed bottom-0 left-0 right-0 bg-[#0c0c0c] rounded-t-xl p-4 h-[85vh] overflow-y-auto z-50`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Filters</h2>
          <button onClick={onClose} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu du filtre - le même que dans la sidebar desktop */}
        <div className="space-y-6">
          {/* Recherche de produit */}
          <div className="mb-6">
            <h3  className="font-medium mb-2 text-white">Product Name</h3>
            <input
              type="text"
              className="w-full bg-[#212121] border border-[#333] rounded-md p-2 text-sm text-white"
              placeholder="Search For Games, Gift Card"
            />
          </div>  

          {/* Checkboxes */}
          <div className="mt-3 space-y-2">
            <div className="flex items-center">
            <input
              type="checkbox"
              id="works-in-algeria"
              defaultChecked
              className="w-4 h-4 text-white bg-transparent border-white border rounded focus:ring-0 accent-white"
            />

              <label htmlFor="worksInAlgeria-mobile" className="text-white">Works in Algeria</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="excludeOutOfStock-mobile"
                className="mr-2 accent-[#4885FF] bg-[#4885FF]"
              />
              <label htmlFor="excludeOutOfStock-mobile" className="text-white">Exclude out of stock products</label>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-white">Price Range (DZD)</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="0"
                className="w-full bg-[#212121] border border-[#333] rounded-md p-2 text-sm text-white"
                min="0"
              />
              <span className="text-white">-</span>
              <input
                type="number"
                placeholder="999"
                className="w-full bg-[#212121] border border-[#333] rounded-md p-2 text-sm text-white"
                min="0"
              />
            </div>
          </div>

          {/* Filters accordions */}
          <div className="space-y-4">
            {/* Product Type with specific data */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Product Type")}
              >
                <span>Product Type</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Product Type"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Product Type"] ? "block" : "hidden"}`}>
                {productTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-product-type-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-product-type-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms filter section */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Platforms")}
              >
                <span>Platforms</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Platforms"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Platforms"] ? "block" : "hidden"}`}>
                {platformTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-platform-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-platform-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Genres filter section */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Genres")}
              >
                <span>Genres</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Genres"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Genres"] ? "block" : "hidden"}`}>
                {genreTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-genre-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-genre-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages filter section */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Languages")}
              >
                <span>Languages</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Languages"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Languages"] ? "block" : "hidden"}`}>
                {languageTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-language-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-language-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Region filter section */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Region")}
              >
                <span>Region</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Region"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Region"] ? "block" : "hidden"}`}>
                {regionTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-region-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-region-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Works on filter section */}
            <div className="border-t border-[#333] pt-4">
              <button 
                className="flex justify-between items-center w-full text-white font-medium"
                onClick={() => toggleSection("Works on")}
              >
                <span>Works on</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="white"
                  className={`transition-transform duration-300 ${expandedSections["Works on"] ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Works on"] ? "block" : "hidden"}`}>
                {worksOnTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id={`mobile-workson-${type.name}`} 
                        type="checkbox" 
                        className="h-4 w-4 mr-2 accent-[#4885FF]" 
                      />
                      <label htmlFor={`mobile-workson-${type.name}`} className="text-white text-sm">{type.name}</label>
                    </div>
                    <span className="text-gray-400 text-xs">{type.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bouton Apply Filter en bas du drawer */}
          <div className="sticky bottom-0 pt-4 mt-8 bg-[#161616] w-full">
            <button 
              className="w-full py-3 bg-[#4885FF] text-white font-medium rounded-lg hover:bg-[#6C9DFF] transition-colors"
              onClick={onClose}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StorePage: React.FC = () => {
  // Déclarer les options de tri avant de les utiliser
  const categories = ["All Products", "Explore", "Games", "Giftcards", "Game points"];
  const sortOptions = ["Most popular", "Price low to high", "Price high to low", "Alphabetical", "Newest first"];
  
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Add state for tracking expanded filter sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Product Type": false,
    "Platforms": false,
    "Genres": false,
    "Languages": false,
    "Region": false,
    "Works on": false
  });
  
  // Function to toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Exemple de produits
  const products = [
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
      originalPrice: "6,499.99",
      discountedPrice: "5,199.99",
      discountPercentage: "20%",
      currency: "DZD"
    },
    {
      id: 4,
      image: imagecard4,
      title: "Red Dead Redemption 2",
      platform: "PC, PS4, Xbox One",
      region: "Global",
      originalPrice: "4,399.99",
      discountedPrice: "3,299.99",
      discountPercentage: "25%",
      currency: "DZD"
    },
    {
      id: 5,
      image: imagecard5,
      title: "Hogwarts Legacy",
      platform: "PC, PS5, Xbox Series X/S",
      region: "Global",
      originalPrice: "8,499.99",
      discountedPrice: "6,374.99",
      discountPercentage: "25%",
      currency: "DZD"
    },
    {
      id: 6,
      image: imagecard6,
      title: "Cyberpunk 2077",
      platform: "PC, PS5, Xbox Series X/S",
      region: "Global",
      originalPrice: "5,999.99",
      discountedPrice: "3,599.99",
      discountPercentage: "40%",
      currency: "DZD"
    },
  ];

  return (
    <div className="bg-[#0C0C0C] min-h-screen">
      {/* Style en ligne pour Swiper */}
      <style>{swipeStyles}</style>
      
      <div className="max-w-[1500px] w-full mx-auto px-4 py-6">        
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {/* Sidebar des filtres - visible seulement sur desktop */}
          <div className="hidden lg:block w-[280px] flex-shrink-0 bg-[#0c0c0c] p-5 rounded-lg h-fit sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4 font-['Onest']">Filters</h2>
            
            {/* Recherche de produit */}
            <div className="mb-4">
              <label className="text-white font-semibold text-base block mb-2 cursor-pointer font-['Onest']">Product name</label>
              <input type="text" className="w-full p-2 bg-[#212121] border border-[#333] rounded-md text-white" placeholder="Search products..." />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center">
                <input id="worksInAlgeria" type="checkbox" className="h-4 w-4 mr-2 accent-[#4885FF] bg-[#4885FF] cursor-pointer" />
                <label htmlFor="worksInAlgeria" className="text-white text-sm font-medium cursor-pointer font-['Onest']">Works in Algeria</label>
              </div>
              <div className="flex items-center">
                <input id="inStock" type="checkbox" className="h-4 w-4 mr-2 accent-[#4885FF] bg-[#4885FF] cursor-pointer" />
                <label htmlFor="inStock" className="text-white text-sm font-medium cursor-pointer font-['Onest']">Exclude out of stock products</label>
              </div>
            </div>

            {/* Price range */}
            <div className="mb-6">
              <p className="text-white font-semibold text-base mb-2 font-['Onest']">Price Range (DZD)</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-[#212121] border border-[#333] rounded-md p-2 text-sm text-white"
                  min="0"
                />
                <span className="text-white">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-[#212121] border border-[#333] rounded-md p-2 text-sm text-white"
                  min="0"
                />
              </div>
            </div>

            {/* Filters accordions */}
            <div className="space-y-4">
              {/* Product Type accordion with the productTypes data */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Product Type")}
                >
                  <span>Product Type</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Product Type"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Show product types when expanded */}
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Product Type"] ? "block" : "hidden"}`}>
                  {productTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`product-type-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`product-type-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms filter section */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Platforms")}
                >
                  <span>Platforms</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Platforms"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Platforms"] ? "block" : "hidden"}`}>
                  {platformTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`platform-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`platform-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Genres filter section */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Genres")}
                >
                  <span>Genres</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Genres"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Genres"] ? "block" : "hidden"}`}>
                  {genreTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`genre-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`genre-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages filter section */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Languages")}
                >
                  <span>Languages</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Languages"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Languages"] ? "block" : "hidden"}`}>
                  {languageTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`language-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`language-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region filter section */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Region")}
                >
                  <span>Region</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Region"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Region"] ? "block" : "hidden"}`}>
                  {regionTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`region-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`region-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Works on filter section */}
              <div className="border-t border-[#333] pt-4">
                <button 
                  className="flex justify-between items-center w-full text-white font-semibold text-base cursor-pointer font-['Onest']"
                  onClick={() => toggleSection("Works on")}
                >
                  <span>Works on</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="white"
                    className={`transition-transform duration-300 ${expandedSections["Works on"] ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`mt-2 space-y-2 pl-2 ${expandedSections["Works on"] ? "block" : "hidden"}`}>
                  {worksOnTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id={`workson-${type.name}`} 
                          type="checkbox" 
                          className="h-4 w-4 mr-2 accent-[#4885FF] cursor-pointer" 
                        />
                        <label htmlFor={`workson-${type.name}`} className="text-white text-sm font-medium cursor-pointer font-['Onest']">{type.name}</label>
                      </div>
                      <span className="text-gray-400 text-xs">{type.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Section principale avec les produits - now with max width */}
          <div className="flex-grow" style={{ maxWidth: '1064px' }}>
            {/* Categories buttons - Using Swiper */}
            <div className="mb-6 w-full">
              <Swiper
                slidesPerView="auto"
                spaceBetween={8}
                className="categories-swiper"
              >
                {categories.map((category) => (
                  <SwiperSlide key={category} className="w-auto">
                    <button 
                      className={`px-4 py-2 rounded-md text-xl font-bold  whitespace-nowrap ${
                        activeCategory === category 
                          ? 'bg-[#1d2b5c] text-[#359dff]' 
                          : 'bg-[#212121] text-white hover:bg-[#2a2a2a]'
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Results header with background and dropdown */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 bg-[#161616] p-3 rounded-md">
              <p className="text-white text-base font-medium font-sans mb-2 sm:mb-0">20K+ Results found</p>
              <div className="relative">
                <div 
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-white text-base font-semibold font-sans">
                    {selectedSort}
                  </span>
                  <svg className={`w-5 h-5 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div style={{minWidth:'200px'}} className="absolute right-0 mt-2 w-64 sm:w-72 bg-[#212121] rounded-md shadow-lg z-10 py-3">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        className={`block w-64 w-full text-left px-4 py-3 text-sm font-medium ${
                          selectedSort === option 
                            ? 'bg-[#1d2b5c] text-[#359dff]' 
                            : 'text-white hover:bg-[#2a2a2a]'
                        }`}
                        style={{minWidth:'200px'}}
                        onClick={() => {
                          setSelectedSort(option);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Products grid with custom responsive breakpoints */}
            <div>
              {/* Custom responsive styles */}
              <style jsx>{`
                .product-grid {
                  display: grid;
                  gap: 5px;
                  grid-template-columns: repeat(1, 1fr);
                  justify-items: center;
                }
                
                @media (min-width: 328px) {
                  .product-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                
                @media (min-width: 484px) and (max-width: 639px) {
                  .product-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }
                
                @media (min-width: 640px) and (max-width: 767px) {
                  .product-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }
                
                @media (min-width: 768px) {
                  .product-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }
                
                @media (min-width: 892px) and (max-width: 1023px) {
                  .product-grid {
                    grid-template-columns: repeat(4, 1fr);
                  }
                }
                
                @media (min-width: 1024px) and (max-width: 1200px) {
                  .product-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }
                
                @media (min-width: 1201px) and (max-width: 1421px) {
                  .product-grid {
                    grid-template-columns: repeat(4, 1fr);
                  }
                }
                
                @media (min-width: 1422px) {
                  .product-grid {
                    grid-template-columns: repeat(5, 1fr);
                  }
                }
                
                /* Make cards take available width but limit max-width */
                .product-grid > div {
                  width: 100%;
                  max-width: 220px;
                }
                
                .product-grid > div > div {
                  width: 100%; 
                  max-width: 220px;
                }
              `}</style>
              
              {/* Product grid */}
              <div className="product-grid">
                {products.map((product) => (
                  <div key={product.id} className="flex justify-center">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
            
      {/* Floating filter button on mobile - Modified styling */}
      <div className="fixed bottom-4 left-4 right-4 lg:hidden z-30">
        <button 
          className="bg-[#353535] text-[#359dff] font-medium py-3 px-6 rounded-md shadow-lg flex items-center justify-center w-full"
          onClick={() => setIsFilterDrawerOpen(true)}
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Apply Filter
        </button>
      </div>
            
      {/* Filter drawer for mobile */}
      <FilterDrawer isOpen={isFilterDrawerOpen} onClose={() => setIsFilterDrawerOpen(false)} />
    </div>
  );
};

export default StorePage;
