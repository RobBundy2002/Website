import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './SkillsPage.css';
import {Link} from "react-router-dom";

const SkillsPage = () => {

    React.useEffect(() => {
        AOS.init();
    }, []);

    const skills = [
        { name: 'Java', level: 85, color: '#f7b731' },
        { name: 'Python', level: 90, color: '#306998' },
        { name: 'React', level: 80, color: '#22c55e' },
        { name: 'CSS', level: 90, color: '#264de4' },
        { name: 'HTML', level: 90, color: '#e34f26' },
        { name: 'JavaScript', level: 95, color: '#2563eb' },
        { name: 'Node.js', level: 80, color: '#68a063' },
        { name: 'C', level: 75, color: '#a8b9cc' },
        { name: 'C#', level: 70, color: '#178600' },
        { name: 'XML', level: 60, color: '#0060a5' },
        { name: 'XSLT', level: 55, color: '#3b6e8e' },
        { name: 'SQLite', level: 70, color: '#003b57' },
        { name: 'GitLab', level: 85, color: '#fca326' },
        { name: 'Bash', level: 90, color: '#4e6e60' },
        { name: 'Docker', level: 80, color: '#2496ed' },
        { name: 'Kubernetes', level: 75, color: '#326ce5' },
        { name: 'Kafka', level: 70, color: '#3f465c' },
        { name: 'Helm', level: 65, color: '#0d1031' },
        { name: 'Unity', level: 80, color: '#3d8f6b' }
    ];

    return (
        <div className="container">
            <h1>Languages and Technologies Used</h1>
            <div className="skills-container">
                {skills.map(skill => (
                    <div className="skill-circle" key={skill.name} data-aos="fade-up">
                        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="75" cy="75" r="70" stroke="#ddd" strokeWidth="10" fill="none"/>
                            <circle cx="75" cy="75" r="70" stroke={skill.color} strokeWidth="10" fill="none"
                                    strokeDasharray={`${2 * Math.PI * 70} ${2 * Math.PI * 70}`}
                            />
                        </svg>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
            <Link to="/Website" className="back-to-home">
                Back to Home
            </Link>
        </div>
    );
};

export default SkillsPage;
