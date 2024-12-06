// src/pages/Home.jsx

import React from "react";
import './Home.css'; // Optional: Import separate CSS file for Home page

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, achievements, and passion for coding!</p>
      </header>

      <section className="intro">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with a strong interest in front-end
          technologies. I love building user-friendly, responsive websites and
          applications.
        </p>
      </section>

      <nav className="navigation">
        <ul>
          <li><a href="/biography">Biography</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <footer className="footer">
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default Home;
