/** @format */

import React from "react";

export default function Features() {
  return (
    <div>
      <div className="py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-urbanist">
            Why Rmax?
          </h2>
          <p className="text-gray-500 text-lg">
            Rmax is designed to simplify and transform the way service
            businesses operate. From onboarding, scheduling and billing to
            client management, payments and growth, Rmax integrates everything
            in one easy-to-use platform connecting all the stake holders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center">
            <img
              alt="icon1"
              src="./calendar.svg"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
            <p className="text-gray-600 mb-4">
              Manage appointments, classes, and events, workshops with...
            </p>
            <a
              href="#scheduling"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>

          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Client Management & CRM
            </h3>
            <p className="text-gray-600 mb-4">
              Keep track of customer data, preferences, and interactions to...
            </p>
            <a
              href="#client"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>

          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center">
            <img
              alt="icon3"
              src="./star.svg"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Powered Insights</h3>
            <p className="text-gray-600 mb-4">
              Know exactly what is happening in business and get actionable...
            </p>
            <a
              href="#insights"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>

          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center lg:row-span-2">
            <img
              alt="feature4"
              src="./feature1.svg"
              className="w-full h-96 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Billing & Payments</h3>
            <p className="text-gray-600 mb-4">
              Streamline invoicing and payments with automated workflows,
              reducing ...
            </p>
            <a
              href="#billing"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>

          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center">
            <img
              alt="icon5"
              src="./brifcase.svg"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Marketing & Engagement Tools
            </h3>
            <p className="text-gray-600 mb-4">
              Boost client retention and grow your business with integrated...
            </p>
            <a
              href="#marketing"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>
          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center lg:row-span-2">
            <h3 className="text-xl font-semibold mb-2">
              Custom Branded website
            </h3>
            <p className="text-gray-600 mb-4">
              Qest’s Custom Branded Website Builder allows you to create a fully
              personalized...
            </p>
            <a
              href="#managing"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
            <img
              alt="icon7"
              src="./feature2.svg"
              className="w-full h-96 object-cover mb-4"
            />
          </div>

          <div className="bg-gray-100 flex flex-col items-center border border-gray-300 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
               Multi-Location Management
            </h3>
            <p className="text-gray-600 mb-4">
              Manage multiple locations with ease, assigning roles and
              permissions...
            </p>
            <a
              href="#branding"
              className="text-blue-900 flex items-center space-x-2"
            >
              <span>View Details</span>
              <img
                alt="right-arrow"
                src="./right_arrow.svg"
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="max-w-2xl mx-auto text-3xl md:text-5xl font-bold font-urbanist mb-8">
            Empowering Service Providers Across Industries
          </h2>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto">
            Whether you're in sports, education, wellness, household services,
            or niche markets, our technology simplifies your business
            operations, making it easier for you to focus on what you do best.
          </p>
        </div>
      </div>
    </div>
  );
}
