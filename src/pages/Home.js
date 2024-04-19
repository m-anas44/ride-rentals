import React from "react";
import HeroSection from "../components/HeroSection";
import ProductFeatures from "../components/ProductFeatures";
import Questionaries from "../components/Questionaries";
import CategoryDisplay from "../components/CategoryDisplay";
import WhyRideRental from "../components/WhyRideRental";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductFeatures />
      <CategoryDisplay />
      <WhyRideRental/>
      <Questionaries />
    </div>
  );
};

export default Home;
