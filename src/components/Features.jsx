import React from "react";
import { Link } from "react-router-dom";
import { featuresData } from "../data";

const Features = () => {
  return (
    <>
      <div className="mt-10 lg:mt-20" id="features">
        <h2 className="text-center text-3xl text-blue-900  font-bold">
          Features
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900" />
        </div>
        <div data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 m-10 lg:m-20 h-full">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg w-full shadow-2xl min-h-max"
              >
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-lg md:text-2xl h-12">
                    {feature.heading}
                  </h4>
                  <p className="text-sm font-medium leading-normal">
                    {feature.point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
