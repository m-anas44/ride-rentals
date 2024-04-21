import React from "react";

const CompanyInfo = () => {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl section-heading font-bold mb-3">
          Company Info
        </h2>
        <div className="h-1 rounded bg-gray-400 mx-auto w-14"></div>
      </div>
      <div className="flex container mx-auto flex-wrap">
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="title-font text-lg font-medium mb-3">
                Email Us At:
              </h2>
              <p className="leading-relaxed mb-3">
                Our car rental portal can be used for acquiring a quote for a
                selected vehicle, after which you can proceed to make
                reservations online. You can also email us for any further
                query.
                <p className="font-bold">
                  bookings@carrentpk.com
                  <br />
                  info@carrentpk.com
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="title-font text-lg font-medium mb-3">
                Contact Us At:
              </h2>
              <p className="leading-relaxed mb-3">
                Car Rentals Pakistan offers a wide range of rental vehicles for
                your travel needs in all major cities across Pakistan. We are
                happy to help you 24 hours 7 days a week.
                <p className="font-bold cursor-pointer">03XX-XXXXXXX</p>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="title-font text-lg font-medium mb-3">
                Visit Us At:
              </h2>
              <address className="font-semibold mb-3">
                Office # 23-24, Basment Sultana Arcade, Karim Block Market,
                Allama Iqbal Town, Lahore. Pakistan <br />
                <br /> info@carrentpk.com <br /> +923355467220
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
