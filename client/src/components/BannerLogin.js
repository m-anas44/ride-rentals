import React from "react";
import logo from "../assets/rideLogo1.png";
class BannerLogin extends React.Component {
  render() {
    return (
      <section
        id="marketing-banner"
        tabIndex={-1}
        className="fixed z-50 flex flex-col lg:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 bottom-6 dark:bg-gray-700 dark:border-gray-600"
      >
        <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row lg:mb-0">
          <a className="flex title-font font-medium items-center text-gray-100 mr-3 mb-3 md:mb-0 pr-3 md:border-r border-0 border-gray-400">
            <img src={logo} alt="logo" className="h-8"></img>
            <span className="ml-3 text-xl">RideRentals</span>
          </a>
          <p className="flex items-center text-sm font-normal text-nowrap text-gray-500 dark:text-gray-400">
            RideRentals offers one of the most professional car rental services.
          </p>
        </div>
        <div className="flex items-center flex-shrink-0">
          <a
            href="#"
            className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </a>
          <a
            href="#"
            className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Register
          </a>
          <button
            data-dismiss-target="#marketing-banner"
            type="button"
            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </section>
    );
  }
}

export default BannerLogin;
