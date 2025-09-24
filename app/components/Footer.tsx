import React, { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaDiscord, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { LuChevronDown } from 'react-icons/lu';
import { Link } from 'react-router';

import DZFlagIcon from '../../public/algeria.png';
import StarGreen from '../../public/star-green.svg';
import StarWhite from '../../public/star-white.svg';
import AmexIcon from '../../public/payments/amex.svg';
import VisaIcon from '../../public/payments/visa.svg';
import MastercardIcon from '../../public/payments/mastercard.svg';

// Reusable Accordion Component for Mobile
const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left">
                <span className="font-semibold text-white">{title}</span>
                <LuChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-2 pr-4">{children}</div>
            </div>
        </div>
    );
};

// Structured Link Data
const footerLinks = [
    { title: "Company", links: [{ label: "About Us", href: "#" }, { label: "Our Services", href: "#" }, { label: "Blog", href: "#" }] },
    { title: "Support", links: [{ label: "Help Center", href: "#" }, { label: "Contact Us", href: "#" }, { label: "FAQ", href: "#" }] },
    { title: "Resources", links: [{ label: "Partners", href: "#" }, { label: "Affiliates", href: "#" }, { label: "Developers", href: "#" }] },
    { title: "Account", links: [{ label: "My Account", href: "#" }, { label: "Order History", href: "#" }, { label: "Wishlist", href: "#" }] },
    { title: "Others", links: [{ label: "Gift Cards", href: "#" }, { label: "Topups", href: "#" }, { label: "Careers", href: "#" }] },
];


// The Main Responsive Footer Component
const Footer = () => {
    return (
        <footer className='bg-[#212121] text-white text-sm'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 border-b border-gray-700 flex justify-center lg:justify-start items-center gap-4">
                    <span className="hidden lg:inline">Pay with</span>
                    <img src={VisaIcon} className='w-[36px]' alt="Visa" />
                    <img src={MastercardIcon} className='w-[36px]' alt="Mastercard" />
                    <img src={AmexIcon} className='w-[36px]' alt="American Express" />
                </div>

                <div className="py-10 grid grid-cols-1 lg:grid-cols-6 gap-10 text-gray-300">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="text-white text-lg flex items-center font-semibold mb-2">
                            <img src={StarGreen} width={28} height={28} alt="" className="mr-2" />Trustpilot
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                            <span className="text-yellow-400 text-lg flex gap-1.5">{[...Array(4)].map((_, i) => <img key={i} src={StarWhite} width={28} height={28} alt="" className='bg-[#73CF11] p-1' />)}<img src={StarWhite} width={28} height={28} alt="" className='bg-[#cccccc] p-1' /></span>
                        </div>
                        <p className="text-xs text-white font-semibold mb-8">Trust Score 4.2 | 1,245 reviews</p>
                        <div className="flex items-center gap-2">
                            <button type="button" className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md text-sm px-3 py-2.5 flex items-center gap-2"><img src={DZFlagIcon} width={20} height={20} alt="" />DZD</button>
                            <button className="text-white bg-[#383838] hover:bg-[#4a4a4a] font-medium rounded-md p-2.5"><BsSunFill size={20} /></button>
                        </div>
                    </div>

                    {/* DESKTOP VIEW: Link Columns */}
                    {footerLinks.map(({ title, links }) => (
                        <div key={title} className="hidden lg:block">
                            <div className="font-semibold text-white text-base mb-3">{title}</div>
                            <ul className="space-y-3 text-gray-400">
                                {links.map(({ label, href }) => <li key={label}><Link to={href} className='hover:text-white transition'>{label}</Link></li>)}
                            </ul>
                        </div>
                    ))}

                    {/* MOBILE VIEW: Accordions */}
                    <div className="lg:hidden col-span-1">
                        {footerLinks.map(({ title, links }) => (
                            <AccordionItem key={title} title={title}>
                                <ul className="space-y-3 text-gray-400">
                                    {links.map(({ label, href }) => <li key={label}><Link to={href} className='hover:text-white transition'>{label}</Link></li>)}
                                </ul>
                            </AccordionItem>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-y border-gray-700 py-5">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <h1 className='font-bold text-xl'>ClickShift</h1>
                        <ul className='flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 text-xs'>
                            <li><a href="#" className='hover:text-[#4885FF]'>Terms & Conditions</a></li>
                            <li><a href="#" className='hover:text-[#4885FF]'>Privacy Policy</a></li>
                            <li><a href="#" className='hover:text-[#4885FF]'>Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center text-white gap-5 text-2xl'>
                        <a href="#" aria-label="Facebook"><FaFacebook className='hover:text-gray-400' /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram className='hover:text-gray-400' /></a>
                        <a href="#" aria-label="TikTok"><FaTiktok className='hover:text-gray-400' /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube className='hover:text-gray-400' /></a>
                        <a href="#" aria-label="Discord"><FaDiscord className='hover:text-gray-400' /></a>
                    </div>
                </div>

                <div className="text-sm text-center text-gray-500 py-6">
                    © {new Date().getFullYear()} ClickShift. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

// THE CRUCIAL MISSING LINE:
export default Footer;