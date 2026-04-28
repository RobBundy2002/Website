import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';

const navItems = [
  { to: '/Website', label: 'Home' },
  { to: '/Website/aboutme', label: 'About' },
  { to: '/Website/education', label: 'Education' },
  { to: '/Website/projects', label: 'Projects' },
  { to: '/Website/classassignments', label: 'Class Work' },
  { to: '/Website/videogames', label: 'Games' }
];

const SearchBox = () => {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);

  // Build a richer index including projects and pages
  const INDEX = [];
  try {
    const projModule = require('../Projects');
    const PROJECT_LIST = projModule.PROJECT_LIST || [];
    // base pages
    INDEX.push({ title: 'Home', path: '/Website', body: 'Home Rob Bundy projects websites games' });
    INDEX.push({ title: 'About', path: '/Website/aboutme', body: 'About Me education skills timeline' });
    INDEX.push({ title: 'Education', path: '/Website/education', body: 'UVA Georgia Tech coursework computer science' });
    INDEX.push({ title: 'Class Work', path: '/Website/classassignments', body: 'Coursework assignments' });

    PROJECT_LIST.forEach(p => {
      INDEX.push({ title: p.title, path: p.link, body: p.description + ' ' + (p.technologies || []).join(' ') });
    });
  } catch (e) {
    // fallback
    INDEX.push({ title: 'Home', path: '/Website', body: 'Home Rob Bundy projects websites games' });
    INDEX.push({ title: 'About', path: '/Website/aboutme', body: 'About Me education skills timeline' });
  }

  useEffect(() => {
    if (q.trim() === '') { setResults([]); return; }
    // Use Fuse.js for fuzzy search
    const Fuse = require('fuse.js');
    const fuse = new Fuse(INDEX, { keys: ['title', 'body'], threshold: 0.4, includeScore: true, minMatchCharLength: 2 });
    const out = fuse.search(q).slice(0,8).map(r => r.item);
    setResults(out);
  }, [q]);

  return (
    <div className="header-search-wrapper">
      <input className="header-search-input" placeholder="Search this site..." value={q} onChange={e => setQ(e.target.value)} aria-label="Search site" />
      <div className={`search-dropdown ${results.length ? 'open' : ''}`} role="listbox">
        {results.map(r => (
          <a key={r.path} href={r.path} className="search-item" role="option">{r.title} — {r.body.split(' ').slice(0,8).join(' ')}...</a>
        ))}
        {q && results.length === 0 && <div className="search-item">No results</div>}
      </div>
    </div>
  );
};

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
          <Link to="/Website" className="brand-link">
            Rob Bundy
          </Link>
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

          {/* Insert Resume and Search immediately after 'Games' nav item (desktop-only) */}
          <a className="nav-link desktop-only" href="/Rob-Resume.pdf" download style={{marginLeft:12}}>Resume</a>
          <div className="header-search desktop-only" style={{marginLeft:8}}>
            <SearchBox />
          </div>

        </nav>


      </div>
    </header>
  );
};

export default Header;
