import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>
          Welcome to my portfolio! Here you can find details about my skills, ongoing projects, and aspirations.
        </p>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git/GitHub</li>
          <li>Problem-Solving</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Ongoing Projects</h2>
        <div className="project-card">
          <h3>Personal Website</h3>
          <p>
            Developing a responsive and modern personal website to showcase my skills and projects using React.
          </p>
        </div>
        <div className="project-card">
          <h3>Learning Backend Development</h3>
          <p>
            Exploring Node.js and Express.js to build server-side applications.
          </p>
        </div>
      </section>

      <section className="aspirations">
        <h2>Future Aspirations</h2>
        <p>
          I aim to expand my expertise in full-stack development, contribute to impactful open-source projects, and build innovative solutions that make a difference.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
