// src/components/About.js
import React from 'react';
import './styles/About.css'; // Styling for the About section

const About = () => {
  return (
    <section id="about" className="about">
      {/* Summary Section */}
      <div className="section summary">
        <h2>Summary</h2>
        <p>
          I'm passionate about developing engaging and fun sites.
          While I have a background in admin and HR work, software development
          and computer science have always been my career passions. I'm currently
          enrolled in a masters program at Boston University to specialize my
          undergrad computer science skills and enter the web development field!
        </p>
      </div>

      {/* Background Section */}
      <div className="section background">
        <h2>Background</h2>
        <p>
          Academically, I have experience in front-end web technologies like HTML/CSS/JavaScript
          and React.js. I also have expereience with server side technologies like Node.js, Express.js,
          MongoDB and GraphQL. Throughout my academic career, I've had internships that also focused
          on web design utlizing tools like WebFlow and WordPress for ease of client transition.
          I love tackling challenges and learning new web technologies to expand my web development
          tool belt!
        </p>
      </div>

      {/* Education Section */}
      <div className="section education">
        <h2>Education</h2>
        <ul>
          <li>Attended Macalester College for a B.A. in Computer Science (2018 - 2022).</li>
          <li>Studied Abroad at University of Granada Fall Semester of 2021</li>
          <li>Currently attending Boston University for an M.S. in Computer Information Systems concentrating in Web Development</li>
        </ul>
      </div>

      {/* Hobbies / Interests Section */}
      <div className="section hobbies">
        <h2>Hobbies & Interests</h2>
        <p>
        Outside of work, I enjoy reading, excercising, and traveling - 
        especially with my partner of 2 years, Ammar! I am also really into dance and music. 
        I like to attend workshops in the Twin Cities and used to be a part of dance groups 
        in undergrad at Macalester. I also love to read so please feel free to reach out with
        any book recommendations as I'm always expanding my collection.
        </p>
      </div>

      {/* Pictures Section */}
      <div className="section pictures">
        <h2>Pictures</h2>
        <div className="picture-gallery">
          {/* <img src="your-image-1.jpg" alt="Image 1" />
          <img src="your-image-2.jpg" alt="Image 2" />
          <img src="your-image-3.jpg" alt="Image 3" /> */}
        </div>
      </div>
    </section>
  );
};

export default About;

