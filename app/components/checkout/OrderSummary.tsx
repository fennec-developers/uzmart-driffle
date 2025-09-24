import React from 'react';
import OrderItem from './OrderItem';
import CouponModal from './CouponModal';
import type { OrderItem as OrderItemType } from '../../data/checkout';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

interface OrderSummaryProps {
  items: OrderItemType[];
  subtotal: number;
  serviceFee: number;
  total: number;
  showCouponModal: boolean;
  toggleCouponModal: () => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  serviceFee,
  total,
  showCouponModal,
  toggleCouponModal,
  updateQuantity,
  removeItem,
}) => {
  return (
    <div className="w-full md:w-1/3 mt-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="bg-[#141414] rounded-lg p-6 border border-[1px] border-[#3a3a3a]">
        {items.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}

        <div className="h-[1px] bg-[#3a3a3a] w-full mb-4" />

        <CouponModal showCouponModal={showCouponModal} toggleCouponModal={toggleCouponModal} />
        <div className="h-[1px] bg-[#3a3a3a] w-full " />
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-400">{items.length} items subtotal</span>
          <span className="text-sm font-semibold">DZD {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mt-2 relative group">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            Service Fee
            <div className="relative">
              <AiOutlineExclamationCircle className="cursor-pointer hover:text-gray-300 transition-colors" />
              <div className="absolute hidden group-hover:block z-50 w-64 p-3 text-xs text-gray-100 bg-[#222] rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 border border-[#3a3a3a]">
                Fee levied by Driffle to sustain the efficient operations and continuous improvement of the platform
                <div className="absolute w-2 h-2 bg-[#222] rotate-45 -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-[#3a3a3a]"></div>
              </div>
            </div>
          </span>
          <span className="text-lg font-semibold">DZD {serviceFee.toFixed(2)}</span>
        </div>
        <div className="h-[1px] bg-[#3a3a3a] w-full" />
        <div className="flex justify-between items-center border-t border-gray-600 pt-4 relative group">
          <span className="text-lg font-semibold">Total</span>
          <div className="flex flex-col gap-2">
            <span className="text-[21px] font-semibold">DZD {total.toFixed(2)}</span>
            <span className="flex items-center gap-2 text-[12px] text-gray-500">
              You will pay EUR {(total / 139.2).toFixed(2)}
              <div className="relative">
                <AiOutlineExclamationCircle className="cursor-pointer hover:text-gray-300 transition-colors" />
                <div className="absolute hidden group-hover:block z-50 w-64 p-3 text-xs text-gray-100 bg-[#222] rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 border border-[#3a3a3a]">
                  The final charge will be in EUR and the amount in your local currency may vary due to currency conversion rates and any fees applied by your bank.
                  <div className="absolute w-2 h-2 bg-[#222] rotate-45 -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-[#3a3a3a]"></div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        By proceeding through checkout, I acknowledge I have read and accepted{' '}
        <span className="text-blue-700">the Terms and Conditions</span> including{' '}
        <span className="text-blue-700">the Privacy Policy</span> and{' '}
        <span className="text-blue-700">the Refund Policy</span>.
      </p>
    </div>
  );
};

export default OrderSummary;