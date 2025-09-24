// components/CartItem.tsx
import React from 'react';
import { CiTrash } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import type { CartItem } from '../data/cart';

interface CartItemProps {
  item: CartItem;
  plusEnabled: boolean;
  discountPerItem: number;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ 
  item, 
  plusEnabled, 
  discountPerItem,
  updateQuantity, 
  removeItem 
}) => {
  return (
  <div className="bg-[#141414] rounded-lg mb-4 border border-[1px] border-[#3a3a3a]">
  <div className="flex items-center gap-4 border-b border-[#3a3a3a]">
    <p className="text-sm text-gray-400 mb-4 px-4 py-2">
      You are buying from <span className="font-semibold text-white">{item.store}</span>
    </p>
  </div>

  <div className="flex items-start gap-4 p-4">
    <img
      src={item.image}
      alt={item.title}
      className="w-32 h-44 object-cover rounded-md"
    />
    
    <div className="flex-1 flex flex-col justify-between" style={{ height: '11rem' }}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-3 w-full">
          <p className="font-medium text-white">{item.title}</p>
          <p className="text-[#3fa4ff] text-sm font-medium">{item.region}</p>
        </div>
        <span className="inline-block px-2 py-1 text-xs bg-[#6b43d1] rounded-md">
          {item.type}
        </span>
      </div>

      {plusEnabled && (
        <div className="flex items-start gap-1 text-gray-400 relative group">
          <span className="text-xs text-purple-400 font-semibold">plus</span>
          <span className="text-xs text-gray-400 font-semibold">discount is applied on 1 Key</span>
          <div className="relative">
            <AiOutlineExclamationCircle 
              className="cursor-pointer hover:text-gray-300 transition-colors ml-1" 
              size={14}
            />
            <div className="absolute hidden group-hover:block z-50 w-64 p-3 text-xs text-gray-100 bg-[#222] rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 border border-[#3a3a3a]">
              <p>plus discount is eligible on 3 keys of a product per month</p>
              <div className="absolute w-2 h-2 bg-[#222] rotate-45 -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-[#3a3a3a]"></div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 border-t border-[#3a3a3a] pt-2">
        <div className="flex items-center space-x-2">
          <button 
            className="text-white font-semibold cursor-pointer"
            onClick={() => removeItem(item.id)}
          >
            <CiTrash size={24} />
          </button>
          <button 
            className="bg-[#2b2b2b] px-2 rounded"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className="bg-[#2b2b2b] px-2 rounded"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="flex flex-col items-end ml-4">
          {plusEnabled && (
            <p className="font-semibold text-sm line-through text-gray-400">
              DZD {(item.price * item.quantity).toFixed(2)}
            </p>
          )}
          <div className="flex items-center">
            {plusEnabled && (
              <span className="text-sm text-purple-500 mr-1 font-semibold">plus</span>
            )}
            <p className="text-white text-[19px]">
              DZD {plusEnabled 
                ? ((item.price * item.quantity) - discountPerItem).toFixed(2)
                : (item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default CartItemComponent;