import { Outlet } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/navigation/Header';
import { ScrollToTop } from '../components/layout/ScrollToTop';

export function RootLayout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
