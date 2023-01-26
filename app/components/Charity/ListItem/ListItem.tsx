import { Link } from '@remix-run/react';
import type { CharityList } from '~/types/Charity.types';

type ListItemProps = {
  item: CharityList;
};

export const ListItem = ({ item }: ListItemProps) => {
  const { id, logo, name, city, state } = item;

  return (
    <Link to={`/charities/${id}/`} prefetch="intent">
      <article style={{ display: 'flex', gap: '16px' }}>
        <img src={logo} alt={name} width="64" height="64" />

        <div>
          <div>{name}</div>
          <div>
            {city}, {state}
          </div>
        </div>
      </article>
    </Link>
  );
};
