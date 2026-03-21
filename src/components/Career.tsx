import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Fidelity Investments</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built end-to-end transactional customer-facing screens in the
              NetBenefits monorepo app with complete UI, routing, and API
              integration. Upgraded server-side code maturity from Level 2 to
              Level 4, resolving 50+ SonarQube issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Ab-inBev</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Automated data processing tasks with Python achieving 80%
              reduction in manual workload. Leveraged SQL for data extraction
              and Power BI for crafting interactive dashboards, improving
              decision-making by 70%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Cartosense</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Researched and collaborated on Python scripts, enhancing the
              precision and accuracy of a smart brain surgical instrument by
              95%, leading to more precise surgical procedures and improved
              patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
