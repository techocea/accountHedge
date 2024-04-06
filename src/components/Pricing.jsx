import React from "react";
// import img from "../images/web.svg";
// import img2 from "../images/app.svg";
// import img3 from "../images/hosting.svg";
// import img4 from "../images/consultation.svg";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const advantages = [
    {
      id: 1,
      lists: [
        "Single User",
        "Browser/RDP Access",
        "One Company",
        "Shared Server",
        "Free Technical Support",
      ],
    },
    {
      id: 2,
      lists: [
        "5 Users",
        "Browser/RDP Access",
        "One Company",
        " Dedicated Server",
        "Free Technical Support",
      ],
    },
  ];

  return (
    <>
      <section
        id="pricing"
        className="bg-gray-100 p-10 lg:p-20"
        data-aos="zoom-in-down"
      >
        <div className="flex flex-col gap-y-8 lg:gap-y-10">
          <div>
            <h2 className="text-center text-3xl text-blue-900 font-bold">
              Pricing
            </h2>
            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900" />
            </div>
          </div>
          <h2 className="text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
          {/* props */}
          <div className="flex max-md:flex-col justify-center gap-20">
            <PricingCard
              heading="AccoutEdge Shared Hosting"
              annual="$100 /Year"
              advantages={advantages[0].lists}
            />
            <PricingCard
              heading="AccountEdge Dedicated Hosting"
              annual="$750 /Year"
              advantages={advantages[1].lists}
            />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 hidden">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                Why AccountEdge?
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  Not only do AccountEdge customers enjoy powerful, easy-to-use
                  software that supports them to efficiently run their business
                  – on average, our customers save up to 55% compared to other
                  popular accounting software.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Why Vision Hosting?
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Pricing;
