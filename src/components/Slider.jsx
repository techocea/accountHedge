import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Img1 from "../images/hero/sales-new.png";
import Img2 from "../images/hero/bank-new.png";
import Img3 from "../images/hero/accounts-new.png";
import Img4 from "../images/hero/edge-purchase.png";
import Img5 from "../images/hero/edge-bank.png";
import Img6 from "../images/hero/edge-inventory.png";
import Img7 from "../images/hero/edge-sales.png";

const featuredProducts = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 2000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className="w-full max-md:w-screen h-[500px] select-none relative pt-10"
    >
      <div className="absolute w-full max-md:h-[375px] px-3 flex justify-center items-center">
        <button
          className="max-md:hidden bg-blue-900 text-white p-1 mt-20 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <div className="h-[414px] w-[1129px]">
          <img
            src={featuredProducts[currentIndex]}
            alt="slider-images"
            className="w-full h-full object-contain"
          />
        </div>
        <button
          className="max-md:hidden bg-blue-900 text-white p-1 mt-20 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
