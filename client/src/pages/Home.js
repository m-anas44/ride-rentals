import React from "react";
import HeroSection from "../components/HeroSection";
import ProductFeatures from "../components/ProductFeatures";
import Questionaries from "../components/Questionaries";
import CategoryDisplay from "../components/CategoryDisplay";
import WhyRideRental from "../components/WhyRideRental";
import VehicleList from "../components/VehicleList";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BannerLogin from "../components/BannerLogin";
const Home = () => {
  return (
    <div>
      <BannerLogin />
      <HeroSection />
      <CategoryDisplay />
      <WhyRideRental />
      <ProductFeatures />
      <div>
        <div className="flex justify-between items-center container mx-auto px-4 md:px-10">
          <h2 className="text-3xl font-semibold text-gray-800 section-heading">
            Services
          </h2>
          <Link to={"/services"}>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm flex flex-nowrap gap-x-2 items-center font-medium text-gray-100 focus:outline-none rounded-md border bg-gray-900 hover:bg-gray-700"
            >
              <span>See All</span>
              <FaArrowRightLong className="hover:translate-x-1 duration-300" />
            </button>
          </Link>
        </div>
        <div className="mx-4">
          <VehicleList />
        </div>
      </div>
      <div className="px-4">
        <Questionaries />
      </div>
    </div>
  );
};

export default Home;
