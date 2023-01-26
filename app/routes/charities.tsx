import type { ErrorBoundaryComponent } from '@remix-run/node';
import { Link, Outlet, useLocation } from '@remix-run/react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <small>
      minimally styled with{' '}
      <a href="https://picocss.com/" target="_blank" rel="noreferrer">
        Pico CSS
      </a>
    </small>
    <Link to="/charities" prefetch="intent">
      <h1>Charities</h1>
    </Link>

    {children}
  </>
);

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  const location = useLocation();

  return (
    <Layout>
      <article>
        <h2>Oops... Something went wrong</h2>
        <details>
          <summary>See details</summary>
          <pre>{error.message}</pre>
        </details>

        <Link role="button" to={location} prefetch="intent">
          Try again
        </Link>
      </article>
    </Layout>
  );
};

const Charities = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default Charities;
