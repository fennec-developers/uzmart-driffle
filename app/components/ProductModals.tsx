import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import crossIcon from '../../public/cross.png'
import closeIcon from '../../public/close.png'
import guideImg from '../../public/guide-img.webp'

export default function ProductModals({ trigger }) {
    const [modal, setModal] = useState(null);

    const closeModal = () => setModal(null);

    const restrictions = [
        'North Korea', 'Syria', 'Iran', 'Cuba', 'Sudan',
        'Russia', 'Belarus', 'Myanmar', 'Somalia', 'Libya',
        'Afghanistan', 'Yemen', 'Venezuela', 'Zimbabwe', 'Eritrea',
        'Central African Republic', 'South Sudan', 'Iraq', 'Democratic Republic of the Congo', 'Lebanon',
        'Nicaragua', 'Haiti', 'Mali', 'Chad', 'Burkina Faso',
        'Pakistan', 'Palestinian Territories', 'Kosovo', 'Bosnia and Herzegovina', 'Uzbekistan'
    ];

    const steps = [
        'Open Steam and login to your account.',
        'Click on the “Games” menu, then “Activate a Product on Steam”.',
        'Follow the on-screen instructions and enter your digital key.',
        'Wait for confirmation and start the installation.',
    ];

    return (
        <>
            {trigger === 'restrictions' && (
                <a onClick={() => setModal('restrictions')} className="cursor-pointer text-[#4885FF] text-xs font-semibold">
                    Check Restrictions
                </a>
            )}
            {trigger === 'guide' && (
                <a onClick={() => setModal('guide')} className="cursor-pointer text-[#4885FF] text-xs font-semibold">
                    Activation Guide
                </a>
            )}

            <Transition appear show={!!modal} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 p-4">
                        <div className="flex min-h-full items-center justify-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95 translate-y-2"
                                enterTo="opacity-100 scale-100 translate-y-0"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`relative lg:w-[800px] h-[78vh]  max-w-4xl transform overflow-hidden rounded-2xl bg-[#111] text-white shadow-xl transition-all ${modal == 'restrictions' ? 'p-5' : ''}`}>
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 text-white hover:text-red-500 transition w-[40px] h-[40px] rounded-full flex items-center justify-center transition hover:bg-gray-600/30"
                                    >
                                        <img src={closeIcon} alt="Close" width={17} />
                                    </button>
                                    <Dialog.Title className="text-xl font-bold mb-4">
                                        {/* {modal === 'guide' ? 'Activation Guide' : ''} */}
                                    </Dialog.Title>

                                    {/* Restrictions List */}
                                    {modal === 'restrictions' && (
                                        <>
                                            <div className='flex items-start gap-4'>
                                                <img src={crossIcon} width={30} alt="" />
                                                <div>
                                                    <h4 className='text-[20px] mb-1'>This version of product can not be activated in <span className="font-semibold ">Algeria</span> </h4>
                                                    <p className='text-[#999999] text-[18px]'>Why are you seeing this? You found a product version which is not allowed to be activated in your country. Try to find this product for different region.</p>
                                                </div>
                                            </div>

                                            <div className="h-[1px] bg-gray-600/30 w-full my-6"></div>

                                            <div className="flex justify-between">
                                                <div className='flex-1'>
                                                    <p className='text-[18px] text-white'>The product region is restricted to:</p>
                                                    <p className='font-semibold text-[18px]'>Europe</p>
                                                </div>

                                                <div className='flex-1'>
                                                    <p className='text-[18px] text-white'>Your Country:</p>
                                                    <p className='font-semibold text-[18px]'>Algeria</p>
                                                </div>
                                            </div>

                                            <div className="h-[1px] bg-gray-600/30 w-full my-6"></div>

                                            <div>
                                                <div className="flex justify-between">
                                                    <h4 className='text-white font-bold flex-1 text-[18px] leading-[1.1em]'>List of allowed countries for this product version:</h4>
                                                    <input type="text" className='flex-1 bg-[#212121] outline-none border-none rounded-lg ml-10 ps-4 py-4 placeholder:text-[19px] placeholder:font-semibold placeholder:' placeholder='Search Country' />
                                                </div>
                                                <div className="countries h-[300px] grid grid-cols-3 overflow-y-auto  gap-4 mt-4">
                                                    {restrictions.map(res => (
                                                        <span className='text-white py-4 font-semibold text-[18px]'>{res}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* <input
                        type="text"
                        placeholder="Search country..."
                        className="w-full p-2 mb-4 bg-black border border-gray-600 rounded"
                        onChange={(e) =>
                          setFiltered(
                            restrictions.filter((country) =>
                              country.toLowerCase().includes(e.target.value.toLowerCase())
                            )
                          )
                        }
                      />
                      <ul className="grid grid-cols-2 gap-2">
                        {restrictions.map((country, i) => (
                          <li key={i} className="text-sm text-gray-300 py-1 px-2 bg-white/5 rounded border border-gray-600">
                            {country}
                          </li>
                        ))}
                      </ul> */}
                                        </>
                                    )}

                                    {/* Guide Steps */}
                                    {modal === 'guide' && (
                                        <div className=''>
                                            <h2 className="text-white text-2xl font-bold p-5 pt-2">Activation Guide</h2>
                                            <div className="h-[1px] bg-gray-600/30 w-full mb-5"></div>
                                            <div className='overflow-y-auto h-[calc(78vh-100px)] px-6 pb-6 space-y-10'>
                                                <h2 className='text-white text-2xl font-bold p-5 pt-2'>How to Activate a Steam Game Key</h2>

                                            <div className="flex flex-col  gap-10 px-6">
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>1</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>2</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-start gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>3</span>
                                                    <img src={guideImg} alt="" width={400} />
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>4</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>5</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>6</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>7</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>8</span>
                                                    <p className='text-white'>Launch the <span className="font-semibold">Steam client software</span> and log into your Steam account.</p>
                                                </div>
                                                <div className='flex items-start gap-3'>
                                                    <span className='text-white text-[20px] font-regular p-[1rem] bg-[#161616] rounded-full flex justify-center items-center w-[36px] h-[36px]'>9</span>
                                                    <img src={guideImg} alt="" width={400} />
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    )}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
