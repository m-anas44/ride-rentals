import React, { useState } from "react";
import { questionAnswer } from "../mockData/questionariesData";

const Questionaries = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <section className="container mx-auto border rounded-lg my-4">
      <h2 className="bg-gray-900 text-slate-100 leading-relaxed p-3 text-xl font-bold rounded-t-lg">
        Frequently Asked Questions
      </h2>
      <div id="accordion-flush">
        {Object.keys(questionAnswer).map((key) => (
          <div key={key}>
            {/* Accordion Header */}
            <h2 id={`accordion-flush-heading-${key}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 text-left px-3 font-medium text-lg rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                onClick={() => toggleSection(key)}
                aria-expanded={openSection === key}
                aria-controls={`accordion-flush-body-${key}`}
              >
                <span>{questionAnswer[key].question}</span>
                <svg
                  className={`w-3 h-3 transform ${
                    openSection === key ? "rotate-180" : ""
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

            {/* Accordion Body */}
            <div
              id={`accordion-flush-body-${key}`}
              className={`${openSection === key ? "block" : "hidden"} bg-none px-3`}
              aria-labelledby={`accordion-flush-heading-${key}`}
            >
              <div className="py-5 px-3 border-b border-gray-200">
                <p className="mb-2 text-gray-500 text-lg">
                  {questionAnswer[key].answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questionaries;
