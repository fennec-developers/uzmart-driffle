import React, { useEffect, useState, useRef } from 'react'
import DZFlagIcon from '../../public/algeria.png'
import CartIcon from '../../public/grocery-store.png'
import BarsIcon from '../../public/menu-white.png'
import RegionSettingsDialog from './RegionSettingsDialog'
import LoginDialog from './LoginDialog'
import SignupDialog from './SignupDialog'
import CategoryDrawer from './CategoryDrawer'
import MobileMenuDrawer from './MobileMenuDrawer'
import SearchDialog from './SearchDialog'

const Header = () => {
  const [hideHeaderTwo, setHideHeaderTwo] = useState(false)
  const [isRegionDialogOpen, setIsRegionDialogOpen] = useState(false)
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false)
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [searchBarWidth, setSearchBarWidth] = useState(0)
  const [searchBarLeft, setSearchBarLeft] = useState(0)
  const searchFormRef = useRef<HTMLFormElement>(null)
  const [regionSettings, setRegionSettings] = useState({
    country: 'Algeria',
    currency: 'DZD',
    language: 'English'
  })
  const [lastScrollY, setLastScrollY] = useState(0)

  // Update searchbar measurements when needed
  const updateSearchBarMeasurements = () => {
    if (searchFormRef.current) {
      const rect = searchFormRef.current.getBoundingClientRect()
      setSearchBarWidth(rect.width)
      setSearchBarLeft(rect.left)
    }
  }

  // Initialize and update searchbar measurements on window resize
  useEffect(() => {
    updateSearchBarMeasurements()
    
    const handleResize = () => {
      updateSearchBarMeasurements()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll direction
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header two
        setHideHeaderTwo(true)
      } else {
        // Scrolling up - show header two
        setHideHeaderTwo(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleRegionSettingsSave = (settings: { country: string; currency: string; language: string }) => {
    // Extraire l'abréviation de la devise
    const currencyCode = settings.currency.match(/\(([^)]+)\)/)?.[1] || settings.currency
    
    setRegionSettings({
      country: settings.country,
      currency: currencyCode,
      language: settings.language
    })
  }

  const handleLogin = (email: string, password: string) => {
    // Implémenter la logique de connexion ici
    console.log('Login attempt:', email, password)
    setIsLoginDialogOpen(false)
  }

  const handleForgotPassword = () => {
    // Implémenter la logique du mot de passe oublié
    console.log('Forgot password')
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

  const handleSearchFocus = () => {
    updateSearchBarMeasurements()
    setIsSearchDialogOpen(true)
  }

  return (
    <>
      {/* Header One - fixed at the top */}
      <div className='bg-[#212121] fixed top-0 z-50 w-full'>
        <div className='flex justify-between items-center w-full mx-auto h-[74px] px-0 max-w-[1800px]'>
          {/* Section gauche: Logo + bouton menu mobile */}
          <div className="flex items-center flex-shrink-0 pl-4 lg:pl-8 h-full">
            {/* Mobile menu button - visible uniquement sur mobile */}
            <button 
              className="lg:hidden text-white mr-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <img src={BarsIcon} width={28} height={28} alt="Menu" />
            </button>

            {/* Logo */}
            <div className="text-white text-xl font-bold cursor-pointer">ClickShift</div>
          </div>

          {/* Search bar - version desktop redimensionnée, cachée sur mobile */}
          <div className="hidden lg:block flex-grow flex-shrink min-w-0 mx-6 max-w-[600px]">
            <form className="w-full" ref={searchFormRef}>
              <label htmlFor="custom-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none transition-colors duration-300 peer-focus:text-black">
                  <svg className="w-5 h-5 text-black peer-focus:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="custom-search"
                  className="peer block w-full text-[14px] font-medium p-4 ps-10 text-sm text-black bg-white rounded-md placeholder-gray-500 placeholder:text-[14px] placeholder:font-medium focus:outline-none focus:ring-0 focus:border-0"
                  placeholder="Search Mockups, Logos..."
                  required
                  onFocus={handleSearchFocus}
                />
              </div>
            </form>
          </div>

          {/* Right buttons */}
          <div className="flex items-center flex-shrink-0 space-x-3 pr-4 lg:pr-8 h-full">
            {/* Search icon - visible uniquement sur mobile */}
            <button 
              className="lg:hidden py-2 px-2 text-white cursor-pointer"
            >
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* User icon - visible uniquement sur mobile */}
            <button 
              className="lg:hidden py-2 px-2 text-white cursor-pointer"
              onClick={openLoginDialog}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-1">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Cart icon - visible uniquement sur desktop */}
            <button type="button" className="hidden lg:block py-2 px-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-[#383838] transition-all duration-300 cursor-pointer">
              <img src={CartIcon} width={30} height={30} className='p-1' alt="" />
            </button>

            {/* Desktop-only buttons */}
            <div className="hidden lg:flex items-center">
              <button 
                type="button" 
                className="py-2 px-3 me-3 text-sm font-medium text-white bg-transparent rounded-md hover:bg-[#383838] inline-flex items-center transition-all duration-300 cursor-pointer"
                onClick={() => setIsRegionDialogOpen(true)}
              >
                <img src={DZFlagIcon} width={28} height={28} alt="" className='me-1.5' />
                {regionSettings.currency} • {regionSettings.language}
              </button>

              <button 
                type="button" 
                className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md text-[1rem] whitespace-nowrap px-6 py-3 me-3 transition-all duration-300 cursor-pointer"
                onClick={openLoginDialog}
              >
                Login
              </button>

              <button 
                type="button" 
                className="text-white bg-[#4885FF] hover:bg-[#6C9DFF] font-medium rounded-md text-[1rem] whitespace-nowrap px-6 py-3 transition-all duration-300 cursor-pointer"
                onClick={openSignupDialog}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gray Separator */}
      <div className="h-[1px] bg-[#3a3a3a] w-full mt-[74px]" />

      {/* Header Two with transition - visible uniquement sur desktop */}
      <div
        className={`bg-[#212121] transition-all duration-500 ease-in-out overflow-hidden lg:block hidden w-full ${
          hideHeaderTwo ? 'opacity-0 max-h-0' : 'opacity-100 max-h-16'
        }`}
      >
        <div className="flex items-center gap-6 w-full mx-auto py-2.5 px-4 lg:px-8 text-[1rem] text-white font-medium transition-opacity duration-500 max-w-[1800px]">
          <button 
            className="hover:text-gray-300 transition inline-flex items-center gap-2 cursor-pointer"
            onClick={() => setIsCategoryDrawerOpen(true)}
          >
            <img src={BarsIcon} width={16} height={16} alt="" />
            Categories
          </button>
          <a href="#" className="hover:text-[#4885FF] transition cursor-pointer">Home</a>
          <a href="#" className="hover:text-[#4885FF] transition cursor-pointer">Products</a>
          <a href="#" className="hover:text-[#4885FF] transition cursor-pointer">Deals</a>
          <a href="#" className="hover:text-[#4885FF] transition cursor-pointer">Contact</a>
        </div>
      </div>

      {/* Dialogs */}
      <RegionSettingsDialog 
        isOpen={isRegionDialogOpen}
        onClose={() => setIsRegionDialogOpen(false)}
        onSave={handleRegionSettingsSave}
      />
      
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
      <SearchDialog 
        isOpen={isSearchDialogOpen}
        onClose={() => setIsSearchDialogOpen(false)}
        searchBarWidth={searchBarWidth}
        searchBarLeft={searchBarLeft}
      />

      {/* Category Drawer */}
      <CategoryDrawer 
        isOpen={isCategoryDrawerOpen}
        onClose={() => setIsCategoryDrawerOpen(false)}
      />

      {/* Mobile Menu Drawer */}
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
