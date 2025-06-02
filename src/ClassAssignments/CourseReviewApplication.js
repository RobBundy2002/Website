import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseReviewApplication = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Course Review Application
                </motion.h1>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="video-container">
                        <video className="video-w" controls>
                            <source src="Videos/CRUD.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="description">
                        This Course Review App is a desktop application designed for students to rate and review their courses. The application allows users to submit reviews, browse reviews for different courses, and make informed decisions based on the collective feedback from the student body. The project includes features such as course search, and the ability to track reviews by course type, rating, and date.

                        This application is built using Java and JavaFX, with a backend powered by SQLite for efficient storage and retrieval of reviews and course data.
                    </p>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/Website/classassignments" className="back-button" style={{ marginRight: '1rem' }}>
                        Back to Assignments
                    </Link>
                    <Link to="/Website" className="back-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseReviewApplication;
