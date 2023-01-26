import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
import { getCharity } from '~/api.server';
import { ListItemDetails } from '~/components/Charity/ListItemDetails';
import { CharitySchema } from '~/types/Charity.types';

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;
  if (!id) throw json({ error: 'No id provided' }, { status: 400 }); // make TS happy

  const item = await getCharity(id);
  if (!item) throw json({ error: 'Charity not found' }, { status: 404 });

  const parsedItem = CharitySchema.parse(item);

  const formattedItem = {
    ...parsedItem,
    ein: parsedItem.ein.replace(/(\d{2})(\d{7})/, '$1-$2'),
  };
  return json(formattedItem);
};

export const CatchBoundary = () => {
  const { status } = useCatch();
  const message =
    status === 404
      ? '404 Charity not found'
      : `${status} Oops... Something went wrong`;

  return (
    <article>
      <h2>{message}</h2>
    </article>
  );
};

const Default = () => {
  const charity = useLoaderData<typeof loader>();
  return <ListItemDetails charity={charity} />;
};

export default Default;
