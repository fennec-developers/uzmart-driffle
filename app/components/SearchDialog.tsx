import React, { useRef, useEffect } from 'react';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  searchBarWidth: number;
  searchBarLeft: number;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ 
  isOpen, 
  onClose, 
  searchBarWidth,
  searchBarLeft 
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle click outside to close dialog
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed z-50 top-[74px] overflow-auto"
      style={{ 
        width: `${searchBarWidth}px`, 
        left: `${searchBarLeft}px`,
        maxWidth: '600px' 
      }}
      ref={dialogRef}
    >
      <div className="bg-[#161616] rounded-b-md shadow-lg p-4 text-white">
        <div className="mb-4 font-medium">Popular Searches</div>
        <div className="space-y-3">
          <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Smartphone accessories</span>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Wireless headphones</span>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Smart watches</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 mb-4 font-medium">Recent Searches</div>
        <div className="space-y-3">
          <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Gaming laptops</span>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded transition-colors">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Bluetooth speakers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
