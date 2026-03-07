import CaseStudy from '../components/CaseStudy';

const CreditApprovalProject = () => {
  const sections = [
    {
      heading: 'About',
      content: `This project uses the UCI Credit Approval dataset to predict credit application outcomes using various machine learning models. The dataset contains about 690 entries and roughly 15 attributes, with an approval status label. The work involved thorough preprocessing, feature engineering, model selection, and evaluation using cross-validation.`
    },
    {
      heading: 'Role',
      content: `Built the data pipeline and modeling experiments: handled missing values and categorical encoding, applied several models (KNN, Decision Trees, Random Forests, SVM), and evaluated using standard classification metrics. Produced reproducible notebooks and a final write-up.`
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Credit Approval Prediction"
          subtitle="UCI Credit Approval Dataset"
          image="Images/ml.jpg"
          date="2024"
          role="ML Engineer"
          tech={["Python", "scikit-learn", "Pandas"]}
          links={[]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <a href="/Website/classassignments" className="back-button">← Back to Assignments</a>
        </div>
      </div>
    </div>
  );
};

export default CreditApprovalProject;
