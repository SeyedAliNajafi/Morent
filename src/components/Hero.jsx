import React from "react";
import HeroCard from "./HeroCard";
import PickOrDrop from "./PickOrDrop";
function Hero() {
  return (
    <div
      className="px-5 py-4 md:px-8 md:py-6 lg:container"
      data-aos="fade-right"
    >
      <HeroCard />
      <PickOrDrop />
    </div>
  );
}

export default Hero;
