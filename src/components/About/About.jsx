import React from "react";
import "./About.css";
import farman_ali from "../../assets/farman-ali.jpeg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <h1>“FA Techno Skills: Pakistan ka Career Launchpad”</h1>
          <p>
            "Our mission is clear. We aim to train over 10 crore job seekers in
            underprivileged areas of Pakistan. We are working hard to provide
            you with professional and practical tech and non-tech skills to help
            you compete for your dream jobs globally. Now, every graduate in
            Pakistan will learn top professional skills in easy-to-understand
            language! Anytime, anywhere!"
          </p>
          <p id="about-f">Farman Ali, Founder, FA Techno Skills</p>
        </div>
        <div className="about-right">
          <img src={farman_ali} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
