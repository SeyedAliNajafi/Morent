import React, { useState, useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
function NavBar({
  setLikedProducts,
  searchTerm,
  setSearchTerm,
  setPayProduct,
  likedProducts,
  setShowModal,
  showModal
}) {
  const modalContentRef = useRef(null);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleOutsideClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      setShowModal(false);
    }
  };

  let shownCars = likedProducts.map((item) => (
    <Card
      item={item}
      key={item.id}
      likedProducts={likedProducts}
      setLikedProducts={setLikedProducts}
      setPayProduct={setPayProduct}
    />
  ));
  return (
    <header className="bg-white">
      <nav
        className="lg:container px-5 py-4 md:px-8 md:py-6"
      >
        <div className="flex justify-between items-center mb-8 md:m-0">
          <div className="flex items-center gap-x-12 w-[60%]">
            <Link to="/">
              <p className="text-primary text-2xl font-bold md:text-3xl">
                MORENT
              </p>
            </Link>
            <div className="items-center border-[1px] border-gray-300 p-3 rounded-3xl w-full hidden md:flex">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <input
                className="focus:outline-none"
                type="text"
                placeholder="Search something here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Link to="/category" className="ml-auto">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              onClick={handleClick}
              className="border-[1px] border-gray-300 rounded-full p-1 md:block cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-gray-400"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
            {showModal && (
              <div
                className="fixed z-10 inset-0 overflow-y-auto bg-white bg-opacity-50 flex items-center justify-center"
                data-aos="false"
                onClick={handleOutsideClick}
              >
                <div className="flex items-start justify-end min-h-screen pt-24 text-center">
                  <div
                    className="bg-[#F6F7F9] rounded-lg text-left overflow-hidden shadow-xl p-8 w-auto h-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    ref={modalContentRef}
                  >
                    {likedProducts.length === 0 ? (
                      <p>No liked product yet!</p>
                    ) : (
                      shownCars
                    )}
                  </div>
                </div>
              </div>
            )}
            <span className="border-[1px] border-gray-300 rounded-full p-1 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="border-[1px] border-gray-300 rounded-full p-1 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              <Link to="/dashboard">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://morent.ir/assets/pfp.png"
                  alt="user profile picture"
                />
              </Link>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 md:hidden">
          <div className="flex items-center border-[1px] border-gray-300 p-3 rounded-xl w-full">
            <span className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Search something here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link
            to="/category"
            className="border-[1px] border-gray-300 p-3 rounded-xl "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
