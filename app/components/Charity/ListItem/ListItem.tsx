import { Link } from '@remix-run/react';
import type { CharityList } from '~/types/Charity.types';

type ListItemProps = {
  item: CharityList;
};

export const ListItem = ({ item }: ListItemProps) => {
  const { id, logo, name, city, state } = item;

  return (
    <li>
      <Link
        to={`/charities/${id}/`}
        prefetch="intent"
        className="flex gap-4 overflow-hidden bg-slate-800 rounded-md items-center"
      >
        <img
          src={logo}
          alt={name}
          width="80"
          height="80"
          className="object-cover w-20 h-20"
        />

        <div className="py-2 pr-2 overflow-hidden">
          <div className="text-xl text-highlighttext truncate">{name}</div>
          <div className="text-sm truncate">
            {city}, {state}
          </div>
        </div>
      </Link>
    </li>
  );
};
