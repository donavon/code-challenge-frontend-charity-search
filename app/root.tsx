import type { MetaFunction, LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStylesheet from '~/tailwind.css';

export const meta: MetaFunction = () => {
  return {
    title: 'Charity Search',
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
  };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheet }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-text flex flex-col items-center">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
