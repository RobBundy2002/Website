import React from 'react';
import './StyleSheets/AboutMe.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutMePage = () => {
    const skills = [
        "React", "JavaScript", "Python", "Java", "C++",
        "Web Dev", "Game Dev", "UI/UX Design",
        "CSS", "HTML", "Node.js", "C", "C#", "XML", "XSLT",
        "SQLite", "GitLab", "Bash", "Docker", "Kubernetes",
        "Kafka", "Helm", "Unity"
    ];

    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <div className="about-me-header">
                    <div className="profile-section">
                        <div className="profile-photo-container">
                            <img
                                src="Images/Grad.jpg"
                                alt="Rob Bundy"
                                className="profile-photo"
                            />
                        </div>
                        <div className="header-text">
                            <h1 className="about-title">Rob Bundy</h1>
                            <p className="about-subtitle">Software Developer · Masters Student</p>
                            <div className="social-links">
                                <a href="https://github.com/RobBundy2002" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/rob-bundy-192035223/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedin />
                                </a>
                                <a href="mailto:robbielbundy@gmail.com" className="social-icon">
                                    <FaEnvelope />
                                </a>
                                <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <SiLeetcode />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-sections">
                    <div className="about-section">
                        <h2>About Me</h2>
                        <div className="about-bio">
                            <p>
                                Originally from the charming small town of Lebanon in Southwest Virginia, I now call Charlottesville my home. 
                                I graduated from the University of Virginia with a Bachelor's of Arts in Computer Science and a minor in Religious Studies in May 2025.
                            </p>
                            <p>
                                My next chapter begins in Summer 2025 as a Software Developer at General Atomics Integrated Intelligence, 
                                followed by pursuing an Online Masters in Computer Science at Georgia Tech in Fall 2025.
                            </p>
                            <p>
                                When I'm not coding, you'll find me throwing discs at the local disc golf course, 
                                immersed in music, or shooting hoops at the UVA gym. I'm deeply passionate about game development, 
                                building innovative apps, and keeping my web projects on the cutting edge of technology.
                            </p>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h2>Skills & Technologies</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-badge">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Link to="/Website/" className="back-to-home">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default AboutMePage;
