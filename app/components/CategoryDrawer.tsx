import React, { useState } from 'react';
import Image from '../../public/algeria.png';

interface CategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CategoryItem {
  id: string;
  name: string;
  subCategories: SubCategoryItem[];
}

interface SubCategoryItem {
  id: string;
  name: string;
  products: string[];
}

const categories: CategoryItem[] = [
  {
    id: 'games',
    name: 'Games',
    subCategories: [
      { id: 'action', name: 'Action', products: ['Call of Duty', 'Battlefield', 'Apex Legends', 'DOOM Eternal'] },
      { id: 'adventure', name: 'Adventure', products: ['The Legend of Zelda', 'Uncharted', 'Tomb Raider', 'God of War'] },
      { id: 'rpg', name: 'RPG', products: ['Final Fantasy', 'The Elder Scrolls', 'Fallout', 'The Witcher'] },
      { id: 'strategy', name: 'Strategy', products: ['Civilization', 'Age of Empires', 'StarCraft', 'Total War'] },
      { id: 'sports', name: 'Sports', products: ['FIFA', 'NBA 2K', 'Madden NFL', 'F1'] },
      { id: 'simulation', name: 'Simulation', products: ['The Sims', 'Microsoft Flight Simulator', 'Euro Truck Simulator', 'Farming Simulator'] }
    ]
  },
  {
    id: 'gift-cards',
    name: 'Gift Cards',
    subCategories: [
      { id: 'steam', name: 'Steam', products: ['$10', '$25', '$50', '$100'] },
      { id: 'playstation', name: 'PlayStation', products: ['$10', '$25', '$50', '$100'] },
      { id: 'xbox', name: 'Xbox', products: ['$10', '$25', '$50', '$100'] },
      { id: 'nintendo', name: 'Nintendo', products: ['$10', '$25', '$50', '$100'] },
      { id: 'google-play', name: 'Google Play', products: ['$10', '$25', '$50', '$100'] },
      { id: 'itunes', name: 'iTunes', products: ['$10', '$25', '$50', '$100'] }
    ]
  },
  {
    id: 'gaming-gift-cards',
    name: 'Gaming Gift Cards',
    subCategories: [
      { id: 'valorant', name: 'Valorant', products: ['1000 VP', '2800 VP', '5600 VP', '11000 VP'] },
      { id: 'fortnite', name: 'Fortnite', products: ['1000 V-Bucks', '2800 V-Bucks', '5000 V-Bucks', '13500 V-Bucks'] },
      { id: 'league-of-legends', name: 'League of Legends', products: ['650 RP', '1380 RP', '2800 RP', '5000 RP'] },
      { id: 'roblox', name: 'Roblox', products: ['400 Robux', '800 Robux', '1700 Robux', '4500 Robux'] },
      { id: 'minecraft', name: 'Minecraft', products: ['Java Edition', 'Bedrock Edition', 'Minecoins', 'Realms'] },
      { id: 'world-of-warcraft', name: 'World of Warcraft', products: ['1 Month', '3 Months', '6 Months', 'Game Time Cards'] }
    ]
  },
  {
    id: 'subscriptions',
    name: 'Subscriptions',
    subCategories: [
      { id: 'playstation-plus', name: 'PlayStation Plus', products: ['1 Month', '3 Months', '12 Months', 'Premium'] },
      { id: 'xbox-game-pass', name: 'Xbox Game Pass', products: ['1 Month', '3 Months', '12 Months', 'Ultimate'] },
      { id: 'ea-play', name: 'EA Play', products: ['1 Month', '3 Months', '12 Months', 'Pro'] },
      { id: 'ubisoft-plus', name: 'Ubisoft+', products: ['1 Month', '3 Months', '12 Months', 'Premium'] },
      { id: 'discord-nitro', name: 'Discord Nitro', products: ['1 Month', '3 Months', '12 Months', 'Classic'] },
      { id: 'nintendo-online', name: 'Nintendo Online', products: ['1 Month', '3 Months', '12 Months', 'Family Plan'] }
    ]
  },
  {
    id: 'softwares',
    name: 'Softwares',
    subCategories: [
      { id: 'antivirus', name: 'Antivirus', products: ['Norton', 'McAfee', 'Kaspersky', 'Bitdefender'] },
      { id: 'vpn', name: 'VPN', products: ['NordVPN', 'ExpressVPN', 'Surfshark', 'CyberGhost'] },
      { id: 'office', name: 'Office Applications', products: ['Microsoft 365', 'Office 2021', 'Google Workspace', 'LibreOffice'] },
      { id: 'design', name: 'Design Tools', products: ['Adobe Creative Cloud', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
      { id: 'development', name: 'Development Tools', products: ['Visual Studio', 'IntelliJ IDEA', 'WebStorm', 'Unity Pro'] },
      { id: 'security', name: 'Security', products: ['Malwarebytes', 'Avast', 'ESET', 'AVG'] }
    ]
  }
];

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({ isOpen, onClose }) => {
  // États pour la navigation dans le drawer
  const [navigationStack, setNavigationStack] = useState<string[]>(['main']); // main est la page principale
  const [currentCategory, setCurrentCategory] = useState<CategoryItem | null>(null);
  const [currentSubCategory, setCurrentSubCategory] = useState<SubCategoryItem | null>(null);

  // Navigation vers une catégorie
  const navigateToCategory = (category: CategoryItem) => {
    setNavigationStack([...navigationStack, 'category']);
    setCurrentCategory(category);
  };

  // Navigation vers une sous-catégorie
  const navigateToSubCategory = (subCategory: SubCategoryItem) => {
    setNavigationStack([...navigationStack, 'subcategory']);
    setCurrentSubCategory(subCategory);
  };

  // Retour à la page précédente
  const goBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);

      // Réinitialiser les états selon la page actuelle
      const currentPage = newStack[newStack.length - 1];
      if (currentPage === 'main') {
        setCurrentCategory(null);
        setCurrentSubCategory(null);
      } else if (currentPage === 'category') {
        setCurrentSubCategory(null);
      }
    }
  };

  // Déterminer le contenu à afficher en fonction de la page actuelle
  const getCurrentPageContent = () => {
    const currentPage = navigationStack[navigationStack.length - 1];

    if (currentPage === 'subcategory' && currentSubCategory) {
      // Page des produits d'une sous-catégorie
      return (
        <div>
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center">
              <button onClick={goBack} className="text-gray-400 hover:text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <h3 className="text-xl font-bold text-white">{currentSubCategory.name}</h3>
            </div>
          </div>
          <div className="py-4">
            {currentSubCategory.products.map((product) => (
              <a 
                key={product} 
                href="#" 
                className="block px-6 py-4 text-white hover:bg-[#2a2a2a] transition-colors"
              >
                {product}
              </a>
            ))}
          </div>
        </div>
      );
    } else if (currentPage === 'category' && currentCategory) {
      // Page des sous-catégories d'une catégorie
      return (
        <div>
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center">
              <button onClick={goBack} className="text-gray-400 hover:text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <h3 className="text-xl font-bold text-white">{currentCategory.name}</h3>
            </div>
          </div>
          <div className="py-4">
            {currentCategory.subCategories.map((subCategory) => (
              <button 
                key={subCategory.id} 
                className="w-full px-6 py-4 flex justify-between items-center text-white hover:bg-[#2a2a2a] transition-colors"
                onClick={() => navigateToSubCategory(subCategory)}
              >
                <span>{subCategory.name}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      );
    } else {
      // Page principale avec toutes les catégories
      return (
        <div>
          <div className="p-6 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-white">ClickShift</div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="w-full px-6 py-4 flex justify-between items-center text-white hover:bg-[#2a2a2a] transition-colors"
                onClick={() => navigateToCategory(category)}
              >
                <span>{category.name}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Overlay transparent au lieu de gris */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-50"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed top-0 left-0 h-full bg-[#212121] w-80 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {getCurrentPageContent()}
      </div>
    </>
  );
};

export default CategoryDrawer;
