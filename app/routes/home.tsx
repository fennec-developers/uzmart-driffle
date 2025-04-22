import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/Hero";
import Recommended from "~/components/Recommended";
import ExploreByPlatforms from "~/components/ExploreByPlatforms";
import BestSellingGames from "~/components/BestSellingGames";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Recommended />
      <ExploreByPlatforms />
      <BestSellingGames />
    </div>
  )
}
