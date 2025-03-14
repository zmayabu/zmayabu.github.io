import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
       <h2>Contact Zully</h2>
      <p>
        Feel free to reach out withy any questions or comments using the form below. I'd love to hear from you!
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
