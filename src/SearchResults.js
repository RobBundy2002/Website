import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './StyleSheets/SharedStyles.css';
import { searchIndex } from './data/portfolioData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  const results = q
    ? searchIndex
        .map((item) => {
          const title = item.title.toLowerCase();
          const body = item.body.toLowerCase();
          const titleMatch = title.includes(q) ? 2 : 0;
          const bodyMatch = body.includes(q) ? 1 : 0;
          const wordMatches = q
            .split(/\s+/)
            .filter((word) => title.includes(word) || body.includes(word)).length;
          return { item, score: titleMatch + bodyMatch + wordMatches };
        })
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((result) => result.item)
    : [];

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
