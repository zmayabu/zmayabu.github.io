import React from 'react';
import './Portfolio.css';

// Portfolio Page

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Zully's Portfolio</h1>
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
            This was actually my first official web project from CS601. Developing a responsive and modern personal website to showcase my skills and projects using React.
            You're using it right now!
          </p>
          <a
            href="https://github.com/zmayabu/zmayabu.github.io"
            className="download-link">
            Githunb Repo
          </a>
        </div>
        <div className="project-card">
          <h3>Store Inventory (Front End)</h3>
          <p>
            A small makeup inventory site that I made during CS601 using React that showcases my web design skills.
          </p>
          <a
            href="https://github.com/zmayabu/frontend_inventory_project"
            className="download-link">
            GitHub Repo
          </a>
        </div>
        <div className="project-card">
          <h3>Store Inventory (Back End)</h3>
          <p>
            An extension to the makeup inventory I made in CS 601. This time it is server side focused using backend technologies like Express.js, 
            MongoDB, and GraphQL. 
          </p>
          <a
            href="https://github.com/zmayabu/serverside_inventory_project"
            className="download-link">
            GitHub Repo
          </a>
        </div>
      </section>
      <section className="aspirations">
        <h2>Future Aspirations</h2>
        <p>
          I would like to connect my two projects to create a fullstack inventory application. Moreover, I would like to 
          expand into professional level projects to add to my portfolio whether it be through internships or freelance projects.
          Feel free to connect if you have any ideas!
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
