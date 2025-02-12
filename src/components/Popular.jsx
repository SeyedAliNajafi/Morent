import React from "react";
import { Link } from "react-router-dom";
import { PopularCars, AllCars } from "../data";

function Popular({ setPayProduct, setDetailProduct }) {
  let shownCars = PopularCars.map((item) => (
    <Card key={item.id} item={item} setPayProduct={setPayProduct} />
  ));
  return (
    <div className="px-5 py-4 md:px-8 md:py-6 lg:container"
     data-aos="fade-up"
     >
      <div className="flex justify-between">
        <h1 className="text-xs md:text-base font-semibold text-gray-400">
          Popular Car
        </h1>
        <Link to="/category">
          <a
            href=""
            className="font-semibold text-primary text-xs md:text-base"
          >
            View All
          </a>
        </Link>
      </div>
      <div className="test flex overflow-x-auto items-center justify-between">
        {shownCars}
      </div>
    </div>
  );
}

export default Popular;

function Card({ item, setPayProduct }) {
  const handlePay = (item) => {
    setPayProduct(item);
  };
  return (
    <div className="px-5 py-4 md:px-8 md:py-6 hover:scale-[1.06] transition duration-300">
      <div className="bg-white md:p-5 p-4 h-61 w-[280px] md:h-96 md:w-80 rounded-xl flex flex-col justify-between gap-15">
        <div className="flex justify-between mb-6">
          <div>
            <h6 className="font-bold text-lg">{item.title}</h6>
            <p className="text-xs font-bold text-gray-400">{item.type}</p>
          </div>
          {/* <span onClick={() => handleLike(item.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={likedProducts.includes(item)  ? "text-red-500" : "currentColor"}
              className={likedProducts.includes(item)  ? "fill-red-500 size-7" : "size-7"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span> */}
        </div>
        <div className="flex flex-col items-center justify-between gap-12 mb-4">
          <span className="h-16 w-[80%]">
            <img src={item.image} alt="car" />
          </span>
          <div className="flex flex-row text-sm gap-3">
            <span className="flex gap-1 items-center">
              <img src="https://morent.ir/assets/benzin.svg" alt="" />
              <p className="text-xs md:text-sm text-gray-400">{item.gas}</p>
            </span>
            <span className="flex gap-1 items-center">
              <img src="https://morent.ir/assets/dande.svg" alt="" />
              <p className="text-xs md:text-sm text-gray-400">{item.gear}</p>
            </span>
            <span className="flex gap-1 items-center">
              <img src="https://morent.ir/assets/people.svg" alt="" />
              <p className="text-xs md:text-sm text-gray-400 flex">
                {item.people}
              </p>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="font-bold text-lg">
            {item.price}/
            <span className="font-normal text-sm text-gray-400 ">day</span>
          </p>
          <Link to="/payment">
            <button className="btn-primary" onClick={() => handlePay(item)}>
              Rental Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
