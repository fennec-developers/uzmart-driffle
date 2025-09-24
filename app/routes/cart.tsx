import React, { useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { FaArrowRightLong, FaCheck, FaPlus } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from 'react-router'
import CartItemComponent from '../components/CartItemComponent';
import { LuStore } from "react-icons/lu";
// Define types
type CartItem = {
  id: number;
  store: string;
  image: string;
  title: string;
  region: string;
  type: string;
  price: number;
  quantity: number;
};

// Cart data
const cartItemsData: CartItem[] = [
  {
    id: 1,
    store: "Gaming empire",
    image: "https://upload.wikimedia.org/wikipedia/en/c/ce/V_Rising_cover_art.jpg",
    title: "V Rising (Global) (PC) - Steam - Digital Key",
    region: "GLOBAL",
    type: "GAME",
    price: 1528.75,
    quantity: 1
  },
  // Add more items as needed
];

// Membership benefits
const membershipBenefits = [
  "Up to 10% OFF on Games, Gift Cards, DLCs and more",
  "Access to exclusive sale events and promotions",
  "Priority pre-order fulfillment",
  "Priority support"
];

const Cart: React.FC = () => {
  const [plusEnabled, setPlusEnabled] = useState<boolean>(false);
  const [items, setItems] = useState<CartItem[]>(cartItemsData);
  const discount: number = 152.88;

  // Calculate totals
  const subtotal: number = items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);
  const finalPrice: string = plusEnabled ? (subtotal - discount).toFixed(2) : subtotal.toFixed(2);

  // Handle quantity changes
  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id: number): void => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cart Section */}
        {items.length === 0 ? (
  <div className="col-span-full flex items-center justify-center min-h-[60vh] w-full">
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <img
        src="/empty-cart-removebg-preview.png"
        alt="Empty Cart"
        className="w-auto h-auto max-h-[300px]"
      />
      <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      <p className="text-gray-400">Go ahead and add some cool stuff to it.</p>
      <Link
        to="/store"
        className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        <LuStore className="text-xl" />
        Go to Store
      </Link>
    </div>
  </div>
) : (
  <div className="md:col-span-2">
    <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
    {items.map((item) => (
      <CartItemComponent
        key={item.id}
        item={item}
        plusEnabled={plusEnabled}
        discountPerItem={discount / items.length}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    ))}
  </div>
)}


        {/* Summary Section */}
        {items.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>

          <div className="bg-[#141414] rounded-lg relative">
            <div className="border-b border-[#3a3a3a]">
              <div className={`flex justify-center items-center gap-2 py-2 px-4 rounded-md transition-colors duration-300 ${plusEnabled ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-transparent'}`}>
                <span className={`text-xs uppercase ${plusEnabled ? 'text-white' : 'text-purple-400'} flex items-center gap-2`}>
                  plus
                  <span className={`text-[10px] uppercase ${plusEnabled ? 'text-white bg-purple-800' : 'text-purple-400 bg-[#222222]'} px-2 py-[2px] rounded-full tracking-wide`}>
                    membership
                  </span>
                </span>
                <div className={`w-[2px] h-4 ${plusEnabled ? 'bg-purple-500' : 'bg-[#222222]'}`}></div>
                <span className={`text-xs font-semibold ${plusEnabled ? 'text-white' : 'text-purple-500'}`}>
    {plusEnabled ? `Yay! Saving DZD ${discount.toFixed(2)}` : `Save extra DZD ${discount.toFixed(2)}`}
  </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Your cart total</h3>
              <p className="text-2xl font-bold mb-1">DZD {finalPrice}</p>
              <div className="flex items-start gap-2 text-gray-400 relative group">
                <p className="text-xs mb-4">PRICE NOT FINAL</p>
                <div className="relative">
                  <AiOutlineExclamationCircle className="cursor-pointer hover:text-gray-300 transition-colors relative" />
                  <div className="absolute hidden group-hover:block z-50 w-64 p-3 text-xs text-gray-100 bg-[#222] rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2 border border-[#3a3a3a]">
                    Service fee applies at checkout on selection of payment method
                    <div className="absolute w-2 h-2 bg-[#222] rotate-45 -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-[#3a3a3a]"></div>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition flex items-center justify-center gap-2">
                  Proceed to checkout <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>

          <div className={`mt-4 p-4 rounded-lg border border-purple-700 relative transition-colors duration-300 ${plusEnabled ? 'bg-purple-700/30' : 'bg-[#141414]'}`}>
            <FaPlus className={`absolute top-0 right-0 text-[55px] text-purple-700 transition-opacity duration-300 ${plusEnabled ? 'opacity-30' : 'opacity-10'}`} />
            <p className="text-[15px] font-semibold mb-2">
              Save extra <span className={plusEnabled ? "text-white" : "text-purple-700"}>DZD {discount.toFixed(2)}</span>, Join Driffle{' '}
              <span className="text-purple-500 font-bold">plus</span>
            </p>
            <ul className="text-sm space-y-2 text-white">
              {membershipBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-purple-800 text-white rounded-full p-1 text-[10px]">
                    <FaCheck />
                  </span>
                  {benefit}
                  {index === 1 && ( // Add toggle only to the second benefit
                    <label className="inline-flex relative items-center cursor-pointer ml-auto">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={plusEnabled}
                        onChange={() => setPlusEnabled(!plusEnabled)}
                      />
                      <div className="w-11 h-6 bg-[#3a3a3a] rounded-full peer-checked:bg-purple-800 transition-colors duration-300"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                    </label>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center text-sm mt-4 text-center">
            <p className="flex items-center gap-1 text-sm text-white text-center">
              See our 3,505 reviews on{' '}
              <span className="flex items-center gap-1">
                <MdOutlineStarPurple500 className="text-green-400 text-[22px]" />
                <span className="text-white font-semibold">Trustpilot</span>
              </span>
            </p>
          </div>
        </div>
         )}
      </div>
    </div>
  );
};

export default Cart;