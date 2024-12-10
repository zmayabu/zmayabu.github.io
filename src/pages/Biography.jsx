import React from 'react';
import './Biography.css';  

const Biography = () => {
    return (
        <div className="biography">
            <section className="bio-header">
                <img src="/images/headshot.jpg" alt="Headshot of Zully Maya" className="bio-image" />
                <div className="bio-text">
                    <h1 className="bio-title">About Zully</h1>
                    <p className="bio-intro">
                        I'm passionate about developing engaging and fun sites. While I have a background in admin and HR work, software development and computer science
                        have always been my career passions. I'm currently enrolled in a masters program at Boston University 
                        to specialize my undergrad computer science skills and enter the web development field!
                    </p>
                </div>
            </section>

            <section className="bio-background">
                <h2 className="section-title">Background</h2>
                <p>
                    Academically, I have experience in front-end web technologies like HTML/CSS/JavaScript as well as React. Throughout my academic
                    career, I've had internships that also focused on web design utlizing tools like WebFlow and WordPress for ease of client transition.
                    I love tackling challenges and learning new web technologies to expand my web development tool belt!
                </p>
            </section>

            <section className="education">
                <h2 className="section-title">Education</h2>
                <ul>
                    <li>Attended Macalester College for a B.A. in Computer Science (2018 - 2022).</li>
                    <li>Studied Abroad at University of Granada Fall Semester of 2021</li>
                    <li>Currently attending Boston University for an M.S. in Computer Information Systems
                        concentrating in Web Development
                    </li>
                </ul>
            </section>

            <section className="bio-hobbies">
                <h2 className="section-title">Hobbies & Interests</h2>
                <p>
                    Outside of work, I enjoy reading, excercising, and traveling - especially with my partner of 2 years, Ammar! I am also 
                    really into dance and music. I like to attend workshops in the Twin Cities and used to be a part of dance groups in undergrad at Macalester.
                    Please feel free to reach out with any book recommendations as I'm always expanding my collection.
                </p>
            </section>
            <h2>Gallery</h2>
            <p>Some photos of me throughout the years!</p>
            <div className="gallery">
                <figure>
                    <img src="/images/cherry_blossoms.jpg" alt="Zully and Ammar under cherry blossom trees" />
                    <figcaption>Ammar and I visiting the cherry blossoms in DC</figcaption>
                </figure>
                <figure><img src="/images/christmas.jpg" alt="Description 2" />
                <figcaption>Ammar and I enjoying the christmas lights in Minneapolis</figcaption>
                </figure>
                <figure><img src="/images/eid.jpg" alt="Description 3" />
                <figcaption>Ammar and I celebrating Eid in 2023</figcaption></figure>
                <figure><img src="/images/glow.jpg" alt="Description 4" />
                <figcaption>Celebrating Glow Christmas Festival this month</figcaption></figure>
                
            </div>
        </div>
    );
};

export default Biography;

