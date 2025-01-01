import React from 'react';
import './AboutMe.css';
import {Link} from "react-router-dom";

const AboutMePage = () => {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            <p>
                Rob Bundy is a software developer and current 4th year student and teaching assistant at the University of Virginia. Rob has developed and implemented with a wide range of languages and technologies, including Java, Python, React, SQLite, Bash, and Docker.
            </p>
            <p>
                Outside of his course work coding, Rob enjoys exploring the world of game development, working on his mobile app, or working on website maintenance for his other projects. When he's not writing code, you'll find him playing disc golf, listening to Forrest Frank, or hooping at the local UVA gym..
            </p>
            <Link to="/Website/" className="back-to-home3">
                Back to Home
            </Link>
        </div>
    );
};

export default AboutMePage;
