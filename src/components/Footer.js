/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-8 py-10">
        <div>
          <h4 className="text-start font-semibold mb-4 text-gray-400">
            Company
          </h4>
          <ul className="flex flex-col justify-center items-start space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#careers" className="hover:underline">
                Career
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-start font-semibold mb-4 text-gray-400">
            Business Size
          </h4>
          <ul className="flex flex-col justify-center items-start space-y-2">
            <li>
              <a href="#enterpreneours" className="hover:underline">
                Enterpreneurs
              </a>
            </li>
            <li>
              <a href="#smbs" className="hover:underline">
                SMBs
              </a>
            </li>
            <li>
              <a href="#business" className="hover:underline">
                Growth Bussiness
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Household Services
              </a>
            </li>
            <li>
              <a href="#enterprise" className="hover:underline">
                Enterprise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-start font-semibold mb-4 text-gray-400">
            Business Type
          </h4>
          <ul className="flex flex-col justify-center items-start space-y-2">
            <li>
              <a href="#health" className="hover:underline">
                Health & Wellness
              </a>
            </li>
            <li>
              <a href="#sports" className="hover:underline">
                Sports
              </a>
            </li>
            <li>
              <a href="#learning" className="hover:underline">
                Learning Activites
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Household Services
              </a>
            </li>
            <li>
              <a href="#miscellaneous" className="hover:underline">
                Miscellaneous
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-400">Download</h4>
          <ul className="space-y-2">
            <li class="flex">
              <img
                alt="app store"
                src="./apple_white.svg"
                class="w-6 h-6 mr-2"
              />
              <a href="#bussiness-app" className="hover:underline">
                Bussiness App
              </a>
            </li>
            <li class="flex">
              <img
                alt="google store"
                src="./play_store.svg"
                class="w-6 h-6 mr-2"
              />
              <a href="#app" className="hover:underline">
                Business App
              </a>
            </li>
            <li class="flex">
              <img
                alt="app store"
                src="./apple_white.svg"
                class="w-6 h-6 mr-2"
              />
              <a href="#user-app" className="hover:underline">
                User App
              </a>
            </li>
            <li class="flex">
              <img
                alt="google store"
                src="./play_store.svg"
                class="w-6 h-6 mr-2"
              />
              <a href="#user-app" className="hover:underline">
                User App
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-start font-semibold mb-4 text-gray-400">Legal</h4>
          <ul className="flex flex-col justify-center items-start space-y-2">
            <li>
              <a href="#terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#return" className="hover:underline">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-start font-semibold mb-4 text-gray-400">
            Contact Us
          </h4>
          <ul className="flex flex-col justify-center items-start space-y-2">
            <li>
              <a href="#email" className="hover:underline">
                support@Rmax.com
              </a>
            </li>
            <li>
              <a href="#mobile" className="hover:underline">
                1234567890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 mb-4" />

      <div className="flex justify-between items-center text-sm">
        <div>
          <a href="#privacy" className="hover:underline mr-4">
            © 2024 Copyright, All Right Reserved@RMax
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="hover:opacity-75"
            aria-label="Facebook"
          >
            <FaFacebook
              size={24}
              className="text-white"
            />
          </a>

          <a
            href="https://twitter.com"
            className="hover:opacity-75"
            aria-label="Twitter"
          >
            <FaTwitter size={24} className="text-white" />
          </a>

          <a
            href="https://linkedin.com"
            className="hover:opacity-75"
            aria-label="LinkedIn"
          >
                    <FaLinkedin size={24} className="text-white" />

          </a>

          <a
            href="https://instagram.com"
            className="hover:opacity-75"
            aria-label="Instagram"
          >
            <FaInstagram
              size={24}
              className="text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
