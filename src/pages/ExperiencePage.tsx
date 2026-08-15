import { Seo } from '../components/ui/Seo';
import { SectionHeading } from '../components/ui/SectionHeading';
import { education, experience } from '../data/experience';
import { skillGroups } from '../data/skills';

export function ExperiencePage() {
  return (
    <>
      <Seo
        title="Experience | Rob Bundy"
        description="Professional experience, education, and engineering skills for Rob Bundy."
        path="/experience"
      />
      <section className="page-hero compact">
        <span className="eyebrow">Experience</span>
        <h1>Backend and platform-oriented engineering work.</h1>
        <p>
          Professional work is summarized at a public, non-proprietary level, with emphasis on engineering
          themes rather than private implementation details.
        </p>
      </section>

      <section className="page-section timeline-section">
        <SectionHeading title="Professional Timeline" />
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.role}-${item.dates}`}>
              <time>{item.dates}</time>
              <div>
                <h2>{item.role}</h2>
                <strong>{item.organization}</strong>
                <p>{item.summary}</p>
                <ul className="tech-list compact">
                  {item.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section two-column-section">
        <div>
          <SectionHeading title="Education" />
          <div className="stacked-cards">
            {education.map((item) => (
              <article key={item.school}>
                <span>{item.dates}</span>
                <h3>{item.school}</h3>
                <p>{item.credential}</p>
                <p>{item.detail}</p>
                {item.note ? <p>{item.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="Technical Skills" />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <ul className="tech-list compact">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
