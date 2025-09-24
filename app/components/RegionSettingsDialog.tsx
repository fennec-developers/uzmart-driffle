import React, { useState } from 'react';

interface RegionSettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: { country: string; currency: string; language: string }) => void;
}

const RegionSettingsDialog: React.FC<RegionSettingsDialogProps> = ({ isOpen, onClose, onSave }) => {
  const [country, setCountry] = useState('Algeria');
  const [currency, setCurrency] = useState('Algerian Dinar (DZD)');
  const [language, setLanguage] = useState('English');

  const handleSave = () => {
    onSave({ country, currency, language });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#212121] rounded-lg p-6 w-[95%] sm:w-auto sm:max-w-[380px] shadow-lg relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-2 text-white">Update Your Settings</h2>
        <p className="text-gray-400 mb-6 text-sm">Set your preferred region, currency and language</p>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Country</label>
          <select 
            className="w-full p-2 border border-gray-600 rounded-md bg-[#333333] text-white"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Algeria">Algeria</option>
            <option value="France">France</option>
            <option value="Canada">Canada</option>
            <option value="Morocco">Morocco</option>
            <option value="Tunisia">Tunisia</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Currency</label>
          <select 
            className="w-full p-2 border border-gray-600 rounded-md bg-[#333333] text-white"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="Algerian Dinar (DZD)">Algerian Dinar (DZD)</option>
            <option value="Euro (EUR)">Euro (EUR)</option>
            <option value="US Dollar (USD)">US Dollar (USD)</option>
            <option value="Moroccan Dirham (MAD)">Moroccan Dirham (MAD)</option>
            <option value="Tunisian Dinar (TND)">Tunisian Dinar (TND)</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">Language</label>
          <select 
            className="w-full p-2 border border-gray-600 rounded-md bg-[#333333] text-white"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
        
        <div className="flex justify-end gap-2">
          <button 
            className="px-4 py-2 text-white border border-gray-600 rounded-md hover:bg-[#383838]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-[#4885FF] text-white rounded-md hover:bg-[#6C9DFF]"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionSettingsDialog;
