import type { ErrorBoundaryComponent, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData, useLocation } from '@remix-run/react';
import { getCharities } from '~/api.server';
import { List } from '~/components/Charity/List';
import { ListLayout } from '~/components/Charity/List/ListLayout';
import { LinkButton } from '~/components/LinkButton';
import { useCharitySearchParams } from '~/hooks/useCharitySearchParams';
import { CharityListSchema } from '~/types/Charity.types';

const parseInt = (str?: string | null) => {
  if (!str) return undefined;
  const num = Number(str);
  return Number.isNaN(num) ? undefined : num;
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const term = url.searchParams.get('q') ?? '';
  const pageStr = url.searchParams.get('page');
  const page = parseInt(pageStr) ?? 1;

  // items contains all fields, but we only want to return a subset
  const items = await getCharities({ page, term });
  // list is a subset of the fields that are used in the UI
  const list = CharityListSchema.array().parse(items);
  if (list.length === 0) throw json('Page not found', { status: 404 });

  // if we have fewer than 10 items, we're on the last page
  if (list.length < 10) return json({ list, isLastPage: true });

  // check to see if the next page exists. if it doesn't, we're on the last page and there is an even 10 items.
  // this takes more time, but it's a better UX. one huge downside to this approach is that it not only doubles
  // the access time, but also doubles and chances of getting an error from the API.
  // TODO an even better approach would be to change the API to return this indicator
  const nextPage = await getCharities({ page: page + 1, term });
  const isLastPage = nextPage.length === 0;
  return json({ list, isLastPage });
};

// catch any errors thrown by the loader and render "try again" withing the navigation
export const ErrorBoundary: ErrorBoundaryComponent = () => {
  const location = useLocation();

  return (
    <ListLayout isLastPage={true}>
      <article>
        <h2>Oops... Something went wrong</h2>
        <LinkButton to={location}>Try again</LinkButton>
      </article>
    </ListLayout>
  );
};

// catch thrown 404s and render the appropriate message
export const CatchBoundary = () => {
  const { page } = useCharitySearchParams();
  const message =
    page === 1
      ? 'No charities fit your search query' // Must be no search results if on page 1 (e.g. search for "qwerty")
      : '404 Page not found'; // In case the user hacks the URL
  return (
    <ListLayout isLastPage={true}>
      <article>{message}</article>
    </ListLayout>
  );
};

const ListRoute = () => {
  const { list, isLastPage } = useLoaderData<typeof loader>();

  return (
    <ListLayout isLastPage={isLastPage}>
      <List list={list} />
    </ListLayout>
  );
};

export default ListRoute;
