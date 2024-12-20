/** @format */

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function MultiImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imgSrc: "./sports.svg",
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
      link: "Know more...",
    },
    {
      imgSrc: "./health.svg",
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors and gyms",
      link: "Know more...",
    },
    {
      imgSrc: "./learning.svg",
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios",
      link: "Know more...",
    },
    {
      imgSrc: "./sports.svg",
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
      link: "Know more...",
    },
  ];

  const next = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:space-x-4 overflow-hidden">
        {cards
          .slice(
            currentIndex,
            currentIndex +
              (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
          )
          .map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 flex flex-col p-6"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="text-start text-2xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
                <span href="#more" className="text-blue-900 text-sm ml-1">
                  {card.link}
                </span>
              </p>
            </div>
          ))}
      </div>

      <button
        onClick={prev}
        className="absolute z-50 left-0 xl:-left-16 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full sm:block hidden"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 xl:-right-20 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full sm:block hidden"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default MultiImageCarousel;
