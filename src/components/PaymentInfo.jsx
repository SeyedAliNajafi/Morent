import React from "react";

function PaymentInfo() {
  return (
    <div className="col-span-3 flex flex-col gap-y-7">
      <div>
        <BillingInfo />
      </div>
      <div>
        <RentalInfo />
      </div>
      <div>
        <PaymentMethod />
      </div>
      <div>
        <Confirmation />
      </div>
    </div>
  );
}

export default PaymentInfo;

function BillingInfo() {
  return (
    <div className="bg-white px-5 py-4 md:px-8 md:py-6 rounded-[10px]">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-base font-bold md:text-xl">Billing Info</h4>
            <p className="text-xs text-gray-400">
              Please enter your billing info
            </p>
          </div>
          <p className="text-xs text-gray-400">Step 1 of 4</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full">
            <div className="flex flex-col gap-3 w-full mb-3">
              <h5 className="text-sm md:text-base font-semibold">Name</h5>
              <input
                className="bg-slate-200 p-4 rounded-[10px] outline-none"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <h5 className="text-sm md:text-base font-semibold">Address</h5>
              <input
                className="bg-slate-200 p-4 rounded-[10px] outline-none"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3 w-full mb-3">
              <h5 className="text-sm md:text-base font-semibold">
                Phone Number
              </h5>
              <input
                className="bg-slate-200 p-4 rounded-[10px] outline-none"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <h5 className="text-sm md:text-base font-semibold">
                Town / City
              </h5>
              <input
                className="bg-slate-200 p-4 rounded-[10px] outline-none"
                type="text"
                placeholder="Town or city"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RentalInfo() {
  return (
    <div className="bg-white px-5 py-4 md:px-8 md:py-6 gap-y-3 rounded-[10px]">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-base font-bold md:text-xl">Rental Info</h4>
            <p className="text-xs text-gray-400">
              Please select your rental date
            </p>
          </div>
          <p className="text-xs text-gray-400">Step 2 of 4</p>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1 mb-3 ">
              <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <h1 className="text-base font-semibold">Pick-Up</h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full">
                <div className="flex flex-col gap-3 w-full mb-3">
                  <h5 className="text-sm md:text-base font-semibold">
                    Locations
                  </h5>
                  <select
                    className="outline-none bg-slate-200 p-4 rounded-[10px]"
                    disabled
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h5 className="text-sm md:text-base font-semibold">Time</h5>
                  <select
                    className="outline-none bg-slate-200 p-4 rounded-[10px] "
                    disabled
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full mb-3">
                <h5 className="text-sm md:text-base font-semibold">Date</h5>
                <select
                  className="outline-none bg-slate-200 p-4 rounded-[10px] "
                  disabled
                >
                  <option>Select your date</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 md:mt-5">
            <div className="flex items-center gap-x-1 mb-3 ">
              <div className="w-4 h-4 rounded-full bg-[#cee7fe] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#54a6ff]" />
              </div>
              <h1 className="text-base font-semibold">Drop-Off</h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full">
                <div className="flex flex-col gap-3 w-full mb-3">
                  <h5 className="text-sm md:text-base font-semibold">
                    Locations
                  </h5>
                  <select
                    className="outline-none bg-slate-200 p-4 rounded-[10px]"
                    disabled
                  >
                    <option>Select your city</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <h5 className="text-sm md:text-base font-semibold">Time</h5>
                  <select
                    className="outline-none bg-slate-200 p-4 rounded-[10px] "
                    disabled
                  >
                    <option>Select your time</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full mb-3">
                <h5 className="text-sm md:text-base font-semibold">Date</h5>
                <select
                  className="outline-none bg-slate-200 p-4 rounded-[10px] "
                  disabled
                >
                  <option>Select your date</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="bg-white px-5 py-4 md:px-8 md:py-6 rounded-[10px]">
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-base font-bold md:text-xl">Payment Method</h4>
            <p className="text-xs text-gray-400">
              Please enter your payment method
            </p>
          </div>
          <p className="text-xs text-gray-400">Step 3 of 4</p>
        </div>
        <div className="bg-slate-200 p-3 rounded-[10px]">
          <div className="flex justify-between mb-3">
            <div className="flex items-center gap-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <h4 className="text-base font-semibold">Credit Card</h4>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="92"
                height="20"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <g clip-path="url(#b)">
                    <path
                      fill="#00579F"
                      d="M20.8 17.77H16.91l2.432-15.49h3.888L20.8 17.77ZM34.895 2.66A9.339 9.339 0 0 0 31.407 2c-3.84 0-6.544 2.109-6.56 5.124-.032 2.225 1.936 3.46 3.408 4.202 1.504.758 2.015 1.253 2.015 1.928-.015 1.038-1.215 1.516-2.335 1.516-1.552 0-2.384-.246-3.648-.824l-.512-.247-.544 3.477c.912.428 2.592.807 4.336.824 4.08 0 6.737-2.076 6.768-5.29.016-1.763-1.023-3.114-3.264-4.218-1.36-.708-2.193-1.186-2.193-1.911.016-.66.705-1.335 2.24-1.335a6.443 6.443 0 0 1 2.896.593l.352.165.529-3.345ZM40.064 12.282c.32-.89 1.552-4.333 1.552-4.333-.016.033.32-.907.512-1.483L42.4 7.8s.736 3.708.896 4.482h-3.232Zm4.8-10.001h-3.008c-.928 0-1.632.28-2.032 1.285l-5.776 14.203h4.08l.816-2.323h4.992c.112.543.464 2.323.464 2.323H48L44.863 2.281ZM13.663 2.28 9.855 12.843 9.44 10.7C8.735 8.23 6.527 5.543 4.063 4.208l3.488 13.545h4.112L17.775 2.28h-4.112Z"
                    />
                    <path
                      fill="#F4A622"
                      d="M6.32 2.28H.064L0 2.595C4.88 3.879 8.112 6.977 9.44 10.7L8.08 3.583c-.224-.99-.912-1.27-1.76-1.302Z"
                    />
                  </g>
                  <path
                    fill="#FF5F00"
                    d="M80.326 2.139h-8.653V17.86h8.653V2.14Z"
                  />
                  <path
                    fill="#EB001B"
                    d="M72.223 10c0-3.194 1.483-6.028 3.763-7.861A9.758 9.758 0 0 0 69.888 0C64.422 0 60 4.472 60 10s4.422 10 9.888 10a9.759 9.759 0 0 0 6.098-2.139c-2.28-1.805-3.763-4.667-3.763-7.861Z"
                  />
                  <path
                    fill="#F79E1B"
                    d="M92 10c0 5.528-4.422 10-9.888 10a9.759 9.759 0 0 1-6.098-2.139c2.307-1.833 3.763-4.667 3.763-7.861s-1.483-6.028-3.763-7.861A9.758 9.758 0 0 1 82.112 0C87.578 0 92 4.5 92 10Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h92v20H0z" />
                  </clipPath>
                  <clipPath id="b">
                    <path fill="#fff" d="M0 2h48v16H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full">
              <div className="flex flex-col gap-3 w-full mb-3">
                <h5 className="text-sm md:text-base font-semibold">
                  Card Number
                </h5>
                <input
                  className="bg-white p-4 rounded-[10px] outline-none"
                  type="text"
                  placeholder="Card Number"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h5 className="text-sm md:text-base font-semibold">
                  Card Holder
                </h5>
                <input
                  className="bg-white p-4 rounded-[10px] outline-none"
                  type="text"
                  placeholder="Card Holder"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-3 w-full mb-3">
                <h5 className="text-sm md:text-base font-semibold">
                  Expration Date
                </h5>
                <input
                  className="bg-white p-4 rounded-[10px] outline-none"
                  type="text"
                  placeholder="DD / MM YY"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h5 className="text-sm md:text-base font-semibold">CVC</h5>
                <input
                  className="bg-white p-4 rounded-[10px] outline-none"
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 p-3 rounded-[10px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#fff"
                      stroke="#90A3BF"
                      stroke-linecap="round"
                      stroke-linejoin="bevel"
                      stroke-width="1.5"
                      d="M7.873 14.58a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h6 className="text-sm font-semibold md:text-base">PayPal</h6>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="20"
                fill="none"
              >
                <path
                  fill="#022273"
                  d="M35.898 4.473h-5.313a.817.817 0 0 0-.48.15.613.613 0 0 0-.249.381l-2.149 11.623a.324.324 0 0 0 .012.161.364.364 0 0 0 .09.143.444.444 0 0 0 .151.097.51.51 0 0 0 .186.035h2.536a.817.817 0 0 0 .48-.151.612.612 0 0 0 .25-.381l.579-3.135a.613.613 0 0 1 .249-.381.816.816 0 0 1 .48-.151H34.4c3.5 0 5.52-1.445 6.047-4.308.238-1.253.01-2.237-.677-2.926-.755-.757-2.095-1.157-3.873-1.157Zm.613 4.244c-.29 1.627-1.747 1.627-3.155 1.627h-.802l.562-3.037a.368.368 0 0 1 .15-.229.49.49 0 0 1 .288-.09h.367c.96 0 1.864 0 2.332.466.279.279.364.692.258 1.263Zm15.267-.052h-2.544a.49.49 0 0 0-.287.09.368.368 0 0 0-.15.229l-.112.607-.178-.22c-.551-.682-1.78-.91-3.005-.91-2.811 0-5.213 1.817-5.68 4.365-.243 1.27.102 2.486.948 3.334.775.78 1.884 1.104 3.204 1.104 2.265 0 3.521-1.242 3.521-1.242l-.113.603a.324.324 0 0 0 .01.161.363.363 0 0 0 .09.143.444.444 0 0 0 .151.098.509.509 0 0 0 .185.035h2.292a.817.817 0 0 0 .48-.151.613.613 0 0 0 .25-.381L52.213 9.1a.322.322 0 0 0-.01-.161.361.361 0 0 0-.09-.143.44.44 0 0 0-.15-.097.506.506 0 0 0-.185-.035Zm-3.546 4.224c-.245 1.24-1.399 2.073-2.87 2.073-.739 0-1.33-.202-1.708-.585-.376-.38-.519-.922-.4-1.525.23-1.23 1.403-2.09 2.852-2.09.722 0 1.31.205 1.696.592.388.39.541.935.43 1.535Zm17.096-4.224H62.77c-.12 0-.24.026-.346.074a.715.715 0 0 0-.265.202l-3.526 4.431-1.495-4.258a.643.643 0 0 0-.267-.324.828.828 0 0 0-.441-.125h-2.512c-.07 0-.14.014-.203.042a.43.43 0 0 0-.158.116.349.349 0 0 0-.078.165c-.01.06-.004.12.018.177l2.816 7.05-2.647 3.188a.332.332 0 0 0-.032.392.41.41 0 0 0 .163.15.5.5 0 0 0 .23.055h2.554c.119 0 .236-.024.342-.072a.713.713 0 0 0 .264-.198l8.503-10.472a.332.332 0 0 0 .029-.39.41.41 0 0 0-.163-.148.501.501 0 0 0-.23-.055Z"
                />
                <path
                  fill="#167FC4"
                  d="M73.788 4.473h-5.313a.817.817 0 0 0-.48.151.613.613 0 0 0-.25.38l-2.148 11.623a.324.324 0 0 0 .011.162.363.363 0 0 0 .09.142.44.44 0 0 0 .15.098.507.507 0 0 0 .186.034h2.726a.571.571 0 0 0 .336-.106.429.429 0 0 0 .174-.266l.61-3.295a.613.613 0 0 1 .249-.38.818.818 0 0 1 .48-.152h1.68c3.5 0 5.52-1.445 6.048-4.308.238-1.252.01-2.236-.678-2.926-.755-.756-2.093-1.157-3.871-1.157Zm.613 4.245c-.29 1.627-1.746 1.627-3.156 1.627h-.8l.563-3.038a.367.367 0 0 1 .149-.228.488.488 0 0 1 .287-.09h.368c.958 0 1.864 0 2.332.466.279.278.363.692.257 1.263Zm15.267-.052h-2.543a.488.488 0 0 0-.288.09.366.366 0 0 0-.148.229l-.113.607-.179-.22c-.55-.682-1.778-.91-3.004-.91-2.811 0-5.211 1.816-5.679 4.364-.242 1.272.102 2.487.947 3.335.777.779 1.884 1.104 3.204 1.104 2.265 0 3.522-1.243 3.522-1.243l-.114.603a.324.324 0 0 0 .011.162.365.365 0 0 0 .09.143.443.443 0 0 0 .151.098.507.507 0 0 0 .186.035h2.291a.817.817 0 0 0 .48-.152.613.613 0 0 0 .249-.38l1.375-7.43a.325.325 0 0 0-.011-.16.365.365 0 0 0-.09-.143.444.444 0 0 0-.152-.098.509.509 0 0 0-.185-.034ZM86.12 12.89c-.243 1.24-1.399 2.072-2.87 2.072-.737 0-1.33-.202-1.708-.585-.376-.38-.518-.922-.4-1.525.231-1.23 1.403-2.089 2.852-2.089.722 0 1.31.205 1.696.591.39.39.543.936.43 1.536Zm6.546-8.098-2.18 11.835a.323.323 0 0 0 .01.162.363.363 0 0 0 .09.142.441.441 0 0 0 .15.098.507.507 0 0 0 .186.034h2.192c.364 0 .674-.225.73-.532l2.15-11.622a.323.323 0 0 0-.011-.161.363.363 0 0 0-.09-.143.442.442 0 0 0-.15-.097.508.508 0 0 0-.186-.035h-2.455a.49.49 0 0 0-.287.09.368.368 0 0 0-.15.23Z"
                />
                <path
                  fill="#022273"
                  d="m5.643 19.322.407-2.202-.905-.018H.823L3.826.856A.204.204 0 0 1 3.91.73a.272.272 0 0 1 .16-.05h7.287c2.419 0 4.088.43 4.96 1.277.408.397.669.813.794 1.27.133.48.135 1.053.006 1.753l-.01.05v.449l.41.197c.311.135.591.317.826.538.35.34.576.772.672 1.285.098.526.066 1.153-.096 1.863-.186.817-.488 1.528-.895 2.11-.359.521-.842.973-1.418 1.325a6.267 6.267 0 0 1-1.909.735c-.704.157-1.506.235-2.386.235h-.567c-.406 0-.8.125-1.109.348a1.426 1.426 0 0 0-.578.88l-.043.199-.717 3.88-.033.142c-.008.046-.023.068-.045.083a.133.133 0 0 1-.075.024h-3.5Z"
                />
                <path
                  fill="#167FC4"
                  d="M17.903 5.082c-.022.118-.047.24-.075.364-.96 4.21-4.248 5.663-8.447 5.663H7.244c-.514 0-.947.319-1.027.75l-1.094 5.923-.31 1.678a.4.4 0 0 0 .014.2.45.45 0 0 0 .11.176.55.55 0 0 0 .187.121.63.63 0 0 0 .229.043h3.791c.45 0 .83-.278.902-.656l.037-.165.714-3.865.045-.212c.07-.379.453-.657.902-.657h.567c3.673 0 6.549-1.273 7.39-4.955.35-1.538.169-2.822-.76-3.726a3.616 3.616 0 0 0-1.038-.682Z"
                />
                <path
                  fill="#022273"
                  d="M16.897 4.74a8.711 8.711 0 0 0-.935-.178 13.88 13.88 0 0 0-1.884-.117H8.367c-.218 0-.428.066-.593.186a.756.756 0 0 0-.308.471l-1.215 6.565-.035.192a.861.861 0 0 1 .35-.537 1.15 1.15 0 0 1 .676-.213H9.38c4.199 0 7.486-1.455 8.447-5.663a8.15 8.15 0 0 0 .075-.365 5.637 5.637 0 0 0-1.005-.342Z"
                />
                <path
                  fill="#022273"
                  d="M7.468 5.102a.754.754 0 0 1 .308-.47c.165-.121.375-.187.593-.186h5.71c.677 0 1.309.037 1.885.117.39.052.775.13 1.15.234.284.08.547.175.79.284.287-1.555-.002-2.614-.987-3.573C15.83.452 13.868 0 11.358 0H4.072c-.513 0-.95.318-1.03.75L.009 17.164a.459.459 0 0 0 .015.229.514.514 0 0 0 .127.202.625.625 0 0 0 .213.138c.083.032.172.05.262.05h4.499l1.13-6.114 1.214-6.566Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="bg-slate-200 p-3 rounded-[10px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#fff"
                      stroke="#90A3BF"
                      stroke-linecap="round"
                      stroke-linejoin="bevel"
                      stroke-width="1.5"
                      d="M7.873 14.58a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h6 className="text-sm font-semibold md:text-base">Bitcoin</h6>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="20"
                fill="none"
              >
                <path
                  fill="#FCA014"
                  d="M19.332 12.42c-1.311 5.356-6.636 8.617-11.894 7.28C2.182 18.366-1.017 12.94.294 7.583 1.604 2.224 6.929-1.036 12.185.299c5.258 1.336 8.457 6.763 7.147 12.12Z"
                />
                <path
                  fill="#fff"
                  d="M14.14 8.575c.195-1.331-.8-2.046-2.159-2.523l.441-1.803-1.077-.273-.429 1.755c-.283-.072-.574-.14-.863-.207l.433-1.767-1.076-.273-.442 1.802a35.513 35.513 0 0 1-.687-.165v-.006l-1.484-.378-.286 1.172s.798.187.782.198c.436.111.515.405.501.639l-.502 2.053c.03.008.069.02.112.037l-.114-.03-.704 2.877c-.053.135-.189.338-.493.261.01.016-.783-.2-.783-.2l-.535 1.257 1.402.356c.26.066.516.136.767.202L6.5 15.382l1.075.273.441-1.803c.294.08.58.156.859.226l-.44 1.796 1.077.273.445-1.82c1.836.354 3.217.212 3.798-1.48.468-1.363-.023-2.149-.99-2.661.704-.166 1.234-.637 1.376-1.611Zm-2.46 3.515c-.333 1.362-2.585.626-3.315.441l.592-2.415c.73.186 3.07.553 2.722 1.974Zm.332-3.535c-.303 1.24-2.177.61-2.785.455l.536-2.19c.608.154 2.566.442 2.25 1.735Z"
                />
                <g fill="#1A202C" opacity=".5">
                  <path d="M28.76 6.05c.795 0 1.482.145 2.06.43.58.288 1.06.676 1.444 1.164.38.491.661 1.065.843 1.722a8 8 0 0 1 .272 2.126c0 1.165-.21 2.265-.632 3.303a8.586 8.586 0 0 1-1.727 2.709 8.118 8.118 0 0 1-2.583 1.82c-.992.447-2.07.671-3.227.671-.15 0-.413-.004-.785-.012a11.264 11.264 0 0 1-1.277-.113c-.481-.068-.99-.17-1.528-.305a7.568 7.568 0 0 1-1.528-.557L24.389.61l3.849-.608-1.539 6.529c.33-.151.661-.268.993-.354a4.33 4.33 0 0 1 1.067-.128Zm-3.23 10.834c.58 0 1.127-.145 1.64-.43a4.336 4.336 0 0 0 1.33-1.152 5.843 5.843 0 0 0 1.205-3.533c0-.81-.133-1.441-.398-1.898-.264-.454-.754-.683-1.465-.683-.233 0-.534.045-.906.126a2.247 2.247 0 0 0-1.008.533L24.29 16.78c.099.017.186.034.26.05a2.644 2.644 0 0 0 .534.053h.447ZM37.37 19.643h-3.676L36.8 6.332H40.5l-3.13 13.311ZM39.16 4.71c-.514 0-.979-.156-1.392-.467-.416-.31-.622-.788-.622-1.43 0-.355.07-.686.21-1 .142-.312.328-.581.56-.81.233-.227.502-.408.807-.544.307-.135.634-.202.983-.202.512 0 .975.156 1.39.467.412.314.62.791.62 1.43 0 .356-.07.689-.212 1.001A2.634 2.634 0 0 1 40.14 4.51a2.383 2.383 0 0 1-.98.201ZM43.721 3.015l3.85-.608-.945 3.924h4.124l-.745 3.087h-4.099l-1.091 4.656c-.101.388-.158.75-.174 1.088-.018.338.024.629.123.873.099.246.277.435.534.569.257.135.624.204 1.105.204.397 0 .783-.039 1.157-.115.371-.075.747-.18 1.128-.316l.274 2.886c-.496.186-1.034.346-1.614.48-.58.136-1.268.202-2.062.202-1.142 0-2.028-.173-2.658-.517-.63-.346-1.075-.82-1.342-1.42-.263-.596-.38-1.285-.348-2.06a13.57 13.57 0 0 1 .348-2.456l2.435-10.477Z" />
                </g>
                <path
                  fill="#1A202C"
                  d="M50.589 14.328c0-1.147.182-2.228.546-3.24a8.002 8.002 0 0 1 1.566-2.66 7.337 7.337 0 0 1 2.472-1.796c.966-.437 2.048-.658 3.24-.658.746 0 1.413.072 2 .216a7.995 7.995 0 0 1 1.602.569l-1.267 2.937a11.716 11.716 0 0 0-1.03-.366c-.357-.112-.79-.166-1.305-.166-1.227 0-2.197.431-2.918 1.29-.72.86-1.082 2.017-1.082 3.469 0 .86.182 1.556.548 2.088.364.532 1.035.797 2.011.797.481 0 .946-.052 1.391-.152a6.766 6.766 0 0 0 1.193-.379l.275 3.011c-.465.184-.978.35-1.54.495-.564.14-1.235.213-2.013.213-1.027 0-1.897-.153-2.608-.454-.711-.307-1.3-.713-1.762-1.228a4.65 4.65 0 0 1-1.007-1.811 7.56 7.56 0 0 1-.312-2.175ZM66.918 19.996c-.877 0-1.639-.136-2.285-.406a4.22 4.22 0 0 1-1.601-1.138 4.946 4.946 0 0 1-.956-1.733c-.217-.667-.322-1.405-.322-2.213 0-1.014.16-2.028.483-3.039a8.659 8.659 0 0 1 1.43-2.732 7.673 7.673 0 0 1 2.308-1.99c.909-.513 1.954-.77 3.128-.77.861 0 1.62.136 2.275.406.652.269 1.19.65 1.614 1.138.42.49.74 1.067.954 1.734.216.665.323 1.405.323 2.214 0 1.011-.158 2.025-.47 3.039a8.838 8.838 0 0 1-1.392 2.732 7.33 7.33 0 0 1-2.297 1.986c-.918.514-1.983.772-3.192.772Zm1.838-10.831c-.545 0-1.027.16-1.44.48a4.112 4.112 0 0 0-1.041 1.215 6.065 6.065 0 0 0-.636 1.607 7.05 7.05 0 0 0-.21 1.657c0 .845.134 1.503.397 1.976.266.471.745.708 1.44.708.548 0 1.027-.16 1.442-.482a4.13 4.13 0 0 0 1.042-1.214 6.084 6.084 0 0 0 .635-1.607c.14-.581.21-1.135.21-1.658 0-.842-.133-1.502-.398-1.975-.265-.47-.746-.707-1.441-.707ZM78.276 19.643h-3.68l3.105-13.311h3.703l-3.128 13.311ZM80.062 4.71c-.513 0-.978-.156-1.39-.467-.414-.31-.622-.788-.622-1.43 0-.355.072-.686.212-1A2.637 2.637 0 0 1 79.628.458c.306-.134.633-.201.98-.201.514 0 .978.156 1.392.467.413.314.622.791.622 1.43 0 .356-.074.689-.213 1.001a2.627 2.627 0 0 1-.557.81 2.725 2.725 0 0 1-.807.544 2.39 2.39 0 0 1-.983.201ZM84.054 6.937c.28-.083.591-.183.93-.292.34-.108.72-.21 1.144-.3.42-.095.894-.171 1.415-.23a15.61 15.61 0 0 1 1.774-.09c1.94 0 3.276.575 4.014 1.722.737 1.148.865 2.718.386 4.708l-1.69 7.187h-3.701l1.639-7.036c.1-.44.178-.864.236-1.28.059-.41.055-.773-.013-1.087a1.306 1.306 0 0 0-.458-.76c-.243-.193-.61-.29-1.106-.29-.48 0-.967.052-1.465.153l-2.41 10.3h-3.702l3.007-12.705Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
function Confirmation() {
  return (
    <div className="bg-white px-5 py-4 md:px-8 md:py-6 gap-y-3">
      <div className="flex flex-col gap-y-4 md:gap-y-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-base font-bold md:text-xl">Confirmation</h4>
            <p className="text-xs text-gray-400">We are getting to the end.</p>
          </div>
          <p className="text-xs text-gray-400">Step 4 of 4</p>
        </div>
        <div className="bg-slate-200 p-3 rounded-[10px]">
          <div className="flex gap-x-2 items-center">
            <input type="checkbox" className="outline-none md:size-5" />
            <p className="text-xs md:text-base md:font-semibold">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </p>
          </div>
        </div>
        <div className="bg-slate-200 p-3 rounded-[10px]">
          <div className="flex gap-x-2 items-center">
            <input type="checkbox" className="outline-none md:size-5" />
            <p className="text-xs md:text-base md:font-semibold">
              I agree with our terms and conditions and privacy policy.
            </p>
          </div>
        </div>
        <div>
          <button className="btn-primary">Rental Now</button>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <path
              stroke="#1A202C"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M25.053 5.96a9.8 9.8 0 0 1-2.667-.213 9.947 9.947 0 0 1-2.92-1.587 19.873 19.873 0 0 1-2.133-1.747 1.533 1.533 0 0 0-2.093 0 24.1 24.1 0 0 1-2.054 1.72 10.36 10.36 0 0 1-2.933 1.627c-.997.225-2.02.306-3.04.24a22.96 22.96 0 0 1-2.493-.24 1.52 1.52 0 0 0-1.734 1.333c-.066.64-.24 2.307-.32 4.16-.112 1.852.005 3.71.347 5.534a17.332 17.332 0 0 0 5.133 7.8 42.783 42.783 0 0 0 6.16 4.826 3.533 3.533 0 0 0 4 0 42.504 42.504 0 0 0 5.814-4.893 17.733 17.733 0 0 0 4.84-7.68"
            />
            <path
              stroke="#3563E9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="m14.666 14.667 3.814 3.813a.253.253 0 0 0 .373 0L29.333 8"
            />
          </svg>
        </span>
        <div>
          <p className="font-bold">All your data are safe</p>
          <p className="text-xs md:text-sm text-gray-400">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  );
}
