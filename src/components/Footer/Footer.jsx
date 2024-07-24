import React from "react";
import "./Footer.css";
import company_logo from "../../assets/company-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f-box1">
          <img src={company_logo} alt="" />
          <p>
            FA Techno Skills is the Vernacular Upskilling Edtech platform. By
            offering expert mentorship with our tech-powered courses in the
            first language of Indians, we equip learners with the skills to
            thrive in the global workforce.​
          </p>
          <h2>Our Centers</h2>
          <p>D.H.A Phase 8 Lahore</p>
        </div>
        <div className="f-box1">
          <h2>Useful links</h2>
          <ul>
            <li>About Us</li>
            <li>Online Courses</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Contact Us</li>
            <li></li>
          </ul>
          <h2>Work With Us</h2>
          <p>We Are Hiring</p>
          <p>Become Mentor</p>
        </div>
        <div className="f-box1">
          <h2>Other Links</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditons</li>
            <li>Refund Policy</li>
          </ul>
          <h2>Stay up to date </h2>
          <p>
            Subscribe to our newsletter to receive the latest updates and
            offers.
          </p>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
