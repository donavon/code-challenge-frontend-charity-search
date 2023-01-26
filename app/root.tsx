import type { MetaFunction, LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import picoCssUrl from '@picocss/pico/css/pico.css';

export const meta: MetaFunction = () => {
  return {
    title: 'Charity Search',
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
  };
};

// load the Pico CSS stylesheet for minimal styling
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: picoCssUrl }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
