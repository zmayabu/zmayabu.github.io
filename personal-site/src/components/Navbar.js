// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css'; // You can add styles in a separate CSS file.

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
