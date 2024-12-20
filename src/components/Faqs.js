/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-8 rounded-lg py-20">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-urbanist text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-lg">
            Find answers to common questions about our services and features.
            For more details, contact our support team.{" "}
          </p>
        </div>

        <div className="flex justify-center items-center w-full mb-8">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
            className="w-full border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-customRed text-white px-4 py-2.5 rounded-r-lg hover:bg-red-700">
            <img alt="search" src="./search.svg" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left px-6 py-6 font-medium text-gray-800 flex items-center justify-between focus:outline-none"
              type="button"
              onClick={() => toggleAccordion(0)}
            >
              <span>What is RMax?</span>
              <img
                alt="arrow"
                src={openIndex === 0 ? "./up_arrow.svg" : "./right_arrow.svg"}
                className="w-6 h-6"
              />
            </button>
            {openIndex === 0 && ( // Show answer if openIndex matches 0
              <div className="px-4 py-2 text-gray-600">
                Qest, is a SaaS platform/ecosystem that lets any small to medium
                service business setup & manage their business quickly & easily.
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left px-6 py-6 font-medium text-gray-800 flex items-center justify-between focus:outline-none"
              type="button"
              onClick={() => toggleAccordion(1)}
            >
              <span>How does it work?</span>
              <img
                alt="arrow"
                src={openIndex === 1 ? "./up_arrow.svg" : "./right_arrow.svg"}
                className="w-6 h-6"
              />
            </button>
            {openIndex === 1 && (
              <div className="px-4 py-2 text-gray-600">
                Explanation about how the platform works.
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left px-6 py-6 font-medium text-gray-800 flex items-center justify-between focus:outline-none"
              type="button"
              onClick={() => toggleAccordion(2)}
            >
              <span>How much does it cost?</span>
              <img
                alt="arrow"
                src={openIndex === 2 ? "./up_arrow.svg" : "./right_arrow.svg"}
                className="w-6 h-6"
              />
            </button>
            {openIndex === 2 && (
              <div className="px-4 py-2 text-gray-600">
                Pricing details for the platform.
              </div>
            )}
          </div>
        </div>

        <p className="text-center mt-4">
          Haven’t got your answer?{" "}
          <Link to="/contact" className="text-blue-800 ml-2">
            Contact our support now
          </Link>
        </p>
      </div>
    </div>
  );
}
