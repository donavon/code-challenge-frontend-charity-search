import { api } from '~/services/api.server';

const { charities } = api();
const {
  show: getCharity,
  create: createCharity,
  list: getCharities,
} = charities;

/**
 * Exports a wrapper around the current API with names that make more sense to the BFF.
 * For example, `show` is renamed to `getCharity` to make it more clear what it does
 * as we aren't actually "showing" anything in the BFF, but instead fetching data.
 **/
export { getCharity, createCharity, getCharities };
