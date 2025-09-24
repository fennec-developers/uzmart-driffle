

interface DiscoverPriceProps {
  price: string;
}

export default function DiscoverPrice() {
  const priceList = ["DZD200", "DZD500", "DZD1K", "DZD2K", "DZD5K", "DZD10K"];

  return (
    <div className="bg-[#161616]">
      <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-white font-bold text-2xl sm:text-3xl capitalize pt-5 mb-6'>Discover By Price</h2>
        {/* Grid layout for responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {priceList.map((price) => (
            <div key={price} className='cursor-pointer bg-[#353535] rounded-2xl flex flex-col items-center justify-center py-6 text-center border-2 border-transparent hover:border-[#4885FF]/50 transition'>
              <p className='text-gray-400 text-lg sm:text-xl'>Under</p>
              <p className='text-white font-bold text-3xl sm:text-4xl capitalize'>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

