import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterMark = () => (
  <svg className="footer-mark-diagram" viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="footer-mark-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stopColor="#6ee7b7" />
        <stop offset="1" stopColor="#f6d365" />
      </linearGradient>
    </defs>
    <path d="M10 14L24 8L38 14V34L24 40L10 34Z" fill="none" stroke="url(#footer-mark-gradient)" strokeWidth="2" />
    <path d="M10 14L24 22L38 14M24 22V40" fill="none" stroke="url(#footer-mark-gradient)" strokeWidth="2" />
    <circle cx="24" cy="22" r="3.5" fill="#f6d365" />
  </svg>
);

const FooterNew = () => {
  return (
    <footer className="site-footer footer-simple">
      <div className="footer-inner-simple">
        <div className="footer-left">
          <FooterMark />
          <h4 className="footer-name">Rob Bundy</h4>
        </div>
        <div className="footer-right footer-icons">
          <a href="https://github.com/RobBundy2002" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rob-bundy-192035223/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:robbielbundy@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
