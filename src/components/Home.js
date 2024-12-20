/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      <div className="mt-28 flex items-center mb-12">
        <button className="bg-white border border-gray-300 rounded-l-lg px-4 py-1 mr-2 flex flex-col font-bold items-end">
          <span>AI</span>
          <span className="flex font-bold font-secularOne">
            <span className="text-black">R</span>
            <span className="text-customDarkRed">Max</span>
          </span>
        </button>

        <input
          type="text"
          placeholder="Curious? Let AI Uncover the Answers!"
          className="bg-white border border-gray-300 rounded-r-lg px-4 py-4 md:w-96"
        />
      </div>

      <h1 className="text-4xl lg:text-6xl font-bold font-urbanist text-center text-gray-900 mb-4">
        Maximize Your Impact
      </h1>

      <h2 className="text-4xl lg:text-6xl font-bold font-urbanist text-center text-customRed mb-6">
        Business with <span className="text-black">R</span>
        <span className="text-customDarkRed">Max</span>
      </h2>

      <p className="text-lg text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Enhance your business with Rmax's all-in-one platform—streamlining
        client engagement, automating workflows, and fueling growth.
      </p>

      <div className="mt-4 flex space-x-4">
        <button className="bg-customRed text-white px-4 py-2 gap-4 rounded-lg flex items-center hover:bg-customDarkRed">
          Get Started
          <FaArrowRight size={16} className="text-white" />
        </button>
        <button className="bg-white px-4 py-2 font-semibold rounded-lg border-2">
          Book A Demo
        </button>
      </div>

      <div className="text-xl font-urbanist mt-28 flex flex-col sm:flex-row md:space-x-8 lg:space-x-16 space-y-4 sm:space-y-0">
        <button className="bg-white px-6 py-3 border-2 rounded-lg flex items-center">
          Seamless Onboarding
        </button>
        <button className="bg-white px-6 py-3 border-2 rounded-lg flex items-center">
          Client Engagement
        </button>
        <button className="bg-white px-6 py-3 border-2 rounded-lg flex items-center">
          Generate Report
        </button>
        <button className="bg-white px-6 py-3 border-2 rounded-lg flex items-center">
          Revenue Growth
        </button>
      </div>
    </div>
  );
}
