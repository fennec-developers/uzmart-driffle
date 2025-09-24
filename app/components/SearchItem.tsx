import React from 'react';

const SearchItem = ({ item }: { item: { title: string, country: string, price: string, image: string } }) => (
  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer rounded transition">
    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
    <div className="text-sm">
      <div className="font-medium">{item.title}</div>
      <div className="text-gray-500">{item.country}</div>
      <div className="text-blue-600 font-semibold">{item.price}</div>
    </div>
  </div>
);

export default SearchItem;
