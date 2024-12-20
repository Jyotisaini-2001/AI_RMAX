/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Plans() {
  return (
    <div>
      <div className="px-4 py-12 space-y-8">
        <div className="text-center">
          <h1 className="text-3l md:text-5xl font-bold mb-4 font-urbanist">
            Choose Plan
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 font-urbanist">
            That’s Right For You
          </h1>
          <p className="text-gray-600">
            Simple and transparent pricing. Start for free, upgrade when you
            love it.{" "}
          </p>
          <span className="text-customDarkRed mb-8">
            30 day free trial in a button
          </span>
        </div>

        <div className="text-center">
          <span className="mb-4 mr-2">
            Running a <span className="font-semibold">Growth Business </span> or{" "}
            <span className="font-semibold">Enterprise</span>? Let's connect -
          </span>
          <button className="bg-customRed text-white py-1 px-4 rounded-lg">
            Talk to Sales
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-8">
          <span className=" text-base md:text-lg">Monthly</span>
          <img alt="plan" src="./toggle.svg" />
          <span className="text-base md:text-lg">Yearly</span>
          <span className="text-customRed text-xs font-bold md:text-base bg-red-100 rounded-2xl px-2 py-1 uppercase">
            Save 25%
          </span>
        </div>

        <div className="text-start grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto ">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl uppercase text-start font-semibold mb-8 text-customRed">
              Starter
            </h3>
            <div className="mb-6">
              <span className="text-lg mr-1">$</span>
              <span className="text-5xl font-bold mr-2">17</span> /month
            </div>
            <p className="text-gray-600 mb-6">billed monthly</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                Commercial License
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                100+ HTML UI Elements
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                Unlimited Domain Support
              </li>
              <li className="flex items-center text-gray-400">
                <img
                  alt="cross"
                  src="./cross.svg"
                  className="w-4 h-4 mr-2"
                />
                6 Month Premium Support
              </li>
              <li className="flex items-center text-gray-400">
                <img
                  alt="cross"
                  src="./cross.svg"
                  className="w-4 h-4 mr-2"
                />
                Life Time Updates
              </li>
            </ul>

            <button className="flex items-center justify-between bg-red-50 text-red-600 py-4 px-4 gap-4 rounded-lg w-48 font-bold">
              Get Started
              <FaArrowRight size={16} className="text-red-600" />
            </button>
            <p className="mt-4">No credit card required</p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl uppercase text-start font-semibold mb-8 text-customRed">
              Premium
            </h3>
            <div className="mb-6">
              <span className="text-lg mr-1">$</span>
              <span className="text-5xl font-bold mr-2">88</span> /month
            </div>
            <p className="text-gray-600 mb-6">billed monthly</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                Commercial License
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                100+ HTML UI Elements
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                Unlimited Domain Support
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />6
                Month Premium Support
              </li>
              <li className="flex items-center">
                <img alt="check" src="./check.svg" className="w-4 h-4 mr-2" />
                Life Time Updates
              </li>
            </ul>

            <button className="flex items-center justify-between bg-red-50 text-red-600 py-4 gap-4 px-4 rounded-lg w-48 font-bold">
              Get Started
              <FaArrowRight size={16} className="text-red-600" />
            </button>
            <p className="mt-4">No credit card required</p>
          </div>
        </div>
      </div>
      <p className="text-center underline">
        <Link to="/pricing" className="text-blue-800">
          Explore In-Depth Differences
        </Link>{" "}
      </p>
      <div className="text-center py-8 mt-16">
        <h1 className="text-3l md:text-5xl font-bold mb-8 font-urbanist">
          Manage Your Business On the Go
        </h1>

        <p className="max-w-2xl mx-auto text-center mb-8">
          With free Business Mobile App, you can manage your entire service
          business from anywhere. Stay connected and stay in control, no matter
          where your day takes you.
        </p>
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center px-4 py-2 rounded-lg border-gray-600 border-2 mr-2">
            <img alt="apple" src="./apple.svg" />
            <span className="ml-2">App Store</span>
          </button>
          <button className="flex justify-center items-center px-4 py-2 rounded-lg border-2 border-gray-600">
            <img alt="google" src="./play_store.svg" />
            <span className="ml-2">Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
}
