import { Form } from '@remix-run/react';
import { SearchButton } from './SearchButton';

type SearchProps = {
  term: string;
};

export const Search = ({ term }: SearchProps) => (
  <Form
    action="/charities"
    method="get"
    className="flex flex-1 max-w-[420px] w-[420px]"
  >
    <input
      className="text-slate-800 rounded-l-md px-4 w-full placeholder-slate-300 focus:placeholder-opacity-0 "
      type="search"
      name="q"
      defaultValue={term}
      placeholder="Search…"
    />
    <SearchButton />
  </Form>
);
