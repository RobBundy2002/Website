import React from 'react';
import './StyleSheets/AboutMe.css';
import {Link} from "react-router-dom";

const AboutMePage = () => {
    return (
        <div className="about-me-container">
            <h2>About Me</h2>
            <p>
                Rob Bundy is a software developer and current 4th year student and teaching assistant at the University
                of Virginia. Rob grew up in a small town in Southwest Virginia, but has lived in Charlottesville mostly
                full time since August 2022.
            </p>
            <p>
                Rob is currently applying for graduate school to work towards his Masters in Computer Science, as well
                as planning on working full time as a software engineer starting in the summer.
            </p>
            <p>
                Some of Rob's main coding interests include exploring game development, working on his
                mobile app, or website maintenance and advancement for his other projects. When he's not writing code, you'll
                find him playing disc golf, listening to Forrest Frank, or hooping at the local UVA gym.
            </p>
            <Link to="/Website/" className="back-to-home3">
                Back to Home
            </Link>
        </div>
    );
};

export default AboutMePage;
