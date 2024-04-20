import React from "react";
import vehicleImage from "../assets/corolla.jpg";
import seat from "../assets/car-card/seat.png";
import gear from "../assets/car-card/gaer.png";
import fullday from "../assets/car-card/fullday.png";
import time from "../assets/car-card/time.png";
import { IoIosColorFilter } from "react-icons/io";

const VehicleCard = () => {
  return (
    <section className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="p-8 rounded-t-lg"
        src={vehicleImage}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Corolla
          </h5>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-400 via-blue-500 to-gray-950 text-white cursor-default">
            <span class="relative px-5 py-2 rounded-md">
              Luxury
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 my-5">
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={seat} alt="seat" className="w-5 h-5"></img>
            <span>4 seats</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={gear} alt="gear" className="w-5 h-5"></img>
            <span>Automatic</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <IoIosColorFilter className="text-[1.25rem]" />
            <span>White</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={time} alt="time" className="w-5 h-5"></img>
            <span>Overtime: PKR 250/hr </span>
          </div>
        </div>
        <p className="text-sm text-gray-500">Refill fuel at the end of the day or pay PKR 32/KM</p>
        <hr className="my-2 "/>
        <p className="text-gray-500">Excluding fuel & overtime <br/> charges</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 ">3500.00<sub className="text-sm text-gray-400 font-normal ml-1">PKR/day</sub></span>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-gray-600 to-gray-900 text-white ">
            <span class="relative px-5 py-2 rounded-md">
              Book Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleCard;
