import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left: About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          I'm passionate about developing engaging and fun sites. 
          While I have a background in admin and HR work, software 
          development and computer science have always been my career passions. 
          I'm currently enrolled in a masters program at Boston University to 
          specialize my undergrad computer science skills and enter the web development field!
          </p>

          <h3>🎓 Education</h3>
          <p>Attended Macalester College for a B.A. in Computer Science (2018 - 2022).</p>
          <p>Studied Abroad at University of Granada Fall Semester of 2021
          </p>
          <p>Currently attending Boston University for an M.S. in Computer Information Systems concentrating in Web Development
          </p>

          <h3>🎨 Hobbies & Interests</h3>
          <p>
          Outside of work, I enjoy reading, excercising, and traveling - 
          especially with my partner of 2 years, Ammar! I am also really into dance and music. 
          I like to attend workshops in the Twin Cities and used to be a part of dance groups 
          in undergrad at Macalester. Please feel free to reach out with any book recommendations
           as I'm always expanding my collection.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="about-images">
          {/* <img src="/images/about1.jpg" alt="Profile 1" className="about-img" />
          <img src="/images/about2.jpg" alt="Profile 2" className="about-img" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;


