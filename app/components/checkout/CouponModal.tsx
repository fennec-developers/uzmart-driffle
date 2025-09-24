import React from 'react';
import { GoTag } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaTag } from "react-icons/fa";

interface CouponModalProps {
  showCouponModal: boolean;
  toggleCouponModal: () => void;
}

const CouponModal: React.FC<CouponModalProps> = ({ showCouponModal, toggleCouponModal }) => {
  return (
    <>
      <div className="flex justify-between items-center rounded-md border border-[1px] border-[#3a3a3a] px-4 py-1 mb-4">
        <div className="flex items-start gap-2 mt-2">
          <GoTag className="text-blue-400 text-[22px] font-bold" />
          <p className="text-[12px] text-gray-300 mb-4">Have a coupon?</p>
        </div>
        <IoIosArrowDown className="text-white" onClick={toggleCouponModal} />
      </div>
      {showCouponModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-[#1f1f1f] rounded-lg w-full max-w-md text-white relative">
            <div className="p-6">
              <button
                onClick={toggleCouponModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold mb-4 border-b border-[#3a3a3a] pb-4">Apply coupon</h2>
              <input
                type="text"
                placeholder="Enter code"
                className="w-full p-3 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white font-semibold py-3 rounded-md mb-4 transition duration-200">
                Apply coupon
              </button>
            </div>
            <div className="rounded-b-md bg-[#2c2c2c] border-t border-[#3a3a3a] p-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaTag className="text-blue-500 text-[19px]" />
                <span>No coupons are available at the moment</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CouponModal;