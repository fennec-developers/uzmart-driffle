import React, { useState } from 'react';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  openLoginDialog: () => void;
  openSignupDialog: () => void;
}

interface MenuItem {
  id: string;
  name: string;
  subItems?: string[];
}

const menuItems: MenuItem[] = [
  { id: 'latest', name: 'Latest releases', subItems: ['New Games', 'New Gift Cards', 'New Software'] },
  { id: 'upcoming', name: 'Upcoming', subItems: ['Preorders', 'Early Access', 'Beta Tests'] },
  { id: 'topups', name: 'Topups', subItems: ['Game Credits', 'Online Services', 'Mobile Topups'] },
  { id: 'save', name: 'Save with', subItems: ['Bundles', 'Special Offers', 'Loyalty Rewards'] },
  { id: 'esims', name: 'Explore eSIMs', subItems: ['International', 'Regional', 'Country Specific'] },
  { id: 'home', name: 'Home' },
  { id: 'products', name: 'Products' },
  { id: 'deals', name: 'Deals' },
  { id: 'contact', name: 'Contact' }
];

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ 
  isOpen, 
  onClose,
  openLoginDialog,
  openSignupDialog
}) => {
  // États pour la navigation dans le drawer
  const [navigationStack, setNavigationStack] = useState<string[]>(['main']); // main est la page principale
  const [currentMenu, setCurrentMenu] = useState<MenuItem | null>(null);

  // Navigation vers un sous-menu
  const navigateToSubMenu = (menuItem: MenuItem) => {
    if (menuItem.subItems) {
      setNavigationStack([...navigationStack, 'submenu']);
      setCurrentMenu(menuItem);
    }
  };

  // Retour à la page précédente
  const goBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      setNavigationStack(newStack);

      // Réinitialiser les états selon la page actuelle
      if (newStack[newStack.length - 1] === 'main') {
        setCurrentMenu(null);
      }
    }
  };

  // Gérer le clic sur Login/Signup
  const handleLoginClick = () => {
    onClose();
    openLoginDialog();
  };

  const handleSignupClick = () => {
    onClose();
    openSignupDialog();
  };

  // Déterminer le contenu à afficher en fonction de la page actuelle
  const getCurrentPageContent = () => {
    const currentPage = navigationStack[navigationStack.length - 1];

    if (currentPage === 'submenu' && currentMenu && currentMenu.subItems) {
      // Page des sous-items
      return (
        <div>
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center">
              <button onClick={goBack} className="text-gray-400 hover:text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <h3 className="text-xl font-bold text-white">{currentMenu.name}</h3>
            </div>
          </div>
          <div className="py-4">
            {currentMenu.subItems.map((subItem) => (
              <a 
                key={subItem} 
                href="#" 
                className="block px-6 py-4 text-white hover:bg-[#2a2a2a] transition-colors"
              >
                {subItem}
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      // Page principale avec tous les items
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
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="w-full px-6 py-4 flex justify-between items-center text-white hover:bg-[#2a2a2a] transition-colors"
                onClick={() => item.subItems ? navigateToSubMenu(item) : null}
              >
                <span>{item.name}</span>
                {item.subItems && (
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
                )}
              </button>
            ))}
          </div>

          {/* Boutons de connexion et inscription */}
          <div className="px-6 py-4 mt-4 flex flex-col gap-3">
            <button 
              className="w-full py-2.5 px-4 bg-[#383838] hover:bg-[#4a4a4a] text-white rounded-md transition-colors"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button 
              className="w-full py-2.5 px-4 bg-[#4885FF] hover:bg-[#6C9DFF] text-white rounded-md transition-colors"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Overlay transparent */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer avec fond #212121 et scroll */}
      <div 
        className={`fixed top-0 left-0 h-full bg-[#212121] w-80 z-50 transform transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {getCurrentPageContent()}
      </div>
    </>
  );
};

export default MobileMenuDrawer;
