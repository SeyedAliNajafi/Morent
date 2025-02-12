import React from "react";

function SideBar({ isOpen }) {
  return (
    <div
      className={`bg-white h-full w-screen lg:w-[270px] col-span-3 lg:block px-5 py-4 md:px-8 md:py-6 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* {content} */}
    </div>
  );
}

export default SideBar;
