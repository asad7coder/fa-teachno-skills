import React from "react";
import "./BoxCC.css";
// import full_stack from "../../assets/full-stack.png";

const BoxCC = ({ postData }) => {
  return (
    <>
      <div className="boxCC">
        <div className="box-list">
          <img src={postData.postData1.pic} alt="" />
          <div className="box-content">
            <h2>{postData.postData1.tatle}</h2>
            <p>{postData.postData1.ptt}</p>
            <ul>
              <li>{postData.postData1.list1}</li>
              <li>{postData.postData1.list2}</li>
            </ul>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="box-list">
          <img src={postData.postData2.pic} alt="" />
          <div className="box-content">
            <h2>{postData.postData2.tatle}</h2>
            <p>{postData.postData2.ptt}</p>
            <ul>
              <li>{postData.postData2.list1}</li>
              <li>{postData.postData2.list2}</li>
            </ul>
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/*  */}
        {/* <div className="box-list">
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
        </div> */}
      </div>
    </>
  );
};

export default BoxCC;
