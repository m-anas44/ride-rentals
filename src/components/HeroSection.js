import React from "react";
import "../style.css";
import { IoCheckmark } from "react-icons/io5";
import { TbArrowBigRightLine } from "react-icons/tb";
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font hero-section px-3 py-20">
      <div className="container mx-auto flex items-center flex-col">
        <div className="w-full">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
            Car Rental - <br className="hidden lg:block" /> Search & Book Online
            Cars Now!
          </h1>
          <div className="mb-8 py-2 font-semibold leading-relaxed text-xl text-black flex flex-wrap gap-2 text-left">
            <div className="flex items-center gap-1">
              <IoCheckmark className="text-2xl" />
              <span className="whitespace-nowrap">
                Free cancellations on most bookings
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IoCheckmark className="text-2xl" />
              <span className="whitespace-nowrap">Reasonable Pakages</span>
            </div>
            <div className="flex items-center gap-1">
              <IoCheckmark className="text-2xl" />
              <span className="whitespace-nowrap">
                Customer Services 24/7 Hours
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-start">
            <button
              className="inline-flex items-center gap-x-2 text-white border-gray-900 transition duration-300 border-2 
            py-2 px-6 focus:outline-none bg-gray-900 hover:bg-gray-800 rounded-full font-semibold text-lg whitespace-nowrap"
            >
              <span>Explore Services</span>
              <TbArrowBigRightLine />
            </button>
            <button
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none
             hover:bg-gray-200 rounded-full text-lg font-semibold whitespace-nowrap"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
