import React, { useState, useEffect, useMemo } from 'react';
import { LucideChevronDown, LucideLoader2, LucideLock, LucideShoppingCart, LucideTicket } from 'lucide-react';
import type { OrderItem } from '../data/checkout';
import { orderItemsData } from '../data/checkout'; // Assuming data source

// --- (Part 1 of 5): Reusable UI Components ---

const CheckoutInput: React.FC<{ label: string; placeholder: string; type?: string; icon?: React.ReactNode }> = ({ label, placeholder, type = 'text', icon }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
        <div className="relative">
            {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">{icon}</div>}
            <input type={type} placeholder={placeholder} className={`w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500 ${icon ? 'pl-10' : ''}`} />
        </div>
    </div>
);

const PaymentOption: React.FC<{ imgSrc: string; alt: string; onClick?: () => void; isActive?: boolean }> = ({ imgSrc, alt, onClick, isActive }) => (
    <button onClick={onClick} className={`flex items-center justify-center p-4 h-16 rounded-lg border-2 transition-colors ${isActive ? 'bg-blue-900/50 border-blue-500' : 'bg-[#2a2a2a] border-gray-700 hover:border-gray-500'}`}>
        <img src={imgSrc} alt={alt} className="h-full" />
    </button>
);


// --- (Part 2 of 5): Skeleton Loader Components ---

const CheckoutSkeleton = () => (
    <div className="bg-[#0a0a0a] min-h-screen text-white animate-pulse">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="h-8 bg-gray-700/50 rounded w-1/3 mb-8"></div>
            {/* Mobile Skeleton */}
            <div className="lg:hidden space-y-6">
                <div className="h-16 bg-[#161616] border border-gray-800 rounded-lg"></div>
                <div className="h-48 bg-[#161616] border border-gray-800 rounded-lg"></div>
                <div className="h-64 bg-[#161616] border border-gray-800 rounded-lg"></div>
            </div>
            {/* Desktop Skeleton */}
            <div className="hidden lg:grid grid-cols-10 gap-8">
                <div className="col-span-6 space-y-6">
                    <div className="h-40 bg-[#161616] border border-gray-800 rounded-lg"></div>
                    <div className="h-72 bg-[#161616] border border-gray-800 rounded-lg"></div>
                </div>
                <div className="col-span-4 h-[500px] bg-[#161616] border border-gray-800 rounded-lg"></div>
            </div>
        </div>
    </div>
);


// --- (Part 3 of 5): Main UI Components ---

const OrderSummary = ({ items, subtotal, serviceFee, total }: { items: OrderItem[], subtotal: number, serviceFee: number, total: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        // Wrapper for Desktop sticky positioning
        <div className="w-full lg:col-span-4 lg:sticky top-24 h-fit">
            <div className="bg-[#161616] border border-gray-800 rounded-lg">
                <button onClick={() => setIsExpanded(!isExpanded)} className="lg:hidden w-full flex justify-between items-center p-4">
                    <div className="flex items-center gap-3"><LucideShoppingCart/><h2 className="text-lg font-semibold">Order Summary</h2></div>
                    <div className="flex items-center gap-2"><p className="font-bold">${total.toFixed(2)}</p><LucideChevronDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} /></div>
                </button>
                 <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'} lg:max-h-none`}>
                     <div className="p-4 border-t border-gray-800 lg:border-t-0">
                        <h2 className="text-lg font-semibold mb-4 hidden lg:block">Order Summary</h2>
                        {items.map(item => <div key={item.id} className="flex items-center justify-between mb-3 text-sm"><div className="flex items-center gap-3"><img src={item.image} className="w-12 h-14 object-cover rounded-md"/><p>{item.title.substring(0,25)}... x{item.quantity}</p></div><p>${(item.price*item.quantity).toFixed(2)}</p></div>)}
                         <div className="border-t border-gray-800 pt-4 mt-4 space-y-2 text-sm">
                             <div className="flex justify-between text-gray-400"><p>Subtotal</p><p>${subtotal.toFixed(2)}</p></div>
                             <div className="flex justify-between text-gray-400"><p>Service Fee</p><p>${serviceFee.toFixed(2)}</p></div>
                             <div className="flex justify-between text-white font-bold text-lg"><p>Total</p><p>${total.toFixed(2)}</p></div>
                        </div>
                         <div className="mt-4 flex gap-2"><input placeholder="Coupon Code" className="flex-grow bg-[#2a2a2a] border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500" /><button className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500 text-sm">Apply</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


// --- (Part 4 of 5): Main Checkout Component ---

export default function CheckoutPage() {
  const [items, setItems] = useState<OrderItem[]>(orderItemsData);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    // Simulate loading page data
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handlePlaceOrder = () => {
      setIsProcessing(true);
      // Simulate API call for placing order
      setTimeout(() => {
          setIsProcessing(false);
          // Here you would redirect to a success page
          alert('Order Placed Successfully!');
      }, 2500);
  };

  const subtotal: number = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const serviceFee: number = 25.50;
  const total: number = subtotal + serviceFee;
  
  if (isLoading) {
      return <CheckoutSkeleton />;
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Processing Overlay */}
      {isProcessing && <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-[99]"><LucideLoader2 className="animate-spin" size={40} /><p className="mt-4 text-lg">Processing your order...</p></div>}

      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          
          {/* Main content: Stacks first on mobile */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
             <div className="bg-[#161616] border border-gray-800 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                 <CheckoutInput label="Email Address" placeholder="you@example.com" />
            </div>

            <div className="bg-[#161616] border border-gray-800 p-6 rounded-lg">
                 <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                 <p className="text-sm text-gray-400 mb-4">All transactions are secure and encrypted.</p>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                     {/* Payment options can be made dynamic */}
                     <PaymentOption imgSrc="/payments/visa.svg" alt="Visa" isActive />
                     <PaymentOption imgSrc="/payments/mastercard.svg" alt="Mastercard" />
                     <PaymentOption imgSrc="/payments/paypal.svg" alt="PayPal" />
                     <PaymentOption imgSrc="/payments/crypto.svg" alt="Crypto" />
                 </div>
                 <div className="mt-6 space-y-4">
                     <CheckoutInput label="Card Number" placeholder="0000 0000 0000 0000" />
                    <div className="grid grid-cols-2 gap-4">
                         <CheckoutInput label="Expiration Date" placeholder="MM / YY" />
                         <CheckoutInput label="CVC" placeholder="123" icon={<LucideLock />} />
                    </div>
                 </div>
            </div>

             <div className="flex justify-end mt-4">
                 <button onClick={handlePlaceOrder} className="w-full sm:w-auto px-10 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center justify-center gap-2 text-base transition-colors">
                    Place Order
                </button>
            </div>
          </div>

          {/* Order summary: Stacks second on mobile */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <OrderSummary items={items} subtotal={subtotal} serviceFee={serviceFee} total={total} />
          </div>
          
        </div>
      </div>
    </div>
  );
};