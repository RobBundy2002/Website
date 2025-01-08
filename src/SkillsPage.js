import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './StyleSheets/SkillsPage.css';
import { Link } from "react-router-dom";

const SkillsPage = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    const skills = [
        { name: 'Java', color: '#f7b731' },
        { name: 'Python', color: '#306998' },
        { name: 'React', color: '#22c55e' },
        { name: 'CSS', color: '#264de4' },
        { name: 'HTML', color: '#e34f26' },
        { name: 'JavaScript', color: '#2563eb' },
        { name: 'Node.js', color: '#68a063' },
        { name: 'C', color: '#a8b9cc' },
        { name: 'C#', color: '#178600' },
        { name: 'XML', color: '#0060a5' },
        { name: 'XSLT', color: '#3b6e8e' },
        { name: 'SQLite', color: '#003b57' },
        { name: 'GitLab', color: '#fca326' },
        { name: 'Bash', color: '#4e6e60' },
        { name: 'Docker', color: '#2496ed' },
        { name: 'Kubernetes', color: '#326ce5' },
        { name: 'Kafka', color: '#3f465c' },
        { name: 'Helm', color: '#0d1031' },
        { name: 'Unity', color: '#3d8f6b' }
    ];

    return (
        <div className="App">
            <h2>Languages and Tech Used</h2>
            <div className="skills-container">
                {skills.map(skill => (
                    <div className="skill-tag" key={skill.name} data-aos="fade-up" style={{ backgroundColor: skill.color }}>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
            <Link to="/Website" className="back-to-home">Back to Home</Link>
        </div>
    );
};

export default SkillsPage;
