// src/components/Home.js
import React from 'react';
import Hero from "../components/Hero";
import './styles/Home.css';

const Home = () => {
  return (
      <div className='home'>
      <Hero />
      {/* You can add more sections below */}
      <section className="section about-preview">
        <img src="/images/about.jpg" alt="About me" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Passionate web developer creating elegant and responsive designs.
            Let's build something amazing together!
          </p>
          <a href="/about" className="about-button">More About Me</a>
        </div>
      </section>
      {/* Services / Highlights Section */}
      <section className="section highlights">
        <div className="highlight-box">
          <h3>Web Development</h3>
          <p>Creating fast, responsive, and modern websites.</p>
        </div>
        <div className="highlight-box">
          <h3>UI/UX Design</h3>
          <p>Designing beautiful and intuitive user experiences.</p>
        </div>
        <div className="highlight-box">
          <h3>Creative Solutions</h3>
          <p>Bringing ideas to life with innovative solutions.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Let's Work Together!</h2>
        <p>Ready to bring your vision to life? Get in touch today.</p>
        <a href="/contact" className="cta-button">Contact Me</a>
      </section>
    </div>
   
  );
};

export default Home;