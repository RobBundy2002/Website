import React from 'react';
import './StyleSheets/AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMePage = () => {
    return (
        <section className="about-me-container">
            <div className="about-me-card">
                <h1 className="about-title">👋 Hello, I'm Rob Bundy</h1>
                <p className="about-subtitle">Software Developer · Masters Student </p>

                <div className="about-bio">
                    <p>
                        Now currently living full time in Charlottesville, I'm originally from the small town of Lebanon 
                        in Southwest Virginia. In May of 2025 I graduated from the University of Virginia with a 
                        Bachelor's of Arts in Computer Science and a minor in Religious Studies.
                    </p>
                    <p>
                        In Summer 2025 I will start my career as a Software Developer for General Atomics Integrated Intelligence.
                        In Fall 2025, I’ll be kicking off my Online Masters in Computer Science Program at Georgia Tech.
                    </p>
                    <p>
                        I’m passionate about game dev, app building, and keeping my personal web projects fresh.
                        Outside the screen, I’m probably on a disc golf course, listening to music, or playing hoops
                        at the UVA gym.
                    </p>
                </div>

                <Link to="/Website/" className="back-to-home3">
                    ← Back to Home
                </Link>
            </div>
        </section>
    );
};

export default AboutMePage;
