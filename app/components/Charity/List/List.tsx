import type { CharityList } from '~/types/Charity.types';
import { ListItem } from '../ListItem';

type ListProps = {
  list: CharityList[];
};

export const List = ({ list }: ListProps) => (
  <ul className="flex flex-col gap-4">
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);
