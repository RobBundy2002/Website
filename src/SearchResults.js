import React from 'react';
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
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  const results = q ? INDEX.filter(item => (item.title + ' ' + item.body).toLowerCase().includes(q)) : [];

  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Search Results</h1>
        <p style={{color:'var(--text-secondary)'}}>Query: "{q}"</p>
        {q === '' && <p style={{color:'var(--text-secondary)'}}>Enter a search term in the header to find pages.</p>}
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
