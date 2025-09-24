import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const EmailSection: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-2">
        <span className="bg-[#001E6C] text-[#5E9EFF] px-4 py-1 rounded-full text-sm font-semibold">Step 1</span>
        <button className="text-white mb-4 text-[18px]">Add an email address</button>
      </div>
      <div className="flex items-center bg-[#141414] px-3 py-6 rounded-md border border-[1px] border-[#3a3a3a]">
        <FaEnvelope className="mr-2 text-blue-500" />
        <span>hanaemael1995@gmail.com</span>
      </div>
      <p className="text-gray-400 text-sm mt-2">
        Your order will be delivered to this email address.
      </p>
    </div>
  );
};

export default EmailSection;