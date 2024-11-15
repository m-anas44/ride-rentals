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
              <MdOutlineAddToQueue className="w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500" />
              Add a Service
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MiniNavBar;
