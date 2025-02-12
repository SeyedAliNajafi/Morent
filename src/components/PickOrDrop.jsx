import React from "react";

function PickOrDrop() {
  return (
    // <div className="w-2 h-2 bg-primary rounded-full border-2 border-[#c2d0f8]"></div>
    <div className="flex flex-col gap-y-3 items-center lg:flex-row justify-center md:gap-x-8 w-full">
      <div className="bg-white rounded-[10px] p-3 shadow-md w-fit md:p-6">
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
          <h1 className="text-base font-semibold">Pick-Up</h1>
        </div>
        <div className="flex flex-row gap-x-1 lg:gap-x-6">
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
          <hr className="mx-2 border-0 border-l-[1px] h-auto" />
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
      <div className="bg-primary w-fit h-fit p-3 rounded-[10px] shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
      <div className="bg-white rounded-[10px] p-3 shadow-md w-fit md:p-6">
        <p className="inline-flex items-center gap-x-2 font-semibold">
          <div className="w-3 h-3 bg-primary rounded-full border-2 border-[#c2d0f8]"></div>
          Drop - Off
        </p>
        <div className="flex flex-row gap-x-1 lg:gap-x-6">
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
          <hr className="mx-2 border-0 border-l-[1px] h-auto" />
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
    </div>
  );
}

export default PickOrDrop;
