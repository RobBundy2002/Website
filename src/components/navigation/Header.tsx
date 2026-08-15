import { Github, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { profile } from '../../data/profile';

const links = [
  { label: 'Work', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="nav-wrap">
        <NavLink className="brand" to="/" onClick={close}>
          Rob Bundy
        </NavLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub profile">
            <Github size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation" hidden={!open}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={close} className={location.pathname.startsWith(link.to) ? 'active' : ''}>
            {link.label}
          </NavLink>
        ))}
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" onClick={close}>
          GitHub
        </a>
      </nav>
    </header>
  );
}
