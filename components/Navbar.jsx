"use client";

import Image from "next/image";
import Link from "next/link";
import MyImage from "../public/myImgNoBg.png";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="navbar_container">
        <div className="social">
          <div>
            <Image className="navImg" src={MyImage} alt="profileImg" />
          </div>
          <h1 className="name">Yosef Haimjan</h1>
          <div className="social-links">
            <a
              className="eachLink"
              href="https://www.facebook.com/yosef.haimjan?mibextid=LQQJ4d"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="eachLink"
              href="https://instagram.com/yosef_10_?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="eachLink"
              href="https://www.linkedin.com/in/yosef-haimjan/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="eachLink"
              href="https://github.com/Yosefha4"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="links">
          <div className="navbar-link" onClick={() => scrollToSection("home")}>
            <div className="icon">
              {" "}
              <FaHome />
            </div>

            <Link href="#" className="navLnk">Home</Link>
          </div>
          <div className="navbar-link" onClick={() => scrollToSection("about")}>
            <div className="icon">
              <IoPerson />
            </div>

            <Link href="#" className="navLnk">About</Link>
          </div>
          {/* <div
            className="navbar-link"
            onClick={() => scrollToSection("resume")}
          >
            <div className="icon">
              {" "}
              <FaFile />
            </div>

            <Link href="#">Resume</Link>
          </div> */}
          <div
            className="navbar-link"
            onClick={() => scrollToSection("portfolio")}
          >
            <div className="icon">
              <FaBookOpen />
            </div>
            <Link href="#" className="navLnk">Portfolio</Link>
          </div>
          <div
            className="navbar-link"
            onClick={() => scrollToSection("contact")}
          >
            <div className="icon">
              <IoIosMail />
            </div>
            <Link href="#" className="navLnk">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
