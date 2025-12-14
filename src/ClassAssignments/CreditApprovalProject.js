import React, { useState } from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaFileAlt, FaEye } from 'react-icons/fa';

const CreditApprovalProject = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = [
        { id: 'Overview', label: 'Overview', icon: <FaEye size={16} /> },
        { id: 'Approach', label: 'Approach', icon: <FaBrain size={16} /> },
        { id: 'Results', label: 'Results', icon: <FaChartLine size={16} /> },
        { id: 'Report', label: 'Report', icon: <FaFileAlt size={16} /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="tab-content">
                        <p>
                            This project uses the UCI Credit Approval dataset to predict credit application 
                            outcomes using various machine learning models. The dataset has 690 entries and 
                            15 attributes with binary approval status (+ for approved, - for denied).
                        </p>
                        <p>
                            Data includes personal, financial, employment, and loan details, with preprocessing 
                            required for missing values and categorical encoding.
                        </p>
                    </div>
                );
            case 'Approach':
                return (
                    <div className="tab-content">
                        <ul>
                            <li>Handle missing values, encode categoricals, and normalize numerics</li>
                            <li>Balance dataset with SMOTE</li>
                            <li>Apply KNN, Linear SVM, Decision Tree, Random Forest</li>
                            <li>Evaluate with cross-validation and classification metrics</li>
                        </ul>
                    </div>
                );
            case 'Results':
                return (
                    <div className="tab-content">
                        <p><strong>Model Accuracies:</strong></p>
                        <ul>
                            <li>KNN: 92.31%</li>
                            <li>Decision Tree: 93.49%</li>
                            <li>Linear SVM: 55.12%</li>
                            <li>Random Forest: 93.56%</li>
                        </ul>
                        <p><strong>Key Findings:</strong></p>
                        <ul>
                            <li>Top Features: Years Employed, Credit Score, Income, Prior Default Status</li>
                            <li>Using only top 4 features still achieved 89.39% (DT) and 93.22% (RF) accuracy</li>
                            <li>Non-linear models outperformed linear approaches significantly</li>
                        </ul>
                    </div>
                );
            case 'Report':
                return (
                    <div className="pdf-container">
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Machine_Learning_Final_Writeup.pdf#toolbar=0&navpanes=0&scrollbar=0`}
                            width="100%"
                            height="600px"
                            style={{ border: 'none', borderRadius: '8px' }}
                            title="Final Report PDF"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="page-container">
            <div className="content-container">
                <motion.section 
                    className="hero-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="page-title">Credit Approval Prediction</h1>
                    <p className="hero-subtitle">Machine Learning Project - UCI Credit Approval Dataset</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">93.56%</span>
                            <span className="stat-label">Best Accuracy</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">690</span>
                            <span className="stat-label">Data Points</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4</span>
                            <span className="stat-label">Models Tested</span>
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                    className="project-detail-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="enhanced-card">
                        <div className="tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span className="tab-icon">{tab.icon}</span>
                                    <span className="tab-label">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                        {renderContent()}
                    </motion.div>
                </motion.section>

                <motion.div 
                    className="enhanced-nav"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/Website/classassignments" className="back-button">
                        <span className="button-icon">←</span>
                        <span>Back to Assignments</span>
                    </Link>
                    <Link to="/Website" className="back-button primary">
                        <span className="button-icon"></span>
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default CreditApprovalProject;
