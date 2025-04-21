import React from 'react'
import { BsStar, BsSunFill } from 'react-icons/bs'
import { FaCcMastercard, FaCcVisa, FaDiscord, FaFacebook, FaFacebookF, FaInstagram, FaPaypal, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'
import DZFlagIcon from '../../public/algeria.png'
import StarGreen from '../../public/star-green.svg'
import StarWhite from '../../public/star-white.svg'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#212121] bg-[#212121] text-white text-sm'>
                <div className="max-w-[86%] mx-auto">
                    <div className="py-6 border-b border-[#3a3a3a] flex justify-start items-center gap-4 px-6  mx-auto">
                        <span>Pay with</span>
                        <FaCcVisa size={32} />
                        <FaCcMastercard size={32} />
                        <FaPaypal size={32} />
                    </div>
                    <div className="py-10  px-6 mx-auto grid lg:grid-cols-6 gap-10 text-gray-300">

                        <div>
                            <div className="text-white text-base flex items-center text-[21px] font-semibold mb-2">
                                <img src={StarGreen} width={32} height={32} alt="" />
                                Trustpilot
                            </div>
                            <div className="flex items-center gap-1 mb-1">
                                {/* Replace with your star component or image */}
                                <span className="text-yellow-400 text-lg flex gap-2 mb-1.5">
                                    <img src={StarWhite} width={36} height={36} alt="" className='bg-[#73CF11] p-1 cursor pointer' />
                                    <img src={StarWhite} width={36} height={36} alt="" className='bg-[#73CF11] p-1 cursor pointer' />
                                    <img src={StarWhite} width={36} height={36} alt="" className='bg-[#73CF11] p-1 cursor pointer' />
                                    <img src={StarWhite} width={36} height={36} alt="" className='bg-[#73CF11] p-1 cursor pointer' />
                                    <img src={StarWhite} width={36} height={36} alt="" className='bg-[#cccccc] p-1 cursor pointer' />
                                </span>
                            </div>
                            <div className="text-xs text-white font-semibold mb-[80px] ">Trust Score 4.2 | 1,245 reviews</div>

                            <div className="flex items-center gap-1">
                                <button type="button" className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-semibold rounded-md text-[16px] px-3 py-2.5 me-3 transition-all inline-flex items-center duration-300 cursor-pointer">
                                    <img src={DZFlagIcon} width={24} height={24} alt="" className='me-1.5' />
                                    DZD • English
                                </button>

                                <button className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md !text-[16px] px-3.5 py-3 me-3 transition-all duration-300 cursor-pointer">
                                    <BsSunFill />
                                </button>
                            </div>
                        </div>

                        {["Company", "Support", "Resources", "Account", "Others"].map((title, i) => (
                            <div key={i}>
                                <div className="font-semibold text-white text-[17px] mb-3">{title}</div>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link to="#" className='hover:text-white text-[16.4px]'>About Us</Link></li>
                                    <li><Link to="#" className='hover:text-white text-[16.4px]'>Our Services</Link></li>
                                    <li><Link to="#" className='hover:text-white text-[16.4px]'>Blog</Link></li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex border-b pb-5 border-[#3a3a3a] justify-between items-center">
                        <div className='flex items-center gap-5'>
                            <h1 className='me-5'>Clickshift</h1>
                            <ul className='flex items-center gap-5'>
                                <li>
                                    <a href="">Terms and Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="">Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="">Consent Preferences
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center text-white gap-5 text-[30px] cursor-pointer transition'>
                            <FaFacebook className='text-white hover:text-gray-400 transition' />
                            <FaInstagram className='text-white hover:text-gray-400 transition' />
                            <FaTiktok className='text-white hover:text-gray-400 transition' />
                            <FaYoutube className='text-white hover:text-gray-400 transition' />
                            <FaDiscord className='text-white hover:text-gray-400 transition' />
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="text-lg text-center text-gray-500  py-4 text-center">
                        © {new Date().getFullYear()} ClickShift. All rights reserved.
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer