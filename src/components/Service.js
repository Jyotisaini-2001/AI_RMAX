/** @format */

import React from "react";

export default function Service() {
  return (
    <section className="py-16">
      <h2 className="text-4xl lg:text-5xl font-bold font-urbanist text-center mb-4">
        Onboard business in 3 simple steps
      </h2>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
        Quick assisted onboarding with 30day free trial. No credit card needed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <div className="p-6 text-center flex flex-col items-center relative">
          <img
            alt="top-left-icon"
            src="./1.svg"
            className="absolute top-2 left-2 mb-4 ml-4"
          />

          <img alt="service1" src="./service1.svg" />

          <h3 className="text-2xl font-semibold mb-2 -mt-8">
            Claim your preset profile
          </h3>
          <p className="text-gray-600">
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </p>
        </div>
        <div className="hidden lg:block absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <img alt="arrow" src="./arrow.svg" />
        </div>

        <div className="p-6 text-center flex flex-col items-center relative">
          <img
            alt="top-left-icon2"
            src="./2.svg"
            className="absolute top-20 left-20 ml-4"
          />
          <img alt="service2" src="./service2.svg" className="" />
          <h3 className="text-2xl font-semibold mb-2 -mt-8">Add services</h3>
          <p className="text-gray-600">
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </p>
        </div>
        <div className="hidden lg:block absolute top-1/3 left-1/2 transform translate-x-3/4 -translate-y-1/2">
          <img alt="arrow" src="./arrow2.svg" />
        </div>

        <div className="p-6 text-center flex flex-col items-center relative">
          <img
            alt="top-left-icon3"
            src="./3.svg"
            className="absolute top-20 left-20 ml-4"
          />
          <img alt="service3" src="./service3.svg" />
          <h3 className="text-2xl font-semibold mb-2 -mt-8">Built Website</h3>
          <p className="text-gray-600">
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient Client experience.
          </p>
        </div>
      </div>
    </section>
  );
}
