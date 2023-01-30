import type { ErrorBoundaryComponent } from '@remix-run/node';
import { Outlet, useLocation } from '@remix-run/react';
import { Header } from '~/components/Header';
import { LinkButton } from '~/components/LinkButton';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col gap-6 max-w-[1024px] w-full px-6 py-8">
    <Header />

    {children}
  </div>
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

        <LinkButton to={location}>Try again</LinkButton>
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
