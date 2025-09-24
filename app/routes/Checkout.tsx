import React, { useState } from 'react';
import EmailSection from '../components/checkout/EmailSection';
import PaymentMethod from '../components/checkout/PaymentMethod';
import OrderSummary from '../components/checkout/OrderSummary';
import type { OrderItem } from '../data/checkout';
import {  orderItemsData } from '../data/checkout';


const Checkout: React.FC = () => {
  const [showVisaForm, setShowVisaForm] = useState<boolean>(false);
  const [showAmexForm, setShowAmexForm] = useState<boolean>(false);
  const [showCouponModal, setShowCouponModal] = useState<boolean>(false);
  const [items, setItems] = useState<OrderItem[]>(orderItemsData);

  const toggleVisaForm = (): void => {
    setShowVisaForm(!showVisaForm);
    setShowAmexForm(false);
  };

  const toggleAmexForm = (): void => {
    setShowAmexForm(!showAmexForm);
    setShowVisaForm(false);
  };

  const toggleCouponModal = (): void => {
    setShowCouponModal(!showCouponModal);
  };

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal: number = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceFee: number = 0;
  const total: number = subtotal + serviceFee;

  return (
    <div className="flex justify-center bg-[#0a0a0a] min-h-screen text-white p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        <div className="flex-1 rounded-lg p-6">
          <EmailSection />
          <div className="h-[1px] bg-[#3a3a3a] w-full my-6" />
          <PaymentMethod
            showVisaForm={showVisaForm}
            showAmexForm={showAmexForm}
            toggleVisaForm={toggleVisaForm}
            toggleAmexForm={toggleAmexForm}
          />
        </div>
        <OrderSummary
          items={items}
          subtotal={subtotal}
          serviceFee={serviceFee}
          total={total}
          showCouponModal={showCouponModal}
          toggleCouponModal={toggleCouponModal}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
};

export default Checkout;