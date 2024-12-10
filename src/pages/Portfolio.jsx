import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>My Ongoing Portfolio</h1>
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
          <li>Typescript</li>
          <li>React</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Ongoing Projects</h2>
        <div className="project-card">
          <h3>Personal Website (Ongoing) </h3>
          <p>
            My first official web project from CS601: Developing a responsive and modern personal website to showcase my skills and projects using React.
            You're using it right now!
          </p>
        </div>
        <div className="project-card">
          <h3>Store Inventory (Ongoing) </h3>
          <p>
            A small makeup inventory site that I made during CS601 using React that showcases my web design skills.
            Will host soon - feel free to download the project folder for now.
          </p>
          <a
            href="/makeup_invetory_project.zip"
            download="ZullyM_inventory_project.zip"
            class="download-link">
            Download Folder Here
          </a>
        </div>
      </section>
      <section className="aspirations">
        <h2>Future Aspirations</h2>
        <p>
          I aim to expand my expertise in full-stack development and contribute to impactful open-source projects.
          Next semester I'll take CS 602: Server side web development, and would like to work on web projects that
          have more functioning backend capabilities.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
