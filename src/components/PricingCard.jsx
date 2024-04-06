import React from "react";
import { Link } from "react-router-dom";
{
  /* <div className="px-12" data-aos="fade-down" data-aos-delay="600">
<div className="flex justify-center gap-20">
  

  <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
    <div className="m-2 text-justify text-sm">
      <h2 className="font-semibold my-4 text-2xl text-center text-blue-900 ">
        AccountEdge Dedicated Hosting
      </h2>{" "}
      <br />
      <div className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out">
        <h1 className="font-semibold my-4 text-3xl text-center">
          $750 /Year{" "}
        </h1>
        <br />
        <br />
      </div>
      <p className=" my-4 text-base text-center">5 User</p>
      <p className=" my-4 text-base text-center">
        Browser/RDP Access
      </p>
      <p className=" my-4 text-base text-center">One Company</p>
      <p className=" my-4 text-base text-center">
        Dedicated Server
      </p>
      <p className=" my-4 text-base text-center">
        Free Technical Support
      </p>
    </div>
    <Link
      to="/get-demo"
      className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
    >
      Schedule Demo
      <svg
        className="w-4 h-4 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  </div>
</div>
</div> */
}

const PricingCard = (props) => {
  return (
    <>
      <div className="bg-white transition-all ease-in-out duration-400 text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group">
        <div className="text-center flex flex-col items-center gap-y-6 lg:gap-y-10">
          <h2 className="font-semibold w-2/3 text-2xl text-center text-blue-900 ">
            {props.heading}
          </h2>
          <div className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out">
            <h1 className="font-semibold text-3xl ">{props.annual}</h1>
          </div>
          <p className="flex flex-col gap-y-2.5 text-base ">
            {props.advantages.map((advantage, index) => (
              <span key={index}>{advantage}</span>
            ))}
          </p>
          <Link
            to="/get-demo"
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
          >
            Schedule Demo
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
