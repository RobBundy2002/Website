import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './StyleSheets/SharedStyles.css';

const INDEX = [
  { title: 'Home', path: '/Website', body: 'Home Rob Bundy projects websites games' },
  { title: 'About', path: '/Website/aboutme', body: 'About Me education skills timeline' },
  { title: 'Projects', path: '/Website/projects', body: 'Projects AIVestor ResumeGPT Proverbial Plates' },
  { title: 'Education', path: '/Website/education', body: 'University of Virginia Georgia Tech coursework computer science' },
  { title: 'Class Work', path: '/Website/classassignments', body: 'Class assignments coursework' }
];

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQ = (searchParams.get('q') || '').trim();
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (q.trim() === '') {
        setSearchParams({});
      } else {
        setSearchParams({ q: q.trim() });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [q, setSearchParams]);

  const qLower = q.trim().toLowerCase();
  const results = qLower ? INDEX.filter(item => (item.title + ' ' + item.body).toLowerCase().includes(qLower)) : [];

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Search</h1>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search this site..." style={{padding:8, borderRadius:8, border:'1px solid var(--border-color)', width:'100%', maxWidth:480}} />
        <p style={{color:'var(--text-secondary)', marginTop:8}}>Query: "{q}"</p>
        <div className="projects-grid" style={{marginTop:16}}>
          {results.map(r => (
            <div className="project-card enhanced-card" key={r.path}>
              <div className="project-content">
                <div className="project-title">{r.title}</div>
                <p style={{color:'var(--text-secondary)'}}>{r.body}</p>
                <Link to={r.path} className="live-link" style={{marginTop:8}}>Open <span className="link-arrow">→</span></Link>
              </div>
            </div>
          ))}
          {q && results.length === 0 && <p style={{color:'var(--text-secondary)'}}>No results found.</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
