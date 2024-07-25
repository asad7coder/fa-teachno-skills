import React from "react";
import "./Team.css";
import jigar_ali from "../../assets/jigar-ali.jpg";
import farman_ali from "../../assets/farman-ali.jpeg";
import asad_shahzad from "../../assets/asad-shahzad.jpg";
import asad from "../../assets/asad.jpeg";
import mubashir from "../../assets/mubashir.jpeg";
import { DiGithubFull } from "react-icons/di";

import { FaGithub } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="team-box">
          <img src={farman_ali} alt="" />
          <h1>Farman Ali</h1>
          <p>ASP .NET Developer</p>
          <p>
            Farman Ali has a Master's degree in computer science. He has good
            experience in development. He Completes Multiple projects of Web and
            Desktop Applications.
          </p>
          <ul>
            <li>
              <a href="#">
                <FaGithub /> <DiGithubFull />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-box">
          <img src={jigar_ali} alt="" />
          <h1>Jigar Ali</h1>
          <p>Founder</p>
          <p>
            Abdullah Firaas has done his Master in Computer Science, and he is
            working with us as our team lead. He Leads Multiple projects in Web
            Applications and Designing.
          </p>
          <ul>
            <li>
              <a href="#">
                <FaGithub /> <DiGithubFull />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-box">
          <img src={asad_shahzad} alt="" />
          <h1>Asad-Shahzad</h1>
          <p>Founder</p>
          <p>
            Abdullah Firaas has done his Master in Computer Science, and he is
            working with us as our team lead. He Leads Multiple projects in Web
            Applications and Designing.
          </p>
          <ul>
            <li>
              <a href="#">
                <FaGithub /> <DiGithubFull />
              </a>
            </li>
          </ul>
        </div>

        <div className="team-box">
          <img src={asad} alt="" />
          <h1>Muhammad Asad</h1>
          <p>Web Developer</p>
          <p>
            Muhammad Asad is working with us as our Web Developer. He has
            successfully completed multiple projects in Web Applications and
            WordPress.
          </p>
          <ul>
            <li>
              <a href="https://github.com/asad7coder/" target="_blank">
                <FaGithub /> <DiGithubFull />
              </a>
            </li>
          </ul>
        </div>
        <div className="team-box">
          <img src={mubashir} alt="" />
          <h1>M Mubashir</h1>
          <p>Web Developer</p>
          <p>
            M.Mubashir he is working with us as our Web Developer. He Complete
            Multiple of projects of Web Applications
          </p>
          <ul>
            <li>
              <a href="#">
                <FaGithub /> <DiGithubFull />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Team;
