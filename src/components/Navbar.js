/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <div className="max-w-screen-1120 mx-auto fixed top-6 left-4 right-4 bg-white shadow-sm border z-10 rounded-lg">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold font-secularOne">
          <a href="#logo">
            <span className="text-black">R</span>
            <span className="text-customDarkRed ">Max</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800">
            Home
          </Link>

          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-blue-600"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            >
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isFeaturesOpen && (
              <>
                <div className="py-8 absolute bg-white shadow-md rounded-md mt-2 w-[900px] left-1/2 transform -translate-x-1/2">
                  <div className="grid grid-cols-4 gap-4 p-4 divide-x">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Discover</h4>
                      <ul>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <img alt="icon1" src="./icon1.svg" />
                          <a href="#discover1" className="text-gray-700">
                            Custom Branded website
                          </a>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <img alt="icon1" src="./icon2.svg" />
                          <a href="#discover2" className="text-gray-700">
                            User Mobile App
                          </a>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <img alt="icon1" src="./icon3.svg" />
                          <a href="#discover3" className="text-gray-700">
                            Business Webpage
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-span-2">
                      <h4 className="font-bold text-gray-700 mb-2">Manage</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <ul>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">📖</span>
                            <a href="#discover1" className="text-gray-700">
                              Courses
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon4.svg" />
                            <a href="#discover2" className="text-gray-700">
                              Classess
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon2.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Appointments
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon1.svg" />
                            <a href="#discover1" className="text-gray-700">
                              Services
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">🔍</span>
                            <a href="#discover2" className="text-gray-700">
                              Retreats
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">🌟</span>
                            <a href="#discover3" className="text-gray-700">
                              Payments
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon2.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Design Tools
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon2.svg" />
                            <a href="#discover1" className="text-gray-700">
                              Communication
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon5.svg" />
                            <a href="#discover2" className="text-gray-700">
                              Trail Session
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon4.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Workshops
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon1.svg" />
                            <a href="#discover1" className="text-gray-700">
                              Reporting tools
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon6.svg" />
                            <a href="#discover2" className="text-gray-700">
                              Multi-Location
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon4.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Events
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon5.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Staff Roles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Grow</h4>
                      <ul>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <span className="text-gray-600">📈</span>
                          <a href="#grow1" className="text-gray-700">
                            Growth Strategies
                          </a>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <span className="text-gray-600">🌐</span>
                          <a href="#grow2" className="text-gray-700">
                            Global Outreach
                          </a>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                          <span className="text-gray-600">📊</span>
                          <a href="#grow3" className="text-gray-700">
                            Market Insights
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="flex items-center bg-red-200 text-red-600 py-2 px-4 rounded-lg w-96 mx-auto">
                    See All Features
                    <img
                      alt="arrow"
                      src="./angle-right.svg"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </>
            )}
          </div>

          <Link to="/pricing" className="text-gray-800">
            Pricing
          </Link>

          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2">
            <button className="border-2 px-3 font-semibold py-2 rounded-md">
              Login
            </button>

            <button className="bg-customRed border-2 text-white px-4 py-2 rounded-lg">
              Try For Free
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md z-10 absolute top-16 w-full left-0">
          <div className="flex flex-col px-8 w-full space-y-4 py-4">
            <Link to="/" className="text-gray-800">
              Home
            </Link>

            <div className="relative">
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isFeaturesOpen && (
                <>
                  <div className="py-8 absolute bg-white shadow-md rounded-md mt-2 lg:w-full">
                    <div className="grid grid-cols-1 gap-4 p-4 divide-x md:grid-cols-4 overflow-auto">
                      <div className="lg:mb-4">
                        <h4 className="font-bold text-gray-700 mb-2">
                          Discover
                        </h4>
                        <ul>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon1.svg" />
                            <a href="#discover1" className="text-gray-700">
                              Custom Branded website
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon2.svg" />
                            <a href="#discover2" className="text-gray-700">
                              User Mobile App
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <img alt="icon1" src="./icon3.svg" />
                            <a href="#discover3" className="text-gray-700">
                              Business Webpage
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-span-2 lg:mb-4">
                        <h4 className="font-bold text-gray-700 mb-2">Manage</h4>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                          <ul>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <span className="text-gray-600">📖</span>
                              <a href="#discover1" className="text-gray-700">
                                Courses
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon4.svg" />
                              <a href="#discover2" className="text-gray-700">
                                Classess
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon2.svg" />
                              <a href="#discover3" className="text-gray-700">
                                Appointments
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon1.svg" />
                              <a href="#discover1" className="text-gray-700">
                                Services
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <span className="text-gray-600">🔍</span>
                              <a href="#discover2" className="text-gray-700">
                                Retreats
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <span className="text-gray-600">🌟</span>
                              <a href="#discover3" className="text-gray-700">
                                Payments
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon2.svg" />
                              <a href="#discover3" className="text-gray-700">
                                Design Tools
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon2.svg" />
                              <a href="#discover1" className="text-gray-700">
                                Communication
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon5.svg" />
                              <a href="#discover2" className="text-gray-700">
                                Trail Session
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon4.svg" />
                              <a href="#discover3" className="text-gray-700">
                                Workshops
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon1.svg" />
                              <a href="#discover1" className="text-gray-700">
                                Reporting tools
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon6.svg" />
                              <a href="#discover2" className="text-gray-700">
                                Multi-Location
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon4.svg" />
                              <a href="#discover3" className="text-gray-700">
                                Events
                              </a>
                            </li>
                            <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                              <img alt="icon1" src="./icon5.svg" />
                              <a href="#discover3" className="text-gray-700">
                                Staff Roles
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="lg:mb-4">
                        <h4 className="font-bold text-gray-700 mb-2">Grow</h4>
                        <ul>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">📈</span>
                            <a href="#grow1" className="text-gray-700">
                              Growth Strategies
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">🌐</span>
                            <a href="#grow2" className="text-gray-700">
                              Global Outreach
                            </a>
                          </li>
                          <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
                            <span className="text-gray-600">📊</span>
                            <a href="#grow3" className="text-gray-700">
                              Market Insights
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button className="flex items-center bg-red-200 text-red-600 py-2 px-4 rounded-lg w-96 mx-auto">
                      See All Features
                      <img
                        alt="arrow"
                        src="./angle-right.svg"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </>
              )}
            </div>

            <Link to="/pricing" className="text-gray-800">
              Pricing
            </Link>

            <a href="#solutions" className="text-gray-700 w-full">
              <button className="flex items-center justify-between text-gray-700 w-full">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </a>

            <div className="flex gap-2">
              <button className="border-2 px-3 font-semibold py-2 rounded-md">
                Login
              </button>

              <button className="bg-customRed border-2 text-white px-4 py-2 rounded-lg">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
