import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Robert Bundy</strong>
        <p>Backend, platform, infrastructure, and full-stack product engineering.</p>
      </div>
      <nav aria-label="Footer links">
        <a href={`mailto:${profile.email}`}>
          <Mail size={16} aria-hidden="true" />
          Email
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          <Github size={16} aria-hidden="true" />
          GitHub
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin size={16} aria-hidden="true" />
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}
