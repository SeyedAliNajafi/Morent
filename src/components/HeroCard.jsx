import React from "react";

function HeroCard() {
  return (
    <div className="flex gap-x-5 mb-6 justify-center">
      <div className="relative">
        <img
          className="h-60 md:h-auto"
          src="https://morent.ir/assets/herocard-1.png"
          alt="hero-card"
        />
        <div className="absolute flex flex-col top-0 left-0 w-full h-full gap-y-4 py-1 px-2 xl:px-4 xl:py-3 justify-center xl:gap-y-1 2xl:gap-y-4 md:gap-y-1 md:p-3">
          <h6 className="text-white xl:leading-relaxed text-xl xl:text-2xl whitespace-nowrap xl:whitespace-normal xl:w-[50%]">
            The Best Platform for Car Rental
          </h6>
          <p className="text-white xl:whitespace-normal xl:w-[50%] md:text-lg">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <div>
            <a href="#recommended">
              <button className="btn-primary w-auto">Rental Car</button>
            </a>
          </div>
          <div className="flex justify-center">
            <img
              className="w-[50%]"
              src="https://morent.ir/assets/hero-car.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <img src="https://morent.ir/assets/heorcard-2.png" alt="hero-card" />
        <div className="absolute flex flex-col top-0 left-0 w-full h-full gap-y-4 py-1 px-2 xl:px-4 xl:py-3 justify-center xl:gap-y-1 2xl:gap-y-4 md:gap-y-1 md:p-3">
          <h6 className="text-white xl:leading-relaxed text-xl xl:text-2xl whitespace-nowrap xl:whitespace-normal xl:w-[50%]">
            Easy way to rent a car at a low price
          </h6>
          <p className="text-white xl:whitespace-normal xl:w-[50%] md:text-lg">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <div>
            <a href="#recommended">
              <button className="btn-secondary w-auto">Rental Car</button>
            </a>
          </div>
          <div className="flex justify-center">
            <img
              className="w-[50%]"
              src="https://morent.ir/assets/hero-car2.png"
              alt="hero car rental"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
