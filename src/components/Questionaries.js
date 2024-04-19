import React from "react";
import { questionAnswer } from "../mockData/questionariesData";
const Questionaries = () => {
  return (
    <section className="container mx-auto border rounded-lg mb-4">
      <h2 className="bg-gray-900 text-slate-100 leading-relaxed p-3 text-xl font-bold rounded-t-lg">
        Frequently Asked Questions
      </h2>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white text-gray-900"
        data-inactive-classes="text-gray-500"
      >
        {Object.keys(questionAnswer).map((key) => (
          <div key={key}>
            <h2 id={`accordion-flush-heading-${key}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 text-left px-3 font-medium text-lg rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
                data-accordion-target={`#accordion-flush-body-${key}`}
                aria-expanded="true"
                aria-controls={`accordion-flush-body-${key}`}
              >
                <span>{questionAnswer[key].question}</span>
                <svg
                  data-accordion-icon=""
                  className="w-3 h-3 rotate-180 shrink-0"
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
              id={`accordion-flush-body-${key}`}
              className="hidden bg-none px-3"
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
