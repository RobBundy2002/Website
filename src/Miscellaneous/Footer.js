import React from 'react';
import '../StyleSheets/SharedStyles.css';

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-text">&copy; 2025 Rob Bundy. All Rights Reserved.</p>
                    <p className="footer-subtext">University of Virginia Undergraduate</p>
                </div>
                <div className="footer-section">
                    <p className="footer-subtext">Software Developer & Masters Student</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;