import React from "react";

function DashboardSidebar({ isOpen }) {
  return (
    <div
      className={`bg-white h-full w-screen lg:w-[270px] col-span-3 lg:block px-5 py-4 md:px-8 md:py-6 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-y-7">
        <div>
          <h6 className="text-xs text-gray-400 mb-4">MAIN MENU</h6>
          <div className="flex gap-x-2 p-4 rounded-lg bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#fff"
                stroke="#fff"
                d="M10.043 3.15c1.084-.871 2.825-.866 3.925.01v.001l6.546 5.237h.002c.377.31.704.791.914 1.343.211.551.29 1.129.216 1.61l-1.259 7.533v.002c-.25 1.433-1.644 2.614-3.087 2.614H6.7c-1.465 0-2.828-1.152-3.077-2.604l-1.26-7.538v-.002c-.082-.484-.008-1.063.202-1.614.21-.551.54-1.033.927-1.341l6.55-5.25ZM12 19.25c.686 0 1.25-.564 1.25-1.25v-3c0-.686-.564-1.25-1.25-1.25s-1.25.564-1.25 1.25v3c0 .686.564 1.25 1.25 1.25Z"
              />
            </svg>
            Dashboard
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1M12 3v2M10.5 5h3M6 15h3M15 15h3"
              />
            </svg>
            Car Rent
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 22h18M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1ZM12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1ZM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z"
              />
            </svg>
            Insight
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.5 13.24v-1.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76h-5.48"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M3 16.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M4.22 15.28 3 16.5l1.22 1.22M9.5 21.78H4.16c-.64 0-1.16-.52-1.16-1.16v-1.28"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="m8.281 23 1.22-1.22-1.22-1.22"
              />
            </svg>
            Reimburse
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
              />
            </svg>
            Inbox
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
              />
            </svg>
            Calender
          </div>
        </div>
        <div>
          <h6 className="text-xs text-gray-400 mb-4">PREFERENCES</h6>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
            Settings
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v5M11.995 16h.009"
              />
            </svg>
            Help & Center
          </div>
          <div className="flex gap-x-2 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
              />
              <path
                stroke="#90A3BF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
              />
            </svg>
            Dark Mode
          </div>
        </div>
        <div className="flex gap-x-2 p-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54"
              stroke="#90A3BF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0001 12H3.62012"
              stroke="#90A3BF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.85 8.64999L2.5 12L5.85 15.35"
              stroke="#90A3BF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Log Out
        </div>
      </div>
    </div>
  );
}
export default DashboardSidebar;
