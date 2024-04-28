import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import ContactAccordion from "../components/ContactAccordion";

const Contact = () => {
  return (
    <section className="container mx-auto px-2 py-4">
      <div className="py-5">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p>Get in touch if your question has not been answered</p>
      </div>
      <div className=" flex mx-auto border-2 border-red-300 gap-3 bg-red-100 rounded-lg my-4 p-3">
        <HiOutlineInformationCircle className="w-10 h-10"/>
        <div>
          <p className="font-bold">Did you know?</p>
          <p>
            Our customer service team are happy to help, but in many cases it’s
            quicker and easier to manage your booking online.
          </p>
        </div>
      </div>
      <ContactAccordion/>
    </section>
  );
};

export default Contact;
