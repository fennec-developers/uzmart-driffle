import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import type { IconBaseProps } from 'react-icons';
import plusIllustration from '../../public/extras/plus-illustration.svg'
import plusLogo from '../../public/extras/plus-logo.svg'

const CheckIcon = FaCheckCircle as React.FC<IconBaseProps>;
export default function GetExtra() {
  return (
    <div className='flex flex-col lg:flex-row w-full bg-[#161616] overflow-hidden'>
      {/* Hides on mobile for cleaner look */}
      <div className='hidden lg:block w-[18%]'>
        <img src={plusIllustration} alt="" className='object-cover' />
      </div>

      <div className='w-full lg:w-[40%] flex flex-col justify-center p-8 sm:p-12 text-center lg:text-left items-center lg:items-start'>
        <h2 className='text-white font-bold text-3xl sm:text-4xl'>
          Get extra discounts with
        </h2>
        <span className="flex items-center gap-2 mt-2">
          <span className="text-white font-bold text-3xl sm:text-4xl">ClickShift</span>
          <img src={plusLogo} alt="Plus Logo" className="w-20 h-20" />
        </span>
        <button className='bg-[rgb(160,107,230)] mt-6 text-white font-bold text-base rounded-lg py-3 px-10 hover:bg-purple-500/90 transition'>
          Join Now
        </button>
      </div>

      <div className='text-white w-full lg:w-[60%] flex flex-col justify-center p-8 sm:p-12 bg-[linear-gradient(101.06deg,_rgb(128,_44,_236)_28%,_rgb(168,_102,_251)_80%)]'>
        <h3 className='pb-4 font-bold text-2xl sm:text-3xl'>Perks of Plus Membership</h3>
        <ul className="list-none space-y-3">
          {['Up to 10% OFF on Games, Gift Cards & DLCs', 'Access to exclusive sale events', 'Priority pre-order fulfillment', 'Priority customer support'].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="bg-purple-800/80 rounded-full p-1 shrink-0"><FaCheckCircle className="text-white" /></span>
              <span className="font-medium text-base sm:text-lg">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
