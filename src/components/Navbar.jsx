import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My Portfolio</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/biography" className="navbar-link">Biography</Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
