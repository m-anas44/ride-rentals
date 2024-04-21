import React from "react";
import { clients } from "../mockData/clientsData";

const ClientFeedback = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold section-heading text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-md text-balance">
            Car Rentals Pakistan is a car rental company that serves across all
            the major Pakistani cities. We offer high quality rental services at
            the most economical rates. Through our online portal, you can easily
            book vehicles in the different cities of Pakistan such as Lahore,
            Karachi, Islamabad, Sialkot and Faisalabad etc. You can also ask for
            a quote through our portal or simply call our customer service to
            get a detailed answer to your queries.
          </p>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl md:text-4xl font-semibold section-heading text-gray-900 mb-4 uppercase text-center">
            What our clients says
          </h2>
          <div className="h-1 rounded bg-gray-400 w-14 mx-auto"></div>
          <div className="flex flex-wrap">
            {Object.keys(clients).map((item, index) => {
              return (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 text-center border-gray-200 border-opacity-60 bg-gray-800 bg-opacity-95 rounded-lg overflow-hidden">
                    <img
                      className="lg:w-48 lg:h-48 mt-4 mx-auto w-36 h-36 object-cover object-center rounded-full border-4 border-gray-900 border-opacity-75"
                      src={clients[item].image}
                      alt="client image"
                    />
                    <div className="p-6">
                      <h2 className="title-font text-lg font-medium text-gray-100 mb-3">
                        {clients[item].name}
                      </h2>
                      <p className="leading-relaxed mb-3 text-gray-300">
                        {clients[item].message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
