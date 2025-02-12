import React from "react";

function DashboardCenter({ isOpen }) {
  return (
    <div
      className={`px-5 py-4 md:px-4 md:py-5 lg:col-span-9 col-span-12 xl:relative xl:left-[-10%] ${
        !isOpen ? "block" : "hidden"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white row-span-2 rounded-xl">
          <DetailsRental />
        </div>
        <div className="bg-white rounded-xl">
          <TopRental />
        </div>
        <div className="bg-white rounded-xl">
          <RecentRental />
        </div>
      </div>
    </div>
  );
}

export default DashboardCenter;

function DetailsRental() {
  return (
    <div>
      <div className="p-4 flex flex-col justify-center lg:hidden">
        <h4 className="text-base font-bold mb-3">Detail Rental</h4>
        <div className="flex justify-center mb-6">
          <img
            className="object-cover w-[295px] h-[272px] rounded-md"
            src="https://morent.ir/assets/map.png"
            alt="map"
          />
        </div>
        <div className="flex flex-row mb-4 gap-x-3">
          <div>
            <div className="relative">
              <img
                className="w-28 rounded-[10px]"
                src="https://morent.ir/assets/heorcard-2.png"
                alt=""
              />
              <div className="flex justify-center items-center absolute z-10 top-0 h-full right-1 w-18">
                <img
                  className=""
                  src="https://morent.ir/assets/hero-car2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="font-bold">Nissan GT - R</h6>
            <div className="flex justify-between font-xs">
              <p>Sport Car</p>
              <p className="text-gray-400">#9761</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="inline-flex items-center gap-x-2 font-semibold mb-3">
              <div className="w-3 h-3 bg-primary rounded-full border-2 border-[#c2d0f8]"></div>
              Pick - Up
            </p>
            <div className="flex flex-col gap-y-6">
              <div>
                <p className="font-semibold mb-3">Locations</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">Kota Semarang</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-3">Time</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">07.00</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-3">Date</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">20 July 2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="inline-flex items-center gap-x-2 mb-2 font-semibold mt-6">
              <div className="w-3 h-3 bg-primary rounded-full border-2 border-[#c2d0f8]"></div>
              Drop - Off
            </p>
            <div className="flex flex-col gap-y-6">
              <div>
                <p className="font-semibold mb-3">Locations</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">Kota Semarang</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-3">Time</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">01.00</option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-3">Date</p>
                <select
                  className="w-full bg-slate-200 rounded-[10px] p-3 text-gray-400 outline-none"
                  disabled
                >
                  <option value="">22 July 2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr className="mb-4" />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-y-1">
              <p className="text-base font-bold">Total Rental Price</p>
              <p className="text-xs text-gray-300">Overall price rental</p>
            </div>
            <p className="text-xl font-bold">$80.00</p>
          </div>
        </div>
      </div>
      <div className="p-5 hidden lg:flex flex-col gap-y-3">
        <div>
          <img src="https://morent.ir/assets/map.png" alt="map" />
        </div>
        <div className="flex flex-row w-full gap-x-3">
          <div className="relative flex items-center">
            <img
              className="w-[132px] h-[72px]"
              src="https://morent.ir/assets/heorcard-2.png"
              alt=""
            />
            <img
              className="w-[116px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://morent.ir/assets/hero-car2.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">Nissan GT - R</p>
              <p className="text-sm text-gray-400">#9761</p>
            </div>
            <p className="text-gray-400 text-sm">Sport Car</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <h1 className="text-base font-semibold">Pick-Up</h1>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-bold">Locations</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center">
                Semarang
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <hr className="mx-2 border-0 border-l-2 h-auto" />
            <div className="flex flex-col">
              <p className="font-bold">Date</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center whitespace-nowrap">
                20 July 2022
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <hr className="mx-2 border-0 border-l-2 h-auto" />
            <div className="flex flex-col">
              <p className="font-bold">Time</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center">
                07.00
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          <p className="inline-flex items-center gap-x-2 font-semibold mb-2">
            <div className="w-3 h-3 bg-primary rounded-full border-2 border-[#c2d0f8]"></div>
            Drop - Off
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-bold">Locations</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center">
                Semarang
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <hr className="mx-2 border-0 border-l-2 h-auto" />
            <div className="flex flex-col">
              <p className="font-bold">Date</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center whitespace-nowrap">
                22 July 2022
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <hr className="mx-2 border-0 border-l-2 h-auto" />
            <div className="flex flex-col">
              <p className="font-bold">Time</p>
              <p className="flex gap-x-1 lg:gap-x-2 items-center">
                01.00
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[90%] mt-3 mb-2" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Total Rental Price</p>
            <p className="text-sm text-gray-300">
              Overall price and includes rental discount
            </p>
          </div>
          <p className="text-3xl font-bold">$80.00</p>
        </div>
      </div>
    </div>
  );
}
function TopRental() {
  return (
    <div className="p-4 lg:p-5">
      <h4 className="font-bold md:text-xl ">Top 5 Car Rental </h4>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex justify-center">
          <img className="w-[70%] lg:w-[80%]" src="/assets/Chart.png" alt="" />
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-5 w-full">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400 flex items-center gap-x-2">
              <div className="w-3 h-3 rounded-full bg-[#0d3559]"></div>
              Sport Car
            </p>
            <p className="font-semibold text-sm">17,439</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400 flex items-center gap-x-2">
              <div className="w-3 h-3 rounded-full bg-[#175d9c]"></div>
              SUV
            </p>
            <p className="font-semibold text-sm">9,478</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400 flex items-center gap-x-2">
              <div className="w-3 h-3 rounded-full bg-[#2185de]"></div>
              Coupe
            </p>
            <p className="font-semibold text-sm">18,197</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400 flex items-center gap-x-2">
              <div className="w-3 h-3 rounded-full bg-[#63a9e8]"></div>
              Hatchback
            </p>
            <p className="font-semibold text-sm">12,510</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-400 flex items-center gap-x-2">
              <div className="w-3 h-3 rounded-full bg-[#a6cef2]"></div>
              MPV
            </p>
            <p className="font-semibold text-sm">14,406</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function RecentRental() {
  return (
    <div>
      <div className="p-4 lg:p-5">
        <div className="flex justify-between mb-5 items-center">
          <h4 className="text-base font-bold md:text-xl">Recent Transaction</h4>
          <p className="text-xs text-blue-500">View All</p>
        </div>
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <img
              className="w-[72px] lg:w-[90px]"
              src="https://morent.ir/assets/hero-car2.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm font-bold">Nissan GT - R</p>
            <p className="text-xs text-gray-400">Sport Car</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-gray-400 text-end">20 July</p>
            <p className="text-base font-bold">$80.00</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <div className="flex flex-col">
            <img
              className="w-[72px] lg:w-[90px]"
              src="https://morent.ir/assets/cars/cr1.png"
              alt="recent care rented"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm font-bold">Koegnigsegg</p>
            <p className="text-xs text-gray-400">Sport Car</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-gray-400 text-end">19 July</p>
            <p className="text-base font-bold">$99.00</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <div className="flex flex-col">
            <img
              className="w-[72px] lg:w-[90px]"
              src="https://morent.ir/assets/cars/cr6.png"
              alt="recent care rented"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm font-bold">Rolls - Royce</p>
            <p className="text-xs text-gray-400">Sport Car</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-gray-400 text-end">18 July</p>
            <p className="text-base font-bold">$96.00</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <div className="flex flex-col">
            <img
              className="w-[72px] lg:w-[90px]"
              src="https://morent.ir/assets/cars/cr12.png"
              alt="recent care rented"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm font-bold">CR - V</p>
            <p className="text-xs text-gray-400">SUV</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-xs text-gray-400 text-end">17 July</p>
            <p className="text-base font-bold">$80.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
