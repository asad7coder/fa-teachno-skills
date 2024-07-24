import React from "react";
import "./Courses.css";
import full_stack from "../../assets/full-stack.png";
import digital from "../../assets/digital.png";
import data from "../../assets/data.png";
const Courses = () => {
  return (
    <>
      <div className="courses">
        <h3>Explore All The Courses Offered by FA Techno Skills</h3>
        <p>
          We offer live online training to learners all across Pakistan, and
          classroom training in Lahore (DHA Phase 8). You can also opt for our
          self-paced recorded online courses.
        </p>
        {/* courses list */}
        <div className="coucrses-list">
          <div className="box-list">
            <img src={full_stack} alt="" />
            <div className="box-content">
              <h2>Web Development Course</h2>
              <p>
                Learn HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Angular,
                React, API
              </p>
              <ul>
                <li>4 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="box-list">
            <img src={digital} alt="" />
            <div className="box-content">
              <h2>Digital Marketing Course</h2>
              <p>
                The best digital marketing course in Jodhpur with intensive
                classroom traini…
              </p>
              <ul>
                <li>4 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="box-list">
            <img src={data} alt="" />
            <div className="box-content">
              <h2>Data Science Course</h2>
              <p>
                The only institute in Jodhpur offering complete data science
                training with
              </p>
              <ul>
                <li>6 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="box-list">
            <img src={full_stack} alt="" />
            <div className="box-content">
              <h2>Web Development Course</h2>
              <p>
                Learn HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Angular,
                React, API
              </p>
              <ul>
                <li>4 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="box-list">
            <img src={digital} alt="" />
            <div className="box-content">
              <h2>Digital Marketing Course</h2>
              <p>
                The best digital marketing course in Jodhpur with intensive
                classroom traini…
              </p>
              <ul>
                <li>4 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
          <div className="box-list">
            <img src={data} alt="" />
            <div className="box-content">
              <h2>Data Science Course</h2>
              <p>
                The only institute in Jodhpur offering complete data science
                training with
              </p>
              <ul>
                <li>6 months training</li>
                <li>Professional Certification</li>
              </ul>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
