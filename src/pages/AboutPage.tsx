import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '../components/ui/Seo';

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | Rob Bundy"
        description="About Rob Bundy's software engineering background, backend and platform interests, Georgia Tech HCI studies, and product-oriented side projects."
        path="/about"
      />
      <section className="about-page">
        <div className="about-image">
          <img src="/Website/Images/Grad.jpg" alt="Rob Bundy at University of Virginia graduation" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h1>Software engineer focused on practical workflow problems.</h1>
          <p>
            Rob Bundy is a Software Engineer II at GA-Intelligence / General Atomics and a Georgia Tech
            M.S. Computer Science student specializing in Human-Computer Interaction. He graduated from the
            University of Virginia in May 2025 with a B.A. in Computer Science and a minor in Religious Studies.
          </p>
          <p>
            His work sits between backend systems, platform engineering, developer tooling, infrastructure,
            CI/CD, and full-stack products. The common thread is usability: building tools where architecture,
            workflow modeling, and interface decisions make difficult work easier to reason about.
          </p>
          <p>
            Side projects are treated as engineering laboratories. Northstar handles Kubernetes operations
            workflows, CareerBoard models a collaborative job search, UJLP supports a real publication, and
            ResumeGPT tests privacy-first frontend architecture.
          </p>
          <Link to="/projects" className="button primary">
            Explore Projects <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
