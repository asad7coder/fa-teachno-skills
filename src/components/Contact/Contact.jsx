import React from "react";
import "./Contact.css";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  // we3Form api

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dd846af2-14c7-4115-af6d-52369d08a91a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <p>
            We are here to assist you with your upskilling journey. Whether you
            have questions about our courses, need guidance, or are ready to
            take the next step in your career, feel free to reach out.
          </p>
          <ul>
            <li>
              <IoIosMail className="icon-c" />
              fateachnoskills@gmail.com
            </li>
            <li>
              {" "}
              <FaSquarePhone className="icon-c" /> +92 321 4566743
            </li>
            <li>
              {" "}
              <FaMapLocationDot className="icon-c" /> D.H.A Phase 8 Lahore
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Number"
              required
            />
            <label>Message (Courses Name)</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter  Your Message/Courses Name"
              required
            ></textarea>
            <button className="btn">Submit Now</button>
          </form>
          <p>{result}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
