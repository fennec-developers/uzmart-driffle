import React, { useEffect, useState } from 'react'
import DZFlagIcon from '../../public/algeria.png'
import CartIcon from '../../public/grocery-store.png'
import BarsIcon from '../../public/menu-white.png'
const Header = () => {
  const [hideHeaderTwo, setHideHeaderTwo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHideHeaderTwo(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      {/* Header One */}
      <div className='bg-[#212121] sticky top-0 z-50'>
        <div className='flex justify-between items-center lg:max-w-[86%] mx-auto py-2'>
          <div className="left text-white">ClickShift</div>

          <div className="middle w-full lg:max-w-[680px] mx-4">
            <form className="w-full">
              <label htmlFor="custom-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none transition-colors duration-300 peer-focus:text-black">
                  <svg className="w-4 h-4 text-black peer-focus:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="custom-search"
                  className="peer block w-full text-[12px] font-medium p-3 ps-10 text-sm text-black bg-white rounded-md placeholder-gray-500 placeholder:text-[12px] placeholder:font-medium focus:outline-none focus:ring-0 focus:border-0"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>

          <div className="right inline-flex items-center">
            <button type="button" className="py-2 px-2 me-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-[#383838] inline-flex items-center transition-all duration-300">
              <img src={DZFlagIcon} width={24} height={24} alt="" className='me-1.5' />
              DZD • English
            </button>

            <button type="button" className="py-2 px-2 me-2 text-sm font-medium text-white bg-transparent rounded-md hover:bg-[#383838] transition-all duration-300">
              <img src={CartIcon} width={24} height={24} className='p-1' alt="" />
            </button>

            <button type="button" className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md text-sm px-7 py-2 me-3 transition-all duration-300">
              Login
            </button>

            <button type="button" className="text-white bg-[#4885FF] hover:bg-[#6C9DFF] font-medium rounded-md text-sm px-7 py-2 me-2 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Gray Separator */}
      <div className="h-[1px] bg-[#3a3a3a] w-full" />

      {/* Header Two with transition */}
      <div
        className={`bg-[#212121] transition-all duration-500 ease-in-out overflow-hidden ${hideHeaderTwo ? 'opacity-0 max-h-0' : 'opacity-100 max-h-16'
          }`}
      >
        <div className="flex items-center gap-6 lg:max-w-[86%] mx-auto py-2.5 text-xs text-white font-medium transition-opacity duration-500">
          <a href="#" className="hover:text-gray-300 transition inline-flex items-center gap-2">
            <img src={BarsIcon} width={16} height={16} alt="" />
            Categories
          </a>
          <a href="#" className="hover:text-[#4885FF] transition">Home</a>
          <a href="#" className="hover:text-[#4885FF] transition">Products</a>
          <a href="#" className="hover:text-[#4885FF] transition">Deals</a>
          <a href="#" className="hover:text-[#4885FF] transition">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Header
