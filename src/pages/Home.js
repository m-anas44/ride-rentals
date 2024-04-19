import React from "react";
import HeroSection from "../components/HeroSection";
import ProductFeatures from "../components/ProductFeatures";
import Questionaries from "../components/Questionaries";
import CategoryDisplay from "../components/CategoryDisplay";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductFeatures />
      <CategoryDisplay />
      <Questionaries />
    </div>
  );
};

export default Home;
