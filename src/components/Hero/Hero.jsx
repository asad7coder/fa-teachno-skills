import React from "react";
import "./Hero.css";
import hero_banner from "../../assets/hero-banner.jpg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <p>Success-oriented learning! icon</p>
          <h1>Fueling Skills, Igniting Careers</h1>
          <p>
            Master industry-relevant skills with our vernacular online courses.
            Choose your program, get certified, and open doors to lucrative
            career opportunities.
          </p>
          <Link to="courses" smooth={true} offset={-200} duration={500}>
            <button className="btn">Explore Courses</button>
          </Link>
        </div>
        <div className="hero-right">
          <img src={hero_banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
