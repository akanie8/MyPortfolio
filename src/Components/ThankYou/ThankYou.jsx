import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-content">
        <FaCheckCircle className="thankyou-icon" />
        <h1>Thank You for Subscribing!</h1>
        <p className="thankyou-message">
          You have successfully subscribed to our newsletter. We’ll keep you
          updated with the latest news and updates.
        </p>
        <a href="/" className="thankyou-back-home">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
