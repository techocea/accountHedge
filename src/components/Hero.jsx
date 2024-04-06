import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <div className="hero overflow-hidden" id="home">
        <div
          className="overflow-hidden flex items-center  justify-center p-4 max-md:p-8 h-[calc(100vh-200px)] hero2"
          data-aos="zoom-in"
        >
          <div
            className="flex flex-col gap-y-6 lg:gap-y-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h1 className="lg:w-[1000px] max-md:pb-8 mt-4 md:text-5xl text-2xl capitalize font-bold text-white">
              <Typewriter
                options={{
                  strings: [
                    "Manage Your Own Business with",
                    "AccountEdge Pro Cloud Hosting!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            {/* <h2 className="mb-5 md:text-3xl text-xl font-bold text-blue-900 hidden">
              {" "}
              &nbsp; Budget-Friendly Financial Management:{" "}
            </h2> */}
            <div>
              <h2 className="pb-4 md:text-2xl text-xl font-semibold text-white">
                Unleashing the Power of Affordable Accounting Software.
              </h2>
              <h2 className="md:text-2xl text-xl font-semibold text-white">
                Unlock Your Accounting Potential Anywhere, Anytime, Any Device!
              </h2>
            </div>
            <div className="flex max-md:flex-col items-center gap-x-8 max-md:gap-y-5 max-md:mt-10">
              <HashLink
                to="/#features"
                className="w-auto  max-md:w-full p-3 font-semibold bg-blue-900 text-white "
              >
                Learn More
              </HashLink>
              <Link
                to="/get-demo"
                className="w-auto  max-md:w-full p-3 font-semibold bg-white text-blue-900 "
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
