import React, { useState, useEffect } from 'react';
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Recommended from "~/components/Recommended";
import Explore from "~/components/Explore";
import GetExtra from "~/components/GetExtra";
import DiscoverPrice from "~/components/DiscoverPrice";
import SubscribeNewsletter from "~/components/SubscribeNewsletter";

// --- (Part 1 of 3): Skeleton Components ---

/**
 * A collection of skeleton components that mimic the layout of the homepage.
 */
const HomePageSkeleton = () => {
  // Skeleton for the <Recommended /> component
  const RecommendedSkeleton = () => (
    <div className="bg-[#0c0c0c] min-h-[20vh] py-10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 bg-gray-700/50 rounded w-48 sm:w-1/3 mb-6"></div>
        {/* Responsive grid for skeleton cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Show 2 cards on mobile */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-56 sm:h-64 bg-gray-800/80 rounded-lg"></div>
              <div className="h-4 bg-gray-700/50 rounded w-full"></div>
              <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
            </div>
          ))}
          {/* Show 2 more on tablet */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="hidden md:block space-y-3">
              <div className="h-56 sm:h-64 bg-gray-800/80 rounded-lg"></div>
              <div className="h-4 bg-gray-700/50 rounded w-full"></div>
              <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
            </div>
          ))}
          {/* Show 1 more on desktop */}
          <div className="hidden lg:block space-y-3">
            <div className="h-56 sm:h-64 bg-gray-800/80 rounded-lg"></div>
            <div className="h-4 bg-gray-700/50 rounded w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );


  // Skeleton for the <Explore /> component
  const ExploreSkeleton = () => (
    <div className="bg-[#161616] py-10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 bg-gray-700/50 rounded w-40 sm:w-1/4 mb-6"></div>
        <div className="flex gap-4 sm:gap-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 sm:h-28 w-36 sm:w-52 bg-gray-800/80 rounded-xl flex-shrink-0"></div>
          ))}
        </div>
      </div>
    </div>
  );

  // Skeleton for the entire page, assembling the individual pieces
  return (
    <div>
      {/* Hero Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[70%] flex flex-col gap-4">
            <div className="aspect-[16/9] lg:h-auto lg:flex-1 bg-gray-800/80 rounded-xl"></div>
            <div className="hidden lg:flex flex-[0.4] gap-4">
              <div className="w-1/2 bg-gray-800/80 rounded-xl"></div><div className="w-1/2 bg-gray-800/80 rounded-xl"></div>
            </div>
          </div>
          <div className="w-full lg:w-[30%] grid grid-cols-2 lg:flex lg:flex-col gap-4">
            <div className="aspect-square bg-gray-800/80 rounded-xl"></div>
            <div className="aspect-square bg-gray-800/80 rounded-xl"></div>
          </div>
        </div>
      </div>

      <RecommendedSkeleton />
      <ExploreSkeleton />
      <RecommendedSkeleton />

      {/* GetExtra Skeleton */}
      <div className="h-80 bg-[#161616] animate-pulse">
        <div className="h-full w-full bg-gray-800/80"></div>
      </div>

      <RecommendedSkeleton />
      <ExploreSkeleton />

      {/* Discover & Subscribe Skeletons */}
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-80 bg-[#161616] animate-pulse">
        <div className="w-full lg:w-[60%] h-48 lg:h-full bg-gray-800/80"></div>
        <div className="w-full lg:w-[40%] h-48 lg:h-full bg-gray-700/50"></div>
      </div>

      <RecommendedSkeleton />
    </div>
  );
};


// --- (Part 2 of 3): Route Metadata ---

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ClickShift - The Ultimate Digital Marketplace" },
    { name: "description", content: "Your one-stop shop for games, gift cards, and more!" },
  ];
}


// --- (Part 3 of 3): Main Home Component ---

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or initial data load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this timer to match your expected load time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const platforms = ['epicgames.png', 'gogcom.png', 'nintendo.png', 'playstation.png', 'rockstar.png', 'steam.png', 'xbox.png'];

  const categories = [
    { name: 'MMO', image: 'slider/1.webp' }, { name: 'RPG', image: 'slider/2.webp' },
    { name: 'Action', image: 'slider/3.webp' }, { name: 'Shooter', image: 'slider/4.webp' },
    { name: 'Strategy', image: 'slider/5.webp' }, { name: 'Survival', image: 'slider/6.webp' },
    { name: 'Simulation', image: 'slider/1.webp' }, { name: 'Adventure', image: 'slider/2.webp' },
    { name: 'Sports', image: 'slider/3.webp' }, { name: 'Horror', image: 'slider/4.webp' },
    { name: 'Indie', image: 'slider/5.webp' }, { name: 'Casual', image: 'slider/6.webp' },
  ];

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  return (
    <div>
      <Hero />
      <Recommended title={'Recommended For You'} showBtn={false} fromPrice={false} discount={false} productPage={false} />
      <Explore data={platforms} path="/platforms" section="platforms" />
      <Recommended title={'Best Selling Games'} showBtn={true} fromPrice={true} discount={true} productPage={false} />
      <GetExtra />
      <Recommended title={'Best Selling Gift Cards'} showBtn={true} fromPrice={true} discount={true} productPage={false} />
      <Explore data={categories} path="/categories" section="categories" />
      <Recommended title={'Top Game Points'} showBtn={true} fromPrice={true} discount={true} productPage={false} />
      <DiscoverPrice />
      <SubscribeNewsletter />
      <Recommended title={'Trending Subscriptions'} showBtn={true} fromPrice={true} discount={true} productPage={false} />
    </div>
  )
}