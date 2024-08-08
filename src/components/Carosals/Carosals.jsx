import React, { useRef } from "react";
import "./Carosals.css";
import BoxCC from "./BoxCC";
import full_stack from "../../assets/full-stack.png";
import digital from "../../assets/digital.png";
import data from "../../assets/data.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

const Carosals = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const postData = {
    postData1: {
      pic: full_stack,
      tatle: "Web Development Course",
      ptt: "Learn HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Angular, React, API",
      list1: "4 months training",
      list2: "Professional Certification",
    },
    postData2: {
      pic: digital,
      tatle: "Digital Marketing Course",
      ptt: "The best digital marketing course in Jodhpur with intensive classroom traini…",
      list1: "4 months training",
      list2: "Professional Certification",
    },
  };
  return (
    <>
      <div className="carosals">
        <div className="carosal">
          <img
            src={next_icon}
            alt=""
            className="next-btn"
            onClick={slideForward}
          />
          <img
            src={back_icon}
            alt=""
            className="back-btn"
            onClick={slideBackward}
          />
          <ul ref={slider}>
            <BoxCC postData={postData} />
            <BoxCC postData={postData} />
            <BoxCC postData={postData} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Carosals;
