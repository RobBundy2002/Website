import React from 'react';
import './ContactMe.css';
import {Link} from "react-router-dom";

const ContactMePage = () => {
    return (
        <div className="App">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>If you'd like to get in touch or check out my github repos, feel free to reach out through the following:</p>

                <div className="contact-item">
                    <a
                        href="https://www.linkedin.com/in/rob-bundy-192035223/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-button"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="contact-item">
                    <a href="mailto:robbielbundy@gmail.com" className="email-button">
                        Email Me
                    </a>
                    <a href="https://github.com/RobBundy2002" className="github-button">
                        GitHub
                    </a>
                </div>

                <Link to="/Website/" className="back-to-home2">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default ContactMePage;
