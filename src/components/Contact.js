/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="w-full px-6 py-10 mt-28">
      <div className="flex justify-center items-center mb-12">
        <button className="bg-white border border-gray-300 rounded-l-lg px-4 py-1 mr-2 flex flex-col items-center">
          <span>AI</span>
          <span className="flex">
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
      <h1 className="text-3xl md:text-6xl font-bold font-urbanist text-start">
        Get in touch with us.
      </h1>
      <h1 className="text-3xl md:text-6xl font-bold font-urbanist text-start mb-10">
        We're here to assist you.{" "}
      </h1>

      <div className="w-full my-10">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="businessName" className="block font-medium mb-2">
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="w-full px-8 py-4  bg-white rounded"
                placeholder="Search for your business listing"
                required
              />
              <img
                alt="search"
                src="./search.svg"
                className="absolute right-2 top-1/2 transform translate-y-1/4 text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="yourName" className="block font-medium mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                className="w-full px-4 py-4"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phoneNumber" className="block font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-4  rounded"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-4 rounded"
                placeholder="e.g xyz@gmail.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-4 rounded"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center bg-customRed text-white py-2 px-4 gap-2 rounded-lg hover:bg-customDarkRed"
          >
            Leave Us a Message
            <FaArrowRight size={16} className="text-white" />
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-10 py-16">
        <div className="flex-1">
          <h2 className="text-lg text-gray-700 mb-6">Contact Info</h2>

          <h2 className="text-3xl md:text-5xl font-bold font-urbanist mb-6">
            We are always happy to assist you
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-bold">Email Address</h3>
            <p className="text-gray-700 font-bold">_______</p>
            <h3 className="text-md font-bold my-4">Support@RMax.com</h3>
            <p className="text-base text-gray-700">Assistance hours: </p>
            <p className="text-base text-gray-700">
              Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
          <div>
            <h3 className="text-md font-bold">Contact Number</h3>
            <p className="text-gray-700 font-bold">______</p>
            <h3 className="text-md font-bold my-4">+91-8657491236</h3>
            <p className="text-base text-gray-700">Assistance Hours:</p>
            <p className="text-base text-gray-700">
              Monday - Friday: 9 AM - 5 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
