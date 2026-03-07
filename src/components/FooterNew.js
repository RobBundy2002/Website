import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterNew = () => {
  return (
    <footer className="site-footer footer-simple">
      <div className="footer-inner-simple">
        <div className="footer-left">
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
