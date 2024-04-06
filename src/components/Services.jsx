import React from "react";
import { serviceData } from "../data";

const Services = () => {
  return (
    <section
      id="services"
      data-aos="zoom-in-down"
      className="bg-gray-100 py-10 lg:py-20 "
    >
      <div className="text-center flex flex-col gap-y-8">
        <div>
          <h2 className="text-center text-3xl text-blue-900 font-bold">
            Why MYOB Cloud Hosting?
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900" />
          </div>
        </div>
        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-medium text-blue-900">
          Transitioning from Startup to Medium Scale, Our Cloud Software
          Solution Stands as a Leader Among Competitors.
        </h2>
        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <div
                className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-4 group  text-center text-sm"
                key={index}
              >
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={service.image}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  {service.heading}
                </h2>
                <p className="text-md font-medium">{service.point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
