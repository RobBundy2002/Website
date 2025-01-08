import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const UJLP = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">UJLP at UVA</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/UJLPRecording.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Build to order website for the newly formed UJLP CIO on Grounds at UVA. Actively maintained and can
                    be found here -> &nbsp;
                    <a href="https://ujlawandpolitics.org/" target="_blank" rel="noopener noreferrer" className="styled-link">UJLP@UVA</a>
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

export default UJLP;
