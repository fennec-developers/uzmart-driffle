import React, { useEffect, useRef } from 'react';
import SearchItem from './SearchItem';
import { motion, AnimatePresence } from 'framer-motion';

type SearchItemType = {
    title: string;
    country: string;
    price: string;
    image: string;
};

const SearchList = ({
    isOpen,
    results,
    inputRef,
    onClose,
    loading
}: {
    isOpen: boolean;
    results: SearchItemType[];
    inputRef: React.RefObject<HTMLInputElement>;
    onClose: () => void;
    loading: boolean;
}) => {
    const listRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                listRef.current &&
                !listRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
            ) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [inputRef, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 mt-2 w-full max-h-64 overflow-auto bg-white border rounded shadow"
                    ref={listRef}
                >
                    {loading ? (
                        <div className="p-4 text-center text-sm text-gray-500">
                            <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-gray-500 rounded-full mr-2"></span>
                            Loading...
                        </div>
                    ) : results.length === 0 ? (
                        <div className="p-4 text-gray-500 text-sm">No results found.</div>
                    ) : (
                        results.map((item, index) => <SearchItem key={index} item={item} />)
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchList;
