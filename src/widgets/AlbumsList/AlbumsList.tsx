import { Link } from "react-router-dom";
import type { Album } from "../../entities/album/model/types";
import styles from "./AlbumsList.module.css";

type AlbumsListProps = {
  albums: Album[];
};

function AlbumsList({ albums }: AlbumsListProps) {
  return (
    <ul className={styles.list}>
      {albums.map((album) => (
        <li key={album.id} className={styles.album}>
          <Link
            to={`/albums/${album.id}/photos`}
            state={album.title}
            className={styles.link}
          >
            {album.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AlbumsList;
