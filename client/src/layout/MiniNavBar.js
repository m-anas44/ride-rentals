import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddToQueue } from "react-icons/md";

const MiniNavBar = () => {
  return (
    <section className="mb-3">
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
          <li className="me-2">
            <Link
              to="/addService"
              className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active group"
              aria-current="page"
            >
              <MdOutlineAddToQueue className="w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500"/>
              Add a Service
            </Link>
          </li>
          <li className="me-2 mt-1">
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
            >
              <svg
                className="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MiniNavBar;
