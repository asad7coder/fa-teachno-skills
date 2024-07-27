import React from "react";
import "./Navegater.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-scroll";
const Navegater = () => {
  return (
    <>
      <div className="navegater">
        <Link to="hero" duration={600} smooth={true} offset={-100}>
          <div className="n-box-home">
            <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};
export default Navegater;
