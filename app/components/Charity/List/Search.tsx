import { Form } from '@remix-run/react';

type SearchProps = {
  term: string;
};

export const Search = ({ term }: SearchProps) => (
  <Form action="/charities" method="get">
    <ul>
      <li>
        <input type="search" name="q" defaultValue={term} />
      </li>
      <li>
        <button type="submit">Search</button>
      </li>
    </ul>
  </Form>
);
