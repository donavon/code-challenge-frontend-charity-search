import { useCharitySearchParams } from '~/hooks/useCharitySearchParams';
import { Nav } from './Nav';

type ListLayoutProps = {
  isLastPage: boolean;
  children: React.ReactNode;
};

export const ListLayout = ({ isLastPage, children }: ListLayoutProps) => {
  const { term, page } = useCharitySearchParams();

  return (
    <>
      <Nav currentPage={page} isLastPage={isLastPage} term={term} />
      {children}
    </>
  );
};
