import React, { useState } from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CreditApprovalProject = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const tabs = ['Overview', 'Approach', 'Results', 'Report'];

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

    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Credit Approval Prediction
                </motion.h1>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {renderContent()}
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

export default CreditApprovalProject;
