import { Link } from '@remix-run/react';
import { LinkButton } from '~/components/LinkButton';
import { useCharitySearchParams } from '~/hooks/useCharitySearchParams';
import { Search } from './Search';

type NavProps = {
  isLastPage: boolean;
};

export const Nav = ({ isLastPage }: NavProps) => {
  const { term, page } = useCharitySearchParams();

  const isFirstPage = page === 1;
  const searchQuery = term ? `&q=${encodeURIComponent(term)}` : '';

  return (
    <nav>
      <ul>
        <li>
          <LinkButton
            aria-disabled={isFirstPage}
            to={`/charities?page=${page - 1}${searchQuery}`}
          >
            &lt; Prev
          </LinkButton>
        </li>

        <li>Page: {page}</li>

        <li>
          <LinkButton
            aria-disabled={isLastPage}
            to={`/charities?page=${page + 1}${searchQuery}`}
          >
            Next &gt;
          </LinkButton>
        </li>
      </ul>

      <ul>
        <li>
          <LinkButton to="/charities/new">Add Charity</LinkButton>
        </li>
      </ul>

      <Search term={term} />
    </nav>
  );
};
