import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rideLogo1.png";
import userImage from "../assets/userImage.jpg";
import { Navlinks } from "../mockData/NavLinks";

const NavBar = () => {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false); // State for navbar toggle

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prev) => !prev);
  };

  const closeUserDropdown = () => {
    setUserDropdownOpen(false);
  };

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="border-gray-200 bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl md:container flex flex-wrap items-center justify-end gap-5 mx-auto py-4 px-4 md:px-0">
        <a
          href={"/"}
          className="flex items-center mr-auto space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-11" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            RideRentals
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            <button
              type="button"
              onClick={toggleUserDropdown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded={isUserDropdownOpen}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full"
                src={userImage}
                alt="user avatar"
              />
            </button>
            {isUserDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 z-50"
                onMouseLeave={closeUserDropdown}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Muhammad Anas
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    manasansari1438@gmail.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link
                      to="/addService"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add a Service
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={toggleNavbar} // Add toggle functionality
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isNavbarOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`} // Conditional visibility
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 text-white md:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
