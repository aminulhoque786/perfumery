import React from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const images = [
    "url('src/assets/banner.jpg')",
    "url('src/assets/banner1.jpg')",
    "url('src/assets/banner2.jpg')",
  ];

  return (
    <>
    <div className="bg-banner text-center bg-center bg-cover bg-no-repeat h-[600px] flex items-center justify-center">
  <div className="max-w-[1200px] mx-auto md:p-10 flex flex-col items-center">
    <h1 className="text-[30px] text-white md:text-6xl font-pops lg:font-bold mb-4 text-center">
      Welcome to Our Website
    </h1>

    {/* Buttons */}
    <div className="flex gap-4 mt-4">
      <button className="px-3 py-2 lg:px-6 lg:py-3 text-black duration-500 bg-white hover:bg-slate-400 font-semibold rounded-md">
        Explore Our Purpose
      </button>
      <button className="px-2 lg:px-6 lg:py-3 bg-white duration-500 hover:bg-slate-400 text-black font-semibold rounded-md">
        Contact Us
      </button>
    </div>
  </div>
</div>

    
    </>
  )
};

export default Banner;
