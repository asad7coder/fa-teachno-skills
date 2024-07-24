import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
// import menu_icon from "../../assets/menu-icon.png";
import { RiMenu2Fill } from "react-icons/ri";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <>
      <nav>
        <h1 className="logo">
          FA <span>Teachno Skills</span>
        </h1>
        <ul className={mobileMenu ? "" : "hide-mobile"}>
          <li>
            <Link to="hero" smooth={true} offset={-50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="courses" smooth={true} offset={-250} duration={500}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} offset={50} duration={500}>
              Our Center
            </Link>
          </li>
          <li>
            <Link to="team" smooth={true} offset={-200} duration={500}>
              Team
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-200} duration={500}>
              Contact us
            </Link>
          </li>
        </ul>
        <RiMenu2Fill className="menu-icon" onClick={toggleMenu} />
        {/* 
        <img
          src={menu_icon}
          alt="menu"
          className="menu-icon"
          onClick={toggleMenu}
        /> */}
      </nav>
    </>
  );
};

export default NavBar;
