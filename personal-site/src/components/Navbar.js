// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css'; // You can add styles in a separate CSS file.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 > <a href="/" className="navbar-logo"> Zully's Website</a></h1>
        <ul className="navbar-links">
          <li>
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="/about" className="navbar-link">About Me</a>
          </li>
          <li>
            <a href="/portfolio" className="navbar-link">Portfolio</a>
          </li>
          <li>
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
          <li>
            <a href="/resume" className="navbar-link">View CV</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + "/Zully_Maya_CV.pdf"} download="Zully_CV.pdf" className="resume-link">
              Download My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
