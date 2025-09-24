import { useState } from 'react';
import newletterIcon1 from '../../public/newsletter/newsletter-delight-psn.svg'
import newletterIcon2 from '../../public/newsletter/nd-netflix.svg'
import newletterIcon3 from '../../public/newsletter/nd-tinder.svg'
import newletterIcon4 from '../../public/newsletter/nd-hnm.svg'
import newletterIcon5 from '../../public/newsletter/nd-airbnb.svg'
import newletterIcon6 from '../../public/newsletter/nd-gta.svg'
import newletterIcon7 from '../../public/newsletter/nd-steam.svg'
import newletterIcon8 from '../../public/newsletter/nd-adidas.svg'
import newletterIcon9 from '../../public/newsletter/nd-spotify.svg'
import newletterIcon10 from '../../public/newsletter/nd-mario.svg'
import newletterIcon11 from '../../public/newsletter/nd-f1.svg'
import newletterIcon12 from '../../public/newsletter/nd-kfc.svg'
import newletterIcon13 from '../../public/newsletter/nd-xbox.svg'
import newletterIcon14 from '../../public/newsletter/nd-mcd.svg'

const SubscribeNewsletter = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='bg-[#000000]'>
            <div className="max-w-7xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
                {/* Stacks vertically on mobile */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

                    <div className="w-full lg:w-1/2 lg:flex-[1.2]">
                        <h2 className='text-white text-3xl sm:text-4xl font-bold mb-6 leading-tight'>
                            Subscribe to get the best deals!
                        </h2>
                        <form action="" className="flex flex-col sm:flex-row gap-3 mb-6">
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='bg-white w-full sm:flex-1 py-3 px-4 rounded-md placeholder:font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#4885FF]'
                            />
                            <button
                                type='submit'
                                className='bg-[#4885FF] hover:bg-[#6C9DFF] cursor-pointer transition text-white font-semibold px-6 py-3 rounded-md'
                            >
                                Subscribe
                            </button>
                        </form>
                        {/* Other text elements... */}
                    </div>

                    {/* Hides on mobile, appears on larger screens */}
                    <div className="hidden lg:flex w-full lg:w-1/2 lg:flex-1 items-center justify-center">
                        {/* Icon grid code can remain the same, it's contained */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNewsletter;
