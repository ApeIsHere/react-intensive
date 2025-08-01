import type { ReactNode } from "react";
import styles from "./ItemList.module.css";

type WithId = {
  id: string | number;
};

type ItemListProps<T extends WithId> = {
  items: T[];
  ulClassName?: string;
  liClassName?: string;
  renderItem: (item: T) => ReactNode;
};

function ItemList<T extends WithId>({
  items,
  ulClassName,
  liClassName,
  renderItem,
}: ItemListProps<T>) {
  return (
    <ul className={`${styles.list} ${ulClassName}`}>
      {items.map((item) => (
        <li key={item.id} className={`${styles.item} ${liClassName}`}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
