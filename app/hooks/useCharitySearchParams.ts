import { useSearchParams } from '@remix-run/react';
import { parseNumber } from '~/utils/parseNumber';

/**
 * Returns `term` and `page` from the URL.
 * `page` will be converted to a number and will default to 1 if it's not a number or not present.
 * `term` will default to an empty string if it's not present.
 **/
export const useCharitySearchParams = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('q') ?? '';
  const pageStr = searchParams.get('page');
  const page = parseNumber(pageStr) ?? 1;
  return { term, page };
};
