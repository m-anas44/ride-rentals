import React from "react";
import logo from "../assets/rideLogo1.png";
const Footer = () => {
  return (
    <footer className="body-font bg-gray-900">
      <div className="px-4 sm:px-6 py-16 md:py-24 lg:container mx-auto flex md:items-center lg:items-start md:flex-col lg:flex-row md:flex-nowrap flex-wrap flex-col">
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
          <h2 className="text-2xl font-medium text-gray-100 mt-4">
            Call us at
          </h2>
          <p className="text-gray-500 text-3xl">03XX-XXXXXXX</p>
          <p className="text-gray-500 text-3xl">03XX-XXXXXXX</p>
        </div>
        <div className="flex-1 p-4 bg-white flex flex-col lg:ml-5 w-full mt-8 md:mt-0 rounded-md bg-opacity-25 text-gray-900">
          <h2 className=" text-xl mb-1 font-bold title-font">
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
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-4 sm:px-6 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* Social media icons */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
