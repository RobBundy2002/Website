import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const MatrixMadness = () => {
    return (
        <div className="App">
            <div className="content">
                <h1 className="title">College Hoops Matrix Madness</h1>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/Recording.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    A web app that offers a college basketball twist on the popular Immaculate Grid game. Built with a sleek React front-end and powered by a robust MongoDB backend, this game delivers seamless grid functionality and real-time data interaction, providing an engaging and dynamic user experience.
                </p>
                <Link to="/Website/hostedwebsites" className="back-button">
                    Back to Websites
                </Link>
                <Link to="/Website/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default MatrixMadness;
