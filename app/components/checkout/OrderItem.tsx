import React from 'react';
import { CiTrash } from 'react-icons/ci';
import type { OrderItem as OrderItemType } from '../../data/checkout';


interface OrderItemProps {
  item: OrderItemType;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center mb-4">
      <img src={item.image} alt={item.title} className="w-20 h-27 rounded-md mr-4" />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <p>{item.title}</p>
            <p className="text-gray-400">Sold by {item.store}</p>
          </div>
          <span className="inline-block px-2 py-1 text-xs bg-[#6b43d1] rounded-md">{item.type}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="text-white font-semibold cursor-pointer" onClick={() => removeItem(item.id)}>
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
          <span className="ml-auto">DZD {(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;