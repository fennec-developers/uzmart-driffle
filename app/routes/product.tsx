import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaCheck, FaCheckCircle, FaHeart, FaRegCheckCircle, FaStar } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImg from '../../public/products/13.webp'
import GlobeIcon from '../../public/globe-earth.png'
import CorrectIcon from '../../public/correct.png'
import LaptopIcon from '../../public/laptop.png'
import SteamIcon from '../../public/steam.svg'
import ExclamationIcon from '../../public/exclamation.png'
import Vendor1 from '../../public/vendors/eda2d648-0373-4ab2-8969-bec545b6255b.webp'
import Vendor2 from '../../public/vendors/7c44d1cb-54da-4c5f-9ed4-1144717baf22_124-store-iconjpeg.webp'
import Vendor3 from '../../public/vendors/72f3e30c-63c6-4d20-8069-3ae10f69950e_store-232-iconpng.webp'
import Vendor4 from '../../public/vendors/adeb7938-395d-42a2-8687-018ae351ba4f_6dd21717-079a-49f4-9e39-10bb277bd814logo.webp'
import verifiedIcon from '../../public/check.png'
import CartIcon from '../../public/add-to-cart.png'
import ShoppingIcon from '../../public/shopping-bag.png'
import Recommended from '~/components/Recommended';
import lighteningIcon from '../../public/lightening.png'
import supportIcon from '../../public/customer-support.png'
import ProductModals from '~/components/ProductModals';
import CartCheck from '../../public/checklist.png'

const vendors = [Vendor1, Vendor2, Vendor3, Vendor4];


