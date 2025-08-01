import { Link } from "react-router-dom";
import type { Album } from "../../entities/album/model/types";
import styles from "./AlbumsList.module.css";
import ItemList from "../../shared/ui/ItemList/ItemList";
import { capitalize } from "../../shared/lib/string/capitalize";

type AlbumsListProps = {
  albums: Album[];
};

function AlbumsList({ albums }: AlbumsListProps) {
  return (
    <ItemList
      items={albums}
      ulClassName={styles.list}
      liClassName={styles.album}
      renderItem={(album) => (
        <Link
          to={`/albums/${album.id}/photos`}
          state={album.title}
          className={styles.link}
        >
          {capitalize(album.title)}
        </Link>
      )}
    />
  );
}

export default AlbumsList;
