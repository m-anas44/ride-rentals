import React, { useState } from "react";
import logo from "../assets/rideLogo1.png";
const Footer = () => {
  return (
    <footer className="body-font bg-gray-900">
      <div className="px-4 sm:px-6 pt-10 pb-4 md:pt-12 lg:container mx-auto flex md:items-center lg:items-start md:flex-col lg:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full mb-3 lg:w-1/2">
          <a className="flex title-font font-medium items-center text-gray-100">
            <img src={logo} alt="logo" className="h-11"></img>
            <span className="ml-3 text-xl">RideRentals</span>
          </a>
          <p className="mt-4 md:mt-8 text-sm md:text-base text-gray-500">
            Car Rentals Pakistan offers one of the most professional car rental
            services throughout Pakistan. <br /> Our services extend to all the
            major cities such as Islamabad, Lahore, Karachi, Faisalabad,
            Rawalpindi and Sialkot. You can use our cars to visit holiday
            destinations in addition to commuting from one place to another. We
            offer quality rent car Pakistan service at the most economical
            rates. We guarantee 100% customer satisfaction. This also helps us
            to retain our customers.
          </p>
          <div class="flex sm:flex-row flex-col mt-3 gap-3">
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span class="ml-4 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                <span class="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <form
          className="flex-1 p-4 flex flex-col lg:ml-5 w-full mt-8 md:mt-0 rounded-md bg-blur text-gray-200 border-4 border-opacity-45 border-gray-200"
        >
          <h2 className=" text-2xl mb-1 font-bold title-font text-gray-900">
            Give us a Feedback
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-md font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-md font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
