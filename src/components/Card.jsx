import React from "react";
import { AllCars } from "../data";
import { Link } from "react-router-dom";
function Card({ item, likedProducts, setLikedProducts, setPayProduct }) {
  const handleLike = (id) => {
    const product = AllCars.find((product) => product.id === id);
    setLikedProducts(
      likedProducts.includes(product)
        ? likedProducts.filter((p) => p.id !== id)
        : [...likedProducts, product]
    );
  };
  const handlePay = (item) => {
    setPayProduct(item);
  };

  return (
    <div className="px-5 py-4 md:px-8 md:py-6 hover:scale-[1.09] transition duration-300">
      <div className="bg-white md:p-5 p-4 h-61 w-[327px] md:h-96 md:w-80 rounded-xl flex flex-col justify-between gap-15">
        <div className="flex justify-between md:mb-6">
          <div>
            <h6 className="font-bold text-lg">{item.title}</h6>
            <p className="text-xs font-bold text-gray-400">{item.type}</p>
          </div>
          <span className="cursor-pointer" onClick={() => handleLike(item.id)}>
            <svg
              xmlns="http://ww.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={
                likedProducts.includes(item) ? "text-red-500" : "currentColor"
              }
              className={
                likedProducts.includes(item) ? "fill-red-500 size-7" : "size-7"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-row md:flex-col items-center justify-between gap-12">
          <span className="w-[52%] h-16 md:w-[80%] mr-5 md:mb-5">
            <img src={item.image} alt="car" />
          </span>
          <div className="flex flex-col md:flex-row text-sm gap-3">
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

export default Card;
