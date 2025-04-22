import React from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaInstagram, FaPaypal, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'
import DZFlagIcon from '../../public/algeria.png'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#212121] text-white text-sm'>
                <div className="max-w-[86%] mx-auto">
                    <div className="py-6 border-b border-[#3a3a3a] flex justify-start items-center gap-4 px-6  mx-auto">
                        <span>Pay with</span>
                        <FaCcVisa size={32} />
                        <FaCcMastercard size={32} />
                        <FaPaypal size={32} />
                    </div>
                    <div className="py-10  px-6 mx-auto grid lg:grid-cols-6 gap-10 text-gray-300">

                        <div>
                            <div className="text-white text-base font-semibold mb-2">Trustpilot</div>
                            <div className="flex items-center gap-1 mb-1">
                                {/* Replace with your star component or image */}
                                <span className="text-yellow-400 text-lg">★★★★★</span>
                                <span className="ml-2 text-sm">4.8/5</span>
                            </div>
                            <div className="text-xs text-gray-400 mb-4">Based on 1,245 reviews</div>

                            <div className="flex items-center gap-2">
                                <button type="button" className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md text-sm px-2.5 py-2 me-3 transition-all inline-flex items-center duration-300">
                                    <img src={DZFlagIcon} width={24} height={24} alt="" className='me-1' />
                                    DZD • English
                                </button>

                                <button className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md !text-[16px] px-2 py-2 me-3 transition-all duration-300">
                                    <BsSunFill />
                                </button>
                            </div>
                        </div>

                        {["Company", "Support", "Resources", "Account", "Others"].map((title, i) => (
                            <div key={i}>
                                <div className="font-semibold text-white mb-3">{title}</div>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link to="#" className='hover:text-white'>About Us</Link></li>
                                    <li><Link to="#" className='hover:text-white'>Our Services</Link></li>
                                    <li><Link to="#" className='hover:text-white'>Blog</Link></li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex border-b pb-5 border-[#3a3a3a] justify-between items-center">
                            <div className='flex items-center gap-3'>
                                <h1>Clickshift</h1>
                                <ul className='flex items-center gap-2'>
                                    <li>
                                        <a href="">Terms and Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">Consent Preferences
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTiktok />
                            </div>
                        </div>
                    
                    {/* Bottom Row */}
                    <div className="text-lg text-center text-gray-500  py-4">
                        © {new Date().getFullYear()} ClickShift. All rights reserved.
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer