import { useSearchParams } from '@remix-run/react';
import type { Charity } from '~/types/Charity.types';

type ListItemDetailsProps = {
  charity: Charity;
};

export const ListItemDetails = ({ charity }: ListItemDetailsProps) => {
  const { logo, name, city, state, about, ein, mission, website } = charity;

  // If we were redirected here from the create page, it will have a `?new` query string.
  // Maybe display a toast instead if we were actually styling this, but for now just
  // inform the user that the charity was successfully created.
  const [searchParams] = useSearchParams();
  const isNew = searchParams.get('new') !== null;

  return (
    <article>
      <h2>
        {name}
        {isNew && ' was successfully created'}
      </h2>
      <img src={logo} alt={name} width="128" />

      <dl>
        <dt>City</dt>
        <dd>{city}</dd>

        <dt>State</dt>
        <dd>{state}</dd>

        <dt>About</dt>
        <dd>{about}</dd>

        <dt>EIN</dt>
        <dd>{ein}</dd>

        <dt>Mission</dt>
        <dd>{mission}</dd>

        <dt>Website</dt>
        <dd>
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </dd>
      </dl>
    </article>
  );
};
