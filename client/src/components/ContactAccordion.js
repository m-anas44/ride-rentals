import React, { useState } from "react";
import ContactPageForm from "./ContactPageForm";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsInboxesFill } from "react-icons/bs";

const ContactAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <section className="my-8">
      <div id="accordion-open" className="border-b">
        {/* Section 1 */}
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-gray-600 border border-b-0 border-gray-200 rounded-t-xl gap-3"
            onClick={() => toggleSection(1)}
            aria-expanded={openSection === 1}
            aria-controls="accordion-open-body-1"
          >
            <div className="flex gap-x-2">
              <MdOutlineMarkEmailUnread className="w-7 h-7" />
              <div className="flex flex-col gap-y-2">
                <h2 className="text-left">Email</h2>
                <p className="font-normal">
                  If it's not urgent, drop us an email.
                </p>
              </div>
            </div>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 1 ? "rotate-180" : ""
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`${openSection === 1 ? "block" : "hidden"}`}
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200">
            <ContactPageForm />
          </div>
        </div>

        {/* Section 2 */}
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-gray-600 border border-b-0 border-gray-200 gap-3"
            onClick={() => toggleSection(2)}
            aria-expanded={openSection === 2}
            aria-controls="accordion-open-body-2"
          >
            <div className="flex gap-x-2">
              <BsInboxesFill className="w-6 h-6" />
              <div>
                <h2 className="text-left">Corporate</h2>
                <p className="font-normal mt-2">
                  Contact details for business-related inquiries.
                </p>
              </div>
            </div>
            <svg
              className={`w-3 h-3 transform ${
                openSection === 2 ? "rotate-180" : ""
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className={`${openSection === 2 ? "block" : "hidden"}`}
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 border border-gray-200">
            <div>
              <h2 className="font-bold">Affiliates</h2>
              <p>
                Connect your business to our bespoke, end-to-end car hire
                solution.
              </p>
              <p className="text-blue-400">Find Out More</p>
            </div>
            <div>
              <h2 className="font-bold">Supply Partners</h2>
              <p>Apply to join our global network of supply partners.</p>
              <p className="text-blue-400">Find Out More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAccordion;
