import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";
import Faqsection from "./side_by_side";
import Faqsupport from "./offset_with_supporting_text";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  return (
    <div id="faq" className="mt-8 bg-gray-100">
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <img
          className="absolute top-0 left-0 mt-44"
          src="saturn-assets/images/faq/light-blue-left.png"
          alt=""
        />
        <img
          className="absolute top-0 right-0 mt-10"
          src="saturn-assets/images/faq/star-right.svg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-900 bg-blue-50 rounded-full">
                FREQUENTLY ASK QUESTIONS
              </span>
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold  text-blue-900">
                <span>You ask? </span>
                <span className="font-serif italic"> We answer</span>
              </h1>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">
                        What is MYOB aka Manage Your Own Business Cloud
                        Accounting?
                      </h3>
                      <p className="text-lg text-gray-500">
                        &nbsp; AccountEdge Pro Cloud accounting uses accounting
                        software hosted on a safe and high speed cloud server.
                        Small business teams can store and access accounting
                        systems, reports, and financial documents from the
                        company computer and anywhere you have an internet
                        connection.{" "}
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-blue-50">
                        <svg
                          width="17"
                          height="3"
                          viewbox="0 0 17 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        Do I need to install software to do my accounting
                        online?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        &nbsp; No, AccountEdge Pro Cloud accounting only
                        requires a browser and a constant internet connection to
                        handle your accounting. There is no software to be
                        downloaded or settings on your computer to be changed
                        whatsoever. You simply open up the AccountEdge Pro Cloud
                        accounting software’s website in your browser, and off
                        you go.{" "}
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="px-8 py-10 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        Can I use the AccountEdge Pro Cloud accounting in
                        collaboration with my bookkeeper?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        Yes, you can, just give him/her access to your account
                        and you can start working together. Thus you can speed
                        up the work and make tax preparation and filing faster
                        and easier.{" "}
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        Are there discounts for the software?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        Yes, there are. Usually the first three to twelve months
                        of use has a discounted monthly subscription fee which
                        only applies for new customers. However, there is the
                        option to choose the annual subscription fee which also
                        has a reduced price tag; the only downside is that you
                        have to pay in one lump sum and in advance for the
                        service.{" "}
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        Is there any minimum contract for use AccountEdge Pro
                        Cloud accounting?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        You may cancel the subscription at any time.
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="px-8 py-10 bg-white rounded-3xl shadow-lg">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        Do I need to bring my own license?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        Not at all, you pay for our service until your
                        subscription plan expired.
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
                <div className="px-8 py-10 bg-white rounded-3xl shadow-lg mt-10">
                  <button className="flex group w-full items-start justify-between text-left">
                    <div className="max-w-xl pr-5">
                      <h3 className="text-xl font-semibold text-black group-hover:text-blue-900">
                        What are the other services do you provide?
                      </h3>
                      <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                        We provide hosting solutions, software development, Add
                        on programs , Web Application Development..
                      </p>
                    </div>
                    <div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-blue-50 transition duration-200">
                        <span className="hidden group-hover:block">
                          <svg
                            width="17"
                            height="3"
                            viewbox="0 0 17 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="group-hover:hidden">
                          <svg
                            width="14"
                            height="14"
                            viewbox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                              fill="blue"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
