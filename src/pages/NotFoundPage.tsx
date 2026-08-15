import { Link } from 'react-router-dom';
import { Seo } from '../components/ui/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Rob Bundy" description="The requested portfolio page could not be found." path="/404" />
      <section className="page-hero compact">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The route does not exist in the portfolio.</p>
        <Link to="/projects" className="button primary">
          View Projects
        </Link>
      </section>
    </>
  );
}
