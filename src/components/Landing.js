/** @format */
import Home from "./Home";
import Service from "./Service";
import Features from "./Features";
import Plans from "./Plans";
import Faqs from "./Faqs";

import React from "react";
import ImageCarousel from "./ImageCrousel";

export default function Landing() {
  return (
    <div>
      {" "}
      <Home />
      <Service />
      <Features />
      <ImageCarousel />
      <Plans />
      <Faqs />
    </div>
  );
}
