"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProjectCard from "./ProjectCard";


const Carousel = () => {
  const thirdProj = ["/SudokuImg2.png", "SudokuETH - C# , Python (Flask) , Solidity","https://github.com/Yosefha4/Sudoku_Eth"];

  const firstProj = ["/shartp2.png", "Share Prompt AI - Next js","https://github.com/Yosefha4/Share-Prompts"];

  const secProj = ["/res2Img.png", "Payment Landing Page - React.js","https://github.com/Yosefha4/FrontEnd-Exercises"];

  const fourProj = ["/pricePlan.png", "Pricing Plan - React.Js HTML CSS","https://github.com/Yosefha4/FrontEnd-Exercises"];

  const itemsData = [firstProj, secProj, thirdProj, fourProj];
  // console.log("firstItem: " + firstProj[0], firstProj[1])
  // console.log(firstProj[0])

  const settings = {
    modules: [EffectCoverflow, Navigation, Pagination],
    navigation: {
      prevEl: ".button-prev",
      nextEl: ".button-next",
    },
    // pagination: {
    //   clickable: true,
    // },
    speed: 1000,

    slidesPerView: "2", // Adjust the number of visible slides
    centeredSlides: true,
    spaceBetween: -100, // Adjust the space between slides
    effect: "coverflow",
    coverflowEffect: {
      rotate: 20, // Adjust the rotation angle
      stretch: 100, // Adjust the stretching of slides
      depth: 600, // Adjust the depth effect
      modifier: 1,
      slideShadows: true,
    },
  };

  const handleOpenUrl = (url) => {
    console.log("handle click")
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noreferrer");
      // Your client-side code that uses window goes here
    }
  };

  return (
    <Swiper {...settings} className="swiper">
      {itemsData.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner" onClick={() => handleOpenUrl(slide[2])}>
          {/* <img src={slide} alt="" /> */}
          <ProjectCard imgAdd={slide[0]} title={slide[1]} projUrl={slide[2]} />
          {/* <RepoView imgUrl={slide} /> */}
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <FaArrowLeft />
      </div>
      <div className="button-next">
        <FaArrowRight />
      </div>
    </Swiper>
  );
};

export default Carousel;
