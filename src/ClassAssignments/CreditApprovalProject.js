import React, { useState } from 'react';
import '../StyleSheets/Projects.css';
import { Link } from 'react-router-dom';

const CreditApprovalProject = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Approach', 'Preprocessing', 'Models', 'Results', 'Conclusion', 'Report'];

    const renderContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div className="new-card">
                        <h3>Overview</h3>
                        <p>
                            This project uses the UCI Credit Approval dataset to predict credit application outcomes using various machine learning models. The dataset has 690 entries and 15 attributes with binary approval status (+ for approved, - for denied).
                        </p>
                        <p>
                            Data includes personal, financial, employment, and loan details, with preprocessing required for missing values and categorical encoding.
                        </p>
                    </div>
                );
            case 'Approach':
                return (
                    <div className="new-card">
                        <h3>Approach </h3>
                        <ul>
                            <li>Handle missing values, encode categoricals, and normalize numerics</li>
                            <li>Balance dataset with SMOTE</li>
                            <li>Apply KNN, Linear SVM, Decision Tree, Random Forest</li>
                            <li>Evaluate with cross-validation and classification metrics</li>
                        </ul>
                    </div>
                );
            case 'Preprocessing':
                return (
                    <div className="new-card">
                        <h3>Preprocessing</h3>
                        <ul>
                            <li>Filled missing numeric values with column medians</li>
                            <li>Removed low variance features</li>
                            <li>Performed stratified train-test split (80/20)</li>
                            <li>Applied <code>StandardScaler</code> for normalization</li>
                            <li>Used SMOTE for balancing class distributions</li>
                        </ul>
                    </div>
                );
            case 'Models':
                return (
                    <div className="new-card">
                        <h3>Trained Models</h3>
                        <ul>
                            <li>K-Nearest Neighbors (KNN)</li>
                            <li>Decision Tree</li>
                            <li>Linear SVM</li>
                            <li>Random Forest</li>
                        </ul>
                        <p>All trained on SMOTE-balanced data, tested on original unbalanced data. PCA and feature importances used for model interpretation.</p>
                    </div>
                );
            case 'Results':
                return (
                    <div className="new-card">
                        <h3>Results</h3>
                        <ul>
                            <li>KNN: 92.31%</li>
                            <li>Decision Tree: 93.49%</li>
                            <li>Linear SVM: 55.12%</li>
                            <li>Random Forest: 93.56%</li>
                        </ul>
                        <p><strong>Top Features:</strong> Years Employed, Credit Score, Income, Prior Default Status</p>
                        <p>Using only top 4 features still achieved 89.39% (DT) and 93.22% (RF) accuracy.</p>
                    </div>
                );
            case 'Conclusion':
                return (
                    <div className="new-card">
                        <h3>Conclusion</h3>
                        <p>Non-linear models like Decision Tree and Random Forest outperformed SVM, showing complex relationships in the data.</p>
                        <p>KNN showed strong local pattern classification. Feature analysis confirms importance of employment, credit score, and income.</p>
                        <p>Preprocessing and balancing significantly improved results. Averaging models provided reliable performance while managing false positives and negatives effectively.</p>
                    </div>
                );
            case 'Report':
                return (
                    <div className="new-card" style={{ height: '600px', width: '600px' }}>
                        <h3>Final Report</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Machine_Learning_Final_Writeup.pdf#toolbar=0&navpanes=0&scrollbar=0`}
                            width="100%"
                            height="100%"
                            style={{ border: 'none', overflow: "hidden", borderRadius: '10px' }}
                            title="Final Report PDF"
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Credit Approval Prediction Using Machine Learning</h2>
                <p className="description">
                    Rob Bundy · Professor Basit · ML Independent Study · May 4th, 2025
                </p>

                <div className="tab-bar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active-tab' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {renderContent()}

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

export default CreditApprovalProject;
