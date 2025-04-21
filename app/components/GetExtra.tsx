import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import type { IconBaseProps } from 'react-icons';
import plusIllustration from '../../public/extras/plus-illustration.svg'
import plusLogo from '../../public/extras/plus-logo.svg'

const CheckIcon = FaCheckCircle as React.FC<IconBaseProps>;
export default function GetExtra() {
  return (
    <div className='flex w-full h-100 bg-[#161616] overflow-hidden '>
      <div className='w-[18%] text-red-300 text-2xl'>
        <img src={plusIllustration} alt="" className='relative top-[-50px] left-[-50px]' />
      </div>
      <div className='w-[32%] h-full flex flex-col  justify-center wrap-normal'>
        <div className='flex w-[80%]'>
          <div>
            <h1 className='text-white font-bold text-[39.9px] flex items-center flex-wrap'>
              <span className="mr-2" style={{ lineHeight: '0' }}>Get extra discounts with</span>
              <span className="inline-flex items-center gap-2">
                <span>Driffle</span>
                <img src={plusLogo} alt="" className="w-24 h-24 mx-2" />
              </span>
            </h1>
          </div>
        </div>
        <button className='bg-[rgb(160,107,230)] text-white font-bold text-[16px] rounded-lg py-3 cursor-pointer w-[fit-content] !px-10 hover:bg-[rgb(160,107,230)]/90 transition'>
          Join Now
        </button>
      </div>
      <div className='text-white w-[50%] h-full flex flex-col justify-center  px-20 bg-[linear-gradient(101.06deg,_rgb(128,_44,_236)_28%,_rgb(168,_102,_251)_80%)]'>
        <p className=' pb-4 font-bold text-[32px]   '>Perks of Driffle Plus</p>
        <ul className="list-none space-y-2 text-[18px] font-medium">
          {[
            'Up to 10% OFF on Games, Gift Cards, DLCs and more',
            'Access to exclusive sale events and promotions',
            'Priority pre-order fulfillment',
            'Priority support',
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="bg-[rgb(128,44,236)] rounded-full p-1 shrink-0">
                <FaCheckCircle className="text-white text-[18px]" />
              </span>
              <span className="text-[16px] font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
