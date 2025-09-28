import React, { useState, useEffect, useMemo } from 'react';
import { CiTrash } from "react-icons/ci";
import { FaArrowRightLong, FaCheck, FaPlus } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from 'react-router'; // CORRECTED IMPORT
import { LuStore } from "react-icons/lu";

// --- (Part 1 of 4): Types and Data ---

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

const cartItemsData: CartItem[] = [
  { id: 1, store: "Gaming Empire", image: "https://upload.wikimedia.org/wikipedia/en/c/ce/V_Rising_cover_art.jpg", title: "V Rising (Global) (PC) - Steam - Digital Key", region: "GLOBAL", type: "GAME", price: 1528.75, quantity: 1 },
];

const membershipBenefits = [ "Up to 10% OFF", "Access to exclusive sales", "Priority pre-orders", "Priority support" ];


// --- (Part 2 of 4): Reusable Components ---

const CartItemComponent: React.FC<{
    item: CartItem;
    plusEnabled: boolean;
    discountPerItem: number;
    updateQuantity: (id: number, newQuantity: number) => void;
    removeItem: (id: number) => void;
}> = ({ item, plusEnabled, discountPerItem, updateQuantity, removeItem }) => (
    <div className="bg-[#141414] rounded-lg mb-4 border border-gray-800">
        <div className="p-4 border-b border-gray-800">
            <p className="text-sm text-gray-400">From: <span className="font-semibold text-white">{item.store}</span></p>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4 p-4">
            <img src={item.image} alt={item.title} className="w-24 h-32 sm:w-28 sm:h-40 object-cover rounded-md flex-shrink-0" />
            <div className="flex-1 flex flex-col justify-between self-stretch">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-medium text-white text-base leading-tight">{item.title}</p>
                        <p className="text-blue-400 text-sm font-medium mt-1">{item.region}</p>
                    </div>
                    <span className="text-xs bg-purple-800/80 rounded-full px-2.5 py-1">{item.type}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mt-4 pt-4 border-t border-gray-800 gap-4">
                    <div className="flex items-center space-x-3">
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition"><CiTrash size={22} /></button>
                        <div className="flex items-center bg-[#2b2b2b] rounded-md">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2.5 py-1 hover:bg-gray-700 rounded-l-md">-</button>
                            <span className="px-3">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2.5 py-1 hover:bg-gray-700 rounded-r-md">+</button>
                        </div>
                    </div>
                    <div className="text-right">
                        {plusEnabled && <p className="font-semibold text-sm line-through text-gray-500">DZD {(item.price * item.quantity).toFixed(2)}</p>}
                        <p className="text-white text-lg font-bold">DZD {plusEnabled ? ((item.price * item.quantity) - discountPerItem).toFixed(2) : (item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- (Part 3 of 4): Skeleton Loader Components ---

const CartItemSkeleton: React.FC = () => (
    <div className="bg-[#141414] rounded-lg mb-4 border border-gray-800 animate-pulse">
        <div className="p-4 border-b border-gray-800"><div className="h-4 bg-gray-700/50 rounded w-1/3"></div></div>
        <div className="flex flex-col sm:flex-row items-start gap-4 p-4">
            <div className="w-24 h-32 sm:w-28 sm:h-40 bg-gray-700/50 rounded-md flex-shrink-0"></div>
            <div className="flex-1 space-y-4">
                <div className="h-5 bg-gray-700/50 rounded w-full"></div>
                <div className="h-5 bg-gray-700/50 rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800"><div className="h-8 bg-gray-700/50 rounded w-24"></div><div className="h-6 bg-gray-700/50 rounded w-1/4"></div></div>
            </div>
        </div>
    </div>
);

const SummarySkeleton: React.FC = () => (
    <div className="animate-pulse space-y-4">
         <div className="h-8 bg-gray-700/50 rounded w-1/3"></div>
        <div className="bg-[#141414] rounded-lg border border-gray-800 p-4 space-y-4">
            <div className="h-6 bg-gray-700/50 rounded w-1/2"></div>
            <div className="h-10 bg-gray-700/50 rounded w-2/3"></div>
            <div className="h-12 bg-gray-700/50 rounded-lg w-full"></div>
        </div>
        <div className="bg-[#141414] rounded-lg border border-gray-800 p-4 h-48"></div>
    </div>
);

const CartSkeleton: React.FC = () => (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-6 md:p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <div className="h-8 bg-gray-700/50 rounded w-1/4 mb-4 animate-pulse"></div>
                <CartItemSkeleton />
                <CartItemSkeleton />
            </div>
            <div><SummarySkeleton /></div>
        </div>
    </div>
);


// --- (Part 4 of 4): The Main Cart Component ---

export default function CartPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [plusEnabled, setPlusEnabled] = useState(false);
    const [items, setItems] = useState<CartItem[]>(cartItemsData);
    const discount: number = 152.88;
    
    useEffect(() => {
      // Simulate fetching cart data
      const timer = setTimeout(() => {
          // In a real app, you might set initial items here from an API response
          setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);

    const subtotal = useMemo(() => items.reduce((sum, item) => sum + (item.price * item.quantity), 0), [items]);
    const finalPrice = plusEnabled ? (subtotal - discount).toFixed(2) : subtotal.toFixed(2);

    const updateQuantity = (id: number, newQuantity: number) => { if (newQuantity >= 1) setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)); };
    const removeItem = (id: number) => { setItems(items.filter(item => item.id !== id)); };

    if (isLoading) {
        return <CartSkeleton />;
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cart Items Section */}
                <div className="md:col-span-2">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-6">My Cart</h1>
                    {items.length === 0 ? (
                        <div className="col-span-full flex items-center justify-center min-h-[50vh] w-full bg-[#141414] rounded-lg border border-gray-800">
                            <div className="flex flex-col items-center justify-center text-center gap-4 p-8">
                                <img src="/empty-cart-removebg-preview.png" alt="Empty Cart" className="w-auto h-auto max-h-[200px] sm:max-h-[300px]" />
                                <h2 className="text-xl sm:text-2xl font-semibold">Your cart is empty</h2>
                                <p className="text-gray-400">Looks like you haven't added anything to your cart yet.</p>
                                <Link to="/store" className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-md transition">
                                    <LuStore className="text-xl" /> Go to Store
                                </Link>
                            </div>
                        </div>
                    ) : (
                        items.map((item) => <CartItemComponent key={item.id} item={item} plusEnabled={plusEnabled} discountPerItem={discount / items.length} updateQuantity={updateQuantity} removeItem={removeItem}/>)
                    )}
                </div>

                {/* Summary Section - Renders only if cart is not empty */}
                {items.length > 0 && (
                    <div className="sticky top-24 h-fit">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Summary</h2>
                        <div className="bg-[#141414] rounded-lg border border-gray-800 relative">
                           {/* ... summary details ... */}
                           <div className="p-5">
                             <h3 className="text-lg font-semibold mb-1">Total</h3>
                             <p className="text-3xl font-bold mb-1">DZD {finalPrice}</p>
                             <div className="flex items-start gap-2 text-gray-400 group">
                                <p className="text-xs mb-4">Price not final</p>
                                {/* ... tooltip icon ... */}
                             </div>
                             <Link to="/checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 text-base">
                                 Proceed to Checkout <FaArrowRightLong />
                            </Link>
                           </div>
                        </div>
                        <div className={`mt-4 p-5 rounded-lg border border-purple-700/50 relative overflow-hidden transition-colors ${plusEnabled ? 'bg-purple-900/30' : 'bg-[#141414]'}`}>
                             <FaPlus className={`absolute -top-2 -right-2 text-[55px] text-purple-600/50 transition-opacity ${plusEnabled ? 'opacity-30' : 'opacity-10'}`} />
                            <p className="text-base font-semibold mb-3">Save <span className="text-purple-400">DZD {discount.toFixed(2)}</span> with Plus!</p>
                             <ul className="text-sm space-y-2 text-gray-300">
                                {membershipBenefits.map((benefit) => (
                                     <li key={benefit} className="flex items-center gap-3">
                                         <span className="bg-purple-800 text-white rounded-full p-1 text-[10px]"><FaCheck /></span>{benefit}
                                    </li>
                                ))}
                            </ul>
                            <label className="flex items-center justify-between cursor-pointer mt-4 pt-4 border-t border-gray-800">
                                <span className="font-semibold text-white">Enable Plus Savings</span>
                                 <div className="relative"><input type="checkbox" className="sr-only peer" checked={plusEnabled} onChange={() => setPlusEnabled(!plusEnabled)} /><div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div></div>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}