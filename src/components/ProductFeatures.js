import React from "react";
import feature1 from "../assets/usp_calendar@1x.png";
import feature2 from "../assets/usp_magnifier@1x.png";
import feature3 from "../assets/usp_wallet@1x.png";
const ProductFeatures = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container py-14 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3 w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col h-full">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src={feature1}
              width={64}
              height={64}
              className="object-contain"
            ></img>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Flexible Rental
            </h2>
            <p className="leading-relaxed text-base">
              Cancel or change most bookings for free up to 48 hours before
              pick-up
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col h-full">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src={feature2}
              width={64}
              height={64}
              className="object-contain"
            ></img>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              No Hidden Fees
            </h2>
            <p className="leading-relaxed text-base">
              Know exactly what you’re paying
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3 w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col h-full">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src={feature3}
              width={64}
              height={64}
              className="object-contain"
            ></img>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Price Match Guarantee
            </h2>
            <p className="leading-relaxed text-base">
              Found the same deal for less? We’ll match the price.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProductFeatures;
