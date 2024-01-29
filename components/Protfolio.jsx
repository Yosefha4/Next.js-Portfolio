import React from "react";

import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

const Protfolio = () => {
  const thirdProj = [
    "/SudokuImg2.png",
    "SudokuETH - C# , Python (Flask) , Solidity",
    "https://github.com/Yosefha4/Sudoku_Eth",
  ];

  const firstProj = [
    "/shartp2.png",
    "Share Prompt AI - Next js",
    "https://github.com/Yosefha4/Share-Prompts",
  ];

  const secProj = [
    "/res2Img.png",
    "Payment Landing Page - React.js",
    "https://github.com/Yosefha4/FrontEnd-Exercises",
  ];

  const fourProj = [
    "/pricePlan.png",
    "Pricing Plan - React.Js HTML CSS",
    "https://github.com/Yosefha4/FrontEnd-Exercises",
  ];
  const fifthProj = [
    "/examCaption.png",
    "Caption Generator - Next.js, tailwind, AWS, ",
    "https://captions-generator-rho.vercel.app/",
  ];

  const itemsData = [firstProj, secProj, thirdProj, fourProj, fifthProj];

  return (
    <div className="portfolio">
      <div className="top-portf">
        <h1 className="porTitle">Recent Works</h1>
        {/* <p style={{ color: "#47626D" }} className="portDesc">
          In the dynamic world of full-stack development, I specialize in
          creating seamless & fully-responsive websites using Python,
          JavaScript, React, Node.js, CSS, and HTML.
        </p> */}
      </div>
      <div className="container_carusel">
        <Carousel />
      </div>
      <div className="phoneCarousel">
        {itemsData.map((item, index) => (
          <ProjectCard
            key={index}
            imgAdd={item[0]}
            title={item[1]}
            projUrl={item[2]}
          />
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
