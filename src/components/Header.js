import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';

const navItems = [
  { to: '/Website', label: 'Home' },
  { to: '/Website/aboutme', label: 'About' },
  { to: '/Website/assortedprojects', label: 'Projects' },
  { to: '/Website/hostedwebsites', label: 'Websites' },
  { to: '/Website/classassignments', label: 'Class Work' },
  { to: '/Website/videogames', label: 'Games' }
];

const Header = () => {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Lock body scroll while menu is open and restore when closed
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  // Accessibility: trap focus inside mobile nav and handle Escape
  useEffect(() => {
    if (!open) return;
    const nav = navRef.current;
    if (!nav) return;

    const focusable = Array.from(nav.querySelectorAll('a, button'))
      .filter(el => !el.hasAttribute('disabled'));

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab') {
        if (focusable.length === 0) return;
        if (e.shiftKey) {
          // shift+tab
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // tab
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    // focus first element for keyboard users
    first?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const handleNavClick = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/Website" className="brand-link">Rob Bundy</Link>
          <span className="brand-sub">Software Engineer</span>
        </div>

        <button
          ref={toggleRef}
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(o => !o)}
        >
          <span className="burger" aria-hidden="true" />
        </button>

        <nav
          id="main-navigation"
          ref={navRef}
          className={`main-nav ${open ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item, idx) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${loc.pathname === item.to ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a className="cta-button" href="mailto:robbielbundy@gmail.com">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
