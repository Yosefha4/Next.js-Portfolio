"use client";

import Image from "next/image";
import HeroImg from "../public/airobot.png"
import Link from "next/link";

export default function Home() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <main className="home">
      <div className="heroTexts">
        <h2 className="secondTitle">Hi There! </h2>
        <h1 className="title">I'm Yosef</h1>
        <h2 className="thirdTitle">Software Engineer & Full Stack Developer</h2>
        <div className="heroButtons">
          {/* <Link className="hero_btn" href={'public\myResume.pdf'}> <a target="_blank" >My Resume</a></Link> */}
        <a style={{textAlign:'center'}} className="hero_btn" target="_blank" download="cv" href="https://drive.google.com/file/d/1XnD_SeZ8cCxOUjfb7l6bJ4-2y35mb4y3/view?usp=sharing">My Resume</a>
          {/* <Link className="hero_btn" href={'public\myResume.pdf'}> <button >My Resume</button></Link> */}
         
          <div     onClick={() => scrollToSection("portfolio")}  className="hero_href"><a href="#projects" >Projects</a></div>
          
          {/* <button className="hero_btn">Projects</button> */}
        </div>
      </div>
      <div className="heroRight">
        <div className="imageContainer" >
          <Image  className="heroImg" src={HeroImg} width={300} height={300} alt="heroImg" />
        </div>
     
      </div>
    </main>
  );
}
