import Header from './Header';
import Hero from './Hero';
import FooterNew from './FooterNew';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // Show the big site hero only on the root /Website path.
  const showHero = pathname === '/Website' || pathname === '/';

  return (
    <div className="site-layout">
      <Header />
      {showHero && <Hero />}
      <main className="site-main">
        {children}
      </main>
      <FooterNew />
    </div>
  );
};

export default Layout;
