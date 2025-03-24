import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 > <Link to="/" className="navbar-logo"> Zully's Website</Link></h1>
        <ul className="navbar-links">
          <li>
            <Link to="/about" className="navbar-link">About me</Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li>
            <Link to="/resume" className="navbar-link">View Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
