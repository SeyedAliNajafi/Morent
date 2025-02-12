import React, { useEffect } from "react";
import NavBar from "./NavBar";
import PaymentInfo from "./PaymentInfo";
import Footer from "./Footer";
function Payment({ setLikedProducts, payProduct, likedProducts }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar
        setLikedProducts={setLikedProducts}
        likedProducts={likedProducts  }
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-5 py-4 md:px-8 md:py-6 lg:container">
        <PaymentInfo />
        <RentalSummary payProduct={payProduct} />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;

function RentalSummary({ payProduct }) {
  return (
    <div className="col-span-2 bg-white px-5 py-4 md:px-8 md:py-6 lg:container order-first md:order-2 h-fit rounded-[10px]">
      <div className="flex flex-col gap-y-4">
        <div>
          <p className="text-base md:text-xl font-bold">Rental Summary</p>
          <p className="text-xs md:text-sm text-gray-400">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <div className="relative flex items-center">
            <img
              className="w-[132px] h-[72px] md:h-[100px] rounded-[8px]"
              src="https://morent.ir/assets/heorcard-2.png"
              alt=""
            />
            <img
              className="w-[116px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={payProduct.image}
              alt="car image"
            />
          </div>
          <div className="flex flex-col gap-y-2 md:gap-y-3">
            <h4 className="text-xl md:text-[32px] font-bold">
              {payProduct.title}
            </h4>
            <div className="flex flex-col md:flex-row items-center gap-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="76"
                  height="12"
                  fill="none"
                >
                  <path
                    fill="#FBAD39"
                    fill-rule="evenodd"
                    d="M5.5 1.595a.54.54 0 0 1 1.03 0l.93 2.86h3a.545.545 0 0 1 .32 1L8.345 7.22l.93 2.865a.54.54 0 0 1-.835.605L6 8.905l-2.435 1.77a.54.54 0 0 1-.835-.605l.93-2.865L1.225 5.44a.545.545 0 0 1 .32-1h3L5.5 1.595ZM21.5 1.595a.54.54 0 0 1 1.03 0l.93 2.86h3a.545.545 0 0 1 .32 1L24.345 7.22l.93 2.865a.54.54 0 0 1-.835.605L22 8.905l-2.435 1.77a.54.54 0 0 1-.835-.605l.93-2.865-2.435-1.765a.545.545 0 0 1 .32-1h3l.955-2.845ZM37.5 1.595a.54.54 0 0 1 1.03 0l.93 2.86h3a.545.545 0 0 1 .32 1L40.345 7.22l.93 2.865a.54.54 0 0 1-.835.605L38 8.905l-2.435 1.77a.54.54 0 0 1-.835-.605l.93-2.865-2.435-1.765a.545.545 0 0 1 .32-1h3l.955-2.845ZM53.5 1.595a.54.54 0 0 1 1.03 0l.93 2.86h3a.545.545 0 0 1 .32 1L56.345 7.22l.93 2.865a.54.54 0 0 1-.835.605L54 8.905l-2.435 1.77a.54.54 0 0 1-.835-.605l.93-2.865-2.435-1.765a.545.545 0 0 1 .32-1h3l.955-2.845Z"
                    clip-rule="evenodd"
                  />
                  <g clip-path="url(#a)">
                    <path
                      stroke="#C3D4E9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M69.5 1.595a.54.54 0 0 1 1.03 0l.93 2.86h3a.545.545 0 0 1 .32 1L72.345 7.22l.93 2.865a.54.54 0 0 1-.835.605L70 8.905l-2.435 1.77a.54.54 0 0 1-.835-.605l.93-2.865-2.435-1.765a.545.545 0 0 1 .32-1h3l.955-2.845Z"
                      clip-rule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M64 0h12v12H64z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="text-xs md:text-sm text-gray-700">440+ Reviewer</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between">
            <p className="text-xs md:text-base text-gray-400">Subtotal</p>
            <p className="font-semibold">{payProduct.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs md:text-base text-gray-400">Tax</p>
            <p className="font-semibold">$0</p>
          </div>
        </div>
        <div className="p-3 bg-slate-200 flex justify-between rounded-[10px]">
          <p className="text-gray-400 text-xs md:text-sm">Apply promo code</p>
          <p className="text-xs md:text-base font-semibold">Apply now</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <p className="md:text-xl font-bold">Total Rental Price</p>
            <p className="text-xs text-gray-400 md:hidden">
              Overall price rental
            </p>
            <p className="text-sm text-gray-400 hidden md:block">
              Overall price and includes rental discount
            </p>
          </div>
          <p className="text-xl md:text-[32px] font-bold">{payProduct.price}</p>
        </div>
      </div>
    </div>
  );
}
