import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Get in Touch</h2>
          <p>
            Whether you have a project idea or just want to say hi, I'm always 
            happy to connect. Let's build something amazing together!
          </p>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message..." rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
