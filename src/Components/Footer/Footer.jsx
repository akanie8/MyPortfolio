import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success"); // "success" or "error"

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setPopupType("success");
      setPopupMessage("Subscription successful! Thank you for subscribing.");
      setShowPopup(true);
      onSubscribe(email); // Trigger parent subscription function
      setEmail(""); // Clear email field after success
    } else {
      setPopupType("error");
      setPopupMessage("Please enter a valid email address.");
      setShowPopup(true);
    }
    setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-logo" src={footer_logo} alt="Footer Logo" />
          <p>
            I am a mobile developer from South Africa, a versatile developer and
            recent graduate from the University of Johannesburg with a degree in
            Computer Science and Informatics.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Shaun Zitha. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      {showPopup && (
        <div className={`popup-message ${popupType}`}>{popupMessage}</div>
      )}
    </div>
  );
};

export default Footer;
