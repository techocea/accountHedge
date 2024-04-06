import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full h-24 z-30 bg-white transition duration-300 ease-in-out shadow-slate-600 ${
        !top && "bg-white shadow-lg "
      }`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 max-md:px-4">
        <div className="flex justify-center items-center text-center font-semibold">
          <HashLink smooth to="#home">
            <div className="flex flex-col bg-blue-900 p-2 gap-y-1 rounded-l-sm rounded-bl-2xl rounded-tr-2xl">
              <h1 className="font-extrabold text-xl text-white">myob</h1>
              <div className="text-xs text-white ">Cloud Accounting</div>
            </div>
          </HashLink>
        </div>
        <div className="group flex flex-col items-center">
          <div className="flex items-center max-md:hidden">
            <NavLinks />
          </div>
          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-0 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
              <div className="max-md:flex max-md:flex-col max-md:gap-y-6">
                <Link
                  className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
                  to="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl max-md:w-full"
                  smooth
                  to="/get-demo"
                >
                  Demo
                </Link>
              </div>
            </div>
          </div>
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900 z-30 "
            onClick={handleClick}
          >
            <svg
              className="h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="max-md:hidden">
          <Link
            className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
            smooth
            to="/get-demo"
          >
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
