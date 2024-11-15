import React from "react";
import seat from "../assets/car-card/seat.png";
import gear from "../assets/car-card/gaer.png";
import time from "../assets/car-card/time.png";
import { IoIosColorFilter } from "react-icons/io";

const VehicleCard = (props) => {
  return (
    <section className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow hover:scale-105 duration-300 transition-all ease-in-out">
      <img
        className="rounded-t-lg max-h-[20ch] object-cover w-full"
        src={props.img}
        alt="product"
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
            {props.name}
          </h5>
          <button className="relative inline-flex items-center justify-center me-2 overflow-hidden text-[0.5rem] md:text-xs font-medium rounded-lg group bg-gradient-to-br from-indigo-400 via-blue-500 to-gray-950 text-white cursor-default">
            <span className="relative px-5 py-2 rounded-md">{props.type}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 my-5 text-sm">
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={seat} alt="seat" className="w-5 h-5"></img>
            <span>{props.seat}</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={gear} alt="gear" className="w-5 h-5"></img>
            <span>{props.functionality}</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <IoIosColorFilter className="text-[1.25rem]" />
            <span>{props.color}</span>
          </div>
          <div className="text-gray-500 flex gap-x-2 flex-nowrap items-center">
            <img src={time} alt="time" className="w-5 h-5"></img>
            <span>Overtime: PKR {props.overtime}/hr </span>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          Refill fuel at the end of the day or pay PKR 32/KM
        </p>
        <hr className="my-2 " />
        <p className="text-gray-500 text-sm">
          Excluding fuel & overtime <br /> charges
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 ">
            {props.price}
            <sub className="text-xs md:text-sm text-gray-400 font-normal ml-1">
              PKR/day
            </sub>
          </span>
          <button className="relative inline-flex items-center justify-center me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-gray-600 to-gray-900 text-white ">
            <span className="relative px-5 py-2 rounded-md">Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleCard;
