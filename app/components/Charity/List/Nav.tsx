import { useCharitySearchParams } from '~/hooks/useCharitySearchParams';
import { AddCharityButton } from './AddCharityButton';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Search } from './Search';

type NavProps = {
  isLastPage: boolean;
};

export const Nav = ({ isLastPage }: NavProps) => {
  const { term, page } = useCharitySearchParams();

  const isFirstPage = page === 1;
  const searchQuery = term ? `&q=${encodeURIComponent(term)}` : '';

  return (
    <nav className="flex w-full gap-6 sm:gap-2 justify-between items-center">
      <div className="flex items-center gap-2">
        <PrevButton
          aria-disabled={isFirstPage}
          to={`/charities?page=${page - 1}${searchQuery}`}
        />

        <div className="flex justify-center md:hidden w-[80px]">
          Page {page}
        </div>

        <NextButton
          aria-disabled={isLastPage}
          to={`/charities?page=${page + 1}${searchQuery}`}
        />
      </div>

      <div className="flex items-center justify-center md:justify-start">
        <AddCharityButton />
      </div>

      <Search term={term} />
    </nav>
  );
};
