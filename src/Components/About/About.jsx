import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/me.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am Hlulani Shaun Zitha, a versatile developer and recent
              graduate from the University of Johannesburg with a degree in
              Computer Science and Informatics. I have expertise in modern web
              and mobile technologies, including React, React Native, Node.js,
              HTML, and CSS
            </p>
            <p>
              My skillset enables me to create dynamic, responsive applications
              with a strong emphasis on both functionality and user experience.
              I am adept at working across the stack, ensuring seamless
              integration between front-end interfaces and back-end services
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "85%" }} />
            </div>

            <div className="about-skill">
              <p>React & React Native</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>SQL & MYSQL</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "65%" }} />
            </div>

            <div className="about-skill">
              <p>Java & C++</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Recent</h1>
          <p>Graduate</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>JavaScript Algorithms & Data Structures</h1>
          <p>At FreeCodeCamp</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Bsc in Computer Science Specialist</h1>
          <p>At the University Of Johannesburg</p>
        </div>
      </div>
    </div>
  );
};

export default About;
