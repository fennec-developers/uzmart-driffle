import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import PaymentForm from './PaymentForm';

interface PaymentMethodProps {
  showVisaForm: boolean;
  showAmexForm: boolean;
  toggleVisaForm: () => void;
  toggleAmexForm: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  showVisaForm,
  showAmexForm,
  toggleVisaForm,
  toggleAmexForm,
}) => {
  return (
    <div className="mt-6">
      <div className="flex items-start gap-2">
        <span className="bg-[#001E6C] text-[#5E9EFF] px-4 py-1 rounded-full text-sm font-semibold">Step 2</span>
        <p className="text-white mb-4 text-[18px]">Choose a payment method</p>
      </div>

      {/* Driffle Wallet */}
      <div className="bg-[#141414] rounded-md mb-4 border border-[#3a3a3a]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              className="mr-2 appearance-none w-4 h-4 border border-[#3a3a3a] rounded-full checked:bg-[#3a3a3a] checked:border-transparent"
            />
            <div className="flex items-center gap-2">
                <span>ClickShift </span>
                <span className="text-gray-400 text-[12px] ">Balance: €0.00</span>
            </div>
          

          </div>
            <span>ClickShift Wallet</span>

        </div>
        <div className="h-[1px] bg-[#3a3a3a] w-full" />
        <span className="text-gray-500 text-sm mb-4 flex items-center gap-2 px-4 py-2">
          <AiOutlineExclamationCircle />
          Insufficient Balance: Cart amount is greater than your wallet balance
        </span>
      </div>

      {/* Credit/Debit Card */}
      <div className="bg-[#141414] rounded-md mb-4 border border-[#3a3a3a]">
        <div className="flex items-center justify-between px-4 py-2">
          
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              className={`mr-2 appearance-none w-4 h-4 border rounded-full relative before:content-[''] before:absolute before:block before:w-2 before:h-2 before:rounded-full before:bg-blue-500 before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 ${
                showAmexForm ? 'border-blue-500 border-2 before:opacity-100' : 'border-[#3a3a3a] before:opacity-0'
              }`}
              onClick={toggleAmexForm}
              checked={showAmexForm}
            />
            <img
              src="/checkout/1.webp"
              alt="Visa"
              className="mr-2 w-22 h-10 rounded-md"
            />
            <span className="ml-2 text-gray-400">and more</span>
          </div>
            <span className=" text-gray-400 text-[13px]">Credit or Debit Card</span>

        </div>
        {showAmexForm && (
          <PaymentForm
            formId="cardPaymentForm"
            cardNumberId="cardNumber"
            cardNameId="cardName"
            expiryDateId="expiryDate"
            cvvId="cvv"
            cvvLabel="CVC/CVV"
            cvvPlaceholder="123"
            buttonText="Pay With Card"
          />
        )}
      </div>

      {/* American Express */}
      <div className="flex flex-col bg-[#141414] rounded-md border border-[#3a3a3a]">
        <div className="flex items-center justify-between p-4">
        <div className="flex items-center ">
          <input
            type="radio"
            name="payment"
            className={`mr-2 appearance-none w-4 h-4 border rounded-full relative before:content-[''] before:absolute before:block before:w-2 before:h-2 before:rounded-full before:bg-blue-500 before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 ${
              showVisaForm ? 'border-blue-500 border-2 before:opacity-100' : 'border-[#3a3a3a] before:opacity-0'
            }`}
            onClick={toggleVisaForm}
            checked={showVisaForm}
          />
          <img
            src="/checkout/2.webp"
            alt="Amex"
            className="mr-2 w-22 h-10 rounded-md bg-white"
          />
        </div>

          <span className=" text-gray-400 text-[13px] ">AMEX</span>
        </div>
        {showVisaForm && (
          <PaymentForm
            formId="amexPaymentForm"
            cardNumberId="amexCardNumber"
            cardNameId="amexCardName"
            expiryDateId="amexExpiryDate"
            cvvId="amexCvv"
            cvvLabel="CID"
            cvvPlaceholder="1234"
            buttonText="Pay With Card"
          />
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;