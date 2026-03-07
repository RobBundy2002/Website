
const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'C', 'C#', 'JavaScript', 'SQL', 'Bash', 'YAML'] },
  { group: 'Frameworks', items: ['Spring Boot', 'Spring Cloud Stream', 'React', 'Node.js', 'Express', 'JUnit', 'Maven'] },
  { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Kafka', 'Helm', 'GitLab CI/CD', 'Git'] },
  { group: 'Tools', items: ['Jira', 'Confluence', 'IntelliJ', 'PyCharm', 'k9s'] },
  { group: 'Web', items: ['HTML', 'CSS', 'Tailwind CSS', 'Axios'] }
];

const SkillsGrid = () => {
  return (
    <section className="skills-grid-enhanced" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">Technical Skills & Technologies</h2>
      <div className="skills-grid-cards">
        {skills.map((s) => (
          <div className={`skills-card`} key={s.group}>
            <h3 className="skills-group">{s.group}</h3>
            <div className="skills-tags">
              {s.items.map((it) => (
                <span
                  key={it}
                  className={`skill-tag static`}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-visualizer">
        <div className="skills-legend">
          <div className="legend-item"><span className="legend-dot primary"/> Core</div>
          <div className="legend-item"><span className="legend-dot secondary"/> Familiar</div>
          <div className="legend-item"><span className="legend-dot tertiary"/> Tools</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
