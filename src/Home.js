import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './StyleSheets/SharedStyles.css';
import { Helmet } from 'react-helmet';
import { FaUser, FaGlobe, FaCode, FaGraduationCap, FaGamepad } from 'react-icons/fa';

const Home = () => {
    const categories = [
        {
            title: "About Me",
            description: "Learn more about my background, skills, and journey in software development.",
            link: "/Website/aboutme",
            icon: <FaUser size={30} />
        },
        {
            title: "Hosted Websites",
            description: "Explore my collection of live, deployed web applications and projects.",
            link: "/Website/hostedwebsites",
            icon: <FaGlobe size={30} />
        },
        {
            title: "Video Games",
            description: "Check out my collection of Unity and other game development projects.",
            link: "/Website/videogames",
            icon: <FaGamepad size={30} />
        },
        {
            title: "Assorted Projects",
            description: "Browse through my diverse portfolio of software development projects.",
            link: "/Website/assortedprojects",
            icon: <FaCode size={30} />
        },
        {
            title: "Class Assignments",
            description: "View notable academic projects and coursework implementations.",
            link: "/Website/classassignments",
            icon: <FaGraduationCap size={30} />
        }
    ];

    return (
        <div className="page-container">
            <Helmet>
                <title>Rob Bundy | Portfolio</title>
                <meta name="description" content="Rob Bundy's professional portfolio and project showcase." />
            </Helmet>

            <div className="home-container">
                <motion.div 
                    className="hero-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">Rob Bundy</h1>
                    <p className="hero-subtitle">Software Developer · Masters Student</p>
                </motion.div>

                <motion.div 
                    className="project-categories"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <Link to={category.link} className="category-card">
                                <div className="category-icon">{category.icon}</div>
                                <h2 className="category-title">{category.title}</h2>
                                <p className="category-description">{category.description}</p>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
