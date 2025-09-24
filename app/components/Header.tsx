import React, { useEffect, useRef, useState } from 'react'
import DZFlagIcon from '../../public/algeria.png'
import CartIcon from '../../public/grocery-store.png'
import BarsIcon from '../../public/menu-white.png'
import CategoryDrawer from './CategoryDrawer'
import SearchList from './SearchList';
import RegionSettingsDialog from './RegionSettingsDialog'
import SignupDialog from './SignupDialog'
import LoginDialog from './LoginDialog'
import MobileMenuDrawer from './MobileMenuDrawer'


const trendingSearches = [
  { title: 'Call of Duty', country: 'USA', price: '$59', image: '/games/cod.jpg' },
  { title: 'Valorant Points', country: 'France', price: '$20', image: '/games/valorant.jpg' },
  { title: 'Minecraft', country: 'UK', price: '$29', image: '/games/minecraft.jpg' },
  { title: 'Fortnite V-Bucks', country: 'Germany', price: '$10', image: '/games/fortnite.jpg' },
  { title: 'PUBG UC', country: 'India', price: '$12', image: '/games/pubg.jpg' },
];
import { LuHouse, LuStore, LuShoppingCart, LuMenu, LuSearch, LuUser } from 'react-icons/lu';
import { Link, NavLink } from 'react-router'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [hideHeaderTwo, setHideHeaderTwo] = useState(false)
  const [isRegionDialogOpen, setIsRegionDialogOpen] = useState(false)
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false)
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [regionSettings, setRegionSettings] = useState({
    country: 'Algeria',
    currency: 'DZD',
    language: 'English'
  })
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchList, setShowSearchList] = useState(false);
  const [filteredResults, setFilteredResults] = useState<typeof trendingSearches>([]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredResults(trendingSearches);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setTimeout(() => {
        const results = trendingSearches.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredResults(results);
        setLoading(false);
      }, 500); // simulate fetch delay
    }, 1000); // debounce
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setHideHeaderTwo(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRegionSettingsSave = (settings: { country: string; currency: string; language: string }) => {
    // Extraire l'abréviation de la devise
    const currencyCode = settings.currency.match(/\(([^)]+)\)/)?.[1] || settings.currency

    setRegionSettings({
      country: settings.country,
      currency: currencyCode,
      language: settings.language
    })
  }

  const openLoginDialog = () => {
    setIsLoginDialogOpen(true)
    setIsSignupDialogOpen(false)
    setIsMobileMenuOpen(false)
  }

  const openSignupDialog = () => {
    setIsSignupDialogOpen(true)
    setIsLoginDialogOpen(false)
    setIsMobileMenuOpen(false)
  }
  const handleLogin = (email: string, password: string) => {
    setIsLoginDialogOpen(false)
  }

  const handleForgotPassword = () => {
    console.log('Forgot password')
  }

  return (
    <>
      <header className="hidden lg:block sticky top-0 z-50 bg-[#212121]">
        {/* Top Row: Logo, Search, Auth */}
        <div className='flex justify-between items-center max-w-[86%] mx-auto py-3'>
          <Link to="/" className="text-white text-3xl font-bold">ClickShift</Link>

          <div className="w-full max-w-[56%] relative">
            <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="search"
              ref={searchInputRef}
              onFocus={() => setShowSearchList(true)}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-base p-3 pl-11 bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#4885FF]"
              placeholder="Search for games, gift cards..."
            />
            <SearchList isOpen={showSearchList} results={filteredResults} inputRef={searchInputRef} loading={loading} onClose={() => setShowSearchList(false)} />
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setIsRegionDialogOpen(true)} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700/50 transition">
              <img src={DZFlagIcon} width={24} height={24} alt="Flag" />
              <span className="text-white text-sm">DZD</span>
            </button>
            <button onClick={openLoginDialog} className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md text-sm px-6 py-2.5 transition">Login</button>
            <button onClick={openSignupDialog} className="text-white bg-[#4885FF] hover:bg-[#6C9DFF] font-medium rounded-md text-sm px-6 py-2.5 transition">Sign Up</button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 py-0' : 'max-h-16 py-2'}`}>
          <div className="h-[1px] bg-[#3a3a3a] w-full" />
          <nav className="flex items-center gap-6 max-w-[86%] mx-auto py-2.5 text-white font-medium">
            <button onClick={() => setIsCategoryDrawerOpen(true)} className="flex items-center gap-2 text-base hover:text-[#4885FF]">Categories</button>
            <Link to="/store" className="hover:text-[#4885FF] transition text-base">Store</Link>
            <Link to="/topups" className="hover:text-[#4885FF] transition text-base">Topups</Link>
            <Link to="/dashboard" className="hover:text-[#4885FF] transition text-base">Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* === MOBILE & TABLET BOTTOM TAB BAR (Hidden on lg screens and up) === */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#1a1a1a] border-t border-gray-700/80 z-50">
        <nav className="h-full w-full grid grid-cols-4 items-center">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center gap-1 ${isActive ? 'text-[#4885FF]' : 'text-gray-400'}`}>
            <LuHouse size={22} />
            <span className="text-xs">Home</span>
          </NavLink>
          <NavLink to="/store" className={({ isActive }) => `flex flex-col items-center justify-center gap-1 ${isActive ? 'text-[#4885FF]' : 'text-gray-400'}`}>
            <LuStore size={22} />
            <span className="text-xs">Store</span>
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `flex flex-col items-center justify-center gap-1 ${isActive ? 'text-[#4885FF]' : 'text-gray-400'}`}>
            <LuShoppingCart size={22} />
            <span className="text-xs">Cart</span>
          </NavLink>
          {/*  UPDATED: NavLink to /dashboard  */}
          <NavLink to="/dashboard" className={({ isActive }) => `flex flex-col items-center justify-center gap-1 ${isActive ? 'text-[#4885FF]' : 'text-gray-400'}`}>
            <LuUser size={22} />
            <span className="text-xs">Profile</span>
          </NavLink>
        </nav>
      </div>

      <LoginDialog
        isOpen={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onRegisterClick={openSignupDialog}
      />

      <SignupDialog
        isOpen={isSignupDialogOpen}
        onClose={() => setIsSignupDialogOpen(false)}
        onSignIn={openLoginDialog}
      />


      {/* Search Dialog */}
      {/* <SearchDialog 
        isOpen={isSearchDialogOpen}
        onClose={() => setIsSearchDialogOpen(false)}
        searchBarWidth={searchBarWidth}
        searchBarLeft={searchBarLeft}
      /> */}

      <CategoryDrawer
        isOpen={isCategoryDrawerOpen}
        onClose={() => setIsCategoryDrawerOpen(false)}
      />

      <RegionSettingsDialog
        isOpen={isRegionDialogOpen}
        onClose={() => setIsRegionDialogOpen(false)}
        onSave={handleRegionSettingsSave}
      />

      <MobileMenuDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        openLoginDialog={openLoginDialog}
        openSignupDialog={openSignupDialog}
      />

    </>
  )
}

export default Header
