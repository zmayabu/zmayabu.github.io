// src/components/Hero.js
import React from "react";
import "./styles/Hero.css"; // Import CSS for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1>Hello I'm Zully</h1>
      <p>Pronounced <b>zoo-lee</b> or <b>soo-lee</b> :)</p>
      <p>I am an HR Trainer for the University of Minnesota Foundation. 
        I'm based in the Twin Cities in Minnesota, but have roots in Grand Rapids, MI. 
        I'm currently pursuing a career in web development to help individuals and businesses create beautiful 
        and accessible sites. Discover my background, projects, and passion for coding via the links above.</p>
      </div>
    </section>
  );
};

export default Hero;
