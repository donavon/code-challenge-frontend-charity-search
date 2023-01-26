import { Link } from '@remix-run/react';
import { Search } from './Search';

type NavProps = {
  currentPage: number;
  isLastPage: boolean;
  term: string;
};

export const Nav = ({ currentPage, isLastPage, term }: NavProps) => {
  const isFirstPage = currentPage === 1;
  const searchQuery = term ? `&q=${encodeURIComponent(term)}` : '';

  return (
    <nav>
      <ul>
        <li>
          {isFirstPage ? (
            <span role="button" className="secondary outline">
              &lt; Prev
            </span>
          ) : (
            <Link
              role="button"
              to={`/charities?page=${currentPage - 1}${searchQuery}`}
              prefetch="intent"
            >
              &lt; Prev
            </Link>
          )}
        </li>
        <li>
          <span>Page: {currentPage}</span>
        </li>

        <li>
          {isLastPage ? (
            <span role="button" className="secondary outline">
              Next &gt;
            </span>
          ) : (
            <Link
              role="button"
              to={`/charities?page=${currentPage + 1}${searchQuery}`}
              prefetch="intent"
            >
              Next &gt;
            </Link>
          )}
        </li>
      </ul>

      <ul>
        <li>
          <Link role="button" to="/charities/new" prefetch="intent">
            Add Charity
          </Link>
        </li>
      </ul>

      <Search term={term} />
    </nav>
  );
};
