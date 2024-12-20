/** @format */

import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Pricing() {
  return (
    <div id="pricing" className="mt-28 w-full py-16 px-4">
      <h1 className="text-3xl md:text-6xl font-bold font-urbanist text-center">
        Flexible Plans,
      </h1>
      <h1 className="text-3xl md:text-6xl font-bold font-urbanist text-center mb-6">
        Transparent Pricing{" "}
      </h1>
      <p className="text-gray-600 text-center mb-2">
        Find the Perfect Fit for You
      </p>

      <p className="text-center text-customRed mb-4">
        30-day free trial with money-back guarantee.
      </p>

      <h1 className="text-xl md:text-4xl font-bold font-urbanist text-center my-8">
        Compare our plans
      </h1>

      <div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-separate border-spacing-6 text-left">
            <thead>
              <tr>
                <th className="px-4 text-start">
                  <p className="text-xl">Features</p>
                </th>
                <th className="px-4 py-2">
                  <p className="text-xl font-bold mb-4">Starter</p>
                  <p className="text-start text-gray-600 font-normal max-w-32">
                    $17/month, billed monthly
                  </p>
                </th>
                <th className="px-4 py-2">
                  <p className="text-xl font-bold mb-4">Premium</p>
                  <p className="text-start text-gray-600 font-normal max-w-32">
                    $88/month, billed monthly
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-semibold" colSpan={3}>
                  Basic Management
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Users</td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Branches</td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Courses</td>
                <td className="border-b border-gray-300 px-4 py-2">3</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  15/branch
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Max Student Allowed</td>
                <td className="border-b border-gray-300 px-4 py-2">25</td>
                <td className="border-b border-gray-300 px-4 py-2">500</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Communication</td>
                <td className="border-b border-gray-300 px-4 py-2">25</td>
                <td className="border-b border-gray-300 px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bulk Updates</td>
                <td className="border-b border-gray-300 px-4 py-2">25</td>
                <td className="border-b border-gray-300 px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2">User Roles</td>
                <td className="border-b border-gray-300 px-4 py-2">25</td>
                <td className="border-b border-gray-300 px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button className="flex items-center justify-between gap-4 font-bold bg-red-100 text-red-600 py-3 px-4 rounded-lg w-40">
                    Get Started
                    <FaArrowRight size={16} className="text-red-600" />
                  </button>
                  <p className="mt-4">No credit card required</p>
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button className="flex items-center gap-4 justify-between font-bold bg-red-100 text-red-600 py-3 px-4 rounded-lg w-40">
                    Get Started
                    <FaArrowRight size={16} className="text-red-600" />
                  </button>
                  <p className="mt-4">No credit card required</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="block md:hidden">
          <div className="mb-4">
            <h3 className="font-bold text-lg">Basic Management</h3>
            <div className="flex justify-between py-2 border-b">
              <span>Users</span>
              <div className="flex space-x-4">
                <span className="text-center">Starter: 1</span>
                <span className="text-center">Premium: 15</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Branches</span>
              <div className="flex space-x-4">
                <span className="text-center">Starter: 1</span>
                <span className="text-center">Premium: 10</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Courses</span>
              <div className="flex space-x-4">
                <span className="text-center">Starter: 3</span>
                <span className="text-center">Premium: 15/branch</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Communication</span>
              <div className="flex space-x-4">
                <span className="text-center">Starter: 25</span>
                <span className="text-center">Premium: Yes</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Bulk Updates</span>
              <div className="flex space-x-4">
                <span className="text-center">Starter: 25</span>
                <span className="text-center">Premium: Yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
