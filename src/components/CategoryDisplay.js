import React from "react";
import { categoryData } from "../mockData/categoryData";
const CategoryDisplay = () => {
  return (
    <section className="text-gray-600 body-font mb-5">
      <div className="container px-5 py-14 mx-auto">
        <div className="text-center mb-3">
          <h2 className="sm:text-3xl text-2xl mb-3 font-semibold text-gray-800 section-heading">
            Categories you are looking for
          </h2>
          <div className="h-1 rounded bg-gray-400 w-14 mx-auto"></div>
        </div>
        <div className="flex flex-wrap">
          {Object.keys(categoryData).map((item, index) => {
            return (
              <div className="lg:w-1/5 md:w-1/2 px-4 w-full" key={index}>
                <img
                  alt="categories"
                  className=" object-center object-contain w-full block"
                  src={categoryData[item].image}
                />
                <div className="mt-4 text-center">
                  <h2 className="text-gray-900 title-font text-xl font-semibold">
                    {categoryData[item].name}
                  </h2>
                  <p className="mt-1">{categoryData[item].example}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryDisplay;
