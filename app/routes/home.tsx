import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/Hero";
import Recommended from "~/components/Recommended";
import Explore from "~/components/Explore";
import GetExtra from "~/components/GetExtra";
import DiscoverPrice from "~/components/DiscoverPrice";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const platforms = ['../../public/recommended/7.webp', '../../public/recommended/8.webp', '../../public/recommended/3.webp', '../../public/recommended/4.webp', '../../public/recommended/5.webp', '../../public/recommended/6.webp', '../../public/recommended/7.webp', '../../public/recommended/8.webp', '../../public/recommended/3.webp', '../../public/recommended/4.webp', '../../public/recommended/5.webp', '../../public/recommended/6.webp'];

  const categories = [
    {
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },
    {
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },
    {
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },{
      name: 'MMO',
      image: '../../public/slider/1.webp'
    },
  ]
  return (
    <div>
      <Hero />
      <Recommended title={'Recommended For You'} showBtn={false} fromPrice={false} discount={false} />
      <Explore data={platforms} path="/discover" section="platforms"/>
      <Recommended title={'Best Selling Games'} showBtn={true} fromPrice={true} discount={true} />
      <GetExtra />
      <Recommended title={'Best Selling Cards'} showBtn={true} fromPrice={true} discount={true} />
      {/* <Explore data={platforms} path="/discover" section="platforms"/> */}
      <Explore data={categories} path="/discover" section="categories"/>
      {/* <DiscoverPrice /> */}

    </div>
  )
}
