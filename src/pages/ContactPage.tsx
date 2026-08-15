import { Github, Linkedin, Mail } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { profile } from '../data/profile';

export function ContactPage() {
  const contactLinks = [
    { label: 'Email', href: `mailto:${profile.email}`, detail: profile.email, icon: Mail },
    { label: 'GitHub', href: profile.githubUrl, detail: 'github.com/RobBundy2002', icon: Github },
    { label: 'LinkedIn', href: profile.linkedinUrl, detail: 'linkedin.com/in/rob-bundy-192035223', icon: Linkedin }
  ];

  return (
    <>
      <Seo
        title="Contact | Rob Bundy"
        description="Contact Rob Bundy by email, GitHub, or LinkedIn."
        path="/contact"
      />
      <section className="page-hero compact">
        <span className="eyebrow">Contact</span>
        <h1>Connect with Rob Bundy.</h1>
        <p>No contact form or backend is needed. Use email, GitHub, or LinkedIn below.</p>
      </section>
      <section className="page-section contact-grid" aria-label="Contact links">
        {contactLinks.map(({ label, href, detail, icon: Icon }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
            <Icon size={22} aria-hidden="true" />
            <span>{label}</span>
            <strong>{detail}</strong>
          </a>
        ))}
      </section>
    </>
  );
}
