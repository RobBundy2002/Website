import Header from './Header';
import FooterNew from './FooterNew';

const Layout = ({ children }) => {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        {children}
      </main>
      <FooterNew />
    </div>
  );
};

export default Layout;
