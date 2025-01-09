import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const CourseReviewApplication = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Course Review App</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/CRUD.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    This Course Review App is a desktop application designed for students to rate and review their courses. The application allows users to submit reviews, browse reviews for different courses, and make informed decisions based on the collective feedback from the student body. The project includes features such as course search, and the ability to track reviews by course type, rating, and date.

                    This application is built using Java and JavaFX, with a backend powered by SQLite for efficient storage and retrieval of reviews and course data.
                </p>
                <Link to="/Website/classassignments" className="back-button">
                    Back to Assignments
                </Link>
                <Link to="/Website/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default CourseReviewApplication;
