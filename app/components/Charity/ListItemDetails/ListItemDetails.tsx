import { useSearchParams } from '@remix-run/react';
import type { Charity } from '~/types/Charity.types';
import { Detail } from './Detail';

type ListItemDetailsProps = {
  charity: Charity;
};

const WebIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

export const ListItemDetails = ({ charity }: ListItemDetailsProps) => {
  const { logo, name, city, state, about, ein, mission, website } = charity;

  // If we were redirected here from the create page, it will have a `?new` query string.
  // Maybe display a toast instead if we were actually styling this, but for now just
  // inform the user that the charity was successfully created.
  const [searchParams] = useSearchParams();
  const isNew = searchParams.get('new') !== null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        <img
          src={logo}
          alt={name}
          width="296"
          height="296"
          className="object-cover w-[296px] h-[296px] overflow-hidden rounded-lg"
        />
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col">
            <h2 className="text-4xl text-highlighttext">
              {name}
              {isNew && ' was successfully created'}
            </h2>
            <div className="">
              {city}, {state}
            </div>
          </div>
          <div className="flex gap-1">
            <WebIcon />
            <a
              className="text-link"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              {website}
            </a>
          </div>
          <Detail title="EIN">{ein}</Detail>
          <Detail title="Mission">{mission}</Detail>
        </div>
      </div>
      <dl className="flex flex-col gap-4">
        <Detail title="About">{about}</Detail>
      </dl>
    </div>
  );
};
