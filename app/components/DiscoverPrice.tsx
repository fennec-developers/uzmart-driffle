

interface DiscoverPriceProps {
  price: string;
}

export default function DiscoverPrice() {
  const priceList = ["DZD200", "DZD500", "DZD1K", "DZD2K", "DZD5K", "DZD10K"];

  return (
    <>
      <div className='bg-[#161616] px-56'>
        <h2 className='text-white font-bold text-[28px] capitalize pt-5'>Recommended for you</h2>
        <div className="flex gap-2 flex-wrap">

          {
            priceList.map((price, index) => (
              <div className='cursor-pointer bg-[#505050] px-4 rounded-xl flex flex-col items-center justify-center p-4 w-52 h-26 border-solid border-[#909090] border-2'>
                <p className='text-gray-500'>Under</p>
                <p className='text-white font-bold text-[28px] capitalize'>{price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>

  );
}

