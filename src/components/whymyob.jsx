import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const Whymyob = () => {
  return (
    <>
      <div className="max-w-7xl h-5/6" id="why-us">
        <div
          className="flex flex-col-reverse lg:flex-row p-8  max-md:p-5 justify-between lg:text-left"
          data-aos="zoom-out"
        >
          <div className="flex flex-col gap-y-8 justify-center">
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
            <h3 className="text-3xl text-blue-900 font-bold">
              Why AccountEdge Pro Hosting?
            </h3>
            <div>
              Not only do AccountEdge Pro customers enjoy powerful, easy-to-use
              software that supports them to efficiently run their business – on
              average, our customers save up to 55% compared to other popular
              accounting software.
              <br />
              <br /> Investing in advanced accounting software is a strategic
              move for businesses looking to enhance financial efficiency,
              reduce manual errors, and gain real-time insights. Embrace the
              digital transformation in financial management and empower your
              team to focus on strategic initiatives that drive business growth.
              Choose a reliable accounting software solution that aligns with
              your business needs and sets the foundation for a more streamlined
              and agile financial future.
            </div>
            <div className="flex max-md:flex-col pl-6 gap-x-20">
              <ul className="max-md:pl-5 marker:text-3xl list-image-bullet">
                <li className="pl-2">Easy to use</li>
                <li className="pl-2">User friendly Interface</li>
                <li className="pl-2">Complete Accounting</li>
                <li className="pl-2">Serial / Warranty Tracking </li>
                <li className="pl-2">
                  Tax (Purchase / Sales / and all transaction)
                </li>
              </ul>
              <ul className="max-md:pl-5 marker:text-3xl list-image-bullet">
                <li className="pl-2">Payable / Receivable </li>
                <li className="pl-2">Cash / Bank Management </li>
                <li className="pl-2">Inventory Management </li>
                <li className="pl-2">General Ledger</li>
                <li className="pl-2">Reporting and More...</li>
              </ul>
            </div>
            <div className="max-md:hidden">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whymyob;
