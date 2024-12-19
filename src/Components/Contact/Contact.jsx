import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      access_key: "c3a9a20e-6602-4155-b999-ac510e8cf3eb",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataToSend),
    }).then((res) => res.json());

    if (res.success) {
      setFormSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear the form
      setTimeout(() => setFormSuccess(false), 3000); // Auto-hide prompt
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Looking for a recent graduate with phenomenal skills in software
            engineering? Feel free to contact me!
          </p>
          <p>
            Have a project in mind but don't know where to start? Let's connect!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>akaniesean@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+27-82-371-4259</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Johannesburg, Gauteng, South Africa</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here...."
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message Now
          </button>
        </form>
      </div>

      {/* Success Prompt */}
      {formSuccess && (
        <div className="success-prompt">
          <div className="success-content">
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
