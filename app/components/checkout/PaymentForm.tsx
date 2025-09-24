import React, { useState, useEffect } from 'react';

interface PaymentFormProps {
  formId: string;
  cardNumberId: string;
  cardNameId: string;
  expiryDateId: string;
  cvvId: string;
  cvvLabel: string;
  cvvPlaceholder: string;
  buttonText: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  formId,
  cardNumberId,
  cardNameId,
  expiryDateId,
  cvvId,
  cvvLabel,
  cvvPlaceholder,
  buttonText,
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Simple form validation: all fields must be filled
    setIsFormValid(
      cardNumber.trim() !== '' &&
      cardName.trim() !== '' &&
      expiryDate.trim() !== '' &&
      cvv.trim() !== ''
    );
  }, [cardNumber, cardName, expiryDate, cvv]);

  return (
    <div>
      <div className="h-[1px] bg-[#3a3a3a] w-full mt-4" />
      <div id={formId} className="bg-[#141414] p-4 rounded-md mb-4 mt-4">
        <div className="mb-4">
          <label htmlFor={cardNumberId} className="block text-sm font-medium text-gray-300 mb-1">
            Card Number
          </label>
          <input
            type="text"
            id={cardNumberId}
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full bg-[#1e1e1e] rounded-md py-4 px-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor={cardNameId} className="block text-sm font-medium text-gray-300 mb-1">
            Card Holder Name
          </label>
          <input
            type="text"
            id={cardNameId}
            placeholder="eg: John Doe"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full bg-[#1e1e1e] rounded-md py-4 px-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label htmlFor={expiryDateId} className="block text-sm font-medium text-gray-300 mb-1">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              id={expiryDateId}
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full bg-[#1e1e1e] rounded-md py-4 px-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor={cvvId} className="block text-sm font-medium text-gray-300 mb-1">
              {cvvLabel}
            </label>
            <input
              type="text"
              id={cvvId}
              placeholder={cvvPlaceholder}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full bg-[#1e1e1e] rounded-md py-4 px-3 text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
        </div>
        <p className="text-[12px] mb-2">The charge will appear on your bill as ClickShift.COM</p>
        <button
  type="button"
  disabled={!isFormValid}
  className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 ${
    !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
  }`}
>
  {buttonText}
</button>

      </div>
    </div>
  );
};

export default PaymentForm;
