import React from 'react';
import './StyleSheets/AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMePage = () => {
    return (
        <section className="about-me-container">
            <div className="about-me-card">
                <h1 className="about-title">👋 Hello, I'm Rob Bundy</h1>
                <p className="about-subtitle">Software Developer · Teaching Assistant · Student </p>

                <div className="about-bio">
                    <p>
                        I'm a 4th year Computer Science student and teaching assistant at the University of Virginia,
                        originally from a small town in Southwest Virginia. Since 2022, Charlottesville has become home.
                    </p>
                    <p>
                        In Fall 2025, I’ll be kicking off my Online MSCS at Georgia Tech and hopefully stepping into a full-time role
                        as a software engineer.
                    </p>
                    <p>
                        I’m passionate about game dev, app building, and keeping my personal web projects fresh.
                        Outside the screen, I’m probably on a disc golf course, vibing to Forrest Frank, or playing hoops
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