const product = () => {
    const [showAllVariations, setShowAllVariations] = useState(false);
    const [shownOffers, setShownOffers] = useState(4);
    const [expanded, setExpanded] = useState(false);
    const [loadingIndex, setLoadingIndex] = useState(null);
    const [loadingSuccessCard, setLoadingSuccessCard] = useState(false);
    const [addedProduct, setAddedProduct] = useState<null | { img: string; title: string; price: string }>({
            img: "https://via.placeholder.com/60",
            title: `Product test`,
            price: "DZD39.99"
        });
    const [showSuccessCard, setShowSuccessCard] = useState(false);
    const [confirmedIndex, setConfirmedIndex] = useState(null);
    // const [loading, setLoading] = useState(false)
    // const [confirmed, setConfirmed] = useState(false)
    const totalVariations = 16;
    const variationCount = showAllVariations ? totalVariations : 8;

    const handleClick = (i: any) => {
        if (loadingIndex !== null || confirmedIndex === i) return;
        setLoadingIndex(i);
        setLoadingSuccessCard(true);
        const product = {
            img: "https://via.placeholder.com/60",
            title: `Product ${i + 1}`,
            price: "DZD39.99"
        };
        setTimeout(() => {
            setLoadingIndex(null);
            setConfirmedIndex(i);
        }, 1000);
        setTimeout(() => {
            setLoadingSuccessCard(false);
            setAddedProduct(product);
            setShowSuccessCard(true);
            setTimeout(() => setShowSuccessCard(false), 15000);
        }, 2000);
    };

    return (
        <>
            <div className="min-h-screen bg-black text-white p-6">
                <div className="max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-9 space-y-6">
                        {/* Breadcrumb */}
                        <nav className="text-sm text-gray-400">
                            Home <FaAngleRight className='inline' /> Game <FaAngleRight className='inline' /> Stream <FaAngleRight className='inline' /> <span className="text-white">Palworld (Global) (PC) - Steam - Digital Key</span>
                        </nav>

                        {/* Product Top Section */}
                        <div className="flex flex-col md:flex-row bg-black p-4 rounded-xl gap-4">
                            <img
                                src={ProductImg}
                                alt="Product"
                                className="w-full md:w-[180px] object-cover rounded-lg"
                            />
                            <div className="flex-1 space-y-3 py-3">
                                <div className='flex justify-between items-center'>
                                    <h1 className="text-lg font-bold">Palworld (Global) (PC) - Steam - Digital Key</h1>
                                    <FaHeart className='text-gray-500 text-xl cursor-pointer' />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-semibold">
                                        Game
                                    </span>
                                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded uppercase font-semibold">
                                        Digital key
                                    </span>
                                    <span className="text-gray-800 text-lg px-2 py-1 rounded uppercase font-semibold">
                                        |
                                    </span>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span className="text-sm text-white font-semibold ml-2">
                                            1 Rating
                                        </span>
                                    </div>
                                </div>
                                <div className='bg-[#212121] w-full my-6 h-[1px]'></div>
                                <div className='grid grid-cols-2 gap-5 grid-rows-2'>
                                    <div className='flex items-center gap-3'>
                                        <div className="box-icon w-[60px] h-[60px] bg-white/10 rounded-lg border border-gray-500/30 flex items-center justify-center">
                                            <img src={CorrectIcon} alt="" width={26} />
                                        </div>
                                        <div>
                                            <p className='text-sm text-gray-400'>Can be activated in <span className=' text-white font-semibold'>Algeria</span></p>
                                            <ProductModals trigger="restrictions" />
                                            {/* <a href="" className='text-[#4885FF] text-xs font-semibold'>Check Restrictions</a> */}
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className="box-icon w-[60px] h-[60px] bg-white/10 rounded-lg border border-gray-500/30 flex items-center justify-center">
                                            <img src={GlobeIcon} alt="" width={26} />
                                        </div>
                                        <div>
                                            <p className='text-sm text-gray-400'>Region: <span className=' text-white font-semibold'>Global</span></p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className="box-icon w-[60px] h-[60px] bg-white/10 rounded-lg border border-gray-500/30 flex items-center justify-center">
                                            <img src={SteamIcon} alt="" width={26} />
                                        </div>
                                        <div>
                                            <p className='text-sm text-gray-400'>platform: <span className=' text-white font-semibold'>Steam</span></p>
                                            <ProductModals trigger="guide" />
                                            {/* <a href="" className='text-[#4885FF] text-xs font-semibold'>Activation Guide</a> */}
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className="box-icon w-[60px] h-[60px] bg-white/10 rounded-lg border border-gray-500/30 flex items-center justify-center">
                                            <img src={LaptopIcon} alt="" width={26} />
                                        </div>
                                        <div>
                                            <p className='text-sm text-gray-400'>Works on:  <span className=' text-white font-semibold'>Windows</span></p>
                                            <a href="" className='text-[#4885FF] text-xs font-semibold'>System Requirements</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Country Selector */}
                        <div className="bg-black px-4 py-1 rounded-xl space-y-4 w-[34%] flex items-center gap-4">
                            <label className="block text-sm text-gray-300" style={{ position: 'relative', top: '10px' }}>Region</label>
                            <select className="bg-[#161616] border border-gray-600/30 text-white text-sm rounded-lg px-5 py-2.5 w-full">
                                <option>Global</option>
                                <option>Europe</option>
                            </select>
                        </div>
                        <div className='bg-[#212121] w-full h-[1px]'></div>

                        {/* Variations Grid */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {Array.from({ length: variationCount })
                                .slice(0, showAllVariations ? variationCount : 8)
                                .map((_, i) => (
                                    <label
                                        key={i}
                                        className="group block bg-[#161616] rounded-lg border border-gray-700/30 overflow-hidden transition-colors duration-200 custom-container"
                                    >
                                        <div className="flex bg-[#212121] items-center justify-between p-3">
                                            <h3 className="text-sm font-semibold">Variation {i + 1}</h3>
                                            <div className="flex items-center gap-2">
                                                <input type="radio" name="variation" className="custom-radio" />
                                            </div>
                                        </div>
                                        <div className="p-3 text-[#969696] text-[12px]">from DZD 699.94</div>
                                    </label>
                                ))}
                        </div>

                        {/* Show All / Show Less Button */}
                        {totalVariations > 8 && (
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setShowAllVariations(prev => !prev)}
                                    className="text-sm text-white font-semibold  bg-[#212121] py-2 rounded-full transition hover:bg-[#363636] px-6"
                                >
                                    {showAllVariations ? 'Show Less' : 'See All'}
                                </button>
                            </div>
                        )}

                        <div className="bg-[#161616] border border-gray-600/30 mt-6 p-4 rounded-xl flex gap-5">
                            <div>
                                <img src={ExclamationIcon} width={18} alt="" className='mt-2' style={{ transform: 'rotate(180deg)' }} />
                            </div>
                            <div className="text-white text-sm font-medium leading-[2em]">
                                <p className='text-[#FF8D07]'>Important Notice:</p>
                                <p className='text-[#FF8D07] font-regular'>Grants only Robux and cannot be used toward a Premium subscription.</p>
                            </div>
                        </div>

                        {/* Other Offers Table */}
                        <div className="bg-black rounded-xl mt-8 overflow-hidden">
                            {/* Header */}
                            <div className="flex justify-between items-center  p-4">
                                <h2 className="text-lg font-semibold">Other Offers</h2>
                                <div>
                                    <span className='text-[#969696] text-sm'>Sort by: </span>
                                    <select className="bg-black text-white font-semibold cursor-pointer !transition-all hover:text-[14.4px] roundedpy-1 text-sm w-[100px] ml-2">
                                        <option>Best Price</option>
                                        <option>Best Rating</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table Body */}
                            <div className="">
                                {Array.from({ length: shownOffers }).map((_, i) => (
                                    <div key={i} className="flex flex-col border border-gray-600/30 bg-[#161616] rounded-lg md:flex-row p-4 gap-4 mb-4  ">

                                        {/* Left: Vendor Info */}
                                        <div className="flex items-center gap-3 md:w-1/3">
                                            <img
                                                src={vendors[i % vendors.length]} // Use modulo in case more offers than vendors
                                                className="w-10 h-10 rounded-full"
                                                alt={`Vendor ${i + 1}`}
                                            />
                                            <div>
                                                <div className="text-sm font-medium flex gap-2 items-center !leading-[2.2em]">Vendor {i + 1} <span><img src={verifiedIcon} width={16} alt="" /></span></div>
                                                <div className="text-xs text-gray-400">Rating: 4.5/5</div>
                                            </div>
                                        </div>

                                        {/* Right: Offer Info */}
                                        <div className="md:w-2/3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                                            <div className="relative group w-full md:w-auto">
                                                <div className="text-white text-[24px] font-semibold group-hover:opacity-0 transition duration-300">
                                                    DZD39.99
                                                </div>
                                                <button className="absolute top-0 left-0 w-full text-md text-white font-medium px-2 py-1 rounded hidden group-hover:block transition duration-300 h-10 bg-linear-65 from-purple-500 to-pink-500">
                                                    Buy with Plus
                                                </button>
                                                <div className="text-[14px] text-[#8C54D3] mt-1">
                                                    Save 60% with Plus
                                                </div>
                                            </div>

                                            <div className="text-white text-[24px]  font-semibold">DZD99.99</div>

                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleClick(i)}
                                                    className="bg-[#383838] hover:bg-[#484848] transition hover:bg-[#4885FF]/90 text-[16px] font-semibold px-6 py-2 rounded-md">
                                                    {/* <img src={CartIcon} width={24} alt="" /> */}
                                                    {loadingIndex == i ? (
                                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    ) : confirmedIndex == i ? (
                                                        <img src={CartCheck} width={24} alt="Added" onClick={() => window.location.href = '/cart'} className="cursor-pointer" />
                                                    ) : (
                                                        <img src={CartIcon} width={24} alt="Add to cart" />
                                                    )}
                                                </button>
                                                <button className="bg-[#4885FF] hover:bg-[#4885FF]/90 text-[16px] font-semibold px-6 py-2 rounded-md">
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {shownOffers < 12 && (
                                <div className="text-center p-4">
                                    <button
                                        onClick={() => setShownOffers((prev) => prev + 4)}
                                        className="text-sm text-blue-400 hover:underline"
                                    >
                                        Load More Offers
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Spinner Overlay */}
                        {loadingSuccessCard && (
                            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}



                        <div className="mt-12">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Frequently Bought Together</h2>
                                {/* <div className="flex gap-2">
                                <div className="swiper-button-prev text-white hover:text-blue-400 cursor-pointer" />
                                <div className="swiper-button-next text-white hover:text-blue-400 cursor-pointer" />
                            </div> */}
                            </div>
                            {/* Bundle Card */}
                            <div className="border border-gray-600/30 bg-[#161616] rounded-lg mt-6 p-4 flex justify-between items-center">
                                <div className="text-white text-sm font-medium">
                                    <span className='block text-[#969696] text-sm'>Get this bundle for only</span>
                                    <span className="text-white font-semibold text-[24px]">DZD19,000</span>
                                </div>
                                <button className="bg-[#4885FF] hover:bg-[#4885FF]/90 text-[16px] font-semibold px-6 py-2 rounded-md flex gap-1">
                                    <img src={ShoppingIcon} width={24} height={'auto'} alt="" />
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="mt-12">
                            <h2 className="text-xl font-semibold mb-4">Product Title</h2>
                            <div className="bg-[#161616] border border-gray-600/30 p-6 rounded-xl text-gray-300 relative overflow-hidden">
                                <h3 className="text-lg font-bold mb-2">Overview</h3>

                                <div className={`text-sm ${!expanded ? "line-clamp-5" : ""} transition-all relative`}>
                                    <p>
                                        This product is designed to offer the best experience in gaming, learning, or productivity.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>High performance</li>
                                        <li>Trusted by professionals</li>
                                        <li>Backed by 2-year warranty</li>
                                        <li>Backed by 2-year warranty</li>
                                        <li>Backed by 2-year warranty</li>
                                        <li>Backed by 2-year warranty</li>
                                    </ul>
                                    <p>
                                        Whether you're a student or a professional, this product is tailored for excellence.
                                    </p>
                                </div>

                                {/* Fade shadow when not expanded */}
                                {!expanded && (
                                    <div className="absolute bottom-12 left-0 right-0 h-12 bg-gradient-to-t from-[#161616] to-transparent pointer-events-none" />
                                )}

                                <div className="mt-4">
                                    <button
                                        onClick={() => setExpanded(!expanded)}
                                        className="text-white font-semibold hover:underline text-sm font-medium"
                                    >
                                        {expanded ? "See less" : "Read more"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-12 bg-[#161616] border border-gray-600/30 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2 text-yellow-400 text-xl">
                                <div className='flex gap-1'>
                                    <FaStar className='text-[24px]' />
                                    <FaStar className='text-[24px]' />
                                    <FaStar className='text-[24px]' />
                                    <FaStar className='text-[24px]' />
                                    <FaStar className='text-gray-600 text-[24px]' />
                                </div>
                                <span className="text-white text-base text-[19px] font-semibold">4.5 (248 reviews)</span>
                            </div>
                            <button className="bg-[#484848] hover:bg-[#484848]/90 text-[16px] font-semibold px-4 py-3 rounded-lg flex gap-1">
                                Leave a Review
                            </button>
                        </div>

                        {/* Other Details Section */}
                        <div className="mt-12">
                            <h2 className="text-xl font-semibold mb-4">Other Details</h2>
                            <div className="bg-[#161616] border border-gray-600/30 p-6 rounded-xl text-sm text-gray-300">
                                <div className="grid grid-cols-3 gap-4 font-semibold mb-2">
                                    <div className='text-[17px] text-[#969696]'>Release Date</div>
                                    <div className='text-[17px] text-[#969696]'>Publisher</div>
                                    <div className='text-[17px] text-[#969696]'>Developer</div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className='text-white'>March 10, 2024</div>
                                    <div className='text-white'>Awesome Studio</div>
                                    <div className='text-white'>TechDev Inc.</div>
                                </div>
                            </div>
                        </div>


                        <Recommended title={'Trending Products '} showBtn={true} fromPrice={true} discount={true} productPage={true} />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-3 h-fit">
                        <div className="bg-[#161616] rounded-xl border border-gray-600/30 overflow-hidden">
                            <div className=" space-y-4">
                                <h2 className="text-sm text-center py-1 text-[#969696] font-semibold w-full  border-b border-gray-600/30">promoted offer</h2>

                                <div className="space-y-2 p-4">
                                    <label className="flex items-center justify-between gap-2 border border-[2px] border-gray-600/40 px-3 py-2 rounded-lg">
                                        <span className='text-white text-[24px] font-semibold '  >DZD 39.99</span>
                                        <input type="radio" name="promo" className="accent-green-500 custom-radio" />
                                    </label>
                                    <label className="flex items-center justify-between gap-2 border border-[2px] border-[#8C54D3] px-3 py-2 rounded-lg">
                                        <span className='text-white text-[24px] font-semibold '  >DZD 59.99</span>
                                        <div className="flex items-center gap-2">
                                            <span className='border border-[2px] border-[#8C54D3] rounded-full text-[#8C54D3] text-sm px-2'>plus</span>
                                            <input type="radio" name="promo" className="accent-green-500 custom-radio-purple" />
                                        </div>
                                    </label>
                                    <p className="text-sm text-[#969696] text-[13px]">
                                        PRICE NOT FINAL
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <p className='flex gap-2 text-[12px]'>
                                            <span className='text-[#969696]'>Sold By</span>
                                            <span className='flex text-[13px] items-center font-semibold gap-1'>
                                                PromoPropused
                                                <img src={verifiedIcon} width={16} style={{ height: '16px' }} alt="" />
                                            </span>
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className='text-[12px] text-[#FDC700]' />
                                            <span className='text-white font-semibold text-[13px]'>4.6</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button className="bg-[#363636] hover:bg-[#484848] p-2.5 rounded-lg text-sm font-semibold">
                                            <img src={CartIcon} alt="" width={28} />
                                        </button>
                                        <button className="px-4 py-2.5 rounded-lg text-[18px] font-semibold flex items-center gap-1 flex-1 justify-center buynow-productpage-button transition" style={{ background: 'radial-gradient(100% 100% at 0% 0%, rgba(182, 126, 253, 0.867) 0%, rgba(118, 38, 220, 0.867) 68.08%)' }}>
                                            <img src={ShoppingIcon} width={28} alt="" />
                                            Buy Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="text-white py-1.5 text-[13px] font-semibold text-center flex items-center justify-center gap-1" style={{ background: 'radial-gradient(100% 100% at 0% 0%, rgba(182, 126, 253, 0.867) 0%, rgba(118, 38, 220, 0.867) 68.08%)' }}>
                                plus <span className='bg-white/30 uppercase text-[9px] text-white/80 font-semibold p-1 rounded-lg'>membership</span> | Yay! Saving <span>DZD 58.24</span>
                            </div>
                        </div>

                        <div className='my-3 bg-[#042162] !text-[#4885FF] w-[fit-content] px-2 rounded-lg font-semibold text-[15px]'>
                            +6 offers starting at DZD 885.39
                        </div>

                        <div className="w-full bg-[#161616] flex items-center justify-between border border-gray-600/30 rounded-lg">
                            <div className='border-r py-2 text-[14px] text-[#999999] font-medium border-gray-600/30 flex flex-col items-center justify-center flex-1 text-center'>
                                <img src={lighteningIcon} width={20} className='mb-1' alt="" />
                                <span>Instantly <br /> Delivery</span>
                            </div>
                            <div className='border-r py-2 text-[14px] text-[#999999] font-medium border-gray-600/30 flex flex-col items-center justify-center flex-1 text-center'>
                                <img src={supportIcon} width={20} className='mb-1' alt="" />
                                <span>24/7 <br /> Support</span>
                            </div>
                            <div className='flex py-2 text-[14px] text-[#999999] font-medium flex-col items-center justify-center flex-1 text-center'>
                                <img src={verifiedIcon} width={20} className='mb-1' alt="" />
                                <span>Verified <br /> Sellers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSuccessCard && addedProduct && (
                <div className="fixed bottom-5 right-5 z-50 flex justify-center">
                    <div className="bg-[#161616] text-white rounded-2xl shadow-xl w-full sm:w-[400px] mx-auto p-4 animate-slide-up">

                        {/* Checkmark icon */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 rounded-full">
                                <img src={verifiedIcon} alt="" />
                                <span className="text-white font-semibold">Added to cart</span>
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="flex gap-4 items-center mb-4">
                            <img src={addedProduct.img} alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                            <div>
                                <h3 className="text-base font-semibold">{addedProduct.title}</h3>
                                <p className="text-sm text-gray-400">{addedProduct.price}</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.href = '/cart'}
                                className="flex-1 bg-[#383838] hover:bg-[#484848] py-2 rounded-md font-semibold"
                            >
                                View Cart
                            </button>
                            <button
                                onClick={() => window.location.href = '/checkout'}
                                className="flex-1 bg-[#4885FF] hover:bg-[#4885FF]/90 py-2 rounded-md font-semibold"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default product
