import { Nav } from './Nav';

type ListLayoutProps = {
  isLastPage: boolean;
  children: React.ReactNode;
};

export const ListLayout = ({ isLastPage, children }: ListLayoutProps) => {
  return (
    <>
      <Nav isLastPage={isLastPage} />
      {children}
    </>
  );
};
