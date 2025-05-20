import React from "react";
import "./Hero.css";
import profile_img from "../../assets/me.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Shaun Zitha" />
      <h1>
        <span>I'm Shaun Zitha,</span> Mobile Developer based in South Africa
      </h1>
      <p>
        Computer Science & Informatics Graduate from the University Of
        Johannesburg
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/HS-ZITHA-CV.pdf" download="HS-ZITHA-CV.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
