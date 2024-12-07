import React from 'react';
import './Biography.css';  // Import the CSS file for styling

const Biography = () => {
    return (
        <div className="biography">
            <section className="bio-header">
                <img src="your-profile-image.jpg" alt="Your Name" className="bio-image" />
                <div className="bio-text">
                    <h1 className="bio-title">Hello! I'm [Your Name]</h1>
                    <p className="bio-intro">
                        I'm passionate about [your interests], with a background in [your profession/education].
                        I strive to [what you're passionate about]. Here's a bit about my journey.
                    </p>
                </div>
            </section>

            <section className="bio-background">
                <h2 className="section-title">Background</h2>
                <p>
                    I have experience in [specific areas/skills], having worked with [technologies, fields, or companies].
                    I love tackling challenges and working with [teams, projects, or any relevant aspect of your work].
                </p>
            </section>

            <section className="bio-achievements">
                <h2 className="section-title">Key Achievements</h2>
                <ul>
                    <li>Achieved [description of achievement].</li>
                    <li>Led projects such as [project details].</li>
                    <li>Earned accolades like [awards or recognitions].</li>
                </ul>
            </section>

            <section className="bio-hobbies">
                <h2 className="section-title">Hobbies & Interests</h2>
                <p>
                    Outside of work, I enjoy [list hobbies or activities], and I’m passionate about [another personal interest].
                </p>
            </section>
            <h2>Gallery</h2>
            <div className="gallery">
                <figure>
                    <img src="/images/photo1.jpg" alt="Description 1" />
                    <figcaption>My First Trip</figcaption>
                </figure>
                <img src="/images/photo1.jpg" alt="Description 1" />
                <img src="/images/photo2.jpg" alt="Description 2" />
                <img src="/images/photo3.jpg" alt="Description 3" />
                <img src="/images/photo4.jpg" alt="Description 4" />
            </div>
        </div>
    );
};

export default Biography;

