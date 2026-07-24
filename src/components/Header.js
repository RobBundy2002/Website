import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { Search, X } from 'lucide-react';
import { searchIndex } from '../data/portfolioData';

const navItems = [
  { to: '/Website', label: 'Home' },
  { to: '/Website/aboutme', label: 'About' },
  { to: '/Website/education', label: 'Education' },
  { to: '/Website/projects', label: 'Projects' },
  { to: '/Website/classassignments', label: 'Class Work' },
  { to: '/Website/videogames', label: 'Games' }
];

const HeaderMark = () => (
  <svg className="header-brand-diagram" viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="header-mark-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stopColor="#6ee7b7" />
        <stop offset="1" stopColor="#f6d365" />
      </linearGradient>
    </defs>
    <path d="M10 14L24 8L38 14V34L24 40L10 34Z" fill="none" stroke="url(#header-mark-gradient)" strokeWidth="2" />
    <path d="M10 14L24 22L38 14M24 22V40" fill="none" stroke="url(#header-mark-gradient)" strokeWidth="2" />
    <circle cx="24" cy="22" r="3.5" fill="#f6d365" />
  </svg>
);

const SearchOverlay = ({ open, onClose }) => {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 50);
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  const query = q.trim().toLowerCase();
  const results = query
    ? searchIndex
        .map((item) => {
          const title = item.title.toLowerCase();
          const body = item.body.toLowerCase();
          const titleMatch = title.includes(query) ? 2 : 0;
          const bodyMatch = body.includes(query) ? 1 : 0;
          const wordMatches = query
            .split(/\s+/)
            .filter((word) => title.includes(word) || body.includes(word)).length;
          return { item, score: titleMatch + bodyMatch + wordMatches };
        })
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map((result) => result.item)
    : searchIndex.slice(6, 11);

  if (!open) return null;

  return (
    <div className="command-overlay" role="dialog" aria-modal="true" aria-label="Search portfolio">
      <button className="command-backdrop" aria-label="Close search" onClick={onClose} />
      <div className="command-panel">
        <div className="command-input-row">
          <Search size={20} />
          <input
            ref={inputRef}
            className="command-input"
            placeholder="Search projects, tech, games, coursework..."
            value={q}
            onChange={(event) => setQ(event.target.value)}
          />
          <button className="icon-button" aria-label="Close search" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="command-results">
        {results.map(r => (
          <Link key={`${r.path}-${r.title}`} to={r.path} className="command-item" onClick={onClose}>
            <span>{r.title}</span>
            <small>{r.body.split(' ').slice(0, 12).join(' ')}</small>
          </Link>
        ))}
        {q && results.length === 0 && <div className="command-empty">No results</div>}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Lock body scroll while menu is open and restore when closed
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, []);

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
            <HeaderMark />
            <span>Rob Bundy</span>
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
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${loc.pathname === item.to ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}

          <button
            className="search-trigger"
            onClick={() => {
              setOpen(false);
              setSearchOpen(true);
            }}
            aria-label="Open search"
          >
            <Search size={16} />
            <span>Search</span>
          </button>

        </nav>
      </div>
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </header>
  );
};

export default Header;
