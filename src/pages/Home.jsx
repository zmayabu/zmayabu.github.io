import React from "react";
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Hello - I'm Zully!</h1>
        <p>Pronounced <span class="highlight">zoo-lee</span> or <span class="highlight">soo-lee</span> :) </p>
        <p>I am an HR Trainer for the University of Minnesota Foundation. I'm based in the Twin Cities
          in Minnesota, but have roots in Grand Rapids, MI. I'm currently pursuing a career in web development
          to help individuals and businesses create beautiful and accessible sites.
          Discover my background, projects, and passion for coding via the links above.</p>
        <p>Or check out my resume and connect:</p>
        <a href="/downloads/Zully_Maya_CV.pdf" download="Zully_CV.pdf" className="home-resume-link">
    Download My Resume
  </a>
      </header>
      
    </div>
  );
};

export default Home;
